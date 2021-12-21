class TvAPI {
  constructor() {
    this.root = 'https://api.tvmaze.com';
  }

    getAllItems = async () => {
      const res = await fetch(`${this.root}/shows?page=0`);
      return this.getAPIsResponse(res);
    }

    getItem = async (id) => {
      const res = await fetch(`${this.root}/shows/${id}`);
      return this.getAPIsResponse(res);
    }

    getAPIsResponse = async (res) => {
      if (res.ok) {
        const jsonResponse = await res.json();
        return jsonResponse;
      }
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }
}

const tv = new TvAPI();

// eslint-disable-next-line import/prefer-default-export
export { tv };