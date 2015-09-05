var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * Profile Model
 */

var Profile = new keystone.List('Profile', {
	nocreate: true,
	nodelete: true,
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true
});

Profile.add({
	SiteTitle: { type: String, default:"Marcus Kintz- Athletic Profile" },
	SiteHeader: { type: String, default:"Marcus Kintz- Athletic Profile" },
	Statement: { type: Types.Textarea },
	videoID: { type:String }
});

Profile.register();



