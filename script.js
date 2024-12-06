function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const scrollbar = document.getElementById('scrollbar');
const rowHeight = 50; // adjust this value to fit your row height

scrollbar.addEventListener('scroll', () => {
    const scrollTop = scrollbar.scrollTop;
    const rowIndex = Math.floor(scrollTop / rowHeight);
    scrollbar.scrollTop = rowIndex * rowHeight;
});

function scrollToTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
