const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {type: String, required: true},
    year: {type: Date, required: true},
    director: {type: String, required: true},
  },
  { timestamps: true, collection: "Documentales" }
);

MovieSchema.methods.publicData = () => {
  return {
    id: this._id,
    title: this.title,
    year: this.year,
    director: this.director,
  };
};

mongoose.model("Movie", MovieSchema);