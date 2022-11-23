const header = () => {
    const headerToggleBtn = document.querySelector('.header__burger-btn');
    const headerWrapperMenu = document.querySelector('.header__wrapper');
    const headerOverlay = document.querySelector('.header__mobile-overlay');
    
    headerToggleBtn.addEventListener('click', () => {
        headerWrapperMenu.classList.toggle('header__wrapper_active');
        headerOverlay.classList.toggle('header__mobile-overlay_active');

        if (headerOverlay.closest('.header__mobile-overlay_active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    headerOverlay.addEventListener('click', () => {
        headerWrapperMenu.classList.remove('header__wrapper_active');
        headerOverlay.classList.remove('header__mobile-overlay_active');
        document.body.style.overflow = '';
    })
}

header();