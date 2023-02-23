class PostsController < ApplicationController
  before_action :authenticate, only: [:create, :destroy, :show]


  def show
    posts = @current_user.posts
    render json: posts
  end

  def create
    post = @current_user.posts.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    post = @current_user.posts.find(params[:id])
    post.destroy
    render json: {message: 'Post has been obliterated.'}, status: :ok
  end

  private

  def post_params
    params.permit(:content, :img_url, :user_id)
  end
end
