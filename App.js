// Space Phenomena Tracker that lists different space objects and assigns a random observation status (Visible, Faint or Prime for Study(display special message to bring advanced equipment))
//USE:
// **JSX** (Javascript XML) : syntax used in React to create UI elements
//**React Components** return JSX to define what appears on screen
//**Props & State ** ways to pass and manage data in React
//Javascript concepts: Arrays. map(), random number generator, conditional rendering

//STEP 1: Set up Project
//Have Node.js Installed 
//Create a React Project in terminal// npx create-react-app space-tracker


// //1: Import React: 
// import React from "react"; //brings in React so we can use JSX
// import ReactDOM from "react-dom"; //Helps render our component into the webpage

//STEP 1: Create a List of space phenomena
function App () //Create a APP React Component- it returns JSX(our UI)
{
	const spacePhenomena = [
		{id: 1, name: "Asteroid Belt", emoji: "☄️"},
		{id: 2, name: "Galactic Nebula", emoji: "🌌"},
		{id: 3, name: "Black Hole", emoji: "🕳️"},
		{id: 4, name: "Supernova Explosion", emoji: "💥"},
		{id: 5, name: "Pulsar", emoji: "⚡"},
		{id: 6, name: "Quasar", emoji: "💫"},
		{id: 7, name: "Exoplanet", emoji: "🪐"},
		{id: 8, name: "Interstellar Cloud", emoji: "☁️"},
		{id: 9, name: "Gamma-Ray Burst", emoji: "🌠"},
		{id: 10, name: "Magnetic Field Reversal", emoji: "🧲"}
	];
//STEP 2: Define Observation Status
	//An Array for 3 possible statuses a space phenomenon can have
	const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];
	

	return (
		<div>
			<h1> Space Phenomena Tracker</h1>
			<ul>
				{/* //Looping thru spacePhenomena with .map() and returns JSX to display it */}
				{spacePhenomena.map((phenomenon) => {
					//STEP 3: Assign a random observation status
					const randomIndex = Math.floor(Math.random() * observationStatuses.length);
					const observationStatus = observationStatuses[randomIndex];

					//STEP 4: Render List Item with Conditional Message
					return (
						//Render each phenomenon to display the emoji, nsme, and observation status
						<li key={phenomenon.id}>
							{phenomenon.emoji} {phenomenon.name} - {observationStatus}

							{/* //Conditional Rendering for "Prime for Study"/// If random Index = 2 we display a messgae */}

							{randomIndex === 2 && <span> 💡 (Gear up with your best equipment!)</span>}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

//STEP 5: Render the component in the HTML
// This injects the APP component inside div id="root" in the html
ReactDOM.render(<App />, document.getElementById("root"));

// export default App;
