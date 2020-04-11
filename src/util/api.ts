const url = process.env.REACT_APP_URL || 'http://localhost:8001';

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
}

const getBreeds = async (callback: Function) => {
 return fetch(`${url}/graphql`, {
   ...options,
  body: JSON.stringify({ query: '{ allBreeds { name, origin, description, temperament } }' }),
  })
   .then((res) => res.json())
   .then(({ data }) => callback(data.allBreeds))
}


const getByName = async (name: String, callback: Function) => {
  return fetch(`${url}/graphql`, {
    ...options,
    body: JSON.stringify({ query: `{ breedByName(name: "${name}") { name, origin, description, temperament } }` }),
    })
    .then(res => {
      console.log(res);
      return res;
    })
    .then((res) => res.json())
    .then(({data}) => callback(data.breedByName))
}

export {
  getBreeds,
  getByName,
};
