class User < ApplicationRecord
    has_secure_password

    has_many :followed_users, foreign_key: :follower_id, class_name: 'Follow'
    has_many :followees, through: :followed_users, source: :followee
    has_many :following_users, foreign_key: :followee_id, class_name: 'Follow'
    has_many :followers, through: :following_users, source: :follower

    validates :username, uniqueness: { case_sensitive: true }
    validates :age, numericality: { greater_than_or_equal_to: 16, less_than_or_equal_to: 85 }
    validates :email, presence: true
    validates :name, presence: true
    validates :bio, presence: true
    validates :password, presence: true

end
