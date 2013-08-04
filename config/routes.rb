TuduList::Application.routes.draw do

  resources :users
  resources :lists
  resources :sessions

  root to: 'users#new' 
end
