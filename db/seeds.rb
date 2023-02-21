# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Follow.destroy_all

puts('anything 1')
user1 = User.create(name: "zaid", password: "111", username: "zaid", email: "zaid@example.com", age: 24)
user2 = User.create(name: "you", password: "111", username: "you", email: "you@example.com", age: 24)
user3 = User.create(name: "me", password: "111", username: "me", email: "me@example.com", age: 24)
puts('anything 2')
follow1 = Follow.create!(followee_id: user1.id, follower_id: user2.id)
follow2 = Follow.create!(followee_id: user2.id, follower_id: user1.id)
puts('anything 3')
