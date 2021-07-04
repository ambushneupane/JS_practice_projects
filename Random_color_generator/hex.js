const hex= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color = document.querySelector(".color-name");

btn.addEventListener("click",() =>{
    let hex_color='#';
    for (let i=0; i<6;i++){
        hex_color +=hex[get_rand_num()];
    }

    color.textContent=hex_color;
    document.body.style.backgroundColor= hex_color;

})

get_rand_num=() => {
    return Math.floor(Math.random()*hex.length);
}