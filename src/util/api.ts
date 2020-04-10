const getBreeds = async (callback: Function) => {
 return fetch('http://localhost:8001/breeds')
   .then((res) => res.json())
   .then((data) => callback(data))
   .catch((e) => console.log(e));
}

const getByName = async (name: String, callback: Function) => {
  return fetch(`http://localhost:8001/breeds/name/${name}`)
   .then((res) => res.json())
   .then((data) => callback(data))
   .catch((e) => console.log(e));
}

export {
  getBreeds,
  getByName,
};
