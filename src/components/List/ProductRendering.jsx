import ProductCard from "../UniversalComponents/ProductCard";
import { SlEqualizer } from "react-icons/sl";

export default function ProductRendering({data}) {
    const products = data
    console.log(data)


    return (
        <>
        
        <h1>HAJ</h1>
        <section className="productlist">
            
            {products.map(item=>(
                <ProductCard
                key={item.id}
                headericon={SlEqualizer}
                headertext="Compare"
                title={item.name}
                price={item.price}
                btnText="Add to cart"
                btnPath="details"
                Id={item.id}
                />
            ))}
        </section>
        </>
    )
}