import CategoryMenu from "../CategoryMenu/CategoryMenu";
import NavEnd from "../NavEnd/NavEnd";
import NavMid from "../Navmid/Navmid";
import NavTop from "../Navtop/Navtop";

const HeaderComponent = () => {
  return (
    <div>
      <div>
        <NavTop></NavTop>
        <NavMid></NavMid>
        <CategoryMenu></CategoryMenu>
        
      </div>
      <div style={{backgroundColor:'#F4F6F8'}}>
        <NavEnd></NavEnd>
      </div>
    </div>
  );
};

export default HeaderComponent;
