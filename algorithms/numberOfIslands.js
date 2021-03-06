 let numIslands =  grid => {
     if(grid == null || grid.length == 0) {
         return 0
     }

     let numIslands = 0;

     // traverse entire matrix

     for(let i = 0; i < grid.length; i++) {
         for(j = 0; j < grid[i].length; j++) {
             if(grid[i][j] == '1') {
                numIslands += dfs(grid,i,j)
             }
         }
     }

     return numIslands
 }

 let dfs = (grid,i,j) => {
     if(i < 0 || i >= grid.length || j < 0 || j > grid[i].length || grid[i][j] == '0') {
        return 0;
     } else {
         // sink current island
         grid[i][j] = '0';

         //traverse grid
         dfs(grid, i+ 1, j)
         dfs(grid, i-1, j)
         dfs(grid, i, j+1)
         dfs(grid, i, j-1)

         // account for original island
         return 1;
     }
 }

 grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
 ]
 console.log(numIslands(grid))