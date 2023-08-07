import React, { Component } from 'react';
import './styles/skills.css'

class FibonacciSphere {
    #points;

    get points() {
        return this.#points;
    }

    constructor(N) {
        this.#points = [];

        const goldenAngle = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < N; i++) {
            const y = 1 - (i / (N - 1)) * 2;
            const radius = Math.sqrt(1 - y ** 2);
            const a = goldenAngle * i;
            const x = Math.cos(a) * radius;
            const z = Math.sin(a) * radius;

            this.#points.push([x, y, z]);
        }
    }
}

class TagsCloud {
    #root;
    #size;
    #sphere;
    #tags;
    #rotationAxis;
    #rotationAngle;
    #rotationSpeed;
    #frameRequestId;

    constructor(root) {
        this.#root = root;
        this.#size = this.#root.offsetWidth;
        this.#tags = root.querySelectorAll('.tag');
        this.#sphere = new FibonacciSphere(this.#tags.length);
        this.#rotationAxis = [1, 0, 0];
        this.#rotationAngle = 0;
        this.#rotationSpeed = 0;

        this.#updatePositions();
        this.#initEventListeners();
        this.#root.classList.add('-loaded');
    }

    #initEventListeners() {
        window.addEventListener('resize', this.#updatePositions.bind(this));
        document.addEventListener('mousemove', this.#onMouseMove.bind(this));
    }

    #updatePositions() {
        const sin = Math.sin(this.#rotationAngle);
        const cos = Math.cos(this.#rotationAngle);
        const ux = this.#rotationAxis[0];
        const uy = this.#rotationAxis[1];
        const uz = this.#rotationAxis[2];

        const rotationMatrix = [
            [
                cos + (ux ** 2) * (1 - cos),
                ux * uy * (1 - cos) - uz * sin,
                ux * uz * (1 - cos) + uy * sin,
            ],
            [
                uy * ux * (1 - cos) + uz * sin,
                cos + (uy ** 2) * (1 - cos),
                uy * uz * (1 - cos) - ux * sin,
            ],
            [
                uz * ux * (1 - cos) - uy * sin,
                uz * uy * (1 - cos) + ux * sin,
                cos + (uz ** 2) * (1 - cos)
            ]
        ];

        const N = this.#tags.length;

        for (let i = 0; i < N; i++) {
            const x = this.#sphere.points[i][0];
            const y = this.#sphere.points[i][1];
            const z = this.#sphere.points[i][2];

            const transformedX =
                  rotationMatrix[0][0] * x
            + rotationMatrix[0][1] * y
            + rotationMatrix[0][2] * z;
            const transformedY =
                  rotationMatrix[1][0] * x
            + rotationMatrix[1][1] * y
            + rotationMatrix[1][2] * z;
            const transformedZ =
                  rotationMatrix[2][0] * x
            + rotationMatrix[2][1] * y
            + rotationMatrix[2][2] * z;

            const translateX = this.#size * transformedX / 2;
            const translateY = this.#size * transformedY / 2;
            const scale = (transformedZ + 2) / 3;
            const transform =
                  `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;
            const opacity = (transformedZ + 1.5) / 2.5;

            this.#tags[i].style.transform = transform;
            this.#tags[i].style.opacity = opacity;
        }
    }

    #onMouseMove(e) {
        const rootRect = this.#root.getBoundingClientRect();
        const deltaX = e.clientX - (rootRect.left + this.#root.offsetWidth / 2);
        const deltaY = e.clientY - (rootRect.top + this.#root.offsetHeight / 2);
        const a = Math.atan2(deltaX, deltaY) - Math.PI / 2;
        const axis = [Math.sin(a), Math.cos(a), 0];
        const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const speed = delta / Math.max(window.innerHeight, window.innerWidth) / 60;

        this.#rotationAxis = axis;
        this.#rotationSpeed = speed;
    }

    #update() {
        this.#rotationAngle += this.#rotationSpeed;

        this.#updatePositions();
    }

    start() {
        this.#update();

        this.#frameRequestId = requestAnimationFrame(this.start.bind(this));
    }

    stop() {
        cancelAnimationFrame(this.#frameRequestId);
    }
}

class SkillDynamic extends Component {
  componentDidMount() {
    const root = document.querySelector('.tags-cloud');
    const cloud = new TagsCloud(root);
    cloud.start();
    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.classList.add('-loaded'); // Add the -loaded class to trigger fadeIn

    const cursor = document.getElementById('cursor');
    let isActivated = false;

    document.addEventListener('mousemove', (e) => {
      if (!isActivated) {
        cursor.classList.add('-activated');
        isActivated = true;
      }

      cursor.style.transform = `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
    });
  }

  render() {
    return (
      <div className='skills-container'>
        <div id="cursor"></div>
        <ul className="tags-cloud  rounded-full text-[#7843e9]">  {/*bg-[#1b263b] */}
        <li class='tag'><span class='wrap'>HTML</span></li>
        <li class='tag'><span class='wrap'>Tailwind Css</span></li>
        <li class='tag'><span class='wrap'>CSS</span></li>
        <li class='tag'><span class='wrap'>React</span></li>
        <li class='tag'><span class='wrap'>PostCSS</span></li>
        <li class='tag'><span class='wrap'>Python</span></li>
        <li class='tag'><span class='wrap'>SVG</span></li>
        <li class='tag'><span class='wrap'>Javascript</span></li>
        <li class='tag'><span class='wrap'>Responsive Design</span></li>
        <li class='tag'><span class='wrap'>Webpack</span></li>
        <li class='tag'><span class='wrap'>Canvas</span></li>
        <li class='tag'><span class='wrap'>Figma</span></li>
        <li class='tag'><span class='wrap'>Three.js</span></li>
        <li class='tag'><span class='wrap'>Anime.js</span></li>
        <li class='tag'><span class='wrap'>Github</span></li>
        <li class='tag'><span class='wrap'>Git</span></li>
        <li class='tag'><span class='wrap'>Silenium</span></li>
        <li class='tag'><span class='wrap'>Web scraping</span></li>
        <li class='tag'><span class='wrap'>B4s</span></li>
        </ul>
      </div>
    );
  }
}

export default SkillDynamic;
