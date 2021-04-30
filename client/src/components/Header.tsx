import { CSSProperties } from 'react';
import { CreateModal } from '../interfaces';
interface Props {
	title: string;
	setCreateModal?: (value: React.SetStateAction<CreateModal>) => void;
}

export default function Header(props: Props) {
	const { setCreateModal } = props;
	const handleClick = () => {
		setCreateModal!((prevState) => ({
			...prevState,
			isVisible: true,
		}));
	};

	return (
		<div className='header' style={header}>
			<h2 style={title}>{props.title}</h2>
			{setCreateModal ? (
				<button
					className='filledButton'
					style={postButton}
					onClick={handleClick}
				>
					Ny post
				</button>
			) : null}
		</div>
	);
}

const header: CSSProperties = {
	position: 'fixed',
	display: 'flex',
	width: 'calc(100% - 16rem)',
	height: '4rem',
	padding: '0 2rem',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
	backgroundColor: '#2D2D2D',
};
const postButton: CSSProperties = {
	backgroundColor: '#4780EE',
	color: '#ffff',
	padding: '0.7rem 3.5rem',
	border: 'none',
	borderRadius: '0.5rem',
	fontSize: '0.9rem',
	fontWeight: 600,
	cursor: 'pointer',
};
const title: CSSProperties = {
	fontSize: '1rem',
};
