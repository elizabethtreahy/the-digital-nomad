Rails.application.routes.draw do

  get "/articles", to: "articles#index"
  get "/articles/country", to: "articles#find_country"
  get "/favorites/articles", to: "favorites#articles"
  get "/auth", to: "users#show"
  get "/favorites", to: "favorites#index"
  
  delete "/logout", to: "sessions#destroy"
  delete "/deleteaccount", to:"users#destroy"
  
  post "/favorite", to: "article#create"
  post "/articles/save_and_favorite", to: "articles#save_and_favorite"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"

  resources :favorites
  resources :articles
  resources :users

 
 end


