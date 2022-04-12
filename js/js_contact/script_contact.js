delete_contact_true()


function delete_contact_true() {

    let checkbox = document.getElementById('cbx')
    , hidden = document.getElementById('delterms');

  checkbox.addEventListener('change', function() {
    
    let dels = document.querySelectorAll(".text_delete_contact");
    for (const del of dels) {
    
    if (checkbox.checked == true) {
        
        del.innerHTML = "Supprimer";
    }else if (hidden.checked == false) {
        del.innerHTML = ""
    }
}
})
    

}