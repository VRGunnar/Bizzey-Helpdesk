class AddIndexToArticlesGroups < ActiveRecord::Migration[6.0]
  def change
    add_index :articles_groups, [:article_id, :group_id], unique: true
  end
end
