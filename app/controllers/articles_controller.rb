class ArticlesController < ApplicationController
    

    def get_articles
        url = "https://newsapi.org/v2/top-headlines?country=fr&apiKey=#{ENV["_FIGARO_NEWS_API_KEY"]}"
        response = RestClient.get(url)
        render json: response.body

    end
end
