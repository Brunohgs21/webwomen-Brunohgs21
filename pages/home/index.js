/* Desenvolva sua lógica aqui... */


const ul = document.querySelector('.vagas')

function listVaga(array, referenciaHtml){
    array.forEach(element => {
        
        let vaga = element
        
        let createdTemplate = createTemplate(element)
        
        referenciaHtml.appendChild(createdTemplate)
        
    });
}

listVaga(jobsData,ul)

function createTemplate(objeto){
    let vagaid = objeto.id
    let titulo = objeto.title
    let empresa = objeto.enterprise
    let local = objeto.location
    let descricao = objeto.descrition
    let modalidade = objeto.modalities[0]
    let modalidade2 = objeto.modalities[1]
    

    const li = document.createElement('li')
    li.classList.add('vaga')

    const div = document.createElement('div')

    const h4 = document.createElement('h4')
    h4.classList.add('vaga-title')
    h4.innerText = titulo

    const infoText = document.createElement('p')
    infoText.classList.add('info-text')

    const vagaInfo = document.createElement('span')
    vagaInfo.classList.add('vaga-info')
    vagaInfo.innerText = empresa

    const vagaInfo2 = document.createElement('span')
    vagaInfo2.classList.add('vaga-info2')
    vagaInfo2.innerText = local

    const pText = document.createElement('p')
    pText.classList.add('p-text')
    pText.innerText = descricao

    const modalidades = document.createElement('p')
    modalidades.classList.add('modalities-paragraph')

    const pText2 = document.createElement('span')
    pText2.classList.add('p-text2')
    pText2.innerText = modalidade

    const pText3 = document.createElement('span')
    pText3.classList.add('p-text2')
    pText3.innerText = modalidade2

    const btnCandidate = document.createElement('button')
    btnCandidate.classList= 'candidate-button'
    btnCandidate.id = `btn_${vagaid}`
    btnCandidate.innerText = 'Candidatar'

     if(alreadyAssigned(objeto) >= 0){
       btnCandidate.innerText = 'Remover Candidatura'
       btnCandidate.classList.add('.remove-assign-btn')
     }else{
       btnCandidate.innerText = 'Candidatar'
     }

    btnCandidate.addEventListener('click',(event)=>{
      let id = event.target.id.substring(4)
     
      assignJob(objeto,id)
      listVagasAssigned()
      if(alreadyAssigned(objeto) >= 0){
        btnCandidate.innerText = 'Remover Candidatura'
        btnCandidate.classList.add('.remove-assign-btn')
      }else{
        btnCandidate.innerText = 'Candidatar'
        btnCandidate.classList.remove('.remove-assign-btn')
      }
     
    })

    modalidades.append(pText2,pText3)
    infoText.append(vagaInfo,vagaInfo2)
    div.append(h4,infoText,pText,modalidades,btnCandidate)
    li.append(div)

    return li
    
}
    /*<li class="vaga">
                <div>
                  <h4 class="vaga-title">Pessoa desenvolvedora front-end React JS</h4>
                  <p class="info-text"><span class="vaga-info">Kenzie Academy</span><span class="vaga-info2">Curitiba</span>
                  </p>
                  <p class="p-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has
                    been the industry's standard dummy text ever since the 1500s</p>
                  <p class="p-text2">Home Office</p>
                  <button class="candidate-button">Candidatar</button>
                </div>
              </li>*/