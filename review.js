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

const buttonSurprise = document.getElementsByClassName('buttonSurpriseME')[0];
const buttonPrev = document.getElementsByClassName('buttonPrev')[0];
const buttonNext = document.getElementsByClassName('buttonNext')[0];

const image = document.getElementById('authorFace');
const author = document.getElementById('author');
const role= document.getElementById('authorRole');
const resume =  document.getElementById('authorResume');

let arg = 0;
const item = reviews[arg];
//object targets
    function changeState(arg){
    const item = reviews[arg]
    image.src = item.img;
    author.textContent =item.name ;
    role.textContent = item.job;
    resume.textContent = item.text;
    };


    window.addEventListener('DOMContentLoaded', function(){
    
        image.src = item.img;
        author.textContent =item.name ;
        role.textContent = item.job;
        resume.textContent = item.text;
    });

    buttonNext.addEventListener('click', function(){
        arg++;
        if( arg > reviews.length - 1){
            arg = 0
        };
        changeState(arg)
    });

    buttonPrev.addEventListener('click', function(){
        arg--;
        if( arg < 0){
            arg = reviews.length - 1
        };
        changeState(arg)
    });

    buttonSurprise.addEventListener('click', function(){
        const randomNumber = Math.floor(Math.random() * reviews.length);
        changeState(randomNumber);
    });


