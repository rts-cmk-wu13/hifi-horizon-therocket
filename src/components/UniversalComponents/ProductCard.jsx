import Button from "./Button";

export default function ProductCard({headertext, headericon, title, price, pagefooter, Id, btnText, btnPath}) {
    return (
        <>
        
        <article className="productcard">

            <header className="productcard__header">
                <p className="productcard__header-text">{headertext}</p>
                <span>{headericon}</span>
            </header>

            <section className="productcard__details">
                <div className="productcard__img-container">
                    <div className="productcard__img" />
                </div>
                <p className="productcard__textbox">
                    {title}
                    <span className="productcard__digital">
                        (Digital Output)
                    </span>
                </p>
                <span className="productcard__price">
                    {price}
                </span>
            </section>

            <footer className={`productcard__footer-${pagefooter}`}>
            <Button 
            text={btnText}
            path={btnPath}
            productId={Id}
            classname="productcard"
            />
            </footer>

        </article>
        </>
    )
}