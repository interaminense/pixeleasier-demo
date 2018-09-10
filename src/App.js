import Component from 'metal-jsx';
import Sections from './components/Sections';
import {
	finnAndJakeDraw,
	steveJobsDraw,
	robotCopDraw,
	batmanDraw,
	finnDraw,
	vaderDraw,
	hellboyDraw,
	deloreanDraw,
	capitainAmericaDraw,
	chewieDraw,
	guardianDraw,
	ninjasDraw,
	starWarsDraw
} from './drawings';
import './style/main.scss';
import './style/prism.scss';

const items = [
	{
		backgroundColor: 'rgb(233, 30, 99)',
		title: 'Finn & Jake',
		draw: finnAndJakeDraw,
		size: 6
	},
	{
		backgroundColor: 'rgb(113, 138, 158)',
		title: 'Steve Jobs',
		draw: steveJobsDraw,
		size: 4
	},
	{
		backgroundColor: 'rgb(72, 87, 121)',
		title: 'Batman',
		draw: batmanDraw,
		size: 6
	},
	{
		backgroundColor: 'rgb(132, 119, 108)',
		title: 'Robot Cop',
		draw: robotCopDraw,
		size: 6
	},
	{
		backgroundColor: 'rgb(117, 214, 74)',
		title: 'Finn',
		draw: finnDraw,
		size: 4
	},
	{
		backgroundColor: 'rgb(152, 144, 162)',
		title: 'Darth Vader',
		draw: vaderDraw,
		size: 6
	},
	{
		backgroundColor: 'rgb(115, 114, 114)',
		title: 'Hellboy',
		draw: hellboyDraw,
		size: 4
	},
	{
		backgroundColor: 'rgb(104, 110, 128)',
		title: 'Delorean',
		draw: deloreanDraw,
		size: 1
	},
	{
		backgroundColor: 'rgb(131, 131, 131)',
		title: 'Captain America',
		draw: capitainAmericaDraw,
		size: 4
	},
	{
		backgroundColor: 'rgb(122, 129, 132)',
		title: 'Chewie',
		draw: chewieDraw,
		size: 8
	},
	{
		backgroundColor: 'rgb(61, 78, 71)',
		title: 'Guardian',
		draw: guardianDraw,
		size: 4
	},
	{
		backgroundColor: 'rgb(143, 125, 173)',
		title: 'Ninjas',
		draw: ninjasDraw,
		size: 6
	},
	{
		backgroundColor: 'rgb(152, 158, 157)',
		title: 'Star Wars',
		draw: starWarsDraw,
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
