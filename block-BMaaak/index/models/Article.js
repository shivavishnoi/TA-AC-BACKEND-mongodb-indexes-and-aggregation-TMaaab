var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: { type: String },
  description: { type: String },
  tags: { type: [String] },
});
articleSchema.index({ tags: 1 });
articleSchema.index({ title: 'text', description: 'text' });
// articleSchema.index({ title: 'text' });

module.exports = mongoose.model('User', userSchema);
