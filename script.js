document.addEventListener("DOMContentLoaded", () => {
    const particleCount = 200;  // Adjust this number to increase/decrease particles
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particle-container';
    document.body.appendChild(particleContainer);

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.backgroundColor = getRandomColor();
        particleContainer.appendChild(particle);

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        return particle;
    }

    function animateParticle(particle) {
        const speed = 0.5 + Math.random() * 1;  // Random speed between 0.5 and 1.5
        let dx = (Math.random() - 0.5) * speed;
        let dy = (Math.random() - 0.5) * speed;

        function move() {
            let x = parseFloat(particle.style.left);
            let y = parseFloat(particle.style.top);

            x += dx;
            y += dy;

            // Bounce off the edges
            if (x <= 0 || x >= window.innerWidth) dx = -dx;
            if (y <= 0 || y >= window.innerHeight) dy = -dy;

            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            requestAnimationFrame(move);
        }

        move();
    }

    // Create and animate particles
    for (let i = 0; i < particleCount; i++) {
        const particle = createParticle();
        animateParticle(particle);
    }

    // Change particle colors periodically
    setInterval(() => {
        document.querySelectorAll('.particle').forEach(particle => {
            particle.style.backgroundColor = getRandomColor();
        });
    }, 5000);  // Change colors every 5 seconds
});



