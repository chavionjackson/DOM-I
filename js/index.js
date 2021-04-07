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

// Example: Update the img src for the logo
//Updated all images src also added shorthand
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//let logo = document.getElementById('logo-img').setAttribute('src', siteContent['nav']['img-src']);
//let logo = document.getElementById('logo-img').src = 'img/logo.png';

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
//let ctaImg = document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']);
//let ctaImg = document.getElementById('cta-img').src = 'img/header-img.png';

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
//let middleImg = document.getElementById("middle-img").src = 'img/mid-page-accent.jpg';
//let middleImg = document.getElementById('middle-img').src = 'img/mid-page-accent.jpg';

//Content updated
let links = document.getElementsByTagName('a');
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];
//links[0].textContent = 'Services';
//links[1].textContent = 'Product';
//links[2].textContent = 'Vision';
//links[3].textContent = 'Features';
//links[4].textContent = 'About';
//links[5].textContent = 'Contact';

let mainHead = document.getElementsByTagName('h1');
mainHead[0].textContent = siteContent['cta']['h1'];
//mainHead[0].textContent = 'DOM Is Awesome';
mainHead[0].innerHTML = 'DOM<br> Is<br> Awesome';

let clicker = document.getElementsByTagName('button');
clicker[0].textContent = siteContent['cta']['button'];
//clicker[0].textContent = 'Get Started';

let smallHeaders = document.getElementsByTagName('h4');
smallHeaders[0].textContent = siteContent['main-content']['features-h4'];
smallHeaders[1].textContent = siteContent['main-content']['about-h4'];
smallHeaders[2].textContent = siteContent['main-content']['services-h4'];
smallHeaders[3].textContent = siteContent['main-content']['product-h4'];
smallHeaders[4].textContent = siteContent['main-content']['vision-h4'];
smallHeaders[5].textContent = siteContent['contact']['contact-h4'];

let paragraphs = document.getElementsByTagName('p');
paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];
paragraphs[5].textContent = siteContent['contact']['address'];
paragraphs[5].innerHTML = '123 Way 456 Street<br> Somewhere, USA';
paragraphs[6].textContent = siteContent['contact']['phone'];
paragraphs[7].textContent = siteContent['contact']['email'];
paragraphs[8].textContent = siteContent['footer']['copyright'];

//Changed nav to green
let navColor = document.querySelectorAll('a');
navColor.forEach(link => link.style.color = 'green');

//Created two new navs
let first = document.createElement('a');
let last = document.createElement('a');
let navLinks = document.querySelector('nav');

first.textContent = 'Welcome';
last.textContent = 'Bye';

first.style.color = 'green';
last.style.color = 'green';

navLinks.append(last);
navLinks.prepend(first);