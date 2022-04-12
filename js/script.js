display_party()
profilModifMenu()


function display_party() {

  let card_article_last = document.querySelector(".card_article_last")

  card_article_last.addEventListener("click", function () {

    

  let card_article = document.createElement("article");
  card_article.className = "card_article";
  document.querySelector(".article_party").appendChild(card_article);

  let test4 = document.querySelectorAll(".card_article")

  let img_container = document.createElement("div");
  img_container.className = "img_container";
  card_article.appendChild(img_container);

  let img_card = document.createElement("img")
  img_card.className = "card_image";
  img_card.src = "/picture/logo/logo.png";
  img_card.alt = "";
  img_container.appendChild(img_card);

  let text_card = document.createElement("div")
  text_card.className = "text_card";
  card_article.appendChild(text_card);

  let text_card_content = document.createElement("h3")
  text_card_content.className = "text_card_content cursor_pointer_copytext";
  text_card_content.title = "#copier";
  text_card_content.innerText = "#Event_V" + test4.length;
  text_card.appendChild(text_card_content);

  let text_card_content_nd2 = document.createElement("p");
  text_card_content_nd2.className = "text_card_content_nd2 cursor_pointer_copytext";
  text_card_content_nd2.innerText = "Quitter";
  text_card.appendChild(text_card_content_nd2);

  

  console.log()

  text_card_content_nd2.addEventListener("click", function () {
    card_article.remove()
  })
})
}


function profilModifMenu() {

    let profil_modify = document.getElementById('profil_modify')
    

    profil_modify.addEventListener('click', function() {


    let article = document.createElement("article");
    article.id = "menu";
    article.className = "white description_container_modif profilModif"
    document.getElementById("profilModif_section").appendChild(article)

    let description_container_modifn2 = document.createElement("div");
    description_container_modifn2.className = "description_container_modifn2";
    article.appendChild(description_container_modifn2)

    let articleTitle = document.createElement("h3");
      articleTitle.className = "cursor_pointer title_section";
      articleTitle.innerText = "*Sélectionner";
      description_container_modifn2.appendChild(articleTitle);
 
    let menu1 = document.createElement("p");
    menu1.className = "cursor_pointer";
    menu1.innerText = "1.Modifier la photo de profil.";
    description_container_modifn2.appendChild(menu1)
    
    
    let menu2 = document.createElement("p");
    menu2.className = "cursor_pointer";
    menu2.innerText = "2.Modifier l'image de couverture.";
    description_container_modifn2.appendChild(menu2)
    
    
    let menu3 = document.createElement("p");
    menu3.className = "cursor_pointer description_btn";
    menu3.innerText = "3.Modifier la description.";
    description_container_modifn2.appendChild(menu3)

    let valide = document.createElement("div");
    valide.className = "valide white";
    description_container_modifn2.appendChild(valide);

    let noValide = document.createElement("p");
    noValide.className = "deleteBtn";
    noValide.innerText = "Annuler";
    valide.appendChild(noValide);
    
    closeMenu()
    descriptionModif()

  })

}

function descriptionModif() {

  let description_btns = document.querySelectorAll(".description_btn");


  description_btns.forEach((description_btn) => {description_btn.addEventListener('click', function() {

    let test = document.querySelector(".profilModif").remove()


    if (test == undefined) {
      let article = document.createElement("article");
      article.id = "profilModif";
      article.className = "white description_container_modif profilModif"
      document.getElementById("profilModif_section").appendChild(article)

      let description_container_modifn2 = document.createElement("div");
      description_container_modifn2.className = "description_container_modifn2";
      article.appendChild(description_container_modifn2)

      let articleTitle = document.createElement("h3");
      articleTitle.className = "title_section cursor_pointer_copytext";
      articleTitle.innerText = "*Modifier mon profil"
      description_container_modifn2.appendChild(articleTitle)

      let articleSubTitle = document.createElement("p");
      articleSubTitle.innerText = "Écrivez votre description :";
      description_container_modifn2.appendChild(articleSubTitle)

      let text = document.createElement("textarea");
      text.name = "descrip_input";
      text.id = "descrip_input";
      text.placeholder = "200 lettres";
      text.autocomplete = "on";
      text.maxLength = 200;
      description_container_modifn2.appendChild(text);

      let valide = document.createElement("div");
      valide.className = "valide white";
      description_container_modifn2.appendChild(valide)

      let articleValide = document.createElement("p");
      articleValide.innerText =" Valider";
      valide.appendChild(articleValide);

      let articleNoValide = document.createElement("p");
      articleNoValide.className = "deleteBtn";
      articleNoValide.innerText = " Annuler";
      valide.appendChild(articleNoValide);
      closeMenu()
    }

  })

    })

}

function closeMenu() {
  let test2 = document.querySelectorAll(".deleteBtn")

  test2.forEach((test3) => {test3.addEventListener("click", function () {
  document.querySelector(".profilModif").remove()
})})
}