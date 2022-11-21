const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://Premynithin:Manumalu123@cluster0.zocaami.mongodb.net/LibraryDB";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log("Book Database connected");
    })
    .catch(() => {
        console.log("error");
    })

const Schema = mongoose.Schema;

var NewBookSchema = new Schema({
    name: String,
    author: String,
    imageUrl: String,
    description: String
});

var BookData = mongoose.model('books', NewBookSchema);

module.exports = BookData;