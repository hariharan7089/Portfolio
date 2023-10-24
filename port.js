let item=document.getElementById("item");   
        function repeat(){

            if(window.innerWidth>=535){
                    document.getElementById("list1").style.display="none";
                    document.getElementById("name").innerHTML="HARIHARAN K";
                }
                else if(window.innerWidth<=535){
                    document.getElementById("name").innerHTML="PORTFOLIO";
       
                }
        }
            setInterval( repeat,1000);
           
            let i=1;
        item.addEventListener("click",()=>{
            if(i===1){
                
                document.getElementById("list1").style.display="block"
         
                return (i=0);
             
            }
            else{
                document.getElementById("list1").style.display="none"
                return (i=1);
            }
        })
           
           