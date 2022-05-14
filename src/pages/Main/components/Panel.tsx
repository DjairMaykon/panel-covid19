import { Card, Typography, Select, MenuItem } from '@components/index'
import { Countries, CountryType } from '@commons/constants/countries'
import { CardPanelContentStyled, ItemStyled, HeaderStyled } from './style'

type PanelProps = {
  onChange: (country: CountryType) => void
  country: CountryType
  updateAt: string
}
export function Panel({ onChange, country, updateAt }: PanelProps) {
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
      </CardPanelContentStyled>
    </Card>
  )
}
