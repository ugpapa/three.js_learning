(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Er="147",Wn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hl=0,kr=1,ul=2,wa=1,dl=2,Ai=3,ui=0,Ie=1,cn=2,vn=0,ci=1,Vr=2,Wr=3,Hr=4,fl=5,ai=100,pl=101,ml=102,qr=103,Xr=104,gl=200,_l=201,xl=202,vl=203,Sa=204,Ea=205,yl=206,Ml=207,bl=208,wl=209,Sl=210,El=0,Tl=1,Al=2,_r=3,Cl=4,Ll=5,Pl=6,Rl=7,Tr=0,Dl=1,Il=2,hn=0,Nl=1,zl=2,Fl=3,Ol=4,Bl=5,Ta=300,di=301,fi=302,xr=303,vr=304,vs=306,yr=1e3,Be=1001,Mr=1002,xe=1003,jr=1004,Yr=1005,Re=1006,Ul=1007,ys=1008,On=1009,Gl=1010,kl=1011,Aa=1012,Vl=1013,In=1014,Nn=1015,Pi=1016,Wl=1017,Hl=1018,hi=1020,ql=1021,Xl=1022,Ue=1023,jl=1024,Yl=1025,zn=1026,pi=1027,Zl=1028,$l=1029,Kl=1030,Jl=1031,Ql=1033,Ps=33776,Rs=33777,Ds=33778,Is=33779,Zr=35840,$r=35841,Kr=35842,Jr=35843,tc=36196,Qr=37492,to=37496,eo=37808,no=37809,io=37810,so=37811,ro=37812,oo=37813,ao=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,go=36492,Bn=3e3,Ht=3001,ec=3200,nc=3201,Ca=0,ic=1,He="srgb",Ri="srgb-linear",Ns=7680,sc=519,_o=35044,xo="300 es",br=1035;class Vn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const he=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zs=Math.PI/180,vo=180/Math.PI;function Ni(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(he[c&255]+he[c>>8&255]+he[c>>16&255]+he[c>>24&255]+"-"+he[t&255]+he[t>>8&255]+"-"+he[t>>16&15|64]+he[t>>24&255]+"-"+he[e&63|128]+he[e>>8&255]+"-"+he[e>>16&255]+he[e>>24&255]+he[n&255]+he[n>>8&255]+he[n>>16&255]+he[n>>24&255]).toLowerCase()}function ve(c,t,e){return Math.max(t,Math.min(e,c))}function rc(c,t){return(c%t+t)%t}function Fs(c,t,e){return(1-e)*c+e*t}function yo(c){return(c&c-1)===0&&c!==0}function wr(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Vi(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function be(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ee{constructor(){Ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,o,r,a,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=a,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[3],a=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],x=i[1],w=i[4],b=i[7],v=i[2],T=i[5],D=i[8];return s[0]=o*p+r*x+a*v,s[3]=o*f+r*w+a*T,s[6]=o*_+r*b+a*D,s[1]=l*p+h*x+d*v,s[4]=l*f+h*w+d*T,s[7]=l*_+h*b+d*D,s[2]=u*p+m*x+g*v,s[5]=u*f+m*w+g*T,s[8]=u*_+m*b+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],a=t[6],l=t[7],h=t[8];return e*o*h-e*r*l-n*s*h+n*r*a+i*s*l-i*o*a}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],a=t[6],l=t[7],h=t[8],d=h*o-r*l,u=r*a-h*s,m=l*s-o*a,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=d*p,t[1]=(i*l-h*n)*p,t[2]=(r*n-i*o)*p,t[3]=u*p,t[4]=(h*e-i*a)*p,t[5]=(i*s-r*e)*p,t[6]=m*p,t[7]=(n*a-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,r){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*o+l*r)+o+t,-i*l,i*a,-i*(-l*o+a*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Ee;function La(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function _s(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function Fn(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function ms(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const Bs={[He]:{[Ri]:Fn},[Ri]:{[He]:ms}},pe={legacyMode:!0,get workingColorSpace(){return Ri},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,e){if(this.legacyMode||t===e||!t||!e)return c;if(Bs[t]&&Bs[t][e]!==void 0){const n=Bs[t][e];return c.r=n(c.r),c.g=n(c.g),c.b=n(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}},Pa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={r:0,g:0,b:0},Ne={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Us(c,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(t-c)*6*e:e<1/2?t:e<2/3?c+(t-c)*6*(2/3-e):c}function Hi(c,t){return t.r=c.r,t.g=c.g,t.b=c.b,t}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=rc(t,1),e=ve(e,0,1),n=ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Us(o,s,t+1/3),this.g=Us(o,s,t),this.b=Us(o,s,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=He){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,pe.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,pe.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const a=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,l,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,pe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,pe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=He){const n=Pa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return pe.fromWorkingColorSpace(Hi(this,Qt),t),ve(Qt.r*255,0,255)<<16^ve(Qt.g*255,0,255)<<8^ve(Qt.b*255,0,255)<<0}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Hi(this,Qt),e);const n=Qt.r,i=Qt.g,s=Qt.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let a,l;const h=(r+o)/2;if(r===o)a=0,l=0;else{const d=o-r;switch(l=h<=.5?d/(o+r):d/(2-o-r),o){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return t.h=a,t.s=l,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Hi(this,Qt),e),t.r=Qt.r,t.g=Qt.g,t.b=Qt.b,t}getStyle(t=He){return pe.fromWorkingColorSpace(Hi(this,Qt),t),t!==He?`color(${t} ${Qt.r} ${Qt.g} ${Qt.b})`:`rgb(${Qt.r*255|0},${Qt.g*255|0},${Qt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ne),Ne.h+=t,Ne.s+=e,Ne.l+=n,this.setHSL(Ne.h,Ne.s,Ne.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ne),t.getHSL(Wi);const n=Fs(Ne.h,Wi.h,e),i=Fs(Ne.s,Wi.s,e),s=Fs(Ne.l,Wi.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}kt.NAMES=Pa;let qn;class Ra{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qn===void 0&&(qn=_s("canvas")),qn.width=t.width,qn.height=t.height;const n=qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_s("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Fn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Da{constructor(t=null){this.isSource=!0,this.uuid=Ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Gs(i[o].image)):s.push(Gs(i[o]))}else s=Gs(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Gs(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Ra.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oc=0;class Te extends Vn{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Be,i=Be,s=Re,o=ys,r=Ue,a=On,l=Te.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=Ni(),this.name="",this.source=new Da(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=r,this.internalFormat=null,this.type=a,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ta)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yr:t.x=t.x-Math.floor(t.x);break;case Be:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yr:t.y=t.y-Math.floor(t.y);break;case Be:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Ta;Te.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const a=t.elements,l=a[0],h=a[4],d=a[8],u=a[1],m=a[5],g=a[9],p=a[2],f=a[6],_=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,b=(m+1)/2,v=(_+1)/2,T=(h+u)/4,D=(d+p)/4,y=(g+f)/4;return w>b&&w>v?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=T/n,s=D/n):b>v?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=y/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=D/s,i=y/s),this.set(n,i,s,e),this}let x=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-p)/x,this.z=(u-h)/x,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Un extends Vn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Re,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Da(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ia extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xe,this.minFilter=xe,this.wrapR=Be,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Gn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,r){let a=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(r===0){t[e+0]=a,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(d!==p||a!==u||l!==m||h!==g){let f=1-r;const _=a*u+l*m+h*g+d*p,x=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const v=Math.sqrt(w),T=Math.atan2(v,_*x);f=Math.sin(f*T)/v,r=Math.sin(r*T)/v}const b=r*x;if(a=a*f+u*b,l=l*f+m*b,h=h*f+g*b,d=d*f+p*b,f===1-r){const v=1/Math.sqrt(a*a+l*l+h*h+d*d);a*=v,l*=v,h*=v,d*=v}}t[e]=a,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const r=n[i],a=n[i+1],l=n[i+2],h=n[i+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return t[e]=r*g+h*d+a*m-l*u,t[e+1]=a*g+h*u+l*d-r*m,t[e+2]=l*g+h*m+r*u-a*d,t[e+3]=h*g-r*d-a*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,o=t._order,r=Math.cos,a=Math.sin,l=r(n/2),h=r(i/2),d=r(s/2),u=a(n/2),m=a(i/2),g=a(s/2);switch(o){case"XYZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d+u*m*g;break;case"YZX":this._x=u*h*d+l*m*g,this._y=l*m*d+u*h*g,this._z=l*h*g-u*m*d,this._w=l*h*d-u*m*g;break;case"XZY":this._x=u*h*d-l*m*g,this._y=l*m*d-u*h*g,this._z=l*h*g+u*m*d,this._w=l*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],r=e[5],a=e[9],l=e[2],h=e[6],d=e[10],u=n+r+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-a)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(h-a)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(a+h)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(a+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,r=e._x,a=e._y,l=e._z,h=e._w;return this._x=n*h+o*r+i*l-s*a,this._y=i*h+o*a+s*r-n*l,this._z=s*h+o*l+n*a-i*r,this._w=o*h-n*r-i*a-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const a=1-r*r;if(a<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),h=Math.atan2(l,r),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z,a=t.w,l=a*e+o*i-r*n,h=a*n+r*e-s*i,d=a*i+s*n-o*e,u=-s*e-o*n-r*i;return this.x=l*a+u*-s+h*-r-d*-o,this.y=h*a+u*-o+d*-s-l*-r,this.z=d*a+u*-r+l*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,r=e.y,a=e.z;return this.x=i*a-s*r,this.y=s*o-n*a,this.z=n*r-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new k,Mo=new Gn;class zi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let a=0,l=t.length;a<l;a+=3){const h=t[a],d=t[a+1],u=t[a+2];h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let a=0,l=t.count;a<l;a++){const h=t.getX(a),d=t.getY(a),u=t.getZ(a);h<e&&(e=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>o&&(o=d),u>r&&(r=u)}return this.min.set(e,n,i),this.max.set(s,o,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)En.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(En)}else n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox),Vs.applyMatrix4(t.matrixWorld),this.union(Vs);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vi),qi.subVectors(this.max,vi),Xn.subVectors(t.a,vi),jn.subVectors(t.b,vi),Yn.subVectors(t.c,vi),un.subVectors(jn,Xn),dn.subVectors(Yn,jn),Tn.subVectors(Xn,Yn);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-Tn.z,Tn.y,un.z,0,-un.x,dn.z,0,-dn.x,Tn.z,0,-Tn.x,-un.y,un.x,0,-dn.y,dn.x,0,-Tn.y,Tn.x,0];return!Ws(e,Xn,jn,Yn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Ws(e,Xn,jn,Yn,qi))?!1:(Xi.crossVectors(un,dn),e=[Xi.x,Xi.y,Xi.z],Ws(e,Xn,jn,Yn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return En.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(En).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ke=[new k,new k,new k,new k,new k,new k,new k,new k],En=new k,Vs=new zi,Xn=new k,jn=new k,Yn=new k,un=new k,dn=new k,Tn=new k,vi=new k,qi=new k,Xi=new k,An=new k;function Ws(c,t,e,n,i){for(let s=0,o=c.length-3;s<=o;s+=3){An.fromArray(c,s);const r=i.x*Math.abs(An.x)+i.y*Math.abs(An.y)+i.z*Math.abs(An.z),a=t.dot(An),l=e.dot(An),h=n.dot(An);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>r)return!1}return!0}const lc=new zi,yi=new k,Hs=new k;let Ar=class{constructor(t=new k,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):lc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yi.subVectors(t,this.center);const e=yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(yi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yi.copy(t.center).add(Hs)),this.expandByPoint(yi.copy(t.center).sub(Hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Je=new k,qs=new k,ji=new k,fn=new k,Xs=new k,Yi=new k,js=new k;let cc=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.direction).multiplyScalar(e).add(this.origin),Je.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){qs.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(qs);const s=t.distanceTo(e)*.5,o=-this.direction.dot(ji),r=fn.dot(this.direction),a=-fn.dot(ji),l=fn.lengthSq(),h=Math.abs(1-o*o);let d,u,m,g;if(h>0)if(d=o*a-r,u=o*r-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const p=1/h;d*=p,u*=p,m=d*(d+o*u+2*r)+u*(o*d+u+2*a)+l}else u=s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;else u=-s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;else u<=-g?(d=Math.max(0,-(-o*s+r)),u=d>0?-s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),m=u*(u+2*a)+l):(d=Math.max(0,-(o*s+r)),u=d>0?s:Math.min(Math.max(-s,-a),s),m=-d*d+u*(u+2*a)+l);else u=o>0?-s:s,d=Math.max(0,-(o*u+r)),m=-d*d+u*(u+2*a)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ji).multiplyScalar(u).add(qs),m}intersectSphere(t,e){Je.subVectors(t.center,this.origin);const n=Je.dot(this.direction),i=Je.dot(Je)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,a=n+o;return r<0&&a<0?null:r<0?this.at(a,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,r,a;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(t.min.z-u.z)*d,a=(t.max.z-u.z)*d):(r=(t.max.z-u.z)*d,a=(t.min.z-u.z)*d),n>a||r>i)||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,i,s){Xs.subVectors(e,t),Yi.subVectors(n,t),js.crossVectors(Xs,Yi);let o=this.direction.dot(js),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;fn.subVectors(this.origin,t);const a=r*this.direction.dot(Yi.crossVectors(fn,Yi));if(a<0)return null;const l=r*this.direction.dot(Xs.cross(fn));if(l<0||a+l>o)return null;const h=-r*fn.dot(js);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ee{constructor(){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,o,r,a,l,h,d,u,m,g,p,f){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=r,_[13]=a,_[2]=l,_[6]=h,_[10]=d,_[14]=u,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Zn.setFromMatrixColumn(t,0).length(),s=1/Zn.setFromMatrixColumn(t,1).length(),o=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),r=Math.sin(n),a=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=o*h,m=o*d,g=r*h,p=r*d;e[0]=a*h,e[4]=-a*d,e[8]=l,e[1]=m+g*l,e[5]=u-p*l,e[9]=-r*a,e[2]=p-u*l,e[6]=g+m*l,e[10]=o*a}else if(t.order==="YXZ"){const u=a*h,m=a*d,g=l*h,p=l*d;e[0]=u+p*r,e[4]=g*r-m,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-r,e[2]=m*r-g,e[6]=p+u*r,e[10]=o*a}else if(t.order==="ZXY"){const u=a*h,m=a*d,g=l*h,p=l*d;e[0]=u-p*r,e[4]=-o*d,e[8]=g+m*r,e[1]=m+g*r,e[5]=o*h,e[9]=p-u*r,e[2]=-o*l,e[6]=r,e[10]=o*a}else if(t.order==="ZYX"){const u=o*h,m=o*d,g=r*h,p=r*d;e[0]=a*h,e[4]=g*l-m,e[8]=u*l+p,e[1]=a*d,e[5]=p*l+u,e[9]=m*l-g,e[2]=-l,e[6]=r*a,e[10]=o*a}else if(t.order==="YZX"){const u=o*a,m=o*l,g=r*a,p=r*l;e[0]=a*h,e[4]=p-u*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-r*h,e[2]=-l*h,e[6]=m*d+g,e[10]=u-p*d}else if(t.order==="XZY"){const u=o*a,m=o*l,g=r*a,p=r*l;e[0]=a*h,e[4]=-d,e[8]=l*h,e[1]=u*d+p,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=r*h,e[10]=p*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hc,t,uc)}lookAt(t,e,n){const i=this.elements;return we.subVectors(t,e),we.lengthSq()===0&&(we.z=1),we.normalize(),pn.crossVectors(n,we),pn.lengthSq()===0&&(Math.abs(n.z)===1?we.x+=1e-4:we.z+=1e-4,we.normalize(),pn.crossVectors(n,we)),pn.normalize(),Zi.crossVectors(we,pn),i[0]=pn.x,i[4]=Zi.x,i[8]=we.x,i[1]=pn.y,i[5]=Zi.y,i[9]=we.y,i[2]=pn.z,i[6]=Zi.z,i[10]=we.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],r=n[4],a=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],x=n[3],w=n[7],b=n[11],v=n[15],T=i[0],D=i[4],y=i[8],C=i[12],I=i[1],W=i[5],J=i[9],R=i[13],P=i[2],N=i[6],F=i[10],K=i[14],G=i[3],Z=i[7],Q=i[11],H=i[15];return s[0]=o*T+r*I+a*P+l*G,s[4]=o*D+r*W+a*N+l*Z,s[8]=o*y+r*J+a*F+l*Q,s[12]=o*C+r*R+a*K+l*H,s[1]=h*T+d*I+u*P+m*G,s[5]=h*D+d*W+u*N+m*Z,s[9]=h*y+d*J+u*F+m*Q,s[13]=h*C+d*R+u*K+m*H,s[2]=g*T+p*I+f*P+_*G,s[6]=g*D+p*W+f*N+_*Z,s[10]=g*y+p*J+f*F+_*Q,s[14]=g*C+p*R+f*K+_*H,s[3]=x*T+w*I+b*P+v*G,s[7]=x*D+w*W+b*N+v*Z,s[11]=x*y+w*J+b*F+v*Q,s[15]=x*C+w*R+b*K+v*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],r=t[5],a=t[9],l=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],p=t[7],f=t[11],_=t[15];return g*(+s*a*d-i*l*d-s*r*u+n*l*u+i*r*m-n*a*m)+p*(+e*a*m-e*l*u+s*o*u-i*o*m+i*l*h-s*a*h)+f*(+e*l*d-e*r*m-s*o*d+n*o*m+s*r*h-n*l*h)+_*(-i*r*h-e*a*d+e*r*u+i*o*d-n*o*u+n*a*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],r=t[5],a=t[6],l=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],p=t[13],f=t[14],_=t[15],x=d*f*l-p*u*l+p*a*m-r*f*m-d*a*_+r*u*_,w=g*u*l-h*f*l-g*a*m+o*f*m+h*a*_-o*u*_,b=h*p*l-g*d*l+g*r*m-o*p*m-h*r*_+o*d*_,v=g*d*a-h*p*a-g*r*u+o*p*u+h*r*f-o*d*f,T=e*x+n*w+i*b+s*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/T;return t[0]=x*D,t[1]=(p*u*s-d*f*s-p*i*m+n*f*m+d*i*_-n*u*_)*D,t[2]=(r*f*s-p*a*s+p*i*l-n*f*l-r*i*_+n*a*_)*D,t[3]=(d*a*s-r*u*s-d*i*l+n*u*l+r*i*m-n*a*m)*D,t[4]=w*D,t[5]=(h*f*s-g*u*s+g*i*m-e*f*m-h*i*_+e*u*_)*D,t[6]=(g*a*s-o*f*s-g*i*l+e*f*l+o*i*_-e*a*_)*D,t[7]=(o*u*s-h*a*s+h*i*l-e*u*l-o*i*m+e*a*m)*D,t[8]=b*D,t[9]=(g*d*s-h*p*s-g*n*m+e*p*m+h*n*_-e*d*_)*D,t[10]=(o*p*s-g*r*s+g*n*l-e*p*l-o*n*_+e*r*_)*D,t[11]=(h*r*s-o*d*s-h*n*l+e*d*l+o*n*m-e*r*m)*D,t[12]=v*D,t[13]=(h*p*i-g*d*i+g*n*u-e*p*u-h*n*f+e*d*f)*D,t[14]=(g*r*i-o*p*i-g*n*a+e*p*a+o*n*f-e*r*f)*D,t[15]=(o*d*i-h*r*i+h*n*a-e*d*a-o*n*u+e*r*u)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,r=t.y,a=t.z,l=s*o,h=s*r;return this.set(l*o+n,l*r-i*a,l*a+i*r,0,l*r+i*a,h*r+n,h*a-i*o,0,l*a-i*r,h*a+i*o,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,r=e._z,a=e._w,l=s+s,h=o+o,d=r+r,u=s*l,m=s*h,g=s*d,p=o*h,f=o*d,_=r*d,x=a*l,w=a*h,b=a*d,v=n.x,T=n.y,D=n.z;return i[0]=(1-(p+_))*v,i[1]=(m+b)*v,i[2]=(g-w)*v,i[3]=0,i[4]=(m-b)*T,i[5]=(1-(u+_))*T,i[6]=(f+x)*T,i[7]=0,i[8]=(g+w)*D,i[9]=(f-x)*D,i[10]=(1-(u+p))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Zn.set(i[0],i[1],i[2]).length();const o=Zn.set(i[4],i[5],i[6]).length(),r=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ze.copy(this);const l=1/s,h=1/o,d=1/r;return ze.elements[0]*=l,ze.elements[1]*=l,ze.elements[2]*=l,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=d,ze.elements[9]*=d,ze.elements[10]*=d,e.setFromRotationMatrix(ze),n.x=s,n.y=o,n.z=r,this}makePerspective(t,e,n,i,s,o){const r=this.elements,a=2*s/(e-t),l=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),u=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=a,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=l,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=u,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,o){const r=this.elements,a=1/(e-t),l=1/(n-i),h=1/(o-s),d=(e+t)*a,u=(n+i)*l,m=(o+s)*h;return r[0]=2*a,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*l,r[9]=0,r[13]=-u,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zn=new k,ze=new ee,hc=new k(0,0,0),uc=new k(1,1,1),pn=new k,Zi=new k,we=new k,bo=new ee,wo=new Gn;class Fi{constructor(t=0,e=0,n=0,i=Fi.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],r=i[8],a=i[1],l=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wo.setFromEuler(this),this.setFromQuaternion(wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Fi.DefaultOrder="XYZ";Fi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Na{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dc=0;const So=new k,$n=new Gn,Qe=new ee,$i=new k,Mi=new k,fc=new k,pc=new Gn,Eo=new k(1,0,0),To=new k(0,1,0),Ao=new k(0,0,1),mc={type:"added"},Co={type:"removed"};class ue extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DefaultUp.clone();const t=new k,e=new Fi,n=new Gn,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ee}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=ue.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ue.DefaultMatrixWorldAutoUpdate,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(Eo,t)}rotateY(t){return this.rotateOnAxis(To,t)}rotateZ(t){return this.rotateOnAxis(Ao,t)}translateOnAxis(t,e){return So.copy(t).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eo,t)}translateY(t){return this.translateOnAxis(To,t)}translateZ(t){return this.translateOnAxis(Ao,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$i.copy(t):$i.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Mi,$i,this.up):Qe.lookAt($i,Mi,this.up),this.quaternion.setFromRotationMatrix(Qe),i&&(Qe.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(Qe),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(mc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Co)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Co)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,t,fc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,pc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,a){return r[a.uuid]===void 0&&(r[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const a=r.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){const d=a[l];s(t.shapes,d)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let a=0,l=this.material.length;a<l;a++)r.push(s(t.materials,this.material[a]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const a=this.animations[r];i.animations.push(s(t.animations,a))}}if(e){const r=o(t.geometries),a=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);r.length>0&&(n.geometries=r),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const a=[];for(const l in r){const h=r[l];delete h.metadata,a.push(h)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DefaultUp=new k(0,1,0);ue.DefaultMatrixAutoUpdate=!0;ue.DefaultMatrixWorldAutoUpdate=!0;const Fe=new k,tn=new k,Ys=new k,en=new k,Kn=new k,Jn=new k,Lo=new k,Zs=new k,$s=new k,Ks=new k;class ln{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fe.subVectors(t,e),i.cross(Fe);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Fe.subVectors(i,e),tn.subVectors(n,e),Ys.subVectors(t,e);const o=Fe.dot(Fe),r=Fe.dot(tn),a=Fe.dot(Ys),l=tn.dot(tn),h=tn.dot(Ys),d=o*l-r*r;if(d===0)return s.set(-2,-1,-1);const u=1/d,m=(l*a-r*h)*u,g=(o*h-r*a)*u;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(t,e,n,i,s,o,r,a){return this.getBarycoord(t,e,n,i,en),a.set(0,0),a.addScaledVector(s,en.x),a.addScaledVector(o,en.y),a.addScaledVector(r,en.z),a}static isFrontFacing(t,e,n,i){return Fe.subVectors(n,e),tn.subVectors(t,e),Fe.cross(tn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Fe.cross(tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ln.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,r;Kn.subVectors(i,n),Jn.subVectors(s,n),Zs.subVectors(t,n);const a=Kn.dot(Zs),l=Jn.dot(Zs);if(a<=0&&l<=0)return e.copy(n);$s.subVectors(t,i);const h=Kn.dot($s),d=Jn.dot($s);if(h>=0&&d<=h)return e.copy(i);const u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return o=a/(a-h),e.copy(n).addScaledVector(Kn,o);Ks.subVectors(t,s);const m=Kn.dot(Ks),g=Jn.dot(Ks);if(g>=0&&m<=g)return e.copy(s);const p=m*l-a*g;if(p<=0&&l>=0&&g<=0)return r=l/(l-g),e.copy(n).addScaledVector(Jn,r);const f=h*g-m*d;if(f<=0&&d-h>=0&&m-g>=0)return Lo.subVectors(s,i),r=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Lo,r);const _=1/(f+p+u);return o=p*_,r=u*_,e.copy(n).addScaledVector(Kn,o).addScaledVector(Jn,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let gc=0,Oi=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=ci,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Sa,this.blendDst=Ea,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const a=s[r];delete a.metadata,o.push(a)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class za extends Oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yt=new k,Ki=new Tt;class je{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=_o,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ki.fromBufferAttribute(this,e),Ki.applyMatrix3(t),this.setXY(e,Ki.x,Ki.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix3(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyMatrix4(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.applyNormalMatrix(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yt.fromBufferAttribute(this,e),Yt.transformDirection(t),this.setXYZ(e,Yt.x,Yt.y,Yt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_o&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Fa extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Oa extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ye extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _c=0;const Pe=new ee,Js=new ue,Qn=new k,Se=new zi,bi=new zi,ae=new k;class yn extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(La(t)?Oa:Fa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Se.setFromBufferAttribute(s),this.morphTargetsRelative?(ae.addVectors(this.boundingBox.min,Se.min),this.boundingBox.expandByPoint(ae),ae.addVectors(this.boundingBox.max,Se.max),this.boundingBox.expandByPoint(ae)):(this.boundingBox.expandByPoint(Se.min),this.boundingBox.expandByPoint(Se.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Se.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const r=e[s];bi.setFromBufferAttribute(r),this.morphTargetsRelative?(ae.addVectors(Se.min,bi.min),Se.expandByPoint(ae),ae.addVectors(Se.max,bi.max),Se.expandByPoint(ae)):(Se.expandByPoint(bi.min),Se.expandByPoint(bi.max))}Se.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)ae.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ae));if(e)for(let s=0,o=e.length;s<o;s++){const r=e[s],a=this.morphTargetsRelative;for(let l=0,h=r.count;l<h;l++)ae.fromBufferAttribute(r,l),a&&(Qn.fromBufferAttribute(t,l),ae.add(Qn)),i=Math.max(i,n.distanceToSquared(ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*r),4));const a=this.getAttribute("tangent").array,l=[],h=[];for(let I=0;I<r;I++)l[I]=new k,h[I]=new k;const d=new k,u=new k,m=new k,g=new Tt,p=new Tt,f=new Tt,_=new k,x=new k;function w(I,W,J){d.fromArray(i,I*3),u.fromArray(i,W*3),m.fromArray(i,J*3),g.fromArray(o,I*2),p.fromArray(o,W*2),f.fromArray(o,J*2),u.sub(d),m.sub(d),p.sub(g),f.sub(g);const R=1/(p.x*f.y-f.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(R),x.copy(m).multiplyScalar(p.x).addScaledVector(u,-f.x).multiplyScalar(R),l[I].add(_),l[W].add(_),l[J].add(_),h[I].add(x),h[W].add(x),h[J].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let I=0,W=b.length;I<W;++I){const J=b[I],R=J.start,P=J.count;for(let N=R,F=R+P;N<F;N+=3)w(n[N+0],n[N+1],n[N+2])}const v=new k,T=new k,D=new k,y=new k;function C(I){D.fromArray(s,I*3),y.copy(D);const W=l[I];v.copy(W),v.sub(D.multiplyScalar(D.dot(W))).normalize(),T.crossVectors(y,W);const R=T.dot(h[I])<0?-1:1;a[I*4]=v.x,a[I*4+1]=v.y,a[I*4+2]=v.z,a[I*4+3]=R}for(let I=0,W=b.length;I<W;++I){const J=b[I],R=J.start,P=J.count;for(let N=R,F=R+P;N<F;N+=3)C(n[N+0]),C(n[N+1]),C(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new k,s=new k,o=new k,r=new k,a=new k,l=new k,h=new k,d=new k;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),p=t.getX(u+1),f=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,f),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),r.add(h),a.add(h),l.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ae.fromBufferAttribute(t,e),ae.normalize(),t.setXYZ(e,ae.x,ae.y,ae.z)}toNonIndexed(){function t(r,a){const l=r.array,h=r.itemSize,d=r.normalized,u=new l.constructor(a.length*h);let m=0,g=0;for(let p=0,f=a.length;p<f;p++){r.isInterleavedBufferAttribute?m=a[p]*r.data.stride+r.offset:m=a[p]*h;for(let _=0;_<h;_++)u[g++]=l[m++]}return new je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,n=this.index.array,i=this.attributes;for(const r in i){const a=i[r],l=t(a,n);e.setAttribute(r,l)}const s=this.morphAttributes;for(const r in s){const a=[],l=s[r];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=t(u,n);a.push(m)}e.morphAttributes[r]=a}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,a=o.length;r<a;r++){const l=o[r];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(t[l]=a[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const l=n[a];t.data.attributes[a]=l.toJSON(t.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(i[a]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new ee,ti=new cc,Qs=new Ar,mn=new k,gn=new k,_n=new k,tr=new k,er=new k,nr=new k,Ji=new k,Qi=new k,ts=new k,es=new Tt,ns=new Tt,is=new Tt,ir=new k,ss=new k;class Xe extends ue{constructor(t=new yn,e=new za){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),t.ray.intersectsSphere(Qs)===!1)||(Po.copy(s).invert(),ti.copy(t.ray).applyMatrix4(Po),n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,a=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,m=n.groups,g=n.drawRange;if(r!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],x=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(r.count,Math.min(_.start+_.count,g.start+g.count));for(let v=w,T=b;v<T;v+=3){const D=r.getX(v),y=r.getX(v+1),C=r.getX(v+2);o=rs(this,x,t,ti,a,l,h,d,u,D,y,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),f=Math.min(r.count,g.start+g.count);for(let _=p,x=f;_<x;_+=3){const w=r.getX(_),b=r.getX(_+1),v=r.getX(_+2);o=rs(this,i,t,ti,a,l,h,d,u,w,b,v),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],x=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let v=w,T=b;v<T;v+=3){const D=v,y=v+1,C=v+2;o=rs(this,x,t,ti,a,l,h,d,u,D,y,C),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let _=p,x=f;_<x;_+=3){const w=_,b=_+1,v=_+2;o=rs(this,i,t,ti,a,l,h,d,u,w,b,v),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}}function xc(c,t,e,n,i,s,o,r){let a;if(t.side===Ie?a=n.intersectTriangle(o,s,i,!0,r):a=n.intersectTriangle(i,s,o,t.side!==cn,r),a===null)return null;ss.copy(r),ss.applyMatrix4(c.matrixWorld);const l=e.ray.origin.distanceTo(ss);return l<e.near||l>e.far?null:{distance:l,point:ss.clone(),object:c}}function rs(c,t,e,n,i,s,o,r,a,l,h,d){mn.fromBufferAttribute(i,l),gn.fromBufferAttribute(i,h),_n.fromBufferAttribute(i,d);const u=c.morphTargetInfluences;if(s&&u){Ji.set(0,0,0),Qi.set(0,0,0),ts.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const f=u[g],_=s[g];f!==0&&(tr.fromBufferAttribute(_,l),er.fromBufferAttribute(_,h),nr.fromBufferAttribute(_,d),o?(Ji.addScaledVector(tr,f),Qi.addScaledVector(er,f),ts.addScaledVector(nr,f)):(Ji.addScaledVector(tr.sub(mn),f),Qi.addScaledVector(er.sub(gn),f),ts.addScaledVector(nr.sub(_n),f)))}mn.add(Ji),gn.add(Qi),_n.add(ts)}c.isSkinnedMesh&&(c.boneTransform(l,mn),c.boneTransform(h,gn),c.boneTransform(d,_n));const m=xc(c,t,e,n,mn,gn,_n,ir);if(m){r&&(es.fromBufferAttribute(r,l),ns.fromBufferAttribute(r,h),is.fromBufferAttribute(r,d),m.uv=ln.getUV(ir,mn,gn,_n,es,ns,is,new Tt)),a&&(es.fromBufferAttribute(a,l),ns.fromBufferAttribute(a,h),is.fromBufferAttribute(a,d),m.uv2=ln.getUV(ir,mn,gn,_n,es,ns,is,new Tt));const g={a:l,b:h,c:d,normal:new k,materialIndex:0};ln.getNormal(mn,gn,_n,g.normal),m.face=g}return m}class Bi extends yn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const a=[],l=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function g(p,f,_,x,w,b,v,T,D,y,C){const I=b/D,W=v/y,J=b/2,R=v/2,P=T/2,N=D+1,F=y+1;let K=0,G=0;const Z=new k;for(let Q=0;Q<F;Q++){const H=Q*W-R;for(let O=0;O<N;O++){const tt=O*I-J;Z[p]=tt*x,Z[f]=H*w,Z[_]=P,l.push(Z.x,Z.y,Z.z),Z[p]=0,Z[f]=0,Z[_]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(O/D),d.push(1-Q/y),K+=1}}for(let Q=0;Q<y;Q++)for(let H=0;H<D;H++){const O=u+H+N*Q,tt=u+H+N*(Q+1),nt=u+(H+1)+N*(Q+1),ot=u+(H+1)+N*Q;a.push(O,tt,ot),a.push(tt,nt,ot),G+=6}r.addGroup(m,G,C),m+=G,u+=K}}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(c){const t={};for(const e in c){t[e]={};for(const n in c[e]){const i=c[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function me(c){const t={};for(let e=0;e<c.length;e++){const n=mi(c[e]);for(const i in n)t[i]=n[i]}return t}function vc(c){const t=[];for(let e=0;e<c.length;e++)t.push(c[e].clone());return t}function Ba(c){return c.getRenderTarget()===null&&c.outputEncoding===Ht?He:Ri}const yc={clone:mi,merge:me};var Mc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends Oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mc,this.fragmentShader=bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=vc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ua extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class De extends Ua{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/a,e-=o.offsetY*n/l,i*=o.width/a,n*=o.height/l}const r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ei=-90,ni=1;class wc extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new De(ei,ni,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new De(ei,ni,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new De(ei,ni,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new De(ei,ni,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const a=new De(ei,ni,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const l=new De(ei,ni,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,a,l]=this.children,h=t.getRenderTarget(),d=t.toneMapping,u=t.xr.enabled;t.toneMapping=hn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,a),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Ga extends Te{constructor(t,e,n,i,s,o,r,a,l,h){t=t!==void 0?t:[],e=e!==void 0?e:di,super(t,e,n,i,s,o,r,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sc extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ga(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Re}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Bi(5,5,5),s=new kn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:vn});s.uniforms.tEquirect.value=e;const o=new Xe(i,s),r=e.minFilter;return e.minFilter===ys&&(e.minFilter=Re),new wc(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const sr=new k,Ec=new k,Tc=new Ee;let Ln=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=sr.subVectors(n,e).cross(Ec.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tc.getNormalMatrix(t),i=this.coplanarPoint(sr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const ii=new Ar,os=new k;class Cr{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,s=new Ln,o=new Ln){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7],u=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],x=n[14],w=n[15];return e[0].setComponents(r-i,d-a,p-u,w-f).normalize(),e[1].setComponents(r+i,d+a,p+u,w+f).normalize(),e[2].setComponents(r+s,d+l,p+m,w+_).normalize(),e[3].setComponents(r-s,d-l,p-m,w-_).normalize(),e[4].setComponents(r-o,d-h,p-g,w-x).normalize(),e[5].setComponents(r+o,d+h,p+g,w+x).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(os.x=i.normal.x>0?t.max.x:t.min.x,os.y=i.normal.y>0?t.max.y:t.min.y,os.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ka(){let c=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=c.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=c.requestAnimationFrame(i),t=!0)},stop:function(){c.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){c=s}}}function Ac(c,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,m=c.createBuffer();c.bindBuffer(h,m),c.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,m=h.updateRange;c.bindBuffer(d,l),m.count===-1?c.bufferSubData(d,0,u):(e?c.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):c.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(c.deleteBuffer(h.buffer),n.delete(l))}function a(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:r,update:a}}class Ms extends yn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,r=Math.floor(n),a=Math.floor(i),l=r+1,h=a+1,d=t/r,u=e/a,m=[],g=[],p=[],f=[];for(let _=0;_<h;_++){const x=_*u-o;for(let w=0;w<l;w++){const b=w*d-s;g.push(b,-x,0),p.push(0,0,1),f.push(w/r),f.push(1-_/a)}}for(let _=0;_<a;_++)for(let x=0;x<r;x++){const w=x+l*_,b=x+l*(_+1),v=x+1+l*(_+1),T=x+1+l*_;m.push(w,b,T),m.push(b,v,T)}this.setIndex(m),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(p,3)),this.setAttribute("uv",new Ye(f,2))}static fromJSON(t){return new Ms(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ic=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nc="vec3 transformed = vec3( position );",zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Oc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$c=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Jc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,th="gl_FragColor = linearToOutputTexel( gl_FragColor );",eh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ih=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ah=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ch=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ph=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_h=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,wh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Th=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ph=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ih=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Uh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Vh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Zh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$h=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,su=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ru=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ou=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,au=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,lu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,uu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,du=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_u=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,xu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,vu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Mu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Su=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Au=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ru=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Du=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Iu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ou=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ku=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ju=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$u=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ku=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,td=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,id=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Et={alphamap_fragment:Cc,alphamap_pars_fragment:Lc,alphatest_fragment:Pc,alphatest_pars_fragment:Rc,aomap_fragment:Dc,aomap_pars_fragment:Ic,begin_vertex:Nc,beginnormal_vertex:zc,bsdfs:Fc,iridescence_fragment:Oc,bumpmap_pars_fragment:Bc,clipping_planes_fragment:Uc,clipping_planes_pars_fragment:Gc,clipping_planes_pars_vertex:kc,clipping_planes_vertex:Vc,color_fragment:Wc,color_pars_fragment:Hc,color_pars_vertex:qc,color_vertex:Xc,common:jc,cube_uv_reflection_fragment:Yc,defaultnormal_vertex:Zc,displacementmap_pars_vertex:$c,displacementmap_vertex:Kc,emissivemap_fragment:Jc,emissivemap_pars_fragment:Qc,encodings_fragment:th,encodings_pars_fragment:eh,envmap_fragment:nh,envmap_common_pars_fragment:ih,envmap_pars_fragment:sh,envmap_pars_vertex:rh,envmap_physical_pars_fragment:_h,envmap_vertex:oh,fog_vertex:ah,fog_pars_vertex:lh,fog_fragment:ch,fog_pars_fragment:hh,gradientmap_pars_fragment:uh,lightmap_fragment:dh,lightmap_pars_fragment:fh,lights_lambert_fragment:ph,lights_lambert_pars_fragment:mh,lights_pars_begin:gh,lights_toon_fragment:xh,lights_toon_pars_fragment:vh,lights_phong_fragment:yh,lights_phong_pars_fragment:Mh,lights_physical_fragment:bh,lights_physical_pars_fragment:wh,lights_fragment_begin:Sh,lights_fragment_maps:Eh,lights_fragment_end:Th,logdepthbuf_fragment:Ah,logdepthbuf_pars_fragment:Ch,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Ph,map_fragment:Rh,map_pars_fragment:Dh,map_particle_fragment:Ih,map_particle_pars_fragment:Nh,metalnessmap_fragment:zh,metalnessmap_pars_fragment:Fh,morphcolor_vertex:Oh,morphnormal_vertex:Bh,morphtarget_pars_vertex:Uh,morphtarget_vertex:Gh,normal_fragment_begin:kh,normal_fragment_maps:Vh,normal_pars_fragment:Wh,normal_pars_vertex:Hh,normal_vertex:qh,normalmap_pars_fragment:Xh,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:Yh,clearcoat_pars_fragment:Zh,iridescence_pars_fragment:$h,output_fragment:Kh,packing:Jh,premultiplied_alpha_fragment:Qh,project_vertex:tu,dithering_fragment:eu,dithering_pars_fragment:nu,roughnessmap_fragment:iu,roughnessmap_pars_fragment:su,shadowmap_pars_fragment:ru,shadowmap_pars_vertex:ou,shadowmap_vertex:au,shadowmask_pars_fragment:lu,skinbase_vertex:cu,skinning_pars_vertex:hu,skinning_vertex:uu,skinnormal_vertex:du,specularmap_fragment:fu,specularmap_pars_fragment:pu,tonemapping_fragment:mu,tonemapping_pars_fragment:gu,transmission_fragment:_u,transmission_pars_fragment:xu,uv_pars_fragment:vu,uv_pars_vertex:yu,uv_vertex:Mu,uv2_pars_fragment:bu,uv2_pars_vertex:wu,uv2_vertex:Su,worldpos_vertex:Eu,background_vert:Tu,background_frag:Au,backgroundCube_vert:Cu,backgroundCube_frag:Lu,cube_vert:Pu,cube_frag:Ru,depth_vert:Du,depth_frag:Iu,distanceRGBA_vert:Nu,distanceRGBA_frag:zu,equirect_vert:Fu,equirect_frag:Ou,linedashed_vert:Bu,linedashed_frag:Uu,meshbasic_vert:Gu,meshbasic_frag:ku,meshlambert_vert:Vu,meshlambert_frag:Wu,meshmatcap_vert:Hu,meshmatcap_frag:qu,meshnormal_vert:Xu,meshnormal_frag:ju,meshphong_vert:Yu,meshphong_frag:Zu,meshphysical_vert:$u,meshphysical_frag:Ku,meshtoon_vert:Ju,meshtoon_frag:Qu,points_vert:td,points_frag:ed,shadow_vert:nd,shadow_frag:id,sprite_vert:sd,sprite_frag:rd},rt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ee},uv2Transform:{value:new Ee},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ee}}},qe={basic:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:me([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:me([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:me([rt.points,rt.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:me([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:me([rt.common,rt.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:me([rt.sprite,rt.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:me([rt.common,rt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:me([rt.lights,rt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};qe.physical={uniforms:me([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const as={r:0,b:0,g:0};function od(c,t,e,n,i,s,o){const r=new kt(0);let a=s===!0?0:1,l,h,d=null,u=0,m=null;function g(f,_){let x=!1,w=_.isScene===!0?_.background:null;w&&w.isTexture&&(w=(_.backgroundBlurriness>0?e:t).get(w));const b=c.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(w=null),w===null?p(r,a):w&&w.isColor&&(p(w,1),x=!0),(c.autoClear||x)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),w&&(w.isCubeTexture||w.mapping===vs)?(h===void 0&&(h=new Xe(new Bi(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:mi(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,D,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(d!==w||u!==w.version||m!==c.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,m=c.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Xe(new Ms(2,2),new kn({name:"BackgroundMaterial",uniforms:mi(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||m!==c.toneMapping)&&(l.material.needsUpdate=!0,d=w,u=w.version,m=c.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function p(f,_){f.getRGB(as,Ba(c)),n.buffers.color.setClear(as.r,as.g,as.b,_,o)}return{getClearColor:function(){return r},setClearColor:function(f,_=1){r.set(f),a=_,p(r,a)},getClearAlpha:function(){return a},setClearAlpha:function(f){a=f,p(r,a)},render:g}}function ad(c,t,e,n){const i=c.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},a=f(null);let l=a,h=!1;function d(P,N,F,K,G){let Z=!1;if(o){const Q=p(K,F,N);l!==Q&&(l=Q,m(l.object)),Z=_(P,K,F,G),Z&&x(P,K,F,G)}else{const Q=N.wireframe===!0;(l.geometry!==K.id||l.program!==F.id||l.wireframe!==Q)&&(l.geometry=K.id,l.program=F.id,l.wireframe=Q,Z=!0)}G!==null&&e.update(G,34963),(Z||h)&&(h=!1,y(P,N,F,K),G!==null&&c.bindBuffer(34963,e.get(G).buffer))}function u(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?c.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?c.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,N,F){const K=F.wireframe===!0;let G=r[P.id];G===void 0&&(G={},r[P.id]=G);let Z=G[N.id];Z===void 0&&(Z={},G[N.id]=Z);let Q=Z[K];return Q===void 0&&(Q=f(u()),Z[K]=Q),Q}function f(P){const N=[],F=[],K=[];for(let G=0;G<i;G++)N[G]=0,F[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:K,object:P,attributes:{},index:null}}function _(P,N,F,K){const G=l.attributes,Z=N.attributes;let Q=0;const H=F.getAttributes();for(const O in H)if(H[O].location>=0){const nt=G[O];let ot=Z[O];if(ot===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),nt===void 0||nt.attribute!==ot||ot&&nt.data!==ot.data)return!0;Q++}return l.attributesNum!==Q||l.index!==K}function x(P,N,F,K){const G={},Z=N.attributes;let Q=0;const H=F.getAttributes();for(const O in H)if(H[O].location>=0){let nt=Z[O];nt===void 0&&(O==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),O==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor));const ot={};ot.attribute=nt,nt&&nt.data&&(ot.data=nt.data),G[O]=ot,Q++}l.attributes=G,l.attributesNum=Q,l.index=K}function w(){const P=l.newAttributes;for(let N=0,F=P.length;N<F;N++)P[N]=0}function b(P){v(P,0)}function v(P,N){const F=l.newAttributes,K=l.enabledAttributes,G=l.attributeDivisors;F[P]=1,K[P]===0&&(c.enableVertexAttribArray(P),K[P]=1),G[P]!==N&&((n.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),G[P]=N)}function T(){const P=l.newAttributes,N=l.enabledAttributes;for(let F=0,K=N.length;F<K;F++)N[F]!==P[F]&&(c.disableVertexAttribArray(F),N[F]=0)}function D(P,N,F,K,G,Z){n.isWebGL2===!0&&(F===5124||F===5125)?c.vertexAttribIPointer(P,N,F,G,Z):c.vertexAttribPointer(P,N,F,K,G,Z)}function y(P,N,F,K){if(n.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();const G=K.attributes,Z=F.getAttributes(),Q=N.defaultAttributeValues;for(const H in Z){const O=Z[H];if(O.location>=0){let tt=G[H];if(tt===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){const nt=tt.normalized,ot=tt.itemSize,X=e.get(tt);if(X===void 0)continue;const At=X.buffer,mt=X.type,yt=X.bytesPerElement;if(tt.isInterleavedBufferAttribute){const pt=tt.data,Ft=pt.stride,St=tt.offset;if(pt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<O.locationSize;Mt++)v(O.location+Mt,pt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Mt=0;Mt<O.locationSize;Mt++)b(O.location+Mt);c.bindBuffer(34962,At);for(let Mt=0;Mt<O.locationSize;Mt++)D(O.location+Mt,ot/O.locationSize,mt,nt,Ft*yt,(St+ot/O.locationSize*Mt)*yt)}else{if(tt.isInstancedBufferAttribute){for(let pt=0;pt<O.locationSize;pt++)v(O.location+pt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<O.locationSize;pt++)b(O.location+pt);c.bindBuffer(34962,At);for(let pt=0;pt<O.locationSize;pt++)D(O.location+pt,ot/O.locationSize,mt,nt,ot*yt,ot/O.locationSize*pt*yt)}}else if(Q!==void 0){const nt=Q[H];if(nt!==void 0)switch(nt.length){case 2:c.vertexAttrib2fv(O.location,nt);break;case 3:c.vertexAttrib3fv(O.location,nt);break;case 4:c.vertexAttrib4fv(O.location,nt);break;default:c.vertexAttrib1fv(O.location,nt)}}}}T()}function C(){J();for(const P in r){const N=r[P];for(const F in N){const K=N[F];for(const G in K)g(K[G].object),delete K[G];delete N[F]}delete r[P]}}function I(P){if(r[P.id]===void 0)return;const N=r[P.id];for(const F in N){const K=N[F];for(const G in K)g(K[G].object),delete K[G];delete N[F]}delete r[P.id]}function W(P){for(const N in r){const F=r[N];if(F[P.id]===void 0)continue;const K=F[P.id];for(const G in K)g(K[G].object),delete K[G];delete F[P.id]}}function J(){R(),h=!0,l!==a&&(l=a,m(l.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:J,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:I,releaseStatesOfProgram:W,initAttributes:w,enableAttribute:b,disableUnusedAttributes:T}}function ld(c,t,e,n){const i=n.isWebGL2;let s;function o(l){s=l}function r(l,h){c.drawArrays(s,l,h),e.update(h,s,1)}function a(l,h,d){if(d===0)return;let u,m;if(i)u=c,m="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](s,l,h,d),e.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=a}function cd(c,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=c.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&c instanceof WebGL2ComputeRenderingContext;let r=e.precision!==void 0?e.precision:"highp";const a=s(r);a!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",a,"instead."),r=a);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=c.getParameter(34930),u=c.getParameter(35660),m=c.getParameter(3379),g=c.getParameter(34076),p=c.getParameter(34921),f=c.getParameter(36347),_=c.getParameter(36348),x=c.getParameter(36349),w=u>0,b=o||t.has("OES_texture_float"),v=w&&b,T=o?c.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:T}}function hd(c){const t=this;let e=null,n=0,i=!1,s=!1;const o=new Ln,r=new Ee,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,m){const g=d.length!==0||u||n!==0||i;return i=u,e=h(d,m,0),n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(d,u,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,_=c.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const x=s?0:n,w=x*4;let b=_.clippingState||null;a.value=b,b=h(g,u,w,m);for(let v=0;v!==w;++v)b[v]=e[v];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function l(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=a.value,g!==!0||f===null){const _=m+p*4,x=u.matrixWorldInverse;r.getNormalMatrix(x),(f===null||f.length<_)&&(f=new Float32Array(_));for(let w=0,b=m;w!==p;++w,b+=4)o.copy(d[w]).applyMatrix4(x,r),o.normal.toArray(f,b),f[b+3]=o.constant}a.value=f,a.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function ud(c){let t=new WeakMap;function e(o,r){return r===xr?o.mapping=di:r===vr&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===xr||r===vr)if(t.has(o)){const a=t.get(o).texture;return e(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const l=new Sc(a.height/2);return l.fromEquirectangularTexture(c,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const a=t.get(r);a!==void 0&&(t.delete(r),a.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Va extends Ua{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,r=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,r-=h*this.view.offsetY,a=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,Ro=[.125,.215,.35,.446,.526,.582],Rn=20,rr=new Va,Do=new kt;let or=null;const Pn=(1+Math.sqrt(5))/2,si=1/Pn,Io=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Pn,si),new k(0,Pn,-si),new k(si,0,Pn),new k(-si,0,Pn),new k(Pn,si,0),new k(-Pn,si,0)];class No{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){or=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(or),t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),or=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:Pi,format:Ue,encoding:Bn,depthBuffer:!1},i=zo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dd(s)),this._blurMaterial=fd(s,t,e)}return i}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,rr)}_sceneToCubeUV(t,e,n,i){const r=new De(90,1,e,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Do),h.toneMapping=hn,h.autoClear=!1;const m=new za({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new Xe(new Bi,m);let p=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(Do),p=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(r.up.set(0,a[_],0),r.lookAt(l[_],0,0)):x===1?(r.up.set(0,0,a[_]),r.lookAt(0,l[_],0)):(r.up.set(0,a[_],0),r.lookAt(0,0,l[_]));const w=this._cubeSize;ls(i,x*w,_>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===di||t.mapping===fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;const a=this._cubeSize;ls(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(o,rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Io[(i-1)%Io.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,r){const a=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Xe(this._lodPlanes[i],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Rn-1),p=s/g,f=isFinite(s)?1+Math.floor(h*p):Rn;f>Rn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Rn}`);const _=[];let x=0;for(let D=0;D<Rn;++D){const y=D/p,C=Math.exp(-y*y/2);_.push(C),D===0?x+=C:D<f&&(x+=2*C)}for(let D=0;D<_.length;D++)_[D]=_[D]/x;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=_,u.latitudinal.value=o==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;const b=this._sizeLods[i],v=3*b*(i>w-li?i-w+li:0),T=4*(this._cubeSize-b);ls(e,v,T,3*b,2*b),a.setRenderTarget(e),a.render(d,rr)}}function dd(c){const t=[],e=[],n=[];let i=c;const s=c-li+1+Ro.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);e.push(r);let a=1/r;o>c-li?a=Ro[o-c+li-1]:o===0&&(a=0),n.push(a);const l=1/(r-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,p=3,f=2,_=1,x=new Float32Array(p*g*m),w=new Float32Array(f*g*m),b=new Float32Array(_*g*m);for(let T=0;T<m;T++){const D=T%3*2/3-1,y=T>2?0:-1,C=[D,y,0,D+2/3,y,0,D+2/3,y+1,0,D,y,0,D+2/3,y+1,0,D,y+1,0];x.set(C,p*g*T),w.set(u,f*g*T);const I=[T,T,T,T,T,T];b.set(I,_*g*T)}const v=new yn;v.setAttribute("position",new je(x,p)),v.setAttribute("uv",new je(w,f)),v.setAttribute("faceIndex",new je(b,_)),t.push(v),i>li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zo(c,t,e){const n=new Un(c,t,e);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(c,t,e,n,i){c.viewport.set(t,e,n,i),c.scissor.set(t,e,n,i)}function fd(c,t,e){const n=new Float32Array(Rn),i=new k(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Fo(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Oo(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Lr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pd(c){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const a=r.mapping,l=a===xr||a===vr,h=a===di||a===fi;if(l||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new No(c)),d=l?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{const d=r.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new No(c));const u=l?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,u),r.addEventListener("dispose",s),u.texture}else return null}}}return r}function i(r){let a=0;const l=6;for(let h=0;h<l;h++)r[h]!==void 0&&a++;return a===l}function s(r){const a=r.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function md(c){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gd(c,t,e,n){const i={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const m=s.get(u);m&&(t.remove(m),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)t.update(u[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)t.update(p[f],34962)}}function l(d){const u=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const x=m.array;p=m.version;for(let w=0,b=x.length;w<b;w+=3){const v=x[w+0],T=x[w+1],D=x[w+2];u.push(v,T,T,D,D,v)}}else{const x=g.array;p=g.version;for(let w=0,b=x.length/3-1;w<b;w+=3){const v=w+0,T=w+1,D=w+2;u.push(v,T,T,D,D,v)}}const f=new(La(u)?Oa:Fa)(u,1);f.version=p;const _=s.get(d);_&&t.remove(_),s.set(d,f)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:r,update:a,getWireframeAttribute:h}}function _d(c,t,e,n){const i=n.isWebGL2;let s;function o(u){s=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function h(u,m){c.drawElements(s,m,r,u*a),e.update(m,s,1)}function d(u,m,g){if(g===0)return;let p,f;if(i)p=c,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,r,u*a,g),e.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function xd(c){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(e.calls++,o){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function vd(c,t){return c[0]-t[0]}function yd(c,t){return Math.abs(t[1])-Math.abs(c[1])}function Md(c,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new le,r=[];for(let l=0;l<8;l++)r[l]=[l,0];function a(l,h,d,u){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==f){let F=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var g=F;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let I=0;b===!0&&(I=1),v===!0&&(I=2),T===!0&&(I=3);let W=h.attributes.position.count*I,J=1;W>t.maxTextureSize&&(J=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const R=new Float32Array(W*J*4*f),P=new Ia(R,W,J,f);P.type=Nn,P.needsUpdate=!0;const N=I*4;for(let K=0;K<f;K++){const G=D[K],Z=y[K],Q=C[K],H=W*J*4*K;for(let O=0;O<G.count;O++){const tt=O*N;b===!0&&(o.fromBufferAttribute(G,O),R[H+tt+0]=o.x,R[H+tt+1]=o.y,R[H+tt+2]=o.z,R[H+tt+3]=0),v===!0&&(o.fromBufferAttribute(Z,O),R[H+tt+4]=o.x,R[H+tt+5]=o.y,R[H+tt+6]=o.z,R[H+tt+7]=0),T===!0&&(o.fromBufferAttribute(Q,O),R[H+tt+8]=o.x,R[H+tt+9]=o.y,R[H+tt+10]=o.z,R[H+tt+11]=Q.itemSize===4?o.w:1)}}_={count:f,texture:P,size:new Tt(W,J)},s.set(h,_),h.addEventListener("dispose",F)}let x=0;for(let b=0;b<m.length;b++)x+=m[b];const w=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(c,"morphTargetBaseInfluence",w),u.getUniforms().setValue(c,"morphTargetInfluences",m),u.getUniforms().setValue(c,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(c,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let f=n[h.id];if(f===void 0||f.length!==p){f=[];for(let v=0;v<p;v++)f[v]=[v,0];n[h.id]=f}for(let v=0;v<p;v++){const T=f[v];T[0]=v,T[1]=m[v]}f.sort(yd);for(let v=0;v<8;v++)v<p&&f[v][1]?(r[v][0]=f[v][0],r[v][1]=f[v][1]):(r[v][0]=Number.MAX_SAFE_INTEGER,r[v][1]=0);r.sort(vd);const _=h.morphAttributes.position,x=h.morphAttributes.normal;let w=0;for(let v=0;v<8;v++){const T=r[v],D=T[0],y=T[1];D!==Number.MAX_SAFE_INTEGER&&y?(_&&h.getAttribute("morphTarget"+v)!==_[D]&&h.setAttribute("morphTarget"+v,_[D]),x&&h.getAttribute("morphNormal"+v)!==x[D]&&h.setAttribute("morphNormal"+v,x[D]),i[v]=y,w+=y):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),x&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const b=h.morphTargetsRelative?1:1-w;u.getUniforms().setValue(c,"morphTargetBaseInfluence",b),u.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function bd(c,t,e,n){let i=new WeakMap;function s(a){const l=n.render.frame,h=a.geometry,d=t.get(a,h);return i.get(d)!==l&&(t.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),e.update(a.instanceMatrix,34962),a.instanceColor!==null&&e.update(a.instanceColor,34962)),d}function o(){i=new WeakMap}function r(a){const l=a.target;l.removeEventListener("dispose",r),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Wa=new Te,Ha=new Ia,qa=new ac,Xa=new Ga,Bo=[],Uo=[],Go=new Float32Array(16),ko=new Float32Array(9),Vo=new Float32Array(4);function _i(c,t,e){const n=c[0];if(n<=0||n>0)return c;const i=t*e;let s=Bo[i];if(s===void 0&&(s=new Float32Array(i),Bo[i]=s),t!==0){n.toArray(s,0);for(let o=1,r=0;o!==t;++o)r+=e,c[o].toArray(s,r)}return s}function ne(c,t){if(c.length!==t.length)return!1;for(let e=0,n=c.length;e<n;e++)if(c[e]!==t[e])return!1;return!0}function ie(c,t){for(let e=0,n=t.length;e<n;e++)c[e]=t[e]}function bs(c,t){let e=Uo[t];e===void 0&&(e=new Int32Array(t),Uo[t]=e);for(let n=0;n!==t;++n)e[n]=c.allocateTextureUnit();return e}function wd(c,t){const e=this.cache;e[0]!==t&&(c.uniform1f(this.addr,t),e[0]=t)}function Sd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;c.uniform2fv(this.addr,t),ie(e,t)}}function Ed(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ne(e,t))return;c.uniform3fv(this.addr,t),ie(e,t)}}function Td(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;c.uniform4fv(this.addr,t),ie(e,t)}}function Ad(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;c.uniformMatrix2fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;Vo.set(n),c.uniformMatrix2fv(this.addr,!1,Vo),ie(e,n)}}function Cd(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;c.uniformMatrix3fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;ko.set(n),c.uniformMatrix3fv(this.addr,!1,ko),ie(e,n)}}function Ld(c,t){const e=this.cache,n=t.elements;if(n===void 0){if(ne(e,t))return;c.uniformMatrix4fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,n))return;Go.set(n),c.uniformMatrix4fv(this.addr,!1,Go),ie(e,n)}}function Pd(c,t){const e=this.cache;e[0]!==t&&(c.uniform1i(this.addr,t),e[0]=t)}function Rd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;c.uniform2iv(this.addr,t),ie(e,t)}}function Dd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;c.uniform3iv(this.addr,t),ie(e,t)}}function Id(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;c.uniform4iv(this.addr,t),ie(e,t)}}function Nd(c,t){const e=this.cache;e[0]!==t&&(c.uniform1ui(this.addr,t),e[0]=t)}function zd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;c.uniform2uiv(this.addr,t),ie(e,t)}}function Fd(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;c.uniform3uiv(this.addr,t),ie(e,t)}}function Od(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;c.uniform4uiv(this.addr,t),ie(e,t)}}function Bd(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Wa,i)}function Ud(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||qa,i)}function Gd(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Xa,i)}function kd(c,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ha,i)}function Vd(c){switch(c){case 5126:return wd;case 35664:return Sd;case 35665:return Ed;case 35666:return Td;case 35674:return Ad;case 35675:return Cd;case 35676:return Ld;case 5124:case 35670:return Pd;case 35667:case 35671:return Rd;case 35668:case 35672:return Dd;case 35669:case 35673:return Id;case 5125:return Nd;case 36294:return zd;case 36295:return Fd;case 36296:return Od;case 35678:case 36198:case 36298:case 36306:case 35682:return Bd;case 35679:case 36299:case 36307:return Ud;case 35680:case 36300:case 36308:case 36293:return Gd;case 36289:case 36303:case 36311:case 36292:return kd}}function Wd(c,t){c.uniform1fv(this.addr,t)}function Hd(c,t){const e=_i(t,this.size,2);c.uniform2fv(this.addr,e)}function qd(c,t){const e=_i(t,this.size,3);c.uniform3fv(this.addr,e)}function Xd(c,t){const e=_i(t,this.size,4);c.uniform4fv(this.addr,e)}function jd(c,t){const e=_i(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,e)}function Yd(c,t){const e=_i(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,e)}function Zd(c,t){const e=_i(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,e)}function $d(c,t){c.uniform1iv(this.addr,t)}function Kd(c,t){c.uniform2iv(this.addr,t)}function Jd(c,t){c.uniform3iv(this.addr,t)}function Qd(c,t){c.uniform4iv(this.addr,t)}function tf(c,t){c.uniform1uiv(this.addr,t)}function ef(c,t){c.uniform2uiv(this.addr,t)}function nf(c,t){c.uniform3uiv(this.addr,t)}function sf(c,t){c.uniform4uiv(this.addr,t)}function rf(c,t,e){const n=this.cache,i=t.length,s=bs(e,i);ne(n,s)||(c.uniform1iv(this.addr,s),ie(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Wa,s[o])}function of(c,t,e){const n=this.cache,i=t.length,s=bs(e,i);ne(n,s)||(c.uniform1iv(this.addr,s),ie(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||qa,s[o])}function af(c,t,e){const n=this.cache,i=t.length,s=bs(e,i);ne(n,s)||(c.uniform1iv(this.addr,s),ie(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Xa,s[o])}function lf(c,t,e){const n=this.cache,i=t.length,s=bs(e,i);ne(n,s)||(c.uniform1iv(this.addr,s),ie(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ha,s[o])}function cf(c){switch(c){case 5126:return Wd;case 35664:return Hd;case 35665:return qd;case 35666:return Xd;case 35674:return jd;case 35675:return Yd;case 35676:return Zd;case 5124:case 35670:return $d;case 35667:case 35671:return Kd;case 35668:case 35672:return Jd;case 35669:case 35673:return Qd;case 5125:return tf;case 36294:return ef;case 36295:return nf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return lf}}class hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Vd(e.type)}}class uf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=cf(e.type)}}class df{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(t,e[r.id],n)}}}const ar=/(\w+)(\])?(\[|\.)?/g;function Wo(c,t){c.seq.push(t),c.map[t.id]=t}function ff(c,t,e){const n=c.name,i=n.length;for(ar.lastIndex=0;;){const s=ar.exec(n),o=ar.lastIndex;let r=s[1];const a=s[2]==="]",l=s[3];if(a&&(r=r|0),l===void 0||l==="["&&o+2===i){Wo(e,l===void 0?new hf(r,c,t):new uf(r,c,t));break}else{let d=e.map[r];d===void 0&&(d=new df(r),Wo(e,d)),e=d}}}class gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ff(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const r=e[s],a=n[r.id];a.needsUpdate!==!1&&r.setValue(t,a.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ho(c,t,e){const n=c.createShader(t);return c.shaderSource(n,e),c.compileShader(n),n}let pf=0;function mf(c,t){const e=c.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return n.join(`
`)}function gf(c){switch(c){case Bn:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function qo(c,t,e){const n=c.getShaderParameter(t,35713),i=c.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+mf(c.getShaderSource(t),o)}else return i}function _f(c,t){const e=gf(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function xf(c,t){let e;switch(t){case Nl:e="Linear";break;case zl:e="Reinhard";break;case Fl:e="OptimizedCineon";break;case Ol:e="ACESFilmic";break;case Bl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+c+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function vf(c){return[c.extensionDerivatives||c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function yf(c){const t=[];for(const e in c){const n=c[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mf(c,t){const e={},n=c.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(t,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[o]={type:s.type,location:c.getAttribLocation(t,o),locationSize:r}}return e}function Ci(c){return c!==""}function Xo(c,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jo(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sr(c){return c.replace(bf,wf)}function wf(c,t){const e=Et[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Sr(e)}const Sf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(c){return c.replace(Sf,Ef)}function Ef(c,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Zo(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tf(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===wa?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===dl?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function Af(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cf(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Lf(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Tr:t="ENVMAP_BLENDING_MULTIPLY";break;case Dl:t="ENVMAP_BLENDING_MIX";break;case Il:t="ENVMAP_BLENDING_ADD";break}return t}function Pf(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rf(c,t,e,n){const i=c.getContext(),s=e.defines;let o=e.vertexShader,r=e.fragmentShader;const a=Tf(e),l=Af(e),h=Cf(e),d=Lf(e),u=Pf(e),m=e.isWebGL2?"":vf(e),g=yf(s),p=i.createProgram();let f,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Ci).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(Ci).join(`
`),_.length>0&&(_+=`
`)):(f=[Zo(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),_=[m,Zo(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Et.tonemapping_pars_fragment:"",e.toneMapping!==hn?xf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Et.encodings_pars_fragment,_f("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ci).join(`
`)),o=Sr(o),o=Xo(o,e),o=jo(o,e),r=Sr(r),r=Xo(r,e),r=jo(r,e),o=Yo(o),r=Yo(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",e.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=x+f+o,b=x+_+r,v=Ho(i,35633,w),T=Ho(i,35632,b);if(i.attachShader(p,v),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),c.debug.checkShaderErrors){const C=i.getProgramInfoLog(p).trim(),I=i.getShaderInfoLog(v).trim(),W=i.getShaderInfoLog(T).trim();let J=!0,R=!0;if(i.getProgramParameter(p,35714)===!1){J=!1;const P=qo(i,v,"vertex"),N=qo(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+P+`
`+N)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(I===""||W==="")&&(R=!1);R&&(this.diagnostics={runnable:J,programLog:C,vertexShader:{log:I,prefix:f},fragmentShader:{log:W,prefix:_}})}i.deleteShader(v),i.deleteShader(T);let D;this.getUniforms=function(){return D===void 0&&(D=new gs(i,p)),D};let y;return this.getAttributes=function(){return y===void 0&&(y=Mf(i,p)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=pf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=T,this}let Df=0;class If{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nf(t),e.set(t,n)),n}}class Nf{constructor(t){this.id=Df++,this.code=t,this.usedTimes=0}}function zf(c,t,e,n,i,s,o){const r=new Na,a=new If,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,C,I,W,J){const R=W.fog,P=J.geometry,N=y.isMeshStandardMaterial?W.environment:null,F=(y.isMeshStandardMaterial?e:t).get(y.envMap||N),K=F&&F.mapping===vs?F.image.height:null,G=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=Z!==void 0?Z.length:0;let H=0;P.morphAttributes.position!==void 0&&(H=1),P.morphAttributes.normal!==void 0&&(H=2),P.morphAttributes.color!==void 0&&(H=3);let O,tt,nt,ot;if(G){const Ft=qe[G];O=Ft.vertexShader,tt=Ft.fragmentShader}else O=y.vertexShader,tt=y.fragmentShader,a.update(y),nt=a.getVertexShaderID(y),ot=a.getFragmentShaderID(y);const X=c.getRenderTarget(),At=y.alphaTest>0,mt=y.clearcoat>0,yt=y.iridescence>0;return{isWebGL2:h,shaderID:G,shaderName:y.type,vertexShader:O,fragmentShader:tt,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:u,outputEncoding:X===null?c.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Bn,map:!!y.map,matcap:!!y.matcap,envMap:!!F,envMapMode:F&&F.mapping,envMapCubeUVHeight:K,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===ic,tangentSpaceNormalMap:y.normalMapType===Ca,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ht,clearcoat:mt,clearcoatMap:mt&&!!y.clearcoatMap,clearcoatRoughnessMap:mt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:mt&&!!y.clearcoatNormalMap,iridescence:yt,iridescenceMap:yt&&!!y.iridescenceMap,iridescenceThicknessMap:yt&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ci,alphaMap:!!y.alphaMap,alphaTest:At,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!P.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:J.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:H,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:c.shadowMap.enabled&&I.length>0,shadowMapType:c.shadowMap.type,toneMapping:y.toneMapped?c.toneMapping:hn,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===Ie,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)C.push(I),C.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(_(C,y),x(C,y),C.push(c.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function _(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function x(y,C){r.disableAll(),C.isWebGL2&&r.enable(0),C.supportsVertexTextures&&r.enable(1),C.instancing&&r.enable(2),C.instancingColor&&r.enable(3),C.map&&r.enable(4),C.matcap&&r.enable(5),C.envMap&&r.enable(6),C.lightMap&&r.enable(7),C.aoMap&&r.enable(8),C.emissiveMap&&r.enable(9),C.bumpMap&&r.enable(10),C.normalMap&&r.enable(11),C.objectSpaceNormalMap&&r.enable(12),C.tangentSpaceNormalMap&&r.enable(13),C.clearcoat&&r.enable(14),C.clearcoatMap&&r.enable(15),C.clearcoatRoughnessMap&&r.enable(16),C.clearcoatNormalMap&&r.enable(17),C.iridescence&&r.enable(18),C.iridescenceMap&&r.enable(19),C.iridescenceThicknessMap&&r.enable(20),C.displacementMap&&r.enable(21),C.specularMap&&r.enable(22),C.roughnessMap&&r.enable(23),C.metalnessMap&&r.enable(24),C.gradientMap&&r.enable(25),C.alphaMap&&r.enable(26),C.alphaTest&&r.enable(27),C.vertexColors&&r.enable(28),C.vertexAlphas&&r.enable(29),C.vertexUvs&&r.enable(30),C.vertexTangents&&r.enable(31),C.uvsVertexOnly&&r.enable(32),y.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.skinning&&r.enable(4),C.morphTargets&&r.enable(5),C.morphNormals&&r.enable(6),C.morphColors&&r.enable(7),C.premultipliedAlpha&&r.enable(8),C.shadowMapEnabled&&r.enable(9),C.physicallyCorrectLights&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.specularIntensityMap&&r.enable(15),C.specularColorMap&&r.enable(16),C.transmission&&r.enable(17),C.transmissionMap&&r.enable(18),C.thicknessMap&&r.enable(19),C.sheen&&r.enable(20),C.sheenColorMap&&r.enable(21),C.sheenRoughnessMap&&r.enable(22),C.decodeVideoTexture&&r.enable(23),C.opaque&&r.enable(24),y.push(r.mask)}function w(y){const C=g[y.type];let I;if(C){const W=qe[C];I=yc.clone(W.uniforms)}else I=y.uniforms;return I}function b(y,C){let I;for(let W=0,J=l.length;W<J;W++){const R=l[W];if(R.cacheKey===C){I=R,++I.usedTimes;break}}return I===void 0&&(I=new Rf(c,C,y,s),l.push(I)),I}function v(y){if(--y.usedTimes===0){const C=l.indexOf(y);l[C]=l[l.length-1],l.pop(),y.destroy()}}function T(y){a.remove(y)}function D(){a.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:w,acquireProgram:b,releaseProgram:v,releaseShaderCache:T,programs:l,dispose:D}}function Ff(){let c=new WeakMap;function t(s){let o=c.get(s);return o===void 0&&(o={},c.set(s,o)),o}function e(s){c.delete(s)}function n(s,o,r){c.get(s)[o]=r}function i(){c=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Of(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function $o(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function Ko(){const c=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,m,g,p,f){let _=c[t];return _===void 0?(_={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},c[t]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=p,_.group=f),t++,_}function r(d,u,m,g,p,f){const _=o(d,u,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function a(d,u,m,g,p,f){const _=o(d,u,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(d,u){e.length>1&&e.sort(d||Of),n.length>1&&n.sort(u||$o),i.length>1&&i.sort(u||$o)}function h(){for(let d=t,u=c.length;d<u;d++){const m=c[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:a,finish:h,sort:l}}function Bf(){let c=new WeakMap;function t(n,i){const s=c.get(n);let o;return s===void 0?(o=new Ko,c.set(n,[o])):i>=s.length?(o=new Ko,s.push(o)):o=s[i],o}function e(){c=new WeakMap}return{get:t,dispose:e}}function Uf(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new kt};break;case"SpotLight":e={position:new k,direction:new k,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new k,halfWidth:new k,halfHeight:new k};break}return c[t.id]=e,e}}}function Gf(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=e,e}}}let kf=0;function Vf(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function Wf(c,t){const e=new Uf,n=Gf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new k);const s=new k,o=new ee,r=new ee;function a(h,d){let u=0,m=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let p=0,f=0,_=0,x=0,w=0,b=0,v=0,T=0,D=0,y=0;h.sort(Vf);const C=d!==!0?Math.PI:1;for(let W=0,J=h.length;W<J;W++){const R=h[W],P=R.color,N=R.intensity,F=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=P.r*N*C,m+=P.g*N*C,g+=P.b*N*C;else if(R.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],N);else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*C),R.castShadow){const Z=R.shadow,Q=n.get(R);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.directionalShadow[p]=Q,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=R.shadow.matrix,b++}i.directional[p]=G,p++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(P).multiplyScalar(N*C),G.distance=F,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[_]=G;const Z=R.shadow;if(R.map&&(i.spotLightMap[D]=R.map,D++,Z.updateMatrices(R),R.castShadow&&y++),i.spotLightMatrix[_]=Z.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.spotShadow[_]=Q,i.spotShadowMap[_]=K,T++}_++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(P).multiplyScalar(N),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=G,x++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity*C),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Z=R.shadow,Q=n.get(R);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,i.pointShadow[f]=Q,i.pointShadowMap[f]=K,i.pointShadowMatrix[f]=R.shadow.matrix,v++}i.point[f]=G,f++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(N*C),G.groundColor.copy(R.groundColor).multiplyScalar(N*C),i.hemi[w]=G,w++}}x>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=m,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==p||I.pointLength!==f||I.spotLength!==_||I.rectAreaLength!==x||I.hemiLength!==w||I.numDirectionalShadows!==b||I.numPointShadows!==v||I.numSpotShadows!==T||I.numSpotMaps!==D)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=x,i.point.length=f,i.hemi.length=w,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=T+D-y,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=y,I.directionalLength=p,I.pointLength=f,I.spotLength=_,I.rectAreaLength=x,I.hemiLength=w,I.numDirectionalShadows=b,I.numPointShadows=v,I.numSpotShadows=T,I.numSpotMaps=D,i.version=kf++)}function l(h,d){let u=0,m=0,g=0,p=0,f=0;const _=d.matrixWorldInverse;for(let x=0,w=h.length;x<w;x++){const b=h[x];if(b.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),u++}else if(b.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),r.identity(),o.copy(b.matrixWorld),o.premultiply(_),r.extractRotation(o),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),p++}else if(b.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const v=i.hemi[f];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(_),f++}}}return{setup:a,setupView:l,state:i}}function Jo(c,t){const e=new Wf(c,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function a(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function Hf(c,t){let e=new WeakMap;function n(s,o=0){const r=e.get(s);let a;return r===void 0?(a=new Jo(c,t),e.set(s,[a])):o>=r.length?(a=new Jo(c,t),r.push(a)):a=r[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class qf extends Oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xf extends Oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zf(c,t,e){let n=new Cr;const i=new Tt,s=new Tt,o=new le,r=new qf({depthPacking:nc}),a=new Xf,l={},h=e.maxTextureSize,d={0:Ie,1:ui,2:cn},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:jf,fragmentShader:Yf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Xe(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa,this.render=function(b,v,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const D=c.getRenderTarget(),y=c.getActiveCubeFace(),C=c.getActiveMipmapLevel(),I=c.state;I.setBlending(vn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let W=0,J=b.length;W<J;W++){const R=b[W],P=R.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const N=P.getFrameExtents();if(i.multiply(N),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,P.mapSize.y=s.y)),P.map===null){const K=this.type!==Ai?{minFilter:xe,magFilter:xe}:{};P.map=new Un(i.x,i.y,K),P.map.texture.name=R.name+".shadowMap",P.camera.updateProjectionMatrix()}c.setRenderTarget(P.map),c.clear();const F=P.getViewportCount();for(let K=0;K<F;K++){const G=P.getViewport(K);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),I.viewport(o),P.updateMatrices(R,K),n=P.getFrustum(),w(v,T,P.camera,R,this.type)}P.isPointLightShadow!==!0&&this.type===Ai&&_(P,T),P.needsUpdate=!1}f.needsUpdate=!1,c.setRenderTarget(D,y,C)};function _(b,v){const T=t.update(p);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Un(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,c.setRenderTarget(b.mapPass),c.clear(),c.renderBufferDirect(v,null,T,u,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,c.setRenderTarget(b.map),c.clear(),c.renderBufferDirect(v,null,T,m,p,null)}function x(b,v,T,D,y,C){let I=null;const W=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(W!==void 0?I=W:I=T.isPointLight===!0?a:r,c.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const J=I.uuid,R=v.uuid;let P=l[J];P===void 0&&(P={},l[J]=P);let N=P[R];N===void 0&&(N=I.clone(),P[R]=N),I=N}return I.visible=v.visible,I.wireframe=v.wireframe,C===Ai?I.side=v.shadowSide!==null?v.shadowSide:v.side:I.side=v.shadowSide!==null?v.shadowSide:d[v.side],I.alphaMap=v.alphaMap,I.alphaTest=v.alphaTest,I.map=v.map,I.clipShadows=v.clipShadows,I.clippingPlanes=v.clippingPlanes,I.clipIntersection=v.clipIntersection,I.displacementMap=v.displacementMap,I.displacementScale=v.displacementScale,I.displacementBias=v.displacementBias,I.wireframeLinewidth=v.wireframeLinewidth,I.linewidth=v.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(T.matrixWorld),I.nearDistance=D,I.farDistance=y),I}function w(b,v,T,D,y){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Ai)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const W=t.update(b),J=b.material;if(Array.isArray(J)){const R=W.groups;for(let P=0,N=R.length;P<N;P++){const F=R[P],K=J[F.materialIndex];if(K&&K.visible){const G=x(b,K,D,T.near,T.far,y);c.renderBufferDirect(T,null,W,G,b,F)}}}else if(J.visible){const R=x(b,J,D,T.near,T.far,y);c.renderBufferDirect(T,null,W,R,b,null)}}const I=b.children;for(let W=0,J=I.length;W<J;W++)w(I[W],v,T,D,y)}}function $f(c,t,e){const n=e.isWebGL2;function i(){let z=!1;const Y=new le;let et=null;const ht=new le(0,0,0,0);return{setMask:function(xt){et!==xt&&!z&&(c.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){z=xt},setClear:function(xt,Bt,re,ce,Mn){Mn===!0&&(xt*=ce,Bt*=ce,re*=ce),Y.set(xt,Bt,re,ce),ht.equals(Y)===!1&&(c.clearColor(xt,Bt,re,ce),ht.copy(Y))},reset:function(){z=!1,et=null,ht.set(-1,0,0,0)}}}function s(){let z=!1,Y=null,et=null,ht=null;return{setTest:function(xt){xt?At(2929):mt(2929)},setMask:function(xt){Y!==xt&&!z&&(c.depthMask(xt),Y=xt)},setFunc:function(xt){if(et!==xt){switch(xt){case El:c.depthFunc(512);break;case Tl:c.depthFunc(519);break;case Al:c.depthFunc(513);break;case _r:c.depthFunc(515);break;case Cl:c.depthFunc(514);break;case Ll:c.depthFunc(518);break;case Pl:c.depthFunc(516);break;case Rl:c.depthFunc(517);break;default:c.depthFunc(515)}et=xt}},setLocked:function(xt){z=xt},setClear:function(xt){ht!==xt&&(c.clearDepth(xt),ht=xt)},reset:function(){z=!1,Y=null,et=null,ht=null}}}function o(){let z=!1,Y=null,et=null,ht=null,xt=null,Bt=null,re=null,ce=null,Mn=null;return{setTest:function(Wt){z||(Wt?At(2960):mt(2960))},setMask:function(Wt){Y!==Wt&&!z&&(c.stencilMask(Wt),Y=Wt)},setFunc:function(Wt,Ze,Le){(et!==Wt||ht!==Ze||xt!==Le)&&(c.stencilFunc(Wt,Ze,Le),et=Wt,ht=Ze,xt=Le)},setOp:function(Wt,Ze,Le){(Bt!==Wt||re!==Ze||ce!==Le)&&(c.stencilOp(Wt,Ze,Le),Bt=Wt,re=Ze,ce=Le)},setLocked:function(Wt){z=Wt},setClear:function(Wt){Mn!==Wt&&(c.clearStencil(Wt),Mn=Wt)},reset:function(){z=!1,Y=null,et=null,ht=null,xt=null,Bt=null,re=null,ce=null,Mn=null}}}const r=new i,a=new s,l=new o,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,p=[],f=null,_=!1,x=null,w=null,b=null,v=null,T=null,D=null,y=null,C=!1,I=null,W=null,J=null,R=null,P=null;const N=c.getParameter(35661);let F=!1,K=0;const G=c.getParameter(7938);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=K>=2);let Z=null,Q={};const H=c.getParameter(3088),O=c.getParameter(2978),tt=new le().fromArray(H),nt=new le().fromArray(O);function ot(z,Y,et){const ht=new Uint8Array(4),xt=c.createTexture();c.bindTexture(z,xt),c.texParameteri(z,10241,9728),c.texParameteri(z,10240,9728);for(let Bt=0;Bt<et;Bt++)c.texImage2D(Y+Bt,0,6408,1,1,0,6408,5121,ht);return xt}const X={};X[3553]=ot(3553,3553,1),X[34067]=ot(34067,34069,6),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),At(2929),a.setFunc(_r),Jt(!1),de(kr),At(2884),se(vn);function At(z){u[z]!==!0&&(c.enable(z),u[z]=!0)}function mt(z){u[z]!==!1&&(c.disable(z),u[z]=!1)}function yt(z,Y){return m[z]!==Y?(c.bindFramebuffer(z,Y),m[z]=Y,n&&(z===36009&&(m[36160]=Y),z===36160&&(m[36009]=Y)),!0):!1}function pt(z,Y){let et=p,ht=!1;if(z)if(et=g.get(Y),et===void 0&&(et=[],g.set(Y,et)),z.isWebGLMultipleRenderTargets){const xt=z.texture;if(et.length!==xt.length||et[0]!==36064){for(let Bt=0,re=xt.length;Bt<re;Bt++)et[Bt]=36064+Bt;et.length=xt.length,ht=!0}}else et[0]!==36064&&(et[0]=36064,ht=!0);else et[0]!==1029&&(et[0]=1029,ht=!0);ht&&(e.isWebGL2?c.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function Ft(z){return f!==z?(c.useProgram(z),f=z,!0):!1}const St={[ai]:32774,[pl]:32778,[ml]:32779};if(n)St[qr]=32775,St[Xr]=32776;else{const z=t.get("EXT_blend_minmax");z!==null&&(St[qr]=z.MIN_EXT,St[Xr]=z.MAX_EXT)}const Mt={[gl]:0,[_l]:1,[xl]:768,[Sa]:770,[Sl]:776,[bl]:774,[yl]:772,[vl]:769,[Ea]:771,[wl]:775,[Ml]:773};function se(z,Y,et,ht,xt,Bt,re,ce){if(z===vn){_===!0&&(mt(3042),_=!1);return}if(_===!1&&(At(3042),_=!0),z!==fl){if(z!==x||ce!==C){if((w!==ai||T!==ai)&&(c.blendEquation(32774),w=ai,T=ai),ce)switch(z){case ci:c.blendFuncSeparate(1,771,1,771);break;case Vr:c.blendFunc(1,1);break;case Wr:c.blendFuncSeparate(0,769,0,1);break;case Hr:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ci:c.blendFuncSeparate(770,771,1,771);break;case Vr:c.blendFunc(770,1);break;case Wr:c.blendFuncSeparate(0,769,0,1);break;case Hr:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,v=null,D=null,y=null,x=z,C=ce}return}xt=xt||Y,Bt=Bt||et,re=re||ht,(Y!==w||xt!==T)&&(c.blendEquationSeparate(St[Y],St[xt]),w=Y,T=xt),(et!==b||ht!==v||Bt!==D||re!==y)&&(c.blendFuncSeparate(Mt[et],Mt[ht],Mt[Bt],Mt[re]),b=et,v=ht,D=Bt,y=re),x=z,C=!1}function Kt(z,Y){z.side===cn?mt(2884):At(2884);let et=z.side===Ie;Y&&(et=!et),Jt(et),z.blending===ci&&z.transparent===!1?se(vn):se(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const ht=z.stencilWrite;l.setTest(ht),ht&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ut(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?At(32926):mt(32926)}function Jt(z){I!==z&&(z?c.frontFace(2304):c.frontFace(2305),I=z)}function de(z){z!==hl?(At(2884),z!==W&&(z===kr?c.cullFace(1029):z===ul?c.cullFace(1028):c.cullFace(1032))):mt(2884),W=z}function qt(z){z!==J&&(F&&c.lineWidth(z),J=z)}function Ut(z,Y,et){z?(At(32823),(R!==Y||P!==et)&&(c.polygonOffset(Y,et),R=Y,P=et)):mt(32823)}function Ce(z){z?At(3089):mt(3089)}function ge(z){z===void 0&&(z=33984+N-1),Z!==z&&(c.activeTexture(z),Z=z)}function A(z,Y,et){et===void 0&&(Z===null?et=33984+N-1:et=Z);let ht=Q[et];ht===void 0&&(ht={type:void 0,texture:void 0},Q[et]=ht),(ht.type!==z||ht.texture!==Y)&&(Z!==et&&(c.activeTexture(et),Z=et),c.bindTexture(z,Y||X[z]),ht.type=z,ht.texture=Y)}function S(){const z=Q[Z];z!==void 0&&z.type!==void 0&&(c.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function q(){try{c.compressedTexImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{c.compressedTexImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{c.texSubImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{c.texSubImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function L(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{c.texStorage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{c.texStorage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{c.texImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{c.texImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(z){tt.equals(z)===!1&&(c.scissor(z.x,z.y,z.z,z.w),tt.copy(z))}function gt(z){nt.equals(z)===!1&&(c.viewport(z.x,z.y,z.z,z.w),nt.copy(z))}function Pt(z,Y){let et=d.get(Y);et===void 0&&(et=new WeakMap,d.set(Y,et));let ht=et.get(z);ht===void 0&&(ht=c.getUniformBlockIndex(Y,z.name),et.set(z,ht))}function Rt(z,Y){const ht=d.get(Y).get(z);h.get(z)!==ht&&(c.uniformBlockBinding(Y,ht,z.__bindingPointIndex),h.set(z,ht))}function Gt(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),u={},Z=null,Q={},m={},g=new WeakMap,p=[],f=null,_=!1,x=null,w=null,b=null,v=null,T=null,D=null,y=null,C=!1,I=null,W=null,J=null,R=null,P=null,tt.set(0,0,c.canvas.width,c.canvas.height),nt.set(0,0,c.canvas.width,c.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:At,disable:mt,bindFramebuffer:yt,drawBuffers:pt,useProgram:Ft,setBlending:se,setMaterial:Kt,setFlipSided:Jt,setCullFace:de,setLineWidth:qt,setPolygonOffset:Ut,setScissorTest:Ce,activeTexture:ge,bindTexture:A,unbindTexture:S,compressedTexImage2D:q,compressedTexImage3D:it,texImage2D:dt,texImage3D:lt,updateUBOMapping:Pt,uniformBlockBinding:Rt,texStorage2D:B,texStorage3D:ct,texSubImage2D:st,texSubImage3D:at,compressedTexSubImage2D:bt,compressedTexSubImage3D:L,scissor:_t,viewport:gt,reset:Gt}}function Kf(c,t,e,n,i,s,o){const r=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,S){return _?new OffscreenCanvas(A,S):_s("canvas")}function w(A,S,q,it){let st=1;if((A.width>it||A.height>it)&&(st=it/Math.max(A.width,A.height)),st<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const at=S?wr:Math.floor,bt=at(st*A.width),L=at(st*A.height);p===void 0&&(p=x(bt,L));const B=q?x(bt,L):p;return B.width=bt,B.height=L,B.getContext("2d").drawImage(A,0,0,bt,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+bt+"x"+L+")."),B}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return yo(A.width)&&yo(A.height)}function v(A){return r?!1:A.wrapS!==Be||A.wrapT!==Be||A.minFilter!==xe&&A.minFilter!==Re}function T(A,S){return A.generateMipmaps&&S&&A.minFilter!==xe&&A.minFilter!==Re}function D(A){c.generateMipmap(A)}function y(A,S,q,it,st=!1){if(r===!1)return S;if(A!==null){if(c[A]!==void 0)return c[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at=S;return S===6403&&(q===5126&&(at=33326),q===5131&&(at=33325),q===5121&&(at=33321)),S===33319&&(q===5126&&(at=33328),q===5131&&(at=33327),q===5121&&(at=33323)),S===6408&&(q===5126&&(at=34836),q===5131&&(at=34842),q===5121&&(at=it===Ht&&st===!1?35907:32856),q===32819&&(at=32854),q===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function C(A,S,q){return T(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==xe&&A.minFilter!==Re?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){return A===xe||A===jr||A===Yr?9728:9729}function W(A){const S=A.target;S.removeEventListener("dispose",W),R(S),S.isVideoTexture&&g.delete(S)}function J(A){const S=A.target;S.removeEventListener("dispose",J),N(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const q=A.source,it=f.get(q);if(it){const st=it[S.__cacheKey];st.usedTimes--,st.usedTimes===0&&P(A),Object.keys(it).length===0&&f.delete(q)}n.remove(A)}function P(A){const S=n.get(A);c.deleteTexture(S.__webglTexture);const q=A.source,it=f.get(q);delete it[S.__cacheKey],o.memory.textures--}function N(A){const S=A.texture,q=n.get(A),it=n.get(S);if(it.__webglTexture!==void 0&&(c.deleteTexture(it.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)c.deleteFramebuffer(q.__webglFramebuffer[st]),q.__webglDepthbuffer&&c.deleteRenderbuffer(q.__webglDepthbuffer[st]);else{if(c.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&c.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&c.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let st=0;st<q.__webglColorRenderbuffer.length;st++)q.__webglColorRenderbuffer[st]&&c.deleteRenderbuffer(q.__webglColorRenderbuffer[st]);q.__webglDepthRenderbuffer&&c.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let st=0,at=S.length;st<at;st++){const bt=n.get(S[st]);bt.__webglTexture&&(c.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(S[st])}n.remove(S),n.remove(A)}let F=0;function K(){F=0}function G(){const A=F;return A>=a&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a),F+=1,A}function Z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function Q(A,S){const q=n.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){const it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(q,A,S);return}}e.bindTexture(3553,q.__webglTexture,33984+S)}function H(A,S){const q=n.get(A);if(A.version>0&&q.__version!==A.version){mt(q,A,S);return}e.bindTexture(35866,q.__webglTexture,33984+S)}function O(A,S){const q=n.get(A);if(A.version>0&&q.__version!==A.version){mt(q,A,S);return}e.bindTexture(32879,q.__webglTexture,33984+S)}function tt(A,S){const q=n.get(A);if(A.version>0&&q.__version!==A.version){yt(q,A,S);return}e.bindTexture(34067,q.__webglTexture,33984+S)}const nt={[yr]:10497,[Be]:33071,[Mr]:33648},ot={[xe]:9728,[jr]:9984,[Yr]:9986,[Re]:9729,[Ul]:9985,[ys]:9987};function X(A,S,q){if(q?(c.texParameteri(A,10242,nt[S.wrapS]),c.texParameteri(A,10243,nt[S.wrapT]),(A===32879||A===35866)&&c.texParameteri(A,32882,nt[S.wrapR]),c.texParameteri(A,10240,ot[S.magFilter]),c.texParameteri(A,10241,ot[S.minFilter])):(c.texParameteri(A,10242,33071),c.texParameteri(A,10243,33071),(A===32879||A===35866)&&c.texParameteri(A,32882,33071),(S.wrapS!==Be||S.wrapT!==Be)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(A,10240,I(S.magFilter)),c.texParameteri(A,10241,I(S.minFilter)),S.minFilter!==xe&&S.minFilter!==Re&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(S.type===Nn&&t.has("OES_texture_float_linear")===!1||r===!1&&S.type===Pi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(c.texParameterf(A,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function At(A,S){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",W));const it=S.source;let st=f.get(it);st===void 0&&(st={},f.set(it,st));const at=Z(S);if(at!==A.__cacheKey){st[at]===void 0&&(st[at]={texture:c.createTexture(),usedTimes:0},o.memory.textures++,q=!0),st[at].usedTimes++;const bt=st[A.__cacheKey];bt!==void 0&&(st[A.__cacheKey].usedTimes--,bt.usedTimes===0&&P(S)),A.__cacheKey=at,A.__webglTexture=st[at].texture}return q}function mt(A,S,q){let it=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=35866),S.isData3DTexture&&(it=32879);const st=At(A,S),at=S.source;e.bindTexture(it,A.__webglTexture,33984+q);const bt=n.get(at);if(at.version!==bt.__version||st===!0){e.activeTexture(33984+q),c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);const L=v(S)&&b(S.image)===!1;let B=w(S.image,L,!1,h);B=ge(S,B);const ct=b(B)||r,dt=s.convert(S.format,S.encoding);let lt=s.convert(S.type),_t=y(S.internalFormat,dt,lt,S.encoding,S.isVideoTexture);X(it,S,ct);let gt;const Pt=S.mipmaps,Rt=r&&S.isVideoTexture!==!0,Gt=bt.__version===void 0||st===!0,z=C(S,B,ct);if(S.isDepthTexture)_t=6402,r?S.type===Nn?_t=36012:S.type===In?_t=33190:S.type===hi?_t=35056:_t=33189:S.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===zn&&_t===6402&&S.type!==Aa&&S.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=In,lt=s.convert(S.type)),S.format===pi&&_t===6402&&(_t=34041,S.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=hi,lt=s.convert(S.type))),Gt&&(Rt?e.texStorage2D(3553,1,_t,B.width,B.height):e.texImage2D(3553,0,_t,B.width,B.height,0,dt,lt,null));else if(S.isDataTexture)if(Pt.length>0&&ct){Rt&&Gt&&e.texStorage2D(3553,z,_t,Pt[0].width,Pt[0].height);for(let Y=0,et=Pt.length;Y<et;Y++)gt=Pt[Y],Rt?e.texSubImage2D(3553,Y,0,0,gt.width,gt.height,dt,lt,gt.data):e.texImage2D(3553,Y,_t,gt.width,gt.height,0,dt,lt,gt.data);S.generateMipmaps=!1}else Rt?(Gt&&e.texStorage2D(3553,z,_t,B.width,B.height),e.texSubImage2D(3553,0,0,0,B.width,B.height,dt,lt,B.data)):e.texImage2D(3553,0,_t,B.width,B.height,0,dt,lt,B.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Rt&&Gt&&e.texStorage3D(35866,z,_t,Pt[0].width,Pt[0].height,B.depth);for(let Y=0,et=Pt.length;Y<et;Y++)gt=Pt[Y],S.format!==Ue?dt!==null?Rt?e.compressedTexSubImage3D(35866,Y,0,0,0,gt.width,gt.height,B.depth,dt,gt.data,0,0):e.compressedTexImage3D(35866,Y,_t,gt.width,gt.height,B.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?e.texSubImage3D(35866,Y,0,0,0,gt.width,gt.height,B.depth,dt,lt,gt.data):e.texImage3D(35866,Y,_t,gt.width,gt.height,B.depth,0,dt,lt,gt.data)}else{Rt&&Gt&&e.texStorage2D(3553,z,_t,Pt[0].width,Pt[0].height);for(let Y=0,et=Pt.length;Y<et;Y++)gt=Pt[Y],S.format!==Ue?dt!==null?Rt?e.compressedTexSubImage2D(3553,Y,0,0,gt.width,gt.height,dt,gt.data):e.compressedTexImage2D(3553,Y,_t,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?e.texSubImage2D(3553,Y,0,0,gt.width,gt.height,dt,lt,gt.data):e.texImage2D(3553,Y,_t,gt.width,gt.height,0,dt,lt,gt.data)}else if(S.isDataArrayTexture)Rt?(Gt&&e.texStorage3D(35866,z,_t,B.width,B.height,B.depth),e.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,dt,lt,B.data)):e.texImage3D(35866,0,_t,B.width,B.height,B.depth,0,dt,lt,B.data);else if(S.isData3DTexture)Rt?(Gt&&e.texStorage3D(32879,z,_t,B.width,B.height,B.depth),e.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,dt,lt,B.data)):e.texImage3D(32879,0,_t,B.width,B.height,B.depth,0,dt,lt,B.data);else if(S.isFramebufferTexture){if(Gt)if(Rt)e.texStorage2D(3553,z,_t,B.width,B.height);else{let Y=B.width,et=B.height;for(let ht=0;ht<z;ht++)e.texImage2D(3553,ht,_t,Y,et,0,dt,lt,null),Y>>=1,et>>=1}}else if(Pt.length>0&&ct){Rt&&Gt&&e.texStorage2D(3553,z,_t,Pt[0].width,Pt[0].height);for(let Y=0,et=Pt.length;Y<et;Y++)gt=Pt[Y],Rt?e.texSubImage2D(3553,Y,0,0,dt,lt,gt):e.texImage2D(3553,Y,_t,dt,lt,gt);S.generateMipmaps=!1}else Rt?(Gt&&e.texStorage2D(3553,z,_t,B.width,B.height),e.texSubImage2D(3553,0,0,0,dt,lt,B)):e.texImage2D(3553,0,_t,dt,lt,B);T(S,ct)&&D(it),bt.__version=at.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function yt(A,S,q){if(S.image.length!==6)return;const it=At(A,S),st=S.source;e.bindTexture(34067,A.__webglTexture,33984+q);const at=n.get(st);if(st.version!==at.__version||it===!0){e.activeTexture(33984+q),c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,B=[];for(let Y=0;Y<6;Y++)!bt&&!L?B[Y]=w(S.image[Y],!1,!0,l):B[Y]=L?S.image[Y].image:S.image[Y],B[Y]=ge(S,B[Y]);const ct=B[0],dt=b(ct)||r,lt=s.convert(S.format,S.encoding),_t=s.convert(S.type),gt=y(S.internalFormat,lt,_t,S.encoding),Pt=r&&S.isVideoTexture!==!0,Rt=at.__version===void 0||it===!0;let Gt=C(S,ct,dt);X(34067,S,dt);let z;if(bt){Pt&&Rt&&e.texStorage2D(34067,Gt,gt,ct.width,ct.height);for(let Y=0;Y<6;Y++){z=B[Y].mipmaps;for(let et=0;et<z.length;et++){const ht=z[et];S.format!==Ue?lt!==null?Pt?e.compressedTexSubImage2D(34069+Y,et,0,0,ht.width,ht.height,lt,ht.data):e.compressedTexImage2D(34069+Y,et,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+Y,et,0,0,ht.width,ht.height,lt,_t,ht.data):e.texImage2D(34069+Y,et,gt,ht.width,ht.height,0,lt,_t,ht.data)}}}else{z=S.mipmaps,Pt&&Rt&&(z.length>0&&Gt++,e.texStorage2D(34067,Gt,gt,B[0].width,B[0].height));for(let Y=0;Y<6;Y++)if(L){Pt?e.texSubImage2D(34069+Y,0,0,0,B[Y].width,B[Y].height,lt,_t,B[Y].data):e.texImage2D(34069+Y,0,gt,B[Y].width,B[Y].height,0,lt,_t,B[Y].data);for(let et=0;et<z.length;et++){const xt=z[et].image[Y].image;Pt?e.texSubImage2D(34069+Y,et+1,0,0,xt.width,xt.height,lt,_t,xt.data):e.texImage2D(34069+Y,et+1,gt,xt.width,xt.height,0,lt,_t,xt.data)}}else{Pt?e.texSubImage2D(34069+Y,0,0,0,lt,_t,B[Y]):e.texImage2D(34069+Y,0,gt,lt,_t,B[Y]);for(let et=0;et<z.length;et++){const ht=z[et];Pt?e.texSubImage2D(34069+Y,et+1,0,0,lt,_t,ht.image[Y]):e.texImage2D(34069+Y,et+1,gt,lt,_t,ht.image[Y])}}}T(S,dt)&&D(34067),at.__version=st.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pt(A,S,q,it,st){const at=s.convert(q.format,q.encoding),bt=s.convert(q.type),L=y(q.internalFormat,at,bt,q.encoding);n.get(S).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,L,S.width,S.height,S.depth,0,at,bt,null):e.texImage2D(st,0,L,S.width,S.height,0,at,bt,null)),e.bindFramebuffer(36160,A),Ut(S)?u.framebufferTexture2DMultisampleEXT(36160,it,st,n.get(q).__webglTexture,0,qt(S)):(st===3553||st>=34069&&st<=34074)&&c.framebufferTexture2D(36160,it,st,n.get(q).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ft(A,S,q){if(c.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let it=33189;if(q||Ut(S)){const st=S.depthTexture;st&&st.isDepthTexture&&(st.type===Nn?it=36012:st.type===In&&(it=33190));const at=qt(S);Ut(S)?u.renderbufferStorageMultisampleEXT(36161,at,it,S.width,S.height):c.renderbufferStorageMultisample(36161,at,it,S.width,S.height)}else c.renderbufferStorage(36161,it,S.width,S.height);c.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const it=qt(S);q&&Ut(S)===!1?c.renderbufferStorageMultisample(36161,it,35056,S.width,S.height):Ut(S)?u.renderbufferStorageMultisampleEXT(36161,it,35056,S.width,S.height):c.renderbufferStorage(36161,34041,S.width,S.height),c.framebufferRenderbuffer(36160,33306,36161,A)}else{const it=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let st=0;st<it.length;st++){const at=it[st],bt=s.convert(at.format,at.encoding),L=s.convert(at.type),B=y(at.internalFormat,bt,L,at.encoding),ct=qt(S);q&&Ut(S)===!1?c.renderbufferStorageMultisample(36161,ct,B,S.width,S.height):Ut(S)?u.renderbufferStorageMultisampleEXT(36161,ct,B,S.width,S.height):c.renderbufferStorage(36161,B,S.width,S.height)}}c.bindRenderbuffer(36161,null)}function St(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const it=n.get(S.depthTexture).__webglTexture,st=qt(S);if(S.depthTexture.format===zn)Ut(S)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,st):c.framebufferTexture2D(36160,36096,3553,it,0);else if(S.depthTexture.format===pi)Ut(S)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,st):c.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function Mt(A){const S=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");St(S.__webglFramebuffer,A)}else if(q){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]=c.createRenderbuffer(),Ft(S.__webglDepthbuffer[it],A,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=c.createRenderbuffer(),Ft(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function se(A,S,q){const it=n.get(A);S!==void 0&&pt(it.__webglFramebuffer,A,A.texture,36064,3553),q!==void 0&&Mt(A)}function Kt(A){const S=A.texture,q=n.get(A),it=n.get(S);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=c.createTexture()),it.__version=S.version,o.memory.textures++);const st=A.isWebGLCubeRenderTarget===!0,at=A.isWebGLMultipleRenderTargets===!0,bt=b(A)||r;if(st){q.__webglFramebuffer=[];for(let L=0;L<6;L++)q.__webglFramebuffer[L]=c.createFramebuffer()}else{if(q.__webglFramebuffer=c.createFramebuffer(),at)if(i.drawBuffers){const L=A.texture;for(let B=0,ct=L.length;B<ct;B++){const dt=n.get(L[B]);dt.__webglTexture===void 0&&(dt.__webglTexture=c.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&Ut(A)===!1){const L=at?S:[S];q.__webglMultisampledFramebuffer=c.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let B=0;B<L.length;B++){const ct=L[B];q.__webglColorRenderbuffer[B]=c.createRenderbuffer(),c.bindRenderbuffer(36161,q.__webglColorRenderbuffer[B]);const dt=s.convert(ct.format,ct.encoding),lt=s.convert(ct.type),_t=y(ct.internalFormat,dt,lt,ct.encoding,A.isXRRenderTarget===!0),gt=qt(A);c.renderbufferStorageMultisample(36161,gt,_t,A.width,A.height),c.framebufferRenderbuffer(36160,36064+B,36161,q.__webglColorRenderbuffer[B])}c.bindRenderbuffer(36161,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=c.createRenderbuffer(),Ft(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,it.__webglTexture),X(34067,S,bt);for(let L=0;L<6;L++)pt(q.__webglFramebuffer[L],A,S,36064,34069+L);T(S,bt)&&D(34067),e.unbindTexture()}else if(at){const L=A.texture;for(let B=0,ct=L.length;B<ct;B++){const dt=L[B],lt=n.get(dt);e.bindTexture(3553,lt.__webglTexture),X(3553,dt,bt),pt(q.__webglFramebuffer,A,dt,36064+B,3553),T(dt,bt)&&D(3553)}e.unbindTexture()}else{let L=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?L=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(L,it.__webglTexture),X(L,S,bt),pt(q.__webglFramebuffer,A,S,36064,L),T(S,bt)&&D(L),e.unbindTexture()}A.depthBuffer&&Mt(A)}function Jt(A){const S=b(A)||r,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let it=0,st=q.length;it<st;it++){const at=q[it];if(T(at,S)){const bt=A.isWebGLCubeRenderTarget?34067:3553,L=n.get(at).__webglTexture;e.bindTexture(bt,L),D(bt),e.unbindTexture()}}}function de(A){if(r&&A.samples>0&&Ut(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,it=A.height;let st=16384;const at=[],bt=A.stencilBuffer?33306:36096,L=n.get(A),B=A.isWebGLMultipleRenderTargets===!0;if(B)for(let ct=0;ct<S.length;ct++)e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ct,36161,null),e.bindFramebuffer(36160,L.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ct,3553,null,0);e.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,L.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){at.push(36064+ct),A.depthBuffer&&at.push(bt);const dt=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(dt===!1&&(A.depthBuffer&&(st|=256),A.stencilBuffer&&(st|=1024)),B&&c.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ct]),dt===!0&&(c.invalidateFramebuffer(36008,[bt]),c.invalidateFramebuffer(36009,[bt])),B){const lt=n.get(S[ct]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,lt,0)}c.blitFramebuffer(0,0,q,it,0,0,q,it,st,9728),m&&c.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),B)for(let ct=0;ct<S.length;ct++){e.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ct,36161,L.__webglColorRenderbuffer[ct]);const dt=n.get(S[ct]).__webglTexture;e.bindFramebuffer(36160,L.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ct,3553,dt,0)}e.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function qt(A){return Math.min(d,A.samples)}function Ut(A){const S=n.get(A);return r&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function ge(A,S){const q=A.encoding,it=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===br||q!==Bn&&(q===Ht?r===!1?t.has("EXT_sRGB")===!0&&it===Ue?(A.format=br,A.minFilter=Re,A.generateMipmaps=!1):S=Ra.sRGBToLinear(S):(it!==Ue||st!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),S}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=Q,this.setTexture2DArray=H,this.setTexture3D=O,this.setTextureCube=tt,this.rebindTextures=se,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ut}function Jf(c,t,e){const n=e.isWebGL2;function i(s,o=null){let r;if(s===On)return 5121;if(s===Wl)return 32819;if(s===Hl)return 32820;if(s===Gl)return 5120;if(s===kl)return 5122;if(s===Aa)return 5123;if(s===Vl)return 5124;if(s===In)return 5125;if(s===Nn)return 5126;if(s===Pi)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===ql)return 6406;if(s===Ue)return 6408;if(s===jl)return 6409;if(s===Yl)return 6410;if(s===zn)return 6402;if(s===pi)return 34041;if(s===Xl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===br)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Zl)return 6403;if(s===$l)return 36244;if(s===Kl)return 33319;if(s===Jl)return 33320;if(s===Ql)return 36249;if(s===Ps||s===Rs||s===Ds||s===Is)if(o===Ht)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zr||s===$r||s===Kr||s===Jr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$r)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tc)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qr||s===to)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Qr)return o===Ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===to)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eo||s===no||s===io||s===so||s===ro||s===oo||s===ao||s===lo||s===co||s===ho||s===uo||s===fo||s===po||s===mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===eo)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===no)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===io)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===so)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ro)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oo)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ao)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lo)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===co)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ho)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uo)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fo)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===po)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mo)return o===Ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===go)return o===Ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===hi?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class Qf extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class cs extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tp={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const r=this._targetRay,a=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const p of t.hand.values()){const f=e.getJointPose(p,n),_=this._getHandJoint(l,p);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(tp)))}return r!==null&&(r.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new cs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ep extends Te{constructor(t,e,n,i,s,o,r,a,l,h){if(h=h!==void 0?h:zn,h!==zn&&h!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=In),n===void 0&&h===pi&&(n=hi),super(null,i,s,o,r,a,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:xe,this.minFilter=a!==void 0?a:xe,this.flipY=!1,this.generateMipmaps=!1}}class np extends Vn{constructor(t,e){super();const n=this;let i=null,s=1,o=null,r="local-floor",a=null,l=null,h=null,d=null,u=null,m=null;const g=e.getContextAttributes();let p=null,f=null;const _=[],x=[],w=new Set,b=new Map,v=new De;v.layers.enable(1),v.viewport=new le;const T=new De;T.layers.enable(2),T.viewport=new le;const D=[v,T],y=new Qf;y.layers.enable(1),y.layers.enable(2);let C=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let O=_[H];return O===void 0&&(O=new lr,_[H]=O),O.getTargetRaySpace()},this.getControllerGrip=function(H){let O=_[H];return O===void 0&&(O=new lr,_[H]=O),O.getGripSpace()},this.getHand=function(H){let O=_[H];return O===void 0&&(O=new lr,_[H]=O),O.getHandSpace()};function W(H){const O=x.indexOf(H.inputSource);if(O===-1)return;const tt=_[O];tt!==void 0&&tt.dispatchEvent({type:H.type,data:H.inputSource})}function J(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",R);for(let H=0;H<_.length;H++){const O=x[H];O!==null&&(x[H]=null,_[H].disconnect(O))}C=null,I=null,t.setRenderTarget(p),u=null,d=null,h=null,i=null,f=null,Q.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||o},this.setReferenceSpace=function(H){a=H},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",J),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:u}),f=new Un(u.framebufferWidth,u.framebufferHeight,{format:Ue,type:On,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,tt=null,nt=null;g.depth&&(nt=g.stencil?35056:33190,O=g.stencil?pi:zn,tt=g.stencil?hi:In);const ot={colorFormat:32856,depthFormat:nt,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(ot),i.updateRenderState({layers:[d]}),f=new Un(d.textureWidth,d.textureHeight,{format:Ue,type:On,depthTexture:new ep(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const X=t.properties.get(f);X.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),a=null,o=await i.requestReferenceSpace(r),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(H){for(let O=0;O<H.removed.length;O++){const tt=H.removed[O],nt=x.indexOf(tt);nt>=0&&(x[nt]=null,_[nt].disconnect(tt))}for(let O=0;O<H.added.length;O++){const tt=H.added[O];let nt=x.indexOf(tt);if(nt===-1){for(let X=0;X<_.length;X++)if(X>=x.length){x.push(tt),nt=X;break}else if(x[X]===null){x[X]=tt,nt=X;break}if(nt===-1)break}const ot=_[nt];ot&&ot.connect(tt)}}const P=new k,N=new k;function F(H,O,tt){P.setFromMatrixPosition(O.matrixWorld),N.setFromMatrixPosition(tt.matrixWorld);const nt=P.distanceTo(N),ot=O.projectionMatrix.elements,X=tt.projectionMatrix.elements,At=ot[14]/(ot[10]-1),mt=ot[14]/(ot[10]+1),yt=(ot[9]+1)/ot[5],pt=(ot[9]-1)/ot[5],Ft=(ot[8]-1)/ot[0],St=(X[8]+1)/X[0],Mt=At*Ft,se=At*St,Kt=nt/(-Ft+St),Jt=Kt*-Ft;O.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Jt),H.translateZ(Kt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const de=At+Kt,qt=mt+Kt,Ut=Mt-Jt,Ce=se+(nt-Jt),ge=yt*mt/qt*de,A=pt*mt/qt*de;H.projectionMatrix.makePerspective(Ut,Ce,ge,A,de,qt)}function K(H,O){O===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(O.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;y.near=T.near=v.near=H.near,y.far=T.far=v.far=H.far,(C!==y.near||I!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,I=y.far);const O=H.parent,tt=y.cameras;K(y,O);for(let ot=0;ot<tt.length;ot++)K(tt[ot],O);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),H.matrix.copy(y.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const nt=H.children;for(let ot=0,X=nt.length;ot<X;ot++)nt[ot].updateMatrixWorld(!0);tt.length===2?F(y,v,T):y.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(H){d!==null&&(d.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)},this.getPlanes=function(){return w};let G=null;function Z(H,O){if(l=O.getViewerPose(a||o),m=O,l!==null){const tt=l.views;u!==null&&(t.setRenderTargetFramebuffer(f,u.framebuffer),t.setRenderTarget(f));let nt=!1;tt.length!==y.cameras.length&&(y.cameras.length=0,nt=!0);for(let ot=0;ot<tt.length;ot++){const X=tt[ot];let At=null;if(u!==null)At=u.getViewport(X);else{const yt=h.getViewSubImage(d,X);At=yt.viewport,ot===0&&(t.setRenderTargetTextures(f,yt.colorTexture,d.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(f))}let mt=D[ot];mt===void 0&&(mt=new De,mt.layers.enable(ot),mt.viewport=new le,D[ot]=mt),mt.matrix.fromArray(X.transform.matrix),mt.projectionMatrix.fromArray(X.projectionMatrix),mt.viewport.set(At.x,At.y,At.width,At.height),ot===0&&y.matrix.copy(mt.matrix),nt===!0&&y.cameras.push(mt)}}for(let tt=0;tt<_.length;tt++){const nt=x[tt],ot=_[tt];nt!==null&&ot!==void 0&&ot.update(nt,O,a||o)}if(G&&G(H,O),O.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let tt=null;for(const nt of w)O.detectedPlanes.has(nt)||(tt===null&&(tt=[]),tt.push(nt));if(tt!==null)for(const nt of tt)w.delete(nt),b.delete(nt),n.dispatchEvent({type:"planeremoved",data:nt});for(const nt of O.detectedPlanes)if(!w.has(nt))w.add(nt),b.set(nt,O.lastChangedTime),n.dispatchEvent({type:"planeadded",data:nt});else{const ot=b.get(nt);nt.lastChangedTime>ot&&(b.set(nt,nt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:nt}))}}m=null}const Q=new ka;Q.setAnimationLoop(Z),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}}function ip(c,t){function e(p,f){f.color.getRGB(p.fogColor.value,Ba(c)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),h(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&u(p,f,w)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?r(p,f,_,x):f.isSpriteMaterial?a(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ie&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ie&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=t.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const b=c.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let w;f.aoMap?w=f.aoMap:f.lightMap&&(w=f.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function r(p,f,_,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=x*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function u(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ie&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function sp(c,t,e,n){let i={},s={},o=[];const r=e.isWebGL2?c.getParameter(35375):0;function a(x,w){const b=w.program;n.uniformBlockBinding(x,b)}function l(x,w){let b=i[x.id];b===void 0&&(g(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",f));const v=w.program;n.updateUBOMapping(x,v);const T=t.render.frame;s[x.id]!==T&&(u(x),s[x.id]=T)}function h(x){const w=d();x.__bindingPointIndex=w;const b=c.createBuffer(),v=x.__size,T=x.usage;return c.bindBuffer(35345,b),c.bufferData(35345,v,T),c.bindBuffer(35345,null),c.bindBufferBase(35345,w,b),b}function d(){for(let x=0;x<r;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const w=i[x.id],b=x.uniforms,v=x.__cache;c.bindBuffer(35345,w);for(let T=0,D=b.length;T<D;T++){const y=b[T];if(m(y,T,v)===!0){const C=y.value,I=y.__offset;typeof C=="number"?(y.__data[0]=C,c.bufferSubData(35345,I,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):C.toArray(y.__data),c.bufferSubData(35345,I,y.__data))}}c.bindBuffer(35345,null)}function m(x,w,b){const v=x.value;if(b[w]===void 0)return typeof v=="number"?b[w]=v:b[w]=v.clone(),!0;if(typeof v=="number"){if(b[w]!==v)return b[w]=v,!0}else{const T=b[w];if(T.equals(v)===!1)return T.copy(v),!0}return!1}function g(x){const w=x.uniforms;let b=0;const v=16;let T=0;for(let D=0,y=w.length;D<y;D++){const C=w[D],I=p(C);if(C.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,D>0){T=b%v;const W=v-T;T!==0&&W-I.boundary<0&&(b+=v-T,C.__offset=b)}b+=I.storage}return T=b%v,T>0&&(b+=v-T),x.__size=b,x.__cache={},this}function p(x){const w=x.value,b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function f(x){const w=x.target;w.removeEventListener("dispose",f);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),c.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const x in i)c.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:a,update:l,dispose:_}}function rp(){const c=_s("canvas");return c.style.display="block",c}function ja(c={}){this.isWebGLRenderer=!0;const t=c.canvas!==void 0?c.canvas:rp(),e=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,o=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,r=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,a=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let h;e!==null?h=e.getContextAttributes().alpha:h=c.alpha!==void 0?c.alpha:!1;let d=null,u=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bn,this.physicallyCorrectLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const p=this;let f=!1,_=0,x=0,w=null,b=-1,v=null;const T=new le,D=new le;let y=null,C=t.width,I=t.height,W=1,J=null,R=null;const P=new le(0,0,C,I),N=new le(0,0,C,I);let F=!1;const K=new Cr;let G=!1,Z=!1,Q=null;const H=new ee,O=new Tt,tt=new k,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return w===null?W:1}let X=e;function At(E,V){for(let j=0;j<E.length;j++){const U=E[j],$=t.getContext(U,V);if($!==null)return $}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Er}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),X===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),X=At(V,E),X===null)throw At(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let mt,yt,pt,Ft,St,Mt,se,Kt,Jt,de,qt,Ut,Ce,ge,A,S,q,it,st,at,bt,L,B,ct;function dt(){mt=new md(X),yt=new cd(X,mt,c),mt.init(yt),L=new Jf(X,mt,yt),pt=new $f(X,mt,yt),Ft=new xd,St=new Ff,Mt=new Kf(X,mt,pt,St,yt,L,Ft),se=new ud(p),Kt=new pd(p),Jt=new Ac(X,yt),B=new ad(X,mt,Jt,yt),de=new gd(X,Jt,Ft,B),qt=new bd(X,de,Jt,Ft),st=new Md(X,yt,Mt),S=new hd(St),Ut=new zf(p,se,Kt,mt,yt,B,S),Ce=new ip(p,St),ge=new Bf,A=new Hf(mt,yt),it=new od(p,se,Kt,pt,qt,h,o),q=new Zf(p,qt,yt),ct=new sp(X,Ft,yt,pt),at=new ld(X,mt,Ft,yt),bt=new _d(X,mt,Ft,yt),Ft.programs=Ut.programs,p.capabilities=yt,p.extensions=mt,p.properties=St,p.renderLists=ge,p.shadowMap=q,p.state=pt,p.info=Ft}dt();const lt=new np(p,X);this.xr=lt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const E=mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(C,I,!1))},this.getSize=function(E){return E.set(C,I)},this.setSize=function(E,V,j){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,I=V,t.width=Math.floor(E*W),t.height=Math.floor(V*W),j!==!1&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(C*W,I*W).floor()},this.setDrawingBufferSize=function(E,V,j){C=E,I=V,W=j,t.width=Math.floor(E*j),t.height=Math.floor(V*j),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(P)},this.setViewport=function(E,V,j,U){E.isVector4?P.set(E.x,E.y,E.z,E.w):P.set(E,V,j,U),pt.viewport(T.copy(P).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(N)},this.setScissor=function(E,V,j,U){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,V,j,U),pt.scissor(D.copy(N).multiplyScalar(W).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(E){pt.setScissorTest(F=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){R=E},this.getClearColor=function(E){return E.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(E=!0,V=!0,j=!0){let U=0;E&&(U|=16384),V&&(U|=256),j&&(U|=1024),X.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),ge.dispose(),A.dispose(),St.dispose(),se.dispose(),Kt.dispose(),qt.dispose(),B.dispose(),ct.dispose(),Ut.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",ht),lt.removeEventListener("sessionend",xt),Q&&(Q.dispose(),Q=null),Bt.stop()};function _t(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const E=Ft.autoReset,V=q.enabled,j=q.autoUpdate,U=q.needsUpdate,$=q.type;dt(),Ft.autoReset=E,q.enabled=V,q.autoUpdate=j,q.needsUpdate=U,q.type=$}function Pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){const V=E.target;V.removeEventListener("dispose",Rt),Gt(V)}function Gt(E){z(E),St.remove(E)}function z(E){const V=St.get(E).programs;V!==void 0&&(V.forEach(function(j){Ut.releaseProgram(j)}),E.isShaderMaterial&&Ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,j,U,$,vt){V===null&&(V=nt);const wt=$.isMesh&&$.matrixWorld.determinant()<0,Ct=ol(E,V,j,U,$);pt.setMaterial(U,wt);let Lt=j.index,zt=1;U.wireframe===!0&&(Lt=de.getWireframeAttribute(j),zt=2);const Dt=j.drawRange,It=j.attributes.position;let Xt=Dt.start*zt,ye=(Dt.start+Dt.count)*zt;vt!==null&&(Xt=Math.max(Xt,vt.start*zt),ye=Math.min(ye,(vt.start+vt.count)*zt)),Lt!==null?(Xt=Math.max(Xt,0),ye=Math.min(ye,Lt.count)):It!=null&&(Xt=Math.max(Xt,0),ye=Math.min(ye,It.count));const $e=ye-Xt;if($e<0||$e===1/0)return;B.setup($,U,Ct,j,Lt);let bn,jt=at;if(Lt!==null&&(bn=Jt.get(Lt),jt=bt,jt.setIndex(bn)),$.isMesh)U.wireframe===!0?(pt.setLineWidth(U.wireframeLinewidth*ot()),jt.setMode(1)):jt.setMode(4);else if($.isLine){let Nt=U.linewidth;Nt===void 0&&(Nt=1),pt.setLineWidth(Nt*ot()),$.isLineSegments?jt.setMode(1):$.isLineLoop?jt.setMode(2):jt.setMode(3)}else $.isPoints?jt.setMode(0):$.isSprite&&jt.setMode(4);if($.isInstancedMesh)jt.renderInstances(Xt,$e,$.count);else if(j.isInstancedBufferGeometry){const Nt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ts=Math.min(j.instanceCount,Nt);jt.renderInstances(Xt,$e,Ts)}else jt.render(Xt,$e)},this.compile=function(E,V){function j(U,$,vt){U.transparent===!0&&U.side===cn?(U.side=Ie,U.needsUpdate=!0,Le(U,$,vt),U.side=ui,U.needsUpdate=!0,Le(U,$,vt),U.side=cn):Le(U,$,vt)}u=A.get(E),u.init(),g.push(u),E.traverseVisible(function(U){U.isLight&&U.layers.test(V.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights(p.physicallyCorrectLights),E.traverse(function(U){const $=U.material;if($)if(Array.isArray($))for(let vt=0;vt<$.length;vt++){const wt=$[vt];j(wt,E,U)}else j($,E,U)}),g.pop(),u=null};let Y=null;function et(E){Y&&Y(E)}function ht(){Bt.stop()}function xt(){Bt.start()}const Bt=new ka;Bt.setAnimationLoop(et),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(E){Y=E,lt.setAnimationLoop(E),E===null?Bt.stop():Bt.start()},lt.addEventListener("sessionstart",ht),lt.addEventListener("sessionend",xt),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(V),V=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,V,w),u=A.get(E,g.length),u.init(),g.push(u),H.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),K.setFromProjectionMatrix(H),Z=this.localClippingEnabled,G=S.init(this.clippingPlanes,Z,V),d=ge.get(E,m.length),d.init(),m.push(d),re(E,V,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(J,R),G===!0&&S.beginShadows();const j=u.state.shadowsArray;if(q.render(j,E,V),G===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(d,E),u.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const U=V.cameras;for(let $=0,vt=U.length;$<vt;$++){const wt=U[$];ce(d,E,wt,wt.viewport)}}else ce(d,E,V);w!==null&&(Mt.updateMultisampleRenderTarget(w),Mt.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(p,E,V),B.resetDefaultState(),b=-1,v=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function re(E,V,j,U){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||K.intersectsSprite(E)){U&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const wt=qt.update(E),Ct=E.material;Ct.visible&&d.push(E,wt,Ct,j,tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ft.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ft.render.frame),!E.frustumCulled||K.intersectsObject(E))){U&&tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(H);const wt=qt.update(E),Ct=E.material;if(Array.isArray(Ct)){const Lt=wt.groups;for(let zt=0,Dt=Lt.length;zt<Dt;zt++){const It=Lt[zt],Xt=Ct[It.materialIndex];Xt&&Xt.visible&&d.push(E,wt,Xt,j,tt.z,It)}}else Ct.visible&&d.push(E,wt,Ct,j,tt.z,null)}}const vt=E.children;for(let wt=0,Ct=vt.length;wt<Ct;wt++)re(vt[wt],V,j,U)}function ce(E,V,j,U){const $=E.opaque,vt=E.transmissive,wt=E.transparent;u.setupLightsView(j),vt.length>0&&Mn($,V,j),U&&pt.viewport(T.copy(U)),$.length>0&&Wt($,V,j),vt.length>0&&Wt(vt,V,j),wt.length>0&&Wt(wt,V,j),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Mn(E,V,j){const U=yt.isWebGL2;Q===null&&(Q=new Un(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")?Pi:On,minFilter:ys,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(O),U?Q.setSize(O.x,O.y):Q.setSize(wr(O.x),wr(O.y));const $=p.getRenderTarget();p.setRenderTarget(Q),p.clear();const vt=p.toneMapping;p.toneMapping=hn,Wt(E,V,j),p.toneMapping=vt,Mt.updateMultisampleRenderTarget(Q),Mt.updateRenderTargetMipmap(Q),p.setRenderTarget($)}function Wt(E,V,j){const U=V.isScene===!0?V.overrideMaterial:null;for(let $=0,vt=E.length;$<vt;$++){const wt=E[$],Ct=wt.object,Lt=wt.geometry,zt=U===null?wt.material:U,Dt=wt.group;Ct.layers.test(j.layers)&&Ze(Ct,V,j,Lt,zt,Dt)}}function Ze(E,V,j,U,$,vt){E.onBeforeRender(p,V,j,U,$,vt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(p,V,j,U,E,vt),$.transparent===!0&&$.side===cn?($.side=Ie,$.needsUpdate=!0,p.renderBufferDirect(j,V,U,$,E,vt),$.side=ui,$.needsUpdate=!0,p.renderBufferDirect(j,V,U,$,E,vt),$.side=cn):p.renderBufferDirect(j,V,U,$,E,vt),E.onAfterRender(p,V,j,U,$,vt)}function Le(E,V,j){V.isScene!==!0&&(V=nt);const U=St.get(E),$=u.state.lights,vt=u.state.shadowsArray,wt=$.state.version,Ct=Ut.getParameters(E,$.state,vt,V,j),Lt=Ut.getProgramCacheKey(Ct);let zt=U.programs;U.environment=E.isMeshStandardMaterial?V.environment:null,U.fog=V.fog,U.envMap=(E.isMeshStandardMaterial?Kt:se).get(E.envMap||U.environment),zt===void 0&&(E.addEventListener("dispose",Rt),zt=new Map,U.programs=zt);let Dt=zt.get(Lt);if(Dt!==void 0){if(U.currentProgram===Dt&&U.lightsStateVersion===wt)return Br(E,Ct),Dt}else Ct.uniforms=Ut.getUniforms(E),E.onBuild(j,Ct,p),E.onBeforeCompile(Ct,p),Dt=Ut.acquireProgram(Ct,Lt),zt.set(Lt,Dt),U.uniforms=Ct.uniforms;const It=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=S.uniform),Br(E,Ct),U.needsLights=ll(E),U.lightsStateVersion=wt,U.needsLights&&(It.ambientLightColor.value=$.state.ambient,It.lightProbe.value=$.state.probe,It.directionalLights.value=$.state.directional,It.directionalLightShadows.value=$.state.directionalShadow,It.spotLights.value=$.state.spot,It.spotLightShadows.value=$.state.spotShadow,It.rectAreaLights.value=$.state.rectArea,It.ltc_1.value=$.state.rectAreaLTC1,It.ltc_2.value=$.state.rectAreaLTC2,It.pointLights.value=$.state.point,It.pointLightShadows.value=$.state.pointShadow,It.hemisphereLights.value=$.state.hemi,It.directionalShadowMap.value=$.state.directionalShadowMap,It.directionalShadowMatrix.value=$.state.directionalShadowMatrix,It.spotShadowMap.value=$.state.spotShadowMap,It.spotLightMatrix.value=$.state.spotLightMatrix,It.spotLightMap.value=$.state.spotLightMap,It.pointShadowMap.value=$.state.pointShadowMap,It.pointShadowMatrix.value=$.state.pointShadowMatrix);const Xt=Dt.getUniforms(),ye=gs.seqWithValue(Xt.seq,It);return U.currentProgram=Dt,U.uniformsList=ye,Dt}function Br(E,V){const j=St.get(E);j.outputEncoding=V.outputEncoding,j.instancing=V.instancing,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function ol(E,V,j,U,$){V.isScene!==!0&&(V=nt),Mt.resetTextureUnits();const vt=V.fog,wt=U.isMeshStandardMaterial?V.environment:null,Ct=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Bn,Lt=(U.isMeshStandardMaterial?Kt:se).get(U.envMap||wt),zt=U.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Dt=!!U.normalMap&&!!j.attributes.tangent,It=!!j.morphAttributes.position,Xt=!!j.morphAttributes.normal,ye=!!j.morphAttributes.color,$e=U.toneMapped?p.toneMapping:hn,bn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,jt=bn!==void 0?bn.length:0,Nt=St.get(U),Ts=u.state.lights;if(G===!0&&(Z===!0||E!==v)){const Me=E===v&&U.id===b;S.setState(U,E,Me)}let oe=!1;U.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ts.state.version||Nt.outputEncoding!==Ct||$.isInstancedMesh&&Nt.instancing===!1||!$.isInstancedMesh&&Nt.instancing===!0||$.isSkinnedMesh&&Nt.skinning===!1||!$.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==Lt||U.fog===!0&&Nt.fog!==vt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==S.numPlanes||Nt.numIntersection!==S.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Dt||Nt.morphTargets!==It||Nt.morphNormals!==Xt||Nt.morphColors!==ye||Nt.toneMapping!==$e||yt.isWebGL2===!0&&Nt.morphTargetsCount!==jt)&&(oe=!0):(oe=!0,Nt.__version=U.version);let wn=Nt.currentProgram;oe===!0&&(wn=Le(U,V,$));let Ur=!1,xi=!1,As=!1;const fe=wn.getUniforms(),Sn=Nt.uniforms;if(pt.useProgram(wn.program)&&(Ur=!0,xi=!0,As=!0),U.id!==b&&(b=U.id,xi=!0),Ur||v!==E){if(fe.setValue(X,"projectionMatrix",E.projectionMatrix),yt.logarithmicDepthBuffer&&fe.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),v!==E&&(v=E,xi=!0,As=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Me=fe.map.cameraPosition;Me!==void 0&&Me.setValue(X,tt.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&fe.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||$.isSkinnedMesh)&&fe.setValue(X,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){fe.setOptional(X,$,"bindMatrix"),fe.setOptional(X,$,"bindMatrixInverse");const Me=$.skeleton;Me&&(yt.floatVertexTextures?(Me.boneTexture===null&&Me.computeBoneTexture(),fe.setValue(X,"boneTexture",Me.boneTexture,Mt),fe.setValue(X,"boneTextureSize",Me.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Cs=j.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0&&yt.isWebGL2===!0)&&st.update($,j,U,wn),(xi||Nt.receiveShadow!==$.receiveShadow)&&(Nt.receiveShadow=$.receiveShadow,fe.setValue(X,"receiveShadow",$.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Sn.envMap.value=Lt,Sn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),xi&&(fe.setValue(X,"toneMappingExposure",p.toneMappingExposure),Nt.needsLights&&al(Sn,As),vt&&U.fog===!0&&Ce.refreshFogUniforms(Sn,vt),Ce.refreshMaterialUniforms(Sn,U,W,I,Q),gs.upload(X,Nt.uniformsList,Sn,Mt)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(gs.upload(X,Nt.uniformsList,Sn,Mt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&fe.setValue(X,"center",$.center),fe.setValue(X,"modelViewMatrix",$.modelViewMatrix),fe.setValue(X,"normalMatrix",$.normalMatrix),fe.setValue(X,"modelMatrix",$.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Me=U.uniformsGroups;for(let Ls=0,cl=Me.length;Ls<cl;Ls++)if(yt.isWebGL2){const Gr=Me[Ls];ct.update(Gr,wn),ct.bind(Gr,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function al(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function ll(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,V,j){St.get(E.texture).__webglTexture=V,St.get(E.depthTexture).__webglTexture=j;const U=St.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=j===void 0,U.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,V){const j=St.get(E);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(E,V=0,j=0){w=E,_=V,x=j;let U=!0,$=null,vt=!1,wt=!1;if(E){const Lt=St.get(E);Lt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),U=!1):Lt.__webglFramebuffer===void 0?Mt.setupRenderTarget(E):Lt.__hasExternalTextures&&Mt.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);const Dt=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Dt[V],vt=!0):yt.isWebGL2&&E.samples>0&&Mt.useMultisampledRTT(E)===!1?$=St.get(E).__webglMultisampledFramebuffer:$=Dt,T.copy(E.viewport),D.copy(E.scissor),y=E.scissorTest}else T.copy(P).multiplyScalar(W).floor(),D.copy(N).multiplyScalar(W).floor(),y=F;if(pt.bindFramebuffer(36160,$)&&yt.drawBuffers&&U&&pt.drawBuffers(E,$),pt.viewport(T),pt.scissor(D),pt.setScissorTest(y),vt){const Lt=St.get(E.texture);X.framebufferTexture2D(36160,36064,34069+V,Lt.__webglTexture,j)}else if(wt){const Lt=St.get(E.texture),zt=V||0;X.framebufferTextureLayer(36160,36064,Lt.__webglTexture,j||0,zt)}b=-1},this.readRenderTargetPixels=function(E,V,j,U,$,vt,wt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){pt.bindFramebuffer(36160,Ct);try{const Lt=E.texture,zt=Lt.format,Dt=Lt.type;if(zt!==Ue&&L.convert(zt)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const It=Dt===Pi&&(mt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&mt.has("EXT_color_buffer_float"));if(Dt!==On&&L.convert(Dt)!==X.getParameter(35738)&&!(Dt===Nn&&(yt.isWebGL2||mt.has("OES_texture_float")||mt.has("WEBGL_color_buffer_float")))&&!It){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-U&&j>=0&&j<=E.height-$&&X.readPixels(V,j,U,$,L.convert(zt),L.convert(Dt),vt)}finally{const Lt=w!==null?St.get(w).__webglFramebuffer:null;pt.bindFramebuffer(36160,Lt)}}},this.copyFramebufferToTexture=function(E,V,j=0){const U=Math.pow(2,-j),$=Math.floor(V.image.width*U),vt=Math.floor(V.image.height*U);Mt.setTexture2D(V,0),X.copyTexSubImage2D(3553,j,0,0,E.x,E.y,$,vt),pt.unbindTexture()},this.copyTextureToTexture=function(E,V,j,U=0){const $=V.image.width,vt=V.image.height,wt=L.convert(j.format),Ct=L.convert(j.type);Mt.setTexture2D(j,0),X.pixelStorei(37440,j.flipY),X.pixelStorei(37441,j.premultiplyAlpha),X.pixelStorei(3317,j.unpackAlignment),V.isDataTexture?X.texSubImage2D(3553,U,E.x,E.y,$,vt,wt,Ct,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(3553,U,E.x,E.y,V.mipmaps[0].width,V.mipmaps[0].height,wt,V.mipmaps[0].data):X.texSubImage2D(3553,U,E.x,E.y,wt,Ct,V.image),U===0&&j.generateMipmaps&&X.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,V,j,U,$=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const vt=E.max.x-E.min.x+1,wt=E.max.y-E.min.y+1,Ct=E.max.z-E.min.z+1,Lt=L.convert(U.format),zt=L.convert(U.type);let Dt;if(U.isData3DTexture)Mt.setTexture3D(U,0),Dt=32879;else if(U.isDataArrayTexture)Mt.setTexture2DArray(U,0),Dt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,U.flipY),X.pixelStorei(37441,U.premultiplyAlpha),X.pixelStorei(3317,U.unpackAlignment);const It=X.getParameter(3314),Xt=X.getParameter(32878),ye=X.getParameter(3316),$e=X.getParameter(3315),bn=X.getParameter(32877),jt=j.isCompressedTexture?j.mipmaps[0]:j.image;X.pixelStorei(3314,jt.width),X.pixelStorei(32878,jt.height),X.pixelStorei(3316,E.min.x),X.pixelStorei(3315,E.min.y),X.pixelStorei(32877,E.min.z),j.isDataTexture||j.isData3DTexture?X.texSubImage3D(Dt,$,V.x,V.y,V.z,vt,wt,Ct,Lt,zt,jt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Dt,$,V.x,V.y,V.z,vt,wt,Ct,Lt,jt.data)):X.texSubImage3D(Dt,$,V.x,V.y,V.z,vt,wt,Ct,Lt,zt,jt),X.pixelStorei(3314,It),X.pixelStorei(32878,Xt),X.pixelStorei(3316,ye),X.pixelStorei(3315,$e),X.pixelStorei(32877,bn),$===0&&U.generateMipmaps&&X.generateMipmap(Dt),pt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Mt.setTextureCube(E,0):E.isData3DTexture?Mt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Mt.setTexture2DArray(E,0):Mt.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){_=0,x=0,w=null,pt.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class op extends ja{}op.prototype.isWebGL1Renderer=!0;class ap extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Pr extends yn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const a=Math.min(o+r,Math.PI);let l=0;const h=[],d=new k,u=new k,m=[],g=[],p=[],f=[];for(let _=0;_<=n;_++){const x=[],w=_/n;let b=0;_==0&&o==0?b=.5/e:_==n&&a==Math.PI&&(b=-.5/e);for(let v=0;v<=e;v++){const T=v/e;d.x=-t*Math.cos(i+T*s)*Math.sin(o+w*r),d.y=t*Math.cos(o+w*r),d.z=t*Math.sin(i+T*s)*Math.sin(o+w*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),p.push(u.x,u.y,u.z),f.push(T+b,1-w),x.push(l++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<e;x++){const w=h[_][x+1],b=h[_][x],v=h[_+1][x],T=h[_+1][x+1];(_!==0||o>0)&&m.push(w,b,T),(_!==n-1||a<Math.PI)&&m.push(b,v,T)}this.setIndex(m),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(p,3)),this.setAttribute("uv",new Ye(f,2))}static fromJSON(t){return new Pr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ya extends Oi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new kt(16777215),this.specular=new kt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Za extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const cr=new ee,Qo=new k,ta=new k;class lp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qo),ta.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ta),e.updateMatrixWorld(),cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class cp extends lp{constructor(){super(new Va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hp extends Za{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DefaultUp),this.updateMatrix(),this.target=new ue,this.shadow=new cp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class up extends Za{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ea{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ve(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Er}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Er);const na={type:"change"},hr={type:"start"},ia={type:"end"};class dp extends Vn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wn.ROTATE,MIDDLE:Wn.DOLLY,RIGHT:Wn.PAN},this.touches={ONE:Hn.ROTATE,TWO:Hn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ge),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(na),n.update(),s=i.NONE},this.update=function(){const L=new k,B=new Gn().setFromUnitVectors(t.up,new k(0,1,0)),ct=B.clone().invert(),dt=new k,lt=new Gn,_t=2*Math.PI;return function(){const Pt=n.object.position;L.copy(Pt).sub(n.target),L.applyQuaternion(B),r.setFromVector3(L),n.autoRotate&&s===i.NONE&&C(D()),n.enableDamping?(r.theta+=a.theta*n.dampingFactor,r.phi+=a.phi*n.dampingFactor):(r.theta+=a.theta,r.phi+=a.phi);let Rt=n.minAzimuthAngle,Gt=n.maxAzimuthAngle;return isFinite(Rt)&&isFinite(Gt)&&(Rt<-Math.PI?Rt+=_t:Rt>Math.PI&&(Rt-=_t),Gt<-Math.PI?Gt+=_t:Gt>Math.PI&&(Gt-=_t),Rt<=Gt?r.theta=Math.max(Rt,Math.min(Gt,r.theta)):r.theta=r.theta>(Rt+Gt)/2?Math.max(Rt,r.theta):Math.min(Gt,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=l,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),L.setFromSpherical(r),L.applyQuaternion(ct),Pt.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),h.set(0,0,0)),l=1,d||dt.distanceToSquared(n.object.position)>o||8*(1-lt.dot(n.object.quaternion))>o?(n.dispatchEvent(na),dt.copy(n.object.position),lt.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",se),n.domElement.removeEventListener("pointercancel",de),n.domElement.removeEventListener("wheel",Ce),n.domElement.removeEventListener("pointermove",Kt),n.domElement.removeEventListener("pointerup",Jt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ge)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,r=new ea,a=new ea;let l=1;const h=new k;let d=!1;const u=new Tt,m=new Tt,g=new Tt,p=new Tt,f=new Tt,_=new Tt,x=new Tt,w=new Tt,b=new Tt,v=[],T={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function C(L){a.theta-=L}function I(L){a.phi-=L}const W=function(){const L=new k;return function(ct,dt){L.setFromMatrixColumn(dt,0),L.multiplyScalar(-ct),h.add(L)}}(),J=function(){const L=new k;return function(ct,dt){n.screenSpacePanning===!0?L.setFromMatrixColumn(dt,1):(L.setFromMatrixColumn(dt,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ct),h.add(L)}}(),R=function(){const L=new k;return function(ct,dt){const lt=n.domElement;if(n.object.isPerspectiveCamera){const _t=n.object.position;L.copy(_t).sub(n.target);let gt=L.length();gt*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ct*gt/lt.clientHeight,n.object.matrix),J(2*dt*gt/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ct*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),J(dt*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(L){n.object.isPerspectiveCamera?l/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(L){n.object.isPerspectiveCamera?l*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(L){u.set(L.clientX,L.clientY)}function K(L){x.set(L.clientX,L.clientY)}function G(L){p.set(L.clientX,L.clientY)}function Z(L){m.set(L.clientX,L.clientY),g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const B=n.domElement;C(2*Math.PI*g.x/B.clientHeight),I(2*Math.PI*g.y/B.clientHeight),u.copy(m),n.update()}function Q(L){w.set(L.clientX,L.clientY),b.subVectors(w,x),b.y>0?P(y()):b.y<0&&N(y()),x.copy(w),n.update()}function H(L){f.set(L.clientX,L.clientY),_.subVectors(f,p).multiplyScalar(n.panSpeed),R(_.x,_.y),p.copy(f),n.update()}function O(L){L.deltaY<0?N(y()):L.deltaY>0&&P(y()),n.update()}function tt(L){let B=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):R(-n.keyPanSpeed,0),B=!0;break}B&&(L.preventDefault(),n.update())}function nt(){if(v.length===1)u.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),B=.5*(v[0].pageY+v[1].pageY);u.set(L,B)}}function ot(){if(v.length===1)p.set(v[0].pageX,v[0].pageY);else{const L=.5*(v[0].pageX+v[1].pageX),B=.5*(v[0].pageY+v[1].pageY);p.set(L,B)}}function X(){const L=v[0].pageX-v[1].pageX,B=v[0].pageY-v[1].pageY,ct=Math.sqrt(L*L+B*B);x.set(0,ct)}function At(){n.enableZoom&&X(),n.enablePan&&ot()}function mt(){n.enableZoom&&X(),n.enableRotate&&nt()}function yt(L){if(v.length==1)m.set(L.pageX,L.pageY);else{const ct=bt(L),dt=.5*(L.pageX+ct.x),lt=.5*(L.pageY+ct.y);m.set(dt,lt)}g.subVectors(m,u).multiplyScalar(n.rotateSpeed);const B=n.domElement;C(2*Math.PI*g.x/B.clientHeight),I(2*Math.PI*g.y/B.clientHeight),u.copy(m)}function pt(L){if(v.length===1)f.set(L.pageX,L.pageY);else{const B=bt(L),ct=.5*(L.pageX+B.x),dt=.5*(L.pageY+B.y);f.set(ct,dt)}_.subVectors(f,p).multiplyScalar(n.panSpeed),R(_.x,_.y),p.copy(f)}function Ft(L){const B=bt(L),ct=L.pageX-B.x,dt=L.pageY-B.y,lt=Math.sqrt(ct*ct+dt*dt);w.set(0,lt),b.set(0,Math.pow(w.y/x.y,n.zoomSpeed)),P(b.y),x.copy(w)}function St(L){n.enableZoom&&Ft(L),n.enablePan&&pt(L)}function Mt(L){n.enableZoom&&Ft(L),n.enableRotate&&yt(L)}function se(L){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",Kt),n.domElement.addEventListener("pointerup",Jt)),it(L),L.pointerType==="touch"?A(L):qt(L))}function Kt(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):Ut(L))}function Jt(L){st(L),v.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",Kt),n.domElement.removeEventListener("pointerup",Jt)),n.dispatchEvent(ia),s=i.NONE}function de(L){st(L)}function qt(L){let B;switch(L.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case Wn.DOLLY:if(n.enableZoom===!1)return;K(L),s=i.DOLLY;break;case Wn.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;G(L),s=i.PAN}else{if(n.enableRotate===!1)return;F(L),s=i.ROTATE}break;case Wn.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;F(L),s=i.ROTATE}else{if(n.enablePan===!1)return;G(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(hr)}function Ut(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(L);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(L);break;case i.PAN:if(n.enablePan===!1)return;H(L);break}}function Ce(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(hr),O(L),n.dispatchEvent(ia))}function ge(L){n.enabled===!1||n.enablePan===!1||tt(L)}function A(L){switch(at(L),v.length){case 1:switch(n.touches.ONE){case Hn.ROTATE:if(n.enableRotate===!1)return;nt(),s=i.TOUCH_ROTATE;break;case Hn.PAN:if(n.enablePan===!1)return;ot(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Hn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;At(),s=i.TOUCH_DOLLY_PAN;break;case Hn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(hr)}function S(L){switch(at(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pt(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(L),n.update();break;default:s=i.NONE}}function q(L){n.enabled!==!1&&L.preventDefault()}function it(L){v.push(L)}function st(L){delete T[L.pointerId];for(let B=0;B<v.length;B++)if(v[B].pointerId==L.pointerId){v.splice(B,1);return}}function at(L){let B=T[L.pointerId];B===void 0&&(B=new Tt,T[L.pointerId]=B),B.set(L.pageX,L.pageY)}function bt(L){const B=L.pointerId===v[0].pointerId?v[1]:v[0];return T[B.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",se),n.domElement.addEventListener("pointercancel",de),n.domElement.addEventListener("wheel",Ce,{passive:!1}),this.update()}}class Ge{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new M);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new M);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Ge);const n=this.elements,i=t.elements,s=e.elements,o=n[0],r=n[1],a=n[2],l=n[3],h=n[4],d=n[5],u=n[6],m=n[7],g=n[8],p=i[0],f=i[1],_=i[2],x=i[3],w=i[4],b=i[5],v=i[6],T=i[7],D=i[8];return s[0]=o*p+r*x+a*v,s[1]=o*f+r*w+a*T,s[2]=o*_+r*b+a*D,s[3]=l*p+h*x+d*v,s[4]=l*f+h*w+d*T,s[5]=l*_+h*b+d*D,s[6]=u*p+m*x+g*v,s[7]=u*f+m*w+g*T,s[8]=u*_+m*b+g*D,e}scale(t,e){e===void 0&&(e=new Ge);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new M);const n=3,i=4,s=[];let o,r;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+i*r]=this.elements[o+3*r];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let a=3;const l=a;let h;const d=4;let u;do{if(o=l-a,s[o+i*o]===0){for(r=o+1;r<l;r++)if(s[o+i*r]!==0){h=d;do u=d-h,s[u+i*o]+=s[u+i*r];while(--h);break}}if(s[o+i*o]!==0)for(r=o+1;r<l;r++){const m=s[o+i*r]/s[o+i*o];h=d;do u=d-h,s[u+i*r]=u<=o?0:s[u+i*r]-s[u+i*o]*m;while(--h)}}while(--a);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Ge);const e=3,n=6,i=fp;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let r=3;const a=r;let l;const h=n;let d;do{if(s=a-r,i[s+n*s]===0){for(o=s+1;o<a;o++)if(i[s+n*o]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*o];while(--l);break}}if(i[s+n*s]!==0)for(o=s+1;o<a;o++){const u=i[s+n*o]/i[s+n*s];l=h;do d=h-l,i[d+n*o]=d<=s?0:i[d+n*o]-i[d+n*s]*u;while(--l)}}while(--r);s=2;do{o=s-1;do{const u=i[s+n*o]/i[s+n*s];l=n;do d=n-l,i[d+n*o]=i[d+n*o]-i[d+n*s]*u;while(--l)}while(o--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{o=2;do{if(d=i[e+o+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,d)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,r=n+n,a=i+i,l=e*o,h=e*r,d=e*a,u=n*r,m=n*a,g=i*a,p=s*o,f=s*r,_=s*a,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-_,x[3*0+2]=d+f,x[3*1+0]=h+_,x[3*1+1]=1-(l+g),x[3*1+2]=m-p,x[3*2+0]=d-f,x[3*2+1]=m+p,x[3*2+2]=1-(l+u),this}transpose(t){t===void 0&&(t=new Ge);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const fp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,a=this.z;return e.x=r*s-a*i,e.y=a*n-o*s,e.z=o*i-r*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new M(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new M(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ge([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new M);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,r=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(r-i)*(r-i)}scale(t,e){e===void 0&&(e=new M);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new M),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new M),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new M),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=pp,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=mp;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(sa),sa.almostEquals(t,e)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const pp=new M,mp=new M,sa=new M;class Ae{constructor(t){t===void 0&&(t={}),this.lowerBound=new M,this.upperBound=new M,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,r=n;s.copy(t[0]),r&&r.vmult(s,s),o.copy(s);for(let a=1;a<t.length;a++){let l=t[a];r&&(r.vmult(l,ra),l=ra),l.x>o.x&&(o.x=l.x),l.x<s.x&&(s.x=l.x),l.y>o.y&&(o.y=l.y),l.y<s.y&&(s.y=l.y),l.z>o.z&&(o.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ae().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,r=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&r&&a}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,r,a){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),r.set(l.x,l.y,h.z),a.copy(h)}toLocalFrame(t,e){const n=oa,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,l,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=oa,i=n[0],s=n[1],o=n[2],r=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,o,r,a,l,h,d);for(let u=0;u!==8;u++){const m=n[u];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,r=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,m=Math.max(Math.max(Math.min(r,a),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(r,a),Math.max(l,h)),Math.max(d,u));return!(g<0||m>g)}}const ra=new M,oa=[new M,new M,new M,new M,new M,new M,new M,new M];class aa{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class $a{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class $t{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new M),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=gp,i=_p;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new $t);const n=this.x,i=this.y,s=this.z,o=this.w,r=t.x,a=t.y,l=t.z,h=t.w;return e.x=n*h+o*r+i*l-s*a,e.y=i*h+o*a+s*r-n*l,e.z=s*h+o*l+n*a-i*r,e.w=o*h-n*r-i*a-s*l,e}inverse(t){t===void 0&&(t=new $t);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new $t),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new M);const n=t.x,i=t.y,s=t.z,o=this.x,r=this.y,a=this.z,l=this.w,h=l*n+r*s-a*i,d=l*i+a*n-o*s,u=l*s+o*i-r*n,m=-o*n-r*i-a*s;return e.x=h*l+m*-o+d*-a-u*-r,e.y=d*l+m*-r+u*-o-h*-a,e.z=u*l+m*-a+h*-r-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,r=this.y,a=this.z,l=this.w;switch(e){case"YZX":const h=o*r+a*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,s=0),n===void 0){const d=o*o,u=r*r,m=a*a;n=Math.atan2(2*r*l-2*o*a,1-2*u-2*m),i=Math.asin(2*h),s=Math.atan2(2*o*l-2*r*a,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),r=Math.cos(n/2),a=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*o*r+s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r-a*l*h):i==="YXZ"?(this.x=a*o*r+s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r+a*l*h):i==="ZXY"?(this.x=a*o*r-s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r-a*l*h):i==="ZYX"?(this.x=a*o*r-s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r+a*l*h):i==="YZX"?(this.x=a*o*r+s*l*h,this.y=s*l*r+a*o*h,this.z=s*o*h-a*l*r,this.w=s*o*r-a*l*h):i==="XZY"&&(this.x=a*o*r-s*l*h,this.y=s*l*r-a*o*h,this.z=s*o*h+a*l*r,this.w=s*o*r+a*l*h),this}clone(){return new $t(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new $t);const i=this.x,s=this.y,o=this.z,r=this.w;let a=t.x,l=t.y,h=t.z,d=t.w,u,m,g,p,f;return m=i*a+s*l+o*h+r*d,m<0&&(m=-m,a=-a,l=-l,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),p=Math.sin((1-e)*u)/g,f=Math.sin(e*u)/g):(p=1-e,f=e),n.x=p*i+f*a,n.y=p*s+f*l,n.z=p*o+f*h,n.w=p*r+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new $t);const s=t.x*n.x,o=t.y*n.y,r=t.z*n.z,a=this.x,l=this.y,h=this.z,d=this.w,u=e*.5;return i.x+=u*(s*d+o*h-r*l),i.y+=u*(o*d+r*a-s*h),i.z+=u*(r*d+s*l-o*a),i.w+=u*(-s*a-o*l-r*h),i}}const gp=new M,_p=new M,xp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ut{constructor(t){t===void 0&&(t={}),this.id=ut.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ut.idCounter=0;ut.types=xp;class Ot{constructor(t){t===void 0&&(t={}),this.position=new M,this.quaternion=new $t,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ot.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ot.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),n.vsub(t,i),e.conjugate(la),la.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new M),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new M),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new M),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const la=new $t;class Li extends ut{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:ut.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==t.length;s++){const o=t[s],r=o.length;for(let a=0;a!==r;a++){const l=(a+1)%r;e[o[a]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new M;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Li.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new M,o=new M;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,r,a,l){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const p=h.dot(o);p>u&&(u=p,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const p=n.vertices[n.faces[d][g]],f=new M;f.copy(p),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(o,t,e,m,r,a,l)}findSeparatingAxis(t,e,n,i,s,o,r,a){const l=new M,h=new M,d=new M,u=new M,m=new M,g=new M;let p=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){n.vmult(f.uniqueAxes[_],l);const x=f.testSepAxis(l,t,e,n,i,s);if(x===!1)return!1;x<p&&(p=x,o.copy(l))}else{const _=r?r.length:f.faces.length;for(let x=0;x<_;x++){const w=r?r[x]:x;l.copy(f.faceNormals[w]),n.vmult(l,l);const b=f.testSepAxis(l,t,e,n,i,s);if(b===!1)return!1;b<p&&(p=b,o.copy(l))}}if(t.uniqueAxes)for(let _=0;_!==t.uniqueAxes.length;_++){s.vmult(t.uniqueAxes[_],h);const x=f.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<p&&(p=x,o.copy(h))}else{const _=a?a.length:t.faces.length;for(let x=0;x<_;x++){const w=a?a[x]:x;h.copy(t.faceNormals[w]),s.vmult(h,h);const b=f.testSepAxis(h,t,e,n,i,s);if(b===!1)return!1;b<p&&(p=b,o.copy(h))}}for(let _=0;_!==f.uniqueEdges.length;_++){n.vmult(f.uniqueEdges[_],u);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],m),u.cross(m,g),!g.almostZero()){g.normalize();const w=f.testSepAxis(g,t,e,n,i,s);if(w===!1)return!1;w<p&&(p=w,o.copy(g))}}return i.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const r=this;Li.project(r,t,n,i,ur),Li.project(e,t,s,o,dr);const a=ur[0],l=ur[1],h=dr[0],d=dr[1];if(a<d||h<l)return!1;const u=a-d,m=h-l;return u<m?u:m}calculateLocalInertia(t,e){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,r=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*r*2*r),e.y=1/12*t*(2*s*2*s+2*r*2*r),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,r){const a=new M,l=new M,h=new M,d=new M,u=new M,m=new M,g=new M,p=new M,f=this,_=[],x=i,w=_;let b=-1,v=Number.MAX_VALUE;for(let I=0;I<f.faces.length;I++){a.copy(f.faceNormals[I]),n.vmult(a,a);const W=a.dot(t);W<v&&(v=W,b=I)}if(b<0)return;const T=f.faces[b];T.connectedFaces=[];for(let I=0;I<f.faces.length;I++)for(let W=0;W<f.faces[I].length;W++)T.indexOf(f.faces[I][W])!==-1&&I!==b&&T.connectedFaces.indexOf(I)===-1&&T.connectedFaces.push(I);const D=T.length;for(let I=0;I<D;I++){const W=f.vertices[T[I]],J=f.vertices[T[(I+1)%D]];W.vsub(J,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[b]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(W),n.vmult(m,m),e.vadd(m,m);const R=T.connectedFaces[I];g.copy(this.faceNormals[R]);const P=this.getPlaneConstantOfFace(R);p.copy(g),n.vmult(p,p);const N=P-p.dot(e);for(this.clipFaceAgainstPlane(x,w,p,N);x.length;)x.shift();for(;w.length;)x.push(w.shift())}g.copy(this.faceNormals[b]);const y=this.getPlaneConstantOfFace(b);p.copy(g),n.vmult(p,p);const C=y-p.dot(e);for(let I=0;I<x.length;I++){let W=p.dot(x[I])+C;if(W<=s&&(console.log(`clamped: depth=${W} to minDist=${s}`),W=s),W<=o){const J=x[I];if(W<=1e-6){const R={point:J,normal:p,depth:W};r.push(R)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const r=t.length;if(r<2)return e;let a=t[t.length-1],l=t[0];s=n.dot(a)+i;for(let h=0;h<r;h++){if(l=t[h],o=n.dot(l)+i,s<0)if(o<0){const d=new M;d.copy(l),e.push(d)}else{const d=new M;a.lerp(l,s/(s-o),d),e.push(d)}else if(o<0){const d=new M;a.lerp(l,s/(s-o),d),e.push(d),e.push(l)}a=l,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,r,a,l,h,d,u=new M;for(let m=0;m<s.length;m++){u.copy(s[m]),e.vmult(u,u),t.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(r===void 0||g.y<r)&&(r=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,r,a),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new M);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,o=new M;this.getAveragePointLocal(o);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=e[n[r][0]],h=new M;t.vsub(l,h);const d=a.dot(h),u=new M;o.vsub(l,u);const m=a.dot(u);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(t,e,n,i,s){const o=t.vertices.length,r=vp;let a=0,l=0;const h=yp,d=t.vertices;h.setZero(),Ot.vectorToLocalFrame(n,i,e,r),Ot.pointToLocalFrame(n,i,h,h);const u=h.dot(r);l=a=d[0].dot(r);for(let m=1;m<o;m++){const g=d[m].dot(r);g>a&&(a=g),g<l&&(l=g)}if(l-=u,a-=u,l>a){const m=l;l=a,a=m}s[0]=a,s[1]=l}}const ur=[],dr=[];new M;const vp=new M,yp=new M;class Rr extends ut{constructor(t){super({type:ut.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],r=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new Li({vertices:s,faces:o,axes:r});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new M),Rr.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)xn.set(s[o][0],s[o][1],s[o][2]),e.vmult(xn,xn),t.vadd(xn,xn),n(xn.x,xn.y,xn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;ke[0].set(s.x,s.y,s.z),ke[1].set(-s.x,s.y,s.z),ke[2].set(-s.x,-s.y,s.z),ke[3].set(-s.x,-s.y,-s.z),ke[4].set(s.x,-s.y,-s.z),ke[5].set(s.x,s.y,-s.z),ke[6].set(-s.x,s.y,-s.z),ke[7].set(s.x,-s.y,s.z);const o=ke[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let r=1;r<8;r++){const a=ke[r];e.vmult(a,a),t.vadd(a,a);const l=a.x,h=a.y,d=a.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const xn=new M,ke=[new M,new M,new M,new M,new M,new M,new M,new M],Dr={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ir={AWAKE:0,SLEEPY:1,SLEEPING:2};class ft extends $a{constructor(t){t===void 0&&(t={}),super(),this.id=ft.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new M,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new M,this.force=new M;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ft.STATIC:ft.DYNAMIC,typeof t.type==typeof ft.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ft.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new $t,this.initQuaternion=new $t,this.previousQuaternion=new $t,this.interpolatedQuaternion=new $t,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new M,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new Ge,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new Ge,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new M(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new M(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ae,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ft.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ft.SLEEPING&&this.dispatchEvent(ft.wakeupEvent)}sleep(){this.sleepState=ft.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ft.AWAKE&&n<i?(this.sleepState=ft.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ft.sleepyEvent)):e===ft.SLEEPY&&n>i?this.wakeUp():e===ft.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ft.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ft.SLEEPING||this.type===ft.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new M),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new M),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new M),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new M,s=new $t;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const r=e[s].length(),a=o.boundingSphereRadius;r+a>i&&(i=r+a)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Mp,o=bp,r=this.quaternion,a=this.aabb,l=wp;for(let h=0;h!==i;h++){const d=t[h];r.vmult(e[h],s),s.vadd(this.position,s),r.mult(n[h],o),d.calculateWorldAABB(s,o,l.lowerBound,l.upperBound),h===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Sp,i=Ep;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const n=Ap;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;const n=Cp,i=Lp;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ft.DYNAMIC&&(this.sleepState===ft.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const n=e,i=Pp;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Rp;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new M),this.type!==ft.DYNAMIC)return;const n=Dp,i=Ip;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Np;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Rr.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new M;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ft.DYNAMIC||this.type===ft.KINEMATIC)||this.sleepState===ft.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,r=this.force,a=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*t;i.x+=r.x*m*u.x,i.y+=r.y*m*u.y,i.z+=r.z*m*u.z;const g=d.elements,p=this.angularFactor,f=a.x*p.x,_=a.y*p.y,x=a.z*p.z;s.x+=t*(g[0]*f+g[1]*_+g[2]*x),s.y+=t*(g[3]*f+g[4]*_+g[5]*x),s.z+=t*(g[6]*f+g[7]*_+g[8]*x),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ft.idCounter=0;ft.COLLIDE_EVENT_NAME="collide";ft.DYNAMIC=Dr.DYNAMIC;ft.STATIC=Dr.STATIC;ft.KINEMATIC=Dr.KINEMATIC;ft.AWAKE=Ir.AWAKE;ft.SLEEPY=Ir.SLEEPY;ft.SLEEPING=Ir.SLEEPING;ft.wakeupEvent={type:"wakeup"};ft.sleepyEvent={type:"sleepy"};ft.sleepEvent={type:"sleep"};const Mp=new M,bp=new $t,wp=new Ae,Sp=new Ge,Ep=new Ge,Tp=new Ge,Ap=new M,Cp=new M,Lp=new M,Pp=new M,Rp=new M,Dp=new M,Ip=new M,Np=new M;class zp{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&ft.STATIC||t.sleepState===ft.SLEEPING)&&(e.type&ft.STATIC||e.sleepState===ft.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Fp;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Op,i=Bp,s=Up,o=t.length;for(let r=0;r!==o;r++)i[r]=t[r],s[r]=e[r];t.length=0,e.length=0;for(let r=0;r!==o;r++){const a=i[r].id,l=s[r].id,h=a<l?`${a},${l}`:`${l},${a}`;n[h]=r,n.keys.push(h)}for(let r=0;r!==n.keys.length;r++){const a=n.keys.pop(),l=n[a];t.push(i[l]),e.push(s[l]),delete n[a]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new M;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Fp=new M;new M;new $t;new M;const Op={keys:[]},Bp=[],Up=[];new M;new M;new M;class Gp extends zp{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,r;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)o=i[a],r=i[l],this.needBroadphaseCollision(o,r)&&this.intersectionTest(o,r,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class xs{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,r){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=r}}let Ka,Ja,Qa,tl,el,nl,il;const Nr={CLOSEST:1,ANY:2,ALL:4};Ka=ut.types.SPHERE;Ja=ut.types.PLANE;Qa=ut.types.BOX;tl=ut.types.CYLINDER;el=ut.types.CONVEXPOLYHEDRON;nl=ut.types.HEIGHTFIELD;il=ut.types.TRIMESH;class Zt{get[Ka](){return this._intersectSphere}get[Ja](){return this._intersectPlane}get[Qa](){return this._intersectBox}get[tl](){return this._intersectConvex}get[el](){return this._intersectConvex}get[nl](){return this._intersectHeightfield}get[il](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new M),e===void 0&&(e=new M),this.from=t.clone(),this.to=e.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Zt.ANY,this.result=new xs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Zt.ANY,this.result=e.result||new xs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ca),fr.length=0,t.broadphase.aabbQuery(t,ca,fr),this.intersectBodies(fr),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=kp,s=Vp;for(let o=0,r=t.shapes.length;o<r;o++){const a=t.shapes[o];if(!(n&&!a.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(a,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(nm(s,this.direction,n)>t.boundingSphereRadius)return;const r=this[t.type];r&&r.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,r=this.to,a=this.direction,l=new M(0,0,1);e.vmult(l,l);const h=new M;o.vsub(n,h);const d=h.dot(l);r.vsub(n,h);const u=h.dot(l);if(d*u>0||o.distanceTo(r)<d)return;const m=l.dot(a);if(Math.abs(m)<this.precision)return;const g=new M,p=new M,f=new M;o.vsub(n,g);const _=-l.dot(g)/m;a.scale(_,p),o.vadd(p,f),this.reportIntersection(l,f,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=Wp;o.from.copy(this.from),o.to.copy(this.to),Ot.pointToLocalFrame(n,e,o.from,o.from),Ot.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const r=Hp;let a,l,h,d;a=l=0,h=d=t.data.length-1;const u=new Ae;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,r,!0),a=Math.max(a,r[0]),l=Math.max(l,r[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,r,!0),h=Math.min(h,r[0]+1),d=Math.min(d,r[1]+1);for(let m=a;m<h;m++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(m,g,!1),Ot.pointToWorldFrame(n,e,t.pillarOffset,hs),this._intersectConvex(t.pillarConvex,e,hs,i,s,ha),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Ot.pointToWorldFrame(n,e,t.pillarOffset,hs),this._intersectConvex(t.pillarConvex,e,hs,i,s,ha)}}}_intersectSphere(t,e,n,i,s){const o=this.from,r=this.to,a=t.radius,l=(r.x-o.x)**2+(r.y-o.y)**2+(r.z-o.z)**2,h=2*((r.x-o.x)*(o.x-n.x)+(r.y-o.y)*(o.y-n.y)+(r.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-a**2,u=h**2-4*l*d,m=qp,g=Xp;if(!(u<0))if(u===0)o.lerp(r,u,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const p=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(p>=0&&p<=1&&(o.lerp(r,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(o.lerp(r,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const r=jp,a=ua,l=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,m=this.direction,g=this.from,p=this.to,f=g.distanceTo(p),_=l?l.length:h.length,x=this.result;for(let w=0;!x.shouldStop&&w<_;w++){const b=l?l[w]:w,v=h[b],T=u[b],D=e,y=n;a.copy(d[v[0]]),D.vmult(a,a),a.vadd(y,a),a.vsub(g,a),D.vmult(T,r);const C=m.dot(r);if(Math.abs(C)<this.precision)continue;const I=r.dot(a)/C;if(!(I<0)){m.scale(I,_e),_e.vadd(g,_e),Oe.copy(d[v[0]]),D.vmult(Oe,Oe),y.vadd(Oe,Oe);for(let W=1;!x.shouldStop&&W<v.length-1;W++){Ve.copy(d[v[W]]),We.copy(d[v[W+1]]),D.vmult(Ve,Ve),D.vmult(We,We),y.vadd(Ve,Ve),y.vadd(We,We);const J=_e.distanceTo(g);!(Zt.pointInTriangle(_e,Oe,Ve,We)||Zt.pointInTriangle(_e,Ve,Oe,We))||J>f||this.reportIntersection(r,_e,s,i,b)}}}}_intersectTrimesh(t,e,n,i,s,o){const r=Yp,a=tm,l=em,h=ua,d=Zp,u=$p,m=Kp,g=Qp,p=Jp,f=t.indices;t.vertices;const _=this.from,x=this.to,w=this.direction;l.position.copy(n),l.quaternion.copy(e),Ot.vectorToLocalFrame(n,e,w,d),Ot.pointToLocalFrame(n,e,_,u),Ot.pointToLocalFrame(n,e,x,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,m.vsub(u,d),d.normalize();const b=u.distanceSquared(m);t.tree.rayQuery(this,l,a);for(let v=0,T=a.length;!this.result.shouldStop&&v!==T;v++){const D=a[v];t.getNormal(D,r),t.getVertex(f[D*3],Oe),Oe.vsub(u,h);const y=d.dot(r),C=r.dot(h)/y;if(C<0)continue;d.scale(C,_e),_e.vadd(u,_e),t.getVertex(f[D*3+1],Ve),t.getVertex(f[D*3+2],We);const I=_e.distanceSquared(u);!(Zt.pointInTriangle(_e,Ve,Oe,We)||Zt.pointInTriangle(_e,Oe,Ve,We))||I>b||(Ot.vectorToWorldFrame(e,r,p),Ot.pointToWorldFrame(n,e,_e,g),this.reportIntersection(p,g,s,i,D))}a.length=0}reportIntersection(t,e,n,i,s){const o=this.from,r=this.to,a=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Zt.ALL:this.hasHit=!0,l.set(o,r,t,e,n,i,a),l.hasHit=!0,this.callback(l);break;case Zt.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,r,t,e,n,i,a));break;case Zt.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,r,t,e,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Dn),n.vsub(e,wi),t.vsub(e,pr);const s=Dn.dot(Dn),o=Dn.dot(wi),r=Dn.dot(pr),a=wi.dot(wi),l=wi.dot(pr);let h,d;return(h=a*r-o*l)>=0&&(d=s*l-o*r)>=0&&h+d<s*a-o*o}}Zt.CLOSEST=Nr.CLOSEST;Zt.ANY=Nr.ANY;Zt.ALL=Nr.ALL;const ca=new Ae,fr=[],wi=new M,pr=new M,kp=new M,Vp=new $t,_e=new M,Oe=new M,Ve=new M,We=new M;new M;new xs;const ha={faceList:[0]},hs=new M,Wp=new Zt,Hp=[],qp=new M,Xp=new M,jp=new M;new M;new M;const ua=new M,Yp=new M,Zp=new M,$p=new M,Kp=new M,Jp=new M,Qp=new M;new Ae;const tm=[],em=new Ot,Dn=new M,us=new M;function nm(c,t,e){e.vsub(c,Dn);const n=Dn.dot(t);return t.scale(n,us),us.vadd(c,us),e.distanceTo(us)}class im{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class da{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ui{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ui.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new da,this.jacobianElementB=new da,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,r=n.angularVelocity,a=i.angularVelocity;return t.multiplyVectors(s,r)+e.multiplyVectors(o,a)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,r=n.wlambda,a=i.wlambda;return t.multiplyVectors(s,r)+e.multiplyVectors(o,a)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,r=i.force,a=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,fa),r.scale(h,pa),n.invInertiaWorldSolve.vmult(o,ma),i.invInertiaWorldSolve.vmult(a,ga),t.multiplyVectors(fa,ma)+e.multiplyVectors(pa,ga)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,r=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=s+o;return r.vmult(t.rotational,ds),l+=ds.dot(t.rotational),a.vmult(e.rotational,ds),l+=ds.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=sm;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ui.idCounter=0;const fa=new M,pa=new M,ma=new M,ga=new M,ds=new M,sm=new M;class rm extends Ui{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,r=this.rj,a=om,l=am,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=lm,p=this.jacobianElementA,f=this.jacobianElementB,_=this.ni;o.cross(_,a),r.cross(_,l),_.negate(p.spatial),a.negate(p.rotational),f.spatial.copy(_),f.rotational.copy(l),g.copy(s.position),g.vadd(r,g),g.vsub(i.position,g),g.vsub(o,g);const x=_.dot(g),w=this.restitution+1,b=w*u.dot(_)-w*h.dot(_)+m.dot(l)-d.dot(a),v=this.computeGiMf();return-x*e-b*n-t*v}getImpactVelocityAlongNormal(){const t=cm,e=hm,n=um,i=dm,s=fm;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const om=new M,am=new M,lm=new M,cm=new M,hm=new M,um=new M,dm=new M,fm=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class _a extends Ui{constructor(t,e,n){super(t,e,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=pm,o=mm,r=this.t;n.cross(r,s),i.cross(r,o);const a=this.jacobianElementA,l=this.jacobianElementB;r.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(r),l.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}}const pm=new M,mm=new M;class ws{constructor(t,e,n){n=im.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ws.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ws.idCounter=0;class Ss{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Ss.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Ss.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Zt;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class gm extends ut{constructor(t){if(super({type:ut.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new M);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,o=["x","y","z"];for(let r=0;r<o.length;r++){const a=o[r];n[a]=t[a]-s,i[a]=t[a]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class _m extends ut{constructor(){super({type:ut.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new M),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){nn.set(0,0,1),e.vmult(nn,nn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),nn.x===1?i.x=t.x:nn.x===-1&&(n.x=t.x),nn.y===1?i.y=t.y:nn.y===-1&&(n.y=t.y),nn.z===1?i.z=t.z:nn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const nn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ae;new M;new Ae;new M;new M;new M;new M;new M;new M;new M;new Ae;new M;new Ot;new Ae;class xm{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class vm extends xm{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,r=o.length,a=e.bodies,l=a.length,h=t;let d,u,m,g,p,f;if(r!==0)for(let b=0;b!==l;b++)a[b].updateSolveMassProperties();const _=Mm,x=bm,w=ym;_.length=r,x.length=r,w.length=r;for(let b=0;b!==r;b++){const v=o[b];w[b]=0,x[b]=v.computeB(h),_[b]=1/v.computeC()}if(r!==0){for(let T=0;T!==l;T++){const D=a[T],y=D.vlambda,C=D.wlambda;y.set(0,0,0),C.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==r;T++){const D=o[T];d=x[T],u=_[T],f=w[T],p=D.computeGWlambda(),m=u*(d-p-D.eps*f),f+m<D.minForce?m=D.minForce-f:f+m>D.maxForce&&(m=D.maxForce-f),w[T]+=m,g+=m>0?m:-m,D.addToWlambda(m)}if(g*g<s)break}for(let T=0;T!==l;T++){const D=a[T],y=D.velocity,C=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),y.vadd(D.vlambda,y),D.wlambda.vmul(D.angularFactor,D.wlambda),C.vadd(D.wlambda,C)}let b=o.length;const v=1/h;for(;b--;)o[b].multiplier=w[b]*v}return n}}const ym=[],Mm=[],bm=[];ft.STATIC;class wm{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Sm extends wm{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const Vt={sphereSphere:ut.types.SPHERE,spherePlane:ut.types.SPHERE|ut.types.PLANE,boxBox:ut.types.BOX|ut.types.BOX,sphereBox:ut.types.SPHERE|ut.types.BOX,planeBox:ut.types.PLANE|ut.types.BOX,convexConvex:ut.types.CONVEXPOLYHEDRON,sphereConvex:ut.types.SPHERE|ut.types.CONVEXPOLYHEDRON,planeConvex:ut.types.PLANE|ut.types.CONVEXPOLYHEDRON,boxConvex:ut.types.BOX|ut.types.CONVEXPOLYHEDRON,sphereHeightfield:ut.types.SPHERE|ut.types.HEIGHTFIELD,boxHeightfield:ut.types.BOX|ut.types.HEIGHTFIELD,convexHeightfield:ut.types.CONVEXPOLYHEDRON|ut.types.HEIGHTFIELD,sphereParticle:ut.types.PARTICLE|ut.types.SPHERE,planeParticle:ut.types.PLANE|ut.types.PARTICLE,boxParticle:ut.types.BOX|ut.types.PARTICLE,convexParticle:ut.types.PARTICLE|ut.types.CONVEXPOLYHEDRON,cylinderCylinder:ut.types.CYLINDER,sphereCylinder:ut.types.SPHERE|ut.types.CYLINDER,planeCylinder:ut.types.PLANE|ut.types.CYLINDER,boxCylinder:ut.types.BOX|ut.types.CYLINDER,convexCylinder:ut.types.CONVEXPOLYHEDRON|ut.types.CYLINDER,heightfieldCylinder:ut.types.HEIGHTFIELD|ut.types.CYLINDER,particleCylinder:ut.types.PARTICLE|ut.types.CYLINDER,sphereTrimesh:ut.types.SPHERE|ut.types.TRIMESH,planeTrimesh:ut.types.PLANE|ut.types.TRIMESH};class Em{get[Vt.sphereSphere](){return this.sphereSphere}get[Vt.spherePlane](){return this.spherePlane}get[Vt.boxBox](){return this.boxBox}get[Vt.sphereBox](){return this.sphereBox}get[Vt.planeBox](){return this.planeBox}get[Vt.convexConvex](){return this.convexConvex}get[Vt.sphereConvex](){return this.sphereConvex}get[Vt.planeConvex](){return this.planeConvex}get[Vt.boxConvex](){return this.boxConvex}get[Vt.sphereHeightfield](){return this.sphereHeightfield}get[Vt.boxHeightfield](){return this.boxHeightfield}get[Vt.convexHeightfield](){return this.convexHeightfield}get[Vt.sphereParticle](){return this.sphereParticle}get[Vt.planeParticle](){return this.planeParticle}get[Vt.boxParticle](){return this.boxParticle}get[Vt.convexParticle](){return this.convexParticle}get[Vt.cylinderCylinder](){return this.convexConvex}get[Vt.sphereCylinder](){return this.sphereConvex}get[Vt.planeCylinder](){return this.planeConvex}get[Vt.boxCylinder](){return this.boxConvex}get[Vt.convexCylinder](){return this.convexConvex}get[Vt.heightfieldCylinder](){return this.heightfieldCylinder}get[Vt.particleCylinder](){return this.particleCylinder}get[Vt.sphereTrimesh](){return this.sphereTrimesh}get[Vt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Sm,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let r;this.contactPointPool.length?(r=this.contactPointPool.pop(),r.bi=t,r.bj=e):r=new rm(t,e),r.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;r.restitution=a.restitution,r.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(r.restitution=l.restitution*h.restitution),r.si=s||n,r.sj=o||i,r}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,r=this.world,a=this.currentContactMaterial;let l=a.friction;const h=s.material||n.material,d=o.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(r.frictionGravity||r.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,p=g.length?g.pop():new _a(n,i,u*m),f=g.length?g.pop():new _a(n,i,u*m);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-u*m,p.maxForce=f.maxForce=u*m,p.ri.copy(t.ri),p.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(p.t,f.t),p.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),p.enabled=f.enabled=t.enabled,e.push(p,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Cn.setZero(),ri.setZero(),oi.setZero();const s=e.bi;e.bj;for(let r=0;r!==t;r++)e=this.result[this.result.length-1-r],e.bi!==s?(Cn.vadd(e.ni,Cn),ri.vadd(e.ri,ri),oi.vadd(e.rj,oi)):(Cn.vsub(e.ni,Cn),ri.vadd(e.rj,ri),oi.vadd(e.ri,oi));const o=1/t;ri.scale(o,n.ri),oi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Cn.normalize(),Cn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,r){this.contactPointPool=s,this.frictionEquationPool=r,this.result=i,this.frictionResult=o;const a=Cm,l=Lm,h=Tm,d=Am;for(let u=0,m=t.length;u!==m;u++){const g=t[u],p=e[u];let f=null;g.material&&p.material&&(f=n.getContactMaterial(g.material,p.material)||null);const _=g.type&ft.KINEMATIC&&p.type&ft.STATIC||g.type&ft.STATIC&&p.type&ft.KINEMATIC||g.type&ft.KINEMATIC&&p.type&ft.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],a),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const w=g.shapes[x];for(let b=0;b<p.shapes.length;b++){p.quaternion.mult(p.shapeOrientations[b],l),p.quaternion.vmult(p.shapeOffsets[b],d),d.vadd(p.position,d);const v=p.shapes[b];if(!(w.collisionFilterMask&v.collisionFilterGroup&&v.collisionFilterMask&w.collisionFilterGroup)||h.distanceTo(d)>w.boundingSphereRadius+v.boundingSphereRadius)continue;let T=null;w.material&&v.material&&(T=n.getContactMaterial(w.material,v.material)||null),this.currentContactMaterial=T||f||n.defaultContactMaterial;const D=w.type|v.type,y=this[D];if(y){let C=!1;w.type<v.type?C=y.call(this,w,v,h,d,a,l,g,p,w,v,_):C=y.call(this,v,w,d,h,l,a,p,g,w,v,_),C&&_&&(n.shapeOverlapKeeper.set(w.id,v.id),n.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(t,e,n,i,s,o,r,a,l,h,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const u=this.createContactEquation(r,a,t,e,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(r.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,i,s,o,r,a,l,h,d){const u=this.createContactEquation(r,a,t,e,l,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(i,fs),u.ni.scale(u.ni.dot(fs),xa),fs.vsub(xa,u.rj),-fs.dot(u.ni)<=t.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(n,m),m.vsub(r.position,m),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,r,a,t,e,d)}sphereBox(t,e,n,i,s,o,r,a,l,h,d){const u=this.v3pool,m=eg;n.vsub(i,ps),e.getSideNormals(m,o);const g=t.radius;let p=!1;const f=ig,_=sg,x=rg;let w=null,b=0,v=0,T=0,D=null;for(let F=0,K=m.length;F!==K&&p===!1;F++){const G=Jm;G.copy(m[F]);const Z=G.length();G.normalize();const Q=ps.dot(G);if(Q<Z+g&&Q>0){const H=Qm,O=tg;H.copy(m[(F+1)%3]),O.copy(m[(F+2)%3]);const tt=H.length(),nt=O.length();H.normalize(),O.normalize();const ot=ps.dot(H),X=ps.dot(O);if(ot<tt&&ot>-tt&&X<nt&&X>-nt){const At=Math.abs(Q-Z-g);if((D===null||At<D)&&(D=At,v=ot,T=X,w=Z,f.copy(G),_.copy(H),x.copy(O),b++,d))return!0}}}if(b){p=!0;const F=this.createContactEquation(r,a,t,e,l,h);f.scale(-g,F.ri),F.ni.copy(f),F.ni.negate(F.ni),f.scale(w,f),_.scale(v,_),f.vadd(_,f),x.scale(T,x),f.vadd(x,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(r.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(a.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let y=u.get();const C=ng;for(let F=0;F!==2&&!p;F++)for(let K=0;K!==2&&!p;K++)for(let G=0;G!==2&&!p;G++)if(y.set(0,0,0),F?y.vadd(m[0],y):y.vsub(m[0],y),K?y.vadd(m[1],y):y.vsub(m[1],y),G?y.vadd(m[2],y):y.vsub(m[2],y),i.vadd(y,C),C.vsub(n,C),C.lengthSquared()<g*g){if(d)return!0;p=!0;const Z=this.createContactEquation(r,a,t,e,l,h);Z.ri.copy(C),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(g,Z.ri),Z.rj.copy(y),Z.ri.vadd(n,Z.ri),Z.ri.vsub(r.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(a.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}u.release(y),y=null;const I=u.get(),W=u.get(),J=u.get(),R=u.get(),P=u.get(),N=m.length;for(let F=0;F!==N&&!p;F++)for(let K=0;K!==N&&!p;K++)if(F%3!==K%3){m[K].cross(m[F],I),I.normalize(),m[F].vadd(m[K],W),J.copy(n),J.vsub(W,J),J.vsub(i,J);const G=J.dot(I);I.scale(G,R);let Z=0;for(;Z===F%3||Z===K%3;)Z++;P.copy(n),P.vsub(R,P),P.vsub(W,P),P.vsub(i,P);const Q=Math.abs(G),H=P.length();if(Q<m[Z].length()&&H<g){if(d)return!0;p=!0;const O=this.createContactEquation(r,a,t,e,l,h);W.vadd(R,O.rj),O.rj.copy(O.rj),P.negate(O.ni),O.ni.normalize(),O.ri.copy(O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(n,O.ri),O.ri.normalize(),O.ri.scale(g,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(a.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}u.release(I,W,J,R,P)}planeBox(t,e,n,i,s,o,r,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,r,a,t,e,d)}convexConvex(t,e,n,i,s,o,r,a,l,h,d,u,m){const g=yg;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,u,m)){const p=[],f=Mg;t.clipAgainstHull(n,s,e,i,o,g,-100,100,p);let _=0;for(let x=0;x!==p.length;x++){if(d)return!0;const w=this.createContactEquation(r,a,t,e,l,h),b=w.ri,v=w.rj;g.negate(w.ni),p[x].normal.negate(f),f.scale(p[x].depth,f),p[x].point.vadd(f,b),v.copy(p[x].point),b.vsub(n,b),v.vsub(i,v),b.vadd(n,b),b.vsub(r.position,b),v.vadd(i,v),v.vsub(a.position,v),this.result.push(w),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(t,e,n,i,s,o,r,a,l,h,d){const u=this.v3pool;n.vsub(i,og);const m=e.faceNormals,g=e.faces,p=e.vertices,f=t.radius;let _=!1;for(let x=0;x!==p.length;x++){const w=p[x],b=hg;o.vmult(w,b),i.vadd(b,b);const v=cg;if(b.vsub(n,v),v.lengthSquared()<f*f){if(d)return!0;_=!0;const T=this.createContactEquation(r,a,t,e,l,h);T.ri.copy(v),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(f,T.ri),b.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(r.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(a.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,w=g.length;x!==w&&_===!1;x++){const b=m[x],v=g[x],T=ug;o.vmult(b,T);const D=dg;o.vmult(p[v[0]],D),D.vadd(i,D);const y=fg;T.scale(-f,y),n.vadd(y,y);const C=pg;y.vsub(D,C);const I=C.dot(T),W=mg;if(n.vsub(D,W),I<0&&W.dot(T)>0){const J=[];for(let R=0,P=v.length;R!==P;R++){const N=u.get();o.vmult(p[v[R]],N),i.vadd(N,N),J.push(N)}if(Km(J,T,n)){if(d)return!0;_=!0;const R=this.createContactEquation(r,a,t,e,l,h);T.scale(-f,R.ri),T.negate(R.ni);const P=u.get();T.scale(-I,P);const N=u.get();T.scale(-f,N),n.vsub(i,R.rj),R.rj.vadd(N,R.rj),R.rj.vadd(P,R.rj),R.rj.vadd(i,R.rj),R.rj.vsub(a.position,R.rj),R.ri.vadd(n,R.ri),R.ri.vsub(r.position,R.ri),u.release(P),u.release(N),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult);for(let F=0,K=J.length;F!==K;F++)u.release(J[F]);return}else for(let R=0;R!==v.length;R++){const P=u.get(),N=u.get();o.vmult(p[v[(R+1)%v.length]],P),o.vmult(p[v[(R+2)%v.length]],N),i.vadd(P,P),i.vadd(N,N);const F=ag;N.vsub(P,F);const K=lg;F.unit(K);const G=u.get(),Z=u.get();n.vsub(P,Z);const Q=Z.dot(K);K.scale(Q,G),G.vadd(P,G);const H=u.get();if(G.vsub(n,H),Q>0&&Q*Q<F.lengthSquared()&&H.lengthSquared()<f*f){if(d)return!0;const O=this.createContactEquation(r,a,t,e,l,h);G.vsub(i,O.rj),G.vsub(n,O.ni),O.ni.normalize(),O.ni.scale(f,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(a.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(r.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let tt=0,nt=J.length;tt!==nt;tt++)u.release(J[tt]);u.release(P),u.release(N),u.release(G),u.release(H),u.release(Z);return}u.release(P),u.release(N),u.release(G),u.release(H),u.release(Z)}for(let R=0,P=J.length;R!==P;R++)u.release(J[R])}}}planeConvex(t,e,n,i,s,o,r,a,l,h,d){const u=gg,m=_g;m.set(0,0,1),s.vmult(m,m);let g=0;const p=xg;for(let f=0;f!==e.vertices.length;f++)if(u.copy(e.vertices[f]),o.vmult(u,u),i.vadd(u,u),u.vsub(n,p),m.dot(p)<=0){if(d)return!0;const x=this.createContactEquation(r,a,t,e,l,h),w=vg;m.scale(m.dot(p),w),u.vsub(w,w),w.vsub(n,x.ri),x.ni.copy(m),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(r.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,r,a,t,e,d)}sphereHeightfield(t,e,n,i,s,o,r,a,l,h,d){const u=e.data,m=t.radius,g=e.elementSize,p=Ig,f=Dg;Ot.pointToLocalFrame(i,o,n,f);let _=Math.floor((f.x-m)/g)-1,x=Math.ceil((f.x+m)/g)+1,w=Math.floor((f.y-m)/g)-1,b=Math.ceil((f.y+m)/g)+1;if(x<0||b<0||_>u.length||w>u[0].length)return;_<0&&(_=0),x<0&&(x=0),w<0&&(w=0),b<0&&(b=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),b>=u[0].length&&(b=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);const v=[];e.getRectMinMax(_,w,x,b,v);const T=v[0],D=v[1];if(f.z-m>D||f.z+m<T)return;const y=this.result;for(let C=_;C<x;C++)for(let I=w;I<b;I++){const W=y.length;let J=!1;if(e.getConvexTrianglePillar(C,I,!1),Ot.pointToWorldFrame(i,o,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(J=this.sphereConvex(t,e.pillarConvex,n,p,s,o,r,a,t,e,d)),d&&J||(e.getConvexTrianglePillar(C,I,!0),Ot.pointToWorldFrame(i,o,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(J=this.sphereConvex(t,e.pillarConvex,n,p,s,o,r,a,t,e,d)),d&&J))return!0;if(y.length-W>2)return}}boxHeightfield(t,e,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,r,a,t,e,d)}convexHeightfield(t,e,n,i,s,o,r,a,l,h,d){const u=e.data,m=e.elementSize,g=t.boundingSphereRadius,p=Pg,f=Rg,_=Lg;Ot.pointToLocalFrame(i,o,n,_);let x=Math.floor((_.x-g)/m)-1,w=Math.ceil((_.x+g)/m)+1,b=Math.floor((_.y-g)/m)-1,v=Math.ceil((_.y+g)/m)+1;if(w<0||v<0||x>u.length||b>u[0].length)return;x<0&&(x=0),w<0&&(w=0),b<0&&(b=0),v<0&&(v=0),x>=u.length&&(x=u.length-1),w>=u.length&&(w=u.length-1),v>=u[0].length&&(v=u[0].length-1),b>=u[0].length&&(b=u[0].length-1);const T=[];e.getRectMinMax(x,b,w,v,T);const D=T[0],y=T[1];if(!(_.z-g>y||_.z+g<D))for(let C=x;C<w;C++)for(let I=b;I<v;I++){let W=!1;if(e.getConvexTrianglePillar(C,I,!1),Ot.pointToWorldFrame(i,o,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.convexConvex(t,e.pillarConvex,n,p,s,o,r,a,null,null,d,f,null)),d&&W||(e.getConvexTrianglePillar(C,I,!0),Ot.pointToWorldFrame(i,o,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(W=this.convexConvex(t,e.pillarConvex,n,p,s,o,r,a,null,null,d,f,null)),d&&W))return!0}}sphereParticle(t,e,n,i,s,o,r,a,l,h,d){const u=Eg;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(a,r,e,t,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,r,a,l,h,d){const u=bg;u.set(0,0,1),r.quaternion.vmult(u,u);const m=wg;if(i.vsub(r.position,m),u.dot(m)<=0){if(d)return!0;const p=this.createContactEquation(a,r,e,t,l,h);p.ni.copy(u),p.ni.negate(p.ni),p.ri.set(0,0,0);const f=Sg;u.scale(u.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(t,e,n,i,s,o,r,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,r,a,t,e,d)}convexParticle(t,e,n,i,s,o,r,a,l,h,d){let u=-1;const m=Ag,g=Cg;let p=null;const f=Tg;if(f.copy(i),f.vsub(n,f),s.conjugate(va),va.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let _=0,x=t.faces.length;_!==x;_++){const w=[t.worldVertices[t.faces[_][0]]],b=t.worldFaceNormals[_];i.vsub(w[0],ya);const v=-b.dot(ya);if(p===null||Math.abs(v)<Math.abs(p)){if(d)return!0;p=v,u=_,m.copy(b)}}if(u!==-1){const _=this.createContactEquation(a,r,e,t,l,h);m.scale(p,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const x=_.ri,w=_.rj;x.vadd(i,x),x.vsub(a.position,x),w.vadd(n,w),w.vsub(r.position,w),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,r,a,l,h,d){return this.convexHeightfield(e,t,i,n,o,s,a,r,l,h,d)}particleCylinder(t,e,n,i,s,o,r,a,l,h,d){return this.convexParticle(e,t,i,n,o,s,a,r,l,h,d)}sphereTrimesh(t,e,n,i,s,o,r,a,l,h,d){const u=Om,m=Bm,g=Um,p=Gm,f=km,_=Vm,x=Xm,w=Fm,b=Nm,v=jm;Ot.pointToLocalFrame(i,o,n,f);const T=t.radius;x.lowerBound.set(f.x-T,f.y-T,f.z-T),x.upperBound.set(f.x+T,f.y+T,f.z+T),e.getTrianglesInAABB(x,v);const D=zm,y=t.radius*t.radius;for(let R=0;R<v.length;R++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[v[R]*3+P],D),D.vsub(f,b),b.lengthSquared()<=y){if(w.copy(D),Ot.pointToWorldFrame(i,o,w,D),D.vsub(n,b),d)return!0;let N=this.createContactEquation(r,a,t,e,l,h);N.ni.copy(b),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(r.position,N.ri),N.rj.copy(D),N.rj.vsub(a.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let R=0;R<v.length;R++)for(let P=0;P<3;P++){e.getVertex(e.indices[v[R]*3+P],u),e.getVertex(e.indices[v[R]*3+(P+1)%3],m),m.vsub(u,g),f.vsub(m,_);const N=_.dot(g);f.vsub(u,_);let F=_.dot(g);if(F>0&&N<0&&(f.vsub(u,_),p.copy(g),p.normalize(),F=_.dot(p),p.scale(F,_),_.vadd(u,_),_.distanceTo(f)<t.radius)){if(d)return!0;const G=this.createContactEquation(r,a,t,e,l,h);_.vsub(f,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(r.position,G.ri),Ot.pointToWorldFrame(i,o,_,_),_.vsub(a.position,G.rj),Ot.vectorToWorldFrame(o,G.ni,G.ni),Ot.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const C=Wm,I=Hm,W=qm,J=Im;for(let R=0,P=v.length;R!==P;R++){e.getTriangleVertices(v[R],C,I,W),e.getNormal(v[R],J),f.vsub(C,_);let N=_.dot(J);if(J.scale(N,_),f.vsub(_,_),N=_.distanceTo(f),Zt.pointInTriangle(_,C,I,W)&&N<t.radius){if(d)return!0;let F=this.createContactEquation(r,a,t,e,l,h);_.vsub(f,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(r.position,F.ri),Ot.pointToWorldFrame(i,o,_,_),_.vsub(a.position,F.rj),Ot.vectorToWorldFrame(o,F.ni,F.ni),Ot.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}v.length=0}planeTrimesh(t,e,n,i,s,o,r,a,l,h,d){const u=new M,m=Pm;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);const p=new M;p.copy(u),Ot.pointToWorldFrame(i,o,p,u);const f=Rm;if(u.vsub(n,f),m.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(r,a,t,e,l,h);x.ni.copy(m);const w=Dm;m.scale(f.dot(m),w),u.vsub(w,w),x.ri.copy(w),x.ri.vsub(r.position,x.ri),x.rj.copy(u),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const Cn=new M,ri=new M,oi=new M,Tm=new M,Am=new M,Cm=new $t,Lm=new $t,Pm=new M,Rm=new M,Dm=new M,Im=new M,Nm=new M;new M;const zm=new M,Fm=new M,Om=new M,Bm=new M,Um=new M,Gm=new M,km=new M,Vm=new M,Wm=new M,Hm=new M,qm=new M,Xm=new Ae,jm=[],fs=new M,xa=new M,Ym=new M,Zm=new M,$m=new M;function Km(c,t,e){let n=null;const i=c.length;for(let s=0;s!==i;s++){const o=c[s],r=Ym;c[(s+1)%i].vsub(o,r);const a=Zm;r.cross(t,a);const l=$m;e.vsub(o,l);const h=a.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ps=new M,Jm=new M,Qm=new M,tg=new M,eg=[new M,new M,new M,new M,new M,new M],ng=new M,ig=new M,sg=new M,rg=new M,og=new M,ag=new M,lg=new M,cg=new M,hg=new M,ug=new M,dg=new M,fg=new M,pg=new M,mg=new M;new M;new M;const gg=new M,_g=new M,xg=new M,vg=new M,yg=new M,Mg=new M,bg=new M,wg=new M,Sg=new M,Eg=new M,va=new $t,Tg=new M;new M;const Ag=new M,ya=new M,Cg=new M,Lg=new M,Pg=new M,Rg=[0],Dg=new M,Ig=new M;class Ma{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let r=0;for(let a=0;a<s;a++){let l=!1;const h=n[a];for(;h>i[r];)r++;l=h===i[r],l||ba(t,h)}r=0;for(let a=0;a<o;a++){let l=!1;const h=i[a];for(;h>n[r];)r++;l=n[r]===h,l||ba(e,h)}}}function ba(c,t){c.push((t&4294901760)>>16,t&65535)}const mr=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class Ng{constructor(){this.data={keys:[]}}get(t,e){const n=mr(t,e);return this.data[n]}set(t,e,n){const i=mr(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=mr(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class zg extends $a{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Gp,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new vm,this.constraints=[],this.narrowphase=new Em(this),this.collisionMatrix=new aa,this.collisionMatrixPrevious=new aa,this.bodyOverlapKeeper=new Ma,this.shapeOverlapKeeper=new Ma,this.contactmaterials=[],this.contactMaterialTable=new Ng,this.defaultMaterial=new Ss("default"),this.defaultContactMaterial=new ws(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof xs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Zt.ALL,n.from=t,n.to=e,n.callback=i,gr.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Zt.ANY,n.from=t,n.to=e,n.result=i,gr.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Zt.CLOSEST,n.from=t,n.to=e,n.result=i,gr.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ft&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=te.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=te.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(te.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let r=0;r!==this.bodies.length;r++){const a=this.bodies[r];a.previousPosition.lerp(a.position,o,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,o,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Gg,i=kg,s=this.bodies.length,o=this.bodies,r=this.solver,a=this.gravity,l=this.doProfiling,h=this.profile,d=ft.DYNAMIC;let u=-1/0;const m=this.constraints,g=Ug;a.length();const p=a.x,f=a.y,_=a.z;let x=0;for(l&&(u=te.now()),x=0;x!==s;x++){const R=o[x];if(R.type===d){const P=R.force,N=R.mass;P.x+=N*p,P.y+=N*f,P.z+=N*_}}for(let R=0,P=this.subsystems.length;R!==P;R++)this.subsystems[R].update();l&&(u=te.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=te.now()-u);let w=m.length;for(x=0;x!==w;x++){const R=m[x];if(!R.collideConnected)for(let P=n.length-1;P>=0;P-=1)(R.bodyA===n[P]&&R.bodyB===i[P]||R.bodyB===n[P]&&R.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(u=te.now());const b=Bg,v=e.length;for(x=0;x!==v;x++)b.push(e[x]);e.length=0;const T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,b,this.frictionEquations,g),l&&(h.narrowphase=te.now()-u),l&&(u=te.now()),x=0;x<this.frictionEquations.length;x++)r.addEquation(this.frictionEquations[x]);const D=e.length;for(let R=0;R!==D;R++){const P=e[R],N=P.bi,F=P.bj,K=P.si,G=P.sj;let Z;if(N.material&&F.material?Z=this.getContactMaterial(N.material,F.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,N.material&&F.material&&(N.material.friction>=0&&F.material.friction>=0&&N.material.friction*F.material.friction,N.material.restitution>=0&&F.material.restitution>=0&&(P.restitution=N.material.restitution*F.material.restitution)),r.addEquation(P),N.allowSleep&&N.type===ft.DYNAMIC&&N.sleepState===ft.SLEEPING&&F.sleepState===ft.AWAKE&&F.type!==ft.STATIC){const Q=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),H=F.sleepSpeedLimit**2;Q>=H*2&&(N.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===ft.DYNAMIC&&F.sleepState===ft.SLEEPING&&N.sleepState===ft.AWAKE&&N.type!==ft.STATIC){const Q=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),H=N.sleepSpeedLimit**2;Q>=H*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,F,!0),this.collisionMatrixPrevious.get(N,F)||(Si.body=F,Si.contact=P,N.dispatchEvent(Si),Si.body=N,F.dispatchEvent(Si)),this.bodyOverlapKeeper.set(N.id,F.id),this.shapeOverlapKeeper.set(K.id,G.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=te.now()-u,u=te.now()),x=0;x!==s;x++){const R=o[x];R.wakeUpAfterNarrowphase&&(R.wakeUp(),R.wakeUpAfterNarrowphase=!1)}for(w=m.length,x=0;x!==w;x++){const R=m[x];R.update();for(let P=0,N=R.equations.length;P!==N;P++){const F=R.equations[P];r.addEquation(F)}}r.solve(t,this),l&&(h.solve=te.now()-u),r.removeAllEquations();const y=Math.pow;for(x=0;x!==s;x++){const R=o[x];if(R.type&d){const P=y(1-R.linearDamping,t),N=R.velocity;N.scale(P,N);const F=R.angularVelocity;if(F){const K=y(1-R.angularDamping,t);F.scale(K,F)}}}this.dispatchEvent(Og),l&&(u=te.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,W=this.quatNormalizeFast;for(x=0;x!==s;x++)o[x].integrate(t,I,W);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=te.now()-u),this.stepnumber+=1,this.dispatchEvent(Fg);let J=!0;if(this.allowSleep)for(J=!1,x=0;x!==s;x++){const R=o[x];R.sleepTick(this.time),R.sleepState!==ft.SLEEPING&&(J=!0)}this.hasActiveBodies=J}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(sn,rn),t){for(let s=0,o=sn.length;s<o;s+=2)Ei.bodyA=this.getBodyById(sn[s]),Ei.bodyB=this.getBodyById(sn[s+1]),this.dispatchEvent(Ei);Ei.bodyA=Ei.bodyB=null}if(e){for(let s=0,o=rn.length;s<o;s+=2)Ti.bodyA=this.getBodyById(rn[s]),Ti.bodyB=this.getBodyById(rn[s+1]),this.dispatchEvent(Ti);Ti.bodyA=Ti.bodyB=null}sn.length=rn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(sn,rn),n){for(let s=0,o=sn.length;s<o;s+=2){const r=this.getShapeById(sn[s]),a=this.getShapeById(sn[s+1]);on.shapeA=r,on.shapeB=a,r&&(on.bodyA=r.body),a&&(on.bodyB=a.body),this.dispatchEvent(on)}on.bodyA=on.bodyB=on.shapeA=on.shapeB=null}if(i){for(let s=0,o=rn.length;s<o;s+=2){const r=this.getShapeById(rn[s]),a=this.getShapeById(rn[s+1]);an.shapeA=r,an.shapeB=a,r&&(an.bodyA=r.body),a&&(an.bodyB=a.body),this.dispatchEvent(an)}an.bodyA=an.bodyB=an.shapeA=an.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ae;const gr=new Zt,te=globalThis.performance||{};if(!te.now){let c=Date.now();te.timing&&te.timing.navigationStart&&(c=te.timing.navigationStart),te.now=()=>Date.now()-c}new M;const Fg={type:"postStep"},Og={type:"preStep"},Si={type:ft.COLLIDE_EVENT_NAME,body:null,contact:null},Bg=[],Ug=[],Gg=[],kg=[],sn=[],rn=[],Ei={type:"beginContact",bodyA:null,bodyB:null},Ti={type:"endContact",bodyA:null,bodyB:null},on={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},an={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Vg=document.getElementById("three"),Gi=new ap,Di=new De(75,window.innerWidth/window.innerHeight,.1,1e3);Di.position.set(5,7,10);const ki=new ja({canvas:Vg});ki.setSize(window.innerWidth,window.innerHeight);ki.shadowMap.enabled=!0;const zr=new hp(16777215,1);zr.position.set(5,10,5);zr.castShadow=!0;Gi.add(zr);const Wg=new up(4210752,.5);Gi.add(Wg);const sl=new dp(Di,ki.domElement);sl.enableDamping=!0;const Hg=new Ms(10,10),qg=new Ya({color:11393254,side:cn}),Fr=new Xe(Hg,qg);Fr.rotation.x=-Math.PI/2;Fr.receiveShadow=!0;Gi.add(Fr);const Es=new zg;Es.gravity.set(0,-9.82,0);const Xg=new _m,Or=new ft({mass:0});Or.addShape(Xg);Or.quaternion.setFromEuler(-Math.PI/2,0,0);Es.addBody(Or);const jg=new Pr(.5,32,32),Yg=new Ya({color:16711680}),Ii=new Xe(jg,Yg);Ii.castShadow=!0;Gi.add(Ii);const Zg=new gm(.5),gi=new ft({mass:1,shape:Zg});gi.position.set(0,5,0);Es.addBody(gi);document.getElementById("showBall").addEventListener("click",()=>{Ii.visible=!0,gi.position.set(0,5,0),gi.velocity.set(0,0,0)});window.addEventListener("resize",()=>{const c=window.innerWidth,t=window.innerHeight;Di.aspect=c/t,Di.updateProjectionMatrix(),ki.setSize(c,t)});function rl(){requestAnimationFrame(rl),Es.step(1/100),Ii.position.copy(gi.position),Ii.quaternion.copy(gi.quaternion),sl.update(),ki.render(Gi,Di)}rl();
//# sourceMappingURL=index-2c595429.js.map
