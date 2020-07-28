Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
  }
  devise_scope :user do
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end
  root 'posts#index'
  resources :posts,only:[:show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :posts, only: [:new,]
end
