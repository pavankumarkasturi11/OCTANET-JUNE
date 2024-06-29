// JavaScript for smooth scrolling with navigation links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
       
        e.preventDefault();

      
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('wheel', function(e) {
    let delta = Math.sign(e.deltaY);

    window.scrollBy({
        top: delta * 50, 
        left: 0,
        behavior: 'smooth'
    });
});
