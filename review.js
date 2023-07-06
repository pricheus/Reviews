//local reviews
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developper",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I am baby meggings twee health goth  +1. Bicycle rights,tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "goat  +1. Bicycle rights,tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const random = document.querySelector(".btn_randomChoice");
const authorFace = document.querySelector(".authorFace");
const authorName = document.querySelector(".authorName");
const authorRole = document.querySelector(".authorRole");
const authorDesc = document.querySelector(".authorResume");
//1-render the first author dynamically
let value = 0;
window.addEventListener("DOMContentLoaded", Author(value));

function Author(num) {
  authorFace.src = reviews[num].img;
  authorName.textContent = reviews[num].name;
  authorRole.textContent = reviews[num].job;
  authorDesc.textContent = reviews[num].text;
}

//2- btns functionalities
function randomNumber() {
  return Math.floor(Math.random() * reviews.length);
}

next.onclick = function () {
  value++;
  if (value > reviews.length - 1) {
    value = 0;
  }
  Author(value);
};

prev.onclick = function () {
  value--;
  if (value < 0) {
    value = reviews.length - 1;
  }
  Author(value);
};

random.onclick = function () {
  Author(randomNumber());
};
