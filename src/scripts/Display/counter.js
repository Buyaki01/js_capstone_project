class CommentCount {
    counter = (data) => {
      let counter = 0;
      for (let i = 0; i < data.length; i += 1) {
        counter += 1;
      }
      return counter;
    }
}

const newCounter = new CommentCount();

export default newCounter;