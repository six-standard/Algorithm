const n = parseInt(require("fs").readFileSync("/dev/stdin").toString().trim());
for (let i = 0; i < n; i++) {
  console.log(` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @     `);
}