class DestroyingListsTableIfItStillExists < ActiveRecord::Migration
  def change
    drop_table :lists
  end
end
