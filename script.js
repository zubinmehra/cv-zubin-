// Add smooth scrolling and interactive features
document.addEventListener('DOMContentLoaded', function() {
    
    // Add fade-in animation for sections
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        sectionObserver.observe(section);
    });
    
    // Add hover effects for entries
    const entries = document.querySelectorAll('.entry');
    entries.forEach(entry => {
        entry.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = '#764ba2';
        });
        
        entry.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = '#667eea';
        });
    });
    
    // Add smooth scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #667eea;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add hover effect for scroll to top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = '#764ba2';
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = '#667eea';
        this.style.transform = 'scale(1)';
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    });
    
    // Add section navigation hints
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.cursor = 'pointer';
        title.title = 'Click to scroll to section';
        
        title.addEventListener('click', function() {
            this.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Add print functionality
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '🖨️ Print CV';
    printBtn.className = 'print-btn';
    printBtn.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(printBtn);
    
    printBtn.addEventListener('click', function() {
        window.print();
    });
    
    printBtn.addEventListener('mouseenter', function() {
        this.style.background = '#764ba2';
        this.style.transform = 'scale(1.05)';
    });
    
    printBtn.addEventListener('mouseleave', function() {
        this.style.background = '#667eea';
        this.style.transform = 'scale(1)';
    });
    
    // Hide print button when printing
    window.addEventListener('beforeprint', function() {
        printBtn.style.display = 'none';
        scrollToTopBtn.style.display = 'none';
    });
    
    window.addEventListener('afterprint', function() {
        printBtn.style.display = 'block';
        scrollToTopBtn.style.display = 'block';
    });
    
    // Add responsive menu for mobile
    if (window.innerWidth <= 768) {
        const navMenu = document.createElement('div');
        navMenu.className = 'mobile-nav';
        navMenu.innerHTML = `
            <div class="nav-toggle">☰</div>
            <div class="nav-items">
                <a href="#academics">Academics</a>
                <a href="#projects">Projects</a>
                <a href="#leadership">Leadership</a>
                <a href="#experience">Experience</a>
                <a href="#activities">Activities</a>
                <a href="#skills">Skills</a>
            </div>
        `;
        
        navMenu.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 999;
            display: none;
        `;
        
        document.body.appendChild(navMenu);
        
        // Show nav on scroll
        let lastScroll = 0;
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 100) {
                navMenu.style.display = 'block';
            } else {
                navMenu.style.display = 'none';
            }
            lastScroll = currentScroll;
        });
    }
}); 