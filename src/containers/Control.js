import React, { Component } from 'react';
import { fetchData } from '../actions/posts';
import { changeSubreddit } from '../actions/subreddit';
import { connect } from 'react-redux';

class Control extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subreddit: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(e) {
		this.setState({subreddit: e.target.value})
	}

	handleClick() {
		this.props.dispatch(changeSubreddit(this.state.subreddit));
		// dispatch(fetchData(this.state.subreddit));
		// this.props.submit(this.state.subreddit);
	}

	render(props) {
		return (
			<div>
				<input type="text" value={this.props.subreddit} onChange={this.handleChange} />
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
	// changeSubreddit: changeSubreddit,
	submit: fetchData
}

export default connect(null, mapDispatchToProps)(Control);