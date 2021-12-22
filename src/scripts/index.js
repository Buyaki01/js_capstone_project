import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import { showsList } from './Display/cards.js';

showsList.renderCards();
const postURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments';
const getURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments?item_id=item1'; 
const getComments = async () => {
  const data = await fetch(getURLComments);
  const response = await data.json();
  const comments = await response.result;
  console.log(comments);
};

const addComment = async (getName, getComment) => {
  fetch(postURLComments, {
    method: 'POST',
    body: JSON.stringify({
      item_id: 'item1',
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
  console.log(getName);
  console.log(getComment);
  addComment(getName, getComment);
  inputForm.reset();
});

const displayComment = document.querySelector('.display-comment');
const commentElement = (getName, getComment) => {
  const commentContainer = document.createElement('div');
  const commentData = document.createElement('p');

  commentData.innerHTML = `${getName}: ${getComment} `;

  commentContainer.appendChild(commentData);
  displayComment.appendChild(commentContainer);
};
 
const displayAllComments = async () => {
  const allComments = await getComments();
  allComments.forEach((comment) => commentElement(comment.getName, comment.getComment));
};

const viewCommentsBtn = document.querySelector('.display-comment-btn');
viewCommentsBtn.addEventListener('click', displayAllComments);
displayAllComments();