class Article < ApplicationRecord
    has_many :users, through: :favorites
end
