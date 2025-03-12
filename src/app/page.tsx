import ComponentSection_1 from "./component/section-1/page";
import ComponentSection_2 from "./component/section-2/page";
import ComponentHeader from "./component/header/page";
import ComponentRoom from "./component/room/page";
import ComponentSuites from "./component/suites/page";
import ComponentVillas from "./component/villas/villas";
import ComponentSlideIMG from "./component/slideIMG/page";
import ComponentLocation from "./component/location/page";
export default function Home() {
  return (
    <>
  <ComponentHeader/>
  <ComponentSection_1/>
  <ComponentSection_2/>
  <ComponentRoom/>
  <ComponentSuites/>
  <ComponentVillas/>
  <ComponentSlideIMG/>
  <ComponentLocation/>
    </>
  );
}
