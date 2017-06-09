import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/posts';

class PostList extends Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			hasError: false,
			isLoading: false
		}
	}

	componentDidMount() {
		this.props.fetchData(this.props.subreddit);
	}

	render() {
		if (this.props.hasError) {
			return <div>Ops! Something's wrong, please try again later.</div>
		} else if (this.props.isLoading) {
			return <div>Loading...</div>
		} else {
			return (
				<ul>
					{this.props.posts.map((post, i) => {
						return (<li key = {i}>{post}</li>)
					})}
				</ul>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		subreddit: state.subreddit,
		posts: state.posts,
		hasError: state.error,
		isLoading: state.loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(fetchData(url))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);