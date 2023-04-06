//local reviews
const reviews = [
    {
        id:1,
        name:"susan smith",
        job:"web developper",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
        "I am baby meggings twee health goth  +1. Bicycle rights,tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id:2,
        name:"anna johnson",
        job:"web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id:3,
        name:"peter jones",
        job:"intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
        "I am baby meggings twee health goth  +1. Bicycle rights,tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",    
    },
    {
        id:4,
        name:"bill anderson",
        job:"the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    },
];

//Interactive elements
const authorFace = document.getElementById('authorFace');
const authorName = document.getElementById('authorName');
const authorRole = document.getElementById('authorRole');
const authorDescription = document.getElementById('authorDescription');

const prevButton = document.getElementById('buttonLeft');
const nextButton = document.getElementById('buttonRight');
const surpriseMe = document.getElementById('supriseME');

//eventListeners
window.addEventListener('DOMContentLoaded', function(){
    authorFace.src = reviews[0].img;
    authorName.textContent = reviews[0].name;
    authorRole.textContent = reviews[0].job;
    authorDescription.textContent = reviews[0].text
});

let  value = 0;
function changePerson(){
    authorFace.src = reviews[value].img;
    authorName.textContent = reviews[value].name;
    authorRole.textContent = reviews[value].job;
    authorDescription.textContent = reviews[value].text
};

function randomNumber (){
    return Math.floor(Math.random() * reviews.length)
} ;


prevButton.onclick = function(){
    value--;
    if(value < 0){
        value = reviews.length - 1;
    }
    changePerson();
};

nextButton.onclick = function(){
    value++;
    if(value > reviews.length - 1){
        value = 0;
    }
    changePerson();
};

surpriseMe.onclick = function(){
    authorFace.src = reviews[randomNumber()].img;
    authorName.textContent = reviews[randomNumber()].name;
    authorRole.textContent = reviews[randomNumber()].job;
    authorDescription.textContent = reviews[randomNumber()].text
}
