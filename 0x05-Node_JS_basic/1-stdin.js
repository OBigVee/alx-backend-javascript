const intro = "Welcome to Holberton School, what is your name?\n";
const outro = "This important software is now closing\n"
process.stdout.write(intro)

process.stdin.setEncoding('utf-8')

process.stdin.on('readable', () => {
	const getName = process.stdin.read()
	if (getName !== null) {
		process.stdout.write(`your name is: ${getName}`)
	}
})
process.stdin.on('end', () => {
	process.stdout.write(outro)
})

