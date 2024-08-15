import React, { useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import img from '../assets/pexels-benoit-lamothe-63698230-8141730.jpg'

const Land = () => {
  const slideRef = useRef(null);
  const navigate = useNavigate(); // Hook usage
  
  const handleNext = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item');
      slideRef.current.appendChild(items[0]);
    }
  };

  const handlePrev = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item');
      slideRef.current.prepend(items[items.length - 1]);
    }
  };

  const next = () => {
    navigate("/search"); // Using navigate hook
  };

  return (
    <div id="main">
      <div className="container">
        <div className="slide" ref={slideRef}>
          {/* Slider items */}
          <div className="item"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541877590-a1885a0c5df0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="content">
              <div className="name">Vivo</div>
              <div className="desc"></div>
              <button>More Info</button>
            </div>
          </div>
          <div className="item"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533160772606-ba8c6a74d336?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' , backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="content">
              <div className="name">Oneplus</div>
              <div className="desc"></div>
              <button>More Info</button>
            </div>
          </div>
          <div className="item"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1615512064903-0eb7d620bf45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' , backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="content">
              <div className="name">Samsung</div>
              <div className="desc"></div>
              <button>More Info</button>
            </div>
          </div>

            <div className="item"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1659132453792-b75c9b6ca8fc?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="content">
              <div className="name">Apple</div>
              <div className="desc"></div>
              <button onClick={next}>More Info</button>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="prev" title="Previous" onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
          <button className="next" title="Next" onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Land;
