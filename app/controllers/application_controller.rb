class ApplicationController < ActionController::API
    
    def authenticate
        begin
            decoded_token = JWT.decode(request.headers['Authorization'], Rails.application.credentials.app_secret, true, {algorithm: 'HS256'})
            user = User.find(decoded_token[0]['user_id'])
            if user 
                @current_user = user
            else
                raise 'SECURITY ALERT!'
            end
        rescue JWT::DecodeError, JWT::ExpiredSignature
            render json: { error: 'Unauthorized' }, status: :unauthorized
        end
    end
end
