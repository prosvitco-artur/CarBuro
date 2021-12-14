

import CatalogCart from '../prototype/CatalogCart';
import CartComponent from '../prototype/PoductCart';
import Rainbow from '../../common/img/rainbow.png'
import SparkPlugs from '../../common/img/nessesary/spark-plugs.png';

const Catalog = () => {
    return (
        <>
            <div className="nessesary container">
                <div className="grid grid_columns_6 grid_gap_30 text_center rubik_regular">
                    <CatalogCart
                        image={SparkPlugs}
                        name={'Spark plugs'}
                    />
                    <CatalogCart
                        image={SparkPlugs}
                        name={'Spark plugs'}
                    />
                    <CatalogCart
                        image={SparkPlugs}
                        name={'Spark plugs'}
                    />
                    <CatalogCart
                        image={SparkPlugs}
                        name={'Spark plugs'}
                    />
                    <CatalogCart
                        image={SparkPlugs}
                        name={'Spark plugs'}
                    />
                    <CatalogCart
                        image={SparkPlugs}
                        name={'Spark plugs'}
                    />
                    <CatalogCart
                        image={SparkPlugs}
                        name={'Spark plugs'}
                    />
                    <CatalogCart
                        image={SparkPlugs}
                        name={'Spark plugs'}
                    />
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
        </>
    );
}

export default Catalog;