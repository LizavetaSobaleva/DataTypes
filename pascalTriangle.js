function pascalTriangle(numRows) {
    let triangle = new Array(numRows)
    
    for (let i = 0; i < triangle.length; i++) {
        triangle[i] = new Array(i+1).fill(1)
        if (i > 1) {
            for (let j = 1; j < triangle[i].length-1; j++){
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
            }
        }
    }
    return triangle
}

console.log(pascalTriangle(5))
