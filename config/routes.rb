Rails.application.routes.draw do
  resources :posts

  get '/me', to: 'users#me'
  get '/profile', to: 'users#show'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#signup'

  
  post 'follow/:username', to: 'follows#follow'
  delete 'unfollow/:id', to: 'follows#unfollow'
end
