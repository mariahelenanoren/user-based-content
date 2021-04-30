import DeleteIcon from '@material-ui/icons/Delete';
import { CSSProperties } from '@material-ui/styles';
import { User } from '../interfaces';

interface Props {
	user: User;
	deleteUser: (id: string) => void;
	changeUserRole: (value: string, id: string) => void;
}

export default function UserListBar(props: Props) {
	const { user, deleteUser, changeUserRole } = props;

	return (
		<div style={bar}>
			<div style={userContainer}>
				<img
					style={profilePicture}
					alt={user.userName}
					src='../../assets/default-user.png'
				></img>
				<p style={userName}>{user?.userName}</p>
			</div>
			<div style={optionsContainer}>
				<select
					id='select'
					style={select}
					value={user.role}
					onChange={(e) => changeUserRole(e.target.value, user._id)}
				>
					<option style={optionStyle} value='admin'>
						Admin
					</option>
					<option style={optionStyle} value='user'>
						User
					</option>
				</select>
				<DeleteIcon
					className='icon'
					style={deleteIcon}
					onClick={() => deleteUser(user._id)}
				/>
			</div>
		</div>
	);
}

const bar: CSSProperties = {
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'space-between',
	padding: '0.6rem 1.5rem',
	backgroundColor: '#2D2D2D',
	marginBottom: '0.5rem',
};
const userContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	margin: '0.25rem 0',
};
const profilePicture: CSSProperties = {
	width: '2.5rem',
	borderRadius: '100%',
	marginRight: '1rem',
};
const userName: CSSProperties = {
	wordBreak: 'break-word',
};
const optionsContainer: CSSProperties = {
	display: 'flex',
	flex: 1,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'flex-end',
	margin: '0.25rem 0',
};
const select: CSSProperties = {
	color: '#ffff',
	backgroundColor: 'transparent',
	padding: '0.5rem 1.7rem 0.5rem 0.7rem',
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	appearance: 'none',
};
const optionStyle: CSSProperties = {
	color: '#2D2D2D',
};
const deleteIcon: CSSProperties = {
	color: '#4780EE',
	marginLeft: '1rem',
};
