import { combineReducers } from 'redux';
import { error, loading, posts } from './posts';
import { subreddit } from './subreddit';

export default combineReducers({
	error,
	loading,
	posts,
	subreddit
});