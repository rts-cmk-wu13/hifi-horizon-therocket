import Intro from "../components/Home/Intro";
import Newsletter from "../components/Home/Newsletter";
import HomeProducts from "../components/Home/HomeProducts";
import { useLoaderData } from "react-router";


export default function Home(){
    const products = useLoaderData()
    // console.log(products);


    return(
        <>
        <section className="home">
        
        <HomeProducts
        data={products}
        />
        <Intro/>
        <Newsletter/>
        </section>
        </>
    )
}