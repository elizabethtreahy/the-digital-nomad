class SessionsController < ApplicationController
    skip_before_action :authorized, only: :create
    skip_before_action :verify_authenticity_token

    def create 
        
        user = User.find_by(email: params[:email])
        if user
            if user.authenticate(params[:password])
                session[:user_id] = user.id
                render json: user, status: :created
            else
                render json: {error: "Invalid password!"}, status: :unauthorized
            end
        else
            render json: {error: "Email not found, please sign up!"}, status: :unauthorized

        end
    end

    # def create 
    #     user = User
    #     .find_by(email: params[:email])
    #     .try(:authenticate, params[:password])
    #     if user
    #         session[:user_id] = user.id
    #         render json: {status: :created, user: :user}
    #         else
    #             render json: {error: "Invalid password!"}, status: :unauthorized
        
    #       else
    #         render json: {error: "Email not found, please sign up!"}, status: :unauthorized
    #     end
    # end

    def destroy 
        session.delete :user_id 
        head :no_content
    end
  end
