import * as React from 'react';
import { fetchPosts } from './../../api/post';
import { Card, Avatar } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserInfo } from './../../redux/slices/user.slice';

import './index.scss';

const Posts = () => {

	const [posts, setPosts] = React.useState([]);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	React.useEffect(() => {
		handleFetchPosts();
	}, []);

	const handleFetchPosts = async () => {
		const postResponse = await fetchPosts();
		if (postResponse) {
			setPosts(postResponse);
		}
	}

	const navigateToProfile = (user: any) => {
		dispatch(setUserInfo(user));
		navigate(`/user-profile`)
	}

	return <div> 
		{
			posts?.map((p, idx) => (<Card key={`post-${idx}`} className="card">
				<div className="user-content" onClick={() => navigateToProfile(p?.user)}>
					<Avatar />
					<p> {p.user.username} </p>
				</div>
				<p> {p.body} </p>
			</Card>))
		}
		 </div>
};
export default Posts;