import { memo, useCallback, useEffect, useState } from 'react'
import { getCountry, ApiResponse } from '@service/api'
import { ContainerStyled } from './style'
import Board from './components/Board'

function Main() {
  const [data, setData] = useState<ApiResponse | null>(null)
  const [country, setCountry] = useState<string>('brazil')

  const getCovidData = useCallback((country: string) => {
    getCountry(country).then((data: ApiResponse) => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, setCountry])

  return (
    <ContainerStyled>
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

export default memo(Main)
