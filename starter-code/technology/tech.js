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
async function techData(){
    try{
        const res = await fetch('/starter-code/data.json')
        const result =await res.json()

        allData = result.technology
        loadTech(0)
        btnNum()
        // console.log(allData);
        
        
    }catch(err){
        console.error(err, 'error');
        
    }
}

techData()

function loadTech(index){
    const member = allData[index]
    
    if(!member) return

    document.querySelector('.tech-name').textContent = member.name
    document.querySelector('.tech-desc').textContent = member.description
    document.querySelector('.tech-image').src = member.images.portrait
}

function btnNum(){
    const button = document.querySelectorAll('button')
    button.forEach((btn, index)=>{
        btn.setAttribute('aria-label', allData[index].name)
    })
}

document.querySelectorAll('button').forEach((btn, index) =>{
    btn.addEventListener('click',()=>{
        loadTech(index)
        document.querySelectorAll('button').forEach(bt => bt.classList.remove('active'))
        btn.classList.add('active')
    })
})