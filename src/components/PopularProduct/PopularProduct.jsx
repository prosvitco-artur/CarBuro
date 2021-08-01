import Disc from '../../common/img/disc.png'
import Rainbow from '../../common/img/rainbow.png'
import Wheel from '../../common/img/wheel.png'
import Radiator from '../../common/img/radiator.png'
import {ReactComponent as VectorRight} from '../../common/img/icon/vector_right.svg';
import {ReactComponent as VectorLeft} from '../../common/img/icon/vector_left.svg';

const PopularProduct = (props) => {
return ( 
    <div className="container rubik_regular">
        <div className="popular_product rubik_regular grid grid_columns_4 grid_gap_30 text_center">
          <div className="box_shadow_4 box_shadow_hover size_14">
            <img src={Disc} alt="disc" />
            <p>Mersedes Front OE Stock Replacement Brake Rotor</p>
            <p className="cat">Brake disk</p>
            <p className="price color_red">$235</p>
            <button className="background_red radius_50 color_white">
              ADD TO CART
            </button>
          </div>
          <div className="box_shadow_4 box_shadow_hover size_14">
            <img src={Rainbow} alt="rainbow" />
            <p>Mersedes Wiper Blade Frame Rear Rear 350 mm (14")</p>
            <p className="cat">Wiper blades</p>
            <p className="price color_red">$235</p>
            <button className="background_red radius_50 color_white">
              ADD TO CART
            </button>
          </div>
          <div className="box_shadow_4 box_shadow_hover size_14">
            <img src={Wheel} alt="wheel" />
            <p>Michelin Winter Tyre Agilis Alpin 225/65 R16 112R</p>
            <p className="cat">Winter Tires</p>
            <p className="price color_red">$235</p>
            <button className="background_red radius_50 color_white">
              ADD TO CART
            </button>
          </div>
          <div className="box_shadow_4 box_shadow_hover size_14">
            <img src={Radiator} alt="radiator" />
            <p>Genuine XL Heater Core Replaces OE Number 8D1-819-031 C</p>
            <p className="cat">Heater Core</p>
            <p className="price color_red">$235</p>
            <button className="background_red radius_50 color_white">
              ADD TO CART
            </button>
          </div>
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