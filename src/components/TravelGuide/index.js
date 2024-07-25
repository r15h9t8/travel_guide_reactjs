import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TravelCard from '../TravelCard'

import {
  MainContainer,
  Heading,
  TravelCardContainer,
  TravelList,
} from './styledComponents'

class TravelGuide extends Component {
  state = {packages: [], isLoading: true}

  componentDidMount() {
    this.makingApiCall()
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  makingApiCall = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(product => ({
        id: product.id,
        name: product.name,
        imageUrl: product.image_url,
        description: product.description,
      }))
      this.setState({
        isLoading: false,
        packages: updatedData,
      })
    }
  }

  renderSuccessView = () => {
    const {packages} = this.state
    return (
      <TravelList>
        {packages.map(each => (
          <TravelCard key={each.id} travelCardDetails={each} />
        ))}
      </TravelList>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <MainContainer>
        <Heading>Travel Guide</Heading>
        <TravelCardContainer>
          {isLoading === true
            ? this.renderLoadingView()
            : this.renderSuccessView()}
        </TravelCardContainer>
      </MainContainer>
    )
  }
}

export default TravelGuide
