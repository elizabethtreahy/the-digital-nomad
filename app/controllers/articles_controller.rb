class ArticlesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        url = "https://newsapi.org/v2/top-headlines?language=en&apiKey=#{ENV["_FIGARO_NEWS_API_KEY"]}"
        response = RestClient.get(url)
        render json: response.body
    end
    def find_country
        url = "https://newsapi.org/v2/top-headlines?country=#{params[:countryCode]}&apiKey=#{ENV["_FIGARO_NEWS_API_KEY"]}"
        response = RestClient.get(url)
        render json: response.body
        # render json: params[:countryCode]
    end
    def save_and_favorite
        #check to see if article already exists in the database
        #if not, create article
        #if yes, article is readyyyyy
        found_article = Article.find_by(title: params[:title])
        if found_article
            #the variable found is really an instance of article
            me = current_user
            found_favorite = Favorite.find_by(article_id: found_article[:id], user_id: me.id)
            if found_favorite
                render json: {article: found_article, favorite: found_favorite, message: "Found an article and found a favorite 🌻", status: 200}    
            else
                favorite = Favorite.create!(article_id: found_article[:id], user_id: favorite_params[:user_id])
                render json: {article: found_article, favorite: found_favorite, message: "Found an article and created a favorite 🌹", status: 200}
            end
        else
            #there is no article, and we need to make one
            article = Article.create!(article_params)
            favorite = Favorite.create!(article_id: article[:id], user_id: favorite_params[:user_id])
            render json: {article: article, favorite: favorite, message: "Created an article and created a favorite 🌸", status: 200}
        end
    end

        #Article.find_by(title:)

        #remember that the user is always in current_user




    #     article = Article.create!(article_params)
    #     if article
    #         favorite = Favorite.create!(article_id: article[:id], user_id: favorite_params[:user_id])
    #         if favorite
    #             render json: {article: article, favorite: favorite, message: "Created an article and favorited 🌸", status: 200}
    #         else
    #             render json: {error: "Failed at favorite", status: 422}    
    #         end
    #     else
    #         render json: {error: "Failed at article", status: 500}
    #     end
    # end
    def show
        article = Article.find_by(id: params[:id])
        render json: article, status: :ok
    end

    private
    def article_params
        params.permit(:author, :title, :description, :url, :published_at, :id)
    end
    def favorite_params
        params.permit(:article_id, :user_id)
    end
end
