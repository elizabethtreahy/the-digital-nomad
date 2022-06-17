class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    skip_before_action :verify_authenticity_token

    def show
        # current_user = find_user
        render json: current_user, status: :ok
    end

    def create 
        user = User.create!(user_params), 
        if user
            session[:user_id] = user_id
            render json: {status: :created, user: :user}
        else
            render json: {status: 500}
        end
    end

    def update
        # current_user = find_user
        current_user.update!(user_params)
        render json: request.body
        # render json: current_user status: :ok
    end

    def destroy 
        # current_user = find_user
        current_user.destroy
        head :no_content
    end

    private

    def find_user
        User.find(session[:user_id])
    end

    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end

    
end
