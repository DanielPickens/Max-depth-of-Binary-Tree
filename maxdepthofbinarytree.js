const maxDepth = function(root) {
     if(root==null){
            return 0;
        }
        return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
    }


/*
Success
Details 
Runtime: 72 ms, faster than 96.67% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 41.8 MB, less than 43.44% of JavaScript online submissions for Maximum Depth of Binary Tree.
*/
