'use client'
import React, { useEffect, useRef } from 'react';
// import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
// import './App.css';

const PhysicsButtons = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Alias Matter.js components
    const { Engine, Render, Runner, Bodies, World, Mouse, MouseConstraint } = Matter;

    // Create engine and world
    const engine = Engine.create();
    const world = engine.world;

    // Get container dimensions
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    // Create renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'black',
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Buttons data
    const buttonsData = [
      { label: 'Branding', color: '#ff69b4' },
      { label: 'UX Design', color: '#7fff00' },
      { label: 'Marketing', color: '#00bfff' },
      { label: 'Motion Design', color: '#ff4500' },
    ];

    // Create button bodies and DOM elements
    const buttonBodies = buttonsData.map((data, index) => {
      const x = Math.random() * (width - 100) + 50; // Random x position
      const y = Math.random() * (height - 100) + 50; // Random y position
      const body = Bodies.rectangle(x, y, 120, 50, {
        restitution: 0.8, // Bounciness
        friction: 0.1,
        render: {
          fillStyle: data.color,
        },
      });

      // Create corresponding DOM element
      const div = document.createElement('div');
      div.className = 'button';
      div.style.backgroundColor = data.color;
      div.textContent = data.label;
      container.appendChild(div);

      // Sync DOM position with Matter.js body
      Matter.Events.on(engine, 'afterUpdate', () => {
        div.style.transform = `translate(${body.position.x - 60}px, ${body.position.y - 25}px) rotate(${body.angle}rad)`;
      });

      return { body, element: div };
    });

    // Add all buttons to the world
    World.add(
      world,
      buttonBodies.map(({ body }) => body)
    );

    // Add boundaries
    const boundaries = [
      Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true }),
      Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true }),
      Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true }),
      Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true }),
    ];
    World.add(world, boundaries);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    render.mouse = mouse;

    // Handle window resize
    const handleResize = () => {
      const { width, height } = container.getBoundingClientRect();
      render.options.width = width;
      render.options.height = height;

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: width, y: height },
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="container"></div>;
};

export default PhysicsButtons;
