        // Security token for form submission (simulated)
        let securityToken = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
        let lastSubmissionTime = 0;
        const submissionRateLimit = 5000; // 5 seconds between submissions
        
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
        
        // Toggle accordion items
        function toggleAccordion() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            
            // Rotate chevron icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        }
        
        // Toggle FAQ items
        function toggleFaq() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
            
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
        
        // Add event listeners to accordion headers
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', toggleAccordion);
        });
        
        // Add event listeners to FAQ questions
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', toggleFaq);
        });
        
        // Close menu when clicking on navigation links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-item');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenuOnLinkClick);
        });
        
        // Animation for elements when they come into view
        const animatedItems = document.querySelectorAll('.feature-card, .card, .testimonial-card, .instructor-card');
        
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
        
        // Security Functions
        function showRateLimitNotice() {
            const notice = document.getElementById('rateLimitNotice');
            notice.style.display = 'block';
            setTimeout(() => {
                notice.style.display = 'none';
            }, 5000);
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        function sanitizeInput(input) {
            // Remove potentially harmful characters to prevent XSS
            const div = document.createElement('div');
            div.textContent = input;
            return div.innerHTML.replace(/[<>&'"\\]/g, '');
        }
        
        function validateEmail(email) {
            const errorElement = document.getElementById('email-error');
            
            if (!email) {
                errorElement.textContent = 'Email is required';
                errorElement.style.display = 'block';
                return false;
            }
            
            if (!isValidEmail(email)) {
                errorElement.textContent = 'Please enter a valid email address';
                errorElement.style.display = 'block';
                return false;
            }
            
            errorElement.style.display = 'none';
            return true;
        }
        
        function handleNewsletterSignup() {
            const currentTime = new Date().getTime();
            
            // Rate limiting check
            if (currentTime - lastSubmissionTime < submissionRateLimit) {
                showRateLimitNotice();
                return;
            }
            
            const emailInput = document.getElementById('newsletter-email');
            const messageDiv = document.getElementById('newsletter-message');
            const email = sanitizeInput(emailInput.value.trim());
            
            // Validate email
            if (!validateEmail(email)) {
                emailInput.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    emailInput.style.animation = '';
                }, 500);
                return;
            }
            
            // Update last submission time
            lastSubmissionTime = currentTime;
            
            // Simulate secure form submission with token
            showMessage(messageDiv, 'Subscribing...', 'success');
            
            // In a real application, you would send this to a secure backend
            // with the security token included
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
        
        // Real-time email validation
        document.getElementById('newsletter-email').addEventListener('blur', function() {
            const email = sanitizeInput(this.value.trim());
            validateEmail(email);
        });
        
        // Security enhancements for external links   
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            if (link.hostname !== window.location.hostname) {
                link.setAttribute('rel', 'noopener noreferrer');
                link.setAttribute('target', '_blank');
            }
        });
        
        // Add click handlers for enrollment and syllabus buttons
        document.getElementById('enrollBtn').addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, this would redirect to a secure payment gateway
            alert('Enrollment process would begin securely. This is a demonstration.');
        });
        
        document.getElementById('syllabusBtn').addEventListener('click', function(e) {
            e.preventDefault();
            // In a real application, this would download a secure PDF
            alert('Syllabus download would begin. This is a demonstration.');
        });
        
        // Content Security Policy violation reporting
        // In a real implementation, you would set up a reporting endpoint
        document.addEventListener('securitypolicyviolation', (e) => {
            console.warn('CSP Violation:', e);
        });
