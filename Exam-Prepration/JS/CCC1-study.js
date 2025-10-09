        // Particle Animation
        const canvas = document.querySelector('.particles');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        const particlesArray = [];
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * 0.3 - 0.15;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.05;
            }
            draw() {
                ctx.fillStyle = 'rgba(0, 204, 255, 0.4)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        function initParticles() {
            for (let i = 0; i < 80; i++) {
                particlesArray.push(new Particle());
            }
        }
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
                if (particlesArray[i].size <= 0.2) {
                    particlesArray.splice(i, 1);
                    i--;
                    particlesArray.push(new Particle());
                }
            }
            requestAnimationFrame(animateParticles);
        }
        initParticles();
        animateParticles();

        // Back Button Function
        function goBack() {
            window.history.back();
        }

        // Photo Enlargement Functionality
        function enlargePhoto() {
            const photo = document.getElementById('profile-photo');
            const overlay = document.getElementById('overlay');
            
            photo.classList.add('enlarged');
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closePhoto() {
            const photo = document.getElementById('profile-photo');
            const overlay = document.getElementById('overlay');
            
            photo.classList.remove('enlarged');
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close enlarged photo when clicking anywhere
        document.addEventListener('click', function(event) {
            const photo = document.getElementById('profile-photo');
            const overlay = document.getElementById('overlay');
            
            if (photo.classList.contains('enlarged') && event.target !== photo) {
                closePhoto();
            }
        });

        // Show Answer
        let answeredCount = 0;
        function showAnswer(text) {
            const options = text.parentElement.querySelectorAll('.option');
            let alreadyAnswered = false;
            options.forEach(opt => {
                if (opt.classList.contains('correct') || opt.classList.contains('wrong')) {
                    alreadyAnswered = true;
                }
            });
            if (!alreadyAnswered) {
                const correctAnswer = options[0].dataset.answer;
                options.forEach(opt => {
                    const optionText = opt.textContent.trim().split(')')[0];
                    if (optionText === correctAnswer) {
                        opt.classList.add('correct');
                    } else {
                        opt.classList.add('wrong');
                    }
                });
                answeredCount++;
                updateProgress();
            }
        }

        // Update Progress Ring
        function updateProgress() {
            const progressText = document.getElementById('progress-text');
            const progressRing = document.querySelector('.progress-ring .progress');
            const progressTextSvg = document.querySelector('.progress-text');
            progressText.textContent = `${answeredCount}/150`;
            const percentage = (answeredCount / 150) * 100;
            progressTextSvg.textContent = `${Math.round(percentage)}%`;
            progressRing.style.strokeDashoffset = 314 - (percentage * 3.14);
        }

        // Sticky Progress Circle
        window.addEventListener('scroll', function() {
            const progressContainer = document.getElementById('progress-container');
            const scrollPosition = window.scrollY;
            
            // Adjust this value based on when you want the progress circle to become sticky
            const triggerHeight = 300;
            
            if (scrollPosition > triggerHeight) {
                progressContainer.classList.add('sticky');
            } else {
                progressContainer.classList.remove('sticky');
            }
        });