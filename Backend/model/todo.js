const mongoose=require ('mongoose');
const todoSchema = new mongoose.Schema({
    description: String,
    status: {
        type: String,
        enum: ['completed', 'ongoing'],
        default: 'ongoing',
    },
});
const Todo = mongoose.model('tododata', todoSchema);
module.exports=Todo;