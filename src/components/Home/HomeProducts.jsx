// import { useLoaderData } from "react-router"
import { useLoaderData } from "react-router";
import Button from "../UniversalComponents/Button";
import ProductCard from "../UniversalComponents/ProductCard";

export default function HomeProducts() {
    const products = useLoaderData()
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
                <ProductCard
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
                />
            </section>
        </section>
        </>
    )
}