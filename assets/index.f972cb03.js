var ul=Object.defineProperty;var dl=(r,e,t)=>e in r?ul(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ce=(r,e,t)=>(dl(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const As="146",gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hl=0,Gs=1,fl=2,To=1,pl=2,Ri=3,xi=0,Pt=1,rn=2,xn=0,_i=1,Vs=2,Hs=3,Ws=4,ml=5,ui=100,gl=101,_l=102,Xs=103,qs=104,vl=200,xl=201,yl=202,bl=203,Ao=204,Co=205,Ml=206,Sl=207,wl=208,El=209,Tl=210,Al=0,Cl=1,Ll=2,us=3,Dl=4,Pl=5,Rl=6,Il=7,Cs=0,Ol=1,Fl=2,an=0,Nl=1,zl=2,Ul=3,Bl=4,kl=5,Lo=300,yi=301,bi=302,ds=303,hs=304,Sr=306,fs=1e3,zt=1001,ps=1002,gt=1003,Ys=1004,js=1005,Ct=1006,Gl=1007,wr=1008,kn=1009,Vl=1010,Hl=1011,Do=1012,Wl=1013,On=1014,Fn=1015,Bi=1016,Xl=1017,ql=1018,vi=1020,Yl=1021,jl=1022,Ut=1023,$l=1024,Zl=1025,zn=1026,Mi=1027,Kl=1028,Jl=1029,Ql=1030,ec=1031,tc=1033,Lr=33776,Dr=33777,Pr=33778,Rr=33779,$s=35840,Zs=35841,Ks=35842,Js=35843,nc=36196,Qs=37492,ea=37496,ta=37808,na=37809,ia=37810,ra=37811,sa=37812,aa=37813,oa=37814,la=37815,ca=37816,ua=37817,da=37818,ha=37819,fa=37820,pa=37821,ma=36492,Gn=3e3,Xe=3001,ic=3200,rc=3201,Po=0,sc=1,tn="srgb",Nn="srgb-linear",Ir=7680,ac=519,ms=35044,ga="300 es",gs=1035;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _a=1234567;const Fi=Math.PI/180,vr=180/Math.PI;function on(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function Ls(r,e){return(r%e+e)%e}function oc(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function lc(r,e,t){return r!==e?(t-r)/(e-r):0}function Ni(r,e,t){return(1-t)*r+t*e}function cc(r,e,t,n){return Ni(r,e,1-Math.exp(-t*n))}function uc(r,e=1){return e-Math.abs(Ls(r,e*2)-e)}function dc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function hc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function fc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function pc(r,e){return r+Math.random()*(e-r)}function mc(r){return r*(.5-Math.random())}function gc(r){r!==void 0&&(_a=r);let e=_a+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _c(r){return r*Fi}function vc(r){return r*vr}function _s(r){return(r&r-1)===0&&r!==0}function xc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function yc(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*d,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*d,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*d,a*c);break;case"XZX":r.set(a*d,l*g,l*m,a*c);break;case"YXY":r.set(l*m,a*d,l*g,a*c);break;case"ZYZ":r.set(l*g,l*m,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var bc=Object.freeze({__proto__:null,DEG2RAD:Fi,RAD2DEG:vr,generateUUID:on,clamp:dt,euclideanModulo:Ls,mapLinear:oc,inverseLerp:lc,lerp:Ni,damp:cc,pingpong:uc,smoothstep:dc,smootherstep:hc,randInt:fc,randFloat:pc,randFloatSpread:mc,seededRandom:gc,degToRad:_c,radToDeg:vc,isPowerOfTwo:_s,ceilPowerOfTwo:xc,floorPowerOfTwo:xr,setQuaternionFromProperEuler:yc,normalize:ke,denormalize:sn});class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],m=n[5],g=n[8],p=i[0],h=i[3],_=i[6],b=i[1],S=i[4],w=i[7],y=i[2],C=i[5],U=i[8];return s[0]=o*p+a*b+l*y,s[3]=o*h+a*S+l*C,s[6]=o*_+a*w+l*U,s[1]=c*p+d*b+u*y,s[4]=c*h+d*S+u*C,s[7]=c*_+d*w+u*U,s[2]=f*p+m*b+g*y,s[5]=f*h+m*S+g*C,s[8]=f*_+m*w+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,f=a*l-d*s,m=c*s-o*l,g=t*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(i*c-d*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(d*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],d=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*d,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*d,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Ro(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Un(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Or={[tn]:{[Nn]:Un},[Nn]:{[tn]:gr}},It={legacyMode:!0,get workingColorSpace(){return Nn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Or[e]&&Or[e][t]!==void 0){const n=Or[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Io={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qe={r:0,g:0,b:0},Ot={h:0,s:0,l:0},Xi={h:0,s:0,l:0};function Fr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function qi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nn){return this.r=e,this.g=t,this.b=n,It.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nn){if(e=Ls(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Fr(o,s,e+1/3),this.g=Fr(o,s,e),this.b=Fr(o,s,e-1/3)}return It.toWorkingColorSpace(this,i),this}setStyle(e,t=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,It.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,It.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,d=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,d,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,It.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,It.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=tn){const n=Io[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return It.fromWorkingColorSpace(qi(this,Qe),e),dt(Qe.r*255,0,255)<<16^dt(Qe.g*255,0,255)<<8^dt(Qe.b*255,0,255)<<0}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nn){It.fromWorkingColorSpace(qi(this,Qe),t);const n=Qe.r,i=Qe.g,s=Qe.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Nn){return It.fromWorkingColorSpace(qi(this,Qe),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=tn){return It.fromWorkingColorSpace(qi(this,Qe),e),e!==tn?`color(${e} ${Qe.r} ${Qe.g} ${Qe.b})`:`rgb(${Qe.r*255|0},${Qe.g*255|0},${Qe.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ot),Ot.h+=e,Ot.s+=t,Ot.l+=n,this.setHSL(Ot.h,Ot.s,Ot.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ot),e.getHSL(Xi);const n=Ni(Ot.h,Xi.h,t),i=Ni(Ot.s,Xi.s,t),s=Ni(Ot.l,Xi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ve.NAMES=Io;let $n;class Oo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$n===void 0&&($n=yr("canvas")),$n.width=e.width,$n.height=e.height;const n=$n.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Un(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Un(t[n]/255)*255):t[n]=Un(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Fo{constructor(e=null){this.isSource=!0,this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nr(i[o].image)):s.push(Nr(i[o]))}else s=Nr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Oo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mc=0;class kt extends Wn{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=zt,i=zt,s=Ct,o=wr,a=Ut,l=kn,c=1,d=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=on(),this.name="",this.source=new Fo(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Lo;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],m=l[5],g=l[9],p=l[2],h=l[6],_=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,w=(m+1)/2,y=(_+1)/2,C=(d+f)/4,U=(u+p)/4,x=(g+h)/4;return S>w&&S>y?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=U/n):w>y?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=C/i,s=x/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=U/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((h-g)*(h-g)+(u-p)*(u-p)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(h-g)/b,this.y=(u-p)/b,this.z=(f-d)/b,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends Wn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new kt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class No extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sc extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=gt,this.minFilter=gt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==f||c!==m||d!==g){let h=1-a;const _=l*f+c*m+d*g+u*p,b=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const y=Math.sqrt(S),C=Math.atan2(y,_*b);h=Math.sin(h*C)/y,a=Math.sin(a*C)/y}const w=a*b;if(l=l*h+f*w,c=c*h+m*w,d=d*h+g*w,u=u*h+p*w,h===1-a){const y=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=y,c*=y,d*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+d*u+l*m-c*f,e[t+1]=l*g+d*f+c*u-a*m,e[t+2]=c*g+d*m+a*f-l*u,e[t+3]=d*g-a*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"YXZ":this._x=f*d*u+c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"ZXY":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u-f*m*g;break;case"ZYX":this._x=f*d*u-c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u+f*m*g;break;case"YZX":this._x=f*d*u+c*m*g,this._y=c*m*u+f*d*g,this._z=c*d*g-f*m*u,this._w=c*d*u-f*m*g;break;case"XZY":this._x=f*d*u-c*m*g,this._y=c*m*u-f*d*g,this._z=c*d*g+f*m*u,this._w=c*d*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(d-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-s*l,this._y=i*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,d=l*n+a*t-s*i,u=l*i+s*n-o*t,f=-s*t-o*n-a*i;return this.x=c*l+f*-s+d*-a-u*-o,this.y=d*l+f*-o+u*-s-c*-a,this.z=u*l+f*-a+c*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new D,va=new Hn;class Mn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const d=e[l],u=e[l+1],f=e[l+2];d<t&&(t=d),u<n&&(n=u),f<i&&(i=f),d>s&&(s=d),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const d=e.getX(l),u=e.getY(l),f=e.getZ(l);d<t&&(t=d),u<n&&(n=u),f<i&&(i=f),d>s&&(s=d),u>o&&(o=u),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Cn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Cn)}else n.boundingBox===null&&n.computeBoundingBox(),Ur.copy(n.boundingBox),Ur.applyMatrix4(e.matrixWorld),this.union(Ur);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Yi.subVectors(this.max,Ti),Zn.subVectors(e.a,Ti),Kn.subVectors(e.b,Ti),Jn.subVectors(e.c,Ti),cn.subVectors(Kn,Zn),un.subVectors(Jn,Kn),Ln.subVectors(Zn,Jn);let t=[0,-cn.z,cn.y,0,-un.z,un.y,0,-Ln.z,Ln.y,cn.z,0,-cn.x,un.z,0,-un.x,Ln.z,0,-Ln.x,-cn.y,cn.x,0,-un.y,un.x,0,-Ln.y,Ln.x,0];return!Br(t,Zn,Kn,Jn,Yi)||(t=[1,0,0,0,1,0,0,0,1],!Br(t,Zn,Kn,Jn,Yi))?!1:(ji.crossVectors(cn,un),t=[ji.x,ji.y,ji.z],Br(t,Zn,Kn,Jn,Yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Cn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new D,new D,new D,new D,new D,new D,new D,new D],Cn=new D,Ur=new Mn,Zn=new D,Kn=new D,Jn=new D,cn=new D,un=new D,Ln=new D,Ti=new D,Yi=new D,ji=new D,Dn=new D;function Br(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Dn.fromArray(r,s);const a=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),d=n.dot(Dn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const wc=new Mn,Ai=new D,kr=new D;class Gi{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ai.subVectors(e,this.center);const t=Ai.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ai,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ai.copy(e.center).add(kr)),this.expandByPoint(Ai.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kt=new D,Gr=new D,$i=new D,dn=new D,Vr=new D,Zi=new D,Hr=new D;class Ec{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.direction).multiplyScalar(t).add(this.origin),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Gr.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Gr);const s=e.distanceTo(t)*.5,o=-this.direction.dot($i),a=dn.dot(this.direction),l=-dn.dot($i),c=dn.lengthSq(),d=Math.abs(1-o*o);let u,f,m,g;if(d>0)if(u=o*l-a,f=o*a-l,g=s*d,u>=0)if(f>=-g)if(f<=g){const p=1/d;u*=p,f*=p,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy($i).multiplyScalar(f).add(Gr),m}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);const n=Kt.dot(this.direction),i=Kt.dot(Kt)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,i,s){Vr.subVectors(t,e),Zi.subVectors(n,e),Hr.crossVectors(Vr,Zi);let o=this.direction.dot(Hr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,e);const l=a*this.direction.dot(Zi.crossVectors(dn,Zi));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(dn));if(c<0||l+c>o)return null;const d=-a*dn.dot(Hr);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,d,u,f,m,g,p,h){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=d,_[10]=u,_[14]=f,_[3]=m,_[7]=g,_[11]=p,_[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),o=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*u,g=a*d,p=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*u,g=c*d,p=c*u;t[0]=f+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=m*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*u,g=c*d,p=c*u;t[0]=f-p*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*d,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*u,g=a*d,p=a*u;t[0]=l*d,t[4]=g*c-m,t[8]=f*c+p,t[1]=l*u,t[5]=p*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*d,t[4]=p-f*u,t[8]=g*u+m,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*u+g,t[10]=f-p*u}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+p,t[5]=o*d,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*d,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tc,e,Ac)}lookAt(e,t,n){const i=this.elements;return yt.subVectors(e,t),yt.lengthSq()===0&&(yt.z=1),yt.normalize(),hn.crossVectors(n,yt),hn.lengthSq()===0&&(Math.abs(n.z)===1?yt.x+=1e-4:yt.z+=1e-4,yt.normalize(),hn.crossVectors(n,yt)),hn.normalize(),Ki.crossVectors(yt,hn),i[0]=hn.x,i[4]=Ki.x,i[8]=yt.x,i[1]=hn.y,i[5]=Ki.y,i[9]=yt.y,i[2]=hn.z,i[6]=Ki.z,i[10]=yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],m=n[13],g=n[2],p=n[6],h=n[10],_=n[14],b=n[3],S=n[7],w=n[11],y=n[15],C=i[0],U=i[4],x=i[8],A=i[12],z=i[1],$=i[5],oe=i[9],k=i[13],I=i[2],j=i[6],Z=i[10],J=i[14],X=i[3],O=i[7],B=i[11],ne=i[15];return s[0]=o*C+a*z+l*I+c*X,s[4]=o*U+a*$+l*j+c*O,s[8]=o*x+a*oe+l*Z+c*B,s[12]=o*A+a*k+l*J+c*ne,s[1]=d*C+u*z+f*I+m*X,s[5]=d*U+u*$+f*j+m*O,s[9]=d*x+u*oe+f*Z+m*B,s[13]=d*A+u*k+f*J+m*ne,s[2]=g*C+p*z+h*I+_*X,s[6]=g*U+p*$+h*j+_*O,s[10]=g*x+p*oe+h*Z+_*B,s[14]=g*A+p*k+h*J+_*ne,s[3]=b*C+S*z+w*I+y*X,s[7]=b*U+S*$+w*j+y*O,s[11]=b*x+S*oe+w*Z+y*B,s[15]=b*A+S*k+w*J+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],m=e[14],g=e[3],p=e[7],h=e[11],_=e[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*m-n*l*m)+p*(+t*l*m-t*c*f+s*o*f-i*o*m+i*c*d-s*l*d)+h*(+t*c*u-t*a*m-s*o*u+n*o*m+s*a*d-n*c*d)+_*(-i*a*d-t*l*u+t*a*f+i*o*u-n*o*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],m=e[11],g=e[12],p=e[13],h=e[14],_=e[15],b=u*h*c-p*f*c+p*l*m-a*h*m-u*l*_+a*f*_,S=g*f*c-d*h*c-g*l*m+o*h*m+d*l*_-o*f*_,w=d*p*c-g*u*c+g*a*m-o*p*m-d*a*_+o*u*_,y=g*u*l-d*p*l-g*a*f+o*p*f+d*a*h-o*u*h,C=t*b+n*S+i*w+s*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/C;return e[0]=b*U,e[1]=(p*f*s-u*h*s-p*i*m+n*h*m+u*i*_-n*f*_)*U,e[2]=(a*h*s-p*l*s+p*i*c-n*h*c-a*i*_+n*l*_)*U,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*m-n*l*m)*U,e[4]=S*U,e[5]=(d*h*s-g*f*s+g*i*m-t*h*m-d*i*_+t*f*_)*U,e[6]=(g*l*s-o*h*s-g*i*c+t*h*c+o*i*_-t*l*_)*U,e[7]=(o*f*s-d*l*s+d*i*c-t*f*c-o*i*m+t*l*m)*U,e[8]=w*U,e[9]=(g*u*s-d*p*s-g*n*m+t*p*m+d*n*_-t*u*_)*U,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*_+t*a*_)*U,e[11]=(d*a*s-o*u*s-d*n*c+t*u*c+o*n*m-t*a*m)*U,e[12]=y*U,e[13]=(d*p*i-g*u*i+g*n*f-t*p*f-d*n*h+t*u*h)*U,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*h-t*a*h)*U,e[15]=(o*u*i-d*a*i+d*n*l-t*u*l-o*n*f+t*a*f)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,u=a+a,f=s*c,m=s*d,g=s*u,p=o*d,h=o*u,_=a*u,b=l*c,S=l*d,w=l*u,y=n.x,C=n.y,U=n.z;return i[0]=(1-(p+_))*y,i[1]=(m+w)*y,i[2]=(g-S)*y,i[3]=0,i[4]=(m-w)*C,i[5]=(1-(f+_))*C,i[6]=(h+b)*C,i[7]=0,i[8]=(g+S)*U,i[9]=(h-b)*U,i[10]=(1-(f+p))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Qn.set(i[0],i[1],i[2]).length();const o=Qn.set(i[4],i[5],i[6]).length(),a=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ft.copy(this);const c=1/s,d=1/o,u=1/a;return Ft.elements[0]*=c,Ft.elements[1]*=c,Ft.elements[2]*=c,Ft.elements[4]*=d,Ft.elements[5]*=d,Ft.elements[6]*=d,Ft.elements[8]*=u,Ft.elements[9]*=u,Ft.elements[10]*=u,t.setFromRotationMatrix(Ft),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),d=1/(o-s),u=(t+e)*l,f=(n+i)*c,m=(o+s)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qn=new D,Ft=new Ze,Tc=new D(0,0,0),Ac=new D(1,1,1),hn=new D,Ki=new D,yt=new D,xa=new Ze,ya=new Hn;class Vi{constructor(e=0,t=0,n=0,i=Vi.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ya.setFromEuler(this),this.setFromQuaternion(ya,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Vi.DefaultOrder="XYZ";Vi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cc=0;const ba=new D,ei=new Hn,Jt=new Ze,Ji=new D,Ci=new D,Lc=new D,Dc=new Hn,Ma=new D(1,0,0),Sa=new D(0,1,0),wa=new D(0,0,1),Pc={type:"added"},Ea={type:"removed"};class Mt extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DefaultUp.clone();const e=new D,t=new Vi,n=new Hn,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Dt}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Mt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DefaultMatrixWorldAutoUpdate,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(Ma,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(wa,e)}translateOnAxis(e,t){return ba.copy(e).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ma,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(wa,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ji.copy(e):Ji.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jt.lookAt(Ci,Ji,this.up):Jt.lookAt(Ji,Ci,this.up),this.quaternion.setFromRotationMatrix(Jt),i&&(Jt.extractRotation(i.matrixWorld),ei.setFromRotationMatrix(Jt),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ea)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ea)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,e,Lc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Dc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mt.DefaultUp=new D(0,1,0);Mt.DefaultMatrixAutoUpdate=!0;Mt.DefaultMatrixWorldAutoUpdate=!0;const Nt=new D,Qt=new D,Wr=new D,en=new D,ti=new D,ni=new D,Ta=new D,Xr=new D,qr=new D,Yr=new D;class nn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nt.subVectors(e,t),i.cross(Nt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Nt.subVectors(i,t),Qt.subVectors(n,t),Wr.subVectors(e,t);const o=Nt.dot(Nt),a=Nt.dot(Qt),l=Nt.dot(Wr),c=Qt.dot(Qt),d=Qt.dot(Wr),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,m=(c*l-a*d)*f,g=(o*d-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,en),l.set(0,0),l.addScaledVector(s,en.x),l.addScaledVector(o,en.y),l.addScaledVector(a,en.z),l}static isFrontFacing(e,t,n,i){return Nt.subVectors(n,t),Qt.subVectors(e,t),Nt.cross(Qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Nt.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return nn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ti.subVectors(i,n),ni.subVectors(s,n),Xr.subVectors(e,n);const l=ti.dot(Xr),c=ni.dot(Xr);if(l<=0&&c<=0)return t.copy(n);qr.subVectors(e,i);const d=ti.dot(qr),u=ni.dot(qr);if(d>=0&&u<=d)return t.copy(i);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(ti,o);Yr.subVectors(e,s);const m=ti.dot(Yr),g=ni.dot(Yr);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ni,a);const h=d*g-m*u;if(h<=0&&u-d>=0&&m-g>=0)return Ta.subVectors(s,i),a=(u-d)/(u-d+(m-g)),t.copy(i).addScaledVector(Ta,a);const _=1/(h+p+f);return o=p*_,a=f*_,t.copy(n).addScaledVector(ti,o).addScaledVector(ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rc=0;class Hi extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=on(),this.name="",this.type="Material",this.blending=_i,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ao,this.blendDst=Co,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ds extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new D,Qi=new Se;class Rt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=ms,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix3(e),this.setXY(t,Qi.x,Qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ms&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uo extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bo extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ic=0;const At=new Ze,jr=new Mt,ii=new D,bt=new Mn,Li=new Mn,rt=new D;class Gt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ro(e)?Bo:Uo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return At.makeRotationFromQuaternion(e),this.applyMatrix4(At),this}rotateX(e){return At.makeRotationX(e),this.applyMatrix4(At),this}rotateY(e){return At.makeRotationY(e),this.applyMatrix4(At),this}rotateZ(e){return At.makeRotationZ(e),this.applyMatrix4(At),this}translate(e,t,n){return At.makeTranslation(e,t,n),this.applyMatrix4(At),this}scale(e,t,n){return At.makeScale(e,t,n),this.applyMatrix4(At),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];bt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,bt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,bt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(bt.min),this.boundingBox.expandByPoint(bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(bt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(bt.min,Li.min),bt.expandByPoint(rt),rt.addVectors(bt.max,Li.max),bt.expandByPoint(rt)):(bt.expandByPoint(Li.min),bt.expandByPoint(Li.max))}bt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)rt.fromBufferAttribute(a,c),l&&(ii.fromBufferAttribute(e,c),rt.add(ii)),i=Math.max(i,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let z=0;z<a;z++)c[z]=new D,d[z]=new D;const u=new D,f=new D,m=new D,g=new Se,p=new Se,h=new Se,_=new D,b=new D;function S(z,$,oe){u.fromArray(i,z*3),f.fromArray(i,$*3),m.fromArray(i,oe*3),g.fromArray(o,z*2),p.fromArray(o,$*2),h.fromArray(o,oe*2),f.sub(u),m.sub(u),p.sub(g),h.sub(g);const k=1/(p.x*h.y-h.x*p.y);!isFinite(k)||(_.copy(f).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(k),b.copy(m).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(k),c[z].add(_),c[$].add(_),c[oe].add(_),d[z].add(b),d[$].add(b),d[oe].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let z=0,$=w.length;z<$;++z){const oe=w[z],k=oe.start,I=oe.count;for(let j=k,Z=k+I;j<Z;j+=3)S(n[j+0],n[j+1],n[j+2])}const y=new D,C=new D,U=new D,x=new D;function A(z){U.fromArray(s,z*3),x.copy(U);const $=c[z];y.copy($),y.sub(U.multiplyScalar(U.dot($))).normalize(),C.crossVectors(x,$);const k=C.dot(d[z])<0?-1:1;l[z*4]=y.x,l[z*4+1]=y.y,l[z*4+2]=y.z,l[z*4+3]=k}for(let z=0,$=w.length;z<$;++z){const oe=w[z],k=oe.start,I=oe.count;for(let j=k,Z=k+I;j<Z;j+=3)A(n[j+0]),A(n[j+1]),A(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,o=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),d.subVectors(o,s),u.subVectors(i,s),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,h),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),u.subVectors(i,s),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,f=new c.constructor(l.length*d);let m=0,g=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*d;for(let _=0;_<d;_++)f[g++]=c[m++]}return new Rt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(i[l]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new Ze,ri=new Ec,$r=new Gi,fn=new D,pn=new D,mn=new D,Zr=new D,Kr=new D,Jr=new D,er=new D,tr=new D,nr=new D,ir=new Se,rr=new Se,sr=new Se,Qr=new D,ar=new D;class Bt extends Mt{constructor(e=new Gt,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),e.ray.intersectsSphere($r)===!1)||(Aa.copy(s).invert(),ri.copy(e.ray).applyMatrix4(Aa),n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,d=n.morphTargetsRelative,u=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const _=m[p],b=i[_.materialIndex],S=Math.max(_.start,g.start),w=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let y=S,C=w;y<C;y+=3){const U=a.getX(y),x=a.getX(y+1),A=a.getX(y+2);o=or(this,b,e,ri,l,c,d,u,f,U,x,A),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),h=Math.min(a.count,g.start+g.count);for(let _=p,b=h;_<b;_+=3){const S=a.getX(_),w=a.getX(_+1),y=a.getX(_+2);o=or(this,i,e,ri,l,c,d,u,f,S,w,y),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const _=m[p],b=i[_.materialIndex],S=Math.max(_.start,g.start),w=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=S,C=w;y<C;y+=3){const U=y,x=y+1,A=y+2;o=or(this,b,e,ri,l,c,d,u,f,U,x,A),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),h=Math.min(l.count,g.start+g.count);for(let _=p,b=h;_<b;_+=3){const S=_,w=_+1,y=_+2;o=or(this,i,e,ri,l,c,d,u,f,S,w,y),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Oc(r,e,t,n,i,s,o,a){let l;if(e.side===Pt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==rn,a),l===null)return null;ar.copy(a),ar.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ar);return c<t.near||c>t.far?null:{distance:c,point:ar.clone(),object:r}}function or(r,e,t,n,i,s,o,a,l,c,d,u){fn.fromBufferAttribute(i,c),pn.fromBufferAttribute(i,d),mn.fromBufferAttribute(i,u);const f=r.morphTargetInfluences;if(s&&f){er.set(0,0,0),tr.set(0,0,0),nr.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const h=f[g],_=s[g];h!==0&&(Zr.fromBufferAttribute(_,c),Kr.fromBufferAttribute(_,d),Jr.fromBufferAttribute(_,u),o?(er.addScaledVector(Zr,h),tr.addScaledVector(Kr,h),nr.addScaledVector(Jr,h)):(er.addScaledVector(Zr.sub(fn),h),tr.addScaledVector(Kr.sub(pn),h),nr.addScaledVector(Jr.sub(mn),h)))}fn.add(er),pn.add(tr),mn.add(nr)}r.isSkinnedMesh&&(r.boneTransform(c,fn),r.boneTransform(d,pn),r.boneTransform(u,mn));const m=Oc(r,e,t,n,fn,pn,mn,Qr);if(m){a&&(ir.fromBufferAttribute(a,c),rr.fromBufferAttribute(a,d),sr.fromBufferAttribute(a,u),m.uv=nn.getUV(Qr,fn,pn,mn,ir,rr,sr,new Se)),l&&(ir.fromBufferAttribute(l,c),rr.fromBufferAttribute(l,d),sr.fromBufferAttribute(l,u),m.uv2=nn.getUV(Qr,fn,pn,mn,ir,rr,sr,new Se));const g={a:c,b:d,c:u,normal:new D,materialIndex:0};nn.getNormal(fn,pn,mn,g.normal),m.face=g}return m}class Wi extends Gt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(u,2));function g(p,h,_,b,S,w,y,C,U,x,A){const z=w/U,$=y/x,oe=w/2,k=y/2,I=C/2,j=U+1,Z=x+1;let J=0,X=0;const O=new D;for(let B=0;B<Z;B++){const ne=B*$-k;for(let ee=0;ee<j;ee++){const Q=ee*z-oe;O[p]=Q*b,O[h]=ne*S,O[_]=I,c.push(O.x,O.y,O.z),O[p]=0,O[h]=0,O[_]=C>0?1:-1,d.push(O.x,O.y,O.z),u.push(ee/U),u.push(1-B/x),J+=1}}for(let B=0;B<x;B++)for(let ne=0;ne<U;ne++){const ee=f+ne+j*B,Q=f+ne+j*(B+1),he=f+(ne+1)+j*(B+1),ye=f+(ne+1)+j*B;l.push(ee,Q,ye),l.push(Q,he,ye),X+=6}a.addGroup(m,X,A),m+=X,f+=J}}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(r){const e={};for(let t=0;t<r.length;t++){const n=Si(r[t]);for(const i in n)e[i]=n[i]}return e}function Fc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const Ps={clone:Si,merge:mt};var Nc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nc,this.fragmentShader=zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Fc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ko extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Lt extends ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=90,ai=1;class Uc extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Lt(si,ai,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new D(1,0,0)),this.add(i);const s=new Lt(si,ai,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new Lt(si,ai,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new Lt(si,ai,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const l=new Lt(si,ai,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,1)),this.add(l);const c=new Lt(si,ai,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,d=e.getRenderTarget(),u=e.toneMapping,f=e.xr.enabled;e.toneMapping=an,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(d),e.toneMapping=u,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Go extends kt{constructor(e,t,n,i,s,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,n,i,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bc extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Go(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wi(5,5,5),s=new yn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:xn});s.uniforms.tEquirect.value=t;const o=new Bt(i,s),a=t.minFilter;return t.minFilter===wr&&(t.minFilter=Ct),new Uc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const es=new D,kc=new D,Gc=new Dt;class Pn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=es.subVectors(n,t).cross(kc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(es),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gc.getNormalMatrix(e),i=this.coplanarPoint(es).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Gi,lr=new D;class Vo{constructor(e=new Pn,t=new Pn,n=new Pn,i=new Pn,s=new Pn,o=new Pn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7],f=n[8],m=n[9],g=n[10],p=n[11],h=n[12],_=n[13],b=n[14],S=n[15];return t[0].setComponents(a-i,u-l,p-f,S-h).normalize(),t[1].setComponents(a+i,u+l,p+f,S+h).normalize(),t[2].setComponents(a+s,u+c,p+m,S+_).normalize(),t[3].setComponents(a-s,u-c,p-m,S-_).normalize(),t[4].setComponents(a-o,u-d,p-g,S-b).normalize(),t[5].setComponents(a+o,u+d,p+g,S+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ho(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Vc(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,d){const u=c.array,f=c.usage,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,u,f),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,d,u){const f=d.array,m=d.updateRange;r.bindBuffer(u,c),m.count===-1?r.bufferSubData(u,0,f):(t?r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):r.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d&&(r.deleteBuffer(d.buffer),n.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,d)):u.version<c.version&&(s(u.buffer,c,d),u.version=c.version)}return{get:o,remove:a,update:l}}class Rs extends Gt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=e/a,f=t/l,m=[],g=[],p=[],h=[];for(let _=0;_<d;_++){const b=_*f-o;for(let S=0;S<c;S++){const w=S*u-s;g.push(w,-b,0),p.push(0,0,1),h.push(S/a),h.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const S=b+c*_,w=b+c*(_+1),y=b+1+c*(_+1),C=b+1+c*_;m.push(S,w,C),m.push(w,y,C)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(p,3)),this.setAttribute("uv",new ht(h,2))}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Wc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$c="vec3 transformed = vec3( position );",Zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Jc=`#ifdef USE_IRIDESCENCE
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
#endif`,Qc=`#ifdef USE_BUMPMAP
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
#endif`,eu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ou=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lu=`#define PI 3.141592653589793
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
}`,cu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
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
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,fu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mu="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_u=`#ifdef USE_ENVMAP
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
#endif`,vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,Mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Su=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tu=`#ifdef USE_GRADIENTMAP
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
}`,Au=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Pu=`uniform bool receiveShadow;
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
#endif`,Ru=`#if defined( USE_ENVMAP )
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
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,zu=`PhysicalMaterial material;
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
#endif`,Uu=`struct PhysicalMaterial {
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
}`,Bu=`
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
#endif`,ku=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ju=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$u=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qu=`#ifdef USE_MORPHNORMALS
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
#endif`,ed=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`#ifdef USE_MORPHTARGETS
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
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,id=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,od=`#ifdef USE_NORMALMAP
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
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_d=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Md=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sd=`float getShadowMask() {
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
}`,wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rd=`#ifdef USE_TRANSMISSION
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
#endif`,Id=`#ifdef USE_TRANSMISSION
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
#endif`,Od=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Fd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Nd=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ud=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
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
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yd=`#include <common>
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
}`,jd=`#if DEPTH_PACKING == 3200
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
}`,$d=`#define DISTANCE
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
}`,Zd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qd=`uniform float scale;
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
}`,eh=`uniform vec3 diffuse;
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
}`,th=`#include <common>
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
}`,nh=`uniform vec3 diffuse;
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
}`,ih=`#define LAMBERT
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
}`,rh=`#define LAMBERT
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
}`,sh=`#define MATCAP
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
}`,ah=`#define MATCAP
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
}`,oh=`#define NORMAL
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
}`,lh=`#define NORMAL
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
}`,ch=`#define PHONG
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
}`,uh=`#define PHONG
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
}`,dh=`#define STANDARD
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
}`,hh=`#define STANDARD
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
}`,fh=`#define TOON
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
}`,ph=`#define TOON
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
}`,mh=`uniform float size;
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
}`,gh=`uniform vec3 diffuse;
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
}`,_h=`#include <common>
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
}`,vh=`uniform vec3 color;
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
}`,xh=`uniform float rotation;
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
}`,yh=`uniform vec3 diffuse;
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
}`,Te={alphamap_fragment:Hc,alphamap_pars_fragment:Wc,alphatest_fragment:Xc,alphatest_pars_fragment:qc,aomap_fragment:Yc,aomap_pars_fragment:jc,begin_vertex:$c,beginnormal_vertex:Zc,bsdfs:Kc,iridescence_fragment:Jc,bumpmap_pars_fragment:Qc,clipping_planes_fragment:eu,clipping_planes_pars_fragment:tu,clipping_planes_pars_vertex:nu,clipping_planes_vertex:iu,color_fragment:ru,color_pars_fragment:su,color_pars_vertex:au,color_vertex:ou,common:lu,cube_uv_reflection_fragment:cu,defaultnormal_vertex:uu,displacementmap_pars_vertex:du,displacementmap_vertex:hu,emissivemap_fragment:fu,emissivemap_pars_fragment:pu,encodings_fragment:mu,encodings_pars_fragment:gu,envmap_fragment:_u,envmap_common_pars_fragment:vu,envmap_pars_fragment:xu,envmap_pars_vertex:yu,envmap_physical_pars_fragment:Ru,envmap_vertex:bu,fog_vertex:Mu,fog_pars_vertex:Su,fog_fragment:wu,fog_pars_fragment:Eu,gradientmap_pars_fragment:Tu,lightmap_fragment:Au,lightmap_pars_fragment:Cu,lights_lambert_fragment:Lu,lights_lambert_pars_fragment:Du,lights_pars_begin:Pu,lights_toon_fragment:Iu,lights_toon_pars_fragment:Ou,lights_phong_fragment:Fu,lights_phong_pars_fragment:Nu,lights_physical_fragment:zu,lights_physical_pars_fragment:Uu,lights_fragment_begin:Bu,lights_fragment_maps:ku,lights_fragment_end:Gu,logdepthbuf_fragment:Vu,logdepthbuf_pars_fragment:Hu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Xu,map_fragment:qu,map_pars_fragment:Yu,map_particle_fragment:ju,map_particle_pars_fragment:$u,metalnessmap_fragment:Zu,metalnessmap_pars_fragment:Ku,morphcolor_vertex:Ju,morphnormal_vertex:Qu,morphtarget_pars_vertex:ed,morphtarget_vertex:td,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:rd,normal_pars_vertex:sd,normal_vertex:ad,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:ud,iridescence_pars_fragment:dd,output_fragment:hd,packing:fd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:_d,roughnessmap_fragment:vd,roughnessmap_pars_fragment:xd,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:bd,shadowmap_vertex:Md,shadowmask_pars_fragment:Sd,skinbase_vertex:wd,skinning_pars_vertex:Ed,skinning_vertex:Td,skinnormal_vertex:Ad,specularmap_fragment:Cd,specularmap_pars_fragment:Ld,tonemapping_fragment:Dd,tonemapping_pars_fragment:Pd,transmission_fragment:Rd,transmission_pars_fragment:Id,uv_pars_fragment:Od,uv_pars_vertex:Fd,uv_vertex:Nd,uv2_pars_fragment:zd,uv2_pars_vertex:Ud,uv2_vertex:Bd,worldpos_vertex:kd,background_vert:Gd,background_frag:Vd,backgroundCube_vert:Hd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:Yd,depth_frag:jd,distanceRGBA_vert:$d,distanceRGBA_frag:Zd,equirect_vert:Kd,equirect_frag:Jd,linedashed_vert:Qd,linedashed_frag:eh,meshbasic_vert:th,meshbasic_frag:nh,meshlambert_vert:ih,meshlambert_frag:rh,meshmatcap_vert:sh,meshmatcap_frag:ah,meshnormal_vert:oh,meshnormal_frag:lh,meshphong_vert:ch,meshphong_frag:uh,meshphysical_vert:dh,meshphysical_frag:hh,meshtoon_vert:fh,meshtoon_frag:ph,points_vert:mh,points_frag:gh,shadow_vert:_h,shadow_frag:vh,sprite_vert:xh,sprite_frag:yh},re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},_t={basic:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:mt([re.points,re.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:mt([re.common,re.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:mt([re.sprite,re.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:mt([re.common,re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:mt([re.lights,re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};_t.physical={uniforms:mt([_t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function bh(r,e,t,n,i,s,o){const a=new Ve(0);let l=s===!0?0:1,c,d,u=null,f=0,m=null;function g(h,_){let b=!1,S=_.isScene===!0?_.background:null;S&&S.isTexture&&(S=(_.backgroundBlurriness>0?t:e).get(S));const w=r.xr,y=w.getSession&&w.getSession();y&&y.environmentBlendMode==="additive"&&(S=null),S===null?p(a,l):S&&S.isColor&&(p(S,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Sr)?(d===void 0&&(d=new Bt(new Wi(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:Si(_t.backgroundCube.uniforms),vertexShader:_t.backgroundCube.vertexShader,fragmentShader:_t.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,U,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(u!==S||f!==S.version||m!==r.toneMapping)&&(d.material.needsUpdate=!0,u=S,f=S.version,m=r.toneMapping),d.layers.enableAll(),h.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Bt(new Rs(2,2),new yn({name:"BackgroundMaterial",uniforms:Si(_t.background.uniforms),vertexShader:_t.background.vertexShader,fragmentShader:_t.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,m=r.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null))}function p(h,_){n.buffers.color.setClear(h.r,h.g,h.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(h,_=1){a.set(h),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(h){l=h,p(a,l)},render:g}}function Mh(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=h(null);let c=l,d=!1;function u(I,j,Z,J,X){let O=!1;if(o){const B=p(J,Z,j);c!==B&&(c=B,m(c.object)),O=_(I,J,Z,X),O&&b(I,J,Z,X)}else{const B=j.wireframe===!0;(c.geometry!==J.id||c.program!==Z.id||c.wireframe!==B)&&(c.geometry=J.id,c.program=Z.id,c.wireframe=B,O=!0)}X!==null&&t.update(X,34963),(O||d)&&(d=!1,x(I,j,Z,J),X!==null&&r.bindBuffer(34963,t.get(X).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,j,Z){const J=Z.wireframe===!0;let X=a[I.id];X===void 0&&(X={},a[I.id]=X);let O=X[j.id];O===void 0&&(O={},X[j.id]=O);let B=O[J];return B===void 0&&(B=h(f()),O[J]=B),B}function h(I){const j=[],Z=[],J=[];for(let X=0;X<i;X++)j[X]=0,Z[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Z,attributeDivisors:J,object:I,attributes:{},index:null}}function _(I,j,Z,J){const X=c.attributes,O=j.attributes;let B=0;const ne=Z.getAttributes();for(const ee in ne)if(ne[ee].location>=0){const he=X[ee];let ye=O[ee];if(ye===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(ye=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(ye=I.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;B++}return c.attributesNum!==B||c.index!==J}function b(I,j,Z,J){const X={},O=j.attributes;let B=0;const ne=Z.getAttributes();for(const ee in ne)if(ne[ee].location>=0){let he=O[ee];he===void 0&&(ee==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),ee==="instanceColor"&&I.instanceColor&&(he=I.instanceColor));const ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),X[ee]=ye,B++}c.attributes=X,c.attributesNum=B,c.index=J}function S(){const I=c.newAttributes;for(let j=0,Z=I.length;j<Z;j++)I[j]=0}function w(I){y(I,0)}function y(I,j){const Z=c.newAttributes,J=c.enabledAttributes,X=c.attributeDivisors;Z[I]=1,J[I]===0&&(r.enableVertexAttribArray(I),J[I]=1),X[I]!==j&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,j),X[I]=j)}function C(){const I=c.newAttributes,j=c.enabledAttributes;for(let Z=0,J=j.length;Z<J;Z++)j[Z]!==I[Z]&&(r.disableVertexAttribArray(Z),j[Z]=0)}function U(I,j,Z,J,X,O){n.isWebGL2===!0&&(Z===5124||Z===5125)?r.vertexAttribIPointer(I,j,Z,X,O):r.vertexAttribPointer(I,j,Z,J,X,O)}function x(I,j,Z,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const X=J.attributes,O=Z.getAttributes(),B=j.defaultAttributeValues;for(const ne in O){const ee=O[ne];if(ee.location>=0){let Q=X[ne];if(Q===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const he=Q.normalized,ye=Q.itemSize,q=t.get(Q);if(q===void 0)continue;const Ie=q.buffer,xe=q.type,be=q.bytesPerElement;if(Q.isInterleavedBufferAttribute){const de=Q.data,ze=de.stride,we=Q.offset;if(de.isInstancedInterleavedBuffer){for(let _e=0;_e<ee.locationSize;_e++)y(ee.location+_e,de.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let _e=0;_e<ee.locationSize;_e++)w(ee.location+_e);r.bindBuffer(34962,Ie);for(let _e=0;_e<ee.locationSize;_e++)U(ee.location+_e,ye/ee.locationSize,xe,he,ze*be,(we+ye/ee.locationSize*_e)*be)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<ee.locationSize;de++)y(ee.location+de,Q.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<ee.locationSize;de++)w(ee.location+de);r.bindBuffer(34962,Ie);for(let de=0;de<ee.locationSize;de++)U(ee.location+de,ye/ee.locationSize,xe,he,ye*be,ye/ee.locationSize*de*be)}}else if(B!==void 0){const he=B[ne];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(ee.location,he);break;case 3:r.vertexAttrib3fv(ee.location,he);break;case 4:r.vertexAttrib4fv(ee.location,he);break;default:r.vertexAttrib1fv(ee.location,he)}}}}C()}function A(){oe();for(const I in a){const j=a[I];for(const Z in j){const J=j[Z];for(const X in J)g(J[X].object),delete J[X];delete j[Z]}delete a[I]}}function z(I){if(a[I.id]===void 0)return;const j=a[I.id];for(const Z in j){const J=j[Z];for(const X in J)g(J[X].object),delete J[X];delete j[Z]}delete a[I.id]}function $(I){for(const j in a){const Z=a[j];if(Z[I.id]===void 0)continue;const J=Z[I.id];for(const X in J)g(J[X].object),delete J[X];delete Z[I.id]}}function oe(){k(),d=!0,c!==l&&(c=l,m(c.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:oe,resetDefaultState:k,dispose:A,releaseStatesOfGeometry:z,releaseStatesOfProgram:$,initAttributes:S,enableAttribute:w,disableUnusedAttributes:C}}function Sh(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,d){r.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,u){if(u===0)return;let f,m;if(i)f=r,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,d,u),t.update(d,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function wh(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(U){if(U==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),f=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),h=r.getParameter(36347),_=r.getParameter(36348),b=r.getParameter(36349),S=f>0,w=o||e.has("OES_texture_float"),y=S&&w,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:C}}function Eh(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Pn,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f,m){const g=u.length!==0||f||n!==0||i;return i=f,t=d(u,m,0),n=u.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,f,m){const g=u.clippingPlanes,p=u.clipIntersection,h=u.clipShadows,_=r.get(u);if(!i||g===null||g.length===0||s&&!h)s?d(null):c();else{const b=s?0:n,S=b*4;let w=_.clippingState||null;l.value=w,w=d(g,f,S,m);for(let y=0;y!==S;++y)w[y]=t[y];_.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,m,g){const p=u!==null?u.length:0;let h=null;if(p!==0){if(h=l.value,g!==!0||h===null){const _=m+p*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(h===null||h.length<_)&&(h=new Float32Array(_));for(let S=0,w=m;S!==p;++S,w+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(h,w),h[w+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Th(r){let e=new WeakMap;function t(o,a){return a===ds?o.mapping=yi:a===hs&&(o.mapping=bi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ds||a===hs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ah extends ko{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fi=4,Ca=[.125,.215,.35,.446,.526,.582],In=20,ts=new Ah,La=new Ve;let ns=null;const Rn=(1+Math.sqrt(5))/2,li=1/Rn,Da=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Rn,li),new D(0,Rn,-li),new D(li,0,Rn),new D(-li,0,Rn),new D(Rn,li,0),new D(-Rn,li,0)];class Pa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ns=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ns),e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ns=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Bi,format:Ut,encoding:Gn,depthBuffer:!1},i=Ra(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ra(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ch(s)),this._blurMaterial=Lh(s,e,t)}return i}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,ts)}_sceneToCubeUV(e,t,n,i){const a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(La),d.toneMapping=an,d.autoClear=!1;const m=new Ds({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new Bt(new Wi,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(La),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const S=this._cubeSize;cr(i,b*S,_>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===yi||e.mapping===bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ts)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Da[(i-1)%Da.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Bt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),p=s/g,h=isFinite(s)?1+Math.floor(d*p):In;h>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${In}`);const _=[];let b=0;for(let U=0;U<In;++U){const x=U/p,A=Math.exp(-x*x/2);_.push(A),U===0?b+=A:U<h&&(b+=2*A)}for(let U=0;U<_.length;U++)_[U]=_[U]/b;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const w=this._sizeLods[i],y=3*w*(i>S-fi?i-S+fi:0),C=4*(this._cubeSize-w);cr(t,y,C,3*w,2*w),l.setRenderTarget(t),l.render(u,ts)}}function Ch(r){const e=[],t=[],n=[];let i=r;const s=r-fi+1+Ca.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-fi?l=Ca[o-r+fi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,g=6,p=3,h=2,_=1,b=new Float32Array(p*g*m),S=new Float32Array(h*g*m),w=new Float32Array(_*g*m);for(let C=0;C<m;C++){const U=C%3*2/3-1,x=C>2?0:-1,A=[U,x,0,U+2/3,x,0,U+2/3,x+1,0,U,x,0,U+2/3,x+1,0,U,x+1,0];b.set(A,p*g*C),S.set(f,h*g*C);const z=[C,C,C,C,C,C];w.set(z,_*g*C)}const y=new Gt;y.setAttribute("position",new Rt(b,p)),y.setAttribute("uv",new Rt(S,h)),y.setAttribute("faceIndex",new Rt(w,_)),e.push(y),i>fi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ra(r,e,t){const n=new Vn(r,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Lh(r,e,t){const n=new Float32Array(In),i=new D(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Is(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ia(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Is(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Oa(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Is(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Is(){return`

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
	`}function Dh(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ds||l===hs,d=l===yi||l===bi;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Pa(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||d&&u&&i(u)){t===null&&(t=new Pa(r));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ph(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rh(r,e,t,n){const i={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],34962);const m=u.morphAttributes;for(const g in m){const p=m[g];for(let h=0,_=p.length;h<_;h++)e.update(p[h],34962)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let p=0;if(m!==null){const b=m.array;p=m.version;for(let S=0,w=b.length;S<w;S+=3){const y=b[S+0],C=b[S+1],U=b[S+2];f.push(y,C,C,U,U,y)}}else{const b=g.array;p=g.version;for(let S=0,w=b.length/3-1;S<w;S+=3){const y=S+0,C=S+1,U=S+2;f.push(y,C,C,U,U,y)}}const h=new(Ro(f)?Bo:Uo)(f,1);h.version=p;const _=s.get(u);_&&e.remove(_),s.set(u,h)}function d(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Ih(r,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,m){r.drawElements(s,m,a,f*l),t.update(m,s,1)}function u(f,m,g){if(g===0)return;let p,h;if(i)p=r,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,f*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=u}function Oh(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fh(r,e){return r[0]-e[0]}function Nh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function zh(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,u,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,h=p!==void 0?p.length:0;let _=s.get(d);if(_===void 0||_.count!==h){let Z=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",Z)};var g=Z;_!==void 0&&_.texture.dispose();const w=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,U=d.morphAttributes.position||[],x=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let z=0;w===!0&&(z=1),y===!0&&(z=2),C===!0&&(z=3);let $=d.attributes.position.count*z,oe=1;$>e.maxTextureSize&&(oe=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const k=new Float32Array($*oe*4*h),I=new No(k,$,oe,h);I.type=Fn,I.needsUpdate=!0;const j=z*4;for(let J=0;J<h;J++){const X=U[J],O=x[J],B=A[J],ne=$*oe*4*J;for(let ee=0;ee<X.count;ee++){const Q=ee*j;w===!0&&(o.fromBufferAttribute(X,ee),k[ne+Q+0]=o.x,k[ne+Q+1]=o.y,k[ne+Q+2]=o.z,k[ne+Q+3]=0),y===!0&&(o.fromBufferAttribute(O,ee),k[ne+Q+4]=o.x,k[ne+Q+5]=o.y,k[ne+Q+6]=o.z,k[ne+Q+7]=0),C===!0&&(o.fromBufferAttribute(B,ee),k[ne+Q+8]=o.x,k[ne+Q+9]=o.y,k[ne+Q+10]=o.z,k[ne+Q+11]=B.itemSize===4?o.w:1)}}_={count:h,texture:I,size:new Se($,oe)},s.set(d,_),d.addEventListener("dispose",Z)}let b=0;for(let w=0;w<m.length;w++)b+=m[w];const S=d.morphTargetsRelative?1:1-b;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",m),f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=m===void 0?0:m.length;let h=n[d.id];if(h===void 0||h.length!==p){h=[];for(let y=0;y<p;y++)h[y]=[y,0];n[d.id]=h}for(let y=0;y<p;y++){const C=h[y];C[0]=y,C[1]=m[y]}h.sort(Nh);for(let y=0;y<8;y++)y<p&&h[y][1]?(a[y][0]=h[y][0],a[y][1]=h[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Fh);const _=d.morphAttributes.position,b=d.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const C=a[y],U=C[0],x=C[1];U!==Number.MAX_SAFE_INTEGER&&x?(_&&d.getAttribute("morphTarget"+y)!==_[U]&&d.setAttribute("morphTarget"+y,_[U]),b&&d.getAttribute("morphNormal"+y)!==b[U]&&d.setAttribute("morphNormal"+y,b[U]),i[y]=x,S+=x):(_&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),b&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const w=d.morphTargetsRelative?1:1-S;f.getUniforms().setValue(r,"morphTargetBaseInfluence",w),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Uh(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Wo=new kt,Xo=new No,qo=new Sc,Yo=new Go,Fa=[],Na=[],za=new Float32Array(16),Ua=new Float32Array(9),Ba=new Float32Array(4);function wi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fa[i];if(s===void 0&&(s=new Float32Array(i),Fa[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function et(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Er(r,e){let t=Na[e];t===void 0&&(t=new Int32Array(e),Na[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Bh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2fv(this.addr,e),tt(t,e)}}function Gh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(et(t,e))return;r.uniform3fv(this.addr,e),tt(t,e)}}function Vh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4fv(this.addr,e),tt(t,e)}}function Hh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;Ba.set(n),r.uniformMatrix2fv(this.addr,!1,Ba),tt(t,n)}}function Wh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;Ua.set(n),r.uniformMatrix3fv(this.addr,!1,Ua),tt(t,n)}}function Xh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tt(t,e)}else{if(et(t,n))return;za.set(n),r.uniformMatrix4fv(this.addr,!1,za),tt(t,n)}}function qh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Yh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2iv(this.addr,e),tt(t,e)}}function jh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;r.uniform3iv(this.addr,e),tt(t,e)}}function $h(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4iv(this.addr,e),tt(t,e)}}function Zh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(et(t,e))return;r.uniform2uiv(this.addr,e),tt(t,e)}}function Jh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(et(t,e))return;r.uniform3uiv(this.addr,e),tt(t,e)}}function Qh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(et(t,e))return;r.uniform4uiv(this.addr,e),tt(t,e)}}function ef(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Wo,i)}function tf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||qo,i)}function nf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Yo,i)}function rf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Xo,i)}function sf(r){switch(r){case 5126:return Bh;case 35664:return kh;case 35665:return Gh;case 35666:return Vh;case 35674:return Hh;case 35675:return Wh;case 35676:return Xh;case 5124:case 35670:return qh;case 35667:case 35671:return Yh;case 35668:case 35672:return jh;case 35669:case 35673:return $h;case 5125:return Zh;case 36294:return Kh;case 36295:return Jh;case 36296:return Qh;case 35678:case 36198:case 36298:case 36306:case 35682:return ef;case 35679:case 36299:case 36307:return tf;case 35680:case 36300:case 36308:case 36293:return nf;case 36289:case 36303:case 36311:case 36292:return rf}}function af(r,e){r.uniform1fv(this.addr,e)}function of(r,e){const t=wi(e,this.size,2);r.uniform2fv(this.addr,t)}function lf(r,e){const t=wi(e,this.size,3);r.uniform3fv(this.addr,t)}function cf(r,e){const t=wi(e,this.size,4);r.uniform4fv(this.addr,t)}function uf(r,e){const t=wi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function df(r,e){const t=wi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hf(r,e){const t=wi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ff(r,e){r.uniform1iv(this.addr,e)}function pf(r,e){r.uniform2iv(this.addr,e)}function mf(r,e){r.uniform3iv(this.addr,e)}function gf(r,e){r.uniform4iv(this.addr,e)}function _f(r,e){r.uniform1uiv(this.addr,e)}function vf(r,e){r.uniform2uiv(this.addr,e)}function xf(r,e){r.uniform3uiv(this.addr,e)}function yf(r,e){r.uniform4uiv(this.addr,e)}function bf(r,e,t){const n=this.cache,i=e.length,s=Er(t,i);et(n,s)||(r.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Wo,s[o])}function Mf(r,e,t){const n=this.cache,i=e.length,s=Er(t,i);et(n,s)||(r.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||qo,s[o])}function Sf(r,e,t){const n=this.cache,i=e.length,s=Er(t,i);et(n,s)||(r.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Yo,s[o])}function wf(r,e,t){const n=this.cache,i=e.length,s=Er(t,i);et(n,s)||(r.uniform1iv(this.addr,s),tt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xo,s[o])}function Ef(r){switch(r){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return cf;case 35674:return uf;case 35675:return df;case 35676:return hf;case 5124:case 35670:return ff;case 35667:case 35671:return pf;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return vf;case 36295:return xf;case 36296:return yf;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return wf}}class Tf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=sf(t.type)}}class Af{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ef(t.type)}}class Cf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const is=/(\w+)(\])?(\[|\.)?/g;function ka(r,e){r.seq.push(e),r.map[e.id]=e}function Lf(r,e,t){const n=r.name,i=n.length;for(is.lastIndex=0;;){const s=is.exec(n),o=is.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ka(t,c===void 0?new Tf(a,r,e):new Af(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Cf(a),ka(t,u)),t=u}}}class _r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Lf(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ga(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Df=0;function Pf(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Rf(r){switch(r){case Gn:return["Linear","( value )"];case Xe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Va(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Pf(r.getShaderSource(e),o)}else return i}function If(r,e){const t=Rf(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Of(r,e){let t;switch(e){case Nl:t="Linear";break;case zl:t="Reinhard";break;case Ul:t="OptimizedCineon";break;case Bl:t="ACESFilmic";break;case kl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ff(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Nf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zf(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ii(r){return r!==""}function Ha(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function vs(r){return r.replace(Uf,Bf)}function Bf(r,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return vs(t)}const kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xa(r){return r.replace(kf,Gf)}function Gf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function qa(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===To?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Hf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case yi:case bi:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Xf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Cs:e="ENVMAP_BLENDING_MULTIPLY";break;case Ol:e="ENVMAP_BLENDING_MIX";break;case Fl:e="ENVMAP_BLENDING_ADD";break}return e}function qf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Yf(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Vf(t),c=Hf(t),d=Wf(t),u=Xf(t),f=qf(t),m=t.isWebGL2?"":Ff(t),g=Nf(s),p=i.createProgram();let h,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[g].filter(Ii).join(`
`),h.length>0&&(h+=`
`),_=[m,g].filter(Ii).join(`
`),_.length>0&&(_+=`
`)):(h=[qa(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),_=[m,qa(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Te.tonemapping_pars_fragment:"",t.toneMapping!==an?Of("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,If("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ii).join(`
`)),o=vs(o),o=Ha(o,t),o=Wa(o,t),a=vs(a),a=Ha(a,t),a=Wa(a,t),o=Xa(o),a=Xa(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=b+h+o,w=b+_+a,y=Ga(i,35633,S),C=Ga(i,35632,w);if(i.attachShader(p,y),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const A=i.getProgramInfoLog(p).trim(),z=i.getShaderInfoLog(y).trim(),$=i.getShaderInfoLog(C).trim();let oe=!0,k=!0;if(i.getProgramParameter(p,35714)===!1){oe=!1;const I=Va(i,y,"vertex"),j=Va(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+I+`
`+j)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(z===""||$==="")&&(k=!1);k&&(this.diagnostics={runnable:oe,programLog:A,vertexShader:{log:z,prefix:h},fragmentShader:{log:$,prefix:_}})}i.deleteShader(y),i.deleteShader(C);let U;this.getUniforms=function(){return U===void 0&&(U=new _r(i,p)),U};let x;return this.getAttributes=function(){return x===void 0&&(x=zf(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Df++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=C,this}let jf=0;class $f{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zf(e),t.set(e,n)),n}}class Zf{constructor(e){this.id=jf++,this.code=e,this.usedTimes=0}}function Kf(r,e,t,n,i,s,o){const a=new zo,l=new $f,c=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,z,$,oe){const k=$.fog,I=oe.geometry,j=x.isMeshStandardMaterial?$.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||j),J=!!Z&&Z.mapping===Sr?Z.image.height:null,X=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const O=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,B=O!==void 0?O.length:0;let ne=0;I.morphAttributes.position!==void 0&&(ne=1),I.morphAttributes.normal!==void 0&&(ne=2),I.morphAttributes.color!==void 0&&(ne=3);let ee,Q,he,ye;if(X){const ze=_t[X];ee=ze.vertexShader,Q=ze.fragmentShader}else ee=x.vertexShader,Q=x.fragmentShader,l.update(x),he=l.getVertexShaderID(x),ye=l.getFragmentShaderID(x);const q=r.getRenderTarget(),Ie=x.alphaTest>0,xe=x.clearcoat>0,be=x.iridescence>0;return{isWebGL2:d,shaderID:X,shaderName:x.type,vertexShader:ee,fragmentShader:Q,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:oe.isInstancedMesh===!0,instancingColor:oe.isInstancedMesh===!0&&oe.instanceColor!==null,supportsVertexTextures:f,outputEncoding:q===null?r.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Gn,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:J,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===sc,tangentSpaceNormalMap:x.normalMapType===Po,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Xe,clearcoat:xe,clearcoatMap:xe&&!!x.clearcoatMap,clearcoatRoughnessMap:xe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!x.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!x.iridescenceMap,iridescenceThicknessMap:be&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===_i,alphaMap:!!x.alphaMap,alphaTest:Ie,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!I.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!k,useFog:x.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:oe.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:an,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===rn,flipSided:x.side===Pt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)A.push(z),A.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(_(A,x),b(A,x),A.push(r.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),x.push(a.mask)}function S(x){const A=g[x.type];let z;if(A){const $=_t[A];z=Ps.clone($.uniforms)}else z=x.uniforms;return z}function w(x,A){let z;for(let $=0,oe=c.length;$<oe;$++){const k=c[$];if(k.cacheKey===A){z=k,++z.usedTimes;break}}return z===void 0&&(z=new Yf(r,A,x,s),c.push(z)),z}function y(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),x.destroy()}}function C(x){l.remove(x)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:w,releaseProgram:y,releaseShaderCache:C,programs:c,dispose:U}}function Jf(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ya(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ja(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,m,g,p,h){let _=r[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:p,group:h},r[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=h),e++,_}function a(u,f,m,g,p,h){const _=o(u,f,m,g,p,h);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(u,f,m,g,p,h){const _=o(u,f,m,g,p,h);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(u,f){t.length>1&&t.sort(u||Qf),n.length>1&&n.sort(f||Ya),i.length>1&&i.sort(f||Ya)}function d(){for(let u=e,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:d,sort:c}}function e0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ja,r.set(n,[o])):i>=s.length?(o=new ja,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function t0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ve};break;case"SpotLight":t={position:new D,direction:new D,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function n0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let i0=0;function r0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function s0(r,e){const t=new t0,n=n0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)i.probe.push(new D);const s=new D,o=new Ze,a=new Ze;function l(d,u){let f=0,m=0,g=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let p=0,h=0,_=0,b=0,S=0,w=0,y=0,C=0,U=0,x=0;d.sort(r0);const A=u!==!0?Math.PI:1;for(let $=0,oe=d.length;$<oe;$++){const k=d[$],I=k.color,j=k.intensity,Z=k.distance,J=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=I.r*j*A,m+=I.g*j*A,g+=I.b*j*A;else if(k.isLightProbe)for(let X=0;X<9;X++)i.probe[X].addScaledVector(k.sh.coefficients[X],j);else if(k.isDirectionalLight){const X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*A),k.castShadow){const O=k.shadow,B=n.get(k);B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=k.shadow.matrix,w++}i.directional[p]=X,p++}else if(k.isSpotLight){const X=t.get(k);X.position.setFromMatrixPosition(k.matrixWorld),X.color.copy(I).multiplyScalar(j*A),X.distance=Z,X.coneCos=Math.cos(k.angle),X.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),X.decay=k.decay,i.spot[_]=X;const O=k.shadow;if(k.map&&(i.spotLightMap[U]=k.map,U++,O.updateMatrices(k),k.castShadow&&x++),i.spotLightMatrix[_]=O.matrix,k.castShadow){const B=n.get(k);B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,i.spotShadow[_]=B,i.spotShadowMap[_]=J,C++}_++}else if(k.isRectAreaLight){const X=t.get(k);X.color.copy(I).multiplyScalar(j),X.halfWidth.set(k.width*.5,0,0),X.halfHeight.set(0,k.height*.5,0),i.rectArea[b]=X,b++}else if(k.isPointLight){const X=t.get(k);if(X.color.copy(k.color).multiplyScalar(k.intensity*A),X.distance=k.distance,X.decay=k.decay,k.castShadow){const O=k.shadow,B=n.get(k);B.shadowBias=O.bias,B.shadowNormalBias=O.normalBias,B.shadowRadius=O.radius,B.shadowMapSize=O.mapSize,B.shadowCameraNear=O.camera.near,B.shadowCameraFar=O.camera.far,i.pointShadow[h]=B,i.pointShadowMap[h]=J,i.pointShadowMatrix[h]=k.shadow.matrix,y++}i.point[h]=X,h++}else if(k.isHemisphereLight){const X=t.get(k);X.skyColor.copy(k.color).multiplyScalar(j*A),X.groundColor.copy(k.groundColor).multiplyScalar(j*A),i.hemi[S]=X,S++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==p||z.pointLength!==h||z.spotLength!==_||z.rectAreaLength!==b||z.hemiLength!==S||z.numDirectionalShadows!==w||z.numPointShadows!==y||z.numSpotShadows!==C||z.numSpotMaps!==U)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=b,i.point.length=h,i.hemi.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=C+U-x,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=x,z.directionalLength=p,z.pointLength=h,z.spotLength=_,z.rectAreaLength=b,z.hemiLength=S,z.numDirectionalShadows=w,z.numPointShadows=y,z.numSpotShadows=C,z.numSpotMaps=U,i.version=i0++)}function c(d,u){let f=0,m=0,g=0,p=0,h=0;const _=u.matrixWorldInverse;for(let b=0,S=d.length;b<S;b++){const w=d[b];if(w.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),f++}else if(w.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const y=i.rectArea[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const y=i.hemi[h];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(_),h++}}}return{setup:l,setupView:c,state:i}}function $a(r,e){const t=new s0(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function a0(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new $a(r,e),t.set(s,[l])):o>=a.length?(l=new $a(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class o0 extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ic,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l0 extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
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
}`;function d0(r,e,t){let n=new Vo;const i=new Se,s=new Se,o=new qe,a=new o0({depthPacking:rc}),l=new l0,c={},d=t.maxTextureSize,u={0:Pt,1:xi,2:rn},f=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:c0,fragmentShader:u0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Bt(g,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To,this.render=function(w,y,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const U=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),z=r.state;z.setBlending(xn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let $=0,oe=w.length;$<oe;$++){const k=w[$],I=k.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const j=I.getFrameExtents();if(i.multiply(j),s.copy(I.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/j.x),i.x=s.x*j.x,I.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/j.y),i.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null){const J=this.type!==Ri?{minFilter:gt,magFilter:gt}:{};I.map=new Vn(i.x,i.y,J),I.map.texture.name=k.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const Z=I.getViewportCount();for(let J=0;J<Z;J++){const X=I.getViewport(J);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),z.viewport(o),I.updateMatrices(k,J),n=I.getFrustum(),S(y,C,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===Ri&&_(I,C),I.needsUpdate=!1}h.needsUpdate=!1,r.setRenderTarget(U,x,A)};function _(w,y){const C=e.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(y,null,C,f,p,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(y,null,C,m,p,null)}function b(w,y,C,U,x,A){let z=null;const $=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if($!==void 0?z=$:z=C.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const oe=z.uuid,k=y.uuid;let I=c[oe];I===void 0&&(I={},c[oe]=I);let j=I[k];j===void 0&&(j=z.clone(),I[k]=j),z=j}return z.visible=y.visible,z.wireframe=y.wireframe,A===Ri?z.side=y.shadowSide!==null?y.shadowSide:y.side:z.side=y.shadowSide!==null?y.shadowSide:u[y.side],z.alphaMap=y.alphaMap,z.alphaTest=y.alphaTest,z.clipShadows=y.clipShadows,z.clippingPlanes=y.clippingPlanes,z.clipIntersection=y.clipIntersection,z.displacementMap=y.displacementMap,z.displacementScale=y.displacementScale,z.displacementBias=y.displacementBias,z.wireframeLinewidth=y.wireframeLinewidth,z.linewidth=y.linewidth,C.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(C.matrixWorld),z.nearDistance=U,z.farDistance=x),z}function S(w,y,C,U,x){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ri)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const $=e.update(w),oe=w.material;if(Array.isArray(oe)){const k=$.groups;for(let I=0,j=k.length;I<j;I++){const Z=k[I],J=oe[Z.materialIndex];if(J&&J.visible){const X=b(w,J,U,C.near,C.far,x);r.renderBufferDirect(C,null,$,X,w,Z)}}}else if(oe.visible){const k=b(w,oe,U,C.near,C.far,x);r.renderBufferDirect(C,null,$,k,w,null)}}const z=w.children;for(let $=0,oe=z.length;$<oe;$++)S(z[$],y,C,U,x)}}function h0(r,e,t){const n=t.isWebGL2;function i(){let L=!1;const H=new qe;let K=null;const ce=new qe(0,0,0,0);return{setMask:function(me){K!==me&&!L&&(r.colorMask(me,me,me,me),K=me)},setLocked:function(me){L=me},setClear:function(me,Oe,it,lt,En){En===!0&&(me*=lt,Oe*=lt,it*=lt),H.set(me,Oe,it,lt),ce.equals(H)===!1&&(r.clearColor(me,Oe,it,lt),ce.copy(H))},reset:function(){L=!1,K=null,ce.set(-1,0,0,0)}}}function s(){let L=!1,H=null,K=null,ce=null;return{setTest:function(me){me?Ie(2929):xe(2929)},setMask:function(me){H!==me&&!L&&(r.depthMask(me),H=me)},setFunc:function(me){if(K!==me){switch(me){case Al:r.depthFunc(512);break;case Cl:r.depthFunc(519);break;case Ll:r.depthFunc(513);break;case us:r.depthFunc(515);break;case Dl:r.depthFunc(514);break;case Pl:r.depthFunc(518);break;case Rl:r.depthFunc(516);break;case Il:r.depthFunc(517);break;default:r.depthFunc(515)}K=me}},setLocked:function(me){L=me},setClear:function(me){ce!==me&&(r.clearDepth(me),ce=me)},reset:function(){L=!1,H=null,K=null,ce=null}}}function o(){let L=!1,H=null,K=null,ce=null,me=null,Oe=null,it=null,lt=null,En=null;return{setTest:function(He){L||(He?Ie(2960):xe(2960))},setMask:function(He){H!==He&&!L&&(r.stencilMask(He),H=He)},setFunc:function(He,$t,Et){(K!==He||ce!==$t||me!==Et)&&(r.stencilFunc(He,$t,Et),K=He,ce=$t,me=Et)},setOp:function(He,$t,Et){(Oe!==He||it!==$t||lt!==Et)&&(r.stencilOp(He,$t,Et),Oe=He,it=$t,lt=Et)},setLocked:function(He){L=He},setClear:function(He){En!==He&&(r.clearStencil(He),En=He)},reset:function(){L=!1,H=null,K=null,ce=null,me=null,Oe=null,it=null,lt=null,En=null}}}const a=new i,l=new s,c=new o,d=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,p=[],h=null,_=!1,b=null,S=null,w=null,y=null,C=null,U=null,x=null,A=!1,z=null,$=null,oe=null,k=null,I=null;const j=r.getParameter(35661);let Z=!1,J=0;const X=r.getParameter(7938);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=J>=2);let O=null,B={};const ne=r.getParameter(3088),ee=r.getParameter(2978),Q=new qe().fromArray(ne),he=new qe().fromArray(ee);function ye(L,H,K){const ce=new Uint8Array(4),me=r.createTexture();r.bindTexture(L,me),r.texParameteri(L,10241,9728),r.texParameteri(L,10240,9728);for(let Oe=0;Oe<K;Oe++)r.texImage2D(H+Oe,0,6408,1,1,0,6408,5121,ce);return me}const q={};q[3553]=ye(3553,3553,1),q[34067]=ye(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(2929),l.setFunc(us),Ke(!1),vt(Gs),Ie(2884),Ye(xn);function Ie(L){f[L]!==!0&&(r.enable(L),f[L]=!0)}function xe(L){f[L]!==!1&&(r.disable(L),f[L]=!1)}function be(L,H){return m[L]!==H?(r.bindFramebuffer(L,H),m[L]=H,n&&(L===36009&&(m[36160]=H),L===36160&&(m[36009]=H)),!0):!1}function de(L,H){let K=p,ce=!1;if(L)if(K=g.get(H),K===void 0&&(K=[],g.set(H,K)),L.isWebGLMultipleRenderTargets){const me=L.texture;if(K.length!==me.length||K[0]!==36064){for(let Oe=0,it=me.length;Oe<it;Oe++)K[Oe]=36064+Oe;K.length=me.length,ce=!0}}else K[0]!==36064&&(K[0]=36064,ce=!0);else K[0]!==1029&&(K[0]=1029,ce=!0);ce&&(t.isWebGL2?r.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function ze(L){return h!==L?(r.useProgram(L),h=L,!0):!1}const we={[ui]:32774,[gl]:32778,[_l]:32779};if(n)we[Xs]=32775,we[qs]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[Xs]=L.MIN_EXT,we[qs]=L.MAX_EXT)}const _e={[vl]:0,[xl]:1,[yl]:768,[Ao]:770,[Tl]:776,[wl]:774,[Ml]:772,[bl]:769,[Co]:771,[El]:775,[Sl]:773};function Ye(L,H,K,ce,me,Oe,it,lt){if(L===xn){_===!0&&(xe(3042),_=!1);return}if(_===!1&&(Ie(3042),_=!0),L!==ml){if(L!==b||lt!==A){if((S!==ui||C!==ui)&&(r.blendEquation(32774),S=ui,C=ui),lt)switch(L){case _i:r.blendFuncSeparate(1,771,1,771);break;case Vs:r.blendFunc(1,1);break;case Hs:r.blendFuncSeparate(0,769,0,1);break;case Ws:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _i:r.blendFuncSeparate(770,771,1,771);break;case Vs:r.blendFunc(770,1);break;case Hs:r.blendFuncSeparate(0,769,0,1);break;case Ws:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,y=null,U=null,x=null,b=L,A=lt}return}me=me||H,Oe=Oe||K,it=it||ce,(H!==S||me!==C)&&(r.blendEquationSeparate(we[H],we[me]),S=H,C=me),(K!==w||ce!==y||Oe!==U||it!==x)&&(r.blendFuncSeparate(_e[K],_e[ce],_e[Oe],_e[it]),w=K,y=ce,U=Oe,x=it),b=L,A=null}function nt(L,H){L.side===rn?xe(2884):Ie(2884);let K=L.side===Pt;H&&(K=!K),Ke(K),L.blending===_i&&L.transparent===!1?Ye(xn):Ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ce=L.stencilWrite;c.setTest(ce),ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ue(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ie(32926):xe(32926)}function Ke(L){z!==L&&(L?r.frontFace(2304):r.frontFace(2305),z=L)}function vt(L){L!==hl?(Ie(2884),L!==$&&(L===Gs?r.cullFace(1029):L===fl?r.cullFace(1028):r.cullFace(1032))):xe(2884),$=L}function Je(L){L!==oe&&(Z&&r.lineWidth(L),oe=L)}function Ue(L,H,K){L?(Ie(32823),(k!==H||I!==K)&&(r.polygonOffset(H,K),k=H,I=K)):xe(32823)}function St(L){L?Ie(3089):xe(3089)}function wt(L){L===void 0&&(L=33984+j-1),O!==L&&(r.activeTexture(L),O=L)}function E(L,H,K){K===void 0&&(O===null?K=33984+j-1:K=O);let ce=B[K];ce===void 0&&(ce={type:void 0,texture:void 0},B[K]=ce),(ce.type!==L||ce.texture!==H)&&(O!==K&&(r.activeTexture(K),O=K),r.bindTexture(L,H||q[L]),ce.type=L,ce.texture=H)}function v(){const L=B[O];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function T(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){Q.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function fe(L){he.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function De(L,H){let K=u.get(H);K===void 0&&(K=new WeakMap,u.set(H,K));let ce=K.get(L);ce===void 0&&(ce=r.getUniformBlockIndex(H,L.name),K.set(L,ce))}function Pe(L,H){const ce=u.get(H).get(L);d.get(L)!==ce&&(r.uniformBlockBinding(H,ce,L.__bindingPointIndex),d.set(L,ce))}function Be(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},O=null,B={},m={},g=new WeakMap,p=[],h=null,_=!1,b=null,S=null,w=null,y=null,C=null,U=null,x=null,A=!1,z=null,$=null,oe=null,k=null,I=null,Q.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ie,disable:xe,bindFramebuffer:be,drawBuffers:de,useProgram:ze,setBlending:Ye,setMaterial:nt,setFlipSided:Ke,setCullFace:vt,setLineWidth:Je,setPolygonOffset:Ue,setScissorTest:St,activeTexture:wt,bindTexture:E,unbindTexture:v,compressedTexImage2D:G,compressedTexImage3D:te,texImage2D:ue,texImage3D:ae,updateUBOMapping:De,uniformBlockBinding:Pe,texStorage2D:P,texStorage3D:le,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ve,compressedTexSubImage3D:T,scissor:pe,viewport:fe,reset:Be}}function f0(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,d=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let p;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,v){return _?new OffscreenCanvas(E,v):yr("canvas")}function S(E,v,G,te){let ie=1;if((E.width>te||E.height>te)&&(ie=te/Math.max(E.width,E.height)),ie<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const se=v?xr:Math.floor,ve=se(ie*E.width),T=se(ie*E.height);p===void 0&&(p=b(ve,T));const P=G?b(ve,T):p;return P.width=ve,P.height=T,P.getContext("2d").drawImage(E,0,0,ve,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+T+")."),P}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function w(E){return _s(E.width)&&_s(E.height)}function y(E){return a?!1:E.wrapS!==zt||E.wrapT!==zt||E.minFilter!==gt&&E.minFilter!==Ct}function C(E,v){return E.generateMipmaps&&v&&E.minFilter!==gt&&E.minFilter!==Ct}function U(E){r.generateMipmap(E)}function x(E,v,G,te,ie=!1){if(a===!1)return v;if(E!==null){if(r[E]!==void 0)return r[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=v;return v===6403&&(G===5126&&(se=33326),G===5131&&(se=33325),G===5121&&(se=33321)),v===33319&&(G===5126&&(se=33328),G===5131&&(se=33327),G===5121&&(se=33323)),v===6408&&(G===5126&&(se=34836),G===5131&&(se=34842),G===5121&&(se=te===Xe&&ie===!1?35907:32856),G===32819&&(se=32854),G===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function A(E,v,G){return C(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==gt&&E.minFilter!==Ct?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function z(E){return E===gt||E===Ys||E===js?9728:9729}function $(E){const v=E.target;v.removeEventListener("dispose",$),k(v),v.isVideoTexture&&g.delete(v)}function oe(E){const v=E.target;v.removeEventListener("dispose",oe),j(v)}function k(E){const v=n.get(E);if(v.__webglInit===void 0)return;const G=E.source,te=h.get(G);if(te){const ie=te[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(E),Object.keys(te).length===0&&h.delete(G)}n.remove(E)}function I(E){const v=n.get(E);r.deleteTexture(v.__webglTexture);const G=E.source,te=h.get(G);delete te[v.__cacheKey],o.memory.textures--}function j(E){const v=E.texture,G=n.get(E),te=n.get(v);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)r.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else{if(r.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ie=0,se=v.length;ie<se;ie++){const ve=n.get(v[ie]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(v[ie])}n.remove(v),n.remove(E)}let Z=0;function J(){Z=0}function X(){const E=Z;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),Z+=1,E}function O(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.encoding),v.join()}function B(E,v){const G=n.get(E);if(E.isVideoTexture&&St(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const te=E.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(G,E,v);return}}t.bindTexture(3553,G.__webglTexture,33984+v)}function ne(E,v){const G=n.get(E);if(E.version>0&&G.__version!==E.version){xe(G,E,v);return}t.bindTexture(35866,G.__webglTexture,33984+v)}function ee(E,v){const G=n.get(E);if(E.version>0&&G.__version!==E.version){xe(G,E,v);return}t.bindTexture(32879,G.__webglTexture,33984+v)}function Q(E,v){const G=n.get(E);if(E.version>0&&G.__version!==E.version){be(G,E,v);return}t.bindTexture(34067,G.__webglTexture,33984+v)}const he={[fs]:10497,[zt]:33071,[ps]:33648},ye={[gt]:9728,[Ys]:9984,[js]:9986,[Ct]:9729,[Gl]:9985,[wr]:9987};function q(E,v,G){if(G?(r.texParameteri(E,10242,he[v.wrapS]),r.texParameteri(E,10243,he[v.wrapT]),(E===32879||E===35866)&&r.texParameteri(E,32882,he[v.wrapR]),r.texParameteri(E,10240,ye[v.magFilter]),r.texParameteri(E,10241,ye[v.minFilter])):(r.texParameteri(E,10242,33071),r.texParameteri(E,10243,33071),(E===32879||E===35866)&&r.texParameteri(E,32882,33071),(v.wrapS!==zt||v.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(E,10240,z(v.magFilter)),r.texParameteri(E,10241,z(v.minFilter)),v.minFilter!==gt&&v.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(v.type===Fn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===Bi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(E,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Ie(E,v){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",$));const te=v.source;let ie=h.get(te);ie===void 0&&(ie={},h.set(te,ie));const se=O(v);if(se!==E.__cacheKey){ie[se]===void 0&&(ie[se]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[se].usedTimes++;const ve=ie[E.__cacheKey];ve!==void 0&&(ie[E.__cacheKey].usedTimes--,ve.usedTimes===0&&I(v)),E.__cacheKey=se,E.__webglTexture=ie[se].texture}return G}function xe(E,v,G){let te=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=35866),v.isData3DTexture&&(te=32879);const ie=Ie(E,v),se=v.source;t.bindTexture(te,E.__webglTexture,33984+G);const ve=n.get(se);if(se.version!==ve.__version||ie===!0){t.activeTexture(33984+G),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const T=y(v)&&w(v.image)===!1;let P=S(v.image,T,!1,d);P=wt(v,P);const le=w(P)||a,ue=s.convert(v.format,v.encoding);let ae=s.convert(v.type),pe=x(v.internalFormat,ue,ae,v.encoding,v.isVideoTexture);q(te,v,le);let fe;const De=v.mipmaps,Pe=a&&v.isVideoTexture!==!0,Be=ve.__version===void 0||ie===!0,L=A(v,P,le);if(v.isDepthTexture)pe=6402,a?v.type===Fn?pe=36012:v.type===On?pe=33190:v.type===vi?pe=35056:pe=33189:v.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===zn&&pe===6402&&v.type!==Do&&v.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=On,ae=s.convert(v.type)),v.format===Mi&&pe===6402&&(pe=34041,v.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=vi,ae=s.convert(v.type))),Be&&(Pe?t.texStorage2D(3553,1,pe,P.width,P.height):t.texImage2D(3553,0,pe,P.width,P.height,0,ue,ae,null));else if(v.isDataTexture)if(De.length>0&&le){Pe&&Be&&t.texStorage2D(3553,L,pe,De[0].width,De[0].height);for(let H=0,K=De.length;H<K;H++)fe=De[H],Pe?t.texSubImage2D(3553,H,0,0,fe.width,fe.height,ue,ae,fe.data):t.texImage2D(3553,H,pe,fe.width,fe.height,0,ue,ae,fe.data);v.generateMipmaps=!1}else Pe?(Be&&t.texStorage2D(3553,L,pe,P.width,P.height),t.texSubImage2D(3553,0,0,0,P.width,P.height,ue,ae,P.data)):t.texImage2D(3553,0,pe,P.width,P.height,0,ue,ae,P.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Be&&t.texStorage3D(35866,L,pe,De[0].width,De[0].height,P.depth);for(let H=0,K=De.length;H<K;H++)fe=De[H],v.format!==Ut?ue!==null?Pe?t.compressedTexSubImage3D(35866,H,0,0,0,fe.width,fe.height,P.depth,ue,fe.data,0,0):t.compressedTexImage3D(35866,H,pe,fe.width,fe.height,P.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,H,0,0,0,fe.width,fe.height,P.depth,ue,ae,fe.data):t.texImage3D(35866,H,pe,fe.width,fe.height,P.depth,0,ue,ae,fe.data)}else{Pe&&Be&&t.texStorage2D(3553,L,pe,De[0].width,De[0].height);for(let H=0,K=De.length;H<K;H++)fe=De[H],v.format!==Ut?ue!==null?Pe?t.compressedTexSubImage2D(3553,H,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(3553,H,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,H,0,0,fe.width,fe.height,ue,ae,fe.data):t.texImage2D(3553,H,pe,fe.width,fe.height,0,ue,ae,fe.data)}else if(v.isDataArrayTexture)Pe?(Be&&t.texStorage3D(35866,L,pe,P.width,P.height,P.depth),t.texSubImage3D(35866,0,0,0,0,P.width,P.height,P.depth,ue,ae,P.data)):t.texImage3D(35866,0,pe,P.width,P.height,P.depth,0,ue,ae,P.data);else if(v.isData3DTexture)Pe?(Be&&t.texStorage3D(32879,L,pe,P.width,P.height,P.depth),t.texSubImage3D(32879,0,0,0,0,P.width,P.height,P.depth,ue,ae,P.data)):t.texImage3D(32879,0,pe,P.width,P.height,P.depth,0,ue,ae,P.data);else if(v.isFramebufferTexture){if(Be)if(Pe)t.texStorage2D(3553,L,pe,P.width,P.height);else{let H=P.width,K=P.height;for(let ce=0;ce<L;ce++)t.texImage2D(3553,ce,pe,H,K,0,ue,ae,null),H>>=1,K>>=1}}else if(De.length>0&&le){Pe&&Be&&t.texStorage2D(3553,L,pe,De[0].width,De[0].height);for(let H=0,K=De.length;H<K;H++)fe=De[H],Pe?t.texSubImage2D(3553,H,0,0,ue,ae,fe):t.texImage2D(3553,H,pe,ue,ae,fe);v.generateMipmaps=!1}else Pe?(Be&&t.texStorage2D(3553,L,pe,P.width,P.height),t.texSubImage2D(3553,0,0,0,ue,ae,P)):t.texImage2D(3553,0,pe,ue,ae,P);C(v,le)&&U(te),ve.__version=se.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function be(E,v,G){if(v.image.length!==6)return;const te=Ie(E,v),ie=v.source;t.bindTexture(34067,E.__webglTexture,33984+G);const se=n.get(ie);if(ie.version!==se.__version||te===!0){t.activeTexture(33984+G),r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ve=v.isCompressedTexture||v.image[0].isCompressedTexture,T=v.image[0]&&v.image[0].isDataTexture,P=[];for(let H=0;H<6;H++)!ve&&!T?P[H]=S(v.image[H],!1,!0,c):P[H]=T?v.image[H].image:v.image[H],P[H]=wt(v,P[H]);const le=P[0],ue=w(le)||a,ae=s.convert(v.format,v.encoding),pe=s.convert(v.type),fe=x(v.internalFormat,ae,pe,v.encoding),De=a&&v.isVideoTexture!==!0,Pe=se.__version===void 0||te===!0;let Be=A(v,le,ue);q(34067,v,ue);let L;if(ve){De&&Pe&&t.texStorage2D(34067,Be,fe,le.width,le.height);for(let H=0;H<6;H++){L=P[H].mipmaps;for(let K=0;K<L.length;K++){const ce=L[K];v.format!==Ut?ae!==null?De?t.compressedTexSubImage2D(34069+H,K,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(34069+H,K,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+H,K,0,0,ce.width,ce.height,ae,pe,ce.data):t.texImage2D(34069+H,K,fe,ce.width,ce.height,0,ae,pe,ce.data)}}}else{L=v.mipmaps,De&&Pe&&(L.length>0&&Be++,t.texStorage2D(34067,Be,fe,P[0].width,P[0].height));for(let H=0;H<6;H++)if(T){De?t.texSubImage2D(34069+H,0,0,0,P[H].width,P[H].height,ae,pe,P[H].data):t.texImage2D(34069+H,0,fe,P[H].width,P[H].height,0,ae,pe,P[H].data);for(let K=0;K<L.length;K++){const me=L[K].image[H].image;De?t.texSubImage2D(34069+H,K+1,0,0,me.width,me.height,ae,pe,me.data):t.texImage2D(34069+H,K+1,fe,me.width,me.height,0,ae,pe,me.data)}}else{De?t.texSubImage2D(34069+H,0,0,0,ae,pe,P[H]):t.texImage2D(34069+H,0,fe,ae,pe,P[H]);for(let K=0;K<L.length;K++){const ce=L[K];De?t.texSubImage2D(34069+H,K+1,0,0,ae,pe,ce.image[H]):t.texImage2D(34069+H,K+1,fe,ae,pe,ce.image[H])}}}C(v,ue)&&U(34067),se.__version=ie.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function de(E,v,G,te,ie){const se=s.convert(G.format,G.encoding),ve=s.convert(G.type),T=x(G.internalFormat,se,ve,G.encoding);n.get(v).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,T,v.width,v.height,v.depth,0,se,ve,null):t.texImage2D(ie,0,T,v.width,v.height,0,se,ve,null)),t.bindFramebuffer(36160,E),Ue(v)?f.framebufferTexture2DMultisampleEXT(36160,te,ie,n.get(G).__webglTexture,0,Je(v)):(ie===3553||ie>=34069&&ie<=34074)&&r.framebufferTexture2D(36160,te,ie,n.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(E,v,G){if(r.bindRenderbuffer(36161,E),v.depthBuffer&&!v.stencilBuffer){let te=33189;if(G||Ue(v)){const ie=v.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Fn?te=36012:ie.type===On&&(te=33190));const se=Je(v);Ue(v)?f.renderbufferStorageMultisampleEXT(36161,se,te,v.width,v.height):r.renderbufferStorageMultisample(36161,se,te,v.width,v.height)}else r.renderbufferStorage(36161,te,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,E)}else if(v.depthBuffer&&v.stencilBuffer){const te=Je(v);G&&Ue(v)===!1?r.renderbufferStorageMultisample(36161,te,35056,v.width,v.height):Ue(v)?f.renderbufferStorageMultisampleEXT(36161,te,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,E)}else{const te=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ie=0;ie<te.length;ie++){const se=te[ie],ve=s.convert(se.format,se.encoding),T=s.convert(se.type),P=x(se.internalFormat,ve,T,se.encoding),le=Je(v);G&&Ue(v)===!1?r.renderbufferStorageMultisample(36161,le,P,v.width,v.height):Ue(v)?f.renderbufferStorageMultisampleEXT(36161,le,P,v.width,v.height):r.renderbufferStorage(36161,P,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function we(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),B(v.depthTexture,0);const te=n.get(v.depthTexture).__webglTexture,ie=Je(v);if(v.depthTexture.format===zn)Ue(v)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):r.framebufferTexture2D(36160,36096,3553,te,0);else if(v.depthTexture.format===Mi)Ue(v)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function _e(E){const v=n.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");we(v.__webglFramebuffer,E)}else if(G){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]=r.createRenderbuffer(),ze(v.__webglDepthbuffer[te],E,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),ze(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Ye(E,v,G){const te=n.get(E);v!==void 0&&de(te.__webglFramebuffer,E,E.texture,36064,3553),G!==void 0&&_e(E)}function nt(E){const v=E.texture,G=n.get(E),te=n.get(v);E.addEventListener("dispose",oe),E.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=v.version,o.memory.textures++);const ie=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,ve=w(E)||a;if(ie){G.__webglFramebuffer=[];for(let T=0;T<6;T++)G.__webglFramebuffer[T]=r.createFramebuffer()}else{if(G.__webglFramebuffer=r.createFramebuffer(),se)if(i.drawBuffers){const T=E.texture;for(let P=0,le=T.length;P<le;P++){const ue=n.get(T[P]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Ue(E)===!1){const T=se?v:[v];G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let P=0;P<T.length;P++){const le=T[P];G.__webglColorRenderbuffer[P]=r.createRenderbuffer(),r.bindRenderbuffer(36161,G.__webglColorRenderbuffer[P]);const ue=s.convert(le.format,le.encoding),ae=s.convert(le.type),pe=x(le.internalFormat,ue,ae,le.encoding,E.isXRRenderTarget===!0),fe=Je(E);r.renderbufferStorageMultisample(36161,fe,pe,E.width,E.height),r.framebufferRenderbuffer(36160,36064+P,36161,G.__webglColorRenderbuffer[P])}r.bindRenderbuffer(36161,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),q(34067,v,ve);for(let T=0;T<6;T++)de(G.__webglFramebuffer[T],E,v,36064,34069+T);C(v,ve)&&U(34067),t.unbindTexture()}else if(se){const T=E.texture;for(let P=0,le=T.length;P<le;P++){const ue=T[P],ae=n.get(ue);t.bindTexture(3553,ae.__webglTexture),q(3553,ue,ve),de(G.__webglFramebuffer,E,ue,36064+P,3553),C(ue,ve)&&U(3553)}t.unbindTexture()}else{let T=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?T=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,te.__webglTexture),q(T,v,ve),de(G.__webglFramebuffer,E,v,36064,T),C(v,ve)&&U(T),t.unbindTexture()}E.depthBuffer&&_e(E)}function Ke(E){const v=w(E)||a,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let te=0,ie=G.length;te<ie;te++){const se=G[te];if(C(se,v)){const ve=E.isWebGLCubeRenderTarget?34067:3553,T=n.get(se).__webglTexture;t.bindTexture(ve,T),U(ve),t.unbindTexture()}}}function vt(E){if(a&&E.samples>0&&Ue(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,te=E.height;let ie=16384;const se=[],ve=E.stencilBuffer?33306:36096,T=n.get(E),P=E.isWebGLMultipleRenderTargets===!0;if(P)for(let le=0;le<v.length;le++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let le=0;le<v.length;le++){se.push(36064+le),E.depthBuffer&&se.push(ve);const ue=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(ue===!1&&(E.depthBuffer&&(ie|=256),E.stencilBuffer&&(ie|=1024)),P&&r.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[le]),ue===!0&&(r.invalidateFramebuffer(36008,[ve]),r.invalidateFramebuffer(36009,[ve])),P){const ae=n.get(v[le]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,ae,0)}r.blitFramebuffer(0,0,G,te,0,0,G,te,ie,9728),m&&r.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),P)for(let le=0;le<v.length;le++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+le,36161,T.__webglColorRenderbuffer[le]);const ue=n.get(v[le]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),r.framebufferTexture2D(36009,36064+le,3553,ue,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Je(E){return Math.min(u,E.samples)}function Ue(E){const v=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(E){const v=o.render.frame;g.get(E)!==v&&(g.set(E,v),E.update())}function wt(E,v){const G=E.encoding,te=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===gs||G!==Gn&&(G===Xe?a===!1?e.has("EXT_sRGB")===!0&&te===Ut?(E.format=gs,E.minFilter=Ct,E.generateMipmaps=!1):v=Oo.sRGBToLinear(v):(te!==Ut||ie!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),v}this.allocateTextureUnit=X,this.resetTextureUnits=J,this.setTexture2D=B,this.setTexture2DArray=ne,this.setTexture3D=ee,this.setTextureCube=Q,this.rebindTextures=Ye,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Ue}function p0(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===kn)return 5121;if(s===Xl)return 32819;if(s===ql)return 32820;if(s===Vl)return 5120;if(s===Hl)return 5122;if(s===Do)return 5123;if(s===Wl)return 5124;if(s===On)return 5125;if(s===Fn)return 5126;if(s===Bi)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Yl)return 6406;if(s===Ut)return 6408;if(s===$l)return 6409;if(s===Zl)return 6410;if(s===zn)return 6402;if(s===Mi)return 34041;if(s===Kl)return 6403;if(s===jl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===gs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Jl)return 36244;if(s===Ql)return 33319;if(s===ec)return 33320;if(s===tc)return 36249;if(s===Lr||s===Dr||s===Pr||s===Rr)if(o===Xe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Lr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Lr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$s||s===Zs||s===Ks||s===Js)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$s)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ks)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Js)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qs||s===ea)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qs)return o===Xe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ea)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ta||s===na||s===ia||s===ra||s===sa||s===aa||s===oa||s===la||s===ca||s===ua||s===da||s===ha||s===fa||s===pa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ta)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===na)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ia)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ra)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===aa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===la)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ca)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ua)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===da)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ha)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pa)return o===Xe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ma)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ma)return o===Xe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===vi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class m0 extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pi extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g0={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const b=new pi;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[p.jointName]=b,c.add(b)}const _=c.joints[p.jointName];h!==null&&(_.matrix.fromArray(h.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=h.radius),_.visible=h!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class _0 extends kt{constructor(e,t,n,i,s,o,a,l,c,d){if(d=d!==void 0?d:zn,d!==zn&&d!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===zn&&(n=On),n===void 0&&d===Mi&&(n=vi),super(null,i,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gt,this.minFilter=l!==void 0?l:gt,this.flipY=!1,this.generateMipmaps=!1}}class v0 extends Wn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,d=null,u=null,f=null,m=null;const g=t.getContextAttributes();let p=null,h=null;const _=[],b=[],S=new Lt;S.layers.enable(1),S.viewport=new qe;const w=new Lt;w.layers.enable(2),w.viewport=new qe;const y=[S,w],C=new m0;C.layers.enable(1),C.layers.enable(2);let U=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let B=_[O];return B===void 0&&(B=new rs,_[O]=B),B.getTargetRaySpace()},this.getControllerGrip=function(O){let B=_[O];return B===void 0&&(B=new rs,_[O]=B),B.getGripSpace()},this.getHand=function(O){let B=_[O];return B===void 0&&(B=new rs,_[O]=B),B.getHandSpace()};function A(O){const B=b.indexOf(O.inputSource);if(B===-1)return;const ne=_[B];ne!==void 0&&ne.dispatchEvent({type:O.type,data:O.inputSource})}function z(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",$);for(let O=0;O<_.length;O++){const B=b[O];B!==null&&(b[O]=null,_[O].disconnect(B))}U=null,x=null,e.setRenderTarget(p),f=null,u=null,d=null,i=null,h=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",z),i.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:f}),h=new Vn(f.framebufferWidth,f.framebufferHeight,{format:Ut,type:kn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let B=null,ne=null,ee=null;g.depth&&(ee=g.stencil?35056:33190,B=g.stencil?Mi:zn,ne=g.stencil?vi:On);const Q={colorFormat:32856,depthFormat:ee,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Q),i.updateRenderState({layers:[u]}),h=new Vn(u.textureWidth,u.textureHeight,{format:Ut,type:kn,depthTexture:new _0(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const he=e.properties.get(h);he.__ignoreDepthValues=u.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),X.setContext(i),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function $(O){for(let B=0;B<O.removed.length;B++){const ne=O.removed[B],ee=b.indexOf(ne);ee>=0&&(b[ee]=null,_[ee].dispatchEvent({type:"disconnected",data:ne}))}for(let B=0;B<O.added.length;B++){const ne=O.added[B];let ee=b.indexOf(ne);if(ee===-1){for(let he=0;he<_.length;he++)if(he>=b.length){b.push(ne),ee=he;break}else if(b[he]===null){b[he]=ne,ee=he;break}if(ee===-1)break}const Q=_[ee];Q&&Q.dispatchEvent({type:"connected",data:ne})}}const oe=new D,k=new D;function I(O,B,ne){oe.setFromMatrixPosition(B.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const ee=oe.distanceTo(k),Q=B.projectionMatrix.elements,he=ne.projectionMatrix.elements,ye=Q[14]/(Q[10]-1),q=Q[14]/(Q[10]+1),Ie=(Q[9]+1)/Q[5],xe=(Q[9]-1)/Q[5],be=(Q[8]-1)/Q[0],de=(he[8]+1)/he[0],ze=ye*be,we=ye*de,_e=ee/(-be+de),Ye=_e*-be;B.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ye),O.translateZ(_e),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const nt=ye+_e,Ke=q+_e,vt=ze-Ye,Je=we+(ee-Ye),Ue=Ie*q/Ke*nt,St=xe*q/Ke*nt;O.projectionMatrix.makePerspective(vt,Je,Ue,St,nt,Ke)}function j(O,B){B===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(B.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;C.near=w.near=S.near=O.near,C.far=w.far=S.far=O.far,(U!==C.near||x!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),U=C.near,x=C.far);const B=O.parent,ne=C.cameras;j(C,B);for(let Q=0;Q<ne.length;Q++)j(ne[Q],B);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),O.matrix.copy(C.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const ee=O.children;for(let Q=0,he=ee.length;Q<he;Q++)ee[Q].updateMatrixWorld(!0);ne.length===2?I(C,S,w):C.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){u!==null&&(u.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let Z=null;function J(O,B){if(c=B.getViewerPose(l||o),m=B,c!==null){const ne=c.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let ee=!1;ne.length!==C.cameras.length&&(C.cameras.length=0,ee=!0);for(let Q=0;Q<ne.length;Q++){const he=ne[Q];let ye=null;if(f!==null)ye=f.getViewport(he);else{const Ie=d.getViewSubImage(u,he);ye=Ie.viewport,Q===0&&(e.setRenderTargetTextures(h,Ie.colorTexture,u.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(h))}let q=y[Q];q===void 0&&(q=new Lt,q.layers.enable(Q),q.viewport=new qe,y[Q]=q),q.matrix.fromArray(he.transform.matrix),q.projectionMatrix.fromArray(he.projectionMatrix),q.viewport.set(ye.x,ye.y,ye.width,ye.height),Q===0&&C.matrix.copy(q.matrix),ee===!0&&C.cameras.push(q)}}for(let ne=0;ne<_.length;ne++){const ee=b[ne],Q=_[ne];ee!==null&&Q!==void 0&&Q.update(ee,B,l||o)}Z&&Z(O,B),m=null}const X=new Ho;X.setAnimationLoop(J),this.setAnimationLoop=function(O){Z=O},this.dispose=function(){}}}function x0(r,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,_,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),d(p,h)):h.isMeshPhongMaterial?(i(p,h),c(p,h)):h.isMeshStandardMaterial?(i(p,h),u(p,h),h.isMeshPhysicalMaterial&&f(p,h,S)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),g(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,_,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Pt&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Pt&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const w=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let b;h.map?b=h.map:h.specularMap?b=h.specularMap:h.displacementMap?b=h.displacementMap:h.normalMap?b=h.normalMap:h.bumpMap?b=h.bumpMap:h.roughnessMap?b=h.roughnessMap:h.metalnessMap?b=h.metalnessMap:h.alphaMap?b=h.alphaMap:h.emissiveMap?b=h.emissiveMap:h.clearcoatMap?b=h.clearcoatMap:h.clearcoatNormalMap?b=h.clearcoatNormalMap:h.clearcoatRoughnessMap?b=h.clearcoatRoughnessMap:h.iridescenceMap?b=h.iridescenceMap:h.iridescenceThicknessMap?b=h.iridescenceThicknessMap:h.specularIntensityMap?b=h.specularIntensityMap:h.specularColorMap?b=h.specularColorMap:h.transmissionMap?b=h.transmissionMap:h.thicknessMap?b=h.thicknessMap:h.sheenColorMap?b=h.sheenColorMap:h.sheenRoughnessMap&&(b=h.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix));let S;h.aoMap?S=h.aoMap:h.lightMap&&(S=h.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,_,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=b*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let S;h.map?S=h.map:h.alphaMap&&(S=h.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let _;h.map?_=h.map:h.alphaMap&&(_=h.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function u(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Pt&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function y0(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,S){const w=S.program;n.uniformBlockBinding(b,w)}function c(b,S){let w=i[b.id];w===void 0&&(g(b),w=d(b),i[b.id]=w,b.addEventListener("dispose",h));const y=S.program;n.updateUBOMapping(b,y);const C=e.render.frame;s[b.id]!==C&&(f(b),s[b.id]=C)}function d(b){const S=u();b.__bindingPointIndex=S;const w=r.createBuffer(),y=b.__size,C=b.usage;return r.bindBuffer(35345,w),r.bufferData(35345,y,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,w),w}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=i[b.id],w=b.uniforms,y=b.__cache;r.bindBuffer(35345,S);for(let C=0,U=w.length;C<U;C++){const x=w[C];if(m(x,C,y)===!0){const A=x.value,z=x.__offset;typeof A=="number"?(x.__data[0]=A,r.bufferSubData(35345,z,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):A.toArray(x.__data),r.bufferSubData(35345,z,x.__data))}}r.bindBuffer(35345,null)}function m(b,S,w){const y=b.value;if(w[S]===void 0)return typeof y=="number"?w[S]=y:w[S]=y.clone(),!0;if(typeof y=="number"){if(w[S]!==y)return w[S]=y,!0}else{const C=w[S];if(C.equals(y)===!1)return C.copy(y),!0}return!1}function g(b){const S=b.uniforms;let w=0;const y=16;let C=0;for(let U=0,x=S.length;U<x;U++){const A=S[U],z=p(A);if(A.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,U>0){C=w%y;const $=y-C;C!==0&&$-z.boundary<0&&(w+=y-C,A.__offset=w)}w+=z.storage}return C=w%y,C>0&&(w+=y-C),b.__size=w,b.__cache={},this}function p(b){const S=b.value,w={boundary:0,storage:0};return typeof S=="number"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function h(b){const S=b.target;S.removeEventListener("dispose",h);const w=o.indexOf(S.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function _(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function b0(){const r=yr("canvas");return r.style.display="block",r}function jo(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:b0(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=r.alpha!==void 0?r.alpha:!1;let u=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gn,this.physicallyCorrectLights=!1,this.toneMapping=an,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,_=0,b=0,S=null,w=-1,y=null;const C=new qe,U=new qe;let x=null,A=e.width,z=e.height,$=1,oe=null,k=null;const I=new qe(0,0,A,z),j=new qe(0,0,A,z);let Z=!1;const J=new Vo;let X=!1,O=!1,B=null;const ne=new Ze,ee=new Se,Q=new D,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return S===null?$:1}let q=t;function Ie(M,F){for(let V=0;V<M.length;V++){const R=M[V],W=e.getContext(R,F);if(W!==null)return W}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${As}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",De,!1),q===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),q=Ie(F,M),q===null)throw Ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xe,be,de,ze,we,_e,Ye,nt,Ke,vt,Je,Ue,St,wt,E,v,G,te,ie,se,ve,T,P,le;function ue(){xe=new Ph(q),be=new wh(q,xe,r),xe.init(be),T=new p0(q,xe,be),de=new h0(q,xe,be),ze=new Oh,we=new Jf,_e=new f0(q,xe,de,we,be,T,ze),Ye=new Th(p),nt=new Dh(p),Ke=new Vc(q,be),P=new Mh(q,xe,Ke,be),vt=new Rh(q,Ke,ze,P),Je=new Uh(q,vt,Ke,ze),ie=new zh(q,be,_e),v=new Eh(we),Ue=new Kf(p,Ye,nt,xe,be,P,v),St=new x0(p,we),wt=new e0,E=new a0(xe,be),te=new bh(p,Ye,nt,de,Je,d,o),G=new d0(p,Je,be),le=new y0(q,ze,be,de),se=new Sh(q,xe,ze,be),ve=new Ih(q,xe,ze,be),ze.programs=Ue.programs,p.capabilities=be,p.extensions=xe,p.properties=we,p.renderLists=wt,p.shadowMap=G,p.state=de,p.info=ze}ue();const ae=new v0(p,q);this.xr=ae,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const M=xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(A,z,!1))},this.getSize=function(M){return M.set(A,z)},this.setSize=function(M,F,V){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=M,z=F,e.width=Math.floor(M*$),e.height=Math.floor(F*$),V!==!1&&(e.style.width=M+"px",e.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(A*$,z*$).floor()},this.setDrawingBufferSize=function(M,F,V){A=M,z=F,$=V,e.width=Math.floor(M*V),e.height=Math.floor(F*V),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(I)},this.setViewport=function(M,F,V,R){M.isVector4?I.set(M.x,M.y,M.z,M.w):I.set(M,F,V,R),de.viewport(C.copy(I).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(j)},this.setScissor=function(M,F,V,R){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,F,V,R),de.scissor(U.copy(j).multiplyScalar($).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(M){de.setScissorTest(Z=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){k=M},this.getClearColor=function(M){return M.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(M=!0,F=!0,V=!0){let R=0;M&&(R|=16384),F&&(R|=256),V&&(R|=1024),q.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",De,!1),wt.dispose(),E.dispose(),we.dispose(),Ye.dispose(),nt.dispose(),Je.dispose(),P.dispose(),le.dispose(),Ue.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ce),ae.removeEventListener("sessionend",me),B&&(B.dispose(),B=null),Oe.stop()};function pe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const M=ze.autoReset,F=G.enabled,V=G.autoUpdate,R=G.needsUpdate,W=G.type;ue(),ze.autoReset=M,G.enabled=F,G.autoUpdate=V,G.needsUpdate=R,G.type=W}function De(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pe(M){const F=M.target;F.removeEventListener("dispose",Pe),Be(F)}function Be(M){L(M),we.remove(M)}function L(M){const F=we.get(M).programs;F!==void 0&&(F.forEach(function(V){Ue.releaseProgram(V)}),M.isShaderMaterial&&Ue.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,V,R,W,ge){F===null&&(F=he);const Me=W.isMesh&&W.matrixWorld.determinant()<0,Ae=al(M,F,V,R,W);de.setMaterial(R,Me);let Ee=V.index;const Fe=V.attributes.position;if(Ee===null){if(Fe===void 0||Fe.count===0)return}else if(Ee.count===0)return;let Le=1;R.wireframe===!0&&(Ee=vt.getWireframeAttribute(V),Le=2),P.setup(W,R,Ae,V,Ee);let Re,We=se;Ee!==null&&(Re=Ke.get(Ee),We=ve,We.setIndex(Re));const Tn=Ee!==null?Ee.count:Fe.count,qn=V.drawRange.start*Le,Yn=V.drawRange.count*Le,Wt=ge!==null?ge.start*Le:0,Ne=ge!==null?ge.count*Le:1/0,jn=Math.max(qn,Wt),je=Math.min(Tn,qn+Yn,Wt+Ne)-1,Tt=Math.max(0,je-jn+1);if(Tt!==0){if(W.isMesh)R.wireframe===!0?(de.setLineWidth(R.wireframeLinewidth*ye()),We.setMode(1)):We.setMode(4);else if(W.isLine){let ln=R.linewidth;ln===void 0&&(ln=1),de.setLineWidth(ln*ye()),W.isLineSegments?We.setMode(1):W.isLineLoop?We.setMode(2):We.setMode(3)}else W.isPoints?We.setMode(0):W.isSprite&&We.setMode(4);if(W.isInstancedMesh)We.renderInstances(jn,Tt,W.count);else if(V.isInstancedBufferGeometry){const ln=Math.min(V.instanceCount,V._maxInstanceCount);We.renderInstances(jn,Tt,ln)}else We.render(jn,Tt)}},this.compile=function(M,F){function V(R,W,ge){R.transparent===!0&&R.side===rn?(R.side=Pt,R.needsUpdate=!0,Et(R,W,ge),R.side=xi,R.needsUpdate=!0,Et(R,W,ge),R.side=rn):Et(R,W,ge)}f=E.get(M),f.init(),g.push(f),M.traverseVisible(function(R){R.isLight&&R.layers.test(F.layers)&&(f.pushLight(R),R.castShadow&&f.pushShadow(R))}),f.setupLights(p.physicallyCorrectLights),M.traverse(function(R){const W=R.material;if(W)if(Array.isArray(W))for(let ge=0;ge<W.length;ge++){const Me=W[ge];V(Me,M,R)}else V(W,M,R)}),g.pop(),f=null};let H=null;function K(M){H&&H(M)}function ce(){Oe.stop()}function me(){Oe.start()}const Oe=new Ho;Oe.setAnimationLoop(K),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(M){H=M,ae.setAnimationLoop(M),M===null?Oe.stop():Oe.start()},ae.addEventListener("sessionstart",ce),ae.addEventListener("sessionend",me),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(F),F=ae.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,F,S),f=E.get(M,g.length),f.init(),g.push(f),ne.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(ne),O=this.localClippingEnabled,X=v.init(this.clippingPlanes,O,F),u=wt.get(M,m.length),u.init(),m.push(u),it(M,F,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(oe,k),X===!0&&v.beginShadows();const V=f.state.shadowsArray;if(G.render(V,M,F),X===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(u,M),f.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const R=F.cameras;for(let W=0,ge=R.length;W<ge;W++){const Me=R[W];lt(u,M,Me,Me.viewport)}}else lt(u,M,F);S!==null&&(_e.updateMultisampleRenderTarget(S),_e.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(p,M,F),P.resetDefaultState(),w=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?u=m[m.length-1]:u=null};function it(M,F,V,R){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||J.intersectsSprite(M)){R&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);const Me=Je.update(M),Ae=M.material;Ae.visible&&u.push(M,Me,Ae,V,Q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==ze.render.frame&&(M.skeleton.update(),M.skeleton.frame=ze.render.frame),!M.frustumCulled||J.intersectsObject(M))){R&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ne);const Me=Je.update(M),Ae=M.material;if(Array.isArray(Ae)){const Ee=Me.groups;for(let Fe=0,Le=Ee.length;Fe<Le;Fe++){const Re=Ee[Fe],We=Ae[Re.materialIndex];We&&We.visible&&u.push(M,Me,We,V,Q.z,Re)}}else Ae.visible&&u.push(M,Me,Ae,V,Q.z,null)}}const ge=M.children;for(let Me=0,Ae=ge.length;Me<Ae;Me++)it(ge[Me],F,V,R)}function lt(M,F,V,R){const W=M.opaque,ge=M.transmissive,Me=M.transparent;f.setupLightsView(V),ge.length>0&&En(W,F,V),R&&de.viewport(C.copy(R)),W.length>0&&He(W,F,V),ge.length>0&&He(ge,F,V),Me.length>0&&He(Me,F,V),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function En(M,F,V){const R=be.isWebGL2;B===null&&(B=new Vn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Bi:kn,minFilter:wr,samples:R&&s===!0?4:0})),p.getDrawingBufferSize(ee),R?B.setSize(ee.x,ee.y):B.setSize(xr(ee.x),xr(ee.y));const W=p.getRenderTarget();p.setRenderTarget(B),p.clear();const ge=p.toneMapping;p.toneMapping=an,He(M,F,V),p.toneMapping=ge,_e.updateMultisampleRenderTarget(B),_e.updateRenderTargetMipmap(B),p.setRenderTarget(W)}function He(M,F,V){const R=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ge=M.length;W<ge;W++){const Me=M[W],Ae=Me.object,Ee=Me.geometry,Fe=R===null?Me.material:R,Le=Me.group;Ae.layers.test(V.layers)&&$t(Ae,F,V,Ee,Fe,Le)}}function $t(M,F,V,R,W,ge){M.onBeforeRender(p,F,V,R,W,ge),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(p,F,V,R,M,ge),W.transparent===!0&&W.side===rn?(W.side=Pt,W.needsUpdate=!0,p.renderBufferDirect(V,F,R,W,M,ge),W.side=xi,W.needsUpdate=!0,p.renderBufferDirect(V,F,R,W,M,ge),W.side=rn):p.renderBufferDirect(V,F,R,W,M,ge),M.onAfterRender(p,F,V,R,W,ge)}function Et(M,F,V){F.isScene!==!0&&(F=he);const R=we.get(M),W=f.state.lights,ge=f.state.shadowsArray,Me=W.state.version,Ae=Ue.getParameters(M,W.state,ge,F,V),Ee=Ue.getProgramCacheKey(Ae);let Fe=R.programs;R.environment=M.isMeshStandardMaterial?F.environment:null,R.fog=F.fog,R.envMap=(M.isMeshStandardMaterial?nt:Ye).get(M.envMap||R.environment),Fe===void 0&&(M.addEventListener("dispose",Pe),Fe=new Map,R.programs=Fe);let Le=Fe.get(Ee);if(Le!==void 0){if(R.currentProgram===Le&&R.lightsStateVersion===Me)return Bs(M,Ae),Le}else Ae.uniforms=Ue.getUniforms(M),M.onBuild(V,Ae,p),M.onBeforeCompile(Ae,p),Le=Ue.acquireProgram(Ae,Ee),Fe.set(Ee,Le),R.uniforms=Ae.uniforms;const Re=R.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=v.uniform),Bs(M,Ae),R.needsLights=ll(M),R.lightsStateVersion=Me,R.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMap.value=W.state.directionalShadowMap,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotShadowMap.value=W.state.spotShadowMap,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMap.value=W.state.pointShadowMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix);const We=Le.getUniforms(),Tn=_r.seqWithValue(We.seq,Re);return R.currentProgram=Le,R.uniformsList=Tn,Le}function Bs(M,F){const V=we.get(M);V.outputEncoding=F.outputEncoding,V.instancing=F.instancing,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function al(M,F,V,R,W){F.isScene!==!0&&(F=he),_e.resetTextureUnits();const ge=F.fog,Me=R.isMeshStandardMaterial?F.environment:null,Ae=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Gn,Ee=(R.isMeshStandardMaterial?nt:Ye).get(R.envMap||Me),Fe=R.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!R.normalMap&&!!V.attributes.tangent,Re=!!V.morphAttributes.position,We=!!V.morphAttributes.normal,Tn=!!V.morphAttributes.color,qn=R.toneMapped?p.toneMapping:an,Yn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Wt=Yn!==void 0?Yn.length:0,Ne=we.get(R),jn=f.state.lights;if(X===!0&&(O===!0||M!==y)){const xt=M===y&&R.id===w;v.setState(R,M,xt)}let je=!1;R.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==jn.state.version||Ne.outputEncoding!==Ae||W.isInstancedMesh&&Ne.instancing===!1||!W.isInstancedMesh&&Ne.instancing===!0||W.isSkinnedMesh&&Ne.skinning===!1||!W.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ee||R.fog===!0&&Ne.fog!==ge||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==v.numPlanes||Ne.numIntersection!==v.numIntersection)||Ne.vertexAlphas!==Fe||Ne.vertexTangents!==Le||Ne.morphTargets!==Re||Ne.morphNormals!==We||Ne.morphColors!==Tn||Ne.toneMapping!==qn||be.isWebGL2===!0&&Ne.morphTargetsCount!==Wt)&&(je=!0):(je=!0,Ne.__version=R.version);let Tt=Ne.currentProgram;je===!0&&(Tt=Et(R,F,W));let ln=!1,Ei=!1,Tr=!1;const ft=Tt.getUniforms(),An=Ne.uniforms;if(de.useProgram(Tt.program)&&(ln=!0,Ei=!0,Tr=!0),R.id!==w&&(w=R.id,Ei=!0),ln||y!==M){if(ft.setValue(q,"projectionMatrix",M.projectionMatrix),be.logarithmicDepthBuffer&&ft.setValue(q,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),y!==M&&(y=M,Ei=!0,Tr=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const xt=ft.map.cameraPosition;xt!==void 0&&xt.setValue(q,Q.setFromMatrixPosition(M.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ft.setValue(q,"isOrthographic",M.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||W.isSkinnedMesh)&&ft.setValue(q,"viewMatrix",M.matrixWorldInverse)}if(W.isSkinnedMesh){ft.setOptional(q,W,"bindMatrix"),ft.setOptional(q,W,"bindMatrixInverse");const xt=W.skeleton;xt&&(be.floatVertexTextures?(xt.boneTexture===null&&xt.computeBoneTexture(),ft.setValue(q,"boneTexture",xt.boneTexture,_e),ft.setValue(q,"boneTextureSize",xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ar=V.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0&&be.isWebGL2===!0)&&ie.update(W,V,R,Tt),(Ei||Ne.receiveShadow!==W.receiveShadow)&&(Ne.receiveShadow=W.receiveShadow,ft.setValue(q,"receiveShadow",W.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(An.envMap.value=Ee,An.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Ei&&(ft.setValue(q,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&ol(An,Tr),ge&&R.fog===!0&&St.refreshFogUniforms(An,ge),St.refreshMaterialUniforms(An,R,$,z,B),_r.upload(q,Ne.uniformsList,An,_e)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(_r.upload(q,Ne.uniformsList,An,_e),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ft.setValue(q,"center",W.center),ft.setValue(q,"modelViewMatrix",W.modelViewMatrix),ft.setValue(q,"normalMatrix",W.normalMatrix),ft.setValue(q,"modelMatrix",W.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const xt=R.uniformsGroups;for(let Cr=0,cl=xt.length;Cr<cl;Cr++)if(be.isWebGL2){const ks=xt[Cr];le.update(ks,Tt),le.bind(ks,Tt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tt}function ol(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function ll(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,F,V){we.get(M.texture).__webglTexture=F,we.get(M.depthTexture).__webglTexture=V;const R=we.get(M);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=V===void 0,R.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,F){const V=we.get(M);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,V=0){S=M,_=F,b=V;let R=!0,W=null,ge=!1,Me=!1;if(M){const Ee=we.get(M);Ee.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),R=!1):Ee.__webglFramebuffer===void 0?_e.setupRenderTarget(M):Ee.__hasExternalTextures&&_e.rebindTextures(M,we.get(M.texture).__webglTexture,we.get(M.depthTexture).__webglTexture);const Fe=M.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Me=!0);const Le=we.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(W=Le[F],ge=!0):be.isWebGL2&&M.samples>0&&_e.useMultisampledRTT(M)===!1?W=we.get(M).__webglMultisampledFramebuffer:W=Le,C.copy(M.viewport),U.copy(M.scissor),x=M.scissorTest}else C.copy(I).multiplyScalar($).floor(),U.copy(j).multiplyScalar($).floor(),x=Z;if(de.bindFramebuffer(36160,W)&&be.drawBuffers&&R&&de.drawBuffers(M,W),de.viewport(C),de.scissor(U),de.setScissorTest(x),ge){const Ee=we.get(M.texture);q.framebufferTexture2D(36160,36064,34069+F,Ee.__webglTexture,V)}else if(Me){const Ee=we.get(M.texture),Fe=F||0;q.framebufferTextureLayer(36160,36064,Ee.__webglTexture,V||0,Fe)}w=-1},this.readRenderTargetPixels=function(M,F,V,R,W,ge,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=we.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){de.bindFramebuffer(36160,Ae);try{const Ee=M.texture,Fe=Ee.format,Le=Ee.type;if(Fe!==Ut&&T.convert(Fe)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Le===Bi&&(xe.has("EXT_color_buffer_half_float")||be.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Le!==kn&&T.convert(Le)!==q.getParameter(35738)&&!(Le===Fn&&(be.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-R&&V>=0&&V<=M.height-W&&q.readPixels(F,V,R,W,T.convert(Fe),T.convert(Le),ge)}finally{const Ee=S!==null?we.get(S).__webglFramebuffer:null;de.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(M,F,V=0){const R=Math.pow(2,-V),W=Math.floor(F.image.width*R),ge=Math.floor(F.image.height*R);_e.setTexture2D(F,0),q.copyTexSubImage2D(3553,V,0,0,M.x,M.y,W,ge),de.unbindTexture()},this.copyTextureToTexture=function(M,F,V,R=0){const W=F.image.width,ge=F.image.height,Me=T.convert(V.format),Ae=T.convert(V.type);_e.setTexture2D(V,0),q.pixelStorei(37440,V.flipY),q.pixelStorei(37441,V.premultiplyAlpha),q.pixelStorei(3317,V.unpackAlignment),F.isDataTexture?q.texSubImage2D(3553,R,M.x,M.y,W,ge,Me,Ae,F.image.data):F.isCompressedTexture?q.compressedTexSubImage2D(3553,R,M.x,M.y,F.mipmaps[0].width,F.mipmaps[0].height,Me,F.mipmaps[0].data):q.texSubImage2D(3553,R,M.x,M.y,Me,Ae,F.image),R===0&&V.generateMipmaps&&q.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(M,F,V,R,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,Ae=M.max.z-M.min.z+1,Ee=T.convert(R.format),Fe=T.convert(R.type);let Le;if(R.isData3DTexture)_e.setTexture3D(R,0),Le=32879;else if(R.isDataArrayTexture)_e.setTexture2DArray(R,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,R.flipY),q.pixelStorei(37441,R.premultiplyAlpha),q.pixelStorei(3317,R.unpackAlignment);const Re=q.getParameter(3314),We=q.getParameter(32878),Tn=q.getParameter(3316),qn=q.getParameter(3315),Yn=q.getParameter(32877),Wt=V.isCompressedTexture?V.mipmaps[0]:V.image;q.pixelStorei(3314,Wt.width),q.pixelStorei(32878,Wt.height),q.pixelStorei(3316,M.min.x),q.pixelStorei(3315,M.min.y),q.pixelStorei(32877,M.min.z),V.isDataTexture||V.isData3DTexture?q.texSubImage3D(Le,W,F.x,F.y,F.z,ge,Me,Ae,Ee,Fe,Wt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Le,W,F.x,F.y,F.z,ge,Me,Ae,Ee,Wt.data)):q.texSubImage3D(Le,W,F.x,F.y,F.z,ge,Me,Ae,Ee,Fe,Wt),q.pixelStorei(3314,Re),q.pixelStorei(32878,We),q.pixelStorei(3316,Tn),q.pixelStorei(3315,qn),q.pixelStorei(32877,Yn),W===0&&R.generateMipmaps&&q.generateMipmap(Le),de.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?_e.setTextureCube(M,0):M.isData3DTexture?_e.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?_e.setTexture2DArray(M,0):_e.setTexture2D(M,0),de.unbindTexture()},this.resetState=function(){_=0,b=0,S=null,de.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class M0 extends jo{}M0.prototype.isWebGL1Renderer=!0;class S0 extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class w0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ms,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pt=new D;class vn{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}setX(e,t){return this.normalized&&(t=ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ke(t,this.array),n=ke(n,this.array),i=ke(i,this.array),s=ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new vn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Os extends Gt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new D,f=new D,m=[],g=[],p=[],h=[];for(let _=0;_<=n;_++){const b=[],S=_/n;let w=0;_==0&&o==0?w=.5/t:_==n&&l==Math.PI&&(w=-.5/t);for(let y=0;y<=t;y++){const C=y/t;u.x=-e*Math.cos(i+C*s)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(i+C*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),h.push(C+w,1-S),b.push(c++)}d.push(b)}for(let _=0;_<n;_++)for(let b=0;b<t;b++){const S=d[_][b+1],w=d[_][b],y=d[_+1][b],C=d[_+1][b+1];(_!==0||o>0)&&m.push(S,w,C),(_!==n-1||l<Math.PI)&&m.push(w,y,C)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(p,3)),this.setAttribute("uv",new ht(h,2))}static fromJSON(e){return new Os(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class E0 extends Gt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new D,s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const u=l[c],f=u.start,m=u.count;for(let g=f,p=f+m;g<p;g+=3)for(let h=0;h<3;h++){const _=a.getX(g+h),b=a.getX(g+(h+1)%3);i.fromBufferAttribute(o,_),s.fromBufferAttribute(o,b),Za(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const d=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,d),s.fromBufferAttribute(o,u),Za(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ht(t,3))}}}function Za(r,e,t){const n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}class T0 extends Hi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class A0 extends Gt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class xs extends w0{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ka{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ja=new D,ur=new D;class C0{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ja.subVectors(e,this.start),ur.subVectors(this.end,this.start);const n=ur.dot(ur);let s=ur.dot(Ja)/n;return t&&(s=dt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:As}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=As);const Qa=new Mn,dr=new D;class $o extends A0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ht(e,3)),this.setAttribute("uv",new ht(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new xs(t,6,1);return this.setAttribute("instanceStart",new vn(n,3,0)),this.setAttribute("instanceEnd",new vn(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new xs(t,6,1);return this.setAttribute("instanceColorStart",new vn(n,3,0)),this.setAttribute("instanceColorEnd",new vn(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new E0(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Qa.setFromBufferAttribute(t),this.boundingBox.union(Qa))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)dr.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(dr)),dr.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(dr));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}class Zo extends $o{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}re.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Se(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};_t.line={uniforms:Ps.merge([re.common,re.fog,re.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Fs extends yn{constructor(e){super({type:"LineMaterial",uniforms:Ps.clone(_t.line.uniforms),vertexShader:_t.line.vertexShader,fragmentShader:_t.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(t){this.uniforms.diffuse.value=t}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(t){this.uniforms.linewidth.value=t}},dashed:{enumerable:!0,get:function(){return Boolean("USE_DASH"in this.defines)},set(t){Boolean(t)!==Boolean("USE_DASH"in this.defines)&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(t){this.uniforms.dashScale.value=t}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(t){this.uniforms.dashSize.value=t}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(t){this.uniforms.dashOffset.value=t}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(t){this.uniforms.gapSize.value=t}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(t){this.uniforms.resolution.value.copy(t)}},alphaToCoverage:{enumerable:!0,get:function(){return Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)},set:function(t){Boolean(t)!==Boolean("USE_ALPHA_TO_COVERAGE"in this.defines)&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}const eo=new D,to=new D,at=new qe,ot=new qe,Xt=new qe,ss=new D,as=new Ze,ut=new C0,no=new D,hr=new Mn,fr=new Gi,qt=new qe;let jt,ys,Ko,Bn;function io(r,e,t){return qt.set(0,0,-e,1).applyMatrix4(r.projectionMatrix),qt.multiplyScalar(1/qt.w),qt.x=Bn/t.width,qt.y=Bn/t.height,qt.applyMatrix4(r.projectionMatrixInverse),qt.multiplyScalar(1/qt.w),Math.abs(Math.max(qt.x,qt.y))}function L0(r,e){for(let t=0,n=ys.count;t<n;t++){ut.start.fromBufferAttribute(ys,t),ut.end.fromBufferAttribute(Ko,t);const i=new D,s=new D;jt.distanceSqToSegment(ut.start,ut.end,s,i),s.distanceTo(i)<Bn*.5&&e.push({point:s,pointOnLine:i,distance:jt.origin.distanceTo(s),object:r,face:null,faceIndex:t,uv:null,uv2:null})}}function D0(r,e,t){const n=e.projectionMatrix,s=r.material.resolution,o=r.matrixWorld,a=r.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,d=-e.near;jt.at(1,Xt),Xt.w=1,Xt.applyMatrix4(e.matrixWorldInverse),Xt.applyMatrix4(n),Xt.multiplyScalar(1/Xt.w),Xt.x*=s.x/2,Xt.y*=s.y/2,Xt.z=0,ss.copy(Xt),as.multiplyMatrices(e.matrixWorldInverse,o);for(let u=0,f=l.count;u<f;u++){if(at.fromBufferAttribute(l,u),ot.fromBufferAttribute(c,u),at.w=1,ot.w=1,at.applyMatrix4(as),ot.applyMatrix4(as),at.z>d&&ot.z>d)continue;if(at.z>d){const b=at.z-ot.z,S=(at.z-d)/b;at.lerp(ot,S)}else if(ot.z>d){const b=ot.z-at.z,S=(ot.z-d)/b;ot.lerp(at,S)}at.applyMatrix4(n),ot.applyMatrix4(n),at.multiplyScalar(1/at.w),ot.multiplyScalar(1/ot.w),at.x*=s.x/2,at.y*=s.y/2,ot.x*=s.x/2,ot.y*=s.y/2,ut.start.copy(at),ut.start.z=0,ut.end.copy(ot),ut.end.z=0;const g=ut.closestPointToPointParameter(ss,!0);ut.at(g,no);const p=bc.lerp(at.z,ot.z,g),h=p>=-1&&p<=1,_=ss.distanceTo(no)<Bn*.5;if(h&&_){ut.start.fromBufferAttribute(l,u),ut.end.fromBufferAttribute(c,u),ut.start.applyMatrix4(o),ut.end.applyMatrix4(o);const b=new D,S=new D;jt.distanceSqToSegment(ut.start,ut.end,S,b),t.push({point:S,pointOnLine:b,distance:jt.origin.distanceTo(S),object:r,face:null,faceIndex:u,uv:null,uv2:null})}}}class P0 extends Bt{constructor(e=new $o,t=new Fs({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)eo.fromBufferAttribute(t,o),to.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+eo.distanceTo(to);const s=new xs(i,2,1);return e.setAttribute("instanceDistanceStart",new vn(s,1,0)),e.setAttribute("instanceDistanceEnd",new vn(s,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;jt=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Bn=l.linewidth+s,ys=a.attributes.instanceStart,Ko=a.attributes.instanceEnd,a.boundingSphere===null&&a.computeBoundingSphere(),fr.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Bn*.5;else{const u=Math.max(i.near,fr.distanceToPoint(jt.origin));c=io(i,u,l.resolution)}if(fr.radius+=c,jt.intersectsSphere(fr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),hr.copy(a.boundingBox).applyMatrix4(o);let d;if(n)d=Bn*.5;else{const u=Math.max(i.near,hr.distanceToPoint(jt.origin));d=io(i,u,l.resolution)}hr.expandByScalar(d),jt.intersectsBox(hr)!==!1&&(n?L0(this,t):D0(this,i,t))}}class R0 extends P0{constructor(e=new Zo,t=new Fs({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}function ro(r,e){return(r%e+e)%e}function mi(r){return new Se(r.x,r.y)}function os(r){return(r[0].x*r[1].y+r[1].x*r[2].y+r[2].x*r[0].y-r[0].y*r[1].x-r[1].y*r[2].x-r[2].y*r[0].x)/2}class so{constructor(e,t,n,i){Ce(this,"lowX");Ce(this,"lowY");Ce(this,"highX");Ce(this,"highY");t<=i?(this.lowX=e,this.lowY=t,this.highX=n,this.highY=i):(this.lowX=n,this.lowY=i,this.highX=e,this.highY=t)}orientation(e,t){let n=(t-this.lowY)*(this.highX-e)-(e-this.lowX)*(this.highY-t);return n==0?0:n>0?1:2}intersectsWith(e){let t=this.orientation(e.lowX,e.lowY),n=this.orientation(e.highX,e.highY),i=e.orientation(this.lowX,this.lowY),s=e.orientation(this.highX,this.highY);return t!=n&&i!=s}}class I0{constructor(e,t,n=0){Ce(this,"name","polygon");Ce(this,"color",16737095);Ce(this,"lineThickness",.002);Ce(this,"points");Ce(this,"material");Ce(this,"boundingBox",[]);Ce(this,"edgeTable");Ce(this,"mesh",new pi);Ce(this,"lines",null);Ce(this,"corners",new pi);this.points=[];for(let i=0;i<e;i++){let s=t*Math.cos(i*2*Math.PI/e),o=t*Math.sin(i*2*Math.PI/e);this.points.push(new D(s,o,n))}this.material=new Fs({color:this.color,linewidth:this.lineThickness}),this.computeBoundingBox(),this.computeEdgeTable()}generateLines(){const e=new Zo;let t=[];for(let i=0;i<this.points.length;i++)t.push(this.points[i].x),t.push(this.points[i].y),t.push(this.points[i].z);t.push(this.points[0].x),t.push(this.points[0].y),t.push(this.points[0].z),e.setPositions(t);const n=new R0(e,this.material);n.computeLineDistances(),n.scale.set(1,1,1),this.mesh.add(n)}generateCorners(){this.corners.clear();const e=new T0({color:13369344,transparent:!0,opacity:.6}),t=.05,n=20;for(let i=0;i<this.points.length;i++){let s=new Os(t,n,n).translate(this.points[i].x,this.points[i].y,this.points[i].z);s.name="point"+i,this.corners.add(new Bt(s,e))}this.mesh.add(this.corners)}generateMesh(){this.mesh.clear(),this.generateLines(),this.mesh.name=this.name}computeBoundingBox(){let e=1/0,t=-1/0,n=1/0,i=-1/0;for(let s=0;s<this.points.length;s++){let o=this.points[s];e=Math.min(e,o.x),t=Math.max(t,o.x),n=Math.min(n,o.y),i=Math.max(i,o.y)}this.boundingBox[0]=e,this.boundingBox[1]=n,this.boundingBox[2]=t,this.boundingBox[3]=i}computeEdgeTable(){let e=[];for(let n=0;n<this.points.length;n++){const i=mi(this.points[n]),s=mi(this.points[(n+1)%this.points.length]);i.y!=s.y&&(i.y<s.y?e.push([i,s]):e.push([s,i]))}const t=(n,i)=>n[0].y<i[0].y?-1:n[0].y>i[0].y?1:0;e.sort(t),this.edgeTable=e}isInPolygon(e,t){this.computeEdgeTable();const n=this.edgeTable;let i=this.boundingBox[2]-this.boundingBox[0],s=new so(e,t,e+i,t),o=0;for(let a=0;a<n.length;a++){let l=new so(n[a][0].x,n[a][0].y,n[a][1].x,n[a][1].y);s.intersectsWith(l)&&l.highY!=t&&o++}return o%2==1}}const ao={viridis:{interpolate:!0,colors:[[.267,.0049,.3294],[.2685,.0096,.3354],[.2699,.0146,.3414],[.2713,.0199,.3473],[.2726,.0256,.3531],[.2738,.0315,.3589],[.275,.0378,.3645],[.276,.0442,.3702],[.277,.0503,.3757],[.2779,.0563,.3812],[.2788,.0621,.3866],[.2796,.0678,.3919],[.2803,.0734,.3972],[.2809,.0789,.4023],[.2814,.0843,.4074],[.2819,.0897,.4124],[.2823,.095,.4173],[.2827,.1002,.4222],[.2829,.1054,.4269],[.2831,.1106,.4316],[.2832,.1157,.4361],[.2832,.1208,.4406],[.2832,.1258,.445],[.2831,.1309,.4492],[.2829,.1359,.4534],[.2826,.1409,.4575],[.2823,.1459,.4615],[.2819,.1509,.4654],[.2814,.1558,.4692],[.2809,.1608,.4729],[.2803,.1657,.4765],[.2796,.1706,.48],[.2788,.1755,.4834],[.278,.1804,.4867],[.2771,.1852,.4899],[.2762,.1901,.493],[.2752,.1949,.496],[.2741,.1997,.4989],[.273,.2045,.5017],[.2718,.2093,.5044],[.2706,.2141,.5071],[.2693,.2188,.5096],[.268,.2235,.512],[.2666,.2283,.5143],[.2651,.233,.5166],[.2637,.2376,.5188],[.2621,.2423,.5208],[.2606,.2469,.5228],[.259,.2515,.5247],[.2573,.2561,.5266],[.2556,.2607,.5283],[.2539,.2653,.53],[.2522,.2698,.5316],[.2504,.2743,.5331],[.2486,.2788,.5346],[.2468,.2832,.5359],[.245,.2877,.5373],[.2431,.2921,.5385],[.2412,.2965,.5397],[.2393,.3009,.5408],[.2374,.3052,.5419],[.2355,.3095,.5429],[.2336,.3138,.5439],[.2317,.3181,.5448],[.2297,.3224,.5457],[.2278,.3266,.5465],[.2259,.3308,.5473],[.2239,.335,.5481],[.222,.3392,.5488],[.2201,.3433,.5494],[.2181,.3474,.55],[.2162,.3515,.5506],[.2143,.3556,.5512],[.2124,.3597,.5517],[.2105,.3637,.5522],[.2086,.3678,.5527],[.2068,.3718,.5531],[.2049,.3757,.5535],[.2031,.3797,.5539],[.2012,.3837,.5543],[.1994,.3876,.5546],[.1976,.3915,.555],[.1959,.3954,.5553],[.1941,.3993,.5556],[.1924,.4032,.5558],[.1906,.4071,.5561],[.1889,.4109,.5563],[.1872,.4147,.5565],[.1856,.4186,.5568],[.1839,.4224,.5569],[.1823,.4262,.5571],[.1806,.43,.5573],[.179,.4338,.5574],[.1774,.4375,.5576],[.1758,.4413,.5577],[.1743,.445,.5578],[.1727,.4488,.5579],[.1712,.4525,.558],[.1696,.4563,.558],[.1681,.46,.5581],[.1666,.4637,.5581],[.1651,.4674,.5581],[.1636,.4711,.5581],[.1621,.4748,.5581],[.1607,.4785,.5581],[.1592,.4822,.5581],[.1577,.4859,.558],[.1563,.4896,.5579],[.1548,.4933,.5578],[.1534,.497,.5577],[.1519,.5007,.5576],[.1505,.5044,.5574],[.149,.5081,.5572],[.1476,.5117,.557],[.1462,.5154,.5568],[.1448,.5191,.5566],[.1433,.5228,.5563],[.1419,.5265,.556],[.1405,.5301,.5557],[.1391,.5338,.5553],[.1378,.5375,.5549],[.1364,.5412,.5545],[.1351,.5449,.554],[.1337,.5485,.5535],[.1324,.5522,.553],[.1312,.5559,.5525],[.1299,.5596,.5519],[.1287,.5633,.5512],[.1276,.5669,.5506],[.1265,.5706,.5498],[.1254,.5743,.5491],[.1244,.578,.5483],[.1235,.5817,.5474],[.1226,.5854,.5466],[.1218,.5891,.5456],[.1211,.5927,.5446],[.1206,.5964,.5436],[.1201,.6001,.5425],[.1197,.6038,.5414],[.1195,.6075,.5402],[.1194,.6111,.539],[.1195,.6148,.5377],[.1197,.6185,.5363],[.1201,.6222,.5349],[.1206,.6258,.5335],[.1214,.6295,.532],[.1223,.6332,.5304],[.1234,.6368,.5288],[.1248,.6405,.5271],[.1263,.6441,.5253],[.1281,.6477,.5235],[.1301,.6514,.5216],[.1323,.655,.5197],[.1347,.6586,.5176],[.1373,.6623,.5156],[.1402,.6659,.5134],[.1433,.6695,.5112],[.1466,.673,.5089],[.1501,.6766,.5066],[.1539,.6802,.5042],[.1579,.6838,.5017],[.162,.6873,.4991],[.1664,.6909,.4965],[.1709,.6944,.4938],[.1757,.6979,.491],[.1807,.7014,.4882],[.1858,.7049,.4853],[.1911,.7084,.4823],[.1966,.7118,.4792],[.2022,.7153,.4761],[.208,.7187,.4729],[.214,.7221,.4696],[.2201,.7255,.4662],[.2264,.7289,.4628],[.2328,.7322,.4593],[.2394,.7356,.4557],[.2461,.7389,.452],[.2529,.7422,.4483],[.2599,.7455,.4445],[.2669,.7488,.4406],[.2741,.752,.4366],[.2815,.7552,.4326],[.2889,.7584,.4284],[.2965,.7616,.4242],[.3041,.7647,.4199],[.3119,.7678,.4156],[.3198,.7709,.4112],[.3278,.774,.4066],[.3359,.777,.402],[.3441,.78,.3974],[.3524,.783,.3926],[.3607,.786,.3878],[.3692,.7889,.3829],[.3778,.7918,.3779],[.3864,.7946,.3729],[.3952,.7975,.3678],[.404,.8003,.3626],[.4129,.803,.3573],[.4219,.8058,.3519],[.431,.8085,.3465],[.4401,.8111,.341],[.4494,.8138,.3354],[.4587,.8164,.3297],[.4681,.8189,.324],[.4775,.8214,.3182],[.487,.8239,.3123],[.4966,.8264,.3064],[.5063,.8288,.3004],[.516,.8312,.2943],[.5258,.8335,.2881],[.5356,.8358,.2819],[.5455,.838,.2756],[.5555,.8403,.2693],[.5655,.8424,.2629],[.5756,.8446,.2564],[.5857,.8467,.2499],[.5958,.8487,.2433],[.606,.8507,.2367],[.6163,.8527,.2301],[.6266,.8546,.2234],[.6369,.8565,.2166],[.6473,.8584,.2099],[.6576,.8602,.2031],[.6681,.862,.1963],[.6785,.8637,.1895],[.6889,.8654,.1827],[.6994,.8671,.176],[.7099,.8688,.1693],[.7204,.8704,.1626],[.7309,.8719,.156],[.7414,.8734,.1496],[.7519,.875,.1432],[.7624,.8764,.1371],[.7729,.8779,.1311],[.7833,.8793,.1254],[.7938,.8807,.12],[.8042,.882,.115],[.8146,.8834,.1103],[.8249,.8847,.1062],[.8353,.886,.1026],[.8456,.8873,.0997],[.8558,.8886,.0975],[.866,.8899,.096],[.8762,.8911,.0952],[.8863,.8924,.0954],[.8963,.8936,.0963],[.9063,.8949,.0981],[.9162,.8961,.1007],[.9261,.8973,.1041],[.9359,.8986,.1081],[.9456,.8998,.1128],[.9553,.9011,.1181],[.9649,.9023,.1239],[.9744,.9036,.1302],[.9839,.9049,.1369],[.9932,.9062,.1439]]},gray:{interpolate:!0,colors:[[0,0,0],[.0039,.0039,.0039],[.0078,.0078,.0078],[.0118,.0118,.0118],[.0157,.0157,.0157],[.0196,.0196,.0196],[.0235,.0235,.0235],[.0275,.0275,.0275],[.0314,.0314,.0314],[.0353,.0353,.0353],[.0392,.0392,.0392],[.0431,.0431,.0431],[.0471,.0471,.0471],[.051,.051,.051],[.0549,.0549,.0549],[.0588,.0588,.0588],[.0627,.0627,.0627],[.0667,.0667,.0667],[.0706,.0706,.0706],[.0745,.0745,.0745],[.0784,.0784,.0784],[.0824,.0824,.0824],[.0863,.0863,.0863],[.0902,.0902,.0902],[.0941,.0941,.0941],[.098,.098,.098],[.102,.102,.102],[.1059,.1059,.1059],[.1098,.1098,.1098],[.1137,.1137,.1137],[.1176,.1176,.1176],[.1216,.1216,.1216],[.1255,.1255,.1255],[.1294,.1294,.1294],[.1333,.1333,.1333],[.1373,.1373,.1373],[.1412,.1412,.1412],[.1451,.1451,.1451],[.149,.149,.149],[.1529,.1529,.1529],[.1569,.1569,.1569],[.1608,.1608,.1608],[.1647,.1647,.1647],[.1686,.1686,.1686],[.1725,.1725,.1725],[.1765,.1765,.1765],[.1804,.1804,.1804],[.1843,.1843,.1843],[.1882,.1882,.1882],[.1922,.1922,.1922],[.1961,.1961,.1961],[.2,.2,.2],[.2039,.2039,.2039],[.2078,.2078,.2078],[.2118,.2118,.2118],[.2157,.2157,.2157],[.2196,.2196,.2196],[.2235,.2235,.2235],[.2275,.2275,.2275],[.2314,.2314,.2314],[.2353,.2353,.2353],[.2392,.2392,.2392],[.2431,.2431,.2431],[.2471,.2471,.2471],[.251,.251,.251],[.2549,.2549,.2549],[.2588,.2588,.2588],[.2627,.2627,.2627],[.2667,.2667,.2667],[.2706,.2706,.2706],[.2745,.2745,.2745],[.2784,.2784,.2784],[.2824,.2824,.2824],[.2863,.2863,.2863],[.2902,.2902,.2902],[.2941,.2941,.2941],[.298,.298,.298],[.302,.302,.302],[.3059,.3059,.3059],[.3098,.3098,.3098],[.3137,.3137,.3137],[.3176,.3176,.3176],[.3216,.3216,.3216],[.3255,.3255,.3255],[.3294,.3294,.3294],[.3333,.3333,.3333],[.3373,.3373,.3373],[.3412,.3412,.3412],[.3451,.3451,.3451],[.349,.349,.349],[.3529,.3529,.3529],[.3569,.3569,.3569],[.3608,.3608,.3608],[.3647,.3647,.3647],[.3686,.3686,.3686],[.3725,.3725,.3725],[.3765,.3765,.3765],[.3804,.3804,.3804],[.3843,.3843,.3843],[.3882,.3882,.3882],[.3922,.3922,.3922],[.3961,.3961,.3961],[.4,.4,.4],[.4039,.4039,.4039],[.4078,.4078,.4078],[.4118,.4118,.4118],[.4157,.4157,.4157],[.4196,.4196,.4196],[.4235,.4235,.4235],[.4275,.4275,.4275],[.4314,.4314,.4314],[.4353,.4353,.4353],[.4392,.4392,.4392],[.4431,.4431,.4431],[.4471,.4471,.4471],[.451,.451,.451],[.4549,.4549,.4549],[.4588,.4588,.4588],[.4627,.4627,.4627],[.4667,.4667,.4667],[.4706,.4706,.4706],[.4745,.4745,.4745],[.4784,.4784,.4784],[.4824,.4824,.4824],[.4863,.4863,.4863],[.4902,.4902,.4902],[.4941,.4941,.4941],[.498,.498,.498],[.502,.502,.502],[.5059,.5059,.5059],[.5098,.5098,.5098],[.5137,.5137,.5137],[.5176,.5176,.5176],[.5216,.5216,.5216],[.5255,.5255,.5255],[.5294,.5294,.5294],[.5333,.5333,.5333],[.5373,.5373,.5373],[.5412,.5412,.5412],[.5451,.5451,.5451],[.549,.549,.549],[.5529,.5529,.5529],[.5569,.5569,.5569],[.5608,.5608,.5608],[.5647,.5647,.5647],[.5686,.5686,.5686],[.5725,.5725,.5725],[.5765,.5765,.5765],[.5804,.5804,.5804],[.5843,.5843,.5843],[.5882,.5882,.5882],[.5922,.5922,.5922],[.5961,.5961,.5961],[.6,.6,.6],[.6039,.6039,.6039],[.6078,.6078,.6078],[.6118,.6118,.6118],[.6157,.6157,.6157],[.6196,.6196,.6196],[.6235,.6235,.6235],[.6275,.6275,.6275],[.6314,.6314,.6314],[.6353,.6353,.6353],[.6392,.6392,.6392],[.6431,.6431,.6431],[.6471,.6471,.6471],[.651,.651,.651],[.6549,.6549,.6549],[.6588,.6588,.6588],[.6627,.6627,.6627],[.6667,.6667,.6667],[.6706,.6706,.6706],[.6745,.6745,.6745],[.6784,.6784,.6784],[.6824,.6824,.6824],[.6863,.6863,.6863],[.6902,.6902,.6902],[.6941,.6941,.6941],[.698,.698,.698],[.702,.702,.702],[.7059,.7059,.7059],[.7098,.7098,.7098],[.7137,.7137,.7137],[.7176,.7176,.7176],[.7216,.7216,.7216],[.7255,.7255,.7255],[.7294,.7294,.7294],[.7333,.7333,.7333],[.7373,.7373,.7373],[.7412,.7412,.7412],[.7451,.7451,.7451],[.749,.749,.749],[.7529,.7529,.7529],[.7569,.7569,.7569],[.7608,.7608,.7608],[.7647,.7647,.7647],[.7686,.7686,.7686],[.7725,.7725,.7725],[.7765,.7765,.7765],[.7804,.7804,.7804],[.7843,.7843,.7843],[.7882,.7882,.7882],[.7922,.7922,.7922],[.7961,.7961,.7961],[.8,.8,.8],[.8039,.8039,.8039],[.8078,.8078,.8078],[.8118,.8118,.8118],[.8157,.8157,.8157],[.8196,.8196,.8196],[.8235,.8235,.8235],[.8275,.8275,.8275],[.8314,.8314,.8314],[.8353,.8353,.8353],[.8392,.8392,.8392],[.8431,.8431,.8431],[.8471,.8471,.8471],[.851,.851,.851],[.8549,.8549,.8549],[.8588,.8588,.8588],[.8627,.8627,.8627],[.8667,.8667,.8667],[.8706,.8706,.8706],[.8745,.8745,.8745],[.8784,.8784,.8784],[.8824,.8824,.8824],[.8863,.8863,.8863],[.8902,.8902,.8902],[.8941,.8941,.8941],[.898,.898,.898],[.902,.902,.902],[.9059,.9059,.9059],[.9098,.9098,.9098],[.9137,.9137,.9137],[.9176,.9176,.9176],[.9216,.9216,.9216],[.9255,.9255,.9255],[.9294,.9294,.9294],[.9333,.9333,.9333],[.9373,.9373,.9373],[.9412,.9412,.9412],[.9451,.9451,.9451],[.949,.949,.949],[.9529,.9529,.9529],[.9569,.9569,.9569],[.9608,.9608,.9608],[.9647,.9647,.9647],[.9686,.9686,.9686],[.9725,.9725,.9725],[.9765,.9765,.9765],[.9804,.9804,.9804],[.9843,.9843,.9843],[.9882,.9882,.9882],[.9922,.9922,.9922],[.9961,.9961,.9961],[1,1,1]]},hsv:{interpolate:!0,colors:[[1,0,0],[1,.0232,0],[1,.0463,0],[1,.0695,0],[1,.0926,0],[1,.1158,0],[1,.139,0],[1,.1621,0],[1,.1853,0],[1,.2085,0],[1,.2316,0],[1,.2548,0],[1,.2779,0],[1,.3011,0],[1,.3243,0],[1,.3474,0],[1,.3706,0],[1,.3938,0],[1,.4169,0],[1,.4401,0],[1,.4632,0],[1,.4864,0],[1,.5096,0],[1,.5327,0],[1,.5559,0],[1,.579,0],[1,.6022,0],[1,.6254,0],[1,.6485,0],[1,.6717,0],[1,.6949,0],[1,.718,0],[1,.7412,0],[1,.7643,0],[1,.7875,0],[1,.8107,0],[1,.8338,0],[1,.857,0],[1,.8801,0],[1,.9033,0],[1,.9265,0],[.996,.9456,0],[.9882,.961,0],[.9805,.9765,0],[.9728,.9919,0],[.9577,1,0],[.9346,1,0],[.9114,1,0],[.8882,1,0],[.8651,1,0],[.8419,1,0],[.8187,1,0],[.7956,1,0],[.7724,1,0],[.7493,1,0],[.7261,1,0],[.7029,1,0],[.6798,1,0],[.6566,1,0],[.6335,1,0],[.6103,1,0],[.5871,1,0],[.564,1,0],[.5408,1,0],[.5176,1,0],[.4945,1,0],[.4713,1,0],[.4482,1,0],[.425,1,0],[.4018,1,0],[.3787,1,0],[.3555,1,0],[.3324,1,0],[.3092,1,0],[.286,1,0],[.2629,1,0],[.2397,1,0],[.2165,1,0],[.1934,1,0],[.1702,1,0],[.1471,1,0],[.1239,1,0],[.1007,1,0],[.0776,1,0],[.0544,1,0],[.0312,1,0],[.0235,1,.0154],[.0158,1,.0309],[.0081,1,.0463],[4e-4,1,.0618],[0,1,.0846],[0,1,.1077],[0,1,.1309],[0,1,.154],[0,1,.1772],[0,1,.2004],[0,1,.2235],[0,1,.2467],[0,1,.2699],[0,1,.293],[0,1,.3162],[0,1,.3393],[0,1,.3625],[0,1,.3857],[0,1,.4088],[0,1,.432],[0,1,.4551],[0,1,.4783],[0,1,.5015],[0,1,.5246],[0,1,.5478],[0,1,.571],[0,1,.5941],[0,1,.6173],[0,1,.6404],[0,1,.6636],[0,1,.6868],[0,1,.7099],[0,1,.7331],[0,1,.7562],[0,1,.7794],[0,1,.8026],[0,1,.8257],[0,1,.8489],[0,1,.8721],[0,1,.8952],[0,1,.9184],[0,1,.9415],[0,1,.9647],[0,1,.9879],[0,.989,1],[0,.9658,1],[0,.9426,1],[0,.9195,1],[0,.8963,1],[0,.8732,1],[0,.85,1],[0,.8268,1],[0,.8037,1],[0,.7805,1],[0,.7574,1],[0,.7342,1],[0,.711,1],[0,.6879,1],[0,.6647,1],[0,.6415,1],[0,.6184,1],[0,.5952,1],[0,.5721,1],[0,.5489,1],[0,.5257,1],[0,.5026,1],[0,.4794,1],[0,.4563,1],[0,.4331,1],[0,.4099,1],[0,.3868,1],[0,.3636,1],[0,.3404,1],[0,.3173,1],[0,.2941,1],[0,.271,1],[0,.2478,1],[0,.2246,1],[0,.2015,1],[0,.1783,1],[0,.1551,1],[0,.132,1],[0,.1088,1],[0,.0857,1],[0,.0625,1],[.0077,.0471,1],[.0154,.0316,1],[.0232,.0162,1],[.0309,7e-4,1],[.0533,0,1],[.0765,0,1],[.0996,0,1],[.1228,0,1],[.146,0,1],[.1691,0,1],[.1923,0,1],[.2154,0,1],[.2386,0,1],[.2618,0,1],[.2849,0,1],[.3081,0,1],[.3312,0,1],[.3544,0,1],[.3776,0,1],[.4007,0,1],[.4239,0,1],[.4471,0,1],[.4702,0,1],[.4934,0,1],[.5165,0,1],[.5397,0,1],[.5629,0,1],[.586,0,1],[.6092,0,1],[.6324,0,1],[.6555,0,1],[.6787,0,1],[.7018,0,1],[.725,0,1],[.7482,0,1],[.7713,0,1],[.7945,0,1],[.8176,0,1],[.8408,0,1],[.864,0,1],[.8871,0,1],[.9103,0,1],[.9335,0,1],[.9566,0,1],[.9724,0,.9926],[.9801,0,.9772],[.9879,0,.9618],[.9956,0,.9463],[1,0,.9276],[1,0,.9044],[1,0,.8813],[1,0,.8581],[1,0,.8349],[1,0,.8118],[1,0,.7886],[1,0,.7654],[1,0,.7423],[1,0,.7191],[1,0,.696],[1,0,.6728],[1,0,.6496],[1,0,.6265],[1,0,.6033],[1,0,.5801],[1,0,.557],[1,0,.5338],[1,0,.5107],[1,0,.4875],[1,0,.4643],[1,0,.4412],[1,0,.418],[1,0,.3949],[1,0,.3717],[1,0,.3485],[1,0,.3254],[1,0,.3022],[1,0,.279],[1,0,.2559],[1,0,.2327],[1,0,.2096],[1,0,.1864],[1,0,.1632],[1,0,.1401],[1,0,.1169],[1,0,.0938]]},inferno:{interpolate:!0,colors:[[.0015,5e-4,.0139],[.0023,.0013,.0186],[.0033,.0022,.0242],[.0045,.0034,.0309],[.006,.0047,.0386],[.0077,.0061,.0468],[.0096,.0077,.0551],[.0117,.0094,.0635],[.014,.0112,.0719],[.0166,.0131,.0803],[.0194,.0151,.0888],[.0224,.0172,.0973],[.0258,.0193,.1059],[.0294,.0215,.1146],[.0334,.0237,.1234],[.0377,.0259,.1322],[.0423,.0281,.1411],[.0469,.0303,.1502],[.0516,.0325,.1593],[.0564,.0346,.1684],[.0613,.0366,.1776],[.0663,.0385,.187],[.0714,.0403,.1964],[.0766,.0419,.2058],[.082,.0433,.2153],[.0874,.0446,.2248],[.093,.0456,.2344],[.0987,.0464,.2439],[.1046,.047,.2534],[.1105,.0474,.2629],[.1167,.0476,.2723],[.1229,.0475,.2816],[.1293,.0473,.2908],[.1358,.0469,.2998],[.1424,.0462,.3086],[.1491,.0455,.3171],[.1558,.0446,.3253],[.1627,.0436,.3333],[.1696,.0425,.3409],[.1765,.0414,.3481],[.1834,.0403,.355],[.1904,.0393,.3614],[.1973,.0384,.3675],[.2042,.0376,.3732],[.2111,.037,.3786],[.2179,.0366,.3835],[.2248,.0364,.3881],[.2315,.0364,.3924],[.2383,.0366,.3964],[.245,.0371,.4],[.2516,.0377,.4034],[.2582,.0386,.4065],[.2648,.0396,.4093],[.2713,.0409,.412],[.2778,.0424,.4144],[.2843,.0439,.4166],[.2908,.0456,.4186],[.2972,.0475,.4205],[.3036,.0494,.4222],[.3099,.0514,.4237],[.3163,.0535,.4251],[.3226,.0556,.4264],[.3289,.0578,.4275],[.3352,.0601,.4285],[.3415,.0623,.4294],[.3478,.0646,.4302],[.354,.0669,.4309],[.3603,.0692,.4315],[.3665,.0716,.432],[.3728,.0739,.4324],[.379,.0763,.4327],[.3852,.0786,.433],[.3915,.0809,.4331],[.3977,.0833,.4332],[.4039,.0856,.4332],[.4101,.0879,.4331],[.4163,.0902,.4329],[.4225,.0925,.4327],[.4288,.0948,.4324],[.435,.0971,.432],[.4412,.0993,.4316],[.4474,.1016,.4311],[.4537,.1038,.4305],[.4599,.1061,.4298],[.4661,.1083,.4291],[.4723,.1105,.4283],[.4786,.1128,.4275],[.4848,.115,.4265],[.491,.1172,.4256],[.4973,.1194,.4245],[.5035,.1216,.4234],[.5097,.1238,.4222],[.516,.126,.4209],[.5222,.1281,.4195],[.5284,.1303,.4181],[.5347,.1325,.4167],[.5409,.1347,.4151],[.5472,.1369,.4135],[.5534,.1391,.4118],[.5596,.1413,.4101],[.5659,.1436,.4083],[.5721,.1458,.4064],[.5783,.148,.4044],[.5845,.1503,.4024],[.5907,.1526,.4003],[.5969,.1548,.3981],[.6031,.1572,.3959],[.6093,.1595,.3936],[.6155,.1618,.3912],[.6217,.1642,.3888],[.6278,.1666,.3863],[.634,.169,.3837],[.6401,.1714,.3811],[.6463,.1739,.3784],[.6524,.1764,.3756],[.6585,.179,.3727],[.6645,.1815,.3698],[.6706,.1842,.3669],[.6766,.1868,.3638],[.6827,.1895,.3608],[.6887,.1922,.3576],[.6946,.195,.3544],[.7006,.1979,.3511],[.7065,.2007,.3478],[.7124,.2037,.3444],[.7183,.2066,.3409],[.7241,.2097,.3374],[.7299,.2128,.3339],[.7357,.2159,.3302],[.7414,.2191,.3266],[.7471,.2224,.3229],[.7528,.2257,.3191],[.7584,.2291,.3153],[.764,.2326,.3114],[.7696,.2361,.3075],[.7751,.2397,.3035],[.7805,.2433,.2995],[.7859,.2471,.2955],[.7913,.2509,.2914],[.7966,.2547,.2873],[.8019,.2587,.2831],[.8071,.2627,.2789],[.8122,.2668,.2747],[.8173,.271,.2704],[.8224,.2752,.2661],[.8274,.2795,.2618],[.8323,.2839,.2574],[.8372,.2884,.253],[.842,.2929,.2486],[.8467,.2976,.2441],[.8514,.3023,.2396],[.856,.307,.2351],[.8605,.3119,.2306],[.865,.3168,.2261],[.8694,.3218,.2215],[.8737,.3269,.2169],[.878,.3321,.2123],[.8822,.3373,.2076],[.8863,.3426,.203],[.8903,.348,.1983],[.8943,.3534,.1936],[.8982,.3589,.1889],[.902,.3645,.1841],[.9057,.3701,.1794],[.9094,.3759,.1746],[.913,.3816,.1698],[.9165,.3875,.1649],[.9199,.3934,.1601],[.9232,.3994,.1552],[.9265,.4054,.1503],[.9296,.4115,.1454],[.9327,.4176,.1404],[.9357,.4238,.1354],[.9387,.4301,.1304],[.9415,.4364,.1254],[.9443,.4428,.1204],[.947,.4492,.1153],[.9496,.4557,.1102],[.9521,.4622,.105],[.9545,.4687,.0999],[.9569,.4754,.0947],[.9591,.482,.0895],[.9613,.4887,.0843],[.9634,.4955,.0791],[.9654,.5022,.0739],[.9673,.5091,.0687],[.9692,.5159,.0635],[.9709,.5229,.0584],[.9726,.5298,.0533],[.9742,.5368,.0484],[.9757,.5438,.0436],[.9771,.5508,.039],[.9784,.5579,.0349],[.9797,.5651,.0314],[.9808,.5722,.0285],[.9819,.5794,.0262],[.9829,.5866,.0247],[.9838,.5938,.0238],[.9846,.6011,.0236],[.9853,.6084,.0242],[.986,.6158,.0256],[.9865,.6231,.0278],[.987,.6305,.0309],[.9873,.6379,.0349],[.9876,.6453,.0399],[.9878,.6528,.0456],[.9879,.6602,.0518],[.9879,.6677,.0583],[.9879,.6753,.0653],[.9877,.6828,.0725],[.9875,.6904,.08],[.9871,.6979,.0877],[.9867,.7055,.0957],[.9862,.7132,.1039],[.9856,.7208,.1122],[.9849,.7284,.1208],[.9841,.7361,.1295],[.9832,.7438,.1385],[.9822,.7514,.1476],[.9812,.7591,.1569],[.98,.7668,.1664],[.9788,.7745,.176],[.9775,.7823,.1859],[.9761,.79,.196],[.9746,.7977,.2063],[.9731,.8054,.2169],[.9715,.8131,.2277],[.9698,.8208,.2387],[.968,.8285,.25],[.9662,.8362,.2615],[.9644,.8438,.2734],[.9625,.8515,.2855],[.9606,.8591,.298],[.9587,.8666,.3108],[.9568,.8741,.324],[.955,.8816,.3375],[.9532,.8889,.3514],[.9515,.8962,.3656],[.95,.9034,.3803],[.9487,.9105,.3953],[.9476,.9174,.4107],[.9468,.9242,.4264],[.9464,.9308,.4424],[.9464,.9372,.4586],[.9469,.9433,.475],[.9479,.9493,.4914],[.9495,.9551,.5079],[.9517,.9606,.5242],[.9545,.9659,.5404],[.9579,.971,.5563],[.9618,.9759,.5719],[.9662,.9807,.5872],[.9712,.9853,.6022],[.9765,.9898,.6168],[.9823,.9941,.631],[.9884,.9984,.6449]]},jet:{interpolate:!0,colors:[[0,0,.5],[0,0,.5178],[0,0,.5357],[0,0,.5535],[0,0,.5713],[0,0,.5891],[0,0,.607],[0,0,.6248],[0,0,.6426],[0,0,.6604],[0,0,.6783],[0,0,.6961],[0,0,.7139],[0,0,.7317],[0,0,.7496],[0,0,.7674],[0,0,.7852],[0,0,.803],[0,0,.8209],[0,0,.8387],[0,0,.8565],[0,0,.8743],[0,0,.8922],[0,0,.91],[0,0,.9278],[0,0,.9456],[0,0,.9635],[0,0,.9813],[0,0,.9991],[0,0,1],[0,0,1],[0,0,1],[0,.002,1],[0,.0176,1],[0,.0333,1],[0,.049,1],[0,.0647,1],[0,.0804,1],[0,.0961,1],[0,.1118,1],[0,.1275,1],[0,.1431,1],[0,.1588,1],[0,.1745,1],[0,.1902,1],[0,.2059,1],[0,.2216,1],[0,.2373,1],[0,.2529,1],[0,.2686,1],[0,.2843,1],[0,.3,1],[0,.3157,1],[0,.3314,1],[0,.3471,1],[0,.3627,1],[0,.3784,1],[0,.3941,1],[0,.4098,1],[0,.4255,1],[0,.4412,1],[0,.4569,1],[0,.4725,1],[0,.4882,1],[0,.5039,1],[0,.5196,1],[0,.5353,1],[0,.551,1],[0,.5667,1],[0,.5824,1],[0,.598,1],[0,.6137,1],[0,.6294,1],[0,.6451,1],[0,.6608,1],[0,.6765,1],[0,.6922,1],[0,.7078,1],[0,.7235,1],[0,.7392,1],[0,.7549,1],[0,.7706,1],[0,.7863,1],[0,.802,1],[0,.8176,1],[0,.8333,1],[0,.849,1],[0,.8647,.9962],[0,.8804,.9836],[0,.8961,.9709],[.0095,.9118,.9583],[.0221,.9275,.9456],[.0348,.9431,.933],[.0474,.9588,.9203],[.0601,.9745,.9077],[.0727,.9902,.895],[.0854,1,.8824],[.098,1,.8697],[.1107,1,.8571],[.1233,1,.8444],[.136,1,.8318],[.1486,1,.8191],[.1613,1,.8065],[.1739,1,.7938],[.1866,1,.7812],[.1992,1,.7685],[.2119,1,.7559],[.2245,1,.7432],[.2372,1,.7306],[.2498,1,.7179],[.2625,1,.7052],[.2751,1,.6926],[.2878,1,.6799],[.3004,1,.6673],[.3131,1,.6546],[.3257,1,.642],[.3384,1,.6293],[.351,1,.6167],[.3637,1,.604],[.3763,1,.5914],[.389,1,.5787],[.4016,1,.5661],[.4143,1,.5534],[.4269,1,.5408],[.4396,1,.5281],[.4522,1,.5155],[.4649,1,.5028],[.4775,1,.4902],[.4902,1,.4775],[.5028,1,.4649],[.5155,1,.4522],[.5281,1,.4396],[.5408,1,.4269],[.5534,1,.4143],[.5661,1,.4016],[.5787,1,.389],[.5914,1,.3763],[.604,1,.3637],[.6167,1,.351],[.6293,1,.3384],[.642,1,.3257],[.6546,1,.3131],[.6673,1,.3004],[.6799,1,.2878],[.6926,1,.2751],[.7052,1,.2625],[.7179,1,.2498],[.7306,1,.2372],[.7432,1,.2245],[.7559,1,.2119],[.7685,1,.1992],[.7812,1,.1866],[.7938,1,.1739],[.8065,1,.1613],[.8191,1,.1486],[.8318,1,.136],[.8444,1,.1233],[.8571,1,.1107],[.8697,1,.098],[.8824,1,.0854],[.895,1,.0727],[.9077,1,.0601],[.9203,1,.0474],[.933,1,.0348],[.9456,.9884,.0221],[.9583,.9739,.0095],[.9709,.9593,0],[.9836,.9448,0],[.9962,.9303,0],[1,.9158,0],[1,.9012,0],[1,.8867,0],[1,.8722,0],[1,.8577,0],[1,.8431,0],[1,.8286,0],[1,.8141,0],[1,.7996,0],[1,.785,0],[1,.7705,0],[1,.756,0],[1,.7415,0],[1,.7269,0],[1,.7124,0],[1,.6979,0],[1,.6834,0],[1,.6688,0],[1,.6543,0],[1,.6398,0],[1,.6253,0],[1,.6107,0],[1,.5962,0],[1,.5817,0],[1,.5672,0],[1,.5527,0],[1,.5381,0],[1,.5236,0],[1,.5091,0],[1,.4946,0],[1,.48,0],[1,.4655,0],[1,.451,0],[1,.4365,0],[1,.4219,0],[1,.4074,0],[1,.3929,0],[1,.3784,0],[1,.3638,0],[1,.3493,0],[1,.3348,0],[1,.3203,0],[1,.3057,0],[1,.2912,0],[1,.2767,0],[1,.2622,0],[1,.2476,0],[1,.2331,0],[1,.2186,0],[1,.2041,0],[1,.1895,0],[1,.175,0],[1,.1605,0],[1,.146,0],[1,.1314,0],[1,.1169,0],[1,.1024,0],[1,.0879,0],[.9991,.0733,0],[.9813,.0588,0],[.9635,.0443,0],[.9456,.0298,0],[.9278,.0153,0],[.91,7e-4,0],[.8922,0,0],[.8743,0,0],[.8565,0,0],[.8387,0,0],[.8209,0,0],[.803,0,0],[.7852,0,0],[.7674,0,0],[.7496,0,0],[.7317,0,0],[.7139,0,0],[.6961,0,0],[.6783,0,0],[.6604,0,0],[.6426,0,0],[.6248,0,0],[.607,0,0],[.5891,0,0],[.5713,0,0],[.5535,0,0],[.5357,0,0],[.5178,0,0],[.5,0,0]]},terrain:{interpolate:!0,colors:[[.2,.2,.6],[.1948,.2105,.6105],[.1895,.2209,.6209],[.1843,.2314,.6314],[.1791,.2418,.6418],[.1739,.2523,.6523],[.1686,.2627,.6627],[.1634,.2732,.6732],[.1582,.2837,.6837],[.1529,.2941,.6941],[.1477,.3046,.7046],[.1425,.315,.715],[.1373,.3255,.7255],[.132,.3359,.7359],[.1268,.3464,.7464],[.1216,.3569,.7569],[.1163,.3673,.7673],[.1111,.3778,.7778],[.1059,.3882,.7882],[.1007,.3987,.7987],[.0954,.4092,.8092],[.0902,.4196,.8196],[.085,.4301,.8301],[.0797,.4405,.8405],[.0745,.451,.851],[.0693,.4614,.8614],[.0641,.4719,.8719],[.0588,.4824,.8824],[.0536,.4928,.8928],[.0484,.5033,.9033],[.0431,.5137,.9137],[.0379,.5242,.9242],[.0327,.5346,.9346],[.0275,.5451,.9451],[.0222,.5556,.9556],[.017,.566,.966],[.0118,.5765,.9765],[.0065,.5869,.9869],[.0013,.5974,.9974],[0,.6059,.9824],[0,.6137,.9588],[0,.6216,.9353],[0,.6294,.9118],[0,.6373,.8882],[0,.6451,.8647],[0,.6529,.8412],[0,.6608,.8176],[0,.6686,.7941],[0,.6765,.7706],[0,.6843,.7471],[0,.6922,.7235],[0,.7,.7],[0,.7078,.6765],[0,.7157,.6529],[0,.7235,.6294],[0,.7314,.6059],[0,.7392,.5824],[0,.7471,.5588],[0,.7549,.5353],[0,.7627,.5118],[0,.7706,.4882],[0,.7784,.4647],[0,.7863,.4412],[0,.7941,.4176],[.0039,.8008,.4008],[.0196,.8039,.4039],[.0353,.8071,.4071],[.051,.8102,.4102],[.0667,.8133,.4133],[.0824,.8165,.4165],[.098,.8196,.4196],[.1137,.8227,.4227],[.1294,.8259,.4259],[.1451,.829,.429],[.1608,.8322,.4322],[.1765,.8353,.4353],[.1922,.8384,.4384],[.2078,.8416,.4416],[.2235,.8447,.4447],[.2392,.8478,.4478],[.2549,.851,.451],[.2706,.8541,.4541],[.2863,.8573,.4573],[.302,.8604,.4604],[.3176,.8635,.4635],[.3333,.8667,.4667],[.349,.8698,.4698],[.3647,.8729,.4729],[.3804,.8761,.4761],[.3961,.8792,.4792],[.4118,.8824,.4824],[.4275,.8855,.4855],[.4431,.8886,.4886],[.4588,.8918,.4918],[.4745,.8949,.4949],[.4902,.898,.498],[.5059,.9012,.5012],[.5216,.9043,.5043],[.5373,.9075,.5075],[.5529,.9106,.5106],[.5686,.9137,.5137],[.5843,.9169,.5169],[.6,.92,.52],[.6157,.9231,.5231],[.6314,.9263,.5263],[.6471,.9294,.5294],[.6627,.9325,.5325],[.6784,.9357,.5357],[.6941,.9388,.5388],[.7098,.942,.542],[.7255,.9451,.5451],[.7412,.9482,.5482],[.7569,.9514,.5514],[.7725,.9545,.5545],[.7882,.9576,.5576],[.8039,.9608,.5608],[.8196,.9639,.5639],[.8353,.9671,.5671],[.851,.9702,.5702],[.8667,.9733,.5733],[.8824,.9765,.5765],[.898,.9796,.5796],[.9137,.9827,.5827],[.9294,.9859,.5859],[.9451,.989,.589],[.9608,.9922,.5922],[.9765,.9953,.5953],[.9922,.9984,.5984],[.9961,.995,.5979],[.9882,.9849,.5936],[.9804,.9749,.5894],[.9725,.9649,.5852],[.9647,.9548,.5809],[.9569,.9448,.5767],[.949,.9347,.5725],[.9412,.9247,.5682],[.9333,.9147,.564],[.9255,.9046,.5598],[.9176,.8946,.5555],[.9098,.8845,.5513],[.902,.8745,.5471],[.8941,.8645,.5428],[.8863,.8544,.5386],[.8784,.8444,.5344],[.8706,.8344,.5301],[.8627,.8243,.5259],[.8549,.8143,.5216],[.8471,.8042,.5174],[.8392,.7942,.5132],[.8314,.7842,.5089],[.8235,.7741,.5047],[.8157,.7641,.5005],[.8078,.754,.4962],[.8,.744,.492],[.7922,.734,.4878],[.7843,.7239,.4835],[.7765,.7139,.4793],[.7686,.7038,.4751],[.7608,.6938,.4708],[.7529,.6838,.4666],[.7451,.6737,.4624],[.7373,.6637,.4581],[.7294,.6536,.4539],[.7216,.6436,.4496],[.7137,.6336,.4454],[.7059,.6235,.4412],[.698,.6135,.4369],[.6902,.6035,.4327],[.6824,.5934,.4285],[.6745,.5834,.4242],[.6667,.5733,.42],[.6588,.5633,.4158],[.651,.5533,.4115],[.6431,.5432,.4073],[.6353,.5332,.4031],[.6275,.5231,.3988],[.6196,.5131,.3946],[.6118,.5031,.3904],[.6039,.493,.3861],[.5961,.483,.3819],[.5882,.4729,.3776],[.5804,.4629,.3734],[.5725,.4529,.3692],[.5647,.4428,.3649],[.5569,.4328,.3607],[.549,.4227,.3565],[.5412,.4127,.3522],[.5333,.4027,.348],[.5255,.3926,.3438],[.5176,.3826,.3395],[.5098,.3725,.3353],[.502,.3625,.3311],[.5059,.3675,.3379],[.5137,.3776,.3484],[.5216,.3876,.3589],[.5294,.3976,.3694],[.5373,.4077,.3799],[.5451,.4177,.3904],[.5529,.4278,.4009],[.5608,.4378,.4115],[.5686,.4478,.422],[.5765,.4579,.4325],[.5843,.4679,.443],[.5922,.478,.4535],[.6,.488,.464],[.6078,.498,.4745],[.6157,.5081,.485],[.6235,.5181,.4955],[.6314,.5282,.506],[.6392,.5382,.5165],[.6471,.5482,.5271],[.6549,.5583,.5376],[.6627,.5683,.5481],[.6706,.5784,.5586],[.6784,.5884,.5691],[.6863,.5984,.5796],[.6941,.6085,.5901],[.702,.6185,.6006],[.7098,.6285,.6111],[.7176,.6386,.6216],[.7255,.6486,.6322],[.7333,.6587,.6427],[.7412,.6687,.6532],[.749,.6787,.6637],[.7569,.6888,.6742],[.7647,.6988,.6847],[.7725,.7089,.6952],[.7804,.7189,.7057],[.7882,.7289,.7162],[.7961,.739,.7267],[.8039,.749,.7373],[.8118,.7591,.7478],[.8196,.7691,.7583],[.8275,.7791,.7688],[.8353,.7892,.7793],[.8431,.7992,.7898],[.851,.8093,.8003],[.8588,.8193,.8108],[.8667,.8293,.8213],[.8745,.8394,.8318],[.8824,.8494,.8424],[.8902,.8595,.8529],[.898,.8695,.8634],[.9059,.8795,.8739],[.9137,.8896,.8844],[.9216,.8996,.8949],[.9294,.9096,.9054],[.9373,.9197,.9159],[.9451,.9297,.9264],[.9529,.9398,.9369],[.9608,.9498,.9475],[.9686,.9598,.958],[.9765,.9699,.9685],[.9843,.9799,.979],[.9922,.99,.9895],[1,1,1]]}};function O0(r,e,t){t===!0&&(r=1-r);let n=ao[e].colors;return ao[e].interpolate===!0?F0(r,n):N0(r,n)}function F0(r,e){let t=Math.floor(r*(e.length-1)),n=Math.ceil(r*(e.length-1)),i=(e[t][0]+e[n][0])/2,s=(e[t][1]+e[n][1])/2,o=(e[t][2]+e[n][2])/2;return[i,s,o]}function N0(r,e){let t=0;for(;r>(t+1)/(e.length-0);)t++;let n=Math.round(e[t][0]*255),i=Math.round(e[t][1]*255),s=Math.round(e[t][2]*255);return[n,i,s]}class z0 extends Gt{constructor(e=(i,s,o)=>o.set(i,s,Math.cos(i)*Math.sin(s)),t=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],s=[],o=[],a=[],l=1e-5,c=new D,d=new D,u=new D,f=new D,m=new D,g=t+1;for(let p=0;p<=n;p++){const h=p/n;for(let _=0;_<=t;_++){const b=_/t;e(b,h,d),s.push(d.x,d.y,d.z),b-l>=0?(e(b-l,h,u),f.subVectors(d,u)):(e(b+l,h,u),f.subVectors(u,d)),h-l>=0?(e(b,h-l,u),m.subVectors(d,u)):(e(b,h+l,u),m.subVectors(u,d)),c.crossVectors(f,m).normalize(),o.push(c.x,c.y,c.z),a.push(b,h)}}for(let p=0;p<n;p++)for(let h=0;h<t;h++){const _=p*g+h,b=p*g+h+1,S=(p+1)*g+h+1,w=(p+1)*g+h;i.push(_,b,w),i.push(b,S,w)}this.setIndex(i),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(a,2))}}function Jo(r,e){return r**e}function U0(r,e){return Math.log(1+r)}function B0(r,e){return r/(1+r)}function k0(r,e){return r*r/(1+r*r)}class G0{constructor(e,t){Ce(this,"name","interpolation");Ce(this,"params",{c_function:Jo,p:1,slices:200,colormap:"viridis",wireframe:!1});Ce(this,"material");Ce(this,"polygon");Ce(this,"mesh");this.material=e,this.polygon=t}bivariteFunction(e,t,n){const i=mi(t[n]),s=e.distanceTo(i);return this.params.c_function(s,this.params.p)}calculateWeight(e,t){const n=this.polygon.points.length,i=ro(t-1,n),s=ro(t+1,n),o=mi(this.polygon.points[i]),a=mi(this.polygon.points[t]),l=mi(this.polygon.points[s]),c=os([e,o,a]),d=os([e,a,l]),u=os([e,o,l]);return(this.bivariteFunction(e,this.polygon.points,s)*c-this.bivariteFunction(e,this.polygon.points,t)*u+this.bivariteFunction(e,this.polygon.points,i)*d)/(c*d)}interpolate(e,t){const n=new Se(e,t);let i=[],s=0;for(let a=0;a<this.polygon.points.length;a++)i.push(this.calculateWeight(n,a)),s+=i[a];let o=0;for(let a=0;a<this.polygon.points.length;a++){let l=this.polygon.points[a];const c=i[a]/s;o+=l.z*c}return o}generateMesh(){this.material.wireframe=this.params.wireframe,this.polygon.computeBoundingBox();const e=.001,t=this.polygon.boundingBox[0]+e,i=this.polygon.boundingBox[2]-e-t,s=this.polygon.boundingBox[1]+e,a=this.polygon.boundingBox[3]-e-s;let l=(d,u,f)=>{d=t+d*i,u=s+u*a;const m=this.interpolate(d,u);f.set(d,u,m)};const c=new z0(l,this.params.slices,this.params.slices);this.applyColorMap(c),this.mesh=new Bt(c,this.material),this.mesh.name=this.name}applyColorMap(e){const t=e.getAttribute("position"),n=t.itemSize,i=t.count,s=this.polygon.points.map(u=>u.z),o=Math.min.apply(null,s),a=Math.max.apply(null,s);let l=a-o;l==0&&(l=1/0);const c=4;let d=new Float32Array(i*c);for(let u=0;u<i;u++){let f=Math.max(o,Math.min(a,t.array[u*n+2]))-o;if(isNaN(f)){console.error("value at ",u," is NaN");continue}let m=O0(f/l,this.params.colormap,!1);d[u*c]=m[0],d[u*c+1]=m[1],d[u*c+2]=m[2],this.polygon.isInPolygon(t.array[u*n],t.array[u*n+1])?d[u*c+3]=1:d[u*c+3]=0}e.setAttribute("color",new Rt(d,c))}}function V0(r){if(!!r&&!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function gi(r,e){var t=r.__state.conversionName.toString(),n=Math.round(r.r),i=Math.round(r.g),s=Math.round(r.b),o=r.a,a=Math.round(r.h),l=r.s.toFixed(1),c=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var d=r.hex.toString(16);d.length<6;)d="0"+d;return"#"+d}else{if(t==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(t==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+o+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(t==="RGBA_ARRAY")return"["+n+","+i+","+s+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var oo=Array.prototype.forEach,Di=Array.prototype.slice,Y={BREAK:{},extend:function(e){return this.each(Di.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(t[i])||(e[i]=t[i])}.bind(this))},this),e},defaults:function(e){return this.each(Di.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach(function(i){this.isUndefined(e[i])&&(e[i]=t[i])}.bind(this))},this),e},compose:function(){var e=Di.call(arguments);return function(){for(var t=Di.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(!!e){if(oo&&e.forEach&&e.forEach===oo)e.forEach(t,n);else if(e.length===e.length+0){var i=void 0,s=void 0;for(i=0,s=e.length;i<s;i++)if(i in e&&t.call(n,e[i],i)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i=void 0;return function(){var s=this,o=arguments;function a(){i=null,n||e.apply(s,o)}var l=n||!i;clearTimeout(i),i=setTimeout(a,t),l&&e.apply(s,o)}},toArray:function(e){return e.toArray?e.toArray():Di.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},H0=[{litmus:Y.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:gi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:gi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:gi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:gi}}},{litmus:Y.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:Y.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:Y.isObject,conversions:{RGBA_OBJ:{read:function(e){return Y.isNumber(e.r)&&Y.isNumber(e.g)&&Y.isNumber(e.b)&&Y.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return Y.isNumber(e.r)&&Y.isNumber(e.g)&&Y.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return Y.isNumber(e.h)&&Y.isNumber(e.s)&&Y.isNumber(e.v)&&Y.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return Y.isNumber(e.h)&&Y.isNumber(e.s)&&Y.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Pi=void 0,pr=void 0,bs=function(){pr=!1;var e=arguments.length>1?Y.toArray(arguments):arguments[0];return Y.each(H0,function(t){if(t.litmus(e))return Y.each(t.conversions,function(n,i){if(Pi=n.read(e),pr===!1&&Pi!==!1)return pr=Pi,Pi.conversionName=i,Pi.conversion=n,Y.BREAK}),Y.BREAK}),pr},lo=void 0,br={hsv_to_rgb:function(e,t,n){var i=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-s*t),l=n*(1-(1-s)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var i=Math.min(e,t,n),s=Math.max(e,t,n),o=s-i,a=void 0,l=void 0;if(s!==0)l=o/s;else return{h:NaN,s:0,v:0};return e===s?a=(t-n)/o:t===s?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:s/255}},rgb_to_hex:function(e,t,n){var i=this.hex_with_component(0,2,e);return i=this.hex_with_component(i,1,t),i=this.hex_with_component(i,0,n),i},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(lo=t*8)|e&~(255<<lo)}},W0=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Vt=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},Ht=function(){function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),bn=function r(e,t,n){e===null&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(i===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:r(s,t,n)}else{if("value"in i)return i.value;var o=i.get;return o===void 0?void 0:o.call(n)}},Sn=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},wn=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},st=function(){function r(){if(Vt(this,r),this.__state=bs.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Ht(r,[{key:"toString",value:function(){return gi(this)}},{key:"toHexString",value:function(){return gi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Ns(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(st.recalculateRGB(this,e,t),this.__state[e])},set:function(i){this.__state.space!=="RGB"&&(st.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=i}})}function zs(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(st.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(st.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}st.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=br.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")Y.extend(r.__state,br.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};st.recalculateHSV=function(r){var e=br.rgb_to_hsv(r.r,r.g,r.b);Y.extend(r.__state,{s:e.s,v:e.v}),Y.isNaN(e.h)?Y.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};st.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ns(st.prototype,"r",2);Ns(st.prototype,"g",1);Ns(st.prototype,"b",0);zs(st.prototype,"h");zs(st.prototype,"s");zs(st.prototype,"v");Object.defineProperty(st.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(st.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=br.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Xn=function(){function r(e,t){Vt(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Ht(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),X0={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Qo={};Y.each(X0,function(r,e){Y.each(r,function(t){Qo[t]=e})});var q0=/(\d+(\.\d+)?)px/;function Yt(r){if(r==="0"||Y.isUndefined(r))return 0;var e=r.match(q0);return Y.isNull(e)?0:parseFloat(e[1])}var N={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var i=n,s=t;Y.isUndefined(s)&&(s=!0),Y.isUndefined(i)&&(i=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),i&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,i){var s=n||{},o=Qo[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;a.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var d=a.initKeyboardEvent||a.initKeyEvent;Y.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),d(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{a.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}Y.defaults(a,i),e.dispatchEvent(a)},bind:function(e,t,n,i){var s=i||!1;return e.addEventListener?e.addEventListener(t,n,s):e.attachEvent&&e.attachEvent("on"+t,n),N},unbind:function(e,t,n,i){var s=i||!1;return e.removeEventListener?e.removeEventListener(t,n,s):e.detachEvent&&e.detachEvent("on"+t,n),N},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return N},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),i=n.indexOf(t);i!==-1&&(n.splice(i,1),e.className=n.join(" "))}else e.className=void 0;return N},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Yt(t["border-left-width"])+Yt(t["border-right-width"])+Yt(t["padding-left"])+Yt(t["padding-right"])+Yt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Yt(t["border-top-width"])+Yt(t["border-bottom-width"])+Yt(t["padding-top"])+Yt(t["padding-bottom"])+Yt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},el=function(r){Sn(e,r);function e(t,n){Vt(this,e);var i=wn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function o(){s.setValue(!s.__prev)}return N.bind(i.__checkbox,"change",o,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return Ht(e,[{key:"setValue",value:function(n){var i=bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Xn),Y0=function(r){Sn(e,r);function e(t,n,i){Vt(this,e);var s=wn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i,a=s;if(s.__select=document.createElement("select"),Y.isArray(o)){var l={};Y.each(o,function(c){l[c]=c}),o=l}return Y.each(o,function(c,d){var u=document.createElement("option");u.innerHTML=d,u.setAttribute("value",c),a.__select.appendChild(u)}),s.updateDisplay(),N.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),s.domElement.appendChild(s.__select),s}return Ht(e,[{key:"setValue",value:function(n){var i=bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return N.isActive(this.__select)?this:(this.__select.value=this.getValue(),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Xn),j0=function(r){Sn(e,r);function e(t,n){Vt(this,e);var i=wn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),s=i;function o(){s.setValue(s.__input.value)}function a(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),N.bind(i.__input,"keyup",o),N.bind(i.__input,"change",o),N.bind(i.__input,"blur",a),N.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return Ht(e,[{key:"updateDisplay",value:function(){return N.isActive(this.__input)||(this.__input.value=this.getValue()),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Xn);function co(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var tl=function(r){Sn(e,r);function e(t,n,i){Vt(this,e);var s=wn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=i||{};return s.__min=o.min,s.__max=o.max,s.__step=o.step,Y.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=co(s.__impliedStep),s}return Ht(e,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=co(n),this}}]),e}(Xn);function $0(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Mr=function(r){Sn(e,r);function e(t,n,i){Vt(this,e);var s=wn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,i));s.__truncationSuspended=!1;var o=s,a=void 0;function l(){var g=parseFloat(o.__input.value);Y.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function d(){c()}function u(g){var p=a-g.clientY;o.setValue(o.getValue()+p*o.__impliedStep),a=g.clientY}function f(){N.unbind(window,"mousemove",u),N.unbind(window,"mouseup",f),c()}function m(g){N.bind(window,"mousemove",u),N.bind(window,"mouseup",f),a=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),N.bind(s.__input,"change",l),N.bind(s.__input,"blur",d),N.bind(s.__input,"mousedown",m),N.bind(s.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Ht(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():$0(this.getValue(),this.__precision),bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(tl);function uo(r,e,t,n,i){return n+(i-n)*((r-e)/(t-e))}var Ms=function(r){Sn(e,r);function e(t,n,i,s,o){Vt(this,e);var a=wn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:i,max:s,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),N.bind(a.__background,"mousedown",c),N.bind(a.__background,"touchstart",f),N.addClass(a.__background,"slider"),N.addClass(a.__foreground,"slider-fg");function c(p){document.activeElement.blur(),N.bind(window,"mousemove",d),N.bind(window,"mouseup",u),d(p)}function d(p){p.preventDefault();var h=l.__background.getBoundingClientRect();return l.setValue(uo(p.clientX,h.left,h.right,l.__min,l.__max)),!1}function u(){N.unbind(window,"mousemove",d),N.unbind(window,"mouseup",u),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(p){p.touches.length===1&&(N.bind(window,"touchmove",m),N.bind(window,"touchend",g),m(p))}function m(p){var h=p.touches[0].clientX,_=l.__background.getBoundingClientRect();l.setValue(uo(h,_.left,_.right,l.__min,l.__max))}function g(){N.unbind(window,"touchmove",m),N.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return Ht(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",bn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(tl),nl=function(r){Sn(e,r);function e(t,n,i){Vt(this,e);var s=wn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,N.bind(s.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),N.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return Ht(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Xn),Ss=function(r){Sn(e,r);function e(t,n){Vt(this,e);var i=wn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));i.__color=new st(i.getValue()),i.__temp=new st(0);var s=i;i.domElement=document.createElement("div"),N.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",N.bind(i.__input,"keydown",function(p){p.keyCode===13&&u.call(this)}),N.bind(i.__input,"blur",u),N.bind(i.__selector,"mousedown",function(){N.addClass(this,"drag").bind(window,"mouseup",function(){N.removeClass(s.__selector,"drag")})}),N.bind(i.__selector,"touchstart",function(){N.addClass(this,"drag").bind(window,"touchend",function(){N.removeClass(s.__selector,"drag")})});var o=document.createElement("div");Y.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),Y.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),Y.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),Y.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),Y.extend(o.style,{width:"100%",height:"100%",background:"none"}),ho(o,"top","rgba(0,0,0,0)","#000"),Y.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),K0(i.__hue_field),Y.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),N.bind(i.__saturation_field,"mousedown",a),N.bind(i.__saturation_field,"touchstart",a),N.bind(i.__field_knob,"mousedown",a),N.bind(i.__field_knob,"touchstart",a),N.bind(i.__hue_field,"mousedown",l),N.bind(i.__hue_field,"touchstart",l);function a(p){m(p),N.bind(window,"mousemove",m),N.bind(window,"touchmove",m),N.bind(window,"mouseup",c),N.bind(window,"touchend",c)}function l(p){g(p),N.bind(window,"mousemove",g),N.bind(window,"touchmove",g),N.bind(window,"mouseup",d),N.bind(window,"touchend",d)}function c(){N.unbind(window,"mousemove",m),N.unbind(window,"touchmove",m),N.unbind(window,"mouseup",c),N.unbind(window,"touchend",c),f()}function d(){N.unbind(window,"mousemove",g),N.unbind(window,"touchmove",g),N.unbind(window,"mouseup",d),N.unbind(window,"touchend",d),f()}function u(){var p=bs(this.value);p!==!1?(s.__color.__state=p,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function f(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(o),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(p){p.type.indexOf("touch")===-1&&p.preventDefault();var h=s.__saturation_field.getBoundingClientRect(),_=p.touches&&p.touches[0]||p,b=_.clientX,S=_.clientY,w=(b-h.left)/(h.right-h.left),y=1-(S-h.top)/(h.bottom-h.top);return y>1?y=1:y<0&&(y=0),w>1?w=1:w<0&&(w=0),s.__color.v=y,s.__color.s=w,s.setValue(s.__color.toOriginal()),!1}function g(p){p.type.indexOf("touch")===-1&&p.preventDefault();var h=s.__hue_field.getBoundingClientRect(),_=p.touches&&p.touches[0]||p,b=_.clientY,S=1-(b-h.top)/(h.bottom-h.top);return S>1?S=1:S<0&&(S=0),s.__color.h=S*360,s.setValue(s.__color.toOriginal()),!1}return i}return Ht(e,[{key:"updateDisplay",value:function(){var n=bs(this.getValue());if(n!==!1){var i=!1;Y.each(st.COMPONENTS,function(a){if(!Y.isUndefined(n[a])&&!Y.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return i=!0,{}},this),i&&Y.extend(this.__color.__state,n)}Y.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,o=255-s;Y.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,ho(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),Y.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(Xn),Z0=["-moz-","-o-","-webkit-","-ms-",""];function ho(r,e,t,n){r.style.background="",Y.each(Z0,function(i){r.style.cssText+="background: "+i+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function K0(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var J0={load:function(e,t){var n=t||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=e,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(e,t){var n=t||document,i=document.createElement("style");i.type="text/css",i.innerHTML=e;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},Q0=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,ep=function(e,t){var n=e[t];return Y.isArray(arguments[2])||Y.isObject(arguments[2])?new Y0(e,t,arguments[2]):Y.isNumber(n)?Y.isNumber(arguments[2])&&Y.isNumber(arguments[3])?Y.isNumber(arguments[4])?new Ms(e,t,arguments[2],arguments[3],arguments[4]):new Ms(e,t,arguments[2],arguments[3]):Y.isNumber(arguments[4])?new Mr(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Mr(e,t,{min:arguments[2],max:arguments[3]}):Y.isString(n)?new j0(e,t):Y.isFunction(n)?new nl(e,t,""):Y.isBoolean(n)?new el(e,t):null};function tp(r){setTimeout(r,1e3/60)}var np=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||tp,ip=function(){function r(){Vt(this,r),this.backgroundElement=document.createElement("div"),Y.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),N.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),Y.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;N.bind(this.backgroundElement,"click",function(){e.hide()})}return Ht(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),Y.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function i(){t.domElement.style.display="none",t.backgroundElement.style.display="none",N.unbind(t.domElement,"webkitTransitionEnd",i),N.unbind(t.domElement,"transitionend",i),N.unbind(t.domElement,"oTransitionEnd",i)};N.bind(this.domElement,"webkitTransitionEnd",n),N.bind(this.domElement,"transitionend",n),N.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-N.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-N.getHeight(this.domElement)/2+"px"}}]),r}(),rp=V0(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);J0.inject(rp);var fo="dg",po=72,mo=20,ki="Default",Oi=function(){try{return!!window.localStorage}catch{return!1}}(),zi=void 0,go=!0,di=void 0,ls=!1,il=[],Ge=function r(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),N.addClass(this.domElement,fo),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=Y.defaults(n,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),n=Y.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),Y.isUndefined(n.load)?n.load={preset:ki}:n.preset&&(n.load.preset=n.preset),Y.isUndefined(n.parent)&&n.hideable&&il.push(this),n.resizable=Y.isUndefined(n.parent)&&n.resizable,n.autoPlace&&Y.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=Oi&&localStorage.getItem(hi(this,"isLocal"))==="true",s=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,lp(this),t.revert()}},width:{get:function(){return n.width},set:function(f){n.width=f,Ts(t,f)}},name:{get:function(){return n.name},set:function(f){n.name=f,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(f){n.closed=f,n.closed?N.addClass(t.__ul,r.CLASS_CLOSED):N.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(f){Oi&&(i=f,f?N.bind(window,"unload",s):N.unbind(window,"unload",s),localStorage.setItem(hi(t,"isLocal"),f))}}}),Y.isUndefined(n.parent)){if(this.closed=n.closed||!1,N.addClass(this.domElement,r.CLASS_MAIN),N.makeSelectable(this.domElement,!1),Oi&&i){t.useLocalStorage=!0;var a=localStorage.getItem(hi(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,N.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),n.closeOnTop?(N.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(N.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),N.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);N.addClass(l,"controller-name"),o=Us(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};N.addClass(this.__ul,r.CLASS_CLOSED),N.addClass(o,"title"),N.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(Y.isUndefined(n.parent)&&(go&&(di=document.createElement("div"),N.addClass(di,fo),N.addClass(di,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(di),go=!1),di.appendChild(this.domElement),N.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||Ts(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},N.bind(window,"resize",this.__resizeHandler),N.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),N.bind(this.__ul,"transitionend",this.__resizeHandler),N.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&op(this),s=function(){Oi&&localStorage.getItem(hi(t,"isLocal"))==="true"&&localStorage.setItem(hi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function d(){var u=t.getRoot();u.width+=1,Y.defer(function(){u.width-=1})}n.parent||d()};Ge.toggleHide=function(){ls=!ls,Y.each(il,function(r){r.domElement.style.display=ls?"none":""})};Ge.CLASS_AUTO_PLACE="a";Ge.CLASS_AUTO_PLACE_CONTAINER="ac";Ge.CLASS_MAIN="main";Ge.CLASS_CONTROLLER_ROW="cr";Ge.CLASS_TOO_TALL="taller-than-window";Ge.CLASS_CLOSED="closed";Ge.CLASS_CLOSE_BUTTON="close-button";Ge.CLASS_CLOSE_TOP="close-top";Ge.CLASS_CLOSE_BOTTOM="close-bottom";Ge.CLASS_DRAG="drag";Ge.DEFAULT_WIDTH=245;Ge.TEXT_CLOSED="Close Controls";Ge.TEXT_OPEN="Open Controls";Ge._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===po||r.keyCode===po)&&Ge.toggleHide()};N.bind(window,"keydown",Ge._keydownHandler,!1);Y.extend(Ge.prototype,{add:function(e,t){return Ui(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Ui(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;Y.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&di.removeChild(this.domElement);var e=this;Y.each(this.__folders,function(t){e.removeFolder(t)}),N.unbind(window,"keydown",Ge._keydownHandler,!1),_o(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new Ge(t);this.__folders[e]=n;var i=Us(this,n.domElement);return N.addClass(i,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],_o(e);var t=this;Y.each(e.__folders,function(n){e.removeFolder(n)}),Y.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=N.getOffset(e.__ul).top,n=0;Y.each(e.__ul.childNodes,function(i){e.autoPlace&&i===e.__save_row||(n+=N.getHeight(i))}),window.innerHeight-t-mo<n?(N.addClass(e.domElement,Ge.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-mo+"px"):(N.removeClass(e.domElement,Ge.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&Y.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:Y.debounce(function(){this.onResize()},50),remember:function(){if(Y.isUndefined(zi)&&(zi=new ip,zi.domElement.innerHTML=Q0),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;Y.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&ap(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Ts(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=mr(this)),e.folders={},Y.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=mr(this),ws(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ki]=mr(this,!0)),this.load.remembered[e]=mr(this),this.preset=e,Es(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){Y.each(this.__controllers,function(t){this.getRoot().load.remembered?rl(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),Y.each(this.__folders,function(t){t.revert(t)}),e||ws(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&sl(this.__listening)},updateDisplay:function(){Y.each(this.__controllers,function(e){e.updateDisplay()}),Y.each(this.__folders,function(e){e.updateDisplay()})}});function Us(r,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?r.__ul.insertBefore(n,t):r.__ul.appendChild(n),r.onResize(),n}function _o(r){N.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&N.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function ws(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function sp(r,e,t){if(t.__li=e,t.__gui=r,Y.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Ui(r,t.object,t.property,{before:a,factoryArgs:[Y.toArray(arguments)]})}if(Y.isArray(o)||Y.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Ui(r,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Ms){var n=new Mr(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});Y.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var o=t[s],a=n[s];t[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),N.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof Mr){var i=function(o){if(Y.isNumber(t.__min)&&Y.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ui(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=Y.compose(i,t.min),t.max=Y.compose(i,t.max)}else t instanceof el?(N.bind(e,"click",function(){N.fakeEvent(t.__checkbox,"click")}),N.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof nl?(N.bind(e,"click",function(){N.fakeEvent(t.__button,"click")}),N.bind(e,"mouseover",function(){N.addClass(t.__button,"hover")}),N.bind(e,"mouseout",function(){N.removeClass(t.__button,"hover")})):t instanceof Ss&&(N.addClass(e,"color"),t.updateDisplay=Y.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=Y.compose(function(s){return r.getRoot().__preset_select&&t.isModified()&&ws(r.getRoot(),!0),s},t.setValue)}function rl(r,e){var t=r.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var i=t.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},t.__rememberedObjectIndecesToControllers[n]=i),i[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,o=void 0;if(s[r.preset])o=s[r.preset];else if(s[ki])o=s[ki];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function Ui(r,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var i=void 0;if(n.color)i=new Ss(e,t);else{var s=[e,t].concat(n.factoryArgs);i=ep.apply(r,s)}n.before instanceof Xn&&(n.before=n.before.__li),rl(r,i),N.addClass(i.domElement,"c");var o=document.createElement("span");N.addClass(o,"property-name"),o.innerHTML=i.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(i.domElement);var l=Us(r,a,n.before);return N.addClass(l,Ge.CLASS_CONTROLLER_ROW),i instanceof Ss?N.addClass(l,"color"):N.addClass(l,W0(i.getValue())),sp(r,l,i),r.__controllers.push(i),i}function hi(r,e){return document.location.href+"."+e}function Es(r,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,r.__preset_select.appendChild(n),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function vo(r,e){e.style.display=r.useLocalStorage?"block":"none"}function ap(r){var e=r.__save_row=document.createElement("li");N.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),N.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",N.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",N.addClass(n,"button"),N.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",N.addClass(i,"button"),N.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",N.addClass(s,"button"),N.addClass(s,"revert");var o=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?Y.each(r.load.remembered,function(u,f){Es(r,f,f===r.preset)}):Es(r,ki,!1),N.bind(o,"change",function(){for(var u=0;u<r.__preset_select.length;u++)r.__preset_select[u].innerHTML=r.__preset_select[u].value;r.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(s),Oi){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(hi(r,"isLocal"))==="true"&&l.setAttribute("checked","checked"),vo(r,a),N.bind(l,"change",function(){r.useLocalStorage=!r.useLocalStorage,vo(r,a)})}var d=document.getElementById("dg-new-constructor");N.bind(d,"keydown",function(u){u.metaKey&&(u.which===67||u.keyCode===67)&&zi.hide()}),N.bind(t,"click",function(){d.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),zi.show(),d.focus(),d.select()}),N.bind(n,"click",function(){r.save()}),N.bind(i,"click",function(){var u=prompt("Enter a new preset name.");u&&r.saveAs(u)}),N.bind(s,"click",function(){r.revert()})}function op(r){var e=void 0;r.__resize_handle=document.createElement("div"),Y.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),r.width+=e-s.clientX,r.onResize(),e=s.clientX,!1}function n(){N.removeClass(r.__closeButton,Ge.CLASS_DRAG),N.unbind(window,"mousemove",t),N.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),e=s.clientX,N.addClass(r.__closeButton,Ge.CLASS_DRAG),N.bind(window,"mousemove",t),N.bind(window,"mouseup",n),!1}N.bind(r.__resize_handle,"mousedown",i),N.bind(r.__closeButton,"mousedown",i),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function Ts(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function mr(r,e){var t={};return Y.each(r.__rememberedObjects,function(n,i){var s={},o=r.__rememberedObjectIndecesToControllers[i];Y.each(o,function(a,l){s[l]=e?a.initialValue:a.getValue()}),t[i]=s}),t}function lp(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function sl(r){r.length!==0&&np.call(window,function(){sl(r)}),Y.each(r,function(e){e.updateDisplay()})}var cp=Ge;class xo{constructor(e,t){Ce(this,"figure");Ce(this,"scene");this.figure=e,this.scene=t}update(){this.figure.generateMesh();let e=this.scene.getObjectByName(this.figure.name);if(e!=null)this.scene.remove(e);else throw new Error("Object not defined!");this.scene.add(this.figure.mesh)}}class up{constructor(e){Ce(this,"parameters");Ce(this,"model");Ce(this,"gui");this.gui=new cp,this.model=e;let t=this;const n=new xo(e.interpolation,e.scene),i=new xo(e.polygon,this.model.scene);let s;const o=[];let a=0;this.parameters={p:1,c_function:"r^p",colormap:"viridis",wireframe:!1,slices:e.interpolation.params.slices,pointIndex:a,x:this.model.polygon.points[a].x,y:this.model.polygon.points[a].y,z:this.model.polygon.points[a].z,deletePoint:function(){g()},addPoint:function(){p()}},l(),c(),d();function l(){const h=t.model.interpolation.params;let _=t.gui.addFolder("Interpolation");_.add(t.parameters,"c_function",["r^p","log(1+r)","r/(1+r)","r^2/(1+r^2)"]).onFinishChange(function(b){switch(b){case"r^p":h.c_function=Jo;break;case"log(1+r)":h.c_function=U0;break;case"r/(1+r)":h.c_function=B0;break;case"r^2/(1+r^2)":h.c_function=k0;break;default:throw new Error("C function is not recognized")}n.update()}),_.add(t.parameters,"p").min(-2).max(2).step(.5).onFinishChange(function(b){h.p=b,n.update()})}function c(){const h=t.model.interpolation.params;let _=t.gui.addFolder("Shading");_.add(t.parameters,"colormap",["viridis","gray","hsv","inferno","jet","terrain"]).onFinishChange(function(b){h.colormap=b,n.update()}),_.add(t.parameters,"wireframe").onFinishChange(function(b){h.wireframe=b,n.update()}),_.add(t.parameters,"slices").min(10).max(1e3).step(10).onFinishChange(function(b){h.slices=b,n.update()})}function d(){m();let S=t.gui.addFolder("Polygon");s=S.add(t.parameters,"pointIndex",o).onChange(function(w){t.parameters.pointIndex=w,f()}),S.add(t.parameters,"x").min(-10).max(10).step(.1).listen().onChange(function(w){e.polygon.points[t.parameters.pointIndex].x=w,i.update()}).onFinishChange(function(){n.update()}),S.add(t.parameters,"y").min(-10).max(10).step(.1).listen().onChange(function(w){e.polygon.points[t.parameters.pointIndex].y=w,i.update()}).onFinishChange(function(){n.update()}),S.add(t.parameters,"z").min(-10).max(10).step(.1).listen().onChange(function(w){e.polygon.points[t.parameters.pointIndex].z=w,i.update()}).onFinishChange(function(){n.update()}),S.add(t.parameters,"deletePoint").name("Delete point"),S.add(t.parameters,"addPoint").name("add new point")}function u(h,_){m();let b="";for(var S=0;S<_.length;S++){var w="<option value='"+_[S]+"'>"+_[S]+"</option>";b+=w}b!=""&&(h.domElement.children[0].innerHTML=b,h.domElement.children[0].options.selectedIndex=t.parameters.pointIndex)}function f(){t.parameters.x=e.polygon.points[t.parameters.pointIndex].x,t.parameters.y=e.polygon.points[t.parameters.pointIndex].y,t.parameters.z=e.polygon.points[t.parameters.pointIndex].z}function m(){o.length=0;for(let h=0;h<e.polygon.points.length;h++)o.push(h)}function g(){e.polygon.points.length>3?(e.polygon.points.splice(t.parameters.pointIndex,1),t.parameters.pointIndex!=0&&(t.parameters.pointIndex-=1)):alert("Cannot delete last three points for valid polygon"),u(s,o),f(),i.update(),n.update()}function p(){e.polygon.points.push(new D),t.parameters.pointIndex=e.polygon.points.length-1,u(s,o),f(),i.update(),n.update()}}}const ci=new D,yo=new Ze,bo=new Ze,Mo=new D,So=new D;class dp{constructor(e={}){const t=this;let n,i,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),yo.copy(g.matrixWorldInverse),bo.multiplyMatrices(g.projectionMatrix,yo),c(m,m,g),f(m)},this.setSize=function(m,g){n=m,i=g,s=n/2,o=i/2,l.style.width=m+"px",l.style.height=g+"px"};function c(m,g,p){if(m.isCSS2DObject){ci.setFromMatrixPosition(m.matrixWorld),ci.applyMatrix4(bo);const h=m.visible===!0&&ci.z>=-1&&ci.z<=1&&m.layers.test(p.layers)===!0;if(m.element.style.display=h===!0?"":"none",h===!0){m.onBeforeRender(t,g,p);const b=m.element;b.style.transform="translate(-50%,-50%) translate("+(ci.x*s+s)+"px,"+(-ci.y*o+o)+"px)",b.parentNode!==l&&l.appendChild(b),m.onAfterRender(t,g,p)}const _={distanceToCameraSquared:d(p,m)};a.objects.set(m,_)}for(let h=0,_=m.children.length;h<_;h++)c(m.children[h],g,p)}function d(m,g){return Mo.setFromMatrixPosition(m.matrixWorld),So.setFromMatrixPosition(g.matrixWorld),Mo.distanceToSquared(So)}function u(m){const g=[];return m.traverse(function(p){p.isCSS2DObject&&g.push(p)}),g}function f(m){const g=u(m).sort(function(h,_){if(h.renderOrder!==_.renderOrder)return _.renderOrder-h.renderOrder;const b=a.objects.get(h).distanceToCameraSquared,S=a.objects.get(_).distanceToCameraSquared;return b-S}),p=g.length;for(let h=0,_=g.length;h<_;h++)g[h].element.style.zIndex=p-h}}}class hp{constructor(e){Ce(this,"windowWidth");Ce(this,"windowHeight");Ce(this,"model");Ce(this,"camera");Ce(this,"tanFOV");Ce(this,"renderer");Ce(this,"labelRenderer");Ce(this,"gui");this.model=e,this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.camera=new Lt(75,this.windowWidth/this.windowHeight,.001,1e3),this.tanFOV=Math.tan(Math.PI/180*this.camera.fov/2),this.renderer=new jo({canvas:document.getElementById("app")}),this.renderer.setClearColor(2236962,1),this.labelRenderer=new dp,this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0px",document.body.appendChild(this.labelRenderer.domElement),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.windowWidth,this.windowHeight),this.camera.position.set(-2,-3,4),this.camera.up=new D(0,0,1),window.addEventListener("resize",()=>{this.onWindowResize()},!1),this.gui=new up(e)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.fov=360/Math.PI*Math.atan(this.tanFOV*(window.innerHeight/this.windowHeight)),this.camera.updateProjectionMatrix(),this.camera.lookAt(this.model.scene.position),this.renderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.setSize(window.innerWidth,window.innerHeight)}updateView(){this.renderer.render(this.model.scene,this.camera),this.labelRenderer.render(this.model.scene,this.camera)}}const wo={type:"change"},cs={type:"start"},Eo={type:"end"};class fp extends Wn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gn.ROTATE,MIDDLE:gn.DOLLY,RIGHT:gn.PAN},this.touches={ONE:_n.ROTATE,TWO:_n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",wt),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wo),n.update(),s=i.NONE},this.update=function(){const T=new D,P=new Hn().setFromUnitVectors(e.up,new D(0,1,0)),le=P.clone().invert(),ue=new D,ae=new Hn,pe=2*Math.PI;return function(){const De=n.object.position;T.copy(De).sub(n.target),T.applyQuaternion(P),a.setFromVector3(T),n.autoRotate&&s===i.NONE&&A(U()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Pe=n.minAzimuthAngle,Be=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Be)&&(Pe<-Math.PI?Pe+=pe:Pe>Math.PI&&(Pe-=pe),Be<-Math.PI?Be+=pe:Be>Math.PI&&(Be-=pe),Pe<=Be?a.theta=Math.max(Pe,Math.min(Be,a.theta)):a.theta=a.theta>(Pe+Be)/2?Math.max(Pe,a.theta):Math.min(Be,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),T.setFromSpherical(a),T.applyQuaternion(le),De.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),c=1,u||ue.distanceToSquared(n.object.position)>o||8*(1-ae.dot(n.object.quaternion))>o?(n.dispatchEvent(wo),ue.copy(n.object.position),ae.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",G),n.domElement.removeEventListener("pointerdown",Ye),n.domElement.removeEventListener("pointercancel",vt),n.domElement.removeEventListener("wheel",St),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",Ke),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",wt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new Ka,l=new Ka;let c=1;const d=new D;let u=!1;const f=new Se,m=new Se,g=new Se,p=new Se,h=new Se,_=new Se,b=new Se,S=new Se,w=new Se,y=[],C={};function U(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function A(T){l.theta-=T}function z(T){l.phi-=T}const $=function(){const T=new D;return function(le,ue){T.setFromMatrixColumn(ue,0),T.multiplyScalar(-le),d.add(T)}}(),oe=function(){const T=new D;return function(le,ue){n.screenSpacePanning===!0?T.setFromMatrixColumn(ue,1):(T.setFromMatrixColumn(ue,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(le),d.add(T)}}(),k=function(){const T=new D;return function(le,ue){const ae=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;T.copy(pe).sub(n.target);let fe=T.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),$(2*le*fe/ae.clientHeight,n.object.matrix),oe(2*ue*fe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?($(le*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),oe(ue*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(T){n.object.isPerspectiveCamera?c/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(T){n.object.isPerspectiveCamera?c*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(T){f.set(T.clientX,T.clientY)}function J(T){b.set(T.clientX,T.clientY)}function X(T){p.set(T.clientX,T.clientY)}function O(T){m.set(T.clientX,T.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const P=n.domElement;A(2*Math.PI*g.x/P.clientHeight),z(2*Math.PI*g.y/P.clientHeight),f.copy(m),n.update()}function B(T){S.set(T.clientX,T.clientY),w.subVectors(S,b),w.y>0?I(x()):w.y<0&&j(x()),b.copy(S),n.update()}function ne(T){h.set(T.clientX,T.clientY),_.subVectors(h,p).multiplyScalar(n.panSpeed),k(_.x,_.y),p.copy(h),n.update()}function ee(T){T.deltaY<0?j(x()):T.deltaY>0&&I(x()),n.update()}function Q(T){let P=!1;switch(T.code){case n.keys.UP:k(0,n.keyPanSpeed),P=!0;break;case n.keys.BOTTOM:k(0,-n.keyPanSpeed),P=!0;break;case n.keys.LEFT:k(n.keyPanSpeed,0),P=!0;break;case n.keys.RIGHT:k(-n.keyPanSpeed,0),P=!0;break}P&&(T.preventDefault(),n.update())}function he(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const T=.5*(y[0].pageX+y[1].pageX),P=.5*(y[0].pageY+y[1].pageY);f.set(T,P)}}function ye(){if(y.length===1)p.set(y[0].pageX,y[0].pageY);else{const T=.5*(y[0].pageX+y[1].pageX),P=.5*(y[0].pageY+y[1].pageY);p.set(T,P)}}function q(){const T=y[0].pageX-y[1].pageX,P=y[0].pageY-y[1].pageY,le=Math.sqrt(T*T+P*P);b.set(0,le)}function Ie(){n.enableZoom&&q(),n.enablePan&&ye()}function xe(){n.enableZoom&&q(),n.enableRotate&&he()}function be(T){if(y.length==1)m.set(T.pageX,T.pageY);else{const le=ve(T),ue=.5*(T.pageX+le.x),ae=.5*(T.pageY+le.y);m.set(ue,ae)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const P=n.domElement;A(2*Math.PI*g.x/P.clientHeight),z(2*Math.PI*g.y/P.clientHeight),f.copy(m)}function de(T){if(y.length===1)h.set(T.pageX,T.pageY);else{const P=ve(T),le=.5*(T.pageX+P.x),ue=.5*(T.pageY+P.y);h.set(le,ue)}_.subVectors(h,p).multiplyScalar(n.panSpeed),k(_.x,_.y),p.copy(h)}function ze(T){const P=ve(T),le=T.pageX-P.x,ue=T.pageY-P.y,ae=Math.sqrt(le*le+ue*ue);S.set(0,ae),w.set(0,Math.pow(S.y/b.y,n.zoomSpeed)),I(w.y),b.copy(S)}function we(T){n.enableZoom&&ze(T),n.enablePan&&de(T)}function _e(T){n.enableZoom&&ze(T),n.enableRotate&&be(T)}function Ye(T){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",nt),n.domElement.addEventListener("pointerup",Ke)),te(T),T.pointerType==="touch"?E(T):Je(T))}function nt(T){n.enabled!==!1&&(T.pointerType==="touch"?v(T):Ue(T))}function Ke(T){ie(T),y.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",nt),n.domElement.removeEventListener("pointerup",Ke)),n.dispatchEvent(Eo),s=i.NONE}function vt(T){ie(T)}function Je(T){let P;switch(T.button){case 0:P=n.mouseButtons.LEFT;break;case 1:P=n.mouseButtons.MIDDLE;break;case 2:P=n.mouseButtons.RIGHT;break;default:P=-1}switch(P){case gn.DOLLY:if(n.enableZoom===!1)return;J(T),s=i.DOLLY;break;case gn.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;X(T),s=i.PAN}else{if(n.enableRotate===!1)return;Z(T),s=i.ROTATE}break;case gn.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;Z(T),s=i.ROTATE}else{if(n.enablePan===!1)return;X(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(cs)}function Ue(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;O(T);break;case i.DOLLY:if(n.enableZoom===!1)return;B(T);break;case i.PAN:if(n.enablePan===!1)return;ne(T);break}}function St(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(cs),ee(T),n.dispatchEvent(Eo))}function wt(T){n.enabled===!1||n.enablePan===!1||Q(T)}function E(T){switch(se(T),y.length){case 1:switch(n.touches.ONE){case _n.ROTATE:if(n.enableRotate===!1)return;he(),s=i.TOUCH_ROTATE;break;case _n.PAN:if(n.enablePan===!1)return;ye(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case _n.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ie(),s=i.TOUCH_DOLLY_PAN;break;case _n.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(cs)}function v(T){switch(se(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(T),n.update();break;default:s=i.NONE}}function G(T){n.enabled!==!1&&T.preventDefault()}function te(T){y.push(T)}function ie(T){delete C[T.pointerId];for(let P=0;P<y.length;P++)if(y[P].pointerId==T.pointerId){y.splice(P,1);return}}function se(T){let P=C[T.pointerId];P===void 0&&(P=new Se,C[T.pointerId]=P),P.set(T.pageX,T.pageY)}function ve(T){const P=T.pointerId===y[0].pointerId?y[1]:y[0];return C[P.pointerId]}n.domElement.addEventListener("contextmenu",G),n.domElement.addEventListener("pointerdown",Ye),n.domElement.addEventListener("pointercancel",vt),n.domElement.addEventListener("wheel",St,{passive:!1}),this.update()}}class pp extends fp{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=gn.PAN,this.mouseButtons.RIGHT=gn.ROTATE,this.touches.ONE=_n.PAN,this.touches.TWO=_n.DOLLY_ROTATE}}class mp{constructor(){Ce(this,"scene");Ce(this,"view");Ce(this,"controls");Ce(this,"polygon");Ce(this,"interpolation");this.scene=new S0,this.polygon=new I0(6,3),this.polygon.points[0].z=1,this.polygon.generateMesh(),this.scene.add(this.polygon.mesh),this.interpolation=new G0(new Ds({side:rn,vertexColors:!0,transparent:!0}),this.polygon),this.interpolation.generateMesh(),this.scene.add(this.interpolation.mesh),this.view=new hp(this),this.controls=new pp(this.view.camera,this.view.labelRenderer.domElement)}animate(){requestAnimationFrame(()=>{this.animate()}),this.controls.update(),this.view.updateView()}run(){this.animate()}}let gp=new mp;gp.run();
