(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.heroWrapper h2');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-right');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.heroWrapper h1');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-left');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.heroWrapper h4');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-bottom');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.section-heading');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-right');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.main-text');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-bottom');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.intro-header');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-right');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.feature-text-wrapper .section-heading');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-right');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.about-container .main-text');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-bottom');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.team-wrapper');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-bottom');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();


(function() {
    var elements;
    var windowHeight;
    
    function init() {
        elements = document.querySelectorAll('.testimonial-wrapper');
        windowHeight = window.innerHeight;
    }
    
    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
    
        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in-element-bottom');
            element.classList.remove('hidden');
        }
        }
    }
    
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();
})();




