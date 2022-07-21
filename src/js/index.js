window.addEventListener('load', () => {;
    const message = require('./message').default;
    const cutText = require('./cutText').default;

    message();
    cutText();

    // for media 
    const screenWidth = window.screen.width;
    
    if(screenWidth < 860) {
        const menu = document.querySelector(".menu");
        const user = document.querySelector(".user");

        user.classList.toggle("user__active");
        
        menu.addEventListener("click", () => {
            user.classList.toggle("user__active");
        });
    }
});

