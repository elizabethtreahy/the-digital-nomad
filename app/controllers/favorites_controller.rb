class FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        favorite = Favorite.create!(favorite_params)
        render json: {favorite: favorite, success: "Hey from Favorites"}
    end
    private
    def favorite_params
        params.permit(:author_id, :user_id)
    end
end
