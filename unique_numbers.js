arr=[1,2,3,1,4,5,6,6]


// write a code to print the unique numbers 

let obj={}
for(let each of arr){
  if(obj[each]){
    obj[each]=obj[each]+1 
  }else{
    obj[each]=1
  }
}
list_of_unique_numbers=[]
count_of_unique_numbers=0
for(let key in obj){
  if(obj[key]==1){
    count_of_unique_numbers+=1
    list_of_unique_numbers.push(key)
  }
}
console.log(count_of_unique_numbers)
console.log(list_of_unique_numbers)
