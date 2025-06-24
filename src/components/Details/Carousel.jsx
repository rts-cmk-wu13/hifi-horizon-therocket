import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Carousel({product}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        product.imageUrl,
        product.imageUrl,
        product.imageUrl
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length) 
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length))
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <>
        
        <section className="carousel">
            <section className="carousel__container">
                <section 
                className="carousel__slides" 
                style={{ transform: `translateX(-${currentSlide * 100}%)`}}
                >
                {images.map((image, index) => (
                    <figure 
                    className="carousel__slide"
                    key={index}
                    >
                        <img 
                        src={image} 
                        alt={`Product image ${index + 1}`} 
                        className="carousel__img"
                        />
                    </figure>
                ))}
                </section>

            </section>
                <button class="carousel__prev" onClick={prevSlide}>
                    <IoIosArrowBack className="carousel__prev-icon"/>
                </button>
                <button class="carousel__next" onClick={nextSlide}>
                    <IoIosArrowForward className="carousel__next-icon"/>
                </button>

            <section className="carousel__dots">
                {images.map((_, index) => (
                    <button
                    key={index}
                    className={`carousel__dot ${currentSlide===index ? 'carousel__dot--active' : ''}`}
                    onClick={() => goToSlide(index)}
                    >

                    </button>
                ))}
            </section>

        </section>
        </>
    )
}