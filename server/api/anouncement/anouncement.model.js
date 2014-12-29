'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



function slugify(text){
	return text.toString().toLowerCase()
	  .replace(/\s+/g, '-')        // Replace spaces with -
	  .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
	  .replace(/\-\-+/g, '-')      // Replace multiple - with single -
	  .replace(/^-+/, '')          // Trim - from start of text
	  .replace(/-+$/, '');         // Trim - from end of text
}



var AnouncementSchema = new Schema({
  title: String,
  teaser: String,
  text: String,
  active: Boolean,
  created_at: { type: Date, default: new Date() },
  author: { type: String },
  read: [],
  tags: [{ tag: String }],
  slug: String,

});



// Generate the slug
AnouncementSchema.pre('save', function (next) {
	this.slug = slugify(this.title);
	next(); 
});

module.exports = mongoose.model('Anouncement', AnouncementSchema);