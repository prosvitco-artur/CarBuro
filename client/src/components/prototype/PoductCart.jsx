import Disc from '../../common/img/disc.png'
import { NavLink } from 'react-router-dom'
import { Button } from './Button/Button';
import s from './ProductCart.module.css';
import { ReactComponent as HeartPlus } from '../../common/img/icon/heartPlus.svg';


const CartComponent = (props) => {
  return (
    <NavLink className={s.popularProduct} to="item">
      <div className="div box_shadow_4 box_shadow_hover size_14">
        <img src={Disc} alt="disc" />
        <p>{props.description}</p>
        <p className={s.cat}>{props.category}</p>
        <p className={s.price + ' color_red'}>${props.price}</p>

        <Button
          title={'ADD TO CART'}
          type={'red'}
          classStyle={""}
        />
        <HeartPlus onClick={()=>alert('test')} className={s.heartPlus} />
      </div>
    </NavLink>
  )
}

export default CartComponent;