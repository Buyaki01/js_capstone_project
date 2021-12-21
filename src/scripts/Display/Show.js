/* eslint-disable no-restricted-syntax */
import { tv } from '../API/Tv-show.js';
import { counter } from '../utils/counter.js';

class CardsUX {
  constructor() {
    this.itemsList = document.querySelector('.items-list');
  }

  renderCards = async () => {
    const arrayOfShows = await tv.getAllItems();

    const numberOfMovies = await counter.moviesCounter();
    document.querySelector('.alert').innerHTML = `We have ${numberOfMovies} movies for you`;
    for (const show of arrayOfShows) {
      let numOfLikes = 0;
      if (arrayOfShows.some((element) => element.item_id === show.id)) {
        numOfLikes = arrayOfShows.find((like) => like.item_id === show.id).likes;
      }
      const clone = this.itemsList.firstElementChild.cloneNode(true);
      clone.classList.remove('d-none');
      this.setValuesOfCards(clone, show, numOfLikes);
      this.itemsList.appendChild(clone);
    }
  }

  setValuesOfCards = (element, show) => {
    element.querySelector('.card-img-top').src = show.image.medium;
    element.querySelector('.card-title').innerText = show.name;
    element.querySelector('.card-text').innerHTML = show.summary;
    const likeBtn = element.querySelector('.card-body__likebtn');
    likeBtn.setAttribute('data-id', show.id);
  }
}

const showsList = new CardsUX();

// eslint-disable-next-line import/prefer-default-export
export { showsList };