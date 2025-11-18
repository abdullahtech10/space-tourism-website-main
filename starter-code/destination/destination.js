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
async function destinationPage() {
    try{
        const res = await fetch('/starter-code/data.json')
        const result = await res.json()
        allData = result.destinations
        // console.log(result.destinations.images);
        loadDestination('Mars')



        
    }catch(err){
        console.error(err, 'error');
        
    }
}

destinationPage()

function loadDestination(name){
    const  destination = allData.find(dest => dest.name.toLowerCase() === name.toLowerCase())
    if(!destination) return

    // console.log(destination.images.webp);
    

    document.querySelector('.destination-image').src = destination.images.webp
    document.querySelector('.destination-name').textContent = destination.name
    document.querySelector('.destination-desc').textContent = destination.description
    document.querySelector('.destination-distance').textContent = destination.distance
    document.querySelector('.destination-travel').textContent = destination.travel
}

document.querySelectorAll('button').forEach(btn =>{
    btn.addEventListener('click', ()=>{
        const planetName = btn.textContent.trim()
        loadDestination(planetName)

        document.querySelectorAll('button').forEach(bt => bt.classList.remove('active'))

        btn.classList.add('active')
    })
})