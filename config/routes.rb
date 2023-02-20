Rails.application.routes.draw do

  get '/me', to: 'users#me'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#signup'

end
