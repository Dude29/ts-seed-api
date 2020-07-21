import { series } from 'gulp'
import cmd from 'gulp-run-command'

function run(command: string) {
	return cmd(command)()
}

export async function testAll() {
	return run('mocha ./build/test/')
}

export async function clean() {
	return run('rm -rf build/')
}

export async function transpile() {
	return run('tsc')
}

export default async function build() {
	return series(clean, transpile)
}
