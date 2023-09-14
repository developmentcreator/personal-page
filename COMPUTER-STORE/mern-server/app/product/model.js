const mongose = require("mongoose");
const { model, Schema } = mongose;

const productSchema = Schema(
  {
    name: {
      type: String,
      minlength: [3, "Panjang nama barang minimal 3 karakter"],
      required: [true, "Nama barang tidak boleh kosong"],
    },

    description: {
      type: String,
      maxlength: [1000, "Panjang deskripsi makanan maksimal 1000 karakter"],
    },

    price: {
      type: Number,
      default: 0,
    },

    image_url: String,

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },

    tags: [
      {
      type: Schema.Types.ObjectId,
      ref: "Tag"
    }
  ]
  },
    { timestamps: true }
);

module.exports = model("Product", productSchema);
