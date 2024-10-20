function fun(){
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const Massege = document.getElementById('Massege').value
if( username && email && Massege){
    alert('Submitted Succesfully!');
    document.getElementById('username').value = ""
    document.getElementById('email').value = ""
    document.getElementById('Massege').value = ""
}
else{
    alert('please fill up the form at first!');
    document.getElementById('username').value = ""
    document.getElementById('email').value = ""
    document.getElementById('Massege').value = ""
}
}