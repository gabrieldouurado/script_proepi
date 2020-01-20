// JavaScript Document
function showImg() {
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");

console.warn(img)

$('.myImg').click(function(){

    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
    
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}

function loadCSS(url) {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://cdn.jsdelivr.net/gh/gabrieldouurado/script_proepi/style_v2.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
  
}

function loadDIV(){
  var Docu = document.body;

  var InsertDIV = document.createElement('div');
  InsertDIV.setAttribute('id', "myModal");
  InsertDIV.setAttribute('class', "modal");

  var InsertSPAN = document.createElement('span');
  InsertSPAN.setAttribute('class', "close");
  InsertSPAN.setAttribute('onclick', "document.getElementById("myModal").style.display="none"");
  var contSPAN = document.createTextNode("&times;");
  InsertSPAN.appendChild(contSPAN);

  var InsertIMG = document.createElement('img');
  InsertIMG.setAttribute('id', "modal-content");
  InsertIMG.setAttribute('class', "img01");

  Docu.appendChild(InsertDIV);
  InsertDIV.appendChild(InsertSPAN);
  InsertDIV.appendChild(InsertIMG);
}

 loadDIV()
 loadCSS(URL)


 
