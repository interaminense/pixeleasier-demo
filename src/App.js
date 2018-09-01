import Component from 'metal-jsx';
import Sections from './components/Sections';
import {finnAndJakeDraw, steveJobsDraw, robotCopDraw, batmanDraw, finnDraw} from './drawings';
import './style/main.scss';
import './style/prism.scss';

const items = [
	{
		backgroundColor: 'rgb(233, 30, 99)',
		title: 'Finn & Jake',
		draw: finnAndJakeDraw
	},
	{
		backgroundColor: 'rgb(113, 138, 158)',
		title: 'Steve Jobs',
		draw: steveJobsDraw
	},
	{
		backgroundColor: 'rgb(72, 87, 121)',
		title: 'Batman',
		draw: batmanDraw
	},
	{
		backgroundColor: 'rgb(132, 119, 108)',
		title: 'Robot Cop',
		draw: robotCopDraw
	},
	{
		backgroundColor: 'rgb(117, 214, 74)',
		title: 'Finn',
		draw: finnDraw
	}
];

class App extends Component {
	render() {
		return (
			<div class="app">
				<Sections items={items} />
			</div>
		);
	}
}

export { App };
export default App;
