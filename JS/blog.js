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
        
        // Animation for elements when they come into view
        const animatedItems = document.querySelectorAll('.feature-card, .card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedItems.forEach(item => {
            item.style.opacity = '0';
            observer.observe(item);
        });
        
        // Add pulse animation to CTA buttons
        const ctaButtons = document.querySelectorAll('.hero-buttons .btn');
        setInterval(() => {
            ctaButtons.forEach(button => {
                button.classList.toggle('pulse');
            });
        }, 2000);
        
        // Email validation and security functions
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        function sanitizeInput(input) {
            // Remove potentially harmful characters
            return input.replace(/[<>&'"\\]/g, '');
        }
        
        function handleNewsletterSignup() {
            const emailInput = document.getElementById('newsletter-email');
            const messageDiv = document.getElementById('newsletter-message');
            const email = sanitizeInput(emailInput.value.trim());
            
            // Validate email
            if (!email) {
                showMessage(messageDiv, 'Please enter your email address', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage(messageDiv, 'Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate secure form submission
            showMessage(messageDiv, 'Subscribing...', 'success');
            
            // In a real application, you would send this to a secure backend
            setTimeout(() => {
                showMessage(messageDiv, 'Thank you for subscribing to our newsletter!', 'success');
                emailInput.value = '';
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            }, 1000);
        }
        
        function showMessage(element, text, type) {
            element.textContent = text;
            element.className = 'form-message ' + type;
            element.style.display = 'block';
        }
        
        // Add event listener for Enter key in email field
        document.getElementById('newsletter-email').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleNewsletterSignup();
            }
        });
