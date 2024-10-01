if(window.location.pathname === '/index.html') {
    let selector = document.querySelector('#modal__phone');
    let im = new Inputmask("+7(999)999-99-99");
    im.mask(selector);


    const validate = new window.JustValidate('#modal__form');
    validate.addField('#modal__name', [
        {
            rule: "required",
            errorMessage: "*Введите имя"
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "*минимум 2 символа"
        },
    ]).addField('#modal__phone', [
        {
            validator: (value)=> {
                const phones = selector.inputmask.unmaskedvalue()
                return Boolean(Number(phones) && phones.length > 0)
            },
            errorMessage: '*Введите телефон'
        },
        {
            validator: (value)=> {
                const phones = selector.inputmask.unmaskedvalue()
                return Boolean(Number(phones) && phones.length === 10)
            },
            errorMessage: '*Введите телефон полностью'
        },
    ]).addField('#modal__email', [
        {
            rule: "required",
            errorMessage: "*Введите email"
        },
        {
            rule: "minLength",
            value: 2,
            errorMessage: "*минимум 2 символа"
        },
    ]).onSuccess(async function() {
        let data = {
            name: document.getElementById('name').value,
            tel: document.getElementById('phone').value,
            message: document.getElementById('msg').value
        }
        let responsive = await fetch("mail.php", {
            method: "POST",
            body:JSON.stringify(data),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        let result = await responsive.text();
        alert(result)
    });

    document.querySelector('.information__btn').addEventListener('click', function() {
        document.querySelector('.modal').classList.add('active');
    });
    document.querySelector('.clients__btn').addEventListener('click', function() {
        document.querySelector('.modal').classList.add('active');
    });
    document.querySelector('.modal__close').addEventListener('click', function() {
        document.querySelector('.modal').classList.remove('active');
    });
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open');
    });

    let tabsCitizens = document.getElementById('citizens-btn');
    let tabsBisnes = document.getElementById('bisnes-btn');

    tabsCitizens.addEventListener('click', function() {
        document.getElementById('bissnes').style.display = 'none'
        document.getElementById('citizens').style.display = 'grid'
    });

    tabsBisnes.addEventListener('click', function() {
        document.getElementById('citizens').style.display = 'none'
        document.getElementById('bissnes').style.display = 'grid'
    });
};   




if (window.location.pathname === '/about.html') {
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open');
    });    
}

if (window.location.pathname === '/services.html') {
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open');
    });
    // let table = document.querySelectorAll('.services__table');
    // let tableRow = document.querySelectorAll('.services__table-item--row');  
    // let tableShow = document.querySelectorAll('.services__table-item--show');
    // let btnShow = document.querySelectorAll('.services__table-show');
    // tableRow.forEach((el, index) => {
    //     if (index % 2 == 0) {
    //         el.style.backgroundColor = '#f7f2c9';
    //     }
    // });    
    
    // btnShow.forEach(el => {
    //     el.addEventListener('click', ()=> {
    //         tableShow.forEach(el => {
    //             el.classList.toggle('active')
    //         })
    //     })
    // })

    // btnShow.forEach((btn, index) => {
    //     btn.addEventListener('click', () => {
    //         const table = tableShow[index];
    //         table.classList.toggle('active');
    //     });
    // });

    let tables = document.querySelectorAll('.services__table');

    tables.forEach(table => {
        let tableRow = table.querySelectorAll('.services__table-item--row');  
        let tableShow = table.querySelectorAll('.services__table-item--show');
        let btnShow = table.querySelector('.services__table-show');
        tableRow.forEach((el, index) => {
            if (index % 2 == 0) {
                el.style.backgroundColor = '#f7f2c9';
            }
        });
        btnShow.addEventListener('click', () => {
            tableShow.forEach(el => {
                el.classList.toggle('active');
            });
        });
    });
}