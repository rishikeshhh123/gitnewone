console.log('person1');
console.log('person2');
const preMovie=async()=>{

const promiseWife=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('ticket'),3000);
});
const getPopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
const addButter=new Promise((resolve,reject)=>resolve(`butter`));
const getcolddrinks=new Promise((resolve,reject)=>resolve(`colddrinks`));


let ticket=await promiseWife;
console.log(`wife:i have ${ticket}`);

let popcorn=await getPopcorn;
console.log(`husband-i get ${popcorn}`);

let butter=await addButter;
console.log(`husband:i have ${butter}`);
let t=await getcolddrinks;
console.log(`wife:i want ${t}`)

return ticket;
}
preMovie().then((m)=>console.log(`person3:${m}`));
console.log('person3');
console.log('person4');