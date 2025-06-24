import { useParams } from "react-router"
import Specifications from "../components/Details/specifications";
import ProductDetails from "../components/Details/Product-details";




export default function Detail(){

    const {id}= useParams();
    console.log(id)

    return  (
        <>


        <Specifications/>
        <ProductDetails/>
        <h1 className="headline">PRODUCT</h1>
        </>
    )
}

