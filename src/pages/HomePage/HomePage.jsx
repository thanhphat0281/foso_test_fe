import { Product } from "../../services/ProductService";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/image/banner.png";
import slider2 from "../../assets/image/800ebfd7bdee68681570920df1d1df37.png.webp";
import slider3 from "../../assets/image/e8d78363bf58c26dfa5637119bcd7fd8.png.webp";
import ProductCard from "../../components/ProductCart/ProductCart";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import SliderProduct from "../../components/SliderProduct/SliderProduct";
import { CustomProductCard } from "../../components/SliderProduct/style";
import ProductHeader from "../../components/ProductHeader/ProductHeader";
import FooterTop from "../../components/FooterTop/FooterTop";
import FooterMid from "../../components/FooterMid/FooterMid";
import FooterEnd from "../../components/FooterEnd/FooterEnd";
import bgFooter from "../../assets/image/57eeb82522ca9397b4ceb087337a194794c008a6.jpg";

{
  Product.map((item, index) => {
    // console.log(item)
    return <div key={item.id}>{item.name}</div>;
  });
}

const HomePage = () => {
  return (
    <div>
      <div style={{ padding: "0 240px",backgroundColor:'#F4F6F8'}}>
        <div>
          <SliderComponent arrSlider={[slider1, slider2, slider3]} />
        </div>
        <div
          style={{
            backgroundColor: "#025FCA",
            padding: "20px",
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
                // justifyContent: "space-between",
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
        <FooterMid></FooterMid>
      </div>
      <div style={{ backgroundImage: `url(${bgFooter})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
        <div style={{ padding: "0 240px" }}>
          <FooterEnd></FooterEnd>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
