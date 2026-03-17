import "./env.js";   

import { connectDB } from './db/index.js';
import {app} from './app.js'

connectDB().then(
    ()=>{
     app.listen(process.env.PORT || 8000,()=>{console.log(`App is listening on port ${process.env.PORT}`)})
}).catch((error)=>{
    console.error("MONGO DB connection failed",error)
    process.exit(1);
}
);