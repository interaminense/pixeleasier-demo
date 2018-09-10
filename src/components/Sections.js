
import Component, {Config, DangerouslySetHTML} from 'metal-jsx';
import {prefix} from '../utils/constants';
import {convertDrawToString, getCode} from '../utils';

const CLASSNAME = `${prefix}-section`;

class Sections extends Component {
	render() {
		const {items} = this.props;

		return items.map(({backgroundColor, draw, title, size}) => (
			<Section
				backgroundColor={backgroundColor}
				draw={draw}
				title={title}
				typeSelected={'CSS'}
				size={size}
			/>
		));
	}
}

Sections.PROPS = {
	items: Config.array()
}

class Section extends Component {
	created() {
		const {draw, size, typeSelected} = this.props;
		const drawString = convertDrawToString(draw, 'CSS', size);

		this.setState({typeSelected, drawString});
	}

	handleClick({target}) {
		const type = target.innerText.toUpperCase();

		this.state.typeSelected = type;
	}

	handleClickShowCode() {
		this.state.showCode = !this.state.showCode;
	}

	renderTitle() {
		const {backgroundColor, title} = this.props;

		return <h1 class={`${CLASSNAME}-title`} style={`background-color: ${backgroundColor}`}>{title}</h1>;
	}

	renderCode() {
		const {draw} = this.props;
		const drawString = convertDrawToString(draw, 'CSS');

		if (!this.code) {
			this.code = getCode(drawString);
		}

		return (
			<pre class="language-markup">
				<DangerouslySetHTML elementClasses={`${CLASSNAME}-code`} content={this.code} />
			</pre>
		);
	}

	renderDraw() {
		const {drawString} = this.state;

		return <DangerouslySetHTML elementClasses={`${CLASSNAME}-draw`} content={drawString} />;
	}

	renderTabs() {
		const {typeSelected} = this.state;

		return (
			<ul onClick={this.handleClick.bind(this)} class={`${CLASSNAME}-tabs`}>
				<li class={typeSelected == 'HTML' && 'selected'}>{'html'}</li>
				<li class={typeSelected == 'CSS' && 'selected'}>{'css'}</li>
				<li class={typeSelected == 'SVG' && 'selected'}>{'svg'}</li>
			</ul>
		);
	}

	render() {
		const {backgroundColor} = this.props;
		const {showCode} = this.state;

		return (
			<section class={CLASSNAME} style={`background-color: ${backgroundColor}`}>
				{this.renderTitle()}
				<div class={`${CLASSNAME}-flex`}>
					{this.renderDraw()}
					{/* {showCode && <div class={`${CLASSNAME}-content-code`}>
						{this.renderTabs()}
						{this.renderCode()}
					</div>}
					<button data-onclick={this.handleClickShowCode.bind(this)}>{'show code'}</button> */}
				</div>
			</section>
		);
	}
}

Section.PROPS = {
	backgroundColor: Config.string(),

	draw: Config.array(),

	title: Config.string(),

	typeSelected: Config.string(),

	size: Config.number()
}

Section.STATE = {
	typeSelected: Config.string(),

	drawString: Config.string(),

	showCode: Config.bool().value(false)
}

export default Sections;
