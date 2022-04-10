import * as React from 'react';
import { fetchPosts } from './../../api/post';
import { Card, Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";

import './index.scss';

const Posts = () => {

	const [posts, setPosts] = React.useState([]);

	const navigate = useNavigate();

	React.useEffect(() => {
		handleFetchPosts();
	}, []);

	const handleFetchPosts = async () => {
		const postResponse = await fetchPosts();
		if (postResponse) {
			setPosts(postResponse);
		}
	}

	const navigateToProfile = () => {
		navigate(`/user-profile`)
	}

	return <div> 
		{
			posts?.map((p, idx) => (<Card key={`post-${idx}`} className="card">
				<div className="user-content" onClick={navigateToProfile}>
					<Avatar />
					<p> {p.user.username} </p>
				</div>
				

				<p> {p.body} </p>
			</Card>))
		}
		 </div>
};
export default Posts;