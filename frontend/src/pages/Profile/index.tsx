import * as React from 'react';
import { useSelector } from 'react-redux';
import { Card, Avatar } from '@mui/material';

const Profile = () => {

	const user = useSelector((state: any) => state.user.userInfo);

	return <div> User Profile
		<Card className="card">
			<div className="user-content" >
				<Avatar />
				<p> {user.username} </p>
				<p> {user.email} </p>
			</div>
			<p> {user.about} </p>
		</Card>

	</div>
};
export default Profile;