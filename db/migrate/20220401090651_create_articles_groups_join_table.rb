class CreateArticlesGroupsJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :articles, :groups
  end
end
