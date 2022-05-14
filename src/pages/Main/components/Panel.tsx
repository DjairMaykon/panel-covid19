import { Card, Typography, Button, Select, MenuItem } from '@components/index'
import { Countries, CountryType } from '@commons/constants/countries'
import { CardPanelContentStyled, ItemStyled, HeaderStyled } from './style'

const navigatorHasShare = navigator.share

type PanelProps = {
  onChange: (country: CountryType) => void
  country: CountryType
  updateAt: string
  recovered?: number
}
export function Panel({ onChange, country, updateAt, recovered }: PanelProps) {
  const textCovid19 = `País: ${country} - recuperados: ${recovered}`

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/',
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <HeaderStyled>
            <Typography variant="h5" component="span" color="primary">
              COVID19
            </Typography>
            <Typography variant="h6" component="span" color="primary">
              Painel Coronavírus
            </Typography>
            <Typography variant="body2" component="span" color="primary">
              Atualizado em: {updateAt}
            </Typography>
          </HeaderStyled>
          <div className="pt-2">
            <Select
              onChange={event => onChange(event.target.value as CountryType)}
              value={country}
            >
              {Object.entries(Countries).map(([key, value]) => {
                return (
                  <MenuItem key={`country-${key}`} value={key}>
                    <ItemStyled>
                      <div>{value.label}</div>
                      <img src={value.flag} alt={`País-${value.label}`} />
                    </ItemStyled>
                  </MenuItem>
                )
              })}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}
