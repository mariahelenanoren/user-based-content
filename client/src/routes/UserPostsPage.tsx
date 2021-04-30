import { CSSProperties, useEffect, useState } from 'react';
import Header from '../components/Header';
import PostCard from '../components/postCard';
import { makeRequest } from '../helper';
import NewPostModal from '../components/NewPostModal';
import EditPostModal from '../components/EditPostModal';
import { Post, User } from '../interfaces';
interface Props {
	user: User;
}

export default function UserPostsPage(props: Props) {
	const { user } = props;
	const [posts, setPosts] = useState([]);
	const [createModal, setCreateModal] = useState({
		isVisible: false,
		text: '',
		postCreated: false,
	});

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

	useEffect(() => {
		let isMounted = true;
		const fetchPosts = async () => {
			if (isMounted) {
				updatePosts();
			}
		};
		fetchPosts();
		return () => {
			isMounted = false;
		};
	}, []);

	const updatePosts = async () => {
		const posts = await makeRequest('/api/posts/user', 'GET');
		setPosts(posts);
	};

	useEffect(() => {
		if (editModal.postUpdated === true) {
			const body = { ...editModal.post };
			console.log(body);
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

	useEffect(() => {
		if (createModal.postCreated === true) {
			const body = { text: createModal.text };
			const editPost = async () => {
				const res = await makeRequest('/api/post', 'POST', body);
				console.log(res);
				updatePosts();
				setCreateModal({
					isVisible: false,
					text: '',
					postCreated: false,
				});
			};
			editPost();
		}
	}, [createModal.postCreated, createModal.text]);

	const deletePost = async (id: string) => {
		const body = { _id: id };
		const res = await makeRequest('/api/post/:id', 'DELETE', body);
		console.log(res);
		updatePosts();
	};

	return (
		<>
			<Header title={'Dina posts'} setCreateModal={setCreateModal} />
			<div className='content' style={content}>
				{createModal.isVisible && (
					<NewPostModal setCreateModal={setCreateModal} />
				)}
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
			</div>
		</>
	);
}

const content: CSSProperties = {
	padding: '5.5rem 2.5rem 2.5rem 2.5rem',
	overflowY: 'auto',
};
