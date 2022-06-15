Rails.application.routes.draw do

  get "/articles", to: "articles#index"
  get "/articles/country", to: "articles#find_country"
  get "/auth", to: "users#show"
  
  delete "/logout", to: "sessions#destroy"
  delete "/deleteaccount", to:"users#destroy"
  
  post "/favorite", to: "favorites#create"
  post "/articles/save", to: "articles#create"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"

  resources :favorites
  resources :articles
  resources :users

 
 end


