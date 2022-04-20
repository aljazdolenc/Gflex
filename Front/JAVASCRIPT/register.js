const data ={
    "username": "aljaz5",
    "email": "aljazdolenc@gmail.com",
    "password":"aljaz123"
}



;
function wholeCheck(){
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    console.log(storage);
//preverjanje če so vsi zapolnjeni
if(username !=="" || email !=="" || password1 !=="" || password2 !==""){
    var allFilled=true;
}else{
    var allFilled=false;
}

// preverjanje dolžine Usernama
if(username.length <= 20 && username.length >= 6){
   var correctUsernameLength = true;
}else{
    var correctUsernameLength=false;
}

//preverjanje če username obstaja
for(let i=0;i<storage.length;i++){
    if(storage[i].username == username){
    var newUsername=false;
    break;
    }else{
    var newUsername=true;
    }
}

// preverjanje če je email veljaven
var correctEmail = email.includes("@",".");

//preverjanje če se je email že uporabil
for(let i=0;i<storage.length;i++){
    if(storage[i].email == email){
    var newEmail=false;
    break;
    }else{
    var newEmail=true;
    }
}
//preverjanje dolžine gesla
if(password1.length <= 20 && password1.length >= 6){
    var correctPasswordLength=true;
 } else{
  var correctPasswordLength=false;
 }

//passworda enaka
if(password1 === password2){
    var samePassword=true;
}else{
    var samePassword=false;
}

switch(true) {
    case allFilled == false :// check če so vsa polja zapoljena
    console.log("Ni so vsi izpolnjeni");
    break;

    case (correctUsernameLength == false) : //check če je pravilna dolžina usernama
    console.log("predolg/prekratek username");
    break;

    case (newUsername == false) :
    console.log("Username že v uporabi");
    break;

    case (correctEmail == false) :
    console.log("Nepravilen email");
    break;

    case (newEmail == false) :
    console.log("Email že v uporabi");
    break;

    case (correctPasswordLength == false) :
    console.log("Nepravilna dolžina gesla");
    break;

    case (samePassword == false) :
    console.log("Nista enaki gesli");
    break;
    
    default :
    console.log("super");
    let userInfo={
        "username": username,
        "email": email,
        "password":password1,
    };
    localStorage.setItem("storage",JSON.stringify(userInfo));
    console.log(localStorage);
}
};





//username already exists
let userExists = document.getElementById('already-ex');
userExists.style.visibility= 'hidden';

//passwords do not match
let toShort = document.getElementById('to-short');
toShort.style.visibility= 'visible';


//email already in use
let emailExists = document.getElementById('already-use');
emailExists.style.visibility= 'hidden';

//passwords do not match
let notMatch = document.getElementById('not-match');
notMatch.style.visibility= 'hidden';
