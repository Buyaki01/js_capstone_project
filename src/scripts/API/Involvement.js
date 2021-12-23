import request from '../utils/api-request.js';

class InvolvementAPI {
  constructor() {
    this.likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZOlmT2mI46IiDxo5Br8v/likes';
  }

  setLike = (movieId) => {
    request.postApi(this.likesURL, { item_id: parseInt(movieId, 10) });
  }

  getLikes =async () => {
    const likes = await request.getAPI(this.likesURL);
    return likes;
  }

  getLikesOf = async (movieId) => {
    movieId = parseInt(movieId, 10);
    const arrayOfLikes = await this.getLikes();
    let numOfLikes = 0;
    if (arrayOfLikes.some((element) => element.item_id === movieId)) {
      numOfLikes = arrayOfLikes.find((like) => like.item_id === movieId).likes;
    }
    return numOfLikes;
  }
}

const involvement = new InvolvementAPI();

// eslint-disable-next-line import/prefer-default-export
export { involvement };