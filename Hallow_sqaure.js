let top=1 
let bottom=12 
let left=1 
let right=12
let n=12
for(let i=0;i<n;i++){
  
  stars=""
 
  for(let j=0;j<n;j++){
    if(i==0){
      if(top>=10){
         stars+=top+" "
      }else{
         stars+=top+"  "
      }
     
      top+=1
    }else if(i==n-1){
      if(bottom>=10){
        stars+=bottom+" "
      }else{
        stars+=bottom+"  "
      }
      
      bottom-=1
    }else if(j==0){
      if(left==10){
         stars+=left+" "
      }else{
         stars+=left+"  "
      }
      left+=1
    }else if(j==n-1){
      
      
        stars+=right+"  "
    
      right-=1
    }else{
      stars+="   "
    }
  }
  console.log(stars)
}
