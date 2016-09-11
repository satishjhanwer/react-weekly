import {
  LOAD_CONTENT_INITIATION,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_FAILURE,
} from './constants';

const feedUrl = 'https://medium.com/react-weekly/latest?format=json';

const parsePosts = (data) =>
  JSON.parse(data.substring(data.indexOf(';') + 5));

const headers = new Headers({
  'content-type': 'application/json',
});

const options = {
  method: 'GET',
  headers,
  mode: 'no-cors',
};

const loadContentInitiation = () => ({
  type: LOAD_CONTENT_INITIATION,
});

const loadContentSuccess = (posts) => ({
  type: LOAD_CONTENT_SUCCESS,
  posts,
});

const loadContentFailure = (error) => ({
  type: LOAD_CONTENT_FAILURE,
  error,
});

export const loadPostContent = () =>
  (dispatch) => {
    dispatch(
      loadContentInitiation()
    );
    fetch(feedUrl, options)
      .then(res => res.text())
      .then(res => parsePosts(res))
      .then(res => res.payload)
      .then(payload => payload.posts)
      .then(posts => {
        dispatch(
          loadContentSuccess(posts)
        );
      })
      .catch(err => {
        dispatch(
          loadContentFailure(err)
        );
      });
  };
