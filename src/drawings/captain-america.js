const _ = 'transparent';
const A = '#171E2A';
const B = '#32466F';
const C = '#090C11';
const D = '#FFFFFF';
const E = '#846357';
const F = '#C3876F';
const G = '#E2C091';
const H = '#AA8759';
const I = '#672D22';
const J = '#B14536';
const K = '#E56F5F';
const L = '#4B73A2';
const M = '#B9B9D2';
const N = '#88B4E7';
const O = '#8A313D';
const P = '#3C5587';
const Q = '#483521';
const R = '#D5D5E1';
const S = '#664D34';
const T = '#2D2013';
const U = '#24385F';
const V = '#676784';
const W = '#F4F4FC';
const X = '#9C9CB1';
const Y = '#696875';

const draw = [
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,A,A,A,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,A,C,A,B,B,B,D,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,A,C,C,A,B,B,D,D,D,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,C,C,C,C,A,B,D,B,D,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,C,C,C,C,C,A,B,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,C,C,C,C,D,E,C,B,D,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,F,F,C,C,C,A,A,C,G,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,F,F,C,C,H,H,H,H,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,A,C,A,C,H,H,D,D,D,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,C,A,C,A,C,H,H,I,I,I,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,A,C,C,A,C,H,H,G,G,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,A,_,C,C,C,C,C,C,A,C,C,C,A,A,H,H,H,G,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,B,B,B,B,A,B,A,A,C,C,C,C,C,A,C,C,C,C,C,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,B,B,B,B,A,B,A,A,A,A,C,C,C,A,C,C,A,A,A,A,A,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,B,A,B,B,A,A,B,B,A,A,A,A,A,A,C,C,A,A,A,A,B,A,A,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,B,A,B,A,A,A,B,A,A,B,B,B,B,A,A,C,A,A,B,B,B,A,B,A,A,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,B,A,B,A,A,B,A,A,A,A,A,A,B,B,C,B,B,A,A,A,A,A,B,A,A,B,B,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,A,A,A,A,B,C,A,A,B,A,A,A,A,A,B,A,A,A,A,A,B,A,B,A,B,A,B,B,_,_,_,_,_,_,J,J,J,J,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,A,A,A,B,C,A,A,A,A,A,B,A,B,A,A,A,A,A,B,A,A,A,B,A,A,B,A,B,_,_,_,K,K,J,J,L,L,L,J,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,A,A,A,B,C,A,A,A,A,A,A,A,A,A,A,M,A,A,A,A,A,B,A,A,B,A,A,C,B,_,_,K,K,N,L,L,L,L,L,L,J,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,A,A,M,A,A,A,A,A,A,A,A,A,A,A,M,M,M,D,D,A,A,A,A,A,A,A,A,C,O,O,O,O,J,N,N,L,L,L,L,L,L,L,J,J,J,_],
	[_,_,_,_,_,_,_,_,_,P,P,_,_,_,C,C,C,M,M,M,C,O,C,C,A,C,A,A,A,A,A,A,M,M,D,A,A,A,A,A,A,C,A,C,C,O,P,P,P,P,N,N,N,L,L,L,L,L,L,L,L,L,_],
	[_,_,_,_,_,_,_,_,_,P,P,A,L,M,M,M,M,D,D,M,C,O,C,A,C,A,C,A,C,A,A,M,A,C,C,D,A,C,A,C,A,A,C,C,C,O,P,P,P,P,N,N,N,L,L,L,L,L,L,L,L,L,_],
	[_,_,_,_,_,_,_,_,P,P,A,L,P,P,M,M,D,D,D,D,C,O,O,C,C,C,A,C,A,C,C,A,C,C,C,C,C,A,C,A,C,C,C,O,C,O,P,P,P,P,P,N,N,L,L,L,L,L,L,L,L,L,_],
	[_,_,_,_,_,_,_,_,P,P,A,P,P,P,M,D,D,D,D,D,_,C,O,O,C,C,C,C,C,C,C,C,C,P,C,C,C,C,C,C,C,C,O,C,C,O,P,P,P,P,P,N,N,C,C,C,C,L,L,L,L,L,_],
	[_,_,_,_,_,_,_,P,P,A,P,P,P,P,M,D,D,M,D,_,_,C,C,O,O,C,C,C,C,C,C,C,P,P,P,C,C,C,C,C,O,O,C,C,C,O,P,P,P,P,P,N,C,C,C,C,C,C,L,L,L,L,_],
	[_,_,_,_,_,_,_,P,P,A,P,P,P,P,L,D,D,_,_,_,_,C,C,C,O,O,P,P,P,P,P,P,P,L,P,P,P,P,P,O,O,C,C,C,C,O,P,P,P,P,P,C,C,C,C,D,C,C,C,L,L,L,_],
	[_,_,_,_,_,_,_,_,A,P,P,P,P,P,L,L,L,_,_,_,_,_,C,C,C,O,P,P,P,P,P,L,L,L,L,L,P,P,J,J,C,C,_,C,C,O,O,P,P,P,P,C,C,C,C,D,C,C,C,L,L,L,_],
	[_,_,_,_,_,_,_,_,_,P,P,Q,O,L,L,L,L,_,_,_,_,_,_,C,C,O,O,P,P,L,L,P,P,L,L,P,P,J,J,C,C,_,_,_,C,C,O,P,P,P,C,C,R,R,D,D,D,D,D,C,L,L,_],
	[_,_,_,_,_,_,_,_,_,A,P,Q,O,L,L,L,_,_,_,_,_,_,_,C,C,C,O,O,P,P,P,P,P,L,P,P,O,J,A,A,_,_,_,_,_,A,O,P,P,P,C,C,C,R,R,D,D,D,C,C,L,L,_],
	[_,_,_,_,_,_,_,_,_,P,A,Q,S,O,L,L,_,_,_,_,_,_,_,_,C,C,C,O,O,P,P,P,L,L,L,P,J,A,A,_,_,_,_,_,_,_,O,P,P,P,C,C,C,C,R,D,D,C,C,C,L,L,_],
	[_,_,_,_,_,_,_,_,_,A,Q,Q,S,O,_,_,_,_,_,_,_,_,_,_,_,C,C,C,O,P,P,L,L,L,L,J,J,A,A,_,_,_,_,_,_,_,O,P,P,P,C,C,C,C,R,D,D,C,C,C,L,_,_],
	[_,_,_,_,_,_,_,_,_,P,Q,S,S,O,_,_,_,_,_,_,_,_,_,_,_,C,C,C,O,O,P,P,P,L,L,J,A,A,A,_,_,_,_,_,_,_,O,P,P,P,C,C,C,R,R,D,D,D,C,C,L,_,_],
	[_,_,_,_,_,_,_,_,_,A,Q,S,S,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,O,P,P,P,L,L,J,A,A,A,_,_,_,_,_,_,_,O,O,P,P,C,C,C,R,C,C,C,D,C,C,L,_,_],
	[_,_,_,_,_,_,_,_,_,P,Q,S,S,_,_,_,_,_,_,_,_,_,_,Q,Q,C,C,C,C,O,P,P,P,L,L,J,A,A,A,Q,Q,_,_,_,_,_,_,O,P,P,C,C,R,C,C,C,C,C,D,C,L,_,_],
	[_,_,_,_,_,_,_,_,P,A,Q,S,L,L,_,_,_,_,_,_,_,_,_,Q,Q,T,T,C,C,O,P,P,L,L,L,J,A,T,S,S,Q,_,_,_,_,_,_,O,P,P,P,C,C,C,C,C,C,C,C,C,L,_,_],
	[_,_,_,_,_,_,_,_,Q,P,Q,S,L,L,L,_,_,_,_,_,_,_,_,Q,Q,T,S,S,S,T,S,S,S,U,S,S,S,T,Q,S,Q,_,_,_,_,_,_,O,O,P,P,C,C,C,C,C,C,C,C,L,L,_,_],
	[_,_,_,_,_,_,_,_,Q,P,Q,S,_,L,L,_,_,_,_,_,_,_,_,Q,Q,T,Q,S,Q,T,Q,S,Q,U,Q,S,Q,T,S,Q,Q,_,_,_,_,_,_,_,O,P,P,P,C,C,C,C,C,C,L,L,L,_,_],
	[_,_,_,_,_,_,_,_,P,P,A,_,_,A,A,_,_,_,_,_,_,_,_,_,C,T,S,Q,S,T,S,Q,S,U,S,Q,S,T,S,S,_,_,_,_,_,_,_,_,O,O,P,P,P,C,C,C,C,N,N,L,_,_,_],
	[_,_,_,_,_,_,_,_,P,P,A,_,_,A,_,_,_,_,_,_,_,_,_,C,C,C,S,S,S,T,S,S,S,U,S,S,S,C,C,C,A,_,_,_,_,_,_,_,_,O,P,P,P,P,P,P,P,N,N,L,_,_,_],
	[_,_,_,_,_,_,_,_,P,P,A,A,_,_,_,_,_,_,_,_,_,_,C,C,C,C,C,C,C,O,U,U,U,P,U,O,C,A,A,A,A,A,_,_,_,_,_,_,_,O,P,P,P,P,P,P,P,N,N,L,_,_,_],
	[_,_,_,_,_,_,_,_,_,P,P,_,_,_,_,_,_,_,_,_,_,C,C,C,C,A,A,A,A,O,U,P,P,P,U,U,J,A,A,A,A,A,A,_,_,_,_,_,_,O,O,P,P,P,P,P,P,P,N,L,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,P,P,_,_,_,_,_,_,_,_,C,C,C,C,C,A,A,A,U,O,P,P,P,P,P,U,J,A,A,A,A,A,A,A,_,_,_,_,_,_,O,P,P,P,P,P,P,P,N,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,A,A,A,U,O,P,P,P,P,P,P,P,U,J,A,A,A,A,A,A,_,_,_,_,_,D,O,O,P,P,P,P,P,P,D,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,C,A,A,A,U,O,P,P,P,P,P,P,P,P,P,U,U,A,A,A,A,A,A,_,_,_,_,D,D,O,P,P,P,P,P,J,D,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,A,A,A,A,U,P,P,P,P,P,P,P,P,P,P,P,U,A,A,A,A,A,A,_,_,_,_,_,D,O,O,P,P,P,P,J,D,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,A,A,A,A,U,P,P,P,P,P,P,_,_,P,P,P,P,L,U,A,A,A,A,A,A,_,_,_,_,D,D,O,P,P,P,J,D,D,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,A,A,A,U,P,P,P,P,P,P,_,_,_,_,P,P,P,P,L,U,A,A,A,A,A,_,_,_,_,_,D,O,O,P,P,J,D,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,A,A,A,U,P,P,P,P,P,P,_,_,_,_,_,_,P,P,P,P,L,U,A,A,A,A,A,_,_,_,_,D,D,O,P,J,D,D,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,A,A,U,P,P,P,P,P,P,_,_,_,_,_,_,_,_,P,P,P,P,L,U,A,A,A,A,_,_,_,_,_,D,O,O,J,D,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,A,A,A,U,P,P,P,P,P,P,_,_,_,_,_,_,_,_,_,_,P,P,P,P,L,U,A,A,A,C,_,_,_,_,D,D,O,D,D,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,R,R,R,R,P,P,P,P,P,_,_,_,_,_,_,_,_,_,_,_,_,_,P,P,P,P,L,U,A,C,R,R,R,_,_,_,D,D,D,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,V,R,R,R,W,W,P,P,P,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,P,P,P,P,L,U,R,R,W,W,_,_,_,_,D,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,V,V,X,R,W,W,W,P,P,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,P,P,L,A,V,V,V,X,W,W,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,V,X,X,X,X,W,W,P,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,P,A,V,V,V,X,X,X,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,A,V,V,X,X,X,X,X,P,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,A,P,A,V,V,V,X,X,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,C,V,X,X,X,X,X,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,P,P,P,V,V,V,X,X,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,C,C,X,X,X,X,X,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,P,A,A,C,C,V,V,V,X,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,C,C,C,X,X,X,A,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,P,C,C,C,C,V,V,X,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,C,A,C,C,C,C,P,P,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,P,P,P,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,C,C,C,A,A,A,P,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,A,A,A,P,P,A,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,Q,C,C,A,C,C,A,A,P,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,A,A,A,A,A,B,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,Q,C,C,C,A,A,P,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Q,A,A,A,B,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,C,Q,C,B,C,C,C,C,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,Q,Q,A,B,_,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,C,C,B,B,S,S,S,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,A,Q,S,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,Q,B,B,C,A,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,A,A,A,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,C,C,Q,S,C,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,A,A,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,C,C,C,C,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,A,A,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,C,C,B,C,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,A,A,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,C,C,C,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,A,_,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,C,C,C,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,C,Q,S,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,Q,Q,Q,A,A,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,C,Q,A,A,_,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,C,C,C,S,_,_,_,_,_,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,_,C,C,Q,A,A,A,_,_,_,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,C,C,C,S,A,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,C,Q,Q,Q,C,A,A,A,Y,_,_,_,_,_,_,_],
	[_,_,_,Y,Y,Y,C,C,C,S,A,A,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,C,C,C,C,C,C,C,A,A,A,Y,Y,Y,_,_,_],
	[Y,Y,Y,Y,Y,C,C,C,C,A,A,A,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,C,C,C,C,C,C,C,A,Y,Y,Y,Y],
	[Y,Y,Y,Y,C,C,C,C,C,C,A,A,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y],
	[_,_,_,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,_,_,_],
	[_,_,_,_,_,_,_,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,_,_,_,_,_,_,_],
	[_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,Y,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_,_]
];

export default draw;