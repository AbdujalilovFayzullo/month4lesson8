let select = document.querySelector('.select_bread')
let breadResult = document.querySelector('.bread')
let sizeResult = document.querySelector('.size_answer')
let fatherOfRadios = document.querySelector('.radius_label_box')
let radiusLabel = document.querySelectorAll('.radius_label')
let fatherOfCheckbox = document.querySelector('.checkboxes_box')
let fatherOfComponents = document.querySelector('.components_choice')
let wrapperOfforTopTitle = document.querySelector('.forTop_result')
let wrapperOfforComponents = document.querySelector('.components_result')
let btn = document.querySelector('.submit_btn')
let modal = document.querySelector('.modal')
let timer = document.querySelector('.modal_heading')

select.addEventListener('change', ()=>{
    breadResult.textContent = select.value
})

fatherOfRadios.addEventListener('click', (e)=>{
    let target = e.target
    radiusLabel.forEach((item)=>{
        item.style.backgroundColor = 'transparent'
        item.style.color = 'black'
    })
    let inputRadio = document.querySelector('input:checked')
    
    if(target.tagName === 'INPUT'){
        inputRadio.parentNode.style.backgroundColor = 'green'
        inputRadio.parentNode.style.color = 'white'
        sizeResult.textContent = inputRadio.value
    }
})
let resultsOfCheckbox = []

fatherOfCheckbox.addEventListener('click', (e) =>{
    let inputCheckbox = document.querySelectorAll("input[name='for_top']:checked")
    
    wrapperOfforTopTitle.innerHTML = null
    for(let i = 0;i<inputCheckbox.length;i++){
        let forTopTitle = document.createElement('p')
        forTopTitle.setAttribute('class','answer')
        forTopTitle.textContent = `- ${inputCheckbox[i].value}`
        wrapperOfforTopTitle.appendChild(forTopTitle)
    }
})

fatherOfComponents.addEventListener('click',(e)=>{
    let inputComponents = document.querySelectorAll('input[name="components"]:checked')
    
    wrapperOfforComponents.textContent = null
    
    for(let i = 0;i<inputComponents.length;i++){
        let componentsTitle = document.createElement('p')
        componentsTitle.setAttribute('class','answer')
        componentsTitle.textContent = `- ${inputComponents[i].value}`
        wrapperOfforComponents.appendChild(componentsTitle)
    }
})

btn.addEventListener('click',()=>{
    let count = 5
    setTimeout(()=>{
        modal.classList.remove('none')
        timer.textContent = count
        
        let timeInterval = setInterval(()=>{
            count--
            timer.textContent = count
            
            if(count === 0){
                clearInterval(timeInterval)
                modal.classList.add('none')
            }
        },1000)
    },500)
})