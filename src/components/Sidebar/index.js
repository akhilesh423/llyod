import {FaTruckMoving} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {BsChatSquareQuote} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Sidebar = () => (
  <ul className="sidebar-cont">
    <li>
      <FaTruckMoving />
      <h2 className="h22">MY MOVES</h2>
    </li>
    <li>
      <CgProfile />
      <h2 className="h22">PROFILE</h2>
    </li>
    <li>
      <BsChatSquareQuote />
      <h2 className="h22">GET QUOTE</h2>
    </li>
    <li>
      <FiLogOut />
      <h2 className="h22">LOGOUT</h2>
    </li>
  </ul>
)

export default Sidebar
