import { tv } from '../API/Tv-show.js';

class Counter {
  countElements = (array) => array.length

  moviesCounter = async () => {
    const arrayOfShows = await tv.getAllItems();
    return this.countElements(arrayOfShows);
  }
}

const counter = new Counter();

// eslint-disable-next-line import/prefer-default-export
export { counter };