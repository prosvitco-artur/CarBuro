import Disc from '../../common/img/disc.png'
import { NavLink } from 'react-router-dom'
import { Button } from './Button/Button';


const CartComponent = (props) => {
  return (
    <NavLink to="item">
      <div className="box_shadow_4 box_shadow_hover size_14">
        <img src={Disc} alt="disc" />
        <p>{props.description}</p>
        <p className="cat">{props.category}</p>
        <p className="price color_red">${props.price}</p>
        <Button
          title={'ADD TO CART'}
          type={'red'}
          classStyle={""}
        />

      </div>
    </NavLink>
  )
}

export default CartComponent;