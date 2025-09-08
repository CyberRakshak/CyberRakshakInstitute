        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        const mobileNav = document.getElementById('mobileNav');
        const overlay = document.getElementById('overlay');
        const dropdownButtons = document.querySelectorAll('.mobile-dropdown-btn');
        
        function toggleMobileMenu() {
            mobileNav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        }
        
        function closeMenuOnLinkClick() {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        function toggleDropdown() {
            const dropdown = this.nextElementSibling;
            dropdown.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        }
        
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        closeMobileMenu.addEventListener('click', toggleMobileMenu);
        overlay.addEventListener('click', toggleMobileMenu);
        
        dropdownButtons.forEach(button => {
            button.addEventListener('click', toggleDropdown);
        });
        
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-item');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMenuOnLinkClick);
        });
        
        // Animation for blog content
        const animatedItems = document.querySelectorAll('.blog-content img, .blog-content h2, .blog-content p, .blog-content ul');
        
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
        
        // Pulse animation for CTA button
        const ctaButton = document.querySelector('.blog-cta .btn');
        setInterval(() => {
            ctaButton.classList.toggle('pulse');
        }, 2000);
