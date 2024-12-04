import Banner from "../components/Banner"
import Header from "../components/Header"
import SpecialiltyMenu from "../components/SpecialiltyMenu"
import TopDoctors from "../components/TopDoctors"

const Home = () => {
  return (
    <div>
        <Header />
        <SpecialiltyMenu />
        <TopDoctors/>
        <Banner/>
    </div>
  )
}

export default Home