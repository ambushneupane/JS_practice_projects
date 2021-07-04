const btn=document.getElementById("btn");
// const color = document.querySelector(".color");
color_name=document.querySelector(".color-name");





btn.addEventListener("click",function(){
    rand_red=rand_num_gen(0,255);
    // console.log(rand_red);
    rand_green=rand_num_gen(0,255);
    rand_blue=rand_num_gen(0,255);
    bg_color=`rgb(${rand_red},${rand_green},${rand_blue})`
    document.body.style.backgroundColor= bg_color;
    
    // console.log(display_color_name);
    color_name.innerText=bg_color;
    console.log(color_name);

})

function rand_num_gen(from, to){
    let  rand_num=Math.floor(Math.random()*to);

    if(from <= rand_num){
        return rand_num;
    }
    else{
        
        rand_num_gen(from,to)
        
    }
}