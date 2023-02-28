class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :bio, :pfp, :followees, :followers, :posts
end 
