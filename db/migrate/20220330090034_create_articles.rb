class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :name
      t.string :description
      t.integer :status
      t.jsonb :content, null: false, default: '{}'
      t.timestamps
    end
  add_index :articles, :content, using: :gin
  end
end
