const reviews = [
    {
        id: 1,
        name: "Virat Kohli",
        img: "./img/vk.jpeg",
        job: "Cricketer",
        text: "India has given to the world many a great cricketer but perhaps none as ambitious as Virat Kohli. To meet his ambition, Kohli employed the technical assiduousness of Sachin Tendulkar and fitness that was in the league of top athletes in the world, not just cricketers. As a result, Kohli became the most consistent all-format accumulator of his time, making jaw-dropping chases look easy, and finding, in his own words, the safest possible way to score runs. Plenty of them.",

    },

    {
        id: 2,
        name: "Ab de Villiers",
        job: "Destroying Bowlers",
        img:"./img/abd.webp",
        text:
            "Some cricketers' rise to the top constitutes hours of perseverance and hardwork, and others' include, predominantly, an abundance of talent and natural ability. Abraham Benjamin de Villiers is that player you create in a computer game, who has both the attributes set to maximum, and then some.",
    },
    {
        id: 3,
        name: "Steven Smith",
        job: "Batsman",
        img:
            "./img/steven.jpg",
        text:
            "The best Test batsman at present, Steven Smith's career redemption is a story for the ages. Having made his name initially as a potential leg-spinner who could bat a bit, there was immense criticism, even among those in Australia over the quality of his selection during his early days in international cricket. However, they were made to eat humble pie as the enigmatic man from New South Wales turned things around in sensational fashion to feature among the best batsmen in the world.",
    },
    {
        id: 4,
        name: "Chris Gayle",
        job: "The boss",
        img:"./img/cg.jpg",
        text:
            "Twenty20 cricket seemingly picked Chris Gayle as its ambassador, for he scored the very first hundred in the format and now uncontestedly owns almost every record there is, including that of the most runs (now 10,000+), most hundreds, fastest hundred, and most fours and sixes"

    },
    {
        id: 5,
        name: "Mitchell Starc",
        job: "Bowler",
        img:"./img/ms.png",
        text:
            "Mitchell Starc – a name that strikes fear into the hearts of contemporary batsmen. It is hard to fathom that the tall, skinny lad from Sydney, who was once an aspiring wicketkeeper in junior cricket, would one day become the most menacing sight for the world's best batsmen.",
    },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    showPerson();

});

const showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})


randomBtn.addEventListener('click', () => {
    let rand_num = Math.floor(Math.random() * (reviews.length));
    // console.log(rand_num);
    currentItem = rand_num;
    showPerson();
})