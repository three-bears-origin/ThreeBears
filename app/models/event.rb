class Event < ApplicationRecord
    #has_many :contributions, dependent: :destroy
    validates :title, presence: true
    default_scope { order(date: :asc) } # makes it so Event.all will be in date order by default
end
