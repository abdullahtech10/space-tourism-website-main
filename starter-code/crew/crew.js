const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const link = document.querySelector('.links')

menuOpen.addEventListener('click', ()=>{
    menuOpen.classList.add('active')
    menuClose.classList.add('active')
    link.classList.add('active')
})

menuClose.addEventListener('click', ()=>{
    menuOpen.classList.remove('active')
    menuClose.classList.remove('active')
    link.classList.remove('active')
})

let allData = []
async function crewData() {
    try {
        const res = await fetch('/starter-code/data.json')
        const result = await res.json()
        allData = result.crew
        loadCrew(3)
        num()
        // console.log(result.crew);

    } catch (err) {
        console.error(err, 'error');

    }
}

crewData()

function loadCrew(index) {
    const member = allData[index]
    if (!member) return

    document.querySelector('.crew-role').textContent = member.role
    document.querySelector('.crew-name').textContent = member.name
    document.querySelector('.crew-bio').textContent = member.bio
    document.querySelector('.crew-image').src = member.images.png
}

function num() {
    const button = document.querySelectorAll('button')
    button.forEach((btn, index) => {
        btn.setAttribute('aria-label', allData[index].name)
    })
}

document.querySelectorAll('button').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        loadCrew(index)

        document.querySelectorAll('button').forEach(bt => bt.classList.remove('active'))

        btn.classList.add('active')
    })


})