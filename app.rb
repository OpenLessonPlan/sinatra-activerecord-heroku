require 'sinatra'
require 'sinatra/activerecord'
require './config/environments' #database configuration
require './models/model'     #Model class
require './models/simplequestion'    #Simplequestion class
require './models/questionmap'    #Questionmap class


get '/' do
	erb :index
end

get '/admin' do
	erb :admin
end

post '/submit' do
	@model = Model.new(params[:model])
	if @model.save
		redirect '/models'
	else
		"Sorry, there was an error!"
	end
end

post '/addquestion' do
	@question = Simplequestion.new(params[:simplequestion])
	if @question.save
		redirect '/listall'
	else
		"Sorry, there was an error!"
	end
end

get '/listall' do
	@simplequestions = Simplequestion.all
	erb :allquestions
end

get '/models' do
	@models = Model.all
	erb :models
end

after do
  # Close the connection after the request is done so that we don't
  # deplete the ActiveRecord connection pool.
  ActiveRecord::Base.connection.close
end
