import {Component} from 'react'

import Sidebar from '../Sidebar'
import MovesTracker from '../MovesTracker'

import './index.css'

class Home extends Component {
  state = {movesData: []}

  componentDidMount() {
    this.fetchingMoves()
  }

  fetchingMoves = async () => {
    const url = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'

    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const formattedata = data.Customer_Estimate_Flow
    this.setState({movesData: formattedata})
  }

  render() {
    const {movesData} = this.state
    console.log(movesData)
    return (
      <div className="main-home-cont">
        <Sidebar />
        <div>
          <div>
            {movesData.map(eachItem => (
              <MovesTracker eachMove={eachItem} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
