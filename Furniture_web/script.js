
if (typeof window !== 'undefined'){
    document.addEventListener('DOMContentLoaded', () => {
    // Your code here
    const bar = document.getElementById('des');
    const nav = document.getElementById('navbar');
    const nl = document.getElementById('close');


    if (bar && nav) {
        bar.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Add this part to close the navbar when clicking outside
        document.addEventListener('click', (event) => {
            if (!nav.contains(event.target) && !bar.contains(event.target)) {
                nav.classList.remove('active');
            }
        });
    }

    if (nl) {
        
        // Add this part to close the navbar when clicking outside
        nl.addEventListener('click', (event) => {
            
                nav.classList.remove('active');
            
        });
    }
});}
