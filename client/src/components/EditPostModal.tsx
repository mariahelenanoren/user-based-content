import React from 'react';
import { CSSProperties } from 'react';
import { EditModal } from '../interfaces';
interface Props {
	editModal: EditModal;
	setEditModal: (value: React.SetStateAction<EditModal>) => void;
}

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
					<button style={modalButtons} onClick={handleClick}>
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
