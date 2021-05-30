// var temperature = prompt("how much is temperature")
// var report = 'blank'

// if (temperature>=80){
//     report = "very hot"
// }
// else if(temperature<=80 && temperature>=50){
//     report = "nice"
// }
// else if(temperature<=50 && temperature>=35){
//     report = "its cool outside"
// }
// else if(temperature<=35){
//     report = "its freezing"
// }
// console.log(report)
// var x = 2
// while(x<100){
//     console.log(x)
//     x = x+2;
// }
// for(i=2;i<100;i+=2){
//     console.log(i)
// }
// for(i=1;i<25;i+=2)
//     console.log(i)
// for(i=0;i<100;i++){
//     console.log("Hello!")
// }
// count=0;
// while(count<100){
//     count++;
//     console.log("hello")
// }
// function hello(){
//     console.log("hello world")
// }
// function hello1(name){
//     console.log("hello" + name)
// }
// function addnum(n1,n2){
//     console.log(n1+n2)
// }
// function formal1(name = "siva",title="sir"){
//     return(title+name)
// }
// var name1 = prompt("hello ,type your first name")
// var name2 = prompt("type your last name")
// var age = prompt("how old are you?")
// var height = prompt("how tall are you?")
// var pet = prompt("type your pet name")
// alert("Thank you")
// // var p1 = pet.charAt(pet.length-1)

// if (name1[0] == name2[0]){
    
//     if(age>=20 && age<=30){
        
//         if(height>=170){
            
//             if(pet[pet.length-1] == "y"){
//                 console.log("welcome comrade,your code is cobra!")
//             }
//                 else{
//                     console.log("sorry")
//                 }
            
                
                
           
            
//         }
//             else{
//                 console.log("sorry")
//             }

//     }
//         else{
//             console.log("sorry")
//         }


// }
//     else{
//         console.log("sorry")
//     }

// function addnum(x,y,z){
//     if(x == 13){
//         return 0}
//     if(y == 13){
//         return x}
//     if(z == 13){
//         return x+y
//     }
//     return x+y+z
// }
// var welcome = prompt("Welcome,do you want to continue the roster web app?yes/no")
// if (welcome == "no"){
//     alert("Thank you,refresh again!")
// }


// if (welcome == "yes"){
//     arr = []
//     while (true){
//         var data = prompt("choose an option:add,remove,display,quit")
//         if (data == "add"){
//             var data1 = prompt("what would you like to add?")
//             arr.push(data1)
//             console.log(arr)
//         }
//         if (data == "remove"){
//             var data2 = prompt("what would you like to remove?")
//             const index = arr.indexOf(data2)
//             arr.splice(index,1)
//             console.log(arr)
//         }
//         if (data == "display"){
//             console.log(arr)

//         }
//         if (data == "quit"){
//             alert("Thank you")
//             break
            
            
//         }
//     }
// }
// const numbers (a,b){
//     if (a == 100 ||b == 100 ||(a+b) == 100){
//         console.log("true")

//     }
//     else{
//         console.log("false")
//     }

// }
// var headOne = document.querySelector('#one')
// var headTwo = document.querySelector('#two')
// headOne.addEventListener('mouseover',function(){
//     headOne.textContent = "mouse hovered"
//     headOne.style.color = "red"
// })

// headOne.addEventListener('mouseout',function(){
//     headOne.textContent = "header"
//     headOne.style.color = "red"
// })
// headTwo.addEventListener('click',function(){
//     headTwo.textContent = "hello"
//     headTwo.style.color = "blue"
// })

// headTwo.addEventListener('dblclick',function(){
//     headTwo.textContent = "i have been double clicked"
//     headTwo.style.color = "blue"
// })
$(document).ready(function(){
    $('td').click(function(){
        var value = $(this).text()
        if (value == 'X'){
            $(this).text("0")
        }
        else if(value == "0"){
            $(this).text("")
        }
        else{
            $(this).text("X")
        }
    })
})
$('button').on("click",function(){
    $('td').empty()
})