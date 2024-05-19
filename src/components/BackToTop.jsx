import React, { useEffect, useState } from 'react';
import './backtotop.css'

function BackToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(Window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY)
            });
        };
    }, [scroll]);

  return (
    <a onClick={BackToTop} className={`back-to-top d-flex align-item-center justify-content-center ${scroll > 100 ? 'active' : undefined}`}>
        <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}

export default BackToTop;
