let count =0; 

const value= document.querySelector('#value');
const btns= document.querySelectorAll(".btn");
// console.log(btns);

btns.forEach((button_list)=>{
    // console.log(button_list);
    button_list.addEventListener("click", (e) =>{
        // console.log(e);
       const styles= e.currentTarget.classList;
       if (styles.contains('decrease')){
            count --;
       }
       else if(styles.contains('increase')){
           count ++;
       }
       else if(styles.contains('nothing')){
           value.textContent="Nothing";
           return;
       }
       else{
            count=0;
       }
       if(count>0){
           value.style.color="green"
       }
       if(count<0){
        value.style.color="red"
       }
       if(count===0){
        value.style.color="#222"
       }

       value.textContent= count;
    });
});



