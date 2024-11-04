document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('answer')
    const modal = document.querySelector('.modal')
    const closeButton = document.querySelector('.close-button')
    const send = document.querySelector('.send')
    clickButton.addEventListener("click", function () {
        modal.classList.toggle("show-modal")
    })
    closeButton.addEventListener("click", function () {
        modal.classList.remove("show-modal")
    })
    document.querySelector('form').addEventListener('submit', function(event) {
        let form = document.getElementsByTagName('form')[0]
        let first_name = form.elements.fname.value
        let last_name = form.elements.lname.value
        let mail = form.elements.mail.value
        let quest = form.elements.question.value
        let check = []
        check[0] = form.elements.random.checked
        check[1] = form.elements.smi.checked
        check[2] = form.elements.recommend.checked
        check[3] = form.elements.banner.checked
        check[4] = form.elements.searchEngine.checked
        if (first_name === '') {
            event.preventDefault()
            alert('Пожалуйста, ведите ваше имя')
        } else if (last_name === '') {
            event.preventDefault()
            alert('Пожалуйста, ведите вашу фамилию')
        }  else if (mail === '') {
            event.preventDefault()
            alert('Пожалуйста, ведите ваш e-mail')
        } else if (quest === '') {
            event.preventDefault()
            alert('Пожалуйста, ведите ваш вопрос')
        } else if (quest.length > 200) {
            event.preventDefault()
            alert('Вопрос не должен превышать 200 символов')
        } else if (check.filter(Boolean).length === 0) {
            event.preventDefault()
            alert('Пожалуйста, отметьте хотя бы один вариант')
        } else {
            alert('Ваш вопрос отправлен, спасибо за обращение!')
        }
    })
})