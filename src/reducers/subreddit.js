export function subreddit(state = 'aww', action) {
	switch(action.type) {
		case 'CHANGE_SUBREDDIT':
			return action.subreddit;
		default:
			return state;
	}
}