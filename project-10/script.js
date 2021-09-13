const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// const generateJoke = () => {
//     fetch('https://icanhazdadjoke.com', {
//         headers: {
//             Accept: 'application/json',
//         },
//     })
//     .then(res => res.json())
//     .then(data => jokeEl.innerHTML = data.joke)
// }
// generateJoke()

// 

const generateJoke = async () => {
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
          },
    })

    const data = await res.json()

    jokeEl.innerText = data.joke
}
generateJoke()

jokeBtn.onclick = () => generateJoke()