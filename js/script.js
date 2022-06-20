display_party()



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
  img_card.src = "/frontend/picture/logo/logo_transparent.png";
  img_card.alt = "";
  img_container.appendChild(img_card);

  let text_card = document.createElement("div")
  text_card.className = "text_card";
  card_article.appendChild(text_card);

  let text_card_content = document.createElement("h3")
  text_card_content.className = "white text_card_content cursor_pointer_copytext";
  text_card_content.title = "#copier";
  text_card_content.innerText = "#Event_V" + test4.length;
  text_card.appendChild(text_card_content);

  let text_card_content_nd2 = document.createElement("p");
  text_card_content_nd2.className = "text_card_content_nd2 cursor_pointer_copytext";
  text_card_content_nd2.innerText = "leave";
  text_card.appendChild(text_card_content_nd2);
})
}