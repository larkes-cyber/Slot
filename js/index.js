let but = document.querySelector('.button')

let topSlot = document.querySelectorAll('.slot')
let bottomSlot = document.querySelector('.bottomSlot')


const images = ['build-64.png','cash-64.png','energy-64.png','gold-64.png','staff-64.png']


// alert(Math.floor(Math.random() * (5 - 0) + 0))



for(let i = 0;i <= 20;i++){
    const sampleSlot = document.createElement('div')
        const containerOfSlot = document.createElement('div')
        containerOfSlot.className = 'containerOfSlot'
        const img = document.createElement('div')
        img.style.cssText = `

            background-image: url("css/img/${images[Math.floor(Math.random() * (4 - 0) + 0)]}");
            height: 200px;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 1;

        `
        containerOfSlot.append(img)
        sampleSlot.append(containerOfSlot)
    bottomSlot.append(sampleSlot)
}

topSlot.forEach(item => {
    for(let i = 0;i <= 20;i++){
        const sampleSlot = document.createElement('div')
        const containerOfSlot = document.createElement('div')
        containerOfSlot.className = 'containerOfSlot'
        const img = document.createElement('div')
        img.style.cssText = `

            background-image: url("css/img/${images[Math.floor(Math.random() * (4 - 0) + 0)]}");
            height: 200px;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 1;

        `
        containerOfSlot.append(img)
        sampleSlot.append(containerOfSlot)
        item.append(sampleSlot)
    }
})

function cancel(){
    topSlot.forEach(item => {
        item.className = "slotAfter"
    }) 
    bottomSlot.className = "bottomSlotAfter"
}

but.onclick = function() {
    
    topSlot.forEach(item => {
        item.className = "slot animToBottom"
    })

    bottomSlot.className = "bottomSlot animToTop"

    setTimeout(cancel, 700);

};