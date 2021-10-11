import Rainbow from '../../common/img/rainbow.png'
import { ReactComponent as VectorRight } from '../../common/img/icon/vector_right.svg';
import { ReactComponent as VectorLeft } from '../../common/img/icon/vector_left.svg';
import CartComponent from '../prototype/PoductCart';

const PopularProduct = (props) => {
  return (
    <div className="container rubik_regular">
      <div className="popular_product rubik_regular grid grid_columns_4 grid_gap_30 text_center">
        <CartComponent
          image={Rainbow}
          description={'Mersedes Wiper Blade Frame Rear Rear 350 mm (14")'}
          category={'Wiper blades'}
          price={'235'}
        />

        <CartComponent
          image={Rainbow}
          description={'Mersedes Wiper Blade Frame Rear Rear 350 mm (14")'}
          category={'Wiper blades'}
          price={'235'}
        />

        <CartComponent
          image={Rainbow}
          description={'Mersedes Wiper Blade Frame Rear Rear 350 mm (14")'}
          category={'Wiper blades'}
          price={'235'}
        />
        <CartComponent
          image={Rainbow}
          description={'Mersedes Wiper Blade Frame Rear Rear 350 mm (14")'}
          category={'Wiper blades'}
          price={'235'}
        />
      </div>
      <div className="pagination text_center">
        <button className="border_red radius_50 size_14 background_white button_hover button">VIEW ALL</button>
        <div className="float_right">
          <VectorLeft />
          <span>1</span>
          <span>of</span>
          <span>8</span>
          <VectorRight />
        </div>
      </div>
    </div>

  )
}

export default PopularProduct;