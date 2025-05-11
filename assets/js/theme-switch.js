(function($) {
    "use strict";
    
    // Theme Toggle Functionality
    $(document).ready(function() {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            $('body').removeClass('theme-mode-light theme-mode-dark').addClass(savedTheme);
        }
        
        // Theme toggle click handler
        $('#theme-toggle').on('click', function() {
            if ($('body').hasClass('theme-mode-light')) {
                $('body').removeClass('theme-mode-light').addClass('theme-mode-dark');
                localStorage.setItem('theme', 'theme-mode-dark');
            } else {
                $('body').removeClass('theme-mode-dark').addClass('theme-mode-light');
                localStorage.setItem('theme', 'theme-mode-light');
            }
        });
    });
    
})(jQuery);
