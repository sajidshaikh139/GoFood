const mongoose=require(`mongoose`)
const mongoURI=`mongodb+srv://Myproject:Sajid123@cluster0.xpko8wg.mongodb.net/gofoodmern?retryWrites=true&w=majority`;

const mongoDB=async()=>{
  await mongoose.connect(mongoURI,{ useNewUrlParser:true},async(err,result)=>{
    if(err)console.log("----",err)
    else{
        console.log("Connected")
        const fetched_data = await mongoose.connection.db.collection("food-item")
        fetched_data.find({}).toArray (async function(err,data){
          const foodCategorey= await mongoose.connection.db.collection("foodCategorey")
          foodCategorey.find({}).toArray(function (err,catData){
            if(err)console.log(err)
             else {
              global.food_item = data;
              global.foodCategorey=catData;
            }
          })
            // if(err)console.log(err)
            // else {
            //   global.food_item = data;
            
            // }
        });
      }
});

}
module.exports=mongoDB;

