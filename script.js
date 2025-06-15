function getFormvalue(event) {
    //Write your code here
	event.preventDefault();
	let forms = document.getElementById("form1");
	let firstname = forms["fname"].value;
	let lastname = forms["lname"].value;
alert(`${firstname} ${lastname}`);
}
