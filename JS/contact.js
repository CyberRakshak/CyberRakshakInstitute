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
        
        // Form validation
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            if (name && email && subject && message) {
                // Show success message
                document.getElementById('formMessage').className = 'form-message success';
                document.getElementById('formMessage').textContent = 'Thank you! Your message has been sent. We will get back to you soon.';
                
                // Reset form
                document.getElementById('contactForm').reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    document.getElementById('formMessage').className = 'form-message';
                }, 5000);
            } else {
                // Show error message
                document.getElementById('formMessage').className = 'form-message error';
                document.getElementById('formMessage').textContent = 'Please fill in all required fields.';
            }
        });
