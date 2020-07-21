import cmd from 'gulp-run-command'

function run(command: string) {
	return cmd(command)()
}

export async function clean() {
	return run('rm -rf build/')
}

export default async function build() {
	// MUST return the result of the call to run() in gulp >= v4.0
	return run('tsc')
}
