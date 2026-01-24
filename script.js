const menu = document.getElementById("menuList");
const nav = document.getElementById("hamburger-nav");

function toggleMenu() {
    menu.classList.toggle("open");
    nav.classList.toggle("nav-open");
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
