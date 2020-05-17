const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');

    menu.addEventListener('click', () => {
        nav.classList.toggle('linksActive')
        links.forEach ((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 7+.5}s`;
            }
        });
        menu.classList.toggle('exit');
    });
}
navSlide();
