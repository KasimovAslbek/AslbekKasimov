import React, { useEffect } from 'react';

import './styles/projects.css'; // Make sure to adjust the file path

function ProjectSlider() {
  useEffect(() => {
    function rotate() {
      const pslider = document.querySelector('.pslider');
      const lastChild = pslider.lastElementChild.cloneNode(true);

      pslider.removeChild(pslider.lastElementChild);
      pslider.insertBefore(lastChild, pslider.firstElementChild);
      pslider.firstElementChild.classList.add('firstSlide');
    }

    const intervalId = setInterval(rotate, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
        

        <div className="projects">
        <div className="pslider">
            <div className="box1 "></div>
            <div className="box2 "></div>
            <div className="box3"></div>
            <div className="box4 "></div>
            <div className="box5 "></div>
            <div className="box6 "></div>
            <div className="box7 "></div>
        </div>
        <div id="test"></div>
        </div>
    </div>
 );

}

export default ProjectSlider;

