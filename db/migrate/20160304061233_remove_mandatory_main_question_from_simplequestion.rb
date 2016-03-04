class RemoveMandatoryMainQuestionFromSimplequestion < ActiveRecord::Migration
  def self.up
    change_column_null :simplequestions, :main_question, true
  end
  
  def self.down
    change_column_null :simplequestions, :main_question, false
  end
end
