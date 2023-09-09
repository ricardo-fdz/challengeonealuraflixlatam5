const URL = "http://localhost:3005/";

export const listaVideos = () => {
  return fetch(`${URL}videos`).then((resp) => {
    return resp.json();
  });
};

export const listaCategorias = () => {
  return fetch(`${URL}categories`).then((resp) => {
    return resp.json();
  });
};
