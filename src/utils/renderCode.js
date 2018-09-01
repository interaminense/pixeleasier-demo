import Prism from 'prismjs/prism';

const renderCode = (code, type) => Prism.highlight(code, Prism.languages.html, 'html');

export default renderCode;
