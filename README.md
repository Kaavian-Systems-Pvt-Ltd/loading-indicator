# generic loading indicator

### installation 
npm install --save-dev https://github.com/Kaavian-Systems-Pvt-Ltd/loading-indicator.git

### Usage
Each loader accepts a loading prop as a boolean. The loader will render null if loading is false.

## Example
 import React, {useEffect,useState} from "react";
 
 import { Content } from "@kaavian-sys/loading-indicator";

 function Module(){
 
    const [post,setPost]=useState(null)
    
 useEffect(() => {
 
   fetch('https://jsonplaceholder.typicode.com/posts/1')

        .then(res=>res.json())

          .then(res=>{
          
              const {body}= res
              
                console.log(body); 

                setPost(body);

    }); 
  
},[])

  
    return(
        <div>
           {post?post :<Content />}
        </div>
    );
}

export default Module;

 



  
