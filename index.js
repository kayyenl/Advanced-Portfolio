// D8M9j6zNzNEXr2wi1
// service_xdfvfdj
// template_w2pk8wr

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_xdfvfdj',
            'template_w2pk8wr',
            event.target,
            'D8M9j6zNzNEXr2wi1'
        ).then( () => { //for the console log to be printed after the server, it needs to be in a THEN.
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch( () => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "This service is temporarily down. Please contact me diretly at e0543918@u.nus.edu."
            );
        })
}

let isModalOpen = false;
function toogleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen)  document.body.classList += " modal-open";
    else document.body.classList.remove("modal-open");
}