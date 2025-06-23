import ListNavigation from "../components/List/ListNavigation";
import ProductRendering from "../components/List/ProductRendering";
import { useLoaderData } from "react-router";
import Chat from "../components/List/Chat"; 

export default function List() {
  const products = useLoaderData();

  return (
    <>
      <section className="list">
        <ListNavigation />
      
        <ProductRendering data={products} />
      </section>
        <Chat />
    </>
  );
}
