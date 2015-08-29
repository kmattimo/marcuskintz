var keystone = require('keystone');

/**
 * Stat Model
 * ==================
 */

var Stat = new keystone.List('Stat', {
	autokey: { from: 'name', path: 'key', unique: true },
	sortable: true
});

Stat.add({
	name: { type: String, required: true, initial: true },
	value: {type: String, initial:true },
	hidden: {type: Boolean, default:false}
});

Stat.defaultColums ='name, value';
Stat.register();
