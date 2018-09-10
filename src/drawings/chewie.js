const _ = 'transparent';
const A = '#815D4C';
const B = '#4D382E';
const C = '#6D4F41';
const D = '#2E2622';
const E = '#9C9C9C';
const F = '#D5D5D5';
const G = '#A5ACAE';
const H = '#C0977A';
const I = '#EBE2C3';
const J = '#141A1A';
const K = '#C4BB9B';
const L = '#4A3716';
const M = '#131E27';
const N = '#8089AA';
const O = '#32404D';
const P = '#202218';
const Q = '#6B7478';
const R = '#0C170F';

const draw = [
	[_,_,_,_,_,A,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,A,A,A,C,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,B,A,B,A,C,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,A,D,A,C,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,A,A,C,A,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,E,C,A,C,B,A,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,E,B,C,C,C,B,B,D,D,D,_,B,_,_,_,_,_,_,F,F,F,_,_],
	[_,_,B,B,A,C,B,B,B,G,G,G,B,_,_,_,_,_,_,_,F,F,H,_,_],
	[_,_,B,B,A,A,A,B,D,D,B,B,B,B,_,_,_,_,_,_,F,H,H,_,_],
	[_,_,B,B,A,A,A,G,G,B,B,B,B,B,_,_,_,_,_,_,H,H,_,_,_],
	[A,_,B,A,B,A,A,D,D,C,B,B,B,B,_,B,_,_,_,I,I,H,I,_,_],
	[_,A,A,A,A,A,G,G,C,C,B,B,_,B,B,_,_,_,J,J,I,H,I,J,_],
	[_,C,A,A,A,D,D,C,C,C,B,B,_,A,B,_,_,_,J,J,I,H,I,J,_],
	[_,C,A,A,A,D,D,C,C,C,B,B,_,A,B,_,_,_,J,J,I,H,I,J,_],
	[_,C,A,A,A,G,G,C,C,C,B,B,_,A,B,_,_,I,J,J,I,I,I,J,_],
	[_,C,A,A,D,D,C,A,C,C,B,B,_,A,B,_,_,I,J,J,I,I,I,J,_],
	[_,C,A,A,G,G,C,A,C,B,B,B,_,A,B,_,_,I,J,J,I,I,I,J,_],
	[_,C,A,D,D,C,A,A,C,B,B,B,_,A,B,_,I,_,J,J,I,I,I,J,_],
	[_,C,D,D,C,A,A,C,B,B,B,B,_,A,B,_,I,_,K,J,I,I,I,J,K],
	[_,C,D,C,A,A,A,C,B,B,B,B,_,A,B,_,I,_,K,K,K,I,I,I,K],
	[_,C,B,A,A,A,A,C,B,B,B,B,_,A,B,_,I,_,L,L,L,L,L,L,K],
	[_,C,B,B,A,A,C,B,B,B,B,B,_,A,B,_,I,_,M,L,N,N,L,M,K],
	[_,C,B,B,B,C,B,B,B,B,B,B,_,A,B,_,I,_,M,L,N,N,M,O,K],
	[_,C,B,B,B,B,B,B,B,B,B,B,_,A,B,_,I,_,L,M,M,M,O,O,K],
	[_,C,B,B,B,B,B,B,B,B,B,B,_,A,B,_,I,_,M,O,O,O,O,O,K],
	[_,C,B,B,B,B,B,B,B,B,B,B,_,A,B,_,I,_,M,O,_,_,M,O,K],
	[_,C,B,B,B,_,_,B,B,B,B,B,_,A,B,_,I,_,M,O,_,_,M,O,K],
	[_,C,B,B,_,_,_,_,B,B,B,B,_,A,B,_,I,_,L,L,_,_,M,O,K],
	[_,_,B,B,_,_,_,_,_,B,B,B,_,_,_,_,H,_,M,O,_,_,M,O,H],
	[_,_,B,B,_,_,_,_,_,B,B,B,_,_,_,_,H,_,M,O,_,_,M,O,H],
	[_,_,B,B,_,_,_,_,_,B,B,B,_,_,_,_,_,_,M,_,_,_,M,_,_],
	[_,_,B,B,_,_,_,_,_,B,B,B,_,_,_,_,_,_,P,_,_,_,P,_,_],
	[_,_,_,B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,P,_,_,_,P,_,_],
	[_,_,_,B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,P,_,_,_,P,_,_],
	[_,_,_,B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,P,_,_,_,P,_,_],
	[_,_,_,B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,P,_,_,_,P,_,_],
	[_,_,_,B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,P,_,_,_,P,_,_],
	[_,_,_,B,_,_,_,_,_,_,B,B,_,_,_,_,_,_,P,_,_,_,P,_,_],
	[_,Q,Q,B,Q,Q,Q,Q,Q,Q,B,B,Q,Q,Q,Q,Q,Q,R,Q,Q,Q,P,Q,Q]
];

export default draw;
