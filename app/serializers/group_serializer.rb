class GroupSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :created_at
end
