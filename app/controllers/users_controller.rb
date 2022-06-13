class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    skip_before_action :verify_authenticity_token

    def show
        current_user = find_user
        render json: current_user, status: :ok
    end

    def create 
        render json: User.create!(user_params), status: :created
    end

    def update
        current_user = find_user
        current_user.update!(user_params)
        render json: current_user, status: :ok
    end

    def destroy 
        current_user = find_user
        current_user.destroy
        head :no_content
    end

    private

    def find_user
        user = User.find(session[:user_id])
    end

    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end

    
end
