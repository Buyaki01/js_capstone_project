import { tv } from '../API/TV-maze.js';

class Counter {
  countElements = (array) => array.length

  moviesCounter = async () => {
    const arrayOfShows = await tv.getAllShows();
    return this.countElements(arrayOfShows);
  }
}

const counter = new Counter();

// eslint-disable-next-line import/prefer-default-export
export { counter };