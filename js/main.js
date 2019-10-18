let modal = document.getElementById('authModal');
let btn = document.getElementById('authBtn');
let span = document.querySelector('.close');
let registration = document.getElementById('registration');
let authorization = document.getElementById('authorization');
let eye_1 = document.querySelector('.eye-1');
let eye_2 = document.querySelector('.eye-2');
let password_1 = document.querySelector('.type_password-1');
let password_2 = document.querySelector('.type_password-2');
let search_input = document.querySelector('.search-input');
let search = document.querySelector('.form-search');
let search_list = document.querySelector('.active-search');
let body = document.querySelector('.body');
let submenu_mobile = document.querySelector('.submenu-mobile');
let catalog_mobile = document.querySelector('.catalog-title-mobile');
let menu_mobile = document.querySelector('.menu-mobile-img');
let active_search_mobile = document.querySelector('.active-search-mobile ');
let search_list_mobile = document.querySelector('.active-search-mob');
let lupa_mobile = document.querySelector('.lupa-mobile');
let dop_menu = document.querySelector('.dop-menu-mobile');
let mobile_main = document.querySelector('.mobile-main');
let mobile_menu = document.querySelector('.mobile-menu');
let registration_mobile = document.querySelector('.registration-mobile');
let authorization_mobile = document.querySelector('.authorization-mobile');
let entr_mobile = document.querySelector('.entr-mobile');
let registr_mobile = document.querySelector('.registr-mobile');
let eye_1_mobile = document.querySelector('.eye-1-mobile');
let eye_2_mobile = document.querySelector('.eye-2-mobile');
let password_1_mobile = document.querySelector('.type_password-mobile')
let password_2_mobile = document.querySelector('.type_password-2-mobile')


search_input.onclick = function () {
    search_list.style.display = "block";
}



btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

registration.onclick = function () {
    this.classList.add('active');
    authorization.classList.remove('active');
    document.querySelector('.form_one_more_password').style.display = "flex";
    document.querySelector('.social-media-сontainer').style.display = "none";
}

authorization.onclick = function () {
    this.classList.add('active');
    registration.classList.remove('active');
    document.querySelector('.form_one_more_password').style.display = "none";
    document.querySelector('.social-media-сontainer').style.display = "flex";
    document.querySelector('.social-media-сontainer').style.flexDirection = "column";
    document.querySelector('.social-media-сontainer').style.textAlign = "center";

}

registration_mobile.onclick = function () {
    this.classList.add('active-mobile');
    authorization_mobile.classList.remove('active-mobile');
    document.querySelector('.form_one_more_password-mobile').style.display = "block";
    document.querySelector('.social-media-mobile-сontainer').style.display = "none";
}

authorization_mobile.onclick = function () {
    this.classList.add('active-mobile');
    registration_mobile.classList.remove('active-mobile');
    document.querySelector('.form_one_more_password-mobile').style.display = "none";
    document.querySelector('.social-media-mobile-сontainer').style.display = "flex";
    document.querySelector('.social-media-mobile-сontainer').style.flexDirection = "column";
    document.querySelector('.social-media-mobile-сontainer').style.textAlign = "center";

}


entr_mobile.onclick = function () {
    mobile_main.style.display = "block";
    mobile_menu.style.display = "none";
    authorization.classList.remove('active-mobile');
    registration_mobile.classList.remove('active-mobile');
    authorization.classList.add('active-mobile');
    document.querySelector('.form_one_more_password-mobile').style.display = "none";
    document.querySelector('.social-media-mobile-сontainer').style.display = "flex";
    document.querySelector('.social-media-mobile-сontainer').style.flexDirection = "column";
    document.querySelector('.social-media-mobile-сontainer').style.textAlign = "center";

}

registr_mobile.onclick = function () {
    mobile_main.style.display = "block";
    mobile_menu.style.display = "none";
    registration_mobile.classList.add('active-mobile');
    authorization_mobile.classList.remove('active-mobile');
    document.querySelector('.form_one_more_password-mobile').style.display = "block";
    document.querySelector('.social-media-mobile-сontainer').style.display = "none";

}

eye_1.onclick = function () {
    if (password_1.type == 'password') {
        eye_1.src = "img/open-eye.png";
        password_1.type = 'text';
    } else {
        eye_1.src = "img/closed-eye.png";
        password_1.type = 'password';
    }
}

eye_2.onclick = function () {
    if (password_2.type == 'password') {
        eye_2.src = "img/open-eye.png";
        password_2.type = 'text';
    } else {
        eye_2.src = "img/closed-eye.png";
        password_2.type = 'password';
    }
}
eye_1_mobile.onclick = function () {
    if (password_1_mobile.type == 'password') {
        eye_1_mobile.src = "img/open-eye.png";
        password_1_mobile.type = 'text';
    } else {
        eye_1_mobile.src = "img/closed-eye.png";
        password_1_mobile.type = 'password';
    }
}

eye_2_mobile.onclick = function () {
    if (password_2_mobile.type == 'password') {
        eye_2_mobile.src = "img/open-eye.png";
        password_2_mobile.type = 'text';
    } else {
        eye_2_mobile.src = "img/closed-eye.png";
        password_2_mobile.type = 'password';
    }
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == search_list) {
        search_list.style.display = "none";
    }
    if (event.target == search_list_mobile) {
        search_list_mobile.style.display = "none";
    }
}

catalog_mobile.onclick = function () {
    if (submenu_mobile.style.display != "block") {
        submenu_mobile.style.display = "block";
        menu_mobile.src = "img/close-x.png";
    } else {
        submenu_mobile.style.display = "none";
        menu_mobile.src = "img/burger-menu.png"
    }
}


active_search_mobile.onclick = function () {
    search_list_mobile.style.display = "block";
}

lupa_mobile.onclick = function () {
    active_search_mobile.style.display = "block";
}

dop_menu.onclick = function () {
    mobile_main.style.display = "none";
    mobile_menu.style.display = "block";

}