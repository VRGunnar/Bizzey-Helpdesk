class Article < ApplicationRecord
  validates :name, :content, presence: true
  has_and_belongs_to_many :groups
end
