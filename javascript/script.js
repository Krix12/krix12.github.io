const menu = document.getElementsByClassName("contextmenu")[0];

/*window.addEventListener(
  'contextmenu',
  function (e) {
      e.preventDefault();
         let x = e.clientX;
         let y = e.clientY;
         menu.style.top = (y + "px");
         menu.style.left = (x + "px");
         menu.style.display = "block"

      
  },
  false,
);
window.addEventListener("click", function(e) {
menu.style.display = "none";
});*/

document.getElementById("contact-file").addEventListener("change", () => {

  document.getElementById("upload-text").innerHTML = document.getElementById("contact-file").files[0].name
  document.getElementById("upload-text").style.margin = 0;
})




function projectsAnimation(element) {
  const image =  element.getElementsByClassName("projects-img")[0]
  image.style.margin = "-10px 0 0 -10px"
 /* image.style.boxShadow = "inset 0 0 12px 12px white, inset 0 0 3px 2px white"
  image.style.background = "linear-gradient(45deg, #fc4570 0%, #f88935 100%);"
  image.style.padding = "18px"*/
  //element.style.border = "20px solid #181A21"
}

function projectsAnimationEnd(element) {
  const image =  element.getElementsByClassName("projects-img")[0]
  image.style.margin = "0"
  /*image.style.boxShadow = "none"
  image.style.background = "none"
  image.style.padding = "0"*/
  //element.style.border = "0"
}

/* THE CODE BELOW IS FROM https://alvarotrigo.com/blog/css-animations-scroll/ ↓↓ */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
/* ↑↑↑↑ */

let progress = document.getElementById("scrollbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}
console.log("Hello, how do you like my website?")
function start() {
  console.log("a")
  if(screen.width >= 900) {
    window.open("desktop.html", "_self")
  } else {
    window.open("mobile.html", "_self")
  }
}


async function getStatus() {
await fetch('https://corsanywhere.herokuapp.com/https://krixportfoliodiscordstatus.herokuapp.com/', {
    "method": "GET"
  })
  .then(response => { return response.text();})
    .then(responseData => {
    document.getElementById(responseData).style.display = "inherit";
    })

    .catch(err => {
    document.getElementById("offline").style.display = "inherit"
    console.log(err)
    });
  
}

function showgradient(item) {

  
}
function openURL(url, id) {
window.open(url, "_blank").focus();
document.getElementById(id).style.color = "red";
setTimeout(function a() { document.getElementById(id).style.color = "white"} , 1000)
return false;
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
  }

function openMenu() {
SlideElement.toggle(document.getElementById('menu-container'))
}

async function display() {
  document.querySelector(".about").scrollIntoView({
    behavior: "smooth"
  });
}

function hide() {
  SlideElement.up(document.getElementById('json'));
document.getElementById("arrow").style.display = "block";
document.getElementById("button-container").style.display = "grid"; document.getElementById("arrow2")
arrow2.style.display = "none";
}

var popup = document.getElementById("popup");

function showpopup() {
  popup.style.display = "inherit";
  popup.contentWindow.document.getElementById('close').addEventListener("click", hidepopup)
  
}

function hidepopup() {
  popup.style.display = "none";
}


function postEmail() {
var value = document.getElementById("email").value;
var filter = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

var data = JSON.stringify({
    "collection": "Emails",
    "database": "Main",
    "dataSource": "Cluster0",
  "document": {
        "email": value
  }
});
            
var config = {
    method: 'post',
    mode: 'no-cors',
    url: 'https://corsanywhere.herokuapp.com/https://data.mongodb-api.com/app/data-utglc/endpoint/data/beta/action/insertOne',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': "duQxIoE6i0UR62YV4DgvM8SJQLoxRqo7jLYgOeXUd26FzWErpesHEjSjLhbzisJC"
    },
    data : data
};
if (!filter.test(value)) {
document.getElementById("invalid").style.display = "inherit";
} else {
axios(config)
    .then(function (response) {
        if (response.status = 200) {
          document.getElementById("success").style.display = "inherit";
        }
    })
    .catch(function (error) {
    document.getElementById("error").style.display = "inherit";
    });
}
}


async function sendMessage() {
  const email = document.getElementById("contact-email").value
  const message = document.getElementById("contact-message").value
  if(email &&  message) {
    
  const options = {
    method: 'POST',
    url: 'https://corsanywhere.herokuapp.com/https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'cfad1ccf72msh9665e74ac552223p136089jsnc9817a84856d',
      'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
    },
    data: JSON.stringify({
        "personalizations":[{"to":[{"email":"kristjan.kocevar89@gmail.com"}],
        "subject":"New message from portfolio"}],
        "from":{"email":"messages@krix.is-a.dev"},
        "content":[{"type":"text/plain","value":`Email: ${email}\nMessage: ${message}`}]
    })



  };
  
  axios.request(options).then(function (response) {
      alert("Message successfully sent");
      document.getElementById("contact-email").value = null
      document.getElementById("contact-message").value = null
  }).catch(function (error) {
      console.log(error);
  });
} else {
  alert("Please fill out all fields")
}
}

async function getSpotify() {
  await fetch("https://krixspotifyplaying.herokuapp.com/get", {
    "method": "GET",
    "Content-Type": "application/json"

  })
  .then(response => { return response.text()})
  .then(responseData => {
    console.log(responseData)
  })
  .catch(err => {
    console.error(err)
  })
}


window.onload = async function () {
  getStatus();
  while(true) {
  var more = document.getElementById("more"); more.style.animation = "opacity1 3s 1 forwards"
await sleep(3000); 
 more.style.animation = "opacity2 3s 1 forwards"
await sleep(3000);
}
}

  var prev_handler = window.onload;
window.onload = async function () {
    if (prev_handler) {
        prev_handler();
    }
    while(true) {
            var arrow = document.getElementById("arrow");
arrow.style.animation = "arrowmove1 4s 1"
await sleep(3500);
arrow.style.animation = "arrowmove2 4s 1"
await sleep(4000);     
    }
};




  

  