import { useParams } from "react-router"
import Specifications from "../components/Details/specifications";

export default function Detail(){

    const {id}= useParams();

    return  (
        <>
        <h2>DETAILS</h2>

        <Specifications/>
        </>
    )
}

