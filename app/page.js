import Image from "next/image"
import Red from "./components/Red"
import Blue from "./components/Blue"
import Green from "./components/Green"

export default function Home() {
	return (
		<div className="h-screen flex flex-col overflow-auto">
			<header>
				<div className="h-16 w-full">
					<Blue />
				</div>
			</header>
			<main className="flex flex-grow">
				<div className="w-1/3">
					<Red />
				</div>
				<div className="flex-grow">
					<Green />
				</div>
			</main>
		</div>
	)
}
