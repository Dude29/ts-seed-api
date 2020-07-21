import { series } from 'gulp'
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

export const build = series(clean, transpile)

export async function testAll() {
	return run('mocha ./build/test/')
}

export async function launch() {
	return run('node build/main.js')
}

export const begin = series(build, launch)
