var fs =require('fs');



fs.readdirSync('./compare/1/').forEach(function(ele){
    var array=fs.readFileSync('./compare/1/'+ele,'utf8');
      
    
    fs.readdirSync('./compare/2/').forEach(function(ele2) {
            
            var array2=fs.readFileSync('./compare/2/'+ele2,'utf8');
            
            if (array.trim()==array2.trim()){
                
                
               if(fs.existsSync('./compare/1/'+ele)==true) {
                   
                 fs.unlinkSync('./compare/1/'+ele);
                 
               }

               if(fs.existsSync('./compare/2/'+ele2)==true) {
               fs.unlinkSync('./compare/2/'+ele2);
            }


            }
            
            
            
         } 
         )
        }
        )


        function deleteBlank(path) {
         if( fs.existsSync(path) ) {
             fs.readdirSync(path).forEach(function(file) {
                 var curPath = path + "/" + file;
                 var something=fs.readFileSync(curPath,"utf8");
                 if(something.trim()=="") { 
                 
                     fs.unlinkSync(curPath);
                 }
             });
         }
     };


 deleteBlank('./compare/1/');

deleteBlank('./compare/2/');
