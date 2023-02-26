Rails.application.routes.draw do
  resources :posts

  get '/me', to: 'users#me'
  get '/profile', to: 'users#show'
  post '/login', to: 'users#login'
  post '/signup', to: 'users#signup'
  delete '/users/:id', to: 'users#destroy'
  patch '/edit/:id', to: 'users#update'

  post 'follow/:username', to: 'follows#follow'
  delete 'unfollow/:id', to: 'follows#unfollow'
end
