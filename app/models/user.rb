class User < ApplicationRecord
    has_many :articles, through: :favorites

    
end
