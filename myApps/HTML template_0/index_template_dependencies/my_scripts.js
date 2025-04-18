/* document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Calculate offset
        const offset = 50; // Adjust this value as needed
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        // Scroll to the target position with an offset
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth' // Smooth scroll
        });
    });
}); */

document.querySelectorAll('.my-container-new a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Calculate offset
        const offset = 350; // Adjust this value as needed
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        // Scroll to the target position with an offset
        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth' // Smooth scroll
        });
    });
});