fetch('./data.json').then((response)=>{
    console.log('resolved',response)
const data = response.json();
}).catch((err)=>{
    console.log('rejected',err)
})