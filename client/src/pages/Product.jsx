import CartComponent from '../components/prototype/PoductCart';
import Rainbow from '../common/img/rainbow.png'
import WheelsTires from '../common/img/category/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0_mv2 1.png';
import ProductEvaluation from '../components/prototype/ProductReting';
import InfoBox from '../components/prototype/InfoBox';

const ProductSingle = () => {
    return (
        <>
            <div className="shop_by_categories container">
                <div className="rubik_regular grid grid_columns_2 grid_gap_30">
                    <div className="box_shadow_4 box_shadow_hover">
                        <img alt="category" src={WheelsTires} />
                    </div>
                    <div>
                        <strong>Crown Bumper - Front, CAPA Certified</strong>
                        <p>
                            <span>Availible:</span>
                            <span>In stock</span>
                        </p>
                        <p>
                            <span>Code:</span>
                            <span>TA2340596</span>
                        </p>
                        <p>
                            <span>Brand:</span>
                            <span>Crown</span>
                        </p>
                        <ProductEvaluation ret={2} reviews={23} />
                        <InfoBox />
                    </div>
                </div>

                <div className="container rubik_regular">
                    <h2>Recently viewed products</h2>
                    <div className="rubik_regular grid grid_columns_4 grid_gap_30 text_center">

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
                </div>
            </div>
        </>

    );
}

export default ProductSingle;