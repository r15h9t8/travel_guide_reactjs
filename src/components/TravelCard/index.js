import {ListItem, Image, HeadingText, DescriptionText} from './styledComponents'

const TravelCard = props => {
  const {travelCardDetails} = props
  const {name, imageUrl, description} = travelCardDetails

  return (
    <ListItem>
      <Image src={imageUrl} alt={name} />
      <HeadingText>{name}</HeadingText>
      <DescriptionText>{description}</DescriptionText>
    </ListItem>
  )
}

export default TravelCard
