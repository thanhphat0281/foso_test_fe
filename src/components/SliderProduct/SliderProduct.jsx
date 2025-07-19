import { Button, Image } from "antd";
import Slider from "react-slick";
import ProductCard from "../ProductCart/ProductCart";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CustomProductCard, NextArrow, PrevArrow, ProductItem } from "./style";

const Prev = (props) => {
  const { onClick } = props;
  return <PrevArrow shape="circle" icon={<LeftOutlined />} onClick={onClick} />;
};

const Next = (props) => {
  const { onClick } = props;
  return (
    <NextArrow shape="circle" icon={<RightOutlined />} onClick={onClick} />
  );
};

const SliderProduct = ({ arrSlider }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: <Prev />,
    nextArrow: <Next />,
  };

  return (
    <Slider {...settings}>
      {arrSlider.map((items) => {
        return (
          <div>
            <ProductCard key={items} product={items}></ProductCard>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderProduct;
