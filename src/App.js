import Component from 'metal-jsx';
import Sections from './components/Sections';
import {finnAndJakeDraw, steveJobsDraw, robotCopDraw, batmanDraw, finnDraw, vaderDraw} from './drawings';
import './style/main.scss';
import './style/prism.scss';

const items = [
	{
		backgroundColor: 'rgb(233, 30, 99)',
		title: 'Finn & Jake',
		draw: finnAndJakeDraw,
		size: 8
	},
	{
		backgroundColor: 'rgb(113, 138, 158)',
		title: 'Steve Jobs',
		draw: steveJobsDraw,
		size: 8
	},
	{
		backgroundColor: 'rgb(72, 87, 121)',
		title: 'Batman',
		draw: batmanDraw,
		size: 8
	},
	{
		backgroundColor: 'rgb(132, 119, 108)',
		title: 'Robot Cop',
		draw: robotCopDraw,
		size: 8
	},
	{
		backgroundColor: 'rgb(117, 214, 74)',
		title: 'Finn',
		draw: finnDraw,
		size: 8
	},
	{
		backgroundColor: 'rgb(152, 144, 162)',
		title: 'Darth Vader',
		draw: vaderDraw,
		size: 8
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
