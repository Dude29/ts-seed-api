function defaultTask(cb: any) {
	// place code for your default task here
	cb();
}

// Gulp needs to use this syntax because it can't parse ES6 constructs yet
exports.default = defaultTask;
