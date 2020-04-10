const url = process.env.URL || 'http://localhost:8001';

const getBreeds = async (callback: Function) => {
 return fetch(`${url}/breeds`)
   .then((res) => res.json())
   .then((data) => callback(data))
   .catch((e) => console.log(e));
}

const getByName = async (name: String, callback: Function) => {
  return fetch(`${url}/breeds/name/${name}`)
   .then((res) => res.json())
   .then((data) => callback(data))
   .catch((e) => console.log(e));
}

export {
  getBreeds,
  getByName,
};
