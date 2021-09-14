const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.onclick = () => {
        toggle.parentNode.classList.toggle('active')
    }
})