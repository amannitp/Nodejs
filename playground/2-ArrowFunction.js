

// const square=function(x){
//     return x*x;
// }


// Arrow function 

// const square=(x)=>{
//     return x*x;
// }

// const square=(x)=> x*x;

// const square=x=>x*x

// console.log(square(3))

// const events ={
//     name:"Birthday Party",
//     guestList:["AMan","amit","Ajay"],
//     printGuestList:function(){
//         console.log(" Attending "+ this.name)
//     }
// }
//  const events ={
//         name:"Birthday Party",
//         guestList:["AMan","amit","Ajay"],
//         printGuestList:()=>{
//             console.log(" Attending "+ this.name)  // this.name give undefined value
//         }
//     }

// const events ={
//     name:"Birthday Party",
//     guestList:["AMan","amit","Ajay"],
//     printGuestList(){
//         console.log(" Attending "+ this.name)  // this.name give undefined value
//     }
// }

// const events ={
//     name:"Birthday Party",
//     guestList:["AMan","amit","Ajay"],
//     printGuestList(){
//         this.guestList.forEach(function(guest){
//             console.log(guest +" is attending "+this.name) // AMan is attending undefined
//         })  // this.name give undefined value
//     }
// }
// const events ={
//     name:"Birthday Party",
//     guestList:["AMan","amit","Ajay"],
//     printGuestList(){
//         that=this;
//         this.guestList.forEach(function(guest){
//             console.log(guest +" is attending "+that.name) // AMan is attending Birthday Party
//         })  // this.name give undefined value
//     }
// }
const events ={
        name:"Birthday Party",
        guestList:["AMan","amit","Ajay"],
        printGuestList(){
            
           
            this.guestList.forEach((guest)=>{
                
                console.log(guest +" is attending "+this.name) // AMan is attending Birthday Party
            })  // this.name give undefined value
        }
    }


events.printGuestList()