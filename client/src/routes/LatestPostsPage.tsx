import { CSSProperties, useEffect, useState } from 'react';
import EditPostModal from '../components/EditPostModal';
import Header from '../components/Header';
import PostCard from '../components/postCard';
import { makeRequest } from '../helper';
import { Post, User } from '../interfaces';

interface Props {
	user: User;
}

export default function LatestPostPage(props: Props) {
	const [posts, setPosts] = useState([]);
	const { user } = props;

	useEffect(() => {
		const fetchPosts = async () => {
			const posts = await makeRequest('/api/posts', 'GET');
			setPosts(posts);
		};
		fetchPosts();
	}, []);

	const [editModal, setEditModal] = useState({
		isVisible: false,
		post: {
			userName: '',
			_id: '',
			_user: '',
			text: '',
		},
		postUpdated: false,
	});

	const updatePosts = async () => {
		const posts = await makeRequest('/api/posts', 'GET');
		setPosts(posts);
	};

	useEffect(() => {
		if (editModal.postUpdated === true) {
			const body = { ...editModal.post };
			const editPost = async () => {
				const res = await makeRequest('/api/post/:id', 'PUT', body);
				console.log(res);
				updatePosts();
				setEditModal({
					isVisible: false,
					post: {
						userName: '',
						_id: '',
						_user: '',
						text: '',
					},
					postUpdated: false,
				});
			};
			editPost();
		}
	}, [editModal.postUpdated, editModal.post]);

	const deletePost = async (id: string) => {
		const body = { _id: id };
		const res = await makeRequest('/api/post/:id', 'DELETE', body);
		console.log(res);
		updatePosts();
	};

	return (
		<>
			<Header title={'Senaste posts'} />
			<div className='content' style={content}>
				{user.role === 'admin' ? (
					<>
						{editModal.isVisible && (
							<EditPostModal
								editModal={editModal}
								setEditModal={setEditModal}
							/>
						)}
						{posts.map((post: Post, id) => (
							<PostCard
								key={id}
								post={post}
								deletePost={deletePost}
								setEditModal={setEditModal}
							/>
						))}
					</>
				) : (
					<>
						{posts.map((post, id) => (
							<PostCard key={id} post={post} />
						))}
					</>
				)}
			</div>
		</>
	);
}

const content: CSSProperties = {
	padding: '5.5rem 2.5rem 2.5rem 2.5rem',
	overflowY: 'auto',
};
