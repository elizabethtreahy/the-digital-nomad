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
    def create
        article = Article.create!(article_params)
        render json: {article: article, success: "Hey from Ar Tick les"}
    end
    def show
        article = Article.find_by(id: params[:id])
        render json: article, status: :ok
    end

    private
    def article_params
        params.permit(:author, :title, :description, :url, :published_at)
    end
end
