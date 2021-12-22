class TvAPI {
  constructor() {
    this.root = 'https://api.tvmaze.com';
  }

  getAllShows = async () => {
    const response = await fetch(`${this.root}/shows?page=0`);
    return this.getAPIsResponse(response);
  }

  getShow = async (id) => {
    const response = await fetch(`${this.root}/shows/${id}`);
    return this.getAPIsResponse(response);
  }

  getAPIsResponse = async (response) => {
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
}

const tv = new TvAPI();

// eslint-disable-next-line import/prefer-default-export
export { tv };