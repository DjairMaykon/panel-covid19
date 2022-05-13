const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers: RequestInit = {
  method: 'get',
  mode: 'cors',
  cache: 'default',
}

export function getCountry(country: string) {
  return fetch(`${path}/${country}`, headers).then(response => response.json())
}

export type ApiResponse = {
  active: number
  cases: number
  casesPerOneMillion: number
  country: string
  critical: number
  deaths: number
  deathsPerOneMillion: number
  recovered: number
  testsPerOneMillion: number
  todayCases: number
  todayDeaths: number
  totalTests: number
}
