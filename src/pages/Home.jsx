import Header from "../components/UniversalComponents/Header";
import Intro from "../components/Home/Intro";
import Newsletter from "../components/Home/Newsletter";
import HomeProducts from "../components/Home/HomeProducts";


export default function Home(){



    return(
        <>
        <section className="home">
        
        <HomeProducts/>
        <Intro/>
        <Newsletter/>
        </section>
        </>
    )
}