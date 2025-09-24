function findTranspose(matrix){
    rows=matrix.length;
    cols=matrix[0].length;
    let result=[]
    for (let j=0;j<cols;j++){
        let newArray=[]
        for (let i=0;i<rows;i++){
            newArray.push(matrix[i][j])
        }
        result.push(newArray)
    }
    return result
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

ans=findTranspose(matrix)
console.log(ans)
