import {Component} from 'react'
import './index.css'

class MoveDetails extends Component {
  state = {data: this.props}

  render() {
    const {data} = this.state
    const {eachMove} = data
    console.log(eachMove)
    return (
      <div>
        <div className="house-cont">
          <h2>Additional Information</h2>
          <button type="button">Edit Additional Info</button>
        </div>
        <p>Test Data</p>

        <div className="house-cont">
          <h2>House Details</h2>
          <button type="button">Edit House Details</button>
        </div>
        <h2 className="house-red-heading">Existing House Details</h2>
        <div className="house-details">
          <div>
            <h2>Floor No.</h2>
            <h3>{eachMove.old_floor_no}</h3>
          </div>

          <div>
            <h2>Elevator Available.</h2>
            <h3>{eachMove.old_elevator_availability}</h3>
          </div>

          <div>
            <h2>Distance from Elevator / Staircase to truck</h2>
            <h3>{eachMove.old_parking_distance}</h3>
          </div>
        </div>
        <h2 className="house-red-heading">New House Details</h2>
        <div className="house-details">
          <div>
            <h2>Floor No.</h2>
            <h3>{eachMove.new_floor_no}</h3>
          </div>

          <div>
            <h2>Elevator Available.</h2>
            <h3>{eachMove.new_elevator_availability}</h3>
          </div>

          <div>
            <h2>Distance from Elevator / Staircase to truck</h2>
            <h3>{eachMove.new_parking_distance}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default MoveDetails
