class ContributionsController < ApplicationController

    def new
    end

    def create
        @event = Event.find(params[:event_id])
        @contribution = @event.contributions.create(contribution_params)
    end

    private
        def contribution_params
            params.require(:contribution).permit(:text)
        end
end
