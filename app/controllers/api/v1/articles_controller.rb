module Api
  module V1
    class ArticlesController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        articles = Article.all
        render json: ArticleSerializer.new(articles, options).serialized_json
      end

      def show
        article = Article.find_by(id: params[:id])

        render json: ArticleSerializer.new(article, options).serialized_json
      end

      def create
        article = Article.new(article_params)
        if article.save
          render json: ArticleSerializer.new(article, options).serialized_json
        else
          render json: { error: article.errors.messages }, status: 422
        end
      end

      def update
        article = Article.find_by(id: params[:id])

        if article.update(article_params)
          render json: ArticleSerializer.new(article, options).serialized_json
        else
          render json: { error: article.errors.messages }, status: 422
        end
      end

      def destroy
        article = Article.find_by(id: params[:id])

        if article.destroy
          head :no_content
        else
          render json: { error: article.errors.messages }, status: 422
        end
      end

      def article_params
        params.require(:article).permit(:name, :description, :status, group_ids: [], content: [:locale, :title, :content])
      end

      def options
        @options ||= { include: %i[groups] }
      end
    end
  end
end
