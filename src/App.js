import './App.css';
import Task from './components/Task'; 

const name = "World"; 

const App = () => 
{
	const showTask = true; 

	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			Hello World, { name }

			{ 
			showTask 
				? 
					(
						<>
							<Task name="Chess"/>
							<Task name="BasketBall"/>
						</>
					)
				: 
					<p> Not Authorized </p>
			} 
		</div>

	);
}

export default App;
