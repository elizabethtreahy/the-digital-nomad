class ArticlesController < ApplicationController
    

    def index
        url = "https://newsapi.org/v2/top-headlines?country=fr&apiKey=#{ENV["_FIGARO_NEWS_API_KEY"]}"
        response = RestClient.get(url)
        render json: response.body
    end

    def show
        article = Article.find_by(id: params[:id])
        render json: article, status: :ok
    end
end
