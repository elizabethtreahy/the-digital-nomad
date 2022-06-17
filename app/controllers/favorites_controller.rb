class FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
        favorites = current_user.articles
        # debugger
        render json: favorites
        
    end

    def articles
        currentUser = params[:currentUserId]
        favorites = Favorite.where(user_id: currentUser)
        articles = favorites.map { |favorite| Article.where(id: favorite[:article_id]) }
        render json: {articles: articles}
    end
    def destroy
        # currentFavorite = params[:articleId]
        favorite = Favorite.find_by(article_id: params[:articleId])
        render json: {favorite: favorite}
        favorite.destroy
        head :no_content
        # Favorite.destroy(article_id: currentFavorite)
    end
end
