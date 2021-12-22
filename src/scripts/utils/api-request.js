class APIRequest {
  getAPI = async (url) => {
    const response = await fetch(url);
    return response.json();
  }

  postApi = async (url, params) => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return response;
  }
}

const request = new APIRequest();

export { request as default };