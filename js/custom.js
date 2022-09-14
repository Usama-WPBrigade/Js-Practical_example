

const panels = document.querySelectorAll('.panel');
panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removeclass();
        panel.classList.add('active')
    })
})
function removeclass(){
    for(let i = 0; i < panels.length; i++){
        panels[i].classList.remove('active');
    }
}

/*************  Progress Bar *******************/
const progressBar =  document.getElementById('progress-bar');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const steps = document.querySelectorAll('.step');
const submitbtn  = document.getElementById('submit');



let currentActive = 1;
nextbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const fields = steps[currentActive - 1].querySelectorAll("input");
    let fieldsData = [];
  
    for(let field of fields){
        fieldsData.push(field.value);
    }
   
    if(fieldsData.includes('')){
        alert("All Fields Required");
        return;
    }
    
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
   update()
})

prevbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
   update()
})

function update(){
    circles.forEach((circle, index)=>{
        if(index < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    steps.forEach((step, index)=>{
        if(index < currentActive){
            removestepclass();
            step.classList.add('active')
        }else{
            step.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active');
    progressBar.style.width = (actives.length - 3) / (circles.length -1 ) * 100 + '%';
   
    if(currentActive === 1){
        prevbtn.disabled = true
    }
    else if(currentActive === circles.length){
        nextbtn.style.display = 'none'
        submitbtn.style.display = 'block'
    }else{
        prevbtn.disabled = false
        nextbtn.style.display = 'block'
        submitbtn.style.display = 'none'
    }
}

function removestepclass(){
   steps.forEach((step)=>{
    step.classList.remove('active');
   })
}

