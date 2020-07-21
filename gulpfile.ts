import run from 'gulp-run-command'

export default async function build() {
	// MUST return the result of the call to run() in gulp >= v4.0
	return run('tsc')()
}
