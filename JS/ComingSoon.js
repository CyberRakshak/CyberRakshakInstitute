        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('overlay');
        const dropdownButtons = document.querySelectorAll('.mobile-dropdown-btn');
        
        // Toggle mobile menu
        function toggleMobileMenu() {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        }
        
        // Close mobile menu when clicking on a link
        function closeMenuOnLinkClick() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Toggle dropdown menus
        function toggleDropdown() {
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle('active');
            
            // Rotate chevron icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        }
        
        // Event listeners
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        closeMobileMenu.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', toggleMobileMenu);
        
        // Add event listeners to dropdown buttons
        dropdownButtons.forEach(button => {
            button.addEventListener('click', toggleDropdown);
        });
        
        // Close menu when clicking on navigation links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-item');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenuOnLinkClick);
        });
        
        // Countdown Timer
        function updateCountdown() {
            // Set the launch date (3 months from now)
            const launchDate = new Date();
            launchDate.setMonth(launchDate.getMonth() + 0);
            
            const currentTime = new Date();
            const diff = launchDate - currentTime;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').innerText = days.toString().padStart(2, '0');
            document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
            document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        }
        
        // Initialize countdown
        updateCountdown();
        setInterval(updateCountdown, 1000);
        
        // Binary rain animation
        function createBinaryRain() {
            const binaryRain = document.getElementById('binaryRain');
            const digits = '01';
            const digitCount = 100;
            
            for (let i = 0; i < digitCount; i++) {
                const digit = document.createElement('div');
                digit.className = 'binary-digit';
                digit.innerText = digits[Math.floor(Math.random() * digits.length)];
                digit.style.left = `${Math.random() * 100}%`;
                digit.style.animationDelay = `${Math.random() * 10}s`;
                binaryRain.appendChild(digit);
            }
        }
        
        createBinaryRain();
        
        // Progress bar on scroll
        window.onscroll = function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        };
        
        // Email notification form
        document.querySelector('.notify-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const emailInput = document.querySelector('.email-input');
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                alert('Thank you! We\'ll notify you when we launch.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
        
        function isValidEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
        
        // Add typing effect to terminal
        const terminalLines = document.querySelectorAll('.terminal-line');
        terminalLines.forEach((line, index) => {
            line.style.animationDelay = `${index * 2}s`;
        });

