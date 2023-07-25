import * as S from './styles'

interface IProps {
  item: {
    link: string
    text: string
    subtext: string
  }
}

const OptionItem: React.FC<IProps> = ({ item }) => {
  const { link, text, subtext } = item

  return (
    <S.Container href={link}>
      <S.Text>{text}</S.Text>
      <S.SubText>{subtext}</S.SubText>
    </S.Container>
  )
}

export default OptionItem
