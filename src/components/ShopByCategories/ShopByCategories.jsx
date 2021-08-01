const ShopByCategories = (props) => {
    return (
        <div className="shop_by_categories container">
        <h2>Shop by Categories</h2>
        <div className="rubik_regular grid grid_columns_4 grid_gap_30">
          <div className="grid_22 box_shadow_4 cat_item box_shadow_hover ">
            <div className="name_cat background_grey">
              <img alt="category" style={{ top: '-60px', left: ' -10px', position: 'absolute' }}
                src="img/category/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0_mv2 1.png" />
              <span>Wheels & Tires</span>
            </div>
          </div>
          <div className="box_shadow_4 cat_items box_shadow_hover">
            <div className="name_cat background_grey">
              <img style={{ top: '-18px', left: '-4px', position: 'absolute' }} alt='category'
                src="img/category/kisspng-car-air-filter-spare-part-autozone-disc-brake-auto-parts-5ac398e1dcd5e8 1.png" />
              <span>Repair parts</span>
            </div>
          </div>
          <div className="box_shadow_4 cat_items box_shadow_hover">
            <div className="name_cat background_grey">
              <img style={{ top: '-10px', left: '-1px', position: 'absolute' }} alt='category'
                src="img/category/kisspng-car-2014-mazda6-2018-mazda6-chassis-car-structure-5adc3b4f2c2ed8 1.png" />
              <span>Body parts</span>
            </div>
          </div>
          <div className="box_shadow_4 cat_items box_shadow_hover">
            <div className="name_cat background_grey">
              <img style={{ top: '-24px', left: '0px', position: 'absolute' }} alt='category'
                src="img/category/toyota_service_center_oil_splash 1.png" />
              <span>Oil & Fluids</span>
            </div>
          </div>
          <div className="box_shadow_4 cat_items box_shadow_hover">
            <div className="name_cat background_grey">
              <img style={{ top: '-9px', left: '-15px', position: 'absolute' }} alt='category'
                src="img/category/kisspng-car-luxury-vehicle-automobile-repair-shop-motor-ve-5ae177b35428e7 1.png" />
              <span>Lighting</span>
            </div>
          </div>
          <div className="box_shadow_4 cat_items box_shadow_hover">
            <div className="name_cat background_grey">
              <img style={{ top: '-21px', left: ' -10px', position: 'absolute' }}
                alt='category' src="img/category/Group_120.png" />
              <span>Electronics</span>
            </div>
          </div>
          <div className="box_shadow_4 cat_items box_shadow_hover">
            <div className="name_cat background_grey">
              <img style={{ top: '-53px', left: '-11px', position: ' absolute' }} alt='category'
                src="img/category/favpng_car-seat-ford-f-series-ford-expedition-upholstery 1.png" />
              <span>Interior</span>
            </div>
          </div>
          <div className="box_shadow_4 cat_items box_shadow_hover">
            <div className="name_cat background_grey">
              <img style={{ top: '-20px', left: '-4px', position: 'absolute' }} alt='category'
                src="img/category/pngkit_png-body-parts_3911494 1.png" />
              <span>Exterior</span>
            </div>
          </div>
          <div className="box_shadow_4 cat_items box_shadow_hover">
            <div className="name_cat background_grey">
              <img style={{ top: '-19px', left: '0px', position: 'absolute' }} className="tools"
                alt='category' src="img/category/imgbin_torx-set-tool-bit-socket-wrench-png 1.png" />
              <span>Tools & Garage</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ShopByCategories;