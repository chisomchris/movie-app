import Features from "../../Component/Features/features";
import Footer from "../../Component/Footer/footer";
import Header from "../../Component/Header/header";
import Trend from "../Trend/trend";

function Home(){
    return(
        <div className="h-[2845px] w-full">
            <Header/>
            <Features />
            <Trend/>
            <Footer/>
        </div>
    )
}
export default Home;