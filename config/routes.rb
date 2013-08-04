TuduList::Application.routes.draw do

  resources :users
  resources :tasks
  resources :sessions

  root to: 'sessions#new' 
end
