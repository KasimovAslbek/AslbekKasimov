import React, { useEffect, useRef } from 'react';
import { Power2, gsap} from 'gsap';

function HomeBg() {
  const canvasRef = useRef();

  useEffect(() => {
    let canvasWidth = 0;
    let canvasHeight = 0;
    const particleLength = 150;
    const particles = [];
    const particleMaxRadius = 8;

    function random(low, high) {
      return Math.random() * (high - low) + low;
    }

    function resizeCanvas() {
      canvasWidth = document.body.offsetWidth;
      canvasHeight = document.body.offsetHeight;
      canvas.width = canvasWidth * window.devicePixelRatio;
      canvas.height = canvasHeight * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function createParticle(id, isRecreate) {
      const radius = random(1, particleMaxRadius);
      const x = isRecreate ? -radius - random(0, canvasWidth) : random(0, canvasWidth);
      let y = random(canvasHeight / 2 - 150, canvasHeight / 2 + 150);
      y += random(-100, 100);
      const alpha = random(0.05, 1);

      return {
        id: id,
        x: x,
        y: y,
        startY: y,
        radius: radius,
        defaultRadius: radius,
        startAngle: 0,
        endAngle: Math.PI * 2,
        alpha: alpha,
        color: { r: random(0, 100), g: random(0, 100), b: 255 },
        speed: alpha + 1,
        amplitude: random(50, 200),
        isBurst: false,
      };
    }

    function moveParticle(particle) {
      particle.x += particle.speed;
      particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
    }

    function enlargeParticle(clientX, clientY) {
      particles.forEach(particle => {
        if (particle.isBurst) return;

        const distance = Math.hypot(particle.x - clientX, particle.y - clientY);

        if (distance <= 100) {
          const scaling = (100 - distance) / 1.5;
          gsap.to(particle, 0.5, {
            radius: particle.defaultRadius + scaling,
            ease: Power2.easeOut,
          });
        } else {
            gsap.to(particle, 0.5, {
            radius: particle.defaultRadius,
            ease: Power2.easeOut,
          });
        }
      });
    }

    function burstParticle(clientX, clientY) {
      particles.forEach(particle => {
        const distance = Math.hypot(particle.x - clientX, particle.y - clientY);

        if (distance <= 100) {
          particle.isBurst = true;
          gsap.to(particle, 0.5, {
            radius: particle.defaultRadius + 200,
            alpha: 0,
            ease: Power2.easeOut,
            onComplete: () => {
              particles[particle.id] = createParticle(particle.id, true);
            },
          });
        }
      });
    }

    function drawParticles(context) {
      particles.forEach(particle => {

        moveParticle(particle);


        context.beginPath();
        context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
        context.fill();
      });
    }

    function handleMouseMove(e) {
      enlargeParticle(e.clientX, e.clientY);
    }

    function handleClick(e) {
      burstParticle(e.clientX, e.clientY);
    }

    function handleResize() {
      resizeCanvas();
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    resizeCanvas();

    for (let i = 0; i < particleLength; i++) {
      particles.push(createParticle(i));
    }

    document.body.addEventListener('mousemove', handleMouseMove, false);
    document.body.addEventListener('click', handleClick, false);
    window.addEventListener('resize', handleResize, false);

    function render() {

      context.clearRect(0, 0, canvasWidth + particleMaxRadius * 2, canvasHeight);


      drawParticles(context);

      particles.forEach(particle => {
        if (particle.x - particle.radius >= canvasWidth) {
          particles[particle.id] = createParticle(particle.id, true);
        }
      });

      requestAnimationFrame(render);
    }

    render();

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove, false);
      document.body.removeEventListener('click', handleClick, false);
      window.removeEventListener('resize', handleResize, false);
    };
  }, []);

  return (<canvas ref={canvasRef} className="h-screen -mt-20 w-full z-0"></canvas>);
}

export default HomeBg;