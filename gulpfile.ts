import cmd from 'gulp-run-command'

function run(command: string) {
	return cmd(command)()
}

export default async function build() {
	// MUST return the result of the call to run() in gulp >= v4.0
	return run('tsc')
}
