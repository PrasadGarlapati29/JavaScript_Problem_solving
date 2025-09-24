for(let i=0;i<8;i++){
  
  stars=""
  for(let k=0;k<8-i;k++){
    stars+="  "
  }
  for(let j=0;j<1+i;j++){
    stars+=" *"
  }
  console.log(stars)
}
