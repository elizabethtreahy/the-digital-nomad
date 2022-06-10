Rails.application.routes.draw do

  get "/articles", to: "articles#get_articles"
  resources :favorites
  resources :articles
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  
end
