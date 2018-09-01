import {Pixeleasier as PixeleasierHTML, PixeleasierCSS, PixeleasierSVG} from 'pixeleasier';

const renderToString = (draw, type = 'HTML', size = 8) => {
	let object;

	if (type === 'CSS') {
		object = new PixeleasierCSS(draw, size);
	} else if (type === 'SVG') {
		object = new PixeleasierSVG(draw, size);
	} else {
		object = new PixeleasierHTML(draw, size);
	}

	return object.render().outerHTML;
}

export default renderToString;
