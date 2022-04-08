class ArticleSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :status, :content, :created_at
  has_many :groups
end
