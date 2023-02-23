class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :bio, :pfp
end 
