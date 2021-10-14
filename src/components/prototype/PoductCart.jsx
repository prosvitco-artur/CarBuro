import Disc from '../../common/img/disc.png'
import Rainbow from '../../common/img/rainbow.png'
import Wheel from '../../common/img/wheel.png'
import Radiator from '../../common/img/radiator.png'
import { NavLink } from 'react-router-dom'


const CartComponent = (props) => {
  return (
    <NavLink to="item">
      <div className="box_shadow_4 box_shadow_hover size_14">
        <img src={Disc} alt="disc" />
        <p>{props.description}</p>
        <p className="cat">{props.category}</p>
        <p className="price color_red">${props.price}</p>
        <button className="background_red radius_50 color_white">
          ADD TO CART
        </button>
      </div>
    </NavLink>
  )
}

export default CartComponent;