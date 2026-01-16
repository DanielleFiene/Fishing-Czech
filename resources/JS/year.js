// Automatically update copyright year
document.addEventListener('DOMContentLoaded', function() {
    const yearElements = document.querySelectorAll('.copyright-year');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(function(element) {
        element.textContent = currentYear;
    });
});
