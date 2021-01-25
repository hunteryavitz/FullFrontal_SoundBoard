const sounds = ['chicken', 'cow', 'goat', 'horse', 'pig']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSounds()
        document.getElementById('container').setAttribute("style", `background-image: url('images/${sound}.png'); background-repeat: no-repeat; background-position: center; background-size: 480px 480px`)
        document.getElementById('container').style.background.anchor
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSounds() {
    sounds.forEach(sound => {
        const snd = document.getElementById(sound)
        snd.pause()
        snd.currentTime = 0;
    })
}