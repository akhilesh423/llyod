import {Component} from 'react'

import {BsArrowRight} from 'react-icons/bs'
import {AiFillHome, AiTwotoneCalendar, AiFillWarning} from 'react-icons/ai'
import {GiPathDistance} from 'react-icons/gi'
import {RiBuilding2Fill} from 'react-icons/ri'
import {IoMdCheckbox} from 'react-icons/io'
import MoveDetails from '../MoveDetails'
import './index.css'

class MovesTracker extends Component {
  state = {data: this.props, isViewClicked: false}

  onClickViewDetails = () => {
    this.setState(prevState => ({
      isViewClicked: !prevState.isViewClicked,
    }))
  }

  render() {
    const {data, isViewClicked} = this.state
    const {eachMove} = data
    console.log(isViewClicked)

    return (
      <div className="move-tracker-main-container">
        <div className="move-tracker-first">
          <div>
            <h2>FROM</h2>
            <h3>{eachMove.moving_from}</h3>
          </div>

          <div className="arrow">
            <BsArrowRight className="icon" />
          </div>

          <div>
            <h2>TO</h2>
            <h3>{eachMove.moving_to}</h3>
          </div>
          <div>
            <h2>Request#</h2>
            <h3 className="request-text">{eachMove.estimate_id}</h3>
          </div>
        </div>
        <div className="move-tracker-second">
          <div>
            <AiFillHome className="icon" />
            <h3>{eachMove.property_size}</h3>
          </div>

          <div>
            <RiBuilding2Fill className="icon" />
            <h3>{eachMove.total_items}</h3>
          </div>

          <div>
            <GiPathDistance className="icon" />
            <h3>{eachMove.distance}</h3>
          </div>
          <div>
            <AiTwotoneCalendar className="icon" />
            <h3>{eachMove.date_created}</h3>
          </div>
          <div>
            <IoMdCheckbox className="icon" />
            <h3>Is Fexible</h3>
          </div>
          <div>
            <button
              className="button1"
              onClick={this.onClickViewDetails}
              type="button"
            >
              view more details
            </button>
          </div>
          <div>
            <button className="button2" type="button">
              Quotes awaiting
            </button>
          </div>
        </div>
        <div className="disclamier">
          <AiFillWarning className="icon" />
          <p>
            <span className="dis">Disclaimer: </span>Please update your move
            date before two days of shifting
          </p>
        </div>
        {isViewClicked && <MoveDetails eachMove={eachMove} />}
        <hr className="line" />
      </div>
    )
  }
}

export default MovesTracker
