let btn = document.querySelector("#btn")
let fillAccountName=document.querySelector("#acName")
let input1=document.querySelector("#input1")
let input2=document.querySelector("#input2")
let input3=document.querySelector("#input3")
let input4=document.querySelector("#input4")
let input5=document.querySelector("#input5")
let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")



let user=null;

function Account(name){
        
    this.name=name;
    this.accountAmount=0;
    this.accountNumber=function(){
        let accnt= "GR"+Math.floor(Math.random()*1000000);
        return accnt;
    }
}


const NewAccount=(name1)=>{
   
     user=new Account(name1)
    console.log(user)
    return user
}


const GetName=()=>{
    let name=fillAccountName.value
    let letters = /^[A-Za-z]+$/;
    if(name.match(letters) && name.length>0){
        return name
    }else{
        alert("please type a name")
    }
}


function Create(){


   NewAccount(GetName());
   input1.setAttribute("placeholder",user.name)
   input2.setAttribute("placeholder",user.accountNumber())
   input5.setAttribute("placeholder",user.accountAmount)
    
}


btn.addEventListener("click",Create)


function AddAmount(){
  
  let deposit=input3.value;
  if(deposit>0){
    user.accountAmount= Number(user.accountAmount)+ Number(input3.value)
    input3.value=""
    input5.value=user.accountAmount
  }else{
      alert("Please type deposit amount")
      input3.value=""
  }
  
}



btn1.addEventListener("click",AddAmount)

function DeleteAmount(){
    
    let withdraw=input4.value;
    console.log(withdraw)
    if(withdraw>0 ){
       
        if( Number(user.accountAmount)- Number(input4.value)>=0){
            user.accountAmount= Number(user.accountAmount)- Number(input4.value)
            input4.value=""
            input5.value=user.accountAmount
        }else{
            alert("Please enter amount less than total account")
            input4.value=""
        }


    
    }else{
        alert("Please type deposit amount")
        input4.value=""
    }



}
  


btn2.addEventListener("click",DeleteAmount)


