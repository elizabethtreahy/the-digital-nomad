class FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        user = current_user
        user.id
        favorite = Favorite.create!(favorite_params)
        render json: {favorite: favorite, success: "Hey from Favorites"}
    end
    def articles
        currentUser = params[:currentUserId]
        favorites = Favorite.where(user_id: currentUser)
        articles = favorites.map { |favorite| Article.where(id: favorite[:article_id]) }
        # articles = Articles.find(id: favorites[:article_id])
        render json: {articles: articles}
    end
    def index
        favorites = Favorite.all
        render json: favorites
    end

    private
    def favorite_params
        params.permit(:article_id, :user_id)
    end
end
