Rails.application.routes.draw do

  get "/articles", to: "articles#index"
  get "/articles/country", to: "articles#find_country"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"


  resources :favorites
  resources :articles
  resources :users

 
 end


