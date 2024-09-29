let selector = document.querySelector('#modal__phone');
let im = new Inputmask("+7(999)999-99-99");
im.mask(selector)


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
})



document.querySelector('.information__btn').addEventListener('click', function() {
    document.querySelector('.modal').classList.add('active');
});
document.querySelector('.modal__close').addEventListener('click', function() {
    document.querySelector('.modal').classList.remove('active');
});
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.header').classList.toggle('open');
});

