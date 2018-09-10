import Prism from 'prismjs/prism';

const getCode = drawString => Prism.highlight(drawString, Prism.languages.html, 'html');

export default getCode;
