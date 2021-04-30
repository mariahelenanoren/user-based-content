import React from 'react';
import { CSSProperties } from '@material-ui/styles';
import { CreateModal } from '../interfaces';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core';

interface Props {
	setCreateModal: (value: React.SetStateAction<CreateModal>) => void;
}

function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function NewPostModal(props: Props) {
	const { setCreateModal } = props;
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handlePostFeedback = () => {
		setOpen(true);
	};
	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	function handleChange(text: string) {
		setCreateModal((prevState) => ({
			...prevState,
			text: text,
		}));
	}
	function handleClick() {
		setCreateModal((prevState) => ({
			...prevState,
			postCreated: true,
		}));
	}

	return (
		<div className='modalContainer' style={modalContainer}>
			<div style={modalHeader}>
				<p style={modalTitle}>Ny post</p>
				<div style={buttonContainer}>
					<button
						onClick={() =>
							setCreateModal((prevState) => ({
								...prevState,
								isVisible: false,
							}))
						}
						style={closeButton}
					>
						Avbryt
					</button>
					<button
						style={postButton}
						onClick={() => {
							handleClick();
							handlePostFeedback();
						}}
					>
						Posta
					</button>
				</div>
			</div>
			<textarea
				placeholder={'Vad händer?'}
				style={textArea}
				rows={5}
				onChange={(event) => handleChange(event.target.value)}
			></textarea>
			<div className={classes.root}>
				<Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
					<Alert onClose={handleClose} severity='success'>
						Din post har publicerats
					</Alert>
				</Snackbar>
			</div>
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));
const modalContainer: CSSProperties = {
	position: 'absolute',
	padding: '0.5rem 1.5rem 1.5rem 1.5rem',
	height: '12rem',
	width: 'calc(100% - 21rem)',
	background: 'white',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
};
const modalHeader: CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
	borderBottom: '0.1rem solid lightgrey',
	marginBottom: '0.5rem',
};
const modalTitle: CSSProperties = {
	color: '#000000',
	fontWeight: 600,
	margin: 0,
};
const buttonContainer: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'flex-end',
};
const postButton: CSSProperties = {
	backgroundColor: '#4780EE',
	color: '#ffff',
	border: 'none',
	borderRadius: '0.5rem',
	fontSize: '0.9rem',
	fontWeight: 600,
	margin: '0.3rem',
	width: '7rem',
	height: '2rem',
	alignItems: 'center',
	justifyContent: 'center',
};
const textArea: CSSProperties = {
	fontFamily: 'inherit',
	height: '100%',
	width: '100%',
	border: 'none',
	outline: 'none',
	fontSize: '0.9rem',
	resize: 'none',
};
const closeButton: CSSProperties = {
	border: 'none',
	color: '#4780EE',
	background: 'white',
	textDecoration: 'underline',
};
