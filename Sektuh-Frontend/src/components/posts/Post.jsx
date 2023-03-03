import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Post = ({ post }) => {
    const navigate = useNavigate()
    const [imageError, setImageError] = useState(false)
    const imageUrl = imageError ? "https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png" : post.img_url

    return (
        <div>
            <img
                src={imageUrl}
                alt={post.caption}
                onError={() => setImageError(true)}
            />          
        </div>
    )
}

export default Post


