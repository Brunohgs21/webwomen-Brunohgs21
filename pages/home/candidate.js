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
        
        listVagas.innerHTML = `<h3>Você ainda não aplicou para nenhuma vaga</h3>`
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


/* <li>
            <div class="vaga-content">
              <p>Pessoa desenvolvedora front-end-React JS</p>
              <button id="button-trash" class="candidate-button"><img src="./assets/img/trash (1).png" alt=""></button>
            </div>
            <p class="info-text"><span class="vaga-info">Enterprise</span><span class="vaga-info2">Location</span></p>
          </li> */
