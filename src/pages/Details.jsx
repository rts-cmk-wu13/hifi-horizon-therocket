import { useParams } from "react-router"
import ProductDetails from "../components/Details/Product-details";



export default function Detail(){

    const {id}= useParams();
    console.log(id)

 

    return  (
        <>
        <ProductDetails/>
        <h1 className="headline">PRODUCT</h1>
        </>
    )
}

