class Event < ApplicationRecord
    default_scope { order(date: :asc) } # makes it so Event.all will be in date order by default
end
