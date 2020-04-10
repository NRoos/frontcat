const getBreeds = (callback: Function) => {
 return fetch('http://localhost:8001/breeds')
   .then((res) => res.json())
   .then((data) => callback(data))
   .catch((e) => console.log(e));

}

export default getBreeds;