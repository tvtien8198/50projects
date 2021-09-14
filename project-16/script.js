const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('listers')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

const updateBigCup = () => {
    const fullCups = document.querySelectorAll('.cup-small.full').length

    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}

const hightlightCups = index => {
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')){
        index--
    }
    smallCups.forEach((cup, index2) => {
        index2 <= index ? cup.classList.add('full') :cup.classList.remove('full')
    })

    updateBigCup()
}

smallCups.forEach((cup, index) => {
    cup.onclick = () => hightlightCups(index)
})