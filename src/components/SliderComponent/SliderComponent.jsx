import { Image } from "antd";
import Slider from "react-slick";

const SliderComponent = ({ arrSlider }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
  };

  return (
    <Slider {...settings}>
          {arrSlider.map((items) => {
        return (
        <Image src={items} preview={false} width="100%" height="500px" alt="slider" />
        )
      })}
    </Slider>
  );
};

export default SliderComponent;
