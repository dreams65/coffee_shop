const popup = () => {
    let popup = document.querySelector('.popup');
    let popupBody = document.querySelector('.popup__body');

    document.addEventListener('click', function(event){
        if (event.target.closest('.popup-trigger')) {
            popup.classList.add('popup_active');
            popupBody.classList.add('popup__body_active')
            document.body.style.overflow = 'hidden';

        } if (event.target.closest('.popup__close-btn, .popup__overlay')){
            popup.classList.remove('popup_active');
            popupBody.classList.remove('popup__body_active')
            document.body.style.overflow = '';
        }
    })
}
popup();