Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :articles, param: :id
      resources :groups, only: %i[index create destroy]
    end
  end

  get '*path', to: 'pages#index', via: :all
end
