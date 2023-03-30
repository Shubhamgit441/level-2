import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-qo6fqww-shard-00-00.ckgapev.mongodb.net:27017,ac-qo6fqww-shard-00-01.ckgapev.mongodb.net:27017,ac-qo6fqww-shard-00-02.ckgapev.mongodb.net:27017/?ssl=true&replicaSet=atlas-vl1p5b-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;