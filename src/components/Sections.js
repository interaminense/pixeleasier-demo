
import Component, {Config, DangerouslySetHTML} from 'metal-jsx';
import {prefix} from '../utils/constants';
import {renderToString, renderCode} from '../utils';

const CLASSNAME = `${prefix}-section`;

class Sections extends Component {
	render() {
		const {items} = this.props;

		return items.map(({backgroundColor, draw, title, selected}) => (
			<Section
				backgroundColor={backgroundColor}
				draw={draw}
				title={title}
				selected={selected}
			/>
		));
	}
}

Sections.PROPS = {
	items: Config.array()
}

class Section extends Component {
	created() {
		this.setDraw('SVG');
	}

	setDraw(type) {
		const {draw} = this.props;
		const drawString = renderToString(draw, type);
		const codeString = renderCode(drawString);

		this.state.drawString = drawString;
		this.state.code = codeString;
	}

	handleClick({target}) {
		const type = target.innerText.toUpperCase();

		this.state.selected = type;
		this.setDraw(type);


	}

	renderTitle() {
		const {backgroundColor, title} = this.props;

		return <h1 class={`${CLASSNAME}-title`} style={`background-color: ${backgroundColor}`}>{title}</h1>;
	}

	renderDraw() {
		const {drawString} = this.state;

		return <DangerouslySetHTML elementClasses={`${CLASSNAME}-draw`} content={drawString} />;
	}

	renderCode() {
		const {code} = this.state;

		return (
			<pre class="language-markup">
				<DangerouslySetHTML elementClasses={`${CLASSNAME}-code`} content={code} />
			</pre>
		);
	}

	renderTabs() {
		const {selected} = this.state;

		return (
			<ul onClick={this.handleClick.bind(this)} class={`${CLASSNAME}-tabs`}>
				<li class={selected == 'HTML' && 'selected'}>{'html'}</li>
				<li class={selected == 'CSS' && 'selected'}>{'css'}</li>
				<li class={selected == 'SVG' && 'selected'}>{'svg'}</li>
			</ul>
		);
	}

	render() {
		const {backgroundColor} = this.props;

		return (
			<section class={CLASSNAME} style={`background-color: ${backgroundColor}`}>
				{this.renderTitle()}
				<div class={`${CLASSNAME}-flex`}>
					{this.renderDraw()}
					<div class={`${CLASSNAME}-content-code`}>
						{this.renderTabs()}
						{this.renderCode()}
					</div>
				</div>
			</section>
		);
	}
}

Section.PROPS = {
	backgroundColor: Config.string(),

	draw: Config.array(),

	title: Config.string(),

	selected: Config.string().value('SVG')
}

Section.STATE = {
	code: Config.string(),

	drawString: Config.string()
}

export default Sections;
