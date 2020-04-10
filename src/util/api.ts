const url = process.env.REACT_APP_URL || 'http://localhost:8001';

const getBreeds = async (callback: Function) => {
 return fetch(`${url}/breeds`)
   .then((res) => res.json())
   .then((data) => callback(data))
}

const getByName = async (name: String, callback: Function) => {
  return fetch(`${url}/breeds/name/${name}`)
   .then((res) => res.json())
   .then((data) => callback(data))
}

export {
  getBreeds,
  getByName,
};
