const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers: RequestInit = {
  method: 'get',
  mode: 'cors',
  cache: 'default',
}

function getCountry(country: string) {
  return fetch(`${path}/${country}`, headers).then(response => response.json())
}

export default {
  getCountry,
}
