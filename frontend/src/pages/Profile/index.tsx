import * as React from 'react';
import { Card, Avatar } from '@mui/material';
import { WithLoader } from '../../components/WithLoader';
import { useParams } from 'react-router-dom';
import {fetchUser} from '../../api/user'

const Profile = () => {
	const [user, setUser] = React.useState<any>({});
	const {id} = useParams();
	console.log(id);

	React.useEffect(() => {
		(async () => {
			const userResponse = await fetchUser(id);
			if (userResponse) {
				setUser(userResponse);
			}
		})();
	}, [])

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
export default WithLoader(Profile);