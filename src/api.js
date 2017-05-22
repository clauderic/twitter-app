function getJSON(url) {
  return fetch(url, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json();
  });
}

export default { getJSON };