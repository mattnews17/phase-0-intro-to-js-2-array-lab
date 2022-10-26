var cats =['Milo', 'Otis', 'Garfield']
const destructivelyAppendCat= (name)=>
{
    cats.push(name);
    return cats;
}
const destructivelyPrependCat =(name)=>{
    cats.unshift(name);
    return cats;
}
const destructivelyRemoveLastCat = ()=>
{
    cats.pop();
    return cats;
}

 const destructivelyRemoveFirstCat=()=>{
     cats.shift();
     return cats;
 }
 const appendCat=(name)=>{
     var new_array = cats.slice();
     new_array.push(name);
     return new_array;
 }
 const prependCat=(name)=>{
     var new_array = cats.slice();
     new_array.unshift(name);
     return new_array;
 }
const removeLastCat=()=>{
   var new_array =cats.slice();
   new_array.pop();
   return new_array; 
}
const removeFirstCat =()=>{
    var new_array = cats.slice(1);
    return new_array;
}