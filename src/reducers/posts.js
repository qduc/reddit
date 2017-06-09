export function error(state = false, action) {
	switch(action.type) {
		case 'SET_ERROR':
			return action.hasError;

		default:
			return state;
	}
}

export function loading(state = false, action) {
	switch(action.type) {
		case 'SET_LOADING':
			return action.isLoading;
		default:
			return state;
	}
}

export function posts(state = [], action) {
	switch(action.type) {
		case 'FETCH_DATA_SUCCESS':
			return action.data.data.children.map((post) => post.data.title);
		default:
			return state;
	}
}