let header = document.querySelector(".header");
let openInfoProject = header.querySelector(".header__link_info");
let popup = document.querySelector(".popup");
let closeIcon = popup.querySelector('.popup__close-icon');
let openImagePopup = popup.querySelector(".popup__open-image");
let blockImagePopup = popup.querySelector(".popup__image-block");
let closeImagePopup = popup.querySelector(".popup__close-image");
let linkHtader = header.querySelector(".header__link");
let popupContainer = popup.querySelector(".popup__container");

// Задаем подчеркивание активной ссылке "О проекте" в header

let activeLinkHeaderProject = function () {
    linkHtader.classList.toggle('header__link_active');
}

// Меняем display: none на flex у popup'а 

let popupToggle = function () {
    popup.classList.toggle('popup_visible');
    activeLinkHeaderProject();
    // Здесь каждый раз при открытии/закрытии popupa убирает у картинки свойство display: flex
    // А тут каждый раз при открытии/закрытии popupa убирает у "Показать иллюстрацию" display: none
}

let imageButtonPopupClosed = function () {
    blockImagePopup.classList.remove('popup__image-block_visible');
    openImagePopup.classList.remove('popup__open-image_visible');
    popupToggle();
}

// События при клике на "О проекте" и иконку закрытия popup'а

openInfoProject.addEventListener('click', popupToggle);
closeIcon.addEventListener('click', imageButtonPopupClosed);

// Меняем display: none на flex у блока с картинкой внутри popup окна

let blockImageToggle = function () {
    blockImagePopup.classList.toggle('popup__image-block_visible');
}

// используем объект MediaQueryList (mql)

// Matches — астрибут readonly (true/false). Определяет, совпал ли заданный media query с текущим размером экрана

// Задаем функцию для нижнего отступа при открытой картинке, где проверяем, совпадает ли ширина заданному максимальному значению переменной mql

function containerOpenedImageBlock(mql) {
    if (mql.matches) {
    popupContainer.style.paddingBottom = "110px";
    } else {
    popupContainer.style.paddingBottom = "197px";
    }
}

// Задаем функцию для нижнего отступа при закрытой картинке

function containerClosedImageBlock(mql) {
    if (mql.matches) {
    popupContainer.style.paddingBottom = "100px";
    } else {
    popupContainer.style.paddingBottom = "179px";
    }
}
 
// Объявляем переменную mql, в которую записываем созданный объект MediaQueryList.

let mql = window.matchMedia("screen and (max-width: 768px)");

// Добавим прослушку на смену результата

// При открытой картинке

mql.addListener(containerOpenedImageBlock);

// При закрытой картинке

mql.addListener(containerClosedImageBlock);

// Вызываем функцию для нижнего отступа при открытой картинке

containerOpenedImageBlock(mql);

// Вызываем функцию для нижнего отступа при закрытой картинке

containerClosedImageBlock(mql);

// Задал переменные openImageBlock и closedImageBlock для изменения нижнего оступа popup__container

let openImageBlock = function () {
    containerOpenedImageBlock(mql);
}

let closedImageBlock = function () {
    containerClosedImageBlock(mql); 
}

// Меняем display: flex на none у ссылки "Показать иллюстрацию"

// добавил blockImageToggle

// и условие для замены нижнего отступа с открытой/закрытой картинкой

let openImageToggle = function () {
    openImagePopup.classList.toggle('popup__open-image_visible');
    blockImageToggle();
    if (openImagePopup.classList.contains('popup__open-image_visible') === true) {
        openImageBlock();
    } else {
        closedImageBlock();
    };
}

// События при клике на "Показать иллюстрацию" и на иконку закрытия блока с картинкой

openImagePopup.addEventListener('click', openImageToggle);
closeImagePopup.addEventListener('click', openImageToggle);

// Закрытие popup'а при клике за пределы popup-окна

let closePopup = function (event) {
    if (event.target !== event.currentTarget) return false;
    imageButtonPopupClosed();
} 
popup.addEventListener('click', closePopup);

// Изменяем ссылку в header "О проекте"

// В условии меняем текст ссылки и правый отступ при размере экрана до 580px

function HeaderLinkInfoMobile(mqlHeaderLinkInfo) {
    if (mqlHeaderLinkInfo.matches) {
        openInfoProject.textContent = '?';
        openInfoProject.style.marginRight = "18px";
    } else {
        openInfoProject.textContent = 'О проекте';
        openInfoProject.style.marginRight = "70 px";
    };
}

let mqlHeaderLinkInfo = window.matchMedia("screen and (max-width: 580px)");

// Добавим прослушку на смену результата

mqlHeaderLinkInfo.addListener(HeaderLinkInfoMobile);

// Вызываем функцию

HeaderLinkInfoMobile(mqlHeaderLinkInfo);


