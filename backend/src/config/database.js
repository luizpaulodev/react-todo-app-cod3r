const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports =  mongoose.connect('mongodb+srv://luizpaulo:sistemas@ommistack-gsnln.mongodb.net/cursodb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
