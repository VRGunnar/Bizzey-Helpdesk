module Api
  module V1
    class GroupsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        groups = Group.all
        render json: GroupSerializer.new(groups).serialized_json
      end

      def create
        group = Group.new(group_params)

        if group.save
          render json: GroupSerializer.new(group).serialized_json
        else
          render json: { error: group.errors.messages }, status: 422
        end
      end

      def update
        group = Group.find_by(id: params[:id])

        if group.update(group_params)
          render json: ArticleSerializer.new(group).serialized_json
        else
          render json: { error: group.errors.messages }, status: 422
        end
      end

      def destroy
        group = Group.find_by(id: params[:id])

        if group.destroy
          head :no_content
        else
          render json: { error: group.errors.messages }, status: 422
        end
      end

      def group_params
        params.require(:group).permit(:name, :description)
      end
    end
  end
end
