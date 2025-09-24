let name="hello"
let shuffle_name="olelhk"

let obj1={} 
let obj2={}
isAnagram=true

function is_anagram(name,shuffle_name){
  if(name.length!=shuffle_name.length){
  return false
}
for(let ch of name){
  if(obj1[ch]){
    obj1[ch]=obj1[ch]+1
  }else{
    obj1[ch]=1
  }
}
for(let ch of shuffle_name){
  if(obj2[ch]){
    obj2[ch]=obj2[ch]+1
  }else{
    obj2[ch]=1
  }
}



for(let each in obj1){
  if(obj1[each]!=obj2[each]){
   isAnagram=false
   break
  }
}
return isAnagram
}

if(is_anagram(name,shuffle_name)){
  console.log("this is an anagram")
}else{
  console.log("this is not an anagram")
}
