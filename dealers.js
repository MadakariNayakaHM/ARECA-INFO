let globalTaskData=[];
 content=document.getElementById("modal_list");

const addCard=()=>{
    const cardDetailes={
        id:`${Date.now()}`,
        candidate: document.getElementById("name").value,
        number:document.getElementById("phone").value,
        words:document.getElementById("opnion").value

    };
    content.insertAdjacentHTML('beforeend',generateCard(cardDetailes));

    globalTaskData.push(cardDetailes);
    SaveToLocalStorage();

}

const generateCard=({id,candidate,number,words})=>{
    return(`<div class="col-md-6 col-lg-4 mb-3" id=${id} key=${id}>
    <div class="card">
      <div class="card-header d-flex ">
        <div class="container">
      <p style="color:green;" >My Feedback</p>
    </div>
      <div class="container d-flex justify-content-end" >
      
      <button class="btn btn-outline-danger" name="${id}" onClick="deleteTask(this)">
      <i class="fas fa-trash-alt" name="${id}" onClick="deleteTask(thiss)"> Delete</i>
      </button>
    </div>
    </div>
      <div class="card-body">
        <p class="card-title">${candidate}</p>
        <p class="card-text">${words}</p>
        <a href="#" class="btn btn-primary">${number}</a>
      </div>
    </div>
  </div>`);
}

// const saveToLocalStorage=()=>{
//   localStorage.setItem("madakari",JSON.stringify({nayaka:storedData}));
// }

// const reloadData=()=>{
//   const localStorageCopy=JSON.parse(localStorage.getItem("madakari"));
//   if(localStorageCopy){
//     storedData=localStorageCopy["nayaka"];
//     console.log(storedData);
//   }
//   storedData.map((cardData)=>{ content.insertAdjacentHTML('beforeend',generateCard(cardData));});
// }


const SaveToLocalStorage=()=>{
  localStorage.setItem("madakari",JSON.stringify({nayaka:globalTaskData}));
}

const ReloadTaskCard=()=>{
  const localStorageCopy=JSON.parse(localStorage.getItem("madakari"));
  
  if(localStorageCopy){
      globalTaskData=localStorageCopy.nayaka;
      
  }
  console.log(globalTaskData);

globalTaskData.map((cardData)=>{
  content.insertAdjacentHTML('beforeend',generateCard(cardData));

})


}

const deleteTask=(e)=>{
  const TargetID=e.getAttribute("name");
  console.log(TargetID);
  globalTaskData=globalTaskData.filter((cardData)=> cardData.id!==TargetID);
  SaveToLocalStorage();
  window.location.reload();
}