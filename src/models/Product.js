import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        trim: true
    },
    done: {
        type: Boolean,
        default: false

    },
}, {

    versionKey: false,
    timestamps: true
});

productSchema.plugin(mongoosePaginate);
module.exports = model('Product', productSchema);