Rails.application.routes.draw do
  get 'landing/index'
  # get '/timeline', to: redirect('/events')

  resources :events, path: 'timeline'

  root 'landing#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
