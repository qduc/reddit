export function subreddit(state = 'frontpage', action) {
	switch(action.type) {
		case 'CHANGE_SUBREDDIT':
			return action.subreddit;
		default:
			return state;
	}
}