var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    address: {
      city: { type: String },
      state: { type: String, required: true, unique: true },
      country: { type: String },
      pin: { type: Number },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ state: 1, country: 1 });

module.exports = mongoose.model('User', userSchema);
