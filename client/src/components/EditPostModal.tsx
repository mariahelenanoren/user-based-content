import { CSSProperties } from 'react';
import { EditModal } from '../interfaces';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

interface Props {
	editModal: EditModal;
	setEditModal: (value: React.SetStateAction<EditModal>) => void;
}
function Alert(props: AlertProps) {
	return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function EditPostModal(props: Props) {
	const post = props.editModal.post;
	const { setEditModal } = props;

	const handleChange = (text: string) => {
		setEditModal((prevState) => ({
			...prevState,
			post: { ...post, text: text },
		}));
	};

	const handleClick = () => {
		setEditModal((prevState) => ({
			...prevState,
			postUpdated: true,
		}));
	};
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
	return (
		<div className='modalContainer' style={modalContainer}>
			<div style={modalHeader}>
				<p style={modalTitle}>Ändra post</p>
				<div style={buttonContainer}>
					<button
						onClick={() =>
							setEditModal((prevState) => ({
								...prevState,
								isVisible: false,
							}))
						}
						style={closeButton}
					>
						Avbryt
					</button>
					¨
					<button
						style={modalButtons}
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
				value={post.text}
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

const modalButtons: CSSProperties = {
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
