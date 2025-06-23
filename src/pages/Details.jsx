import { useParams } from "react-router"
import ProductDetails from "../components/Details/Product-details";



export default function Detail(){

    const {id}= useParams();

 

    return  (
        <>
        <h2>DETAILS</h2>
           <ProductDetails />
        </>
    )
}

