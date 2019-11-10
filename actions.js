

function save() {
	var firstname=document.getElementById("name").value;
	var lastname=document.getElementById("lastname").value;
	var salary=document.getElementById("salary").value;
	var student = { nom:firstname,lastname:lastname,salary:salary};
	student=JSON.stringify(student);
var d=new Date();
	localStorage.setItem("student"+d,student);
  console.log('Event caught');
  alert(student);
  
  
} 