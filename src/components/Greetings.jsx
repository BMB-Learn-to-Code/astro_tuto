import { useState } from "preact/hooks";

export default function Greetings({ messages = [""] }) {
	const getRandomGreeting = () => {
		console.debug("trigger new message");
		return messages[Math.floor(Math.random() * messages.length)];
	};

	const [greeting, setGreeting] = useState(messages[0]);

	return (
		<div>
			<h3>{greeting}! Thank you for visiting</h3>

			<button onClick={() => setGreeting(getRandomGreeting())}>
				New Greeting
			</button>
		</div>
	);
}
