const {MongoClient}=require('mongodb')
const url="mongodb+srv://admin:admin@cluster0.on5xupe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client=new MongoClient(url);
async function run()
{
    try
    {
        const db=client.db('kishoredb')
        const collection=db.collection('kishorecol');
       
        //delete
        const cd=await collection.deleteOne({name:"azar1"})

        console.log(cd.deletedCount)


        const st=collection.find()
        const data=await st.toArray()
        console.table(data)
    }
    finally
    {
        await client.close()
    }
}
run().catch(console.error)