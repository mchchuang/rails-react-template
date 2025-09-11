class CreateEmployees < ActiveRecord::Migration[7.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.date :start_date
      t.integer :level

      t.timestamps
    end
  end
end
