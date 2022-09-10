const { text } = require("express");
const { container } = require("webpack");

const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

const logo = document.querySelector("#logo-img");
logo.src = siteContent.images["logo-img"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

const accentImg = document.querySelector("#middle-img");
accentImg.src = siteContent.images["accent-img"];

const topNav = document.querySelectorAll("nav a");
topNav.forEach((nav) => nav.classList.add("italic"));

const nav1 = document.querySelector("a");
nav1.textContent = "Services";

const nav2 = document.querySelector("a:nth-of-type(2)");
nav2.textContent = "Product";

const nav3 = document.querySelector("a:nth-of-type(3)");
nav3.textContent = "Vision";

const nav4 = document.querySelector("a:nth-of-type(4)");
nav4.textContent = "Features";

const nav5 = document.querySelector("a:nth-of-type(5)");
nav5.textContent = "About";

const nav6 = document.querySelector("a:nth-of-type(6)");
nav6.textContent = "Contact";

const hText = document.querySelector("h1");
hText.textContent = siteContent["h1"];

const btn = document.querySelector(".cta button");
btn.textContent = siteContent["button"];

const headingText = document.querySelectorAll(".text-content h4");

headingText[0].textContent = siteContent["main-content"]["features-h4"];
headingText[1].textContent = siteContent["main-content"]["about-h4"];
headingText[2].textContent = siteContent["main-content"]["services-h4"];
headingText[3].textContent = siteContent["main-content"]["product-h4"];
headingText[4].textContent = siteContent["main-content"]["vision-h4"];

const paragraphs = document.querySelectorAll(".text-content p");
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

const contact1 = document.querySelector(".contact h4");
contact1.textContent = siteContent["contact"]["contact-h4"];

const contact2 = document.querySelector(".contact p");
contact2.textContent = siteContent["contact"]["address"];
contact2.textContent = siteContent["contact"]["phone"];
contact2.textContent = siteContent["contact"]["email"];

const footer = document.querySelector("footer a");
footer.textContent = siteContent.footer.copyright;
footer.classList.add("bold");
