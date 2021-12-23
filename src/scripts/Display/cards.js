/* eslint-disable no-restricted-syntax */
import { tv } from '../API/TV-maze.js';
import { involvement } from '../API/Involvement.js';
import { elisteners } from '../utils/listeners.js';
import { counter } from '../utils/counter.js';

class CardsUX {
  constructor() {
    this.itemsList = document.querySelector('.items-list');
  }

  renderCards = async () => {
    const arrayOfShows = await tv.getAllShows();
    const arrOfMoviesToDsiplay = arrayOfShows.slice(0, 49);
    const arrayOfLikes = await involvement.getLikes();
    const numberOfMovies = await counter.moviesCounter();
    const numberOfMoviesInDisplay = counter.countElements(arrOfMoviesToDsiplay);
    document.querySelector('.alert').innerHTML = `You are seeing ${numberOfMoviesInDisplay} of the ${numberOfMovies} movies we have for you`;
    for (const show of arrOfMoviesToDsiplay) {
      let numOfLikes = 0;
      if (arrayOfLikes.some((element) => element.item_id === show.id)) {
        numOfLikes = arrayOfLikes.find((like) => like.item_id === show.id).likes;
      }
      const clone = this.itemsList.firstElementChild.cloneNode(true);
      clone.classList.remove('d-none');
      this.setValuesOfCards(clone, show, numOfLikes);
      this.itemsList.appendChild(clone);
    }
  }

  setValuesOfCards = (element, show, likes) => {
    element.querySelector('.card-img-top').src = show.image.medium;
    element.querySelector('.card-title').innerText = show.name;
    element.querySelector('.card-text').innerHTML = show.summary;
    const likeBtn = element.querySelector('.card-body__likebtn');
    likeBtn.setAttribute('data-id', show.id);
    elisteners.addLikeListener(likeBtn);
    const displayLikes = element.querySelector('.card-body__likes');
    displayLikes.classList.add(`movie-${show.id}`);
    displayLikes.innerHTML = `${likes} people like this`;
  }
}

const showsList = new CardsUX();

// eslint-disable-next-line import/prefer-default-export
export { showsList };