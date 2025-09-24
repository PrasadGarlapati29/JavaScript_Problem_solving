//Right angled Trinagle

// for(let i=0;i<8;i++){
  
//   stars=""
//   for(let k=0;k<8-i;k++){
//     stars+="  "
//   }
//   for(let j=0;j<1+i;j++){
//     stars+=" *"
//   }
//   console.log(stars)
// }



//Hollow sqaure
// let n=12
// let count=1
// for(let i=0;i<n;i++){
//   stars=""
//   for(let j=0;j<n;j++){
//     if(i==0 || i==n-1 || j==0 || j==n-1){
      
//        if(count<10){
//          stars+=count+"  "
//        }
//        else{
         
//       stars+=count+" "
//        }
      
//       count+=1
//     }else{
//       if(count>=10){
//         stars+="   "
//       }else{
//         stars+=" "
//       }
      
//     }
//   }
//   console.log(stars)
// }

// step1: number of rows and cols enni vunnai 

// let str="hellozohocorporation"
// let n=str.length
// let index1=0
// let index2=n-1
// for(let i=0;i<str.length;i++){
//   let stars=""
//   for(let j=0;j<str.length;j++){
//     if(i==j){
//       stars+=str[index1]+" "
//       index1+=1 // 
//       if(i==j && i+j==n-1){
//         index2-=1
//       }
      
//     }else if(i+j==n-1){
//       stars+=str[index2]+" "
//       index2-=1
//     }else{
//       stars+="  "
//     }
    
//   }
//   console.log(stars)
// }
