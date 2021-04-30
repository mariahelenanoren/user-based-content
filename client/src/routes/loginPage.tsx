import React from 'react';
import { CSSProperties, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeRequest } from '../helper';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

interface Props {}

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const LoginPage: React.FC<Props> = () => {
	const history = useHistory();
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [error, setError] = useState('');
	const [user, setUser] = useState({
		userName: '',
		password: '',
	});
	const handleChange = (key: string, value: string) => {
		setUser((prevState) => ({ ...prevState, [key]: value }));
	};
	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	async function loginUser() {
		const body = user;
		try {
			const status = await makeRequest('/api/login', 'POST', body);
			console.log(status);
			history.push('/user');
		} catch (error) {
			console.log(error);
			setError(error);
			setOpen(true);
		}
	}

	return (
		<div style={mainStyle}>
			<div style={box}>
				<div style={title}>Logga in på Postr</div>
				<div>
					<input
						style={input}
						type='userName'
						name='userName'
						id='userName'
						placeholder={'Användarnamn'}
						onChange={(e) => handleChange('userName', e.target.value)}
					/>
				</div>
				<div>
					<input
						style={input}
						type='password'
						name='password'
						id='password'
						placeholder={'Lösenord'}
						onChange={(e) => handleChange('password', e.target.value)}
					/>
				</div>
				<div>
					<button style={button} onClick={loginUser}>
						Logga in
					</button>
				</div>
				<div style={linkStyles}>
					<Link to=''>Har du glömt ditt lösenord? </Link>
					<Link to='/registration'>Registrera dig för Postr</Link>
				</div>
				<div className={classes.root}>
					<Snackbar
						open={open}
						autoHideDuration={6000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity='error'>
							{error}
						</Alert>
					</Snackbar>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));
const mainStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
	backgroundColor: '#111111',
};
const box: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '#111111',
	width: '100%em',
	height: '25rem',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center',
};
const title: CSSProperties = {
	color: '#d3dde4',
	fontSize: '2.5rem',
	marginBottom: '2rem',
	fontWeight: 500,
};
const input: CSSProperties = {
	background: '#000000',
	margin: '0.5rem',
	width: '18rem',
	height: '2.5rem',
	color: 'white',
	borderColor: '#656874',
	borderWidth: 1,
};
const button: CSSProperties = {
	backgroundColor: '#4780EE',
	color: '#ffff',
	border: 'none',
	borderRadius: '0.5rem',
	fontSize: '0.9rem',
	fontWeight: 600,
	margin: '0.3rem',
	width: '9rem',
	height: '2rem',
	cursor: 'pointer',
	marginTop: '1rem',
};

const linkStyles: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	textDecoration: 'none',
	color: '#4780EE',
	marginTop: '0.5rem',
};
