import { Product } from "../../services/ProductService";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/image/banner.png";
import slider2 from "../../assets/image/800ebfd7bdee68681570920df1d1df37.png.webp";
import slider3 from "../../assets/image/e8d78363bf58c26dfa5637119bcd7fd8.png.webp";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import SliderProduct from "../../components/SliderProduct/SliderProduct";
import { CustomProductCard } from "../../components/SliderProduct/style";
import ProductHeader from "../../components/ProductHeader/ProductHeader";
import FooterTop from "../../components/FooterTop/FooterTop";
import FooterMid from "../../components/FooterMid/FooterMid";
import FooterEnd from "../../components/FooterEnd/FooterEnd";
import { BackgroundImage, BackgroundWrapper, Content } from "./style";

const HomePage = () => {
  return (
    <div>
      <div style={{ padding: "0 240px", backgroundColor: "#F4F6F8" }}>
        <div>
          <SliderComponent arrSlider={[slider1, slider2, slider3]} />
        </div>
        <div
          style={{
            backgroundColor: "#025FCA",
            padding: "30px",
          }}
        >
          <SliderProduct arrSlider={Product} />
        </div>

        <div style={{ display: "flex", background: "#F4F6F8" }}>
          <div>
            <FilterSidebar></FilterSidebar>
          </div>
          <div>
            <div
              style={{
                margin: "10px 20px",
              }}
            >
              <ProductHeader></ProductHeader>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "15px",
                gap: "12px",
              }}
            >
              {Product.map((product) => (
                <CustomProductCard
                  key={product.id}
                  product={product}
                ></CustomProductCard>
              ))}
            </div>
          </div>
        </div>

        <FooterTop></FooterTop>
       
      </div>
       <div style={{ backgroundColor: "#eff6ff", padding:'0 240px' }}>
          <FooterMid></FooterMid>
        </div>
      <BackgroundWrapper>
        <BackgroundImage />
        <Content>
          <FooterEnd></FooterEnd>
        </Content>
      </BackgroundWrapper>
    </div>
  );
};

export default HomePage;
