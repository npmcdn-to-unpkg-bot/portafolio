class CreateGifs < ActiveRecord::Migration
  def change
    create_table :gifs do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
