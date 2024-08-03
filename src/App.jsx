import AboutBuilders from "./Components/About Builders/AboutBuilders.jsx"
import AboutProject from "./Components/About Project/AboutProject.jsx"
import Architectular from "./Components/Architecttural/Architectular.jsx"
import BuildingProgress from "./Components/Building Progress/BuildingProgress.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Form from "./Components/Form/Form.jsx"
import Header from "./Components/Header/Header.jsx"
import HouseMeasure from "./Components/House Measure/HouseMeasure.jsx"
import LocationOfBlocks from "./Components/LocationOfBlocks/LocationOfBlocks.jsx"
import ObjectArchitecture from "./Components/Object Architecture/ObjectArchitecture.jsx"
import PossesedLocation from "./Components/PosesedLocation/PossesedLocation.jsx"


function App() {

  return (
    <>
  <Header />
  <AboutProject />
  <PossesedLocation />
  <LocationOfBlocks />
  <ObjectArchitecture />
  <HouseMeasure />
  <Architectular />
  <Form />
  <BuildingProgress />
  <AboutBuilders />
  <Footer />
    </>
  )
}

export default App
