import React from 'react'
import './styles/style.css'
import face from '../images/face.jpg'

function ImageBA() {
    const handleSliderInput = (e) => {
        const container = document.querySelector('.container');
        container.style.setProperty('--position', `${e.target.value}%`);
      };
    
      return (
        <main className='w-[200px] h-[200px] 2xl:w-[300px] 2xl:h-[300px] min-[2500px]:w-[500px] min-[2500px]:h-[500px]'>
          <div className="container">
            <div className="image-container">
              <img
                className="image-before slider-image"
                src={face}
                alt="Kasimov"
              />
              <img
                className="image-after slider-image"
                src={face}
                alt="Kasimov"
              />
            </div>
            {/* step="10" */}
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              aria-label="Percentage of before photo shown"
              className="slider"
              onInput={handleSliderInput}
            />
            <div className="slider-line" aria-hidden="true"></div>
            <div className="slider-button" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"

                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="128"
                  y1="40"
                  x2="128"
                  y2="216"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="96"
                  y1="128"
                  x2="16"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="48 160 16 128 48 96"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
                <line
                  x1="160"
                  y1="128"
                  x2="240"
                  y2="128"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <polyline
                  points="208 96 240 128 208 160"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
            </div>
          </div>
        </main>
      );
    };

export default ImageBA