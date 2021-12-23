import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.css';
import { showsList } from './Display/cards.js';
import showPop from './Display/popup.js';
import newCounter from './Display/counter.js';

showsList.renderCards();
const postURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments';
const getURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments';
const getComments = async (itemId) => {
  const data = await fetch(`${getURLComments}?item_id=${itemId}`);
  const response = await data.json();
  return response;
};

const addComment = async (getId, getName, getComment) => {
  fetch(postURLComments, {
    method: 'POST',
    body: JSON.stringify({
      item_id: getId,
      username: getName,
      comment: getComment,
    }),
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
  });
};

const inputForm = document.querySelector('.form');
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const getName = document.querySelector('#exampleFormControlInput1').value;
  const getComment = document.querySelector('#exampleFormControlTextarea1').value;
  const getId = inputForm.dataset.id;
  addComment(getId, getName, getComment);
  inputForm.reset();
});

const displayComment = document.querySelector('.display-comment');
const commentElement = (getDate, getName, getComment) => {
  const commentContainer = document.createElement('div');
  const commentData = document.createElement('p');

  commentData.innerHTML = `${getDate}: ${getName}: ${getComment} `;

  commentContainer.appendChild(commentData);
  displayComment.appendChild(commentContainer);
};

const displayAllComments = async (itemId) => {
  const allComments = await getComments(itemId);
  if (allComments) {
    allComments.forEach((comment) => {
      commentElement(comment.creation_date, comment.username, comment.comment);
    });
  }
};

const viewCommentsBtn = document.querySelector('.display-comment-btn');
viewCommentsBtn.addEventListener('click', () => {
  const itemId = viewCommentsBtn.dataset.id;
  displayAllComments(itemId);
});
const closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', () => {
  displayComment.innerHTML = '';
});
showPop();
newCounter();
