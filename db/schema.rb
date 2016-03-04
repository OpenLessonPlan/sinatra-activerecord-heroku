# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160304010232) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "models", force: :cascade do |t|
    t.string "name", limit: 255
  end

  create_table "questionmap", force: :cascade do |t|
    t.integer  "parent_question", null: false
    t.integer  "child_question"
    t.string   "child_type",      null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "simplequestions", force: :cascade do |t|
    t.text     "content_xml",                   null: false
    t.string   "standard",                      null: false
    t.string   "question_type"
    t.string   "bloom_taxonomy"
    t.string   "source"
    t.decimal  "rating"
    t.integer  "number_of_votes"
    t.integer  "answer_length"
    t.boolean  "is_parent",                     null: false
    t.boolean  "is_child",                      null: false
    t.integer  "question_part",     default: 0, null: false
    t.integer  "parent_question"
    t.boolean  "is_main",                       null: false
    t.boolean  "is_differentiated",             null: false
    t.integer  "level",                         null: false
    t.integer  "main_question",                 null: false
    t.text     "answer"
    t.integer  "grade",                         null: false
    t.string   "subject",                       null: false
    t.boolean  "is_derived",                    null: false
    t.boolean  "is_original",                   null: false
    t.integer  "original_question"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

end
