import Header from "../components/UniversalComponents/Header";
import Intro from "../components/Home/Intro";
import Newsletter from "../components/Home/Newsletter";

export default function Home(){



    return(
        <>
        <section className="home">
        <h1 className="home__headline">Home</h1>
        </section>
        <Intro/>
        <Newsletter/>
        </>
    )
}