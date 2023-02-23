class FollowsController < ApplicationController
   before_action :authenticate, only: [:follow, :unfollow]

  def follow
    user_to_follow = User.find_by(username: params[:username])
    follow = Follow.new(followee_id: user_to_follow.id, follower_id: @current_user.id)
    if follow.save
      render json: follow
    else
      render json: {error: 'Could not follow user'}, status: :unprocessable_entity
    end
  end

  def unfollow
    user = User.find(params[:id])
    unfollowing = @current_user.followed_users.find_by(followee_id: user.id).destroy
    render json: unfollowing
  end
end
