const images = document.querySelectorAll('.image')

const removeImagesActive = () => {
    images.forEach(image => {
        image.classList.remove('active')
    })
}

images.forEach(image => {
    image.onclick = () => {
        removeImagesActive()
        image.classList.add('active')
    }
})
