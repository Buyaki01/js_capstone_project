import { involvement } from '../API/Involvement.js';

class Listeners {
  addLikeListener = (event) => {
    event.addEventListener('click', () => {
      involvement.setLike(event.dataset.id);
      const likesToUpdate = document.querySelector(`.movie-${event.dataset.id}`);
      involvement.getLikesOf(event.dataset.id)
        .then((likes) => {
          likesToUpdate.innerHTML = `${likes} people like this`;
        });
    });
  }
}

const elisteners = new Listeners();
export { elisteners };