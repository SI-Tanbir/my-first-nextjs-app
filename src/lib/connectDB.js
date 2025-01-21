const { MongoClient, ServerApiVersion } = require("mongodb");

 

 let db;
 

 const connectDB=async()=>{

    if(db) return db;

    try{

        const uri=process.env.PUBLIC_NEXT_MONGODB_URI
        const client =new MongoClient(uri,{

            serverApi:{
                version:ServerApiVersion.v1,
                strict:true,
                deprecationErrors:true,
            },
        });
        db=await client.db('next-hero')
            console.log('mongo cnnection succesful')
        return db
    }
    catch(error){

        console.log(error)

    }
 }

 

 export default connectDB;

