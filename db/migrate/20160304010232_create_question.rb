class CreateQuestion < ActiveRecord::Migration
  def up
  	create_table :simplequestions do |t|
  		t.text     :content_xml, null: false
  		t.string   :standard, null: false
  		t.string   :question_type
  		t.string   :bloom_taxonomy
  		t.string   :source
  		t.decimal    :rating
  		t.integer  :number_of_votes
  		t.integer  :answer_length
      
  		t.boolean  :is_parent, null: false
  		t.boolean  :is_child, null: false
      t.integer  :question_part, null: false, default: 0
      t.integer  :parent_question
      
      t.boolean  :is_main, null: false
      t.boolean  :is_differentiated, null: false
      t.integer  :level, null: false
      t.integer  :main_question, null: false
      
      t.text     :answer
      t.integer  :grade, null: false
      t.string   :subject, null: false
      
      t.boolean  :is_derived, null: false
      t.boolean  :is_original, null: false
      t.integer  :original_question
      
      t.timestamps null: false
  	end
    
  	create_table :questionmap do |t|
  		t.integer  :parent_question, null: false
  		t.integer  :child_question
      t.string   :child_type, null: false

      t.timestamps null: false
  	end
    
  end

  def down
  	drop_table :simplequestions
    drop_table :questionmap
  end
end
