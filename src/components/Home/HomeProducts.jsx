// import { useLoaderData } from "react-router"
import Button from "../UniversalComponents/Button";
import ProductCard from "../UniversalComponents/ProductCard";

export default function HomeProducts({data}) {
    const products = data.filter(item=> item.category === 'CDplayers')
    // const products = data
    console.log(products);

    return (
        <>
        
        <section className="homeproducts">
            <header className="homeproducts__header">
            <h1 className="homeproducts__headline">popular products</h1>
            <Button
            text="See more products"
            path="list"
            classname="homeproducts"
            />
            </header>

            <section className="homeproducts__products">
                {products.map(item=>(
                    <ProductCard
                    key={item.id}
                    title={item.name}
                    price={item.price}
                    Id={item.id}
                    btnText="Read more"
                    btnPath="details"
                    />
                ))}
                {/* <ProductCard
                pagefooter="home"
                />
                <ProductCard
                pagefooter="home"
                />
                <ProductCard
                pagefooter="home"
                />
                <ProductCard
                pagefooter="home"
                /> */}
            </section>
        </section>
        </>
    )
}