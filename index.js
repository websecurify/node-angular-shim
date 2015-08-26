'use strict'

// ---
// ---
// ---

try {
	module.exports = window.angular || {}
} catch (e) {
	try {
		module.exports = require('angular') || {}
		
		// ---
		
		if (!module.exports.module) {
			module.exports = window.angular || {}
		}
	} catch (e) {
		module.exports = {}
	}
}

// ---
