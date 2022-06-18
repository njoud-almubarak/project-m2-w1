let characters=[
    {"name":"njoud",
    "height":160,
    "gender":"m",
    "mass":120,
    "eyecolor":"brown"},
    
    {"name":"sara",
    "height":170,
    "gender":"f",
    "mass":50,
    "eyecolor":"black"}  
    ]


//MAP name and height properties..
console.log("-----------------------------");
let namesAndHeight=characters.map(myfunctin1);
console.log(namesAndHeight);
function myfunctin1(item1){
return [item1.name,item1.height];}


//MAP all name..
console.log("-----------------------------");
let names=characters.map(myfunctin2);
console.log(names);
function myfunctin2(item2){
return [item2.name];}


//REDUCE total mass of all characters ..
console.log("-----------------------------");
let total=characters.reduce(myfuction3,0);
console.log(total);
function myfuction3(mass1,item3){
return mass1+item3.mass;}


//Get total number of characters in all the character names 1
console.log("-----------------------------");
let totalchar=0;
for(let i=0;i<characters.length;i++){
    let string = characters[i].name;
    let strlength=string.length;
     totalchar=totalchar+strlength;}
     console.log(totalchar);


//Get total number of characters in all the character names 2..
console.log("-----------------------------");
     for(let i=0;i<characters.length;i++){
        let string=characters[i].name;
     console.log(count1(string));
     function count1 (string) {  
        var count = {};
        string.split('').forEach(function(s) {
           count[s] ? count[s]++ : count[s] = 1;
        });
        return count;
      }
    }



//FILTER characters with mass greater than 100..
console.log("-----------------------------");
let mass2 = characters.filter(checkmass);
console.log(mass2);
function checkmass(item4) {
  return item4.mass > 100;
}


//FILTER all female characters
console.log("-----------------------------");
let gender1 = characters.filter(checkgender);
console.log(gender1)
function checkgender(item5) {
  return item5.gender === "f";}



//SORT by name
console.log("-----------------------------");
let charbyname=characters.sort((a,b)=>b.name.localeCompare(a.name));
console.log(charbyname);


//Sort by gender
console.log("-----------------------------");
let charbygender=characters.sort((a,b)=>a.gender.localeCompare(b.gender));
console.log(charbygender);



//Every Does every character have blue eyes?
console.log("-----------------------------");
let ifeyes=characters.every(iffunction3);
console.log(ifeyes);

function iffunction3(item8){
   return item8.eyecolor ==="blue" ;} 



//Every Is every character male?
console.log("-----------------------------");
let ifmale=characters.every(iffunction3);
console.log(ifmale);

function iffunction3(item8){
   return item8.gender ==="m" ;} 


//Some Is there at least one male character?
console.log("-----------------------------");
let iftherismale=characters.some(iffunction4);
console.log(iftherismale);

function iffunction4(item8){
   return item8.gender ==="m" ;} 


//Some Is there at least one character that has mass less than 50?
console.log("-----------------------------");
let ifmassless=characters.some(iffunction5);
console.log(ifmassless);

function iffunction5(item8){
   return item8.mass <50 ;} 

//The pokemon API
console.log("-----------------------------");

async function getimage(){
   let data = await fetch("https://breakingbadapi.com/api/characters")
   .then((res)=>res.json())
   .then((d)=>d);
   let continer=document.querySelector("#cont");
   let img=document.createElement("img");
   img.src=data[1].img;
   img.alt="charecter img";
   continer.appendChild(img);}


   let btn= document.querySelector("#getimg");
   btn.addEventListener("click",getimage);





