import { useCallback, useEffect, useState } from 'react'
import { getCountry, ApiResponse } from '@service/api'
import { ContainerStyled } from './style'
import { CountryType } from '@commons/constants/countries'
import { Board } from './components/Board'
import { Panel } from './components/Panel'

export function Main() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [country, setCountry] = useState<CountryType>('brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country: CountryType) => {
    getCountry(country).then((data: ApiResponse) => setData(data))
  }, [])

  useEffect(() => {
    setData(null)
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = (target: CountryType) => {
    setCountry(target)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel updateAt={updateAt} onChange={handleChange} country={country} />
      </div>
      <Board
        cases={data?.cases}
        deaths={data?.deaths}
        recovered={data?.recovered}
        todayCases={data?.todayCases}
        todayDeaths={data?.todayDeaths}
      />
    </ContainerStyled>
  )
}
