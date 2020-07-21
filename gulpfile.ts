import { series } from 'gulp'
import { argv } from 'yargs'
import cmd from 'gulp-run-command'

function run(command: string) {
	return cmd(command)()
}

export async function clean() {
	return run('rm -rf build/')
}

export async function transpile() {
	return run('tsc')
}

export async function lint() {
	return run('eslint .')
}

export const build = series(clean, transpile)

testAll.description = 'Runs all the apps tests'
export async function testAll() {
	return run('mocha ./build/test/')
}

launch.description = 'Runs the app'
export async function launch() {
	return run('node build/main.js')
}

debug.description = `Debug app on default port 6969. Change by passing --port=<number>`
export async function debug() {
	const port = argv.port || 6969
	console.log(port)
	return run(`node --inspect-brk=${port} build/main.js`)
}

export default series(build, lint, launch)
