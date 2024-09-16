function setcookie(){
document.cookie = "username=Raneem";
document.cookie = "age=21";
document.cookie.split('=');
}

setcookie()
console.log(document.cookie);

    /////////////////////

function deletecookie(Date){
    var date = new Date("9/16/2024");
    document.cookie = "username=Shaimaa;expires="+date+"";
    document.cookie = "age=42";
}

deletecookie(Date)
console.log(document.cookie);

    /////////////////////

function getCookie(name) {
    const Name = name + "=";
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(Name) === 0) {
            return decodeURIComponent(cookie.substring(Name.length));
        }
    }
    return null;
}
