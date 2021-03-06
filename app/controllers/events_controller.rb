class EventsController < ApplicationController
    def index
        @events = Event.all
        
        respond_to do |format|
            format.html
            format.js
        end
    end
    
    def new
    end

    def create
        @event = Event.new(event_params)

        @event.save
        redirect_to events_path
    end

    def destroy
        @event = Event.find(params[:id])
        @event.destroy
        
        redirect_to events_path
    end

    private
        def event_params
            params.require(:event).permit(:title, :date)
        end
end
