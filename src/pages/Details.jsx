import { useParams } from "react-router"
import Specifications from "../components/Details/specifications";

export default function Detail(){

    const {id}= useParams();

    return  (
        <>

        <Specifications/>
        </>
    )
}

