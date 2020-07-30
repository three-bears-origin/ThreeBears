class CreateContributions < ActiveRecord::Migration[6.0]
  def change
    create_table :contributions do |t|
      t.string :text
      t.references :event, null: false, foreign_key: true

      t.timestamps
    end
  end
end
