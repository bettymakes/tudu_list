class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :priority
      t.string :item
      t.integer :order_num
      t.datetime :created_at
      t.datetime :updated_at
      
      t.timestamps
    end
  end
end
