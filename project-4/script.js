const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const container = document.querySelector('.container')

btn.onclick = () => {
    container.classList.toggle('show')
    search.focus()
}