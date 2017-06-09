import axios from 'axios';

export const setError = (bool) => ({
	type: 'SET_ERROR',
	hasError: bool
})

export const setLoading = (bool) => ({
	type: 'SET_LOADING',
	isLoading: bool
})

export const fetchDataSuccess = (data) => ({
	type: 'FETCH_DATA_SUCCESS',
	data
})

export const fetchData = (subreddit) => {
	return (dispatch) => {
		dispatch(setLoading(true));

		axios.get(`https://www.reddit.com/r/${subreddit}.json`)
		.then(res => {
			if (res.status !== 200) {
				throw Error(res.statusText);
			}
			dispatch(setLoading(false));
			dispatch(fetchDataSuccess(res.data))
		})
		.catch(err => {
			dispatch(setError(true));
			console.log(err);
		})
	}
}