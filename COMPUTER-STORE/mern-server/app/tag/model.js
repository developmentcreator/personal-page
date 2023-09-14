const mongoose = require('mongoose');
const { model, Schema } = mongoose;


const tagSchema = Schema({
    name: {
        type: String,
        minlength: [2, 'Panjang tag minimal 2 karakter'],
        maxlength: [20, 'Panjang tag maksimal 20 karakter'],
        required: [true, 'Nama tag tidak boleh kosong'],
    }
});

module.exports = model('Tag', tagSchema);