
content=document.getElementById("modal_list");

const addCard=()=>{
    const cardDetailes={
        id:`${Date.now()}`,
        candidate: document.getElementById("name").value,
        number:document.getElementById("phone").value,
        words:document.getElementById("opnion").value

    }
    content.insertAdjacentHTML('beforeend',generateCard(cardDetailes));

}

const generateCard=({id,candidate,number,words})=>{
    return(`<div class="col-md-6 col-lg-4 mb-3" id=${id} key=${id}>
    <div class="card">
      <div class="card-header d-flex ">
        <div class="container">
      <h5 >My Feedback</h5>
    </div>
      <div class="container">
      <button class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i>Edit</button>
      <button class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
    </div>
      <div class="card-body">
        <h5 class="card-title">${candidate}</h5>
        <p class="card-text">${words}</p>
        <a href="#" class="btn btn-primary">${number}</a>
      </div>
    </div>
  </div>`)
}