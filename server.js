const express = require('express');
const app = express();
const PORT = 5000;
 
app.get('/data',(req,res)=>{
    const data = {
        lastname : "dl",
        firstname : "wlrma"
    };
    res.json(data);
})
 
app.get('/api/customers',(req,res)=>{
    const data = [
        { id:1,
          image:"https://placeimg.com/64/64/1",
          name:"홍길동",
          age:19,
          job:"장군"
        },
        { id:2,
          image:"https://placeimg.com/64/64/2",
          name:"구길동",
          age:29,
          job:"변호사"
        },
        { id:3,
          image:"https://placeimg.com/64/64/3",
          name:"이길동",
          age:39,
          job:"의사"
        }
      ];
    res.json(data);
})

app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})
