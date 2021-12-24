const postURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments';
const getURLComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/o7hamWo6ePWlkw5D7zAB/comments';
const getComments = async (itemId) => {
  const data = await fetch(`${getURLComments}?item_id=${itemId}`);
  const response = await data.json();
  return response;
};

const commentsCounter = async (itemId) => {
  const arrayOfComments = await getComments(itemId);
  return arrayOfComments.length;
}

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
export {getComments, commentsCounter, addComment};