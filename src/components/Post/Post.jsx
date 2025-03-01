import "./Post.css"
import * as postsAPI from "../../utilities/posts-api"
import { MoreVert } from "@mui/icons-material/"
import { Favorite } from "@mui/icons-material/"
import moment from "moment"
import { useState } from "react"

export default function Post({ user, post }) {
	const handleDelete = () => {
		console.log(post._id)
		postsAPI.deletePost(post._id)
	}
	const [like, setLike] = useState(0)
	const [isLiked, setIsLiked] = useState(false)
	const likeHandler = () => {
		setLike(isLiked ? like - 1 : like + 1)
		setIsLiked(!isLiked)
	}

	return (
		<>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{post.userName}</span>
							<span className='postDate'>
								Created: {new Date(post.createdAt).toLocaleDateString()}{" "}
							</span>
							<span className='postDate'>
								Updated: {moment(post.updatedAt).fromNow()}
							</span>
							<button onClick={handleDelete}>delete</button>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>
							{post.description} <hr />
							<br />
						</span>

						{/* <img alt='rascal' src={require("./rascal-1.jpg")} /> */}

						<img alt='rascal' src={post.image} />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite onClick={likeHandler} />
							<span className='postFavorites'>{like} people liked this</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>{post.comment}comments</span>
						</div>
					</div>
				</div>
			</div>
			{/* <div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div>
			<div className='post'>
				<div className='postWrapper'>
					<div className='postTop'>
						<div className='postTopLeft'>
							<span className='postUsername'>{}</span>
							<span className='postDate'>Less than an hour ago</span>
						</div>
						<div className='postTopRight'>
							<MoreVert />
						</div>
					</div>

					<div className='postCenter'>
						<span className='postText'>Testing!</span>
						<img src='' alt='' />
					</div>
					<div className='postBottom'>
						<div className='postBottomLeft'>
							<Favorite />
							<span className='postFavorites'>9 likes</span>
						</div>
						<div className='postBottomRight'>
							<span className='postComment'>2 comments</span>
						</div>
					</div>
				</div>
			</div> */}
		</>
	)
}
