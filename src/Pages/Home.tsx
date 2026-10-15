import FilterSlider from "../Components/Home/FilterSlider/FilterSlider";
import HowToOrder from "../Components/Home/HowToOrder/HowToOrder";
import IconsCards from "../Components/Home/IconsCards";
import ProteinEducation from "../Components/Home/ProteinEducation";
import ProteinGrid from "../Components/Home/ProteinGrid/ProteinGrid";
import Slider from "../Components/Home/Slider/Slider";
import Teaser from "../Components/Home/Teaser";
import WhyProtein from "../Components/Home/WhyProtein";

function Home() {
  return (
    <div>
      <Teaser />
      <IconsCards />
      <WhyProtein />
      <FilterSlider />
      <Slider />
      <ProteinGrid />
      <ProteinEducation />
      <HowToOrder />
    </div>
  );
}

export default Home;
