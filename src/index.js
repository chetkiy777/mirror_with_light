import './sass/main.scss';

const form = document.querySelector('.form')
const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')

function getParams(e) {
    e.preventDefault()

    const obj = {
        height: +form.elements.height.value,
        width: +form.elements.width.value,
        isAmalgama: form.elements.isAmalgama.checked,
        lightType: form.elements.lightType.value,
        mkv: +(form.elements.height.value/1000) * +(form.elements.width.value/1000),
        mpog: (+(form.elements.height.value/1000) + +(form.elements.width.value/1000))*2
    }

    openModal(obj)
}

const openModal = (obj) => {
    backdrop.classList.remove('hidden')
    modal.innerHTML = ''
    
    const markup = `
        <p class="modal__field">Высота ${obj.height}</p>
        <p class="modal__field">Ширина ${obj.width}</p>
        <p class="modal__field">Свечение ${obj.lightType}</p>
        <p class="modal__field">м.кв ${obj.mkv}</p>
        <p class="modal__field">м.пог ${obj.mpog}</p>
    `

    modal.insertAdjacentHTML('afterbegin', markup)
}

const closeModal = () => {
    backdrop.classList.add('hidden')
}

form.addEventListener('submit', getParams)
backdrop.addEventListener('click', closeModal)