class User < ApplicationRecord
    has_many :favorites
    has_many :articles, through: :favorites
    has_secure_password
    
    validates :email, presence: true
    validates :email, uniqueness: true


    
end
