var selectedRow=null;
const onFormSubmit=()=>{event.preventDefault();
    var formData=readFormData();
    if(selectedRow===null){
        insertNewRecord(formData);
    }
    else{
 updateRecord(formData);
    }
resetForm();
}
//retrieve the data
const readFormData=()=>{
    var formData={}
    formData["sl_no"] =  document.getElementById("sl_no").value;
    formData["date"] =  document.getElementById("date").value;
    formData["place"] =  document.getElementById("place").value;
    formData["amount"] =  document.getElementById("amount").value;
     
    return formData;
}

// insert the data 

const insertNewRecord=(data)=>{
    var table=document.getElementById("table_content").getElementsByTagName('tbody')[0];
    var newRow= table.insertRow(table.length)
    var cell1=newRow.insertCell(0);
    cell1.innerHTML=data.sl_no;
    
    var cell2=newRow.insertCell(1);
    cell2.innerHTML=data.date;

    var cell3=newRow.insertCell(2);
    cell3.innerHTML=data.place;

    var cell4=newRow.insertCell(3);
    cell4.innerHTML=data.amount;

    var cell5=newRow.insertCell(4);
    cell5.innerHTML=`<button onClick="onEdit(this)" type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i>Edit</button>`;
    
    
}

const onEdit=(td)=>{
// selectedRow=td.parentElement.parentElement;
selectedRow=td.parentNode.parentNode;
document.getElementById('sl_no').value=selectedRow.cells[0].innerHTML;
document.getElementById('date').value=selectedRow.cells[1].innerHTML;
document.getElementById('place').value=selectedRow.cells[2].innerHTML;
document.getElementById('amount').value=selectedRow.cells[3].innerHTML;
console.log(td.parentNode.parentNode);
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.sl_no;
    selectedRow.cells[1].innerHTML=formData.date;
    selectedRow.cells[2].innerHTML=formData.place;
    selectedRow.cells[3].innerHTML=formData.amount;
}

function onDelete(td){
    if(confirm("do you want to delete?")){
        row=td.parentNode.parentNode;
        document.getElementById("table_content").deletRow(row.rowIndex);

    }
    resetForm();
}

function resetForm(){
    document.getElementById("sl_no").value='';
    
   
      document.getElementById("date").value='';
     document.getElementById("place").value='';
     document.getElementById("amount").value='';
}