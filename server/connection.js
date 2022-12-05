const {MongoClient} = require("mongodb");

// const uri = "mongodb://192.168.0.222:27017/?maxPoolSize=200";
const uri = "mongodb://Whyang:yang.123@ac-ko32zar-shard-00-00.rvgzebf.mongodb.net:27017,ac-ko32zar-shard-00-01.rvgzebf.mongodb.net:27017,ac-ko32zar-shard-00-02.rvgzebf.mongodb.net:27017/?ssl=true&replicaSet=atlas-ks5ps0-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(uri);
client.connect().then(() => {
  console.log("connected db")
})

function getDB() {
  return client.db("twitter")
}

module.exports = {getDB}
