import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
	render() {
		const postItems = this.props.state.posts.map((post) => {
			console.log(post);
			return (
				<div className="postContainer" key={Math.random()}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			);
		});

		
		return (
			<section>
				<h1>Posts</h1>
				{postItems.reverse()}
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	state: state.posts,
});

export default connect(mapStateToProps)(Posts);
