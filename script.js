// Side Menu Section
var sideMenu=document.getElementById('sidemenu');

function openMenu(){
    // It will enable the Side Menu
    sideMenu.style.right="0";   
}

function closeMenu(){
    // It will disable the Side Menu
    sideMenu.style.right="-200px";
}


// About Section
var tabLinks=document.getElementsByClassName("tab-links");
var tabContents=document.getElementsByClassName("tab-contents");
function openTab(tabName){
    for (let tabLink  of tabLinks) {
        // Removing the Active Link Red Underline which is on Skills
        tabLink.classList.remove("active-link"); 
    }

    for (let tabContent  of tabContents) {
        // Removing the Active Tab Content which is in Skills
        tabContent.classList.remove("active-tab");
    }
    // It will display the Red Underline on the Active Link
    event.currentTarget.classList.add("active-link");
    // It will display the Content of the Active Tab
    document.getElementById(tabName).classList.add("active-tab");
}


// Contact Section
const scriptURL = 'https://script.google.com/macros/s/AKfycbxwQKtihzmtuH6Z41F9rAdfL0rjKq3CCwZjzmqAVOHLEe6Px5ybfrisRFYkViil3yfa/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})