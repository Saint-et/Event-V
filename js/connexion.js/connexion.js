displayConnexion()



function displayConnexion() {
    let article = document.createElement("article");
    article.id = "connextion"
    document.getElementById("section_connextion").appendChild(article)

    let img = document.createElement("img");
    img.src = "/picture/logo/logo_transparent.png"
    img.alt = ""
    article.appendChild(img);

    let title = document.createElement("h1")
    title.className = "main_title white";
    title.innerText = "Bienvenue sur Event-V";
    article.appendChild(title);

    let descrip = document.createElement("p")
    descrip.className = "white para_p";
    descrip.innerText = "Ce site a été créer dans le but d'aidé à la gestion de vos évènements que ce soit dans une Entreprise, bureau, petit groupe, jeux...";
    article.appendChild(descrip);

    let titleN2 = document.createElement("h2")
    titleN2.className = "title_form white";
    titleN2.innerText = "Connecter vous";
    article.appendChild(titleN2);


    let div1 = document.createElement("div");
    div1.className = "input_container";
    article.appendChild(div1);

    let email = document.createElement("p");
    email.className = "white";
    email.innerText = "*Email";
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
    pass.innerText = "*Mot de passe (8 caractère minimum)";
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
    submit.value = "Connexion"
    div3.appendChild(submit);

    let textInscrip = document.createElement("p");
    textInscrip.className = "white para_p";
    textInscrip.innerText = "Vous ne possédez pas encore de compte ?";
    article.appendChild(textInscrip);

    let div4 = document.createElement("div");
    div4.className = "input_container";
    article.appendChild(div4);

    let btnInscrip = document.createElement("p");
    btnInscrip.className = "btn_in";
    btnInscrip.id = "inscription";
    btnInscrip.innerText = "*Inscription";
    div4.appendChild(btnInscrip);

    let descrip2 = document.createElement("p");
    descrip2.className = "white para_p";
    descrip2.innerText = "Ici vous pouvez retrouver des groupes spécialisés dans certains évènement Entreprise, bureau, petit groupe, jeux..., Créer et personnalisé votre profil en ajoutant votre description. Vous pouvez sélectionner une catégorie dans laquelle vous voulez être retrouver.";
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
    img.src = "/picture/logo/logo_transparent.png"
    img.alt = ""
    article.appendChild(img);

    let title = document.createElement("h1")
    title.className = "main_title white";
    title.innerText = "Inscription sur Event-V";
    article.appendChild(title);

    let div8 = document.createElement("div");
    div8.className = "input_container";
    article.appendChild(div8);

    let eventTag = document.createElement("p");
    eventTag.className = "white";
    eventTag.innerText = "*Event-tag";
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
    prenom.innerText = "*Prénom";
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
    nom.innerText = "*Nom";
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
    email.innerText = "*Email";
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
    pass.innerText = "*2 fois Mot de passe (8 caractère minimum)";
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
    btnInscrip.innerText = "Inscription";
    div6.appendChild(btnInscrip);

    let div7 = document.createElement("div");
    div7.className = "input_container";
    article.appendChild(div7);

    let btnBack = document.createElement("p");
    btnBack.className = "btn_in";
    btnBack.id = "back";
    btnBack.innerText = "Annuler";
    div6.appendChild(btnBack);

    displayConnexionBack()
})
}

function boutonConnexion() {
    
    let boutonConnexion = document.getElementById("submit")

    boutonConnexion.addEventListener("click", function () {
        document.location.href = "/index.html";
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