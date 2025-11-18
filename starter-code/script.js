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


const links = document.querySelectorAll('a')
links.forEach(link =>{
    link.addEventListener('click', (e)=>{
        // e.preventDefault()

        links.forEach(li => li.classList.remove('active'))
        link.classList.add('active')
    })
})