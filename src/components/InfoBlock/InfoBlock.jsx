import { Button } from "../../utils/components/Button";

const InfoBlock = (props) => {
    return (
        <div className="info_header">
        <div className="container">
          <p className="give_your ruso_one">
            Give your car one more chance
          </p>
          <p className="get_a ruso_one rubik_regular">
            Get a <strong>-10%</strong> discount on your first order
            and free shipping on orders over <strong>$1000</strong>
          </p>
          <Button text={"GO TO CATALOG"} />
          <button className="background_red radius_50 height_50">
            GO TO CATALOG
          </button>
        </div>
      </div>
    )
}

export default InfoBlock;