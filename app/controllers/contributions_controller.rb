class ContributionsController < ApplicationController

    def new
        @event = Event.find(params[:event_id])
    end

    def create
        @event = Event.find(params[:event_id])
        @contribution = @event.contributions.create(contribution_params)
        redirect_to events_path
    end

    private
        def contribution_params
            params.require(:contribution).permit(:text)
        end
end
