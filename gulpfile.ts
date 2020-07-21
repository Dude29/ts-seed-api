import { series } from 'gulp'

export async function taskA() {
	console.log('task A')
}

async function taskB() {
	console.log('task B')
}

export default series(taskA, taskB)
