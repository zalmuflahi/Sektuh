class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :bio
      t.string :pfp

      t.timestamps
    end
  end
end
