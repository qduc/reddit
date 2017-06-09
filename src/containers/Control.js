import React, { Component } from 'react';
import { fetchData } from '../actions/posts';
import { connect } from 'react-redux';

class Control extends Component {
	constructor() {
		super();
		this.setState = {
			subreddit: this.props.subreddit
		};
	}

	handleChange(e) {
		this.setState({subreddit: e.target.value})
	}

	handleClick() {
		// dispatch(changeSubreddit(this.state.subreddit));
		// dispatch(fetchData(this.state.subreddit));
		this.props.submit(this.state.subreddit);
	}

	render(props) {
		return (
			<div>
				<input type="text" onChange={this.handleChange}/>
				<button 
					onClick={this.handleClick}
				>Reload</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	subreddit: state.subreddit
}

const mapDispatchToProps = {
	submit: fetchData
}

export default connect(null, mapDispatchToProps)(Control);