import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import { showsList } from './Display/cards.js';
import showPop from './Display/popup.js';
import newCounter from './Display/counter.js';

showsList.renderCards();
const postURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments';
const getURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments?item_id=item1';
const getComments = async () => {
  const data = await fetch(getURLComments);
  const response = await data.json();
  return response;
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
  const getComment = document.querySelector(
    '#exampleFormControlTextarea1',
  ).value;
  addComment(getName, getComment);
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
commentElement();

// const displayAllComments = async () => {
//   const allComments = await getComments();
//   allComments.forEach((comment) => {
//     commentElement(comment.creation_date, comment.username, comment.comment);
//   });
// };

// const viewCommentsBtn = document.querySelector('.display-comment-btn');
// viewCommentsBtn.addEventListener('click', displayAllComments());
const displayCommentBtn = document.querySelector('.display-comment-btn');
displayCommentBtn.addEventListener('click', () => {
  getComments().then((data) => {
    displayComment.innerHTML = '';
    data.forEach((data) => {
      const commentList = document.createElement('div');
      const commentText = document.createElement('p');
      commentText.innerHTML = `${data.creation_date}  ${data.username}: ${data.comment}`;
      commentList.appendChild(commentText);
      displayComment.appendChild(commentList);
    });
  });
});

showPop();
newCounter();
