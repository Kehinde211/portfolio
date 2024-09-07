const open = document.querySelector(".container");

const particleCount = 200;  // Adjust this number to increase/decrease particles
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particle-container';
    open.appendChild(particleContainer);

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
    }, 5000);

        const foldElements = document.querySelectorAll(".fold");
    
        function resizeFoldElements() {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
    
            foldElements.forEach((element) => {
                // Base size calculation
                let baseWidth = viewportWidth * 0.2; // 20% of viewport width
                let baseHeight = viewportHeight * 0.3; // 30% of viewport height
    
                // Adjust sizes based on screen size
                if (viewportWidth <= 600) { // Mobile
                    baseWidth = viewportWidth * 0.5; // 40% of viewport width
                    baseHeight = viewportHeight * 0.2; // 20% of viewport height
                } else if (viewportWidth <= 1024) { // Tablet
                    baseWidth = viewportWidth * 0.4; // 30% of viewport width
                    baseHeight = viewportHeight * 0.25; // 25% of viewport height
                }
    
                // Set normal size
                element.style.width = `${baseWidth}px`;
                element.style.height = `${baseHeight}px`;
    
                // Set hover size
                element.addEventListener("mouseover", () => {
                    element.style.width = `${baseWidth * 1.1}px`; // 10% larger on hover
                    element.style.height = `${baseHeight * 1.1}px`;
                });
    
                element.addEventListener("mouseleave", () => {
                    element.style.width = `${baseWidth}px`;
                    element.style.height = `${baseHeight}px`;
                });
            });
        }
    
        // Initial resize
        resizeFoldElements();
    
        // Resize on window resize
        window.addEventListener('resize', resizeFoldElements);    
    

    const jet = document.querySelector("#submit")
    jet.style.cursor = "pointer";
    jet.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Thank you for leaving your details in my email. I'll get back to you soonest")
    });

