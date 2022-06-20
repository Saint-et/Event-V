

function disableselect(e){
    return false 
    } 
    
    function reEnable(){ 
    return true 
    } 
    
    //if IE4+ 
    document.onselectstart=new Function ("return false") 
    document.oncontextmenu=new Function ("return false") 
    //if NS6 
    if (window.sidebar){ 
    document.onmousedown=disableselect 
    document.onclick=reEnable 
    }


    profil_display()
function profil_display() {
  let noms_user = document.querySelectorAll(".noms_user");
  noms_user.forEach((nom_user) => {
  
  nom_user.innerText = "#Event_V";//   15 lettres
})
}

copyText()


let search_bar = document.querySelector(".search_bar")



function copyText() {
    let cursor_pointer_copytext = document.querySelectorAll(".cursor_pointer_copytext");
    
    
    cursor_pointer_copytext.forEach((copyText) => {copyText.addEventListener("click", function () {
        console.log("bonjour")
  
   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.innerText);

  console.log(copyText.innerText)
  search_bar.value = copyText.innerText
  console.log(copyText)
  })})
  }
  
function spinner() {
  let spinner = document.createElement("div")
  spinner.className = "loadingio-spinner-eclipse-bujn9h2kqoe";
  img_container.appendChild(spinner);

  let spinner1 = document.createElement("div")
  spinner.className = "ldio-3mpdkwhpdxf";
  spinner.appendChild(spinner1);
}