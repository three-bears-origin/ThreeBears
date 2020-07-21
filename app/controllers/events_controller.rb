class EventsController < ApplicationController
    def index
        @events = Event.all
    end
    
    def new
    end

    def create
        @event = Event.new(event_params)

        @event.save
        redirect_to events_path
    end

    private
        def event_params
            params.require(:event).permit(:title, :date)
        end
end
