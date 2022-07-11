// D8M9j6zNzNEXr2wi1
// service_xdfvfdj
// template_w2pk8wr

let isModalOpen = false;
let isDarkMode = false;
const scaleFactor = 1/20;
const scaleFactorRotating = 10;

function moveBackground(event) {
    const shapes = document.querySelectorAll('.shapes');
    const xcoord = event.clientX * scaleFactor;
    const ycoord = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        if (i % 2 === 1) {
            shapes[i].style.transform = `translate(${-xcoord}px, ${-ycoord}px) rotate(${-(xcoord * scaleFactorRotating)}deg)`;
        }
        else {
            shapes[i].style.transform = `translate(${xcoord}px, ${ycoord}px) rotate(${xcoord * scaleFactorRotating}deg)`;
        }
    }
}

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

function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen)  document.body.classList += " modal-open";
    else document.body.classList.remove("modal-open");
}

function toggleContrast() {
    isDarkMode = !isDarkMode;
    if (isDarkMode == false) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme");
    }
}