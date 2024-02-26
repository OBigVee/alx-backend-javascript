const introduction = "Welcome to Holberton School, what is your name?\n";
const outro = "This important software is now closing\n"
process.stdout.write(introduction)

process.stdin.setEncoding('utf-8')

process.stdin.on('readable', () => {
	const getName = process.stdin.read()
	if (getName !== null) {
		process.stdout.write(`Your name is: ${getName}`)
	}
})
process.stdin.on('end', () => {
	process.stdout.write(outro)
})

