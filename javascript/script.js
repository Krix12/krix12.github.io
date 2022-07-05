
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
    });
  
}

function emoji(item) {
  const content = item.innerHTML.split(" ")
 item.innerHTML = "✅ " + content[1];
 item.addEventListener("mouseout", function() {
  item.innerHTML = content.join(" ");
 })
 return
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




  

  