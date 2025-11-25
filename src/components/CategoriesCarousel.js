import { useState, useRef } from "react";
import "./CategoriesCarousel.css";

const CARD_HEIGHT = 230;
const OVERLAP = 120;
const STEP = CARD_HEIGHT - OVERLAP; // 110px

const CategoriesCarousel = ({ items, onSelect }) => {
    const [current, setCurrent] = useState(0);
    const startY = useRef(null);

    const handleTouchStart = (e) => {
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
        if (startY.current === null) return;

        const delta = startY.current - e.touches[0].clientY;

        if (delta > 50) {
            if (current < items.length - 1) setCurrent(current + 1);
            startY.current = null;
        } else if (delta < -50) {
            if (current > 0) setCurrent(current - 1);
            startY.current = null;
        }
    };

    return (
        <div 
            className="vertical-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div 
                className="carousel-inner"
                style={{ transform: `translateY(-${current * STEP}px)` }}
            >
                {items.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`carousel-card ${idx === current ? "active" : ""}`}
                        onClick={() => onSelect(item)}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesCarousel;
