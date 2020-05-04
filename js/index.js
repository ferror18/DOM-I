console.clear();
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Task 1
// Example: Update the img src for the logo
//header
let logo = document.getElementById("logo-img");
let myNav = document.body.firstElementChild.firstElementChild.firstElementChild;
myNav.children[0].innerHTML = siteContent.nav["nav-item-1"];
myNav.children[1].innerHTML = siteContent.nav["nav-item-2"];
myNav.children[2].innerHTML = siteContent.nav["nav-item-3"];
myNav.children[3].innerHTML = siteContent.nav["nav-item-4"];
myNav.children[4].innerHTML = siteContent.nav["nav-item-5"];
myNav.children[5].innerHTML = siteContent.nav["nav-item-6"];
myNav.parentElement.children[1].setAttribute('src', siteContent.nav["img-src"]);
//cta
let cta = document.body.firstElementChild.children[1];
let ctaImg = document.getElementById("cta-img");
// cta.children[1].innerHTML = siteContent.cta["h1"];
cta.children[0].children[0].innerHTML = siteContent.cta.h1;
cta.children[0].children[1].innerHTML = siteContent.cta.button;
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

// maincontent
let  midImg = document.getElementById("middle-img");
let maincontent = document.body.firstElementChild.children[2]
//    top content
let topcon = maincontent.firstElementChild;
topcon.children[0].children[0].innerHTML = siteContent["main-content"]["features-h4"];
topcon.children[0].children[1].innerHTML = siteContent["main-content"]["features-content"];
topcon.children[1].children[0].innerHTML = siteContent["main-content"]["about-h4"];
topcon.children[1].children[1].innerHTML = siteContent["main-content"]["about-content"];
//img
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// bottom content
let botcon = maincontent.children[2];
botcon.children[0].children[0].innerHTML = siteContent["main-content"]["services-h4"];
botcon.children[0].children[1].innerHTML = siteContent["main-content"]["services-content"];
botcon.children[1].children[0].innerHTML = siteContent["main-content"]["product-h4"];
botcon.children[1].children[1].innerHTML = siteContent["main-content"]["product-content"];
botcon.children[2].children[0].innerHTML = siteContent["main-content"]["vision-h4"];
botcon.children[2].children[1].innerHTML = siteContent["main-content"]["vision-content"];

// contact
let contact = document.body.firstElementChild.children[3];
contact.children[0].innerHTML = siteContent.contact["contact-h4"];
contact.children[1].innerHTML = siteContent.contact.address;
contact.children[2].innerHTML = siteContent.contact.phone;
contact.children[3].innerHTML = siteContent.contact.email;

//footer
let foo = document.body.firstElementChild.children[4];
foo.firstElementChild.innerHTML = siteContent.footer.copyright;
//Task 2

let atags = myNav.getElementsByTagName('a');
for (let index = 0; index < atags.length; index++) {
  atags[index].style.color = 'green';
  
}
let newItem = document.createElement('a');newItem.innerHTML = "I'm a new item.";newItem.style.color = 'green';
let otherNewItem = document.createElement('a');otherNewItem.innerHTML = "I'm another new item.";otherNewItem.style.color = 'green';
myNav.appendChild(newItem);
myNav.prepend(otherNewItem);