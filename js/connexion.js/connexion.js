displayConnexion()



function displayConnexion() {
    let article = document.createElement("article");
    article.id = "connextion"
    document.getElementById("section_connextion").appendChild(article)

    let img = document.createElement("img");
    img.src = "/frontend/picture/logo/logo_transparent.png"
    img.alt = ""
    article.appendChild(img);

    let title = document.createElement("h1")
    title.className = "main_title white";
    title.innerText = "Welcome to Event-V";
    article.appendChild(title);

    let descrip = document.createElement("p")
    descrip.className = "white para_p";
    descrip.innerText = "This site was created with the aim of helping to manage your events whether in a company, office, small group, games...";
    article.appendChild(descrip);

    let titleN2 = document.createElement("h2")
    titleN2.className = "title_form white";
    titleN2.innerText = "Login";
    article.appendChild(titleN2);


    let div1 = document.createElement("div");
    div1.className = "input_container";
    article.appendChild(div1);

    let email = document.createElement("p");
    email.className = "white";
    email.innerText = "*E-mail";
    div1.appendChild(email);

    let inputEmail = document.createElement("input")
    inputEmail.className = "input_p"
    inputEmail.type = "email"
    inputEmail.id = "email"
    div1.appendChild(inputEmail);

    let div2 = document.createElement("div");
    div1.className = "input_container";
    article.appendChild(div2);

    let pass = document.createElement("p");
    pass.className = "white";
    pass.innerText = "*Password (8 character minimum)";
    div2.appendChild(pass);

    let inputPass = document.createElement("input")
    inputPass.className = "input_p"
    inputPass.type = "password"
    inputPass.id = "pass"
    inputPass.name = "password"
    div2.appendChild(inputPass);

    let div3 = document.createElement("div");
    div3.className = "input_container";
    article.appendChild(div3);

    let submit = document.createElement("input")
    submit.type = "submit"
    submit.id = "submit"
    submit.value = "Login"
    div3.appendChild(submit);

    let textInscrip = document.createElement("p");
    textInscrip.className = "white para_p";
    textInscrip.innerText = "Still do not have an account ?";
    article.appendChild(textInscrip);

    let div4 = document.createElement("div");
    div4.className = "input_container";
    article.appendChild(div4);

    let btnInscrip = document.createElement("p");
    btnInscrip.className = "btn_in";
    btnInscrip.id = "inscription";
    btnInscrip.innerText = "*Registration";
    div4.appendChild(btnInscrip);

    let descrip2 = document.createElement("p");
    descrip2.className = "white para_p";
    descrip2.innerText = "Here you can find groups specializing in certain events Business, office, small group, games..., Create and personalize your profile by adding your description. You can select a category in which you want to be found.";
    article.appendChild(descrip2);

    boutonConnexion()
    displayInscription()

} 

function displayInscription() {

    let bouton = document.getElementById("inscription")

    bouton.addEventListener("click", function () {

    let articleDelete = document.getElementById("connextion")
    articleDelete.remove()

    let article = document.createElement("article");
    article.id = "inscription";
    document.getElementById("section_connextion").appendChild(article)

    let img = document.createElement("img");
    img.src = "/frontend/picture/logo/logo_transparent.png"
    img.alt = ""
    article.appendChild(img);

    let title = document.createElement("h1")
    title.className = "main_title white";
    title.innerText = "Registration on Event-V";
    article.appendChild(title);

    let div8 = document.createElement("div");
    div8.className = "input_container";
    article.appendChild(div8);

    let eventTag = document.createElement("p");
    eventTag.className = "white";
    eventTag.innerText = "*Event-pseudo";
    div8.appendChild(eventTag);

    let texteventTag = document.createElement("input");
    texteventTag.className = "input_p";
    texteventTag.type = "text";
    texteventTag.id = "eventTag";
    div8.appendChild(texteventTag);

    let div1 = document.createElement("div");
    div1.className = "input_container";
    article.appendChild(div1);

    let prenom = document.createElement("p");
    prenom.className = "white";
    prenom.innerText = "*First name";
    div1.appendChild(prenom);

    let textPrenom = document.createElement("input");
    textPrenom.className = "input_p";
    textPrenom.type = "text";
    textPrenom.id = "prenom";
    div1.appendChild(textPrenom);

    let div2 = document.createElement("div");
    div2.className = "input_container";
    article.appendChild(div2);

    let nom = document.createElement("p");
    nom.className = "white";
    nom.innerText = "*Name";
    div2.appendChild(nom);

    let textNom = document.createElement("input");
    textNom.className = "input_p";
    textNom.type = "text";
    textNom.id = "nom";
    div2.appendChild(textNom);

    let div3 = document.createElement("div");
    div3.className = "input_container";
    article.appendChild(div3);

    let email = document.createElement("p");
    email.className = "white";
    email.innerText = "*E-mail";
    div3.appendChild(email);

    let inputEmail = document.createElement("input")
    inputEmail.className = "input_p"
    inputEmail.type = "email"
    inputEmail.id = "emailIns"
    div3.appendChild(inputEmail);

    let div4 = document.createElement("div");
    div4.className = "input_container";
    article.appendChild(div4);

    let pass = document.createElement("p");
    pass.className = "white";
    pass.innerText = "*Write 2 times Password (8 characters minimum)";
    div4.appendChild(pass);

    let inputPass = document.createElement("input")
    inputPass.className = "input_p"
    inputPass.type = "password"
    inputPass.id = "passIns"
    inputPass.name = "password"
    div4.appendChild(inputPass);

    let div5 = document.createElement("div");
    div5.className = "input_container";
    article.appendChild(div5);

    let inputPass1 = document.createElement("input")
    inputPass1.className = "input_p"
    inputPass1.type = "password"
    inputPass1.id = "passIns1"
    inputPass1.name = "password"
    div5.appendChild(inputPass1);

    let div6 = document.createElement("div");
    div6.className = "input_container";
    article.appendChild(div6);

    let btnInscrip = document.createElement("p");
    btnInscrip.className = "btn_in";
    btnInscrip.id = "inscription";
    btnInscrip.innerText = "Registration";
    div6.appendChild(btnInscrip);

    let div7 = document.createElement("div");
    div7.className = "input_container";
    article.appendChild(div7);

    let btnBack = document.createElement("p");
    btnBack.className = "btn_in";
    btnBack.id = "back";
    btnBack.innerText = "Cancel";
    div6.appendChild(btnBack);

    displayConnexionBack()
})
}

function boutonConnexion() {
    
    let boutonConnexion = document.getElementById("submit")

    boutonConnexion.addEventListener("click", function () {
        document.location.href = "/frontend/index.html";
    })
}
function displayConnexionBack() {
    
    let back = document.getElementById("back")
    back.addEventListener("click", function () {
    
    let articleDelete = document.getElementById("inscription")
    articleDelete.remove()

    displayConnexion()
    })
}