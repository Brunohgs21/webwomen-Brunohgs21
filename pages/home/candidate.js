function getAssignedLocation(){
   return JSON.parse(localStorage.getItem("@webwoman:jobsAssigned")) || []
}
 


function alreadyAssigned(job){
    
    return getAssignedLocation().findIndex(element => element.title === job.title)
}

function checkVagas(){
    const listVagas = document.querySelector('.vagas-selecionadas')
    let jobsAssigned = getAssignedLocation()
  
    if(jobsAssigned.length == 0){
        
        listVagas.innerHTML = `<h3 class='title-empty'>Você ainda não aplicou para nenhuma vaga</h3>
        <div class='flex col gap'>
        <img id='img1' src='./assets/img/Rectangle 41.png'>
        <img id='img2' src='./assets/img/Rectangle 42.png'>
        <div class='flex row gap2'>
        <img id='img3' src='./assets/img/Rectangle 43.png'>
        <img id='img4' src='./assets/img/Rectangle 44.png'>
        <img id='img5' src='./assets/img/Rectangle 44.png'>
        </div>
        </div>`
    }

}
checkVagas()



function assignJob(job,id){

 const assignedJob = alreadyAssigned(job)


 let jobsAssigned = getAssignedLocation()
 


 const btnCandidate = document.querySelectorAll('.candidate-button')

 let botoes = [...btnCandidate]
 

 
 
 if(assignedJob < 0){
    
    jobsAssigned = [...jobsAssigned, job]
    botoes[id].innerText = 'Remover Candidatura'
    
    
 }else{
    jobsAssigned.splice(assignedJob,1)
    botoes[id].innerText = 'Candidatar'
    

    
 }
 

 
 localStorage.setItem("@webwoman:jobsAssigned", JSON.stringify(jobsAssigned))
}






function listVagasAssigned() {
const listVagas = document.querySelector('.vagas-selecionadas')
const arrayVagas = getAssignedLocation()

    listVagas.innerHTML = ''

    arrayVagas.forEach(element => {
        
        let vaga = element
        

        let templateVagaCriado = createTemplateVaga(element)

        listVagas.appendChild(templateVagaCriado)
    });
   
    checkVagas()
} 
listVagasAssigned()

function createTemplateVaga(vaga){
    const {title,location, enterprise, id} = vaga

    const li = document.createElement('li')
    li.classList.add('list-item')

    const div = document.createElement('div')
    div.classList.add('vaga-content')
    

    const p = document.createElement('p')
    p.innerHTML = title

    const button = document.createElement('button')
    
    button.id = 'button-trash'

    const img = document.createElement('img')
    img.src = './assets/img/trash (1).png'
    img.id = `img_${id}`

   
    
    img.addEventListener('click', ()=>{
        assignJob(vaga,id)
        listVagasAssigned()
    })

    const p2 = document.createElement('p')
    p2.classList = 'info-text'

    const span1 = document.createElement('span')
    span1.classList = 'vaga-info'
    span1.innerHTML = enterprise

    const span2 = document.createElement('span')
    span2.classList = 'vaga-info2'
    span2.innerHTML = location

    p2.append(span1,span2)
    button.append(img)
    div.append(p,button)
    li.append(div,p2)


    return li
    

}


