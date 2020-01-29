const getData = api => {
  return fetch(api)
    .then(response => response.JSON())
    .then(response => response)
    .catch(error => error);
};

export default getData;
