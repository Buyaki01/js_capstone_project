import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import { showsList } from './Display/cards.js';

showsList.renderCards();
const requestURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vBqRZTU315QO9ChybbKR/comments/';
const getComments = async () => {
  const data = await fetch(requestURLComments);
  const response = await data.json();
  const comments = await response.result;
  return comments;
};

const addComment = async (user, comment) => {
  fetch(requestURLComments, {
    method: 'POST',
    body: JSON.stringify({ user, comment }),
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
  });
};

const inputForm = document.querySelector('.form');
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const getName = document.querySelector('#exampleFormControlInput1').value;
  const getComment = document.querySelector('#exampleFormControlTextarea1').value;
  addComment(getName, getComment);
  inputForm.reset();
});

const viewCommentsBtn = document.querySelector('.display-comment-btn');
viewCommentsBtn.addEventListener('click', getComments());