(()=>{var na="180";var fu=0,vc=1,pu=2;var yc=1,ia=2,Nn=3,jn=0,Be=1,Ye=2,ei=0,Jn=1,Ls=2,_c=3,xc=4,mu=5,yi=100,gu=101,bu=102,vu=103,yu=104,_u=200,xu=201,Su=202,Mu=203,Io=204,Po=205,wu=206,Eu=207,Tu=208,Au=209,Cu=210,Ru=211,Iu=212,Pu=213,Lu=214,sa=0,ra=1,oa=2,ki=3,aa=4,la=5,ca=6,ha=7,ua=0,Fu=1,Nu=2,ni=0,Du=1,Bu=2,Uu=3,Ou=4,zu=5,ku=6,da=7;var Sc=300,qi=301,Xi=302,fa=303,pa=304,Ur=306,_s=1e3,vi=1001,Lo=1002,Xe=1003,Vu=1004;var Or=1005;var yn=1006,ma=1007;var wi=1008;var wn=1009,Mc=1010,wc=1011,Fs=1012,ga=1013,Ei=1014,En=1015,Ns=1016,ba=1017,va=1018,Ds=1020,Ec=35902,Tc=35899,Ac=1021,Cc=1022,hn=1023,xs=1026,Bs=1027,ya=1028,_a=1029,Rc=1030,xa=1031;var Sa=1033,zr=33776,kr=33777,Vr=33778,Hr=33779,Ma=35840,wa=35841,Ea=35842,Ta=35843,Aa=36196,Ca=37492,Ra=37496,Ia=37808,Pa=37809,La=37810,Fa=37811,Na=37812,Da=37813,Ba=37814,Ua=37815,Oa=37816,za=37817,ka=37818,Va=37819,Ha=37820,Ga=37821,Wa=36492,qa=36494,Xa=36495,Ya=36283,$a=36284,Za=36285,ja=36286;var dr=2300,Fo=2301,Ro=2302,cc=2400,hc=2401,uc=2402;var Hu=3200,Gu=3201;var Ja=0,Wu=1,ii="",_e="srgb",Vi="srgb-linear",fr="linear",re="srgb";var zi=7680;var dc=519,qu=512,Xu=513,Yu=514,Ic=515,$u=516,Zu=517,ju=518,Ju=519,No=35044;var Pc="300 es",vn=2e3,pr=2001;var Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,hr=Math.PI/180,Ss=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function Lc(i,t){return(i%t+t)%t}function Ff(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Nf(i,t,e){return i!==t?(e-i)/(t-i):0}function ur(i,t,e){return(1-e)*i+e*t}function Df(i,t,e,n){return ur(i,t,1-Math.exp(-e*n))}function Bf(i,t=1){return t-Math.abs(Lc(i,t*2)-t)}function Uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Of(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kf(i,t){return i+Math.random()*(t-i)}function Vf(i){return i*(.5-Math.random())}function Hf(i){i!==void 0&&(Oh=i);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gf(i){return i*hr}function Wf(i){return i*Ss}function qf(i){return(i&i-1)===0&&i!==0}function Xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $f(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var si={DEG2RAD:hr,RAD2DEG:Ss,generateUUID:$n,clamp:qt,euclideanModulo:Lc,mapLinear:Ff,inverseLerp:Nf,lerp:ur,damp:Df,pingpong:Bf,smoothstep:Uf,smootherstep:Of,randInt:zf,randFloat:kf,randFloatSpread:Vf,seededRandom:Hf,degToRad:Gf,radToDeg:Wf,isPowerOfTwo:qf,ceilPowerOfTwo:Xf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:$f,normalize:ie,denormalize:bn},Tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],b=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=b;return}if(d!==b||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*b,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let T=Math.sqrt(_),E=Math.atan2(T,p*v);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}let y=a*v;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+b*y,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=T,c*=T,h*=T,d*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zl.copy(this).projectOnVector(t),this.sub(zl)}reflect(t){return this.sub(zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zl=new N,zh=new _n,kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],v=s[1],_=s[4],y=s[7],T=s[2],E=s[5],C=s[8];return r[0]=o*b+a*v+l*T,r[3]=o*m+a*_+l*E,r[6]=o*p+a*y+l*C,r[1]=c*b+h*v+d*T,r[4]=c*m+h*_+d*E,r[7]=c*p+h*y+d*C,r[2]=u*b+f*v+g*T,r[5]=u*m+f*_+g*E,r[8]=u*p+f*y+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=d*b,t[1]=(s*c-h*n)*b,t[2]=(a*n-s*o)*b,t[3]=u*b,t[4]=(h*e-s*l)*b,t[5]=(s*r-a*e)*b,t[6]=f*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kl.makeScale(t,e)),this}rotate(t){return this.premultiply(kl.makeRotation(-t)),this}translate(t,e){return this.premultiply(kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kl=new kt;function Fc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ku(){let i=mr("canvas");return i.style.display="block",i}var kh={};function Ms(i){i in kh||(kh[i]=!0,console.warn(i))}function Qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vh=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zf(){let i={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ms("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vi]:{primaries:t,whitePoint:n,transfer:fr,toXYZ:Vh,fromXYZ:Hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_e},outputColorSpaceConfig:{drawingBufferColorSpace:_e}},[_e]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Vh,fromXYZ:Hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_e}}}),i}var jt=Zf();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ns,Do=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ns===void 0&&(ns=mr("canvas")),ns.width=t.width,ns.height=t.height;let s=ns.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ns}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jf=0,ws=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vl(s[o].image)):r.push(Vl(s[o]))}else r=Vl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Do.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jf=0,Hl=new N,Ee=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=vi,s=vi,r=yn,o=wi,a=hn,l=wn,c=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=$n(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Sc;Ee.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(f+1)/2,T=(p+1)/2,E=(h+u)/4,C=(d+b)/4,I=(g+m)/4;return _>y&&_>T?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=C/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=I/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-b)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bo=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ee(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Bo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},gr=class extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uo=class extends Ee{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),ro.subVectors(this.max,tr),is.subVectors(t.a,tr),ss.subVectors(t.b,tr),rs.subVectors(t.c,tr),di.subVectors(ss,is),fi.subVectors(rs,ss),Di.subVectors(is,rs);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Di.z,Di.y,di.z,0,-di.x,fi.z,0,-fi.x,Di.z,0,-Di.x,-di.y,di.x,0,-fi.y,fi.x,0,-Di.y,Di.x,0];return!Gl(e,is,ss,rs,ro)||(e=[1,0,0,0,1,0,0,0,1],!Gl(e,is,ss,rs,ro))?!1:(oo.crossVectors(di,fi),e=[oo.x,oo.y,oo.z],Gl(e,is,ss,rs,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Hn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,so=new Pn,is=new N,ss=new N,rs=new N,di=new N,fi=new N,Di=new N,tr=new N,ro=new N,oo=new N,Bi=new N;function Gl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bi.fromArray(i,r);let a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Kf=new Pn,er=new N,Wl=new N,Qn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);let e=er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Wl)),this.expandByPoint(er.copy(t.center).sub(Wl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gn=new N,ql=new N,ao=new N,pi=new N,Xl=new N,lo=new N,Yl=new N,Es=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ql.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(ql);let r=t.distanceTo(e)*.5,o=-this.direction.dot(ao),a=pi.dot(this.direction),l=-pi.dot(ao),c=pi.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let b=1/h;d*=b,u*=b,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ql).addScaledVector(ao,u),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){Xl.subVectors(e,t),lo.subVectors(n,t),Yl.crossVectors(Xl,lo);let o=this.direction.dot(Yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let l=a*this.direction.dot(lo.crossVectors(pi,lo));if(l<0)return null;let c=a*this.direction.dot(Xl.cross(pi));if(c<0||l+c>o)return null;let h=-a*pi.dot(Yl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,b,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,b,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,b=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-b*c,e[9]=-a*l,e[2]=b-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,b=c*d;e[0]=u+b*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=b+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,b=c*d;e[0]=u-b*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=b-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,b=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+b,e[1]=l*d,e[5]=b*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,b=a*c;e[0]=l*h,e[4]=b-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-b*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,b=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+b,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=b*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qf,t,tp)}lookAt(t,e,n){let s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),mi.crossVectors(n,Je),mi.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),mi.crossVectors(n,Je)),mi.normalize(),co.crossVectors(Je,mi),s[0]=mi.x,s[4]=co.x,s[8]=Je.x,s[1]=mi.y,s[5]=co.y,s[9]=Je.y,s[2]=mi.z,s[6]=co.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],T=n[15],E=s[0],C=s[4],I=s[8],M=s[12],x=s[1],P=s[5],B=s[9],L=s[13],U=s[2],z=s[6],D=s[10],J=s[14],H=s[3],j=s[7],at=s[11],ft=s[15];return r[0]=o*E+a*x+l*U+c*H,r[4]=o*C+a*P+l*z+c*j,r[8]=o*I+a*B+l*D+c*at,r[12]=o*M+a*L+l*J+c*ft,r[1]=h*E+d*x+u*U+f*H,r[5]=h*C+d*P+u*z+f*j,r[9]=h*I+d*B+u*D+f*at,r[13]=h*M+d*L+u*J+f*ft,r[2]=g*E+b*x+m*U+p*H,r[6]=g*C+b*P+m*z+p*j,r[10]=g*I+b*B+m*D+p*at,r[14]=g*M+b*L+m*J+p*ft,r[3]=v*E+_*x+y*U+T*H,r[7]=v*C+_*P+y*z+T*j,r[11]=v*I+_*B+y*D+T*at,r[15]=v*M+_*L+y*J+T*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],b=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*a*u+n*c*u+s*a*f-n*l*f)+b*(+e*l*f-e*c*u+r*o*u-s*o*f+s*c*h-r*l*h)+m*(+e*c*d-e*a*f-r*o*d+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],b=t[13],m=t[14],p=t[15],v=d*m*c-b*u*c+b*l*f-a*m*f-d*l*p+a*u*p,_=g*u*c-h*m*c-g*l*f+o*m*f+h*l*p-o*u*p,y=h*b*c-g*d*c+g*a*f-o*b*f-h*a*p+o*d*p,T=g*d*l-h*b*l-g*a*u+o*b*u+h*a*m-o*d*m,E=e*v+n*_+s*y+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=v*C,t[1]=(b*u*r-d*m*r-b*s*f+n*m*f+d*s*p-n*u*p)*C,t[2]=(a*m*r-b*l*r+b*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(d*l*r-a*u*r-d*s*c+n*u*c+a*s*f-n*l*f)*C,t[4]=_*C,t[5]=(h*m*r-g*u*r+g*s*f-e*m*f-h*s*p+e*u*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*f+e*l*f)*C,t[8]=y*C,t[9]=(g*d*r-h*b*r-g*n*f+e*b*f+h*n*p-e*d*p)*C,t[10]=(o*b*r-g*a*r+g*n*c-e*b*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*f-e*a*f)*C,t[12]=T*C,t[13]=(h*b*s-g*d*s+g*n*u-e*b*u-h*n*m+e*d*m)*C,t[14]=(g*a*s-o*b*s-g*n*l+e*b*l+o*n*m-e*a*m)*C,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,b=o*h,m=o*d,p=a*d,v=l*c,_=l*h,y=l*d,T=n.x,E=n.y,C=n.z;return s[0]=(1-(b+p))*T,s[1]=(f+y)*T,s[2]=(g-_)*T,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+_)*C,s[9]=(m-v)*C,s[10]=(1-(u+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),a=os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);let c=1/r,h=1/o,d=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,b;if(l)g=r/(o-r),b=o*r/(o-r);else if(a===vn)g=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===pr)g=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,b;if(l)g=1/(o-r),b=o/(o-r);else if(a===vn)g=-2/(o-r),b=-(o+r)/(o-r);else if(a===pr)g=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},os=new N,mn=new ae,Qf=new N(0,0,0),tp=new N(1,1,1),mi=new N,co=new N,Je=new N,Gh=new ae,Wh=new _n,an=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ep=0,qh=new N,as=new _n,Wn=new ae,ho=new N,nr=new N,np=new N,ip=new _n,Xh=new N(1,0,0),Yh=new N(0,1,0),$h=new N(0,0,1),Zh={type:"added"},sp={type:"removed"},ls={type:"childadded",child:null},$l={type:"childremoved",child:null},we=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new an,n=new _n,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(Xh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(nr,ho,this.up):Wn.lookAt(ho,nr,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Wn),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zh),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sp),$l.child=t,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zh),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,np),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};we.DEFAULT_UP=new N(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new N,qn=new N,Zl=new N,Xn=new N,cs=new N,hs=new N,jh=new N,jl=new N,Jl=new N,Kl=new N,Ql=new se,tc=new se,ec=new se,Yn=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),qn.subVectors(n,e),Zl.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(qn),l=gn.dot(Zl),c=qn.dot(qn),h=qn.dot(Zl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ql.setScalar(0),tc.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,n),ec.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),qn.subVectors(t,e),gn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),gn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;cs.subVectors(s,n),hs.subVectors(r,n),jl.subVectors(t,n);let l=cs.dot(jl),c=hs.dot(jl);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,s);let h=cs.dot(Jl),d=hs.dot(Jl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(cs,o);Kl.subVectors(t,r);let f=cs.dot(Kl),g=hs.dot(Kl);if(g>=0&&f<=g)return e.copy(r);let b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(hs,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return jh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(jh,a);let p=1/(m+b+u);return o=b*p,a=u*p,e.copy(n).addScaledVector(cs,o).addScaledVector(hs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function nc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Lc(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=nc(o,r,t+1/3),this.g=nc(o,r,t),this.b=nc(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=_e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_e){let n=td[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_e){return jt.workingToColorSpace(ke.copy(this),t),Math.round(qt(ke.r*255,0,255))*65536+Math.round(qt(ke.g*255,0,255))*256+Math.round(qt(ke.b*255,0,255))}getHexString(t=_e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=_e){jt.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==_e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(uo);let n=ur(gi.h,uo.h,e),s=ur(gi.s,uo.s,e),r=ur(gi.l,uo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Ut;Ut.NAMES=td;var rp=0,ln=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=Jn,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Po,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},cn=class extends ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new N,fo=new Tt,op=0,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==No&&(t.usage=this.usage),t}};var br=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},ap=0,rn=new ae,ic=new we,us=new N,Ke=new Pn,ir=new Pn,Le=new N,Te=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?vr:br)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Ke.min,ir.min),Ke.expandByPoint(Le),Le.addVectors(Ke.max,ir.max),Ke.expandByPoint(Le)):(Ke.expandByPoint(ir.min),Ke.expandByPoint(ir.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(t,c),Le.add(us)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new N,l[I]=new N;let c=new N,h=new N,d=new N,u=new Tt,f=new Tt,g=new Tt,b=new N,m=new N;function p(I,M,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,I),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(b),a[M].add(b),a[x].add(b),l[I].add(m),l[M].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let I=0,M=v.length;I<M;++I){let x=v[I],P=x.start,B=x.count;for(let L=P,U=P+B;L<U;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new N,y=new N,T=new N,E=new N;function C(I){T.fromBufferAttribute(s,I),E.copy(T);let M=a[I];_.copy(M),_.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(E,M);let P=y.dot(l[I])<0?-1:1;o.setXYZW(I,_.x,_.y,_.z,P)}for(let I=0,M=v.length;I<M;++I){let x=v[I],P=x.start,B=x.count;for(let L=P,U=P+B;L<U;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?f=l[b]*a.data.stride+a.offset:f=l[b]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Ne(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jh=new ae,Ui=new Es,po=new Qn,Kh=new N,mo=new N,go=new N,bo=new N,sc=new N,vo=new N,Qh=new N,yo=new N,Dt=class extends we{constructor(t=new Te,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(sc.fromBufferAttribute(d,t),o?vo.addScaledVector(sc,h):vo.addScaledVector(sc.sub(e),h))}e.add(vo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(po.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(po,Kh)===null||Ui.origin.distanceToSquared(Kh)>(t.far-t.near)**2))&&(Jh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Jh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=_;y<T;y+=3){let E=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);s=_o(this,p,t,n,c,h,d,E,C,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(a.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);s=_o(this,o,t,n,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=_;y<T;y+=3){let E=y,C=y+1,I=y+2;s=_o(this,p,t,n,c,h,d,E,C,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){let v=m,_=m+1,y=m+2;s=_o(this,o,t,n,c,h,d,v,_,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function lp(i,t,e,n,s,r,o,a){let l;if(t.side===Be?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===jn,a),l===null)return null;yo.copy(a),yo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(yo);return c<e.near||c>e.far?null:{distance:c,point:yo.clone(),object:i}}function _o(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,mo),i.getVertexPosition(l,go),i.getVertexPosition(c,bo);let h=lp(i,t,e,n,mo,go,bo,Qh);if(h){let d=new N;Yn.getBarycoord(Qh,mo,go,bo,d),s&&(h.uv=Yn.getInterpolatedAttribute(s,a,l,c,d,new Tt)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,a,l,c,d,new Tt)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,c,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new N,materialIndex:0};Yn.getNormal(mo,go,bo,u.normal),h.face=u,h.barycoord=d}return h}var Qe=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(d,2));function g(b,m,p,v,_,y,T,E,C,I,M){let x=y/C,P=T/I,B=y/2,L=T/2,U=E/2,z=C+1,D=I+1,J=0,H=0,j=new N;for(let at=0;at<D;at++){let ft=at*P-L;for(let rt=0;rt<z;rt++){let Zt=rt*x-B;j[b]=Zt*v,j[m]=ft*_,j[p]=U,c.push(j.x,j.y,j.z),j[b]=0,j[m]=0,j[p]=E>0?1:-1,h.push(j.x,j.y,j.z),d.push(rt/C),d.push(1-at/I),J+=1}}for(let at=0;at<I;at++)for(let ft=0;ft<C;ft++){let rt=u+ft+z*at,Zt=u+ft+z*(at+1),ne=u+(ft+1)+z*(at+1),Yt=u+(ft+1)+z*at;l.push(rt,Zt,Yt),l.push(Zt,ne,Yt),H+=6}a.addGroup(f,H,M),f+=H,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let s in n)t[s]=n[s]}return t}function cp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var ed={clone:Yi,merge:Ve},hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},yr=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new N,tu=new Tt,eu=new Tt,De=class extends yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,tu,eu),e.subVectors(eu,tu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ds=-90,fs=1,Oo=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(ds,fs,t,e);s.layers=this.layers,this.add(s);let r=new De(ds,fs,t,e);r.layers=this.layers,this.add(r);let o=new De(ds,fs,t,e);o.layers=this.layers,this.add(o);let a=new De(ds,fs,t,e);a.layers=this.layers,this.add(a);let l=new De(ds,fs,t,e);l.layers=this.layers,this.add(l);let c=new De(ds,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_r=class extends Ee{constructor(t=[],e=qi,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},zo=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _r(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:ei});r.uniforms.tEquirect.value=e;let o=new Dt(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=yn),new Oo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Fe=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},dp={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Hi=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ko=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},We=new N,xr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),s=ie(s,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ti=class extends ln{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,sr=new N,ms=new N,gs=new N,bs=new Tt,rr=new Tt,nd=new ae,xo=new N,or=new N,So=new N,nu=new Tt,rc=new Tt,iu=new Tt,_i=class extends we{constructor(t=new ti){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ko(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new xr(n,3,0,!1)),ps.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new Tt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),nd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Mo(xo.set(-.5,-.5,0),gs,o,ms,s,r),Mo(or.set(.5,-.5,0),gs,o,ms,s,r),Mo(So.set(.5,.5,0),gs,o,ms,s,r),nu.set(0,0),rc.set(1,0),iu.set(1,1);let a=t.ray.intersectTriangle(xo,or,So,!1,sr);if(a===null&&(Mo(or.set(-.5,.5,0),gs,o,ms,s,r),rc.set(0,1),a=t.ray.intersectTriangle(xo,So,or,!1,sr),a===null))return;let l=t.ray.origin.distanceTo(sr);l<t.near||l>t.far||e.push({distance:l,point:sr.clone(),uv:Yn.getInterpolation(sr,xo,or,So,nu,rc,iu,new Tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Mo(i,t,e,n,s,r){bs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(rr.x=r*bs.x-s*bs.y,rr.y=s*bs.x+r*bs.y):rr.copy(bs),i.copy(t),i.x+=rr.x,i.y+=rr.y,i.applyMatrix4(nd)}var Vo=class extends Ee{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Xe,h=Xe,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new ae,su=new ae,wo=[],ru=new Pn,fp=new ae,ar=new Dt,lr=new Qn,Mr=class extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,fp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),ru.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(ru)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),lr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),su.multiplyMatrices(n,vs),ar.matrixWorld=su,ar.raycast(t,wo);for(let o=0,a=wo.length;o<a;o++){let l=wo[o];l.instanceId=r,l.object=this,e.push(l)}wo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Vo(new Float32Array(s*this.count),s,this.count,ya,En));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},oc=new N,pp=new N,mp=new kt,on=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=oc.subVectors(n,e).cross(pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(oc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mp.getNormalMatrix(t),s=this.coplanarPoint(oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Qn,gp=new Tt(.5,.5),Eo=new N,Cs=class{constructor(t=new on,e=new on,n=new on,s=new on,r=new on,o=new on){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],v=r[12],_=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-o,f-h,p-g,T-v).normalize(),s[1].setComponents(c+o,f+h,p+g,T+v).normalize(),s[2].setComponents(c+a,f+d,p+b,T+_).normalize(),s[3].setComponents(c-a,f-d,p-b,T-_).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,T-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-y).normalize(),e===vn)s[5].setComponents(c+l,f+u,p+m,T+y).normalize();else if(e===pr)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);let e=gp.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Eo.x=s.normal.x>0?t.max.x:t.min.x,Eo.y=s.normal.y>0?t.max.y:t.min.y,Eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rs=class extends ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ou=new ae,fc=new Es,To=new Qn,Ao=new N,wr=class extends we{constructor(t=new Te,e=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=r,t.ray.intersectsSphere(To)===!1)return;ou.copy(s).invert(),fc.copy(t.ray).applyMatrix4(ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,b=f;g<b;g++){let m=c.getX(g);Ao.fromBufferAttribute(d,m),au(Ao,m,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,b=f;g<b;g++)Ao.fromBufferAttribute(d,g),au(Ao,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function au(i,t,e,n,s,r,o){let a=fc.distanceSqToPoint(i);if(a<e){let l=new N;fc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var xi=class extends Ee{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Er=class extends Ee{constructor(t,e,n=Ei,s,r,o,a=Xe,l=Xe,c,h=xs,d=1){if(h!==xs&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Tr=class extends Ee{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ar=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Sn=class i extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,b=[],m=n/2,p=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(d,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(f,2));function v(){let y=new N,T=new N,E=0,C=(e-t)/n;for(let I=0;I<=r;I++){let M=[],x=I/r,P=x*(e-t)+t;for(let B=0;B<=s;B++){let L=B/s,U=L*l+a,z=Math.sin(U),D=Math.cos(U);T.x=P*z,T.y=-x*n+m,T.z=P*D,d.push(T.x,T.y,T.z),y.set(z,C,D).normalize(),u.push(y.x,y.y,y.z),f.push(L,1-x),M.push(g++)}b.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){let x=b[M][I],P=b[M+1][I],B=b[M+1][I+1],L=b[M][I+1];(t>0||M!==0)&&(h.push(x,P,L),E+=3),(e>0||M!==r-1)&&(h.push(P,B,L),E+=3)}c.addGroup(p,E,0),p+=E}function _(y){let T=g,E=new Tt,C=new N,I=0,M=y===!0?t:e,x=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*x,0),u.push(0,x,0),f.push(.5,.5),g++;let P=g;for(let B=0;B<=s;B++){let U=B/s*l+a,z=Math.cos(U),D=Math.sin(U);C.x=M*D,C.y=m*x,C.z=M*z,d.push(C.x,C.y,C.z),u.push(0,x,0),E.x=z*.5+.5,E.y=D*.5*x+.5,f.push(E.x,E.y),g++}for(let B=0;B<s;B++){let L=T+B,U=P+B;y===!0?h.push(U,U+1,L):h.push(U+1,U,L),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ho=class i extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new N,y=new N,T=new N;for(let E=0;E<e.length;E+=3)f(e[E+0],_),f(e[E+1],y),f(e[E+2],T),l(_,y,T,v)}function l(v,_,y,T){let E=T+1,C=[];for(let I=0;I<=E;I++){C[I]=[];let M=v.clone().lerp(y,I/E),x=_.clone().lerp(y,I/E),P=E-I;for(let B=0;B<=P;B++)B===0&&I===E?C[I][B]=M:C[I][B]=M.clone().lerp(x,B/P)}for(let I=0;I<E;I++)for(let M=0;M<2*(E-I)-1;M++){let x=Math.floor(M/2);M%2===0?(u(C[I][x+1]),u(C[I+1][x]),u(C[I][x])):(u(C[I][x+1]),u(C[I+1][x+1]),u(C[I+1][x]))}}function c(v){let _=new N;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let v=new N;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=m(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;o.push(y,1-T)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],T=o[v+4],E=Math.max(_,y,T),C=Math.min(_,y,T);E>.9&&C<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){let v=new N,_=new N,y=new N,T=new N,E=new Tt,C=new Tt,I=new Tt;for(let M=0,x=0;M<r.length;M+=9,x+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),E.set(o[x+0],o[x+1]),C.set(o[x+2],o[x+3]),I.set(o[x+4],o[x+5]),T.copy(v).add(_).add(y).divideScalar(3);let P=m(T);b(E,x+0,v,P),b(C,x+2,_,P),b(I,x+4,y,P)}}function b(v,_,y,T){T<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=T/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Gi=class i extends Te{constructor(t=[new Tt(0,-.5),new Tt(.5,0),new Tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new N,u=new Tt,f=new N,g=new N,b=new N,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(b.x,b.y,b.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(g)}for(let v=0;v<=e;v++){let _=n+v*h*s,y=Math.sin(_),T=Math.cos(_);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*T,o.push(d.x,d.y,d.z),u.x=v/e,u.y=E/(t.length-1),a.push(u.x,u.y);let C=l[3*E+0]*y,I=l[3*E+1],M=l[3*E+0]*T;c.push(C,I,M)}}for(let v=0;v<e;v++)for(let _=0;_<t.length-1;_++){let y=_+v*t.length,T=y,E=y+t.length,C=y+t.length+1,I=y+1;r.push(T,E,I),r.push(C,I,E)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ln=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],b=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let _=0;_<c;_++){let y=_*d-r;g.push(y,-v,0),b.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let _=v+c*p,y=v+c*(p+1),T=v+1+c*(p+1),E=v+1+c*p;f.push(_,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(b,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Cr=class i extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new N,g=new Tt;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let b=0;b<s;b++){let m=b*(n+1);for(let p=0;p<n;p++){let v=p+m,_=v,y=v+n+1,T=v+n+2,E=v+1;a.push(_,y,E),a.push(y,T,E)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Mn=class i extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new N,u=new N,f=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){let v=[],_=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let E=T/e;d.x=-t*Math.cos(s+E*r)*Math.sin(o+_*a),d.y=t*Math.cos(o+_*a),d.z=t*Math.sin(s+E*r)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),m.push(E+y,1-_),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let _=h[p][v+1],y=h[p][v],T=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(_,y,E),(p!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(b,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Rr=class i extends Ho{constructor(t=1,e=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fn=class i extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,d=new N,u=new N;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let b=g/s*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(b),d.y=(t+e*Math.cos(m))*Math.sin(b),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let b=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;o.push(b,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ir=class extends ln{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ut(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var xe=class extends ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Pr=class extends ln{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Go=class extends ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wo=class extends ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Co(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function bp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=t,a=2*e-n;break;case uc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=t,l=2*n-e;break;case uc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,v=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,_=(-1-f)*m+(1.5+f)*b+.5*g,y=f*m-f*b;for(let T=0;T!==a;++T)r[T]=p*o[h+T]+v*o[c+T]+_*o[l+T]+y*o[d+T];return r}},Xo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Yo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Co(e,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Co(t.times,Array),values:Co(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case Fo:e=this.InterpolantFactoryMethodLinear;break;case Ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&bp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ro,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let b=e[d+g];if(b!==e[u+g]||b!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Fo;var Si=class extends tn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=dr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};$o.prototype.ValueTypeName="color";var Zo=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};Zo.prototype.ValueTypeName="number";var jo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},Lr=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends tn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=dr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends tn{constructor(t,e,n,s){super(t,e,n,s)}};Jo.prototype.ValueTypeName="vector";var Ko=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},id=new Ko,Qo=class{constructor(t){this.manager=t!==void 0?t:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Is=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Fr=class extends Is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ac=new ae,lu=new N,cu=new N,ta=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var hu=new ae,cr=new N,lc=new N,pc=class extends ta{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(cr),lc.copy(n.position),lc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(lc),n.updateMatrixWorld(),s.makeTranslation(-cr.x,-cr.y,-cr.z),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu,n.coordinateSystem,n.reversedDepth)}},Nr=class extends Is{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Dr=class extends yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},mc=class extends ta{constructor(){super(new Dr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends Is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new mc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var ea=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Dc="\\[\\]\\.:\\/",vp=new RegExp("["+Dc+"]","g"),Bc="[^"+Dc+"]",yp="[^"+Dc.replace("\\.","")+"]",_p=/((?:WC+[\/:])*)/.source.replace("WC",Bc),xp=/(WCOD+)?/.source.replace("WCOD",yp),Sp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),Mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),wp=new RegExp("^"+_p+xp+Sp+Mp+"$"),Ep=["material","materials","bones","map"],gc=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(t){let e=wp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ep.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=gc;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o_=new Float32Array(1);var uu=new ae,Br=class{constructor(t,e,n=0,s=1/0){this.ray=new Es(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uu),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(du),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,n,e);return n.sort(du),n}};function du(i,t){return i.distance-t.distance}function bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bc(r[o],t,e,!0)}}function Uc(i,t,e,n){let s=Tp(n);switch(e){case Ac:return i*t;case ya:return i*t/s.components*s.byteLength;case _a:return i*t/s.components*s.byteLength;case Rc:return i*t*2/s.components*s.byteLength;case xa:return i*t*2/s.components*s.byteLength;case Cc:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Sa:return i*t*4/s.components*s.byteLength;case zr:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wa:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case Ma:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wa:case qa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ya:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Za:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tp(i){switch(i){case wn:case Mc:return{byteLength:1,components:1};case Fs:case wc:case Ns:return{byteLength:2,components:1};case ba:case va:return{byteLength:2,components:4};case Ei:case ga:case En:return{byteLength:4,components:1};case Ec:case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);function Ad(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ap(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],b=d[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let b=d[f];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jp=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s0="gl_FragColor = linearToOutputTexel( gl_FragColor );",r0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,d0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m0=`#ifdef USE_GRADIENTMAP
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
}`,g0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,_0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,A0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,C0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,X0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,om=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,um=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gm=`#ifdef USE_SKINNING
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
#endif`,bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sm=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Nm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Bm=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Hm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Xm=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$m=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,jm=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Km=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,t1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Cp,alphahash_pars_fragment:Rp,alphamap_fragment:Ip,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Fp,aomap_fragment:Np,aomap_pars_fragment:Dp,batching_pars_vertex:Bp,batching_vertex:Up,begin_vertex:Op,beginnormal_vertex:zp,bsdfs:kp,iridescence_fragment:Vp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Gp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Xp,color_fragment:Yp,color_pars_fragment:$p,color_pars_vertex:Zp,color_vertex:jp,common:Jp,cube_uv_reflection_fragment:Kp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:t0,displacementmap_vertex:e0,emissivemap_fragment:n0,emissivemap_pars_fragment:i0,colorspace_fragment:s0,colorspace_pars_fragment:r0,envmap_fragment:o0,envmap_common_pars_fragment:a0,envmap_pars_fragment:l0,envmap_pars_vertex:c0,envmap_physical_pars_fragment:_0,envmap_vertex:h0,fog_vertex:u0,fog_pars_vertex:d0,fog_fragment:f0,fog_pars_fragment:p0,gradientmap_pars_fragment:m0,lightmap_pars_fragment:g0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:v0,lights_pars_begin:y0,lights_toon_fragment:x0,lights_toon_pars_fragment:S0,lights_phong_fragment:M0,lights_phong_pars_fragment:w0,lights_physical_fragment:E0,lights_physical_pars_fragment:T0,lights_fragment_begin:A0,lights_fragment_maps:C0,lights_fragment_end:R0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:F0,map_fragment:N0,map_pars_fragment:D0,map_particle_fragment:B0,map_particle_pars_fragment:U0,metalnessmap_fragment:O0,metalnessmap_pars_fragment:z0,morphinstance_vertex:k0,morphcolor_vertex:V0,morphnormal_vertex:H0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:q0,normal_fragment_maps:X0,normal_pars_fragment:Y0,normal_pars_vertex:$0,normal_vertex:Z0,normalmap_pars_fragment:j0,clearcoat_normal_fragment_begin:J0,clearcoat_normal_fragment_maps:K0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:tm,opaque_fragment:em,packing:nm,premultiplied_alpha_fragment:im,project_vertex:sm,dithering_fragment:rm,dithering_pars_fragment:om,roughnessmap_fragment:am,roughnessmap_pars_fragment:lm,shadowmap_pars_fragment:cm,shadowmap_pars_vertex:hm,shadowmap_vertex:um,shadowmask_pars_fragment:dm,skinbase_vertex:fm,skinning_pars_vertex:pm,skinning_vertex:mm,skinnormal_vertex:gm,specularmap_fragment:bm,specularmap_pars_fragment:vm,tonemapping_fragment:ym,tonemapping_pars_fragment:_m,transmission_fragment:xm,transmission_pars_fragment:Sm,uv_pars_fragment:Mm,uv_pars_vertex:wm,uv_vertex:Em,worldpos_vertex:Tm,background_vert:Am,background_frag:Cm,backgroundCube_vert:Rm,backgroundCube_frag:Im,cube_vert:Pm,cube_frag:Lm,depth_vert:Fm,depth_frag:Nm,distanceRGBA_vert:Dm,distanceRGBA_frag:Bm,equirect_vert:Um,equirect_frag:Om,linedashed_vert:zm,linedashed_frag:km,meshbasic_vert:Vm,meshbasic_frag:Hm,meshlambert_vert:Gm,meshlambert_frag:Wm,meshmatcap_vert:qm,meshmatcap_frag:Xm,meshnormal_vert:Ym,meshnormal_frag:$m,meshphong_vert:Zm,meshphong_frag:jm,meshphysical_vert:Jm,meshphysical_frag:Km,meshtoon_vert:Qm,meshtoon_frag:t1,points_vert:e1,points_frag:n1,shadow_vert:i1,shadow_frag:s1,sprite_vert:r1,sprite_frag:o1},ht={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ve([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ve([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ve([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ve([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ve([ht.points,ht.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ve([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ve([ht.common,ht.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ve([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ve([ht.sprite,ht.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ve([ht.common,ht.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ve([ht.lights,ht.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};Dn.physical={uniforms:Ve([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Ka={r:0,b:0,g:0},$i=new an,a1=new ae;function l1(i,t,e,n,s,r,o){let a=new Ut(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function b(_){let y=!1,T=g(_);T===null?p(a,l):T&&T.isColor&&(p(T,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){let T=g(y);T&&(T.isCubeTexture||T.mapping===Ur)?(h===void 0&&(h=new Dt(new Qe(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Yi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(a1.makeRotationFromEuler($i)),h.material.toneMapped=jt.getTransfer(T.colorSpace)!==re,(d!==T||u!==T.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=T,u=T.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Dt(new Ln(2,2),new xn({name:"BackgroundMaterial",uniforms:Yi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=jt.getTransfer(T.colorSpace)!==re,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||u!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,u=T.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Ka,Nc(i)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:b,addToRenderList:m,dispose:v}}function c1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(x,P,B,L,U){let z=!1,D=d(L,B,P);r!==D&&(r=D,c(r.object)),z=f(x,L,B,U),z&&g(x,L,B,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,y(x,P,B,L),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,P,B){let L=B.wireframe===!0,U=n[x.id];U===void 0&&(U={},n[x.id]=U);let z=U[P.id];z===void 0&&(z={},U[P.id]=z);let D=z[L];return D===void 0&&(D=u(l()),z[L]=D),D}function u(x){let P=[],B=[],L=[];for(let U=0;U<e;U++)P[U]=0,B[U]=0,L[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:L,object:x,attributes:{},index:null}}function f(x,P,B,L){let U=r.attributes,z=P.attributes,D=0,J=B.getAttributes();for(let H in J)if(J[H].location>=0){let at=U[H],ft=z[H];if(ft===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor)),at===void 0||at.attribute!==ft||ft&&at.data!==ft.data)return!0;D++}return r.attributesNum!==D||r.index!==L}function g(x,P,B,L){let U={},z=P.attributes,D=0,J=B.getAttributes();for(let H in J)if(J[H].location>=0){let at=z[H];at===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(at=x.instanceColor));let ft={};ft.attribute=at,at&&at.data&&(ft.data=at.data),U[H]=ft,D++}r.attributes=U,r.attributesNum=D,r.index=L}function b(){let x=r.newAttributes;for(let P=0,B=x.length;P<B;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){let B=r.newAttributes,L=r.enabledAttributes,U=r.attributeDivisors;B[x]=1,L[x]===0&&(i.enableVertexAttribArray(x),L[x]=1),U[x]!==P&&(i.vertexAttribDivisor(x,P),U[x]=P)}function v(){let x=r.newAttributes,P=r.enabledAttributes;for(let B=0,L=P.length;B<L;B++)P[B]!==x[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function _(x,P,B,L,U,z,D){D===!0?i.vertexAttribIPointer(x,P,B,U,z):i.vertexAttribPointer(x,P,B,L,U,z)}function y(x,P,B,L){b();let U=L.attributes,z=B.getAttributes(),D=P.defaultAttributeValues;for(let J in z){let H=z[J];if(H.location>=0){let j=U[J];if(j===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){let at=j.normalized,ft=j.itemSize,rt=t.get(j);if(rt===void 0)continue;let Zt=rt.buffer,ne=rt.type,Yt=rt.bytesPerElement,Z=ne===i.INT||ne===i.UNSIGNED_INT||j.gpuType===ga;if(j.isInterleavedBufferAttribute){let Q=j.data,vt=Q.stride,Bt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let Ct=0;Ct<H.locationSize;Ct++)p(H.location+Ct,Q.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ct=0;Ct<H.locationSize;Ct++)m(H.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Ct=0;Ct<H.locationSize;Ct++)_(H.location+Ct,ft/H.locationSize,ne,at,vt*Yt,(Bt+ft/H.locationSize*Ct)*Yt,Z)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)p(H.location+Q,j.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Zt);for(let Q=0;Q<H.locationSize;Q++)_(H.location+Q,ft/H.locationSize,ne,at,ft*Yt,ft/H.locationSize*Q*Yt,Z)}}else if(D!==void 0){let at=D[J];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(H.location,at);break;case 3:i.vertexAttrib3fv(H.location,at);break;case 4:i.vertexAttrib4fv(H.location,at);break;default:i.vertexAttrib1fv(H.location,at)}}}}v()}function T(){I();for(let x in n){let P=n[x];for(let B in P){let L=P[B];for(let U in L)h(L[U].object),delete L[U];delete P[B]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let P=n[x.id];for(let B in P){let L=P[B];for(let U in L)h(L[U].object),delete L[U];delete P[B]}delete n[x.id]}function C(x){for(let P in n){let B=n[P];if(B[x.id]===void 0)continue;let L=B[x.id];for(let U in L)h(L[U].object),delete L[U];delete B[x.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function h1(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=h[b]*u[b];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function u1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let I=C===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==En&&!I)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:T,maxSamples:E}}function d1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new on,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,_=v*4,y=p.clippingState||null;l.value=y,y=h(g,u,_,f);for(let T=0;T!==_;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let p=f+b*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=f;_!==b;++_,y+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function f1(i){let t=new WeakMap;function e(o,a){return a===fa?o.mapping=qi:a===pa&&(o.mapping=Xi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===fa||a===pa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new zo(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Os=4,sd=[.125,.215,.35,.446,.526,.582],Ji=20,Oc=new Dr,rd=new Ut,zc=null,kc=0,Vc=0,Hc=!1,ji=(1+Math.sqrt(5))/2,Us=1/ji,od=[new N(-ji,Us,0),new N(ji,Us,0),new N(-Us,0,ji),new N(Us,0,ji),new N(0,ji,-Us),new N(0,ji,Us),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],p1=new N,ks=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=p1}=r;zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zc,kc,Vc),this._renderer.xr.enabled=Hc,t.scissorTest=!1,Qa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ns,format:hn,colorSpace:Vi,depthBuffer:!1},s=ad(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m1(r)),this._blurMaterial=g1(r,t,e)}return s}_compileMaterial(t){let e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Oc)}_sceneToCubeUV(t,e,n,s,r){let l=new De(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(rd),d.toneMapping=ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let b=new cn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new Dt(new Qe,b),p=!1,v=t.background;v?v.isColor&&(b.color.copy(v),t.background=null,p=!0):(b.color.copy(rd),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let T=this._cubeSize;Qa(s,y*T,_>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===qi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ld());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Qa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Oc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=od[(s-r-1)%od.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Dt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ji-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let p=[],v=0;for(let C=0;C<Ji;++C){let I=C/b,M=Math.exp(-I*I/2);p.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;let y=this._sizeLods[s],T=3*y*(s>_-Os?s-_+Os:0),E=4*(this._cubeSize-y);Qa(e,T,E,3*y,2*y),l.setRenderTarget(e),l.render(d,Oc)}};function m1(i){let t=[],e=[],n=[],s=i,r=i-Os+1+sd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Os?l=sd[o-i+Os-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,b=3,m=2,p=1,v=new Float32Array(b*g*f),_=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let E=0;E<f;E++){let C=E%3*2/3-1,I=E>2?0:-1,M=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(M,b*g*E),_.set(u,m*g*E);let x=[E,E,E,E,E,E];y.set(x,p*g*E)}let T=new Te;T.setAttribute("position",new Ne(v,b)),T.setAttribute("uv",new Ne(_,m)),T.setAttribute("faceIndex",new Ne(y,p)),t.push(T),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ad(i,t,e){let n=new In(i,t,e);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function g1(i,t,e){let n=new Float32Array(Ji),s=new N(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ld(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function cd(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function b1(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===fa||l===pa,h=l===qi||l===Xi;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ks(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ks(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function v1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function y1(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,b=0;if(f!==null){let v=f.array;b=f.version;for(let _=0,y=v.length;_<y;_+=3){let T=v[_+0],E=v[_+1],C=v[_+2];u.push(T,E,E,C,C,T)}}else if(g!==void 0){let v=g.array;b=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let T=_+0,E=_+1,C=_+2;u.push(T,E,E,C,C,T)}}else return;let m=new(Fc(u)?vr:br)(u,1);m.version=b;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function _1(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,b){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,b,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*b[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function x1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function S1(i,t,e){let n=new WeakMap,s=new se;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),b===!0&&(_=3);let y=a.attributes.position.count*_,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),C=new gr(E,y,T,d);C.type=En,C.needsUpdate=!0;let I=_*4;for(let x=0;x<d;x++){let P=m[x],B=p[x],L=v[x],U=y*T*4*x;for(let z=0;z<P.count;z++){let D=z*I;f===!0&&(s.fromBufferAttribute(P,z),E[U+D+0]=s.x,E[U+D+1]=s.y,E[U+D+2]=s.z,E[U+D+3]=0),g===!0&&(s.fromBufferAttribute(B,z),E[U+D+4]=s.x,E[U+D+5]=s.y,E[U+D+6]=s.z,E[U+D+7]=0),b===!0&&(s.fromBufferAttribute(L,z),E[U+D+8]=s.x,E[U+D+9]=s.y,E[U+D+10]=s.z,E[U+D+11]=L.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Tt(y,T)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function M1(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Cd=new Ee,hd=new Er(1,1),Rd=new gr,Id=new Uo,Pd=new _r,ud=[],dd=[],fd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Vs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ud[s];if(r===void 0&&(r=new Float32Array(s),ud[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function nl(i,t){let e=dd[t];e===void 0&&(e=new Int32Array(t),dd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function w1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function E1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function T1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function A1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function C1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;md.set(n),i.uniformMatrix2fv(this.addr,!1,md),Ce(e,n)}}function R1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;pd.set(n),i.uniformMatrix3fv(this.addr,!1,pd),Ce(e,n)}}function I1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;fd.set(n),i.uniformMatrix4fv(this.addr,!1,fd),Ce(e,n)}}function P1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function L1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function F1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function N1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function D1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function B1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function U1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function O1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function z1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hd.compareFunction=Ic,r=hd):r=Cd,e.setTexture2D(t||r,s)}function k1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Id,s)}function V1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pd,s)}function H1(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rd,s)}function G1(i){switch(i){case 5126:return w1;case 35664:return E1;case 35665:return T1;case 35666:return A1;case 35674:return C1;case 35675:return R1;case 35676:return I1;case 5124:case 35670:return P1;case 35667:case 35671:return L1;case 35668:case 35672:return F1;case 35669:case 35673:return N1;case 5125:return D1;case 36294:return B1;case 36295:return U1;case 36296:return O1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return H1}}function W1(i,t){i.uniform1fv(this.addr,t)}function q1(i,t){let e=Vs(t,this.size,2);i.uniform2fv(this.addr,e)}function X1(i,t){let e=Vs(t,this.size,3);i.uniform3fv(this.addr,e)}function Y1(i,t){let e=Vs(t,this.size,4);i.uniform4fv(this.addr,e)}function $1(i,t){let e=Vs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Z1(i,t){let e=Vs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function j1(i,t){let e=Vs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function J1(i,t){i.uniform1iv(this.addr,t)}function K1(i,t){i.uniform2iv(this.addr,t)}function Q1(i,t){i.uniform3iv(this.addr,t)}function tg(i,t){i.uniform4iv(this.addr,t)}function eg(i,t){i.uniform1uiv(this.addr,t)}function ng(i,t){i.uniform2uiv(this.addr,t)}function ig(i,t){i.uniform3uiv(this.addr,t)}function sg(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Cd,r[o])}function og(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Id,r[o])}function ag(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pd,r[o])}function lg(i,t,e){let n=this.cache,s=t.length,r=nl(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rd,r[o])}function cg(i){switch(i){case 5126:return W1;case 35664:return q1;case 35665:return X1;case 35666:return Y1;case 35674:return $1;case 35675:return Z1;case 35676:return j1;case 5124:case 35670:return J1;case 35667:case 35671:return K1;case 35668:case 35672:return Q1;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}var Wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G1(e.type)}},qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}},Xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Gc=/(\w+)(\])?(\[|\.)?/g;function gd(i,t){i.seq.push(t),i.map[t.id]=t}function hg(i,t,e){let n=i.name,s=n.length;for(Gc.lastIndex=0;;){let r=Gc.exec(n),o=Gc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gd(e,c===void 0?new Wc(a,i,t):new qc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Xc(a),gd(e,d)),e=d}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ug=37297,dg=0;function fg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vd=new kt;function pg(i){jt._getMatrix(vd,jt.workingColorSpace,i);let t=`mat3( ${vd.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+fg(i.getShaderSource(t),a)}else return r}function mg(i,t){let e=pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function gg(i,t){let e;switch(t){case Du:e="Linear";break;case Bu:e="Reinhard";break;case Uu:e="Cineon";break;case Ou:e="ACESFilmic";break;case ku:e="AgX";break;case da:e="Neutral";break;case zu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var tl=new N;function bg(){jt.getLuminanceCoefficients(tl);let i=tl.x.toFixed(4),t=tl.y.toFixed(4),e=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _g(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gr(i){return i!==""}function _d(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(xg,Mg)}var Sg=new Map;function Mg(i,t){let e=Wt[t];if(e===void 0){let n=Sg.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yc(e)}var wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(i){return i.replace(wg,Eg)}function Eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Tg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ia?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ag(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Xi:t="ENVMAP_TYPE_CUBE";break;case Ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xi:t="ENVMAP_MODE_REFRACTION";break}return t}function Rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ua:t="ENVMAP_BLENDING_MULTIPLY";break;case Fu:t="ENVMAP_BLENDING_MIX";break;case Nu:t="ENVMAP_BLENDING_ADD";break}return t}function Ig(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Tg(e),c=Ag(e),h=Cg(e),d=Rg(e),u=Ig(e),f=vg(e),g=yg(r),b=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(m=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?Wt.tonemapping_pars_fragment:"",e.toneMapping!==ni?gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),o=Yc(o),o=_d(o,e),o=xd(o,e),a=Yc(a),a=_d(a,e),a=xd(a,e),o=Sd(o),a=Sd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+m+o,y=v+p+a,T=bd(s,s.VERTEX_SHADER,_),E=bd(s,s.FRAGMENT_SHADER,y);s.attachShader(b,T),s.attachShader(b,E),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(P){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(b)||"",L=s.getShaderInfoLog(T)||"",U=s.getShaderInfoLog(E)||"",z=B.trim(),D=L.trim(),J=U.trim(),H=!0,j=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,T,E);else{let at=yd(s,T,"vertex"),ft=yd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+at+`
`+ft)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||J==="")&&(j=!1);j&&(P.diagnostics={runnable:H,programLog:z,vertexShader:{log:D,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(T),s.deleteShader(E),I=new zs(s,b),M=_g(s,b)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(b,ug)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=E,this}var Lg=0,$c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zc(t),e.set(t,n)),n}},Zc=class{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}};function Fg(i,t,e,n,s,r,o){let a=new Ts,l=new $c,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,B,L){let U=B.fog,z=L.geometry,D=M.isMeshStandardMaterial?B.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||D),H=J&&J.mapping===Ur?J.image.height:null,j=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let at=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ft=at!==void 0?at.length:0,rt=0;z.morphAttributes.position!==void 0&&(rt=1),z.morphAttributes.normal!==void 0&&(rt=2),z.morphAttributes.color!==void 0&&(rt=3);let Zt,ne,Yt,Z;if(j){let Qt=Dn[j];Zt=Qt.vertexShader,ne=Qt.fragmentShader}else Zt=M.vertexShader,ne=M.fragmentShader,l.update(M),Yt=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);let Q=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Bt=L.isInstancedMesh===!0,Ct=L.isBatchedMesh===!0,$t=!!M.map,Oe=!!M.matcap,F=!!J,pe=!!M.aoMap,zt=!!M.lightMap,Ft=!!M.bumpMap,xt=!!M.normalMap,me=!!M.displacementMap,St=!!M.emissiveMap,Gt=!!M.metalnessMap,Pe=!!M.roughnessMap,Se=M.anisotropy>0,R=M.clearcoat>0,w=M.dispersion>0,G=M.iridescence>0,$=M.sheen>0,tt=M.transmission>0,Y=Se&&!!M.anisotropyMap,At=R&&!!M.clearcoatMap,ot=R&&!!M.clearcoatNormalMap,Mt=R&&!!M.clearcoatRoughnessMap,wt=G&&!!M.iridescenceMap,it=G&&!!M.iridescenceThicknessMap,pt=$&&!!M.sheenColorMap,Lt=$&&!!M.sheenRoughnessMap,Et=!!M.specularMap,ut=!!M.specularColorMap,Vt=!!M.specularIntensityMap,O=tt&&!!M.transmissionMap,st=tt&&!!M.thicknessMap,lt=!!M.gradientMap,bt=!!M.alphaMap,et=M.alphaTest>0,K=!!M.alphaHash,_t=!!M.extensions,Ot=ni;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let ce={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Zt,fragmentShader:ne,defines:M.defines,customVertexShaderID:Yt,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&L._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&L.instanceColor!==null,instancingMorph:Bt&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Vi,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:Oe,envMap:F,envMapMode:F&&J.mapping,envMapCubeUVHeight:H,aoMap:pe,lightMap:zt,bumpMap:Ft,normalMap:xt,displacementMap:u&&me,emissiveMap:St,normalMapObjectSpace:xt&&M.normalMapType===Wu,normalMapTangentSpace:xt&&M.normalMapType===Ja,metalnessMap:Gt,roughnessMap:Pe,anisotropy:Se,anisotropyMap:Y,clearcoat:R,clearcoatMap:At,clearcoatNormalMap:ot,clearcoatRoughnessMap:Mt,dispersion:w,iridescence:G,iridescenceMap:wt,iridescenceThicknessMap:it,sheen:$,sheenColorMap:pt,sheenRoughnessMap:Lt,specularMap:Et,specularColorMap:ut,specularIntensityMap:Vt,transmission:tt,transmissionMap:O,thicknessMap:st,gradientMap:lt,opaque:M.transparent===!1&&M.blending===Jn&&M.alphaToCoverage===!1,alphaMap:bt,alphaTest:et,alphaHash:K,combine:M.combine,mapUv:$t&&b(M.map.channel),aoMapUv:pe&&b(M.aoMap.channel),lightMapUv:zt&&b(M.lightMap.channel),bumpMapUv:Ft&&b(M.bumpMap.channel),normalMapUv:xt&&b(M.normalMap.channel),displacementMapUv:me&&b(M.displacementMap.channel),emissiveMapUv:St&&b(M.emissiveMap.channel),metalnessMapUv:Gt&&b(M.metalnessMap.channel),roughnessMapUv:Pe&&b(M.roughnessMap.channel),anisotropyMapUv:Y&&b(M.anisotropyMap.channel),clearcoatMapUv:At&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:ot&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&b(M.sheenRoughnessMap.channel),specularMapUv:Et&&b(M.specularMap.channel),specularColorMapUv:ut&&b(M.specularColorMap.channel),specularIntensityMapUv:Vt&&b(M.specularIntensityMap.channel),transmissionMapUv:O&&b(M.transmissionMap.channel),thicknessMapUv:st&&b(M.thicknessMap.channel),alphaMapUv:bt&&b(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xt||Se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&($t||bt),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:rt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===re,decodeVideoTextureEmissive:St&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ye,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&M.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function p(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(x,M),_(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function v(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function _(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){let x=g[M.type],P;if(x){let B=Dn[x];P=ed.clone(B.uniforms)}else P=M.uniforms;return P}function T(M,x){let P;for(let B=0,L=h.length;B<L;B++){let U=h[B];if(U.cacheKey===x){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Pg(i,x,M,r),h.push(P)),P}function E(M){if(--M.usedTimes===0){let x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function Ng(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function wd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ed(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,f,g,b,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:b,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=b,p.group=m),t++,p}function a(d,u,f,g,b,m){let p=o(d,u,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,b,m){let p=o(d,u,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||Dg),n.length>1&&n.sort(u||wd),s.length>1&&s.sort(u||wd)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Bg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ed,i.set(n,[o])):s>=r.length?(o=new Ed,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ug(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Ut};break;case"SpotLight":e={position:new N,direction:new N,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Og(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var zg=0;function kg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vg(i){let t=new Ug,e=Og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ae,o=new ae;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,v=0,_=0,y=0,T=0,E=0,C=0;c.sort(kg);for(let M=0,x=c.length;M<x;M++){let P=c[M],B=P.color,L=P.intensity,U=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*L,d+=B.g*L,u+=B.b*L;else if(P.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(P.sh.coefficients[D],L);C++}else if(P.isDirectionalLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=D,f++}else if(P.isSpotLight){let D=t.get(P);D.position.setFromMatrixPosition(P.matrixWorld),D.color.copy(B).multiplyScalar(L),D.distance=U,D.coneCos=Math.cos(P.angle),D.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),D.decay=P.decay,n.spot[b]=D;let J=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[b]=J.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=z,y++}b++}else if(P.isRectAreaLight){let D=t.get(P);D.color.copy(B).multiplyScalar(L),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=D,m++}else if(P.isPointLight){let D=t.get(P);if(D.color.copy(P.color).multiplyScalar(P.intensity),D.distance=P.distance,D.decay=P.decay,P.castShadow){let J=P.shadow,H=e.get(P);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,_++}n.point[g]=D,g++}else if(P.isHemisphereLight){let D=t.get(P);D.skyColor.copy(P.color).multiplyScalar(L),D.groundColor.copy(P.groundColor).multiplyScalar(L),n.hemi[p]=D,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==b||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==v||I.numPointShadows!==_||I.numSpotShadows!==y||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=b,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=v,I.numPointShadows=_,I.numSpotShadows=y,I.numSpotMaps=T,I.numLightProbes=C,n.version=zg++)}function l(c,h){let d=0,u=0,f=0,g=0,b=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let _=c[p];if(_.isDirectionalLight){let y=n.directional[d];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let y=n.point[u];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){let y=n.hemi[b];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:n}}function Td(i){let t=new Vg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Hg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Td(i),t.set(s,[a])):r>=o.length?(a=new Td(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wg=`uniform sampler2D shadow_pass;
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
}`;function qg(i,t,e){let n=new Cs,s=new Tt,r=new Tt,o=new se,a=new Go({depthPacking:Gu}),l=new Wo,c={},h=e.maxTextureSize,d={[jn]:Be,[Be]:jn,[Ye]:Ye},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Gg,fragmentShader:Wg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Te;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Dt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let p=this.type;this.render=function(E,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ei),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let L=p!==Nn&&this.type===Nn,U=p===Nn&&this.type!==Nn;for(let z=0,D=E.length;z<D;z++){let J=E[z],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();if(s.multiply(j),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,H.mapSize.y=r.y)),H.map===null||L===!0||U===!0){let ft=this.type!==Nn?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new In(s.x,s.y,ft),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let at=H.getViewportCount();for(let ft=0;ft<at;ft++){let rt=H.getViewport(ft);o.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),B.viewport(o),H.updateMatrices(J,ft),n=H.getFrustum(),y(C,I,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Nn&&v(H,I),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,P)};function v(E,C){let I=t.update(b);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new In(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,I,u,b,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,I,f,b,null)}function _(E,C,I,M){let x=null,P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)x=P;else if(x=I.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=x.uuid,L=C.uuid,U=c[B];U===void 0&&(U={},c[B]=U);let z=U[L];z===void 0&&(z=x.clone(),U[L]=z,C.addEventListener("dispose",T)),x=z}if(x.visible=C.visible,x.wireframe=C.wireframe,M===Nn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let B=i.properties.get(x);B.light=I}return x}function y(E,C,I,M,x){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Nn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);let L=t.update(E),U=E.material;if(Array.isArray(U)){let z=L.groups;for(let D=0,J=z.length;D<J;D++){let H=z[D],j=U[H.materialIndex];if(j&&j.visible){let at=_(E,j,M,x);E.onBeforeShadow(i,E,C,I,L,at,H),i.renderBufferDirect(I,null,L,at,E,H),E.onAfterShadow(i,E,C,I,L,at,H)}}}else if(U.visible){let z=_(E,U,M,x);E.onBeforeShadow(i,E,C,I,L,z,null),i.renderBufferDirect(I,null,L,z,E,null),E.onAfterShadow(i,E,C,I,L,z,null)}}let B=E.children;for(let L=0,U=B.length;L<U;L++)y(B[L],C,I,M,x)}function T(E){E.target.removeEventListener("dispose",T);for(let I in c){let M=c[I],x=E.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var Xg={[sa]:ra,[oa]:ca,[aa]:ha,[ki]:la,[ra]:sa,[ca]:oa,[ha]:aa,[la]:ki};function Yg(i,t){function e(){let O=!1,st=new se,lt=null,bt=new se(0,0,0,0);return{setMask:function(et){lt!==et&&!O&&(i.colorMask(et,et,et,et),lt=et)},setLocked:function(et){O=et},setClear:function(et,K,_t,Ot,ce){ce===!0&&(et*=Ot,K*=Ot,_t*=Ot),st.set(et,K,_t,Ot),bt.equals(st)===!1&&(i.clearColor(et,K,_t,Ot),bt.copy(st))},reset:function(){O=!1,lt=null,bt.set(-1,0,0,0)}}}function n(){let O=!1,st=!1,lt=null,bt=null,et=null;return{setReversed:function(K){if(st!==K){let _t=t.get("EXT_clip_control");K?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),st=K;let Ot=et;et=null,this.setClear(Ot)}},getReversed:function(){return st},setTest:function(K){K?Q(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(K){lt!==K&&!O&&(i.depthMask(K),lt=K)},setFunc:function(K){if(st&&(K=Xg[K]),bt!==K){switch(K){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=K}},setLocked:function(K){O=K},setClear:function(K){et!==K&&(st&&(K=1-K),i.clearDepth(K),et=K)},reset:function(){O=!1,lt=null,bt=null,et=null,st=!1}}}function s(){let O=!1,st=null,lt=null,bt=null,et=null,K=null,_t=null,Ot=null,ce=null;return{setTest:function(Qt){O||(Qt?Q(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(Qt){st!==Qt&&!O&&(i.stencilMask(Qt),st=Qt)},setFunc:function(Qt,Vn,Rn){(lt!==Qt||bt!==Vn||et!==Rn)&&(i.stencilFunc(Qt,Vn,Rn),lt=Qt,bt=Vn,et=Rn)},setOp:function(Qt,Vn,Rn){(K!==Qt||_t!==Vn||Ot!==Rn)&&(i.stencilOp(Qt,Vn,Rn),K=Qt,_t=Vn,Ot=Rn)},setLocked:function(Qt){O=Qt},setClear:function(Qt){ce!==Qt&&(i.clearStencil(Qt),ce=Qt)},reset:function(){O=!1,st=null,lt=null,bt=null,et=null,K=null,_t=null,Ot=null,ce=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,_=null,y=null,T=null,E=null,C=new Ut(0,0,0),I=0,M=!1,x=null,P=null,B=null,L=null,U=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,J=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),D=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),D=J>=2);let j=null,at={},ft=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Zt=new se().fromArray(ft),ne=new se().fromArray(rt);function Yt(O,st,lt,bt){let et=new Uint8Array(4),K=i.createTexture();i.bindTexture(O,K),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<lt;_t++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(st+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return K}let Z={};Z[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(ki),Ft(!1),xt(vc),Q(i.CULL_FACE),pe(ei);function Q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function vt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Bt(O,st){return d[O]!==st?(i.bindFramebuffer(O,st),d[O]=st,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=st),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ct(O,st){let lt=f,bt=!1;if(O){lt=u.get(st),lt===void 0&&(lt=[],u.set(st,lt));let et=O.textures;if(lt.length!==et.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let K=0,_t=et.length;K<_t;K++)lt[K]=i.COLOR_ATTACHMENT0+K;lt.length=et.length,bt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(lt)}function $t(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Oe={[yi]:i.FUNC_ADD,[gu]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};Oe[vu]=i.MIN,Oe[yu]=i.MAX;let F={[_u]:i.ZERO,[xu]:i.ONE,[Su]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[Cu]:i.SRC_ALPHA_SATURATE,[Tu]:i.DST_COLOR,[wu]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[Au]:i.ONE_MINUS_DST_COLOR,[Eu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Iu]:i.ONE_MINUS_CONSTANT_COLOR,[Pu]:i.CONSTANT_ALPHA,[Lu]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(O,st,lt,bt,et,K,_t,Ot,ce,Qt){if(O===ei){b===!0&&(vt(i.BLEND),b=!1);return}if(b===!1&&(Q(i.BLEND),b=!0),O!==mu){if(O!==m||Qt!==M){if((p!==yi||y!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,y=yi),Qt)switch(O){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ls:i.blendFunc(i.ONE,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _c:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,_=null,T=null,E=null,C.set(0,0,0),I=0,m=O,M=Qt}return}et=et||st,K=K||lt,_t=_t||bt,(st!==p||et!==y)&&(i.blendEquationSeparate(Oe[st],Oe[et]),p=st,y=et),(lt!==v||bt!==_||K!==T||_t!==E)&&(i.blendFuncSeparate(F[lt],F[bt],F[K],F[_t]),v=lt,_=bt,T=K,E=_t),(Ot.equals(C)===!1||ce!==I)&&(i.blendColor(Ot.r,Ot.g,Ot.b,ce),C.copy(Ot),I=ce),m=O,M=!1}function zt(O,st){O.side===Ye?vt(i.CULL_FACE):Q(i.CULL_FACE);let lt=O.side===Be;st&&(lt=!lt),Ft(lt),O.blending===Jn&&O.transparent===!1?pe(ei):pe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let bt=O.stencilWrite;a.setTest(bt),bt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),St(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function xt(O){O!==fu?(Q(i.CULL_FACE),O!==P&&(O===vc?i.cullFace(i.BACK):O===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),P=O}function me(O){O!==B&&(D&&i.lineWidth(O),B=O)}function St(O,st,lt){O?(Q(i.POLYGON_OFFSET_FILL),(L!==st||U!==lt)&&(i.polygonOffset(st,lt),L=st,U=lt)):vt(i.POLYGON_OFFSET_FILL)}function Gt(O){O?Q(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Pe(O){O===void 0&&(O=i.TEXTURE0+z-1),j!==O&&(i.activeTexture(O),j=O)}function Se(O,st,lt){lt===void 0&&(j===null?lt=i.TEXTURE0+z-1:lt=j);let bt=at[lt];bt===void 0&&(bt={type:void 0,texture:void 0},at[lt]=bt),(bt.type!==O||bt.texture!==st)&&(j!==lt&&(i.activeTexture(lt),j=lt),i.bindTexture(O,st||Z[O]),bt.type=O,bt.texture=st)}function R(){let O=at[j];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(O){Zt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Zt.copy(O))}function Lt(O){ne.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function Et(O,st){let lt=c.get(st);lt===void 0&&(lt=new WeakMap,c.set(st,lt));let bt=lt.get(O);bt===void 0&&(bt=i.getUniformBlockIndex(st,O.name),lt.set(O,bt))}function ut(O,st){let bt=c.get(st).get(O);l.get(st)!==bt&&(i.uniformBlockBinding(st,bt,O.__bindingPointIndex),l.set(st,bt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,at={},d={},u=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,_=null,y=null,T=null,E=null,C=new Ut(0,0,0),I=0,M=!1,x=null,P=null,B=null,L=null,U=null,Zt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:vt,bindFramebuffer:Bt,drawBuffers:Ct,useProgram:$t,setBlending:pe,setMaterial:zt,setFlipSided:Ft,setCullFace:xt,setLineWidth:me,setPolygonOffset:St,setScissorTest:Gt,activeTexture:Pe,bindTexture:Se,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:wt,texImage3D:it,updateUBOMapping:Et,uniformBlockBinding:ut,texStorage2D:ot,texStorage3D:Mt,texSubImage2D:$,texSubImage3D:tt,compressedTexSubImage2D:Y,compressedTexSubImage3D:At,scissor:pt,viewport:Lt,reset:Vt}}function $g(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return f?new OffscreenCanvas(R,w):mr("canvas")}function b(R,w,G){let $=1,tt=Se(R);if((tt.width>G||tt.height>G)&&($=G/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor($*tt.width),At=Math.floor($*tt.height);d===void 0&&(d=g(Y,At));let ot=w?g(Y,At):d;return ot.width=Y,ot.height=At,ot.getContext("2d").drawImage(R,0,0,Y,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+At+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,w,G,$,tt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=w;if(w===i.RED&&(G===i.FLOAT&&(Y=i.R32F),G===i.HALF_FLOAT&&(Y=i.R16F),G===i.UNSIGNED_BYTE&&(Y=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.R8UI),G===i.UNSIGNED_SHORT&&(Y=i.R16UI),G===i.UNSIGNED_INT&&(Y=i.R32UI),G===i.BYTE&&(Y=i.R8I),G===i.SHORT&&(Y=i.R16I),G===i.INT&&(Y=i.R32I)),w===i.RG&&(G===i.FLOAT&&(Y=i.RG32F),G===i.HALF_FLOAT&&(Y=i.RG16F),G===i.UNSIGNED_BYTE&&(Y=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RG8UI),G===i.UNSIGNED_SHORT&&(Y=i.RG16UI),G===i.UNSIGNED_INT&&(Y=i.RG32UI),G===i.BYTE&&(Y=i.RG8I),G===i.SHORT&&(Y=i.RG16I),G===i.INT&&(Y=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),G===i.UNSIGNED_INT&&(Y=i.RGB32UI),G===i.BYTE&&(Y=i.RGB8I),G===i.SHORT&&(Y=i.RGB16I),G===i.INT&&(Y=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),G===i.UNSIGNED_INT&&(Y=i.RGBA32UI),G===i.BYTE&&(Y=i.RGBA8I),G===i.SHORT&&(Y=i.RGBA16I),G===i.INT&&(Y=i.RGBA32I)),w===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),w===i.RGBA){let At=tt?fr:jt.getTransfer($);G===i.FLOAT&&(Y=i.RGBA32F),G===i.HALF_FLOAT&&(Y=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Y=At===re?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(R,w){let G;return R?w===null||w===Ei||w===Ds?G=i.DEPTH24_STENCIL8:w===En?G=i.DEPTH32F_STENCIL8:w===Fs&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ei||w===Ds?G=i.DEPTH_COMPONENT24:w===En?G=i.DEPTH_COMPONENT32F:w===Fs&&(G=i.DEPTH_COMPONENT16),G}function T(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Xe&&R.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){let w=R.target;w.removeEventListener("dispose",E),I(w),w.isVideoTexture&&h.delete(w)}function C(R){let w=R.target;w.removeEventListener("dispose",C),x(w)}function I(R){let w=n.get(R);if(w.__webglInit===void 0)return;let G=R.source,$=u.get(G);if($){let tt=$[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(R),Object.keys($).length===0&&u.delete(G)}n.remove(R)}function M(R){let w=n.get(R);i.deleteTexture(w.__webglTexture);let G=R.source,$=u.get(G);delete $[w.__cacheKey],o.memory.textures--}function x(R){let w=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let tt=0;tt<w.__webglFramebuffer[$].length;tt++)i.deleteFramebuffer(w.__webglFramebuffer[$][tt]);else i.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)i.deleteFramebuffer(w.__webglFramebuffer[$]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=R.textures;for(let $=0,tt=G.length;$<tt;$++){let Y=n.get(G[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(G[$])}n.remove(R)}let P=0;function B(){P=0}function L(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function U(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function z(R,w){let G=n.get(R);if(R.isVideoTexture&&Gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,R,w);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function D(R,w){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Z(G,R,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function J(R,w){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Z(G,R,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function H(R,w){let G=n.get(R);if(R.version>0&&G.__version!==R.version){Q(G,R,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}let j={[_s]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},at={[Xe]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},ft={[qu]:i.NEVER,[Ju]:i.ALWAYS,[Xu]:i.LESS,[Ic]:i.LEQUAL,[Yu]:i.EQUAL,[ju]:i.GEQUAL,[$u]:i.GREATER,[Zu]:i.NOTEQUAL};function rt(R,w){if(w.type===En&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===ma||w.magFilter===Or||w.magFilter===wi||w.minFilter===yn||w.minFilter===ma||w.minFilter===Or||w.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,j[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,j[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,j[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,at[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,at[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ft[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Xe||w.minFilter!==Or&&w.minFilter!==wi||w.type===En&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Zt(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",E));let $=w.source,tt=u.get($);tt===void 0&&(tt={},u.set($,tt));let Y=U(w);if(Y!==R.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[Y].usedTimes++;let At=tt[R.__cacheKey];At!==void 0&&(tt[R.__cacheKey].usedTimes--,At.usedTimes===0&&M(w)),R.__cacheKey=Y,R.__webglTexture=tt[Y].texture}return G}function ne(R,w,G){return Math.floor(Math.floor(R/G)/w)}function Yt(R,w,G,$){let Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,G,$,w.data);else{Y.sort((it,pt)=>it.start-pt.start);let At=0;for(let it=1;it<Y.length;it++){let pt=Y[At],Lt=Y[it],Et=pt.start+pt.count,ut=ne(Lt.start,w.width,4),Vt=ne(pt.start,w.width,4);Lt.start<=Et+1&&ut===Vt&&ne(Lt.start+Lt.count-1,w.width,4)===ut?pt.count=Math.max(pt.count,Lt.start+Lt.count-pt.start):(++At,Y[At]=Lt)}Y.length=At+1;let ot=i.getParameter(i.UNPACK_ROW_LENGTH),Mt=i.getParameter(i.UNPACK_SKIP_PIXELS),wt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let it=0,pt=Y.length;it<pt;it++){let Lt=Y[it],Et=Math.floor(Lt.start/4),ut=Math.ceil(Lt.count/4),Vt=Et%w.width,O=Math.floor(Et/w.width),st=ut,lt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Vt,O,st,lt,G,$,w.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ot),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function Z(R,w,G){let $=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=i.TEXTURE_3D);let tt=Zt(R,w),Y=w.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+G);let At=n.get(Y);if(Y.version!==At.__version||tt===!0){e.activeTexture(i.TEXTURE0+G);let ot=jt.getPrimaries(jt.workingColorSpace),Mt=w.colorSpace===ii?null:jt.getPrimaries(w.colorSpace),wt=w.colorSpace===ii||ot===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let it=b(w.image,!1,s.maxTextureSize);it=Pe(w,it);let pt=r.convert(w.format,w.colorSpace),Lt=r.convert(w.type),Et=_(w.internalFormat,pt,Lt,w.colorSpace,w.isVideoTexture);rt($,w);let ut,Vt=w.mipmaps,O=w.isVideoTexture!==!0,st=At.__version===void 0||tt===!0,lt=Y.dataReady,bt=T(w,it);if(w.isDepthTexture)Et=y(w.format===Bs,w.type),st&&(O?e.texStorage2D(i.TEXTURE_2D,1,Et,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Et,it.width,it.height,0,pt,Lt,null));else if(w.isDataTexture)if(Vt.length>0){O&&st&&e.texStorage2D(i.TEXTURE_2D,bt,Et,Vt[0].width,Vt[0].height);for(let et=0,K=Vt.length;et<K;et++)ut=Vt[et],O?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,Lt,ut.data):e.texImage2D(i.TEXTURE_2D,et,Et,ut.width,ut.height,0,pt,Lt,ut.data);w.generateMipmaps=!1}else O?(st&&e.texStorage2D(i.TEXTURE_2D,bt,Et,it.width,it.height),lt&&Yt(w,it,pt,Lt)):e.texImage2D(i.TEXTURE_2D,0,Et,it.width,it.height,0,pt,Lt,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Et,Vt[0].width,Vt[0].height,it.depth);for(let et=0,K=Vt.length;et<K;et++)if(ut=Vt[et],w.format!==hn)if(pt!==null)if(O){if(lt)if(w.layerUpdates.size>0){let _t=Uc(ut.width,ut.height,w.format,w.type);for(let Ot of w.layerUpdates){let ce=ut.data.subarray(Ot*_t/ut.data.BYTES_PER_ELEMENT,(Ot+1)*_t/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Ot,ut.width,ut.height,1,pt,ce)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,it.depth,pt,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Et,ut.width,ut.height,it.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,it.depth,pt,Lt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Et,ut.width,ut.height,it.depth,0,pt,Lt,ut.data)}else{O&&st&&e.texStorage2D(i.TEXTURE_2D,bt,Et,Vt[0].width,Vt[0].height);for(let et=0,K=Vt.length;et<K;et++)ut=Vt[et],w.format!==hn?pt!==null?O?lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Et,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,Lt,ut.data):e.texImage2D(i.TEXTURE_2D,et,Et,ut.width,ut.height,0,pt,Lt,ut.data)}else if(w.isDataArrayTexture)if(O){if(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Et,it.width,it.height,it.depth),lt)if(w.layerUpdates.size>0){let et=Uc(it.width,it.height,w.format,w.type);for(let K of w.layerUpdates){let _t=it.data.subarray(K*et/it.data.BYTES_PER_ELEMENT,(K+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,pt,Lt,_t)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Lt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,it.width,it.height,it.depth,0,pt,Lt,it.data);else if(w.isData3DTexture)O?(st&&e.texStorage3D(i.TEXTURE_3D,bt,Et,it.width,it.height,it.depth),lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Lt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Et,it.width,it.height,it.depth,0,pt,Lt,it.data);else if(w.isFramebufferTexture){if(st)if(O)e.texStorage2D(i.TEXTURE_2D,bt,Et,it.width,it.height);else{let et=it.width,K=it.height;for(let _t=0;_t<bt;_t++)e.texImage2D(i.TEXTURE_2D,_t,Et,et,K,0,pt,Lt,null),et>>=1,K>>=1}}else if(Vt.length>0){if(O&&st){let et=Se(Vt[0]);e.texStorage2D(i.TEXTURE_2D,bt,Et,et.width,et.height)}for(let et=0,K=Vt.length;et<K;et++)ut=Vt[et],O?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,pt,Lt,ut):e.texImage2D(i.TEXTURE_2D,et,Et,pt,Lt,ut);w.generateMipmaps=!1}else if(O){if(st){let et=Se(it);e.texStorage2D(i.TEXTURE_2D,bt,Et,et.width,et.height)}lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Lt,it)}else e.texImage2D(i.TEXTURE_2D,0,Et,pt,Lt,it);m(w)&&p($),At.__version=Y.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Q(R,w,G){if(w.image.length!==6)return;let $=Zt(R,w),tt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let Y=n.get(tt);if(tt.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+G);let At=jt.getPrimaries(jt.workingColorSpace),ot=w.colorSpace===ii?null:jt.getPrimaries(w.colorSpace),Mt=w.colorSpace===ii||At===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let wt=w.isCompressedTexture||w.image[0].isCompressedTexture,it=w.image[0]&&w.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!wt&&!it?pt[K]=b(w.image[K],!0,s.maxCubemapSize):pt[K]=it?w.image[K].image:w.image[K],pt[K]=Pe(w,pt[K]);let Lt=pt[0],Et=r.convert(w.format,w.colorSpace),ut=r.convert(w.type),Vt=_(w.internalFormat,Et,ut,w.colorSpace),O=w.isVideoTexture!==!0,st=Y.__version===void 0||$===!0,lt=tt.dataReady,bt=T(w,Lt);rt(i.TEXTURE_CUBE_MAP,w);let et;if(wt){O&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Vt,Lt.width,Lt.height);for(let K=0;K<6;K++){et=pt[K].mipmaps;for(let _t=0;_t<et.length;_t++){let Ot=et[_t];w.format!==hn?Et!==null?O?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Ot.width,Ot.height,Et,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Vt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,0,0,Ot.width,Ot.height,Et,ut,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t,Vt,Ot.width,Ot.height,0,Et,ut,Ot.data)}}}else{if(et=w.mipmaps,O&&st){et.length>0&&bt++;let K=Se(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,Vt,K.width,K.height)}for(let K=0;K<6;K++)if(it){O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Et,ut,pt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,pt[K].width,pt[K].height,0,Et,ut,pt[K].data);for(let _t=0;_t<et.length;_t++){let ce=et[_t].image[K].image;O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,ce.width,ce.height,Et,ut,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Vt,ce.width,ce.height,0,Et,ut,ce.data)}}else{O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,ut,pt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Vt,Et,ut,pt[K]);for(let _t=0;_t<et.length;_t++){let Ot=et[_t];O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,0,0,Et,ut,Ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,_t+1,Vt,Et,ut,Ot.image[K])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function vt(R,w,G,$,tt,Y){let At=r.convert(G.format,G.colorSpace),ot=r.convert(G.type),Mt=_(G.internalFormat,At,ot,G.colorSpace),wt=n.get(w),it=n.get(G);if(it.__renderTarget=w,!wt.__hasExternalTextures){let pt=Math.max(1,w.width>>Y),Lt=Math.max(1,w.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,Mt,pt,Lt,w.depth,0,At,ot,null):e.texImage2D(tt,Y,Mt,pt,Lt,0,At,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,tt,it.__webglTexture,0,me(w)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,tt,it.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(R,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){let $=w.depthTexture,tt=$&&$.isDepthTexture?$.type:null,Y=y(w.stencilBuffer,tt),At=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=me(w);St(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Y,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Y,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Y,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,R)}else{let $=w.textures;for(let tt=0;tt<$.length;tt++){let Y=$[tt],At=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),Mt=_(Y.internalFormat,At,ot,Y.colorSpace),wt=me(w);G&&St(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,Mt,w.width,w.height):St(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,Mt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(w.depthTexture);$.__renderTarget=w,(!$.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);let tt=$.__webglTexture,Y=me(w);if(w.depthTexture.format===xs)St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(w.depthTexture.format===Bs)St(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function $t(R){let w=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){let tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=$}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let $=R.texture.mipmaps;$&&$.length>0?Ct(w.__webglFramebuffer[0],R):Ct(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=i.createRenderbuffer(),Bt(w.__webglDepthbuffer[$],R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else{let $=R.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Bt(w.__webglDepthbuffer,R,!1);else{let tt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(R,w,G){let $=n.get(R);w!==void 0&&vt($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&$t(R)}function F(R){let w=R.texture,G=n.get(R),$=n.get(w);R.addEventListener("dispose",C);let tt=R.textures,Y=R.isWebGLCubeRenderTarget===!0,At=tt.length>1;if(At||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=w.version,o.memory.textures++),Y){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)G.__webglFramebuffer[ot][Mt]=i.createFramebuffer()}else G.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<w.mipmaps.length;ot++)G.__webglFramebuffer[ot]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(At)for(let ot=0,Mt=tt.length;ot<Mt;ot++){let wt=n.get(tt[ot]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&St(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<tt.length;ot++){let Mt=tt[ot];G.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);let wt=r.convert(Mt.format,Mt.colorSpace),it=r.convert(Mt.type),pt=_(Mt.internalFormat,wt,it,Mt.colorSpace,R.isXRRenderTarget===!0),Lt=me(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),rt(i.TEXTURE_CUBE_MAP,w);for(let ot=0;ot<6;ot++)if(w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)vt(G.__webglFramebuffer[ot][Mt],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt);else vt(G.__webglFramebuffer[ot],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ot=0,Mt=tt.length;ot<Mt;ot++){let wt=tt[ot],it=n.get(wt),pt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,it.__webglTexture),rt(pt,wt),vt(G.__webglFramebuffer,R,wt,i.COLOR_ATTACHMENT0+ot,pt,0),m(wt)&&p(pt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,$.__webglTexture),rt(ot,w),w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)vt(G.__webglFramebuffer[Mt],R,w,i.COLOR_ATTACHMENT0,ot,Mt);else vt(G.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,ot,0);m(w)&&p(ot),e.unbindTexture()}R.depthBuffer&&$t(R)}function pe(R){let w=R.textures;for(let G=0,$=w.length;G<$;G++){let tt=w[G];if(m(tt)){let Y=v(R),At=n.get(tt).__webglTexture;e.bindTexture(Y,At),p(Y),e.unbindTexture()}}}let zt=[],Ft=[];function xt(R){if(R.samples>0){if(St(R)===!1){let w=R.textures,G=R.width,$=R.height,tt=i.COLOR_BUFFER_BIT,Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(R),ot=w.length>1;if(ot)for(let wt=0;wt<w.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer);let Mt=R.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let wt=0;wt<w.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);let it=n.get(w[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,tt,i.NEAREST),l===!0&&(zt.length=0,Ft.length=0,zt.push(i.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(zt.push(Y),Ft.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let wt=0;wt<w.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,At.__webglColorRenderbuffer[wt]);let it=n.get(w[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function me(R){return Math.min(s.maxSamples,R.samples)}function St(R){let w=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Gt(R){let w=o.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function Pe(R,w){let G=R.colorSpace,$=R.format,tt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Vi&&G!==ii&&(jt.getTransfer(G)===re?($!==hn||tt!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=z,this.setTexture2DArray=D,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=St}function Zg(i,t){function e(n,s=ii){let r,o=jt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mc)return i.BYTE;if(n===wc)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===ga)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Cc)return i.RGB;if(n===hn)return i.RGBA;if(n===xs)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===_a)return i.RED_INTEGER;if(n===Rc)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===zr||n===kr||n===Vr||n===Hr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===wa||n===Ea||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ca||n===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ca)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ra)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Pa||n===La||n===Fa||n===Na||n===Da||n===Ba||n===Ua||n===Oa||n===za||n===ka||n===Va||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ba)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===qa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===$a||n===Za||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Tr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xn({vertexShader:jg,fragmentShader:Jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jc=class extends Kn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,b=typeof XRWebGLBinding<"u",m=new jc,p={},v=e.getContextAttributes(),_=null,y=null,T=[],E=[],C=new Tt,I=null,M=new De;M.viewport=new se;let x=new De;x.viewport=new se;let P=[M,x],B=new ea,L=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=T[Z];return Q===void 0&&(Q=new As,T[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=T[Z];return Q===void 0&&(Q=new As,T[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=T[Z];return Q===void 0&&(Q=new As,T[Z]=Q),Q.getHandSpace()};function z(Z){let Q=E.indexOf(Z.inputSource);if(Q===-1)return;let vt=T[Q];vt!==void 0&&(vt.update(Z.inputSource,Z.frame,c||o),vt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",J);for(let Z=0;Z<T.length;Z++){let Q=E[Z];Q!==null&&(E[Z]=null,T[Z].disconnect(Q))}L=null,U=null,m.reset();for(let Z in p)delete p[Z];t.setRenderTarget(_),f=null,u=null,d=null,s=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",D),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Bt=null,Ct=null;v.depth&&(Ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=v.stencil?Bs:xs,Bt=v.stencil?Ds:Ei);let $t={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new In(u.textureWidth,u.textureHeight,{format:hn,type:wn,depthTexture:new Er(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new In(f.framebufferWidth,f.framebufferHeight,{format:hn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Z){for(let Q=0;Q<Z.removed.length;Q++){let vt=Z.removed[Q],Bt=E.indexOf(vt);Bt>=0&&(E[Bt]=null,T[Bt].disconnect(vt))}for(let Q=0;Q<Z.added.length;Q++){let vt=Z.added[Q],Bt=E.indexOf(vt);if(Bt===-1){for(let $t=0;$t<T.length;$t++)if($t>=E.length){E.push(vt),Bt=$t;break}else if(E[$t]===null){E[$t]=vt,Bt=$t;break}if(Bt===-1)break}let Ct=T[Bt];Ct&&Ct.connect(vt)}}let H=new N,j=new N;function at(Z,Q,vt){H.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let Bt=H.distanceTo(j),Ct=Q.projectionMatrix.elements,$t=vt.projectionMatrix.elements,Oe=Ct[14]/(Ct[10]-1),F=Ct[14]/(Ct[10]+1),pe=(Ct[9]+1)/Ct[5],zt=(Ct[9]-1)/Ct[5],Ft=(Ct[8]-1)/Ct[0],xt=($t[8]+1)/$t[0],me=Oe*Ft,St=Oe*xt,Gt=Bt/(-Ft+xt),Pe=Gt*-Ft;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Pe),Z.translateZ(Gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ct[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Se=Oe+Gt,R=F+Gt,w=me-Pe,G=St+(Bt-Pe),$=pe*F/R*Se,tt=zt*F/R*Se;Z.projectionMatrix.makePerspective(w,G,$,tt,Se,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ft(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,vt=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),B.near=x.near=M.near=Q,B.far=x.far=M.far=vt,(L!==B.near||U!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,U=B.far),B.layers.mask=Z.layers.mask|6,M.layers.mask=B.layers.mask&3,x.layers.mask=B.layers.mask&5;let Bt=Z.parent,Ct=B.cameras;ft(B,Bt);for(let $t=0;$t<Ct.length;$t++)ft(Ct[$t],Bt);Ct.length===2?at(B,M,x):B.projectionMatrix.copy(M.projectionMatrix),rt(Z,B,Bt)};function rt(Z,Q,vt){vt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(vt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ss*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let Zt=null;function ne(Z,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Bt=!1;vt.length!==B.cameras.length&&(B.cameras.length=0,Bt=!0);for(let F=0;F<vt.length;F++){let pe=vt[F],zt=null;if(f!==null)zt=f.getViewport(pe);else{let xt=d.getViewSubImage(u,pe);zt=xt.viewport,F===0&&(t.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(y))}let Ft=P[F];Ft===void 0&&(Ft=new De,Ft.layers.enable(F),Ft.viewport=new se,P[F]=Ft),Ft.matrix.fromArray(pe.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(pe.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(zt.x,zt.y,zt.width,zt.height),F===0&&(B.matrix.copy(Ft.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Bt===!0&&B.cameras.push(Ft)}let Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let F=d.getDepthInformation(vt[0]);F&&F.isValid&&F.texture&&m.init(F,s.renderState)}if(Ct&&Ct.includes("camera-access")&&b){t.state.unbindTexture(),d=n.getBinding();for(let F=0;F<vt.length;F++){let pe=vt[F].camera;if(pe){let zt=p[pe];zt||(zt=new Tr,p[pe]=zt);let Ft=d.getCameraImage(pe);zt.sourceTexture=Ft}}}}for(let vt=0;vt<T.length;vt++){let Bt=E[vt],Ct=T[vt];Bt!==null&&Ct!==void 0&&Ct.update(Bt,Q,c||o)}Zt&&Zt(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Yt=new Ad;Yt.setAnimationLoop(ne),this.setAnimationLoop=function(Z){Zt=Z},this.dispose=function(){}}},Zi=new an,Kg=new ae;function Qg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(Zi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tb(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function c(v,_){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));let T=_.program;n.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){let _=d();v.__bindingPointIndex=_;let y=i.createBuffer(),T=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let _=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,C=y.length;E<C;E++){let I=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,x=I.length;M<x;M++){let P=I[M];if(f(P,E,M,T)===!0){let B=P.__offset,L=Array.isArray(P.value)?P.value:[P.value],U=0;for(let z=0;z<L.length;z++){let D=L[z],J=b(D);typeof D=="number"||typeof D=="boolean"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,B+U,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=0,P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=0,P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=0):(D.toArray(P.__data,U),U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,_,y,T){let E=v.value,C=_+"_"+y;if(T[C]===void 0)return typeof E=="number"||typeof E=="boolean"?T[C]=E:T[C]=E.clone(),!0;{let I=T[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return T[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(v){let _=v.uniforms,y=0,T=16;for(let C=0,I=_.length;C<I;C++){let M=Array.isArray(_[C])?_[C]:[_[C]];for(let x=0,P=M.length;x<P;x++){let B=M[x],L=Array.isArray(B.value)?B.value:[B.value];for(let U=0,z=L.length;U<z;U++){let D=L[U],J=b(D),H=y%T,j=H%J.boundary,at=H+j;y+=j,at!==0&&T-at<J.storage&&(y+=T-at),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=J.storage}}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function b(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var el=class{constructor(t={}){let{canvas:e=Ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),b=new Int32Array(4),m=null,p=null,v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=_e;let E=0,C=0,I=null,M=-1,x=null,P=new se,B=new se,L=null,U=new Ut(0),z=0,D=e.width,J=e.height,H=1,j=null,at=null,ft=new se(0,0,D,J),rt=new se(0,0,D,J),Zt=!1,ne=new Cs,Yt=!1,Z=!1,Q=new ae,vt=new N,Bt=new se,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function Oe(){return I===null?H:1}let F=n;function pe(A,k){return e.getContext(A,k)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${na}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",et,!1),F===null){let k="webgl2";if(F=pe(k,A),F===null)throw pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let zt,Ft,xt,me,St,Gt,Pe,Se,R,w,G,$,tt,Y,At,ot,Mt,wt,it,pt,Lt,Et,ut,Vt;function O(){zt=new v1(F),zt.init(),Et=new Zg(F,zt),Ft=new u1(F,zt,t,Et),xt=new Yg(F,zt),Ft.reversedDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),me=new x1(F),St=new Ng,Gt=new $g(F,zt,xt,St,Ft,Et,me),Pe=new f1(y),Se=new b1(y),R=new Ap(F),ut=new c1(F,R),w=new y1(F,R,me,ut),G=new M1(F,w,R,me),it=new S1(F,Ft,Gt),ot=new d1(St),$=new Fg(y,Pe,Se,zt,Ft,ut,ot),tt=new Qg(y,St),Y=new Bg,At=new Hg(zt),wt=new l1(y,Pe,Se,xt,G,f,l),Mt=new qg(y,G,Ft),Vt=new tb(F,me,Ft,xt),pt=new h1(F,zt,me),Lt=new _1(F,zt,me),me.programs=$.programs,y.capabilities=Ft,y.extensions=zt,y.properties=St,y.renderLists=Y,y.shadowMap=Mt,y.state=xt,y.info=me}O();let st=new Jc(y,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=zt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=zt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(D,J,!1))},this.getSize=function(A){return A.set(D,J)},this.setSize=function(A,k,q=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,J=k,e.width=Math.floor(A*H),e.height=Math.floor(k*H),q===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(D*H,J*H).floor()},this.setDrawingBufferSize=function(A,k,q){D=A,J=k,H=q,e.width=Math.floor(A*q),e.height=Math.floor(k*q),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ft)},this.setViewport=function(A,k,q,X){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,k,q,X),xt.viewport(P.copy(ft).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(rt)},this.setScissor=function(A,k,q,X){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,k,q,X),xt.scissor(B.copy(rt).multiplyScalar(H).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(A){xt.setScissorTest(Zt=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){at=A},this.getClearColor=function(A){return A.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,q=!0){let X=0;if(A){let V=!1;if(I!==null){let nt=I.texture.format;V=nt===Sa||nt===xa||nt===_a}if(V){let nt=I.texture.type,dt=nt===wn||nt===Ei||nt===Fs||nt===Ds||nt===ba||nt===va,yt=wt.getClearColor(),gt=wt.getClearAlpha(),Pt=yt.r,Nt=yt.g,Rt=yt.b;dt?(g[0]=Pt,g[1]=Nt,g[2]=Rt,g[3]=gt,F.clearBufferuiv(F.COLOR,0,g)):(b[0]=Pt,b[1]=Nt,b[2]=Rt,b[3]=gt,F.clearBufferiv(F.COLOR,0,b))}else X|=F.COLOR_BUFFER_BIT}k&&(X|=F.DEPTH_BUFFER_BIT),q&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),wt.dispose(),Y.dispose(),At.dispose(),St.dispose(),Pe.dispose(),Se.dispose(),G.dispose(),ut.dispose(),Vt.dispose(),$.dispose(),st.dispose(),st.removeEventListener("sessionstart",Rn),st.removeEventListener("sessionend",Lh),Fi.stop()};function lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=me.autoReset,k=Mt.enabled,q=Mt.autoUpdate,X=Mt.needsUpdate,V=Mt.type;O(),me.autoReset=A,Mt.enabled=k,Mt.autoUpdate=q,Mt.needsUpdate=X,Mt.type=V}function et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function K(A){let k=A.target;k.removeEventListener("dispose",K),_t(k)}function _t(A){Ot(A),St.remove(A)}function Ot(A){let k=St.get(A).programs;k!==void 0&&(k.forEach(function(q){$.releaseProgram(q)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,q,X,V,nt){k===null&&(k=Ct);let dt=V.isMesh&&V.matrixWorld.determinant()<0,yt=Af(A,k,q,X,V);xt.setMaterial(X,dt);let gt=q.index,Pt=1;if(X.wireframe===!0){if(gt=w.getWireframeAttribute(q),gt===void 0)return;Pt=2}let Nt=q.drawRange,Rt=q.attributes.position,Xt=Nt.start*Pt,oe=(Nt.start+Nt.count)*Pt;nt!==null&&(Xt=Math.max(Xt,nt.start*Pt),oe=Math.min(oe,(nt.start+nt.count)*Pt)),gt!==null?(Xt=Math.max(Xt,0),oe=Math.min(oe,gt.count)):Rt!=null&&(Xt=Math.max(Xt,0),oe=Math.min(oe,Rt.count));let ye=oe-Xt;if(ye<0||ye===1/0)return;ut.setup(V,X,yt,q,gt);let he,le=pt;if(gt!==null&&(he=R.get(gt),le=Lt,le.setIndex(he)),V.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*Oe()),le.setMode(F.LINES)):le.setMode(F.TRIANGLES);else if(V.isLine){let It=X.linewidth;It===void 0&&(It=1),xt.setLineWidth(It*Oe()),V.isLineSegments?le.setMode(F.LINES):V.isLineLoop?le.setMode(F.LINE_LOOP):le.setMode(F.LINE_STRIP)}else V.isPoints?le.setMode(F.POINTS):V.isSprite&&le.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ms("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))le.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let It=V._multiDrawStarts,be=V._multiDrawCounts,Jt=V._multiDrawCount,Ze=gt?R.get(gt).bytesPerElement:1,es=St.get(X).currentProgram.getUniforms();for(let je=0;je<Jt;je++)es.setValue(F,"_gl_DrawID",je),le.render(It[je]/Ze,be[je])}else if(V.isInstancedMesh)le.renderInstances(Xt,ye,V.count);else if(q.isInstancedBufferGeometry){let It=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,It);le.renderInstances(Xt,ye,be)}else le.render(Xt,ye)};function ce(A,k,q){A.transparent===!0&&A.side===Ye&&A.forceSinglePass===!1?(A.side=Be,A.needsUpdate=!0,io(A,k,q),A.side=jn,A.needsUpdate=!0,io(A,k,q),A.side=Ye):io(A,k,q)}this.compile=function(A,k,q=null){q===null&&(q=A),p=At.get(q),p.init(k),_.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let X=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let nt=V.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){let yt=nt[dt];ce(yt,q,V),X.add(yt)}else ce(nt,q,V),X.add(nt)}),p=_.pop(),X},this.compileAsync=function(A,k,q=null){let X=this.compile(A,k,q);return new Promise(V=>{function nt(){if(X.forEach(function(dt){St.get(dt).currentProgram.isReady()&&X.delete(dt)}),X.size===0){V(A);return}setTimeout(nt,10)}zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Qt=null;function Vn(A){Qt&&Qt(A)}function Rn(){Fi.stop()}function Lh(){Fi.start()}let Fi=new Ad;Fi.setAnimationLoop(Vn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(A){Qt=A,st.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},st.addEventListener("sessionstart",Rn),st.addEventListener("sessionend",Lh),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(k),k=st.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,k,I),p=At.get(A,_.length),p.init(k),_.push(p),Q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(Q,vn,k.reversedDepth),Z=this.localClippingEnabled,Yt=ot.init(this.clippingPlanes,Z),m=Y.get(A,v.length),m.init(),v.push(m),st.enabled===!0&&st.isPresenting===!0){let nt=y.xr.getDepthSensingMesh();nt!==null&&Ul(nt,k,-1/0,y.sortObjects)}Ul(A,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(j,at),$t=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,$t&&wt.addToRenderList(m,A),this.info.render.frame++,Yt===!0&&ot.beginShadows();let q=p.state.shadowsArray;Mt.render(q,A,k),Yt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,V=m.transmissive;if(p.setupLights(),k.isArrayCamera){let nt=k.cameras;if(V.length>0)for(let dt=0,yt=nt.length;dt<yt;dt++){let gt=nt[dt];Nh(X,V,A,gt)}$t&&wt.render(A);for(let dt=0,yt=nt.length;dt<yt;dt++){let gt=nt[dt];Fh(m,A,gt,gt.viewport)}}else V.length>0&&Nh(X,V,A,k),$t&&wt.render(A),Fh(m,A,k);I!==null&&C===0&&(Gt.updateMultisampleRenderTarget(I),Gt.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,k),ut.resetDefaultState(),M=-1,x=null,_.pop(),_.length>0?(p=_[_.length-1],Yt===!0&&ot.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ul(A,k,q,X){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){X&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);let dt=G.update(A),yt=A.material;yt.visible&&m.push(A,dt,yt,q,Bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){let dt=G.update(A),yt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Bt.copy(dt.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(yt)){let gt=dt.groups;for(let Pt=0,Nt=gt.length;Pt<Nt;Pt++){let Rt=gt[Pt],Xt=yt[Rt.materialIndex];Xt&&Xt.visible&&m.push(A,dt,Xt,q,Bt.z,Rt)}}else yt.visible&&m.push(A,dt,yt,q,Bt.z,null)}}let nt=A.children;for(let dt=0,yt=nt.length;dt<yt;dt++)Ul(nt[dt],k,q,X)}function Fh(A,k,q,X){let V=A.opaque,nt=A.transmissive,dt=A.transparent;p.setupLightsView(q),Yt===!0&&ot.setGlobalState(y.clippingPlanes,q),X&&xt.viewport(P.copy(X)),V.length>0&&no(V,k,q),nt.length>0&&no(nt,k,q),dt.length>0&&no(dt,k,q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Nh(A,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new In(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Ns:wn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let nt=p.state.transmissionRenderTarget[X.id],dt=X.viewport||P;nt.setSize(dt.z*y.transmissionResolutionScale,dt.w*y.transmissionResolutionScale);let yt=y.getRenderTarget(),gt=y.getActiveCubeFace(),Pt=y.getActiveMipmapLevel();y.setRenderTarget(nt),y.getClearColor(U),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),$t&&wt.render(q);let Nt=y.toneMapping;y.toneMapping=ni;let Rt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Yt===!0&&ot.setGlobalState(y.clippingPlanes,X),no(A,q,X),Gt.updateMultisampleRenderTarget(nt),Gt.updateRenderTargetMipmap(nt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let oe=0,ye=k.length;oe<ye;oe++){let he=k[oe],le=he.object,It=he.geometry,be=he.material,Jt=he.group;if(be.side===Ye&&le.layers.test(X.layers)){let Ze=be.side;be.side=Be,be.needsUpdate=!0,Dh(le,q,X,It,be,Jt),be.side=Ze,be.needsUpdate=!0,Xt=!0}}Xt===!0&&(Gt.updateMultisampleRenderTarget(nt),Gt.updateRenderTargetMipmap(nt))}y.setRenderTarget(yt,gt,Pt),y.setClearColor(U,z),Rt!==void 0&&(X.viewport=Rt),y.toneMapping=Nt}function no(A,k,q){let X=k.isScene===!0?k.overrideMaterial:null;for(let V=0,nt=A.length;V<nt;V++){let dt=A[V],yt=dt.object,gt=dt.geometry,Pt=dt.group,Nt=dt.material;Nt.allowOverride===!0&&X!==null&&(Nt=X),yt.layers.test(q.layers)&&Dh(yt,k,q,gt,Nt,Pt)}}function Dh(A,k,q,X,V,nt){A.onBeforeRender(y,k,q,X,V,nt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,k,q,X,A,nt),V.transparent===!0&&V.side===Ye&&V.forceSinglePass===!1?(V.side=Be,V.needsUpdate=!0,y.renderBufferDirect(q,k,X,V,A,nt),V.side=jn,V.needsUpdate=!0,y.renderBufferDirect(q,k,X,V,A,nt),V.side=Ye):y.renderBufferDirect(q,k,X,V,A,nt),A.onAfterRender(y,k,q,X,V,nt)}function io(A,k,q){k.isScene!==!0&&(k=Ct);let X=St.get(A),V=p.state.lights,nt=p.state.shadowsArray,dt=V.state.version,yt=$.getParameters(A,V.state,nt,k,q),gt=$.getProgramCacheKey(yt),Pt=X.programs;X.environment=A.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(A.isMeshStandardMaterial?Se:Pe).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Pt===void 0&&(A.addEventListener("dispose",K),Pt=new Map,X.programs=Pt);let Nt=Pt.get(gt);if(Nt!==void 0){if(X.currentProgram===Nt&&X.lightsStateVersion===dt)return Uh(A,yt),Nt}else yt.uniforms=$.getUniforms(A),A.onBeforeCompile(yt,y),Nt=$.acquireProgram(yt,gt),Pt.set(gt,Nt),X.uniforms=yt.uniforms;let Rt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),Uh(A,yt),X.needsLights=Rf(A),X.lightsStateVersion=dt,X.needsLights&&(Rt.ambientLightColor.value=V.state.ambient,Rt.lightProbe.value=V.state.probe,Rt.directionalLights.value=V.state.directional,Rt.directionalLightShadows.value=V.state.directionalShadow,Rt.spotLights.value=V.state.spot,Rt.spotLightShadows.value=V.state.spotShadow,Rt.rectAreaLights.value=V.state.rectArea,Rt.ltc_1.value=V.state.rectAreaLTC1,Rt.ltc_2.value=V.state.rectAreaLTC2,Rt.pointLights.value=V.state.point,Rt.pointLightShadows.value=V.state.pointShadow,Rt.hemisphereLights.value=V.state.hemi,Rt.directionalShadowMap.value=V.state.directionalShadowMap,Rt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Rt.spotShadowMap.value=V.state.spotShadowMap,Rt.spotLightMatrix.value=V.state.spotLightMatrix,Rt.spotLightMap.value=V.state.spotLightMap,Rt.pointShadowMap.value=V.state.pointShadowMap,Rt.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Nt,X.uniformsList=null,Nt}function Bh(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=zs.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Uh(A,k){let q=St.get(A);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Af(A,k,q,X,V){k.isScene!==!0&&(k=Ct),Gt.resetTextureUnits();let nt=k.fog,dt=X.isMeshStandardMaterial?k.environment:null,yt=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vi,gt=(X.isMeshStandardMaterial?Se:Pe).get(X.envMap||dt),Pt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Nt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Rt=!!q.morphAttributes.position,Xt=!!q.morphAttributes.normal,oe=!!q.morphAttributes.color,ye=ni;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=y.toneMapping);let he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=he!==void 0?he.length:0,It=St.get(X),be=p.state.lights;if(Yt===!0&&(Z===!0||A!==x)){let Ge=A===x&&X.id===M;ot.setState(X,A,Ge)}let Jt=!1;X.version===It.__version?(It.needsLights&&It.lightsStateVersion!==be.state.version||It.outputColorSpace!==yt||V.isBatchedMesh&&It.batching===!1||!V.isBatchedMesh&&It.batching===!0||V.isBatchedMesh&&It.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&It.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&It.instancing===!1||!V.isInstancedMesh&&It.instancing===!0||V.isSkinnedMesh&&It.skinning===!1||!V.isSkinnedMesh&&It.skinning===!0||V.isInstancedMesh&&It.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&It.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&It.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&It.instancingMorph===!1&&V.morphTexture!==null||It.envMap!==gt||X.fog===!0&&It.fog!==nt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ot.numPlanes||It.numIntersection!==ot.numIntersection)||It.vertexAlphas!==Pt||It.vertexTangents!==Nt||It.morphTargets!==Rt||It.morphNormals!==Xt||It.morphColors!==oe||It.toneMapping!==ye||It.morphTargetsCount!==le)&&(Jt=!0):(Jt=!0,It.__version=X.version);let Ze=It.currentProgram;Jt===!0&&(Ze=io(X,k,V));let es=!1,je=!1,Qs=!1,ve=Ze.getUniforms(),nn=It.uniforms;if(xt.useProgram(Ze.program)&&(es=!0,je=!0,Qs=!0),X.id!==M&&(M=X.id,je=!0),es||x!==A){xt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ve.setValue(F,"projectionMatrix",A.projectionMatrix),ve.setValue(F,"viewMatrix",A.matrixWorldInverse);let qe=ve.map.cameraPosition;qe!==void 0&&qe.setValue(F,vt.setFromMatrixPosition(A.matrixWorld)),Ft.logarithmicDepthBuffer&&ve.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,je=!0,Qs=!0)}if(V.isSkinnedMesh){ve.setOptional(F,V,"bindMatrix"),ve.setOptional(F,V,"bindMatrixInverse");let Ge=V.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ve.setValue(F,"boneTexture",Ge.boneTexture,Gt))}V.isBatchedMesh&&(ve.setOptional(F,V,"batchingTexture"),ve.setValue(F,"batchingTexture",V._matricesTexture,Gt),ve.setOptional(F,V,"batchingIdTexture"),ve.setValue(F,"batchingIdTexture",V._indirectTexture,Gt),ve.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&ve.setValue(F,"batchingColorTexture",V._colorsTexture,Gt));let sn=q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&it.update(V,q,Ze),(je||It.receiveShadow!==V.receiveShadow)&&(It.receiveShadow=V.receiveShadow,ve.setValue(F,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(nn.envMap.value=gt,nn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(nn.envMapIntensity.value=k.environmentIntensity),je&&(ve.setValue(F,"toneMappingExposure",y.toneMappingExposure),It.needsLights&&Cf(nn,Qs),nt&&X.fog===!0&&tt.refreshFogUniforms(nn,nt),tt.refreshMaterialUniforms(nn,X,H,J,p.state.transmissionRenderTarget[A.id]),zs.upload(F,Bh(It),nn,Gt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(zs.upload(F,Bh(It),nn,Gt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(F,"center",V.center),ve.setValue(F,"modelViewMatrix",V.modelViewMatrix),ve.setValue(F,"normalMatrix",V.normalMatrix),ve.setValue(F,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Ge=X.uniformsGroups;for(let qe=0,Ol=Ge.length;qe<Ol;qe++){let Ni=Ge[qe];Vt.update(Ni,Ze),Vt.bind(Ni,Ze)}}return Ze}function Cf(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Rf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,k,q){let X=St.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),St.get(A.texture).__webglTexture=k,St.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let q=St.get(A);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};let If=F.createFramebuffer();this.setRenderTarget=function(A,k=0,q=0){I=A,E=k,C=q;let X=!0,V=null,nt=!1,dt=!1;if(A){let gt=St.get(A);if(gt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(gt.__webglFramebuffer===void 0)Gt.setupRenderTarget(A);else if(gt.__hasExternalTextures)Gt.rebindTextures(A,St.get(A.texture).__webglTexture,St.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Rt=A.depthTexture;if(gt.__boundDepthTexture!==Rt){if(Rt!==null&&St.has(Rt)&&(A.width!==Rt.image.width||A.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(A)}}let Pt=A.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(dt=!0);let Nt=St.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?V=Nt[k][q]:V=Nt[k],nt=!0):A.samples>0&&Gt.useMultisampledRTT(A)===!1?V=St.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[q]:V=Nt,P.copy(A.viewport),B.copy(A.scissor),L=A.scissorTest}else P.copy(ft).multiplyScalar(H).floor(),B.copy(rt).multiplyScalar(H).floor(),L=Zt;if(q!==0&&(V=If),xt.bindFramebuffer(F.FRAMEBUFFER,V)&&X&&xt.drawBuffers(A,V),xt.viewport(P),xt.scissor(B),xt.setScissorTest(L),nt){let gt=St.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,gt.__webglTexture,q)}else if(dt){let gt=k;for(let Pt=0;Pt<A.textures.length;Pt++){let Nt=St.get(A.textures[Pt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pt,Nt.__webglTexture,q,gt)}}else if(A!==null&&q!==0){let gt=St.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gt.__webglTexture,q)}M=-1},this.readRenderTargetPixels=function(A,k,q,X,V,nt,dt,yt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(gt=gt[dt]),gt){xt.bindFramebuffer(F.FRAMEBUFFER,gt);try{let Pt=A.textures[yt],Nt=Pt.format,Rt=Pt.type;if(!Ft.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-X&&q>=0&&q<=A.height-V&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt),F.readPixels(k,q,X,V,Et.convert(Nt),Et.convert(Rt),nt))}finally{let Pt=I!==null?St.get(I).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(A,k,q,X,V,nt,dt,yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&dt!==void 0&&(gt=gt[dt]),gt)if(k>=0&&k<=A.width-X&&q>=0&&q<=A.height-V){xt.bindFramebuffer(F.FRAMEBUFFER,gt);let Pt=A.textures[yt],Nt=Pt.format,Rt=Pt.type;if(!Ft.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.bufferData(F.PIXEL_PACK_BUFFER,nt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt),F.readPixels(k,q,X,V,Et.convert(Nt),Et.convert(Rt),0);let oe=I!==null?St.get(I).__webglFramebuffer:null;xt.bindFramebuffer(F.FRAMEBUFFER,oe);let ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qu(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,nt),F.deleteBuffer(Xt),F.deleteSync(ye),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,q=0){let X=Math.pow(2,-q),V=Math.floor(A.image.width*X),nt=Math.floor(A.image.height*X),dt=k!==null?k.x:0,yt=k!==null?k.y:0;Gt.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,dt,yt,V,nt),xt.unbindTexture()};let Pf=F.createFramebuffer(),Lf=F.createFramebuffer();this.copyTextureToTexture=function(A,k,q=null,X=null,V=0,nt=null){nt===null&&(V!==0?(Ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=V,V=0):nt=0);let dt,yt,gt,Pt,Nt,Rt,Xt,oe,ye,he=A.isCompressedTexture?A.mipmaps[nt]:A.image;if(q!==null)dt=q.max.x-q.min.x,yt=q.max.y-q.min.y,gt=q.isBox3?q.max.z-q.min.z:1,Pt=q.min.x,Nt=q.min.y,Rt=q.isBox3?q.min.z:0;else{let sn=Math.pow(2,-V);dt=Math.floor(he.width*sn),yt=Math.floor(he.height*sn),A.isDataArrayTexture?gt=he.depth:A.isData3DTexture?gt=Math.floor(he.depth*sn):gt=1,Pt=0,Nt=0,Rt=0}X!==null?(Xt=X.x,oe=X.y,ye=X.z):(Xt=0,oe=0,ye=0);let le=Et.convert(k.format),It=Et.convert(k.type),be;k.isData3DTexture?(Gt.setTexture3D(k,0),be=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Gt.setTexture2DArray(k,0),be=F.TEXTURE_2D_ARRAY):(Gt.setTexture2D(k,0),be=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);let Jt=F.getParameter(F.UNPACK_ROW_LENGTH),Ze=F.getParameter(F.UNPACK_IMAGE_HEIGHT),es=F.getParameter(F.UNPACK_SKIP_PIXELS),je=F.getParameter(F.UNPACK_SKIP_ROWS),Qs=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Pt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Nt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt);let ve=A.isDataArrayTexture||A.isData3DTexture,nn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let sn=St.get(A),Ge=St.get(k),qe=St.get(sn.__renderTarget),Ol=St.get(Ge.__renderTarget);xt.bindFramebuffer(F.READ_FRAMEBUFFER,qe.__webglFramebuffer),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ol.__webglFramebuffer);for(let Ni=0;Ni<gt;Ni++)ve&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.get(A).__webglTexture,V,Rt+Ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.get(k).__webglTexture,nt,ye+Ni)),F.blitFramebuffer(Pt,Nt,dt,yt,Xt,oe,dt,yt,F.DEPTH_BUFFER_BIT,F.NEAREST);xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||St.has(A)){let sn=St.get(A),Ge=St.get(k);xt.bindFramebuffer(F.READ_FRAMEBUFFER,Pf),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Lf);for(let qe=0;qe<gt;qe++)ve?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,V,Rt+qe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,V),nn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,nt,ye+qe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ge.__webglTexture,nt),V!==0?F.blitFramebuffer(Pt,Nt,dt,yt,Xt,oe,dt,yt,F.COLOR_BUFFER_BIT,F.NEAREST):nn?F.copyTexSubImage3D(be,nt,Xt,oe,ye+qe,Pt,Nt,dt,yt):F.copyTexSubImage2D(be,nt,Xt,oe,Pt,Nt,dt,yt);xt.bindFramebuffer(F.READ_FRAMEBUFFER,null),xt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else nn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(be,nt,Xt,oe,ye,dt,yt,gt,le,It,he.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(be,nt,Xt,oe,ye,dt,yt,gt,le,he.data):F.texSubImage3D(be,nt,Xt,oe,ye,dt,yt,gt,le,It,he):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,nt,Xt,oe,dt,yt,le,It,he.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,nt,Xt,oe,he.width,he.height,le,he.data):F.texSubImage2D(F.TEXTURE_2D,nt,Xt,oe,dt,yt,le,It,he);F.pixelStorei(F.UNPACK_ROW_LENGTH,Jt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ze),F.pixelStorei(F.UNPACK_SKIP_PIXELS,es),F.pixelStorei(F.UNPACK_SKIP_ROWS,je),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qs),nt===0&&k.generateMipmaps&&F.generateMipmap(be),xt.unbindTexture()},this.initRenderTarget=function(A){St.get(A).__webglFramebuffer===void 0&&Gt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Gt.setTextureCube(A,0):A.isData3DTexture?Gt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Gt.setTexture2DArray(A,0):Gt.setTexture2D(A,0),xt.unbindTexture()},this.resetState=function(){E=0,C=0,I=null,xt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var Ld=[{id:1,theme:"kitchen",massScale:1,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.05,2.6,0]}],objects:[{t:3,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:12,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:3,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:3,s:[1,1,1],table:1}]},{id:2,theme:"living",massScale:1.041,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[5.5,2.9,0]}],objects:[{t:41,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:41,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1}]},{id:3,theme:"bedroom",massScale:1.082,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.05,2.6,0]}],objects:[{t:3,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:3,s:[1,.85,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:3,s:[1,.85,1],table:1},{t:1,s:[1,.85,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:3,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:3,s:[.8,.85,.8],table:1}]},{id:4,theme:"balcony",massScale:1.122,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.2,2.6,0]}],objects:[{t:41,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:41,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:3,s:[.9,.85,.9],table:1}]},{id:5,theme:"bathroom",massScale:1.163,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,3.2,0]}],objects:[{t:41,s:[1,.85,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:3,s:[.9,.85,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:3,s:[1,1.1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:41,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:1,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1,.9],table:1}]},{id:6,theme:"kitchen",massScale:1.204,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,3.2,0]}],objects:[{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:52,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:12,s:[1,1,1],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:41,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1}]},{id:7,theme:"living",massScale:1.245,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,3.2,0]}],objects:[{t:51,s:[1,.85,1],table:1},{t:41,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:52,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[1,1,1],table:1},{t:12,s:[1,1,1],table:1},{t:51,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1}]},{id:8,theme:"bedroom",massScale:1.286,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[5.5,2.9,0]}],objects:[{t:51,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:3,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1}]},{id:9,theme:"balcony",massScale:1.327,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[8.1,2.9,0]}],objects:[{t:51,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:52,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:1,s:[.8,1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:1,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1}]},{id:10,theme:"bathroom",massScale:1.367,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[5.5,2.9,0]}],objects:[{t:51,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:41,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1}]},{id:11,theme:"kitchen",massScale:1.408,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[5.5,2.9,0]}],objects:[{t:51,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:1,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1}]},{id:12,theme:"living",massScale:1.449,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[8.1,2.9,0]}],objects:[{t:51,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:52,s:[1,.85,1],table:1},{t:12,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:51,s:[.8,.85,.8],table:1},{t:41,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1}]},{id:13,theme:"bedroom",massScale:1.49,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.8,2.9,0]}],objects:[{t:51,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:12,s:[1,1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:41,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:1,s:[.9,1,.9],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.9,1,.9],table:1},{t:1,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:51,s:[1,1,1],table:1}]},{id:14,theme:"balcony",massScale:1.531,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,3.2,0]}],objects:[{t:51,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:52,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:11,s:[1,1.1,1],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:41,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1}]},{id:15,theme:"bathroom",massScale:1.571,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[8.1,4.2,0]}],objects:[{t:51,s:[.8,1,.8],table:1},{t:3,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:11,s:[1,1.1,1],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[1,.85,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:41,s:[.8,.85,.8],table:1},{t:51,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:3,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:51,s:[1,1.1,1],table:1},{t:11,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1}]},{id:16,theme:"kitchen",massScale:1.612,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[5.5,4.2,0]}],objects:[{t:51,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:12,s:[1,.85,1],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:52,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:14,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:51,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:52,s:[.8,.85,.8],table:1}]},{id:17,theme:"living",massScale:1.653,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[5.5,4.2,0]}],objects:[{t:51,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:12,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[.9,1,.9],table:1},{t:1,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.8,.85,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1}]},{id:18,theme:"bedroom",massScale:1.694,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.05,3.75,0]}],objects:[{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:52,s:[1,1.1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:51,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:52,s:[1,.85,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:11,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1}]},{id:19,theme:"balcony",massScale:1.735,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.1,4.65,0]}],objects:[{t:51,s:[.8,1,.8],table:1},{t:41,s:[.9,1,.9],table:1},{t:1,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:41,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:41,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:51,s:[1,1.1,1],table:1},{t:41,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:52,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:41,s:[.9,.85,.9],table:1},{t:1,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1}]},{id:20,theme:"bathroom",massScale:1.776,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.8,4.2,0]}],objects:[{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:52,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:52,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1}]},{id:21,theme:"kitchen",massScale:1.816,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.1,4.65,0]}],objects:[{t:51,s:[.9,1,.9],table:1},{t:1,s:[.9,1,.9],table:1},{t:41,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:1,s:[1,1,1],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:3,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:51,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:52,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1}]},{id:22,theme:"living",massScale:1.857,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,4.65,0]}],objects:[{t:51,s:[.9,1.1,.9],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:14,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:14,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:51,s:[.8,1,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1}]},{id:23,theme:"bedroom",massScale:1.898,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.05,3.75,0]}],objects:[{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:51,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:1,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:14,s:[.8,1.1,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:41,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1}]},{id:24,theme:"balcony",massScale:1.939,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[9,4.65,0]}],objects:[{t:51,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:52,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:41,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,1,1],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:3,s:[.9,1.1,.9],table:1}]},{id:25,theme:"bathroom",massScale:1.98,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.05,3.75,0]}],objects:[{t:51,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:1,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:51,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:52,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1}]},{id:26,theme:"kitchen",massScale:2.02,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.1,4.65,0]}],objects:[{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:51,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:14,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:52,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1}]},{id:27,theme:"living",massScale:2.061,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[8.1,4.2,0]}],objects:[{t:51,s:[.9,1,.9],table:1},{t:41,s:[.8,1,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:52,s:[.8,1,.8],table:1},{t:3,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:51,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:1,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1}]},{id:28,theme:"bedroom",massScale:2.102,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[8.1,4.2,0]}],objects:[{t:51,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:3,s:[1,.85,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:41,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:14,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1}]},{id:29,theme:"balcony",massScale:2.143,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[8.1,4.2,0]}],objects:[{t:51,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:41,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:1,s:[.8,1,.8],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:1,s:[.9,1.1,.9],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:52,s:[.9,1,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1}]},{id:30,theme:"bathroom",massScale:2.184,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.8,4.2,0]}],objects:[{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:3,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:51,s:[1,1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:3,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:41,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1}]},{id:31,theme:"kitchen",massScale:2.224,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.2,3.75,0]}],objects:[{t:51,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:3,s:[.8,1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:1,s:[1,1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:1,s:[.9,1.1,.9],table:1},{t:1,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:3,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:1,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1}]},{id:32,theme:"living",massScale:2.265,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[9,4.65,0]}],objects:[{t:51,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:51,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:52,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:3,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1}]},{id:33,theme:"bedroom",massScale:2.306,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,4.65,0]}],objects:[{t:51,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:1,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:52,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:1,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:1,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:41,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:1,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1}]},{id:34,theme:"balcony",massScale:2.347,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.8,4.2,0]}],objects:[{t:51,s:[.9,.85,.9],table:1},{t:41,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:51,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1}]},{id:35,theme:"bathroom",massScale:2.388,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.1,4.65,0]}],objects:[{t:51,s:[.9,1,.9],table:1},{t:3,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:12,s:[1,.85,1],table:1},{t:41,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:52,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:12,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:41,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:1,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1}]},{id:36,theme:"kitchen",massScale:2.429,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,4.65,0]}],objects:[{t:51,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:41,s:[.8,1,.8],table:1},{t:41,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:12,s:[1,.85,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:51,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:51,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:51,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1}]},{id:37,theme:"living",massScale:2.469,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,4.65,0]}],objects:[{t:51,s:[1,.85,1],table:1},{t:1,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:1,s:[1,1.1,1],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:41,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:1,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:51,s:[.9,.85,.9],table:1},{t:1,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[1,1.1,1],table:1},{t:11,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:1,s:[1,1.1,1],table:1},{t:52,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:12,s:[1,.85,1],table:1},{t:51,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:3,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1}]},{id:38,theme:"bedroom",massScale:2.51,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[8.1,4.2,0]}],objects:[{t:51,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:52,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:51,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:51,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:52,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:41,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1}]},{id:39,theme:"balcony",massScale:2.551,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[4.9,3.75,0]}],objects:[{t:51,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:12,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:52,s:[1,1,1],table:1},{t:12,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:1,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:1,s:[.9,.85,.9],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1}]},{id:40,theme:"bathroom",massScale:2.592,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[5.5,4.2,0]}],objects:[{t:51,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:3,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:11,s:[1,1.1,1],table:1},{t:3,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:3,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1}]},{id:41,theme:"kitchen",massScale:2.633,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[8.1,4.2,0]}],objects:[{t:51,s:[.9,1,.9],table:1},{t:1,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:3,s:[1,1,1],table:1},{t:1,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:41,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[.8,1,.8],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:1,s:[.8,.85,.8],table:1},{t:1,s:[.8,.85,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1}]},{id:42,theme:"living",massScale:2.673,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.8,4.2,0]}],objects:[{t:51,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:2,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[.8,.85,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:3,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:41,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:41,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:41,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:11,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:52,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:3,s:[.9,1.1,.9],table:1}]},{id:43,theme:"bedroom",massScale:2.714,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.55,4.65,0]}],objects:[{t:51,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:1,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:41,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:1,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:1,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:51,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1}]},{id:44,theme:"balcony",massScale:2.755,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[9,4.65,0]}],objects:[{t:51,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:51,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:41,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:41,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:51,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:12,s:[1,.85,1],table:1},{t:51,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:2,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:51,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:41,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1}]},{id:45,theme:"bathroom",massScale:2.796,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[9,4.65,0]}],objects:[{t:51,s:[.8,1,.8],table:1},{t:1,s:[.8,1,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:52,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:1,s:[1,1.1,1],table:1},{t:52,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:3,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:52,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:1,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1}]},{id:46,theme:"kitchen",massScale:2.837,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.05,3.75,0]}],objects:[{t:51,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:3,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:41,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:11,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:52,s:[.9,.85,.9],table:1},{t:41,s:[.9,.85,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:41,s:[.9,.85,.9],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1}]},{id:47,theme:"living",massScale:2.878,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[5.5,4.2,0]}],objects:[{t:51,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:1,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:12,s:[1,1,1],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:41,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:3,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.8,.85,.8],table:1},{t:14,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:13,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:41,s:[.8,.85,.8],table:1},{t:51,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:13,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[.9,1,.9],table:1},{t:13,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1}]},{id:48,theme:"bedroom",massScale:2.918,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[6.05,3.75,0]}],objects:[{t:51,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:41,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:11,s:[1,1.1,1],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:2,s:[.9,1,.9],table:1},{t:41,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:12,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:41,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:12,s:[.9,1,.9],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:11,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:2,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:12,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:3,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:41,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:13,s:[1,1,1],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:41,s:[.8,.85,.8],table:1},{t:51,s:[.8,.85,.8],table:1},{t:2,s:[.8,.85,.8],table:1},{t:12,s:[.8,.85,.8],table:1},{t:52,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:3,s:[.9,1.1,.9],table:1}]},{id:49,theme:"balcony",massScale:2.959,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[7.2,3.75,0]}],objects:[{t:51,s:[.8,.85,.8],table:1},{t:11,s:[.8,.85,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:12,s:[.9,1.1,.9],table:1},{t:41,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[.9,.85,.9],table:1},{t:2,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:11,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:1,s:[.9,.85,.9],table:1},{t:13,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:11,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:3,s:[1,1.1,1],table:1},{t:51,s:[1,1.1,1],table:1},{t:1,s:[1,1.1,1],table:1},{t:3,s:[1,.85,1],table:1},{t:52,s:[1,.85,1],table:1},{t:2,s:[1,.85,1],table:1},{t:14,s:[1,.85,1],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:13,s:[.8,1.1,.8],table:1},{t:52,s:[.9,1,.9],table:1},{t:1,s:[.9,1,.9],table:1},{t:41,s:[1,.85,1],table:1},{t:51,s:[1,.85,1],table:1},{t:3,s:[1,1.1,1],table:1},{t:14,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:2,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1}]},{id:50,theme:"bathroom",massScale:3,tables:[{id:1,pos:[0,0,2.8],rot:[0,0,0,1],dim:[9,4.65,0]}],objects:[{t:51,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:14,s:[.9,1.1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[1,1.1,1],table:1},{t:2,s:[1,1.1,1],table:1},{t:13,s:[1,1.1,1],table:1},{t:52,s:[1,1.1,1],table:1},{t:3,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:51,s:[1,1,1],table:1},{t:14,s:[1,1,1],table:1},{t:12,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:41,s:[1,1,1],table:1},{t:41,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:14,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:41,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:14,s:[.9,1,.9],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[.9,1,.9],table:1},{t:3,s:[.9,.85,.9],table:1},{t:51,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:14,s:[.9,.85,.9],table:1},{t:52,s:[.9,.85,.9],table:1},{t:12,s:[.9,.85,.9],table:1},{t:3,s:[.9,1,.9],table:1},{t:51,s:[.9,1,.9],table:1},{t:41,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:52,s:[.8,1.1,.8],table:1},{t:3,s:[.8,1.1,.8],table:1},{t:12,s:[.8,1.1,.8],table:1},{t:51,s:[.8,1.1,.8],table:1},{t:14,s:[.8,1.1,.8],table:1},{t:41,s:[.8,1,.8],table:1},{t:52,s:[.8,1,.8],table:1},{t:11,s:[.8,1,.8],table:1},{t:3,s:[.8,1,.8],table:1},{t:51,s:[.8,1,.8],table:1},{t:13,s:[.8,1,.8],table:1},{t:3,s:[1,1,1],table:1},{t:52,s:[1,1,1],table:1},{t:3,s:[1,1,1],table:1},{t:11,s:[1,1,1],table:1},{t:51,s:[1,.85,1],table:1},{t:41,s:[.9,1.1,.9],table:1},{t:13,s:[.9,1.1,.9],table:1},{t:52,s:[.9,1.1,.9],table:1},{t:3,s:[.9,1.1,.9],table:1},{t:11,s:[.9,1.1,.9],table:1},{t:51,s:[.9,1.1,.9],table:1},{t:41,s:[.9,1.1,.9],table:1}]}];var Fd={_\u8AAA\u660E:"\u8A66\u73A9\u7248 10 \u95DC\u3002from\uFF1D\u53D6\u539F\u7248\u7B2C\u5E7E\u95DC\u7684\u7269\u4EF6\u7D44\u6210\u8207\u96E3\u5EA6\u5C6C\u6027\uFF08\u91CD\u91CF\u3001\u91CD\u7269\uFF09\uFF1Bscene\uFF1D\u7528\u54EA\u500B\u623F\u9593\uFF1Bammo\uFF1D\u7D66\u5E7E\u767C\uFF08\u7531 tools/sim.mjs --campaign \u91CF\u6E2C\u5F8C\u586B\uFF09\uFF1Btip\uFF1D\u958B\u5834\u63D0\u793A\u3002",levels:[{no:1,from:1,scene:"vault",ammo:12,tip:"\u62D6\u66F3\u7784\u6E96 \xB7 \u653E\u958B\u767C\u5C04"},{no:2,from:2,scene:"mahjong",ammo:11,tip:"\u7784\u6E96\u6700\u5E95\u4E0B\uFF0C\u4E00\u7832\u5012\u4E00\u6574\u758A\uFF01"},{no:3,from:4,scene:"gallery",ammo:11,tip:"\u6771\u897F\u6389\u4E0B\u684C\u4E5F\u7B97\u6253\u7206"},{no:4,from:6,scene:"rooftop",ammo:15,tip:"\u4FDD\u96AA\u7BB1\u3001\u5927\u7406\u77F3\u723A\u723A\u8981\u591A\u6253\u5E7E\u4E0B"},{no:5,from:5,scene:"banquet",ammo:15,tip:"\u65CB\u8F49\u95DC\uFF01\u684C\u5B50\u6703\u8F49"},{no:6,from:9,scene:"vault",ammo:16,tip:"\u5148\u6253\u5012\u4E00\u822C\u7269\u4EF6\uFF0C\u518D\u6536\u62FE\u91CD\u7269"},{no:7,from:13,scene:"mahjong",ammo:17,tip:"\u9023\u7E8C\u6253\u7206 10 \u500B\u6703\u51FA\u73FE\u300C\u6EFF\u8CAB\uFF01\u300D"},{no:8,from:18,scene:"gallery",ammo:18,tip:"\u7269\u4EF6\u8D8A\u758A\u8D8A\u9AD8\u4E86"},{no:9,from:24,scene:"rooftop",ammo:27,tip:"\u7832\u5F48\u6709\u9650\uFF0C\u7701\u8457\u7528\uFF01"},{no:10,from:15,scene:"banquet",ammo:35,tip:"\u6700\u7D42\u95DC\uFF01\u628A\u723A\u723A\u7684\u6D3E\u5C0D\u5168\u90E8\u6253\u7206"}]};var Hs={gravityY:-25,projectileInitialSpeed:60,projectileMass:1.25,ballFirstHitBoomPower:3,destroyVelocityThreshold:10,massByType:{"1":[1,2,3,4,5],"2":[.75],"3":[1,2,3,4,5],"11":[1,2,3],"12":[1,2,3],"13":[1,2,3],"14":[1,2,3],"15":[1,2,3],"16":[1,2,3],"21":[4,6,8,10,12],"22":[4,6,8,10,12],"41":[2.5,3.75,5,6.25,7.5],"42":[3,4.5,6,7.5,9],"43":[3,4.5,6,7.5,9],"61":[3,4.5,6,7.5,9],"62":[3,4.5,6,7.5,9]}};var ri={_\u8AAA\u660E:"\u672C\u4F5C\u53EF\u8ABF\u6578\u503C\u3002heavyRule: typesOnly\uFF1D\u53EA\u6709 51/52 \u91CD\u7269\u8981\u6253\u591A\u4E0B\uFF08\u672C\u4F5C\uFF09\uFF1BallFromLevel6\uFF1D\u539F\u7248\u7B2C 6 \u95DC\u8D77\u5168\u90E8\u9396\u684C\u8A08\u6B21\u3002",heavyRule:"typesOnly",heavyClampToTable:!1,heavyFromLevel:6,rotatingEvery:5,rotatingMultiplier:2,rotatingTableScale:1.2,maxBodies:90,lateMass:{fromLevel:6,"51":6,"52":4,other:1.5},ammo:{_\u8AAA\u660E:"\u6E05\u5B8C\u7D04\u9700 perObject\xD7\u4E00\u822C\u7269\u4EF6 + perHeavyHit\xD7\u91CD\u7269\u76F4\u64CA\u6578\uFF082026-10-21 \u91CF\u6E2C\u64EC\u5408\uFF09\uFF0C\u518D\u4E58\u5404\u968E\u6BB5\u500D\u6578 k \u52A0\u4FDD\u5E95 extra",perObject:.36,perHeavyHit:.3,bands:[{upTo:5,k:1.8,extra:4},{upTo:20,k:1.45,extra:3},{upTo:35,k:1.3,extra:2},{upTo:50,k:1.22,extra:2}],override:{}},stars:[.35,.15],combo:{window:.8,showFrom:3,max:10}};var ge={id:"mansion",gameTitle:"\u723A\u723A\u5927\u7206\u7834",gameSubtitle:"\u6EFF\u8CAB\u5927\u4EA8 \xB7 3D \u7834\u58DE\u5C0F\u904A\u6232",labelText:!0,bgm:{loopSec:36.571,_\u8AAA\u660E:"Pixabay\u3008Groovy Funk Vibes\u300919 \u79D2\u8D77 16 \u5C0F\u7BC0\uFF1B\u8981\u8DDF tools/prep_assets.mjs \u7684 BGM.sec \u4E00\u81F4"},comboText:{normal:"{n} \u9023\u64CA\uFF01",max:"\u6EFF\u8CAB\uFF01"},cta:{label:"\u7ACB\u5373\u4E0B\u8F09 \u6EFF\u8CAB\u5927\u4EA8",perks:["\u52A0\u5165\u7ACB\u5373\u981810\u842C\u3000\u958B\u5C40\u514D\u8CBB\u723D\u723D\u73A9","\u9EBB\u5C07\u62C9\u9738\u9B5A\u6A5F\u3000\u4E0A\u767E\u6B3E\u6A5F\u53F0\u4EFB\u610F\u6311"],ios:"https://apps.apple.com/app/id1007924271",android:"https://play.google.com/store/apps/details?id=com.igs.TMD",desktop:"https://play.google.com/store/apps/details?id=com.igs.TMD"},heavy:{"51":{name:"\u723A\u723A\u4FDD\u96AA\u7BB1",style:"safe",colors:["#5b6470","#2f353d","#d9b44a"]},"52":{name:"\u5927\u7406\u77F3\u723A\u723A",style:"marble",colors:["#f1efe9","#cfcac0","#9e9a90"]}},scenes:[{key:"vault",label:"\u91D1\u5EAB",replaces:"kitchen",backdrop:"vault",table:{top:"#7a1f1f",trim:"#e0b24a",legs:"#4a1414"},light:{hemiSky:"#fff2d6",hemiGround:"#6b4a2a",key:"#ffe2a8",keyPower:2.6,fill:"#ffcf7a",fillPower:.9,exposure:.95},items:[{name:"\u723A\u5E63\u5B58\u9322\u7B52",material:"metal",colors:["#ffd95a","#c8901a","#fff3b0","#7a4a00"],emblem:"coin",pattern:"dots",lid:"#e8b52e"},{name:"\u7D14\u91D1\u7259\u7C64\u7B52",material:"metal",colors:["#ffe68a","#d4a017","#fff8d0","#7a5200"],emblem:"head",pattern:"stripes",lid:"#e8b52e"},{name:"\u723A\u5E63\u5DE7\u514B\u529B",material:"wood",colors:["#6b3410","#3a1a06","#e7b84a","#e7b84a"],emblem:"coin",pattern:"diamonds"},{name:"\u723A\u723A\u7684\u79C1\u623F\u9322",material:"metal",colors:["#d0402f","#8e1b12","#ffd36b","#5a0d07"],emblem:"head",pattern:"stripes"},{name:"\u723A\u5E63\u8EDF\u7CD6",material:"glass",colors:["#ffe066","#ff9f1a","#fff6c2","#b35900"],emblem:"coin",pattern:"dots",lid:"#ff6fa8"},{name:"\u91D1\u78DA\u9999\u7682",material:"ceramic",colors:["#fff4c2","#e8c15a","#ffffff","#8a6400"],emblem:"goldbar",pattern:"none",lid:"#e8b52e"},{name:"\u5099\u7528\u55AE\u908A\u773C\u93E1",material:"glass",colors:["#2f5b95","#16294a","#9fc3ff","#0c1a33"],emblem:"monocle",pattern:"none",lid:"#e8b52e"},{name:"\u58D3\u6B72\u9322\u7D05\u5305",material:"ceramic",colors:["#ef4b3f","#b71c1c","#ffd36b","#6d0a0a"],emblem:"coin",pattern:"brocade",lid:"#e8b52e"},{name:"\u5099\u7528\u91D1\u7259",material:"ceramic",colors:["#ffffff","#d9d9d9","#f5c542","#5b2c83"],emblem:"tooth",pattern:"none",lid:"#9b59b6"},{name:"\u723A\u723A\u626D\u86CB",material:"glass",colors:["#9b4fc4","#5b2c83","#ffd36b","#2d1145"],emblem:"head",pattern:"capsules",lid:"#ff4f81"}]},{key:"mahjong",label:"\u9EBB\u5C07\u9593",replaces:"living",backdrop:"mahjong",table:{top:"#1f7a4d",trim:"#d9a441",legs:"#4a2414"},light:{hemiSky:"#ffe9d6",hemiGround:"#5a2a1a",key:"#ffd2a8",keyPower:2.5,fill:"#ff9f7a",fillPower:.8,exposure:.95},items:[{name:"\u723A\u723A\u8001\u4EBA\u8336",material:"metal",colors:["#3b8f40","#1b5e20","#c8e6c9","#0d3311"],emblem:"head",pattern:"hills",lid:"#c9a227"},{name:"\u958B\u904B\u7D2B\u7802\u58FA",material:"ceramic",colors:["#7a4535","#4a241b","#e0b07a","#2a120c"],emblem:"sparkle",pattern:"none"},{name:"\u958B\u904B\u5927\u9AB0\u5B50",material:"wood",colors:["#ffffff","#ece6da","#d32f2f","#222222"],style:"dice"},{name:"\u5FC5\u52DD\u7D2B\u5167\u8932",material:"wood",colors:["#9b4fc4","#6c3483","#ffd36b","#2d1145"],emblem:"briefs",pattern:"stripes"},{name:"\u55D1\u74DC\u5B50",material:"ceramic",colors:["#fbe9d0","#e0b98a","#7a4a20","#5a3010"],emblem:"seeds",pattern:"none",lid:"#d32f2f"},{name:"\u723A\u723A\u8584\u8377\u7CD6",material:"glass",colors:["#c9f3f8","#4dd0e1","#ffffff","#00606b"],emblem:"head",pattern:"dots",lid:"#00897b"},{name:"\u82B1\u751F\u7CD6",material:"ceramic",colors:["#f6d28b","#d9a441","#8d5a2b","#5a3010"],emblem:"sparkle",pattern:"diamonds",lid:"#8d6e63"},{name:"\u725B\u8ECB\u7CD6",material:"ceramic",colors:["#fffdf5","#efe3c8","#e53935","#7a1010"],emblem:"mustache",pattern:"stripes",lid:"#e53935"},{name:"\u53E4\u65E9\u5473\u9EA5\u82BD\u7CD6",material:"glass",colors:["#ffc56b","#f57c00","#fff1c2","#6b3000"],emblem:"sparkle",pattern:"none",lid:"#6d4c41"},{name:"\u81EA\u6478\u958B\u904B\u7CD6",material:"ceramic",colors:["#ff5a5a","#c62828","#ffd36b","#5e0b0b"],emblem:"coin",pattern:"brocade",lid:"#e8b52e"}]},{key:"gallery",label:"\u6536\u85CF\u5BA4",replaces:"bedroom",backdrop:"gallery",table:{top:"#6b4226",trim:"#d9a441",legs:"#3e2414"},light:{hemiSky:"#fff4e0",hemiGround:"#4a3a2a",key:"#ffe0b0",keyPower:2.5,fill:"#b9d3ff",fillPower:.8,exposure:.95},items:[{name:"\u516B\u5B57\u9B0D\u4FDD\u990A\u6CB9",material:"metal",colors:["#5b1a9e","#2a0a55","#e7b84a","#e7b84a"],emblem:"mustache",pattern:"brocade",lid:"#e8b52e"},{name:"\u723A\u723A\u534A\u8EAB\u50CF",material:"ceramic",colors:["#f7f5f0","#d7d2c8","#b5aea0","#5a5345"],emblem:"headGray",pattern:"none"},{name:"\u65E9\u5B89\u9577\u8F29\u5716",material:"wood",colors:["#ffe259","#ff7eb3","#7fe3ff","#ffffff"],style:"eldermeme"},{name:"\u55AE\u908A\u773C\u93E1\u6536\u85CF",material:"wood",colors:["#283593","#0d1240","#e7b84a","#e7b84a"],style:"monocles"},{name:"\u9818\u7D50\u6536\u85CF",material:"glass",colors:["#dba6e6","#8e24aa","#ffffff","#3a0a4a"],emblem:"bowtie",pattern:"dots",lid:"#e8b52e"},{name:"\u9B0D\u5B50\u68D2\u68D2\u7CD6",material:"glass",colors:["#ffd6dc","#f48fb1","#ffffff","#8a1c4a"],emblem:"mustache",pattern:"swirl",lid:"#ffffff"},{name:"\u5B9A\u578B\u9AEE\u881F",material:"ceramic",colors:["#eef1f3","#b0bec5","#263238","#263238"],emblem:"head",pattern:"none",lid:"#263238"},{name:"\u61F7\u9336\u6536\u85CF",material:"glass",colors:["#ffe08a","#c79100","#5d4037","#4a2c00"],emblem:"clock",pattern:"none",lid:"#5d4037"},{name:"\u8001\u82B1\u773C\u93E1",material:"ceramic",colors:["#dcd0c8","#a1887f","#3e2723","#3e2723"],emblem:"glasses",pattern:"none",lid:"#3e2723"},{name:"\u516B\u5B57\u9B0D\u68B3",material:"ceramic",colors:["#8fd6cd","#00796b","#ffffff","#003d36"],emblem:"mustache",pattern:"stripes",lid:"#e8b52e"}]},{key:"rooftop",label:"\u9802\u6A13\u9732\u53F0",replaces:"balcony",backdrop:"rooftop",table:{top:"#8a5a32",trim:"#c9a227",legs:"#4a2f1a"},light:{hemiSky:"#cfd8ff",hemiGround:"#3a2a3a",key:"#ffe7c4",keyPower:2.3,fill:"#8fa8ff",fillPower:1,exposure:1},items:[{name:"\u67B8\u675E\u4FDD\u6EAB\u676F",material:"metal",colors:["#fff3a0","#e0a800","#d32f2f","#7a1010"],emblem:"head",pattern:"goji",lid:"#d6b03a"},{name:"\u516B\u5B57\u9B0D\u76C6\u683D",material:"ceramic",colors:["#e0602a","#a0300e","#2e7d32","#4a1505"],emblem:"bonsai",pattern:"none"},{name:"\u75E0\u75DB\u8CBC\u5E03",material:"wood",colors:["#e6f3ff","#90caf9","#ffffff","#0d47a1"],emblem:"plaster",pattern:"none"},{name:"\u96DE\u7CBE\u79AE\u76D2",material:"wood",colors:["#c62828","#7f0000","#ffd36b","#ffd36b"],emblem:"bottles",pattern:"none"},{name:"\u8C46\u8150\u4E73",material:"ceramic",colors:["#fff8e1","#ffd59e","#c62828","#7a1010"],emblem:"head",pattern:"none",lid:"#c62828"},{name:"\u91AC\u74DC",material:"glass",colors:["#cfe8a9","#7cb342","#ffffff","#2d4a10"],emblem:"sparkle",pattern:"dots",lid:"#f9a825"},{name:"\u8089\u9B06",material:"ceramic",colors:["#ffd39a","#ef6c00","#ffffff","#6b2a00"],emblem:"head",pattern:"stripes",lid:"#d32f2f"},{name:"\u9ED1\u7CD6\u8591\u8336",material:"ceramic",colors:["#9b7b6e","#4e342e","#ffd36b","#ffd36b"],emblem:"sparkle",pattern:"none",lid:"#e8b52e"},{name:"\u95DC\u7BC0\u4FDD\u5065",material:"ceramic",colors:["#e6f7ff","#4fc3f7","#1565c0","#0d3c78"],emblem:"head",pattern:"none",lid:"#1565c0"},{name:"\u723A\u723A\u6BDB\u5E3D",material:"ceramic",colors:["#f7a1c0","#d81b60","#ffffff","#6a0a30"],emblem:"head",pattern:"knit",lid:"#ffffff"}]},{key:"banquet",label:"\u5BB4\u6703\u5EF3",replaces:"bathroom",backdrop:"banquet",table:{top:"#f4ead2",trim:"#d4a017",legs:"#5b2c83"},light:{hemiSky:"#fff6e8",hemiGround:"#6a3a5a",key:"#fff0d0",keyPower:2.6,fill:"#ffb3e0",fillPower:.9,exposure:1},items:[{name:"\u723A\u723A\u7279\u8ABF",material:"metal",colors:["#a837c4","#4a148c","#ffd36b","#ffd36b"],emblem:"cup",pattern:"dots",lid:"#cfd8dc"},{name:"\u6D3E\u5C0D\u5E3D",material:"wood",colors:["#ff5c95","#c51162","#ffe066","#5a0028"],emblem:"star",pattern:"stripes"},{name:"\u723A\u723A\u751F\u65E5\u86CB\u7CD5",material:"wood",colors:["#fff3e0","#ffd9b0","#ff80ab","#a0003c"],style:"cake"},{name:"\u9A5A\u559C\u79AE\u7269",material:"wood",colors:["#8e2fb8","#4a148c","#ffd36b","#ffd36b"],style:"gift"},{name:"\u9CF3\u68A8\u9165",material:"ceramic",colors:["#ffe38a","#ffb300","#43a047","#6b4000"],emblem:"sparkle",pattern:"diamonds",lid:"#43a047"},{name:"\u723A\u723A\u99AC\u5361\u9F8D",material:"glass",colors:["#fbc6dc","#ce93d8","#ffffff","#6a1b7a"],emblem:"head",pattern:"dots",lid:"#81d4fa"},{name:"\u6C23\u6CE1\u6C7D\u6C34",material:"glass",colors:["#fffbd0","#fdd835","#ffffff","#7a6000"],emblem:"bubbles",pattern:"none",lid:"#e8b52e"},{name:"\u559C\u7CD6",material:"ceramic",colors:["#f26a67","#c62828","#ffd36b","#5e0b0b"],emblem:"heart",pattern:"brocade",lid:"#e8b52e"},{name:"\u6D3E\u5C0D\u62C9\u70AE",material:"wood",colors:["#4dd8e8","#00838f","#ffffff","#003a40"],emblem:"star",pattern:"stripes",lid:"#ff7043"},{name:"\u723A\u723A\u5E03\u4E01",material:"glass",colors:["#fff38a","#ffb300","#8d4a10","#5a2a00"],emblem:"head",pattern:"none",lid:"#6d4c41"}]}]};var Ti={tiles:{vault:[1,2,3,4,5,6,7,8,9,10],mahjong:[1,2,3,4,5,6,7,8,9,10],gallery:[1,2,3,4,5,6,7,8,9,10],rooftop:[1,2,3,4,5,6,7,8,9,10],banquet:[1,2,3,4,5,6,7,8,9,10]},bg:["vault","mahjong","gallery","rooftop","banquet"],heavy:["metal","stone"],hero:!0,endcard:!0,title:!0,missing:[],ui:{combo_max:!0,clear_perfect:!0,clear:!0,end_win:!0,end_fail:!0,tag_rotate:!0,stars:!0,digits:!0}};function Qc(i){let t=i>>>0||1;return function(){t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Nd(){return globalThis.crypto?.getRandomValues?globalThis.crypto.getRandomValues(new Uint32Array(1))[0]:Math.floor(Math.random()*4294967296)}function sl(i,t){let e=[...i];for(let n=e.length-1;n>0;n--){let s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}var rl={1:1,2:2,3:3,41:4,11:5,12:6,13:7,14:8,15:9,16:10};var Dd=new Set([1,2,11,12,13,14,15,16]),Bd=i=>i===51||i===52;function ab(i,t){return t.rotatingEvery>0&&i%t.rotatingEvery===0}function th(i,t,e){let n=t>=31?3:2;return e.heavyRule==="allFromLevel6"?t>=e.heavyFromLevel?n+(i===51?1:0):1:Bd(i)?n+(i===51?1:0):1}function eh(i,t,e){return(e.heavyRule==="allFromLevel6"||Bd(i))&&t>=e.heavyFromLevel}function lb(i,t){let e=t.ammo;if(e.override&&e.override[i.id]!=null)return e.override[i.id];let n=0,s=0;for(let a of i.objects)eh(a.t,i.id,t)?s+=th(a.t,i.id,t):n++;let r=e.perObject*n+e.perHeavyHit*s,o=e.bands.find(a=>i.id<=a.upTo)||e.bands[e.bands.length-1];return Math.max(3,Math.ceil(r*o.k+o.extra))}function Ud(i,t,e){let n=ab(i.id,t),s=n&&t.rotatingTableScale||1,r=i.tables.map(c=>({...c,pos:[...c.pos],rot:[...c.rot],dim:c.dim.map((h,d)=>d<2?h*Math.SQRT1_2*s:h)})),o=n?t.rotatingMultiplier:1,a=i.objects.flatMap(c=>Array.from({length:o},()=>({t:c.t,s:[...c.s],table:c.table,pos:[0,0,0],rot:[0,0,0,1]})));a.length>t.maxBodies&&(a=sl(a,e).slice(0,t.maxBodies));for(let c of r){let h=sl(a.filter(_=>_.table===c.id),e);if(!h.length)continue;let d=Math.max(...h.map(_=>_.s[0])),u=Math.max(...h.map(_=>_.s[2])),f=Math.max(1,Math.floor((c.dim[0]-.2)/(d+.12))),g=Math.max(1,Math.floor((c.dim[1]-.2)/(u+.12))),b=(c.dim[0]-.2)/f,m=(c.dim[1]-.2)/g,p=[];for(let _=0;_<g;_++)for(let y=0;y<f;y++)p.push({x:(y-(f-1)/2)*b,z:(_-(g-1)/2)*m,height:0,items:[]});let v=sl(p,e).slice(0,Math.max(1,Math.min(h.length,Math.ceil(p.length*(.75+e()*.25)))));for(let _ of h){let y=[...v].sort((E,C)=>E.height-C.height),T=y[Math.floor(e()*Math.min(3,y.length))];T.items.push(_),T.height+=_.s[1]}for(let _ of v){let y=0;_.items.sort((T,E)=>E.s[0]*E.s[2]-T.s[0]*T.s[2]);for(let T of _.items)T.pos=[_.x,y+T.s[1]/2,_.z],y+=T.s[1]}}let l={id:i.id,theme:i.theme,massScale:i.massScale||1,tables:r,objects:a,rotating:n,rotationSpeed:n?-Math.PI*2/24:0};return l.ammo=lb(l,t),l}function Od(i,t,e){let[n,s]=e.stars;return i>=t*n?3:i>=t*s?2:1}function zd(i,t,e,n){let s=[t[0]-i[0],t[1]-i[1],t[2]-i[2]],o=Math.hypot(s[0],s[1],s[2])/e;s[1]-=.5*n*o*o;let a=Math.hypot(s[0],s[1],s[2])||1;return[s[0]/a,s[1]/a,s[2]/a]}var Ci=class i{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);let n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new i);let n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],b=s[0],m=s[1],p=s[2],v=s[3],_=s[4],y=s[5],T=s[6],E=s[7],C=s[8];return r[0]=o*b+a*v+l*T,r[1]=o*m+a*_+l*E,r[2]=o*p+a*y+l*C,r[3]=c*b+h*v+d*T,r[4]=c*m+h*_+d*E,r[5]=c*p+h*y+d*C,r[6]=u*b+f*v+g*T,r[7]=u*m+f*_+g*E,r[8]=u*p+f*y+g*C,e}scale(t,e){e===void 0&&(e=new i);let n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new S);let n=3,s=4,r=[],o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3,c=l,h,d=4,u;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){h=d;do u=d-h,r[u+s*o]+=r[u+s*a];while(--h);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){let f=r[o+s*a]/r[o+s*o];h=d;do u=d-h,r[u+s*a]=u<=o?0:r[u+s*a]-r[u+s*o]*f;while(--h)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new i);let e=3,n=6,s=cb,r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3,l=a,c,h=n,d;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=h;do d=h-c,s[d+n*r]+=s[d+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){let u=s[r+n*o]/s[r+n*r];c=h;do d=h-c,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*u;while(--c)}}while(--a);r=2;do{o=r-1;do{let u=s[r+n*o]/s[r+n*r];c=n;do d=n-c,s[d+n*o]=s[d+n*o]-s[d+n*r]*u;while(--c)}while(o--)}while(--r);r=2;do{let u=1/s[r+n*r];c=n;do d=n-c,s[d+n*r]=s[d+n*r]*u;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,h=e*a,d=e*l,u=n*a,f=n*l,g=s*l,b=r*o,m=r*a,p=r*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-p,v[3*0+2]=d+m,v[3*1+0]=h+p,v[3*1+1]=1-(c+g),v[3*1+2]=f-b,v[3*2+0]=d-m,v[3*2+1]=f+b,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new i);let e=this.elements,n=t.elements,s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}},cb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],S=class i{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new i);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new i(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new i(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Ci([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){let r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new i),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new i),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let s=hb,r=1/n;s.set(this.x*r,this.y*r,this.z*r);let o=ub;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(kd),kd.almostEquals(t,e)}clone(){return new i(this.x,this.y,this.z)}};S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);var hb=new S,ub=new S,kd=new S,en=class i{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){let r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Vd),c=Vd),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new i().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){let c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),r.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){let n=Hd,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=Hd,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,u=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}},Vd=new S,Hd=[new S,new S,new S,new S,new S,new S,new S,new S],ul=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){let r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){let o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},dl=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}},Ie=class i{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=db,s=fb;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+s*c-r*l,e.y=s*h+o*l+r*a-n*c,e.z=r*h+o*c+n*l-s*a,e.w=o*h-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);let o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);let n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*r-l*s,d=c*s+l*n-o*r,u=c*r+o*s-a*n,f=-o*n-a*s-l*r;return e.x=h*c+f*-o+d*-l-u*-a,e.y=d*c+f*-a+u*-o-h*-l,e.z=u*c+f*-l+h*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r,o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":let h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){let d=o*o,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*u-2*f),s=Math.asin(2*h),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");let r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="YXZ"?(this.x=l*o*a+r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="ZXY"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a-l*c*h):s==="ZYX"?(this.x=l*o*a-r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a+l*c*h):s==="YZX"?(this.x=l*o*a+r*c*h,this.y=r*c*a+l*o*h,this.z=r*o*h-l*c*a,this.w=r*o*a-l*c*h):s==="XZY"&&(this.x=l*o*a-r*c*h,this.y=r*c*a-l*o*h,this.z=r*o*h+l*c*a,this.w=r*o*a+l*c*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new i);let s=this.x,r=this.y,o=this.z,a=this.w,l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,b,m;return f=s*l+r*c+o*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),b=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(b=1-e,m=e),n.x=b*s+m*l,n.y=b*r+m*c,n.z=b*o+m*h,n.w=b*a+m*d,n}integrate(t,e,n,s){s===void 0&&(s=new i);let r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(r*d+o*h-a*c),s.y+=u*(o*d+a*l-r*h),s.z+=u*(a*d+r*c-o*l),s.w+=u*(-r*l-o*c-a*h),s}},db=new S,fb=new S,pb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},mt=class i{constructor(t){t===void 0&&(t={}),this.id=i.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};mt.idCounter=0;mt.types=pb;var te=class i{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new Ie,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return i.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return i.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new S),n.vsub(t,s),e.conjugate(Gd),Gd.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new S),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new S),e.w*=-1,e.vmult(n,s),e.w*=-1,s}},Gd=new Ie,fl=class i extends mt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:mt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let s=new S;for(let r=0;r!==t.length;r++){let o=t[r],a=o.length;for(let l=0;l!==a;l++){let c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);let e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];i.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){let r=new S,o=new S;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){let h=new S,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);let b=h.dot(o);b>u&&(u=b,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let b=n.vertices[n.faces[d][g]],m=new S;m.copy(b),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){let c=new S,h=new S,d=new S,u=new S,f=new S,g=new S,b=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);let v=m.testSepAxis(c,t,e,n,s,r);if(v===!1)return!1;v<b&&(b=v,o.copy(c))}else{let p=a?a.length:m.faces.length;for(let v=0;v<p;v++){let _=a?a[v]:v;c.copy(m.faceNormals[_]),n.vmult(c,c);let y=m.testSepAxis(c,t,e,n,s,r);if(y===!1)return!1;y<b&&(b=y,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);let v=m.testSepAxis(h,t,e,n,s,r);if(v===!1)return!1;v<b&&(b=v,o.copy(h))}else{let p=l?l.length:t.faces.length;for(let v=0;v<p;v++){let _=l?l[v]:v;h.copy(t.faceNormals[_]),r.vmult(h,h);let y=m.testSepAxis(h,t,e,n,s,r);if(y===!1)return!1;y<b&&(b=y,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(r.vmult(t.uniqueEdges[v],f),u.cross(f,g),!g.almostZero()){g.normalize();let _=m.testSepAxis(g,t,e,n,s,r);if(_===!1)return!1;_<b&&(b=_,o.copy(g))}}return s.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){let a=this;i.project(a,t,n,s,nh),i.project(e,t,r,o,ih);let l=nh[0],c=nh[1],h=ih[0],d=ih[1];if(l<d||h<c)return!1;let u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){let n=new S,s=new S;this.computeLocalAABB(s,n);let r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){let l=new S,c=new S,h=new S,d=new S,u=new S,f=new S,g=new S,b=new S,m=this,p=[],v=s,_=p,y=-1,T=Number.MAX_VALUE;for(let x=0;x<m.faces.length;x++){l.copy(m.faceNormals[x]),n.vmult(l,l);let P=l.dot(t);P<T&&(T=P,y=x)}if(y<0)return;let E=m.faces[y];E.connectedFaces=[];for(let x=0;x<m.faces.length;x++)for(let P=0;P<m.faces[x].length;P++)E.indexOf(m.faces[x][P])!==-1&&x!==y&&E.connectedFaces.indexOf(x)===-1&&E.connectedFaces.push(x);let C=E.length;for(let x=0;x<C;x++){let P=m.vertices[E[x]],B=m.vertices[E[(x+1)%C]];P.vsub(B,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(P),n.vmult(f,f),e.vadd(f,f);let L=E.connectedFaces[x];g.copy(this.faceNormals[L]);let U=this.getPlaneConstantOfFace(L);b.copy(g),n.vmult(b,b);let z=U-b.dot(e);for(this.clipFaceAgainstPlane(v,_,b,z);v.length;)v.shift();for(;_.length;)v.push(_.shift())}g.copy(this.faceNormals[y]);let I=this.getPlaneConstantOfFace(y);b.copy(g),n.vmult(b,b);let M=I-b.dot(e);for(let x=0;x<v.length;x++){let P=b.dot(v[x])+M;if(P<=r&&(console.log(`clamped: depth=${P} to minDist=${r}`),P=r),P<=o){let B=v[x];if(P<=1e-6){let L={point:B,normal:b,depth:P};a.push(L)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o,a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+s,r<0)if(o<0){let d=new S;d.copy(c),e.push(d)}else{let d=new S;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){let d=new S;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);let n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);let n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){let r=this.vertices,o,a,l,c,h,d,u=new S;for(let f=0;f<r.length;f++){u.copy(r[f]),e.vmult(u,u),t.vadd(u,u);let g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(o,a,l),s.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){let o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){let o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){let o=s[r];o.vadd(t,o)}}pointIsInside(t){let e=this.vertices,n=this.faces,s=this.faceNormals,r=null,o=new S;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let l=s[a],c=e[n[a][0]],h=new S;t.vsub(c,h);let d=l.dot(h),u=new S;o.vsub(c,u);let f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return r?1:-1}static project(t,e,n,s,r){let o=t.vertices.length,a=gb,l=0,c=0,h=bb,d=t.vertices;h.setZero(),te.vectorToLocalFrame(n,s,e,a),te.pointToLocalFrame(n,s,h,h);let u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){let g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){let f=c;c=l,l=f}r[0]=l,r[1]=c}},nh=[],ih=[],mb=new S,gb=new S,bb=new S,qs=class i extends mt{constructor(t){super({type:mt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=S,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new fl({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),i.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){let n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Ai.set(r[o][0],r[o][1],r[o][2]),e.vmult(Ai,Ai),t.vadd(Ai,Ai),n(Ai.x,Ai.y,Ai.z)}calculateWorldAABB(t,e,n,s){let r=this.halfExtents;Bn[0].set(r.x,r.y,r.z),Bn[1].set(-r.x,r.y,r.z),Bn[2].set(-r.x,-r.y,r.z),Bn[3].set(-r.x,-r.y,-r.z),Bn[4].set(r.x,-r.y,-r.z),Bn[5].set(r.x,r.y,-r.z),Bn[6].set(-r.x,r.y,-r.z),Bn[7].set(r.x,-r.y,r.z);let o=Bn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){let l=Bn[a];e.vmult(l,l),t.vadd(l,l);let c=l.x,h=l.y,d=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),d>s.z&&(s.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},Ai=new S,Bn=[new S,new S,new S,new S,new S,new S,new S,new S],bh={DYNAMIC:1,STATIC:2,KINEMATIC:4},vh={AWAKE:0,SLEEPY:1,SLEEPING:2},Ht=class i extends dl{constructor(t){t===void 0&&(t={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?i.STATIC:i.DYNAMIC,typeof t.type==typeof i.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new Ie,this.initQuaternion=new Ie,this.previousQuaternion=new Ie,this.interpolatedQuaternion=new Ie,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new Ci,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new Ci,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new en,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,t===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(i.sleepyEvent)):e===i.SLEEPY&&n>s?this.wakeUp():e===i.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){let s=new S,r=new Ie;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,s=0;for(let r=0;r!==n;r++){let o=t[r];o.updateBoundingSphereRadius();let a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=vb,o=yb,a=this.quaternion,l=this.aabb,c=_b;for(let h=0;h!==s;h++){let d=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=xb,s=Sb;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=wb;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==i.DYNAMIC)return;let n=Eb,s=Tb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=e,s=Ab;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let r=Cb;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==i.DYNAMIC)return;let n=Rb,s=Ib;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){let t=Pb;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),qs.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;let g=d.elements,b=this.angularFactor,m=l.x*b.x,p=l.y*b.y,v=l.z*b.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*v),r.y+=t*(g[3]*m+g[4]*p+g[5]*v),r.z+=t*(g[6]*m+g[7]*p+g[8]*v),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Ht.idCounter=0;Ht.COLLIDE_EVENT_NAME="collide";Ht.DYNAMIC=bh.DYNAMIC;Ht.STATIC=bh.STATIC;Ht.KINEMATIC=bh.KINEMATIC;Ht.AWAKE=vh.AWAKE;Ht.SLEEPY=vh.SLEEPY;Ht.SLEEPING=vh.SLEEPING;Ht.wakeupEvent={type:"wakeup"};Ht.sleepyEvent={type:"sleepy"};Ht.sleepEvent={type:"sleep"};var vb=new S,yb=new Ie,_b=new en,xb=new Ci,Sb=new Ci,Mb=new Ci,wb=new S,Eb=new S,Tb=new S,Ab=new S,Cb=new S,Rb=new S,Ib=new S,Pb=new S,pl=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ht.STATIC)!==0||t.sleepState===Ht.SLEEPING)&&((e.type&Ht.STATIC)!==0||e.sleepState===Ht.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){let r=Lb;e.position.vsub(t.position,r);let o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){let n=Fb,s=Nb,r=Db,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){let l=s[a].id,c=r[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new S;t.position.vsub(e.position,n);let s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Lb=new S;new S;new Ie;new S;var Fb={keys:[]},Nb=[],Db=[];new S;var wM=new S;new S;var lh=class extends pl{constructor(){super()}collisionPairs(t,e,n){let s=t.bodies,r=s.length,o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){let r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}},Xs=class{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}},ef,nf,sf,rf,of,af,lf,yh={CLOSEST:1,ANY:2,ALL:4};ef=mt.types.SPHERE;nf=mt.types.PLANE;sf=mt.types.BOX;rf=mt.types.CYLINDER;of=mt.types.CONVEXPOLYHEDRON;af=mt.types.HEIGHTFIELD;lf=mt.types.TRIMESH;var un=class i{get[ef](){return this._intersectSphere}get[nf](){return this._intersectPlane}get[sf](){return this._intersectBox}get[rf](){return this._intersectConvex}get[of](){return this._intersectConvex}get[af](){return this._intersectHeightfield}get[lf](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new Xs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||i.ANY,this.result=e.result||new Xs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Wd),sh.length=0,t.broadphase.aabbQuery(t,Wd,sh),this.intersectBodies(sh),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let s=Bb,r=Ub;for(let o=0,a=t.shapes.length;o<a;o++){let l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){let r=this.from;if(Qb(r,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){let o=this.from,a=this.to,l=this.direction,c=new S(0,0,1);e.vmult(c,c);let h=new S;o.vsub(n,h);let d=h.dot(c);a.vsub(n,h);let u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let g=new S,b=new S,m=new S;o.vsub(n,g);let p=-c.dot(g)/f;l.scale(p,b),o.vadd(b,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;let o=Ob;o.from.copy(this.from),o.to.copy(this.to),te.pointToLocalFrame(n,e,o.from,o.from),te.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();let a=zb,l,c,h,d;l=c=0,h=d=t.data.length-1;let u=new en;o.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),te.pointToWorldFrame(n,e,t.pillarOffset,ol),this._intersectConvex(t.pillarConvex,e,ol,s,r,qd),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),te.pointToWorldFrame(n,e,t.pillarOffset,ol),this._intersectConvex(t.pillarConvex,e,ol,s,r,qd)}}}_intersectSphere(t,e,n,s,r){let o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,u=h**2-4*c*d,f=kb,g=Vb;if(!(u<0))if(u===0)o.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1);else{let b=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(b>=0&&b<=1&&(o.lerp(a,b,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){let a=Hb,l=Xd,c=o&&o.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,b=this.to,m=g.distanceTo(b),p=c?c.length:h.length,v=this.result;for(let _=0;!v.shouldStop&&_<p;_++){let y=c?c[_]:_,T=h[y],E=u[y],C=e,I=n;l.copy(d[T[0]]),C.vmult(l,l),l.vadd(I,l),l.vsub(g,l),C.vmult(E,a);let M=f.dot(a);if(Math.abs(M)<this.precision)continue;let x=a.dot(l)/M;if(!(x<0)){f.scale(x,$e),$e.vadd(g,$e),Tn.copy(d[T[0]]),C.vmult(Tn,Tn),I.vadd(Tn,Tn);for(let P=1;!v.shouldStop&&P<T.length-1;P++){Un.copy(d[T[P]]),On.copy(d[T[P+1]]),C.vmult(Un,Un),C.vmult(On,On),I.vadd(Un,Un),I.vadd(On,On);let B=$e.distanceTo(g);!(i.pointInTriangle($e,Tn,Un,On)||i.pointInTriangle($e,Un,Tn,On))||B>m||this.reportIntersection(a,$e,r,s,y)}}}}_intersectTrimesh(t,e,n,s,r,o){let a=qb,l=Jb,c=Kb,h=Xd,d=Xb,u=Yb,f=$b,g=jb,b=Zb,m=t.indices;t.vertices;let p=this.from,v=this.to,_=this.direction;c.position.copy(n),c.quaternion.copy(e),te.vectorToLocalFrame(n,e,_,d),te.pointToLocalFrame(n,e,p,u),te.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let y=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let T=0,E=l.length;!this.result.shouldStop&&T!==E;T++){let C=l[T];t.getNormal(C,a),t.getVertex(m[C*3],Tn),Tn.vsub(u,h);let I=d.dot(a),M=a.dot(h)/I;if(M<0)continue;d.scale(M,$e),$e.vadd(u,$e),t.getVertex(m[C*3+1],Un),t.getVertex(m[C*3+2],On);let x=$e.distanceSquared(u);!(i.pointInTriangle($e,Un,Tn,On)||i.pointInTriangle($e,Tn,Un,On))||x>y||(te.vectorToWorldFrame(e,a,b),te.pointToWorldFrame(n,e,$e,g),this.reportIntersection(b,g,r,s,C))}l.length=0}reportIntersection(t,e,n,s,r){let o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case i.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case i.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case i.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Qi),n.vsub(e,Wr),t.vsub(e,rh);let r=Qi.dot(Qi),o=Qi.dot(Wr),a=Qi.dot(rh),l=Wr.dot(Wr),c=Wr.dot(rh),h,d;return(h=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&h+d<r*l-o*o}};un.CLOSEST=yh.CLOSEST;un.ANY=yh.ANY;un.ALL=yh.ALL;var Wd=new en,sh=[],Wr=new S,rh=new S,Bb=new S,Ub=new Ie,$e=new S,Tn=new S,Un=new S,On=new S;new S;new Xs;var qd={faceList:[0]},ol=new S,Ob=new un,zb=[],kb=new S,Vb=new S,Hb=new S,Gb=new S,Wb=new S,Xd=new S,qb=new S,Xb=new S,Yb=new S,$b=new S,Zb=new S,jb=new S;new en;var Jb=[],Kb=new te,Qi=new S,al=new S;function Qb(i,t,e){e.vsub(i,Qi);let n=Qi.dot(t);return t.scale(n,al),al.vadd(i,al),e.distanceTo(al)}var ml=class i extends pl{static checkBounds(t,e,n){let s,r;n===0?(s=t.position.x,r=e.position.x):n===1?(s=t.position.y,r=e.position.y):n===2&&(s=t.position.z,r=e.position.z);let o=t.boundingRadius,a=e.boundingRadius,l=s+o;return r-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=s.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=s.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=s.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let s=this.axisList,r=s.length,o=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){let c=s[a];for(l=a+1;l<r;l++){let h=s[l];if(this.needBroadphaseCollision(c,h)){if(!i.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){let r=t[s];r.aabbNeedsUpdate&&r.updateAABB()}e===0?i.insertionSortX(t):e===1?i.insertionSortY(t):e===2&&i.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,r=0,o=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let g=a[f],b=g.position.x;t+=b,e+=b*b;let m=g.position.y;n+=m,s+=m*m;let p=g.position.z;r+=p,o+=p*p}let h=e-t*t*c,d=s-n*n*c,u=o-r*r*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,r="x";s===1&&(r="y"),s===2&&(r="z");let o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){let l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}},gl=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},ch=class i{constructor(t,e,n){n===void 0&&(n={}),n=gl.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};ch.idCounter=0;var bl=class{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},$r=class i{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new bl,this.jacobianElementB=new bl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){let s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,h=s.invMassSolve;return r.scale(c,Yd),a.scale(h,$d),n.invInertiaWorldSolve.vmult(o,Zd),s.invInertiaWorldSolve.vmult(l,jd),t.multiplyVectors(Yd,Zd)+e.multiplyVectors($d,jd)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=r+o;return a.vmult(t.rotational,ll),c+=ll.dot(t.rotational),l.vmult(e.rotational,ll),c+=ll.dot(e.rotational),c}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=tv;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};$r.idCounter=0;var Yd=new S,$d=new S,Zd=new S,jd=new S,ll=new S,tv=new S,hh=class extends $r{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){let e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=ev,c=nv,h=s.velocity,d=s.angularVelocity;s.force,s.torque;let u=r.velocity,f=r.angularVelocity;r.force,r.torque;let g=iv,b=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(b.spatial),l.negate(b.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);let v=p.dot(g),_=this.restitution+1,y=_*u.dot(p)-_*h.dot(p)+f.dot(c)-d.dot(l),T=this.computeGiMf();return-v*e-y*n-t*T}getImpactVelocityAlongNormal(){let t=sv,e=rv,n=ov,s=av,r=lv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}},ev=new S,nv=new S,iv=new S,sv=new S,rv=new S,ov=new S,av=new S,lv=new S;var EM=new S,TM=new S;var AM=new S,CM=new S;new S;new S;var RM=new S,IM=new S;var PM=new S,LM=new S,vl=class extends $r{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,r=cv,o=hv,a=this.t;n.cross(a,r),s.cross(a,o);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},cv=new S,hv=new S,Ys=class i{constructor(t,e,n){n=gl.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Ys.idCounter=0;var $s=class i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};$s.idCounter=0;var FM=new S,NM=new S,DM=new S,BM=new S,UM=new S,OM=new S,zM=new S,kM=new S,VM=new S,HM=new S,GM=new S;var WM=new S,qM=new S;new S;new S;new S;var XM=new S,YM=new S,$M=new S;new un;new S;var ZM=new S,jM=new S,JM=[new S(1,0,0),new S(0,1,0),new S(0,0,1)],KM=new S;var QM=new S,tw=new S,ew=new S;var nw=new S,iw=new S,sw=new S,rw=new S;var ow=new S,aw=new S,lw=new S;var yl=class extends mt{constructor(t){if(super({type:mt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){let r=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){let l=o[a];n[l]=t[l]-r,s[l]=t[l]+r}}};var cw=new S,hw=new S;var uw=new S,dw=new S,fw=new S,pw=new S,mw=new S,gw=new S,bw=new S,_l=class extends fl{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let r=s,o=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;o.push(new S(-e*u(0),-n*.5,e*d(0))),c.push(0),o.push(new S(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<r;g++){let b=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new S(-e*u(b),-n*.5,e*d(b))),c.push(2*g+2),o.push(new S(-t*u(b),n*.5,t*d(b))),h.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new S(-u(m),0,d(m)))}l.push(c),a.push(new S(0,1,0));let f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=mt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}};var xl=class extends mt{constructor(){super({type:mt.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){let e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new S),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){oi.set(0,0,1),e.vmult(oi,oi);let r=Number.MAX_VALUE;n.set(-r,-r,-r),s.set(r,r,r),oi.x===1?s.x=t.x:oi.x===-1&&(n.x=t.x),oi.y===1?s.y=t.y:oi.y===-1&&(n.y=t.y),oi.z===1?s.z=t.z:oi.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},oi=new S;var vw=new S,yw=new S,_w=new S,xw=new S,Sw=new S,Mw=new S,ww=new S,Ew=new S,Tw=new S;var Aw=new S,Cw=new en;var Rw=new S,Iw=new en,Pw=new S,Lw=new S,Fw=new S,Nw=new S,Dw=new S,Bw=new S,Uw=new S,Ow=new en,zw=new S,kw=new te,Vw=new en,uh=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},dh=class extends uh{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t,d,u,f,g,b,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();let p=dv,v=fv,_=uv;p.length=a,v.length=a,_.length=a;for(let y=0;y!==a;y++){let T=o[y];_[y]=0,v[y]=T.computeB(h),p[y]=1/T.computeC()}if(a!==0){for(let E=0;E!==c;E++){let C=l[E],I=C.vlambda,M=C.wlambda;I.set(0,0,0),M.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let E=0;E!==a;E++){let C=o[E];d=v[E],u=p[E],m=_[E],b=C.computeGWlambda(),f=u*(d-b-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),_[E]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<r)break}for(let E=0;E!==c;E++){let C=l[E],I=C.velocity,M=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),I.vadd(C.vlambda,I),C.wlambda.vmul(C.angularFactor,C.wlambda),M.vadd(C.wlambda,M)}let y=o.length,T=1/h;for(;y--;)o[y].multiplier=_[y]*T}return n}},uv=[],dv=[],fv=[];var Hw=Ht.STATIC;var fh=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},ph=class extends fh{constructor(){super(...arguments),this.type=S}constructObject(){return new S}},de={sphereSphere:mt.types.SPHERE,spherePlane:mt.types.SPHERE|mt.types.PLANE,boxBox:mt.types.BOX|mt.types.BOX,sphereBox:mt.types.SPHERE|mt.types.BOX,planeBox:mt.types.PLANE|mt.types.BOX,convexConvex:mt.types.CONVEXPOLYHEDRON,sphereConvex:mt.types.SPHERE|mt.types.CONVEXPOLYHEDRON,planeConvex:mt.types.PLANE|mt.types.CONVEXPOLYHEDRON,boxConvex:mt.types.BOX|mt.types.CONVEXPOLYHEDRON,sphereHeightfield:mt.types.SPHERE|mt.types.HEIGHTFIELD,boxHeightfield:mt.types.BOX|mt.types.HEIGHTFIELD,convexHeightfield:mt.types.CONVEXPOLYHEDRON|mt.types.HEIGHTFIELD,sphereParticle:mt.types.PARTICLE|mt.types.SPHERE,planeParticle:mt.types.PLANE|mt.types.PARTICLE,boxParticle:mt.types.BOX|mt.types.PARTICLE,convexParticle:mt.types.PARTICLE|mt.types.CONVEXPOLYHEDRON,cylinderCylinder:mt.types.CYLINDER,sphereCylinder:mt.types.SPHERE|mt.types.CYLINDER,planeCylinder:mt.types.PLANE|mt.types.CYLINDER,boxCylinder:mt.types.BOX|mt.types.CYLINDER,convexCylinder:mt.types.CONVEXPOLYHEDRON|mt.types.CYLINDER,heightfieldCylinder:mt.types.HEIGHTFIELD|mt.types.CYLINDER,particleCylinder:mt.types.PARTICLE|mt.types.CYLINDER,sphereTrimesh:mt.types.SPHERE|mt.types.TRIMESH,planeTrimesh:mt.types.PLANE|mt.types.TRIMESH},mh=class{get[de.sphereSphere](){return this.sphereSphere}get[de.spherePlane](){return this.spherePlane}get[de.boxBox](){return this.boxBox}get[de.sphereBox](){return this.sphereBox}get[de.planeBox](){return this.planeBox}get[de.convexConvex](){return this.convexConvex}get[de.sphereConvex](){return this.sphereConvex}get[de.planeConvex](){return this.planeConvex}get[de.boxConvex](){return this.boxConvex}get[de.sphereHeightfield](){return this.sphereHeightfield}get[de.boxHeightfield](){return this.boxHeightfield}get[de.convexHeightfield](){return this.convexHeightfield}get[de.sphereParticle](){return this.sphereParticle}get[de.planeParticle](){return this.planeParticle}get[de.boxParticle](){return this.boxParticle}get[de.convexParticle](){return this.convexParticle}get[de.cylinderCylinder](){return this.convexConvex}get[de.sphereCylinder](){return this.sphereConvex}get[de.planeCylinder](){return this.planeConvex}get[de.boxCylinder](){return this.boxConvex}get[de.convexCylinder](){return this.convexConvex}get[de.heightfieldCylinder](){return this.heightfieldCylinder}get[de.particleCylinder](){return this.particleCylinder}get[de.sphereTrimesh](){return this.sphereTrimesh}get[de.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ph,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new hh(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||t.material,h=s.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){let n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,h=r.material||n.material,d=o.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){let u=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,b=g.length?g.pop():new vl(n,s,u*f),m=g.length?g.pop():new vl(n,s,u*f);return b.bi=m.bi=n,b.bj=m.bj=s,b.minForce=m.minForce=-u*f,b.maxForce=m.maxForce=u*f,b.ri.copy(t.ri),b.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(b.t,m.t),b.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),b.enabled=m.enabled=t.enabled,e.push(b,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Ki.setZero(),Gs.setZero(),Ws.setZero();let r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Ki.vadd(e.ni,Ki),Gs.vadd(e.ri,Gs),Ws.vadd(e.rj,Ws)):(Ki.vsub(e.ni,Ki),Gs.vadd(e.rj,Gs),Ws.vadd(e.ri,Ws));let o=1/t;Gs.scale(o,n.ri),Ws.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Ki.normalize(),Ki.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;let l=gv,c=bv,h=pv,d=mv;for(let u=0,f=t.length;u!==f;u++){let g=t[u],b=e[u],m=null;g.material&&b.material&&(m=n.getContactMaterial(g.material,b.material)||null);let p=g.type&Ht.KINEMATIC&&b.type&Ht.STATIC||g.type&Ht.STATIC&&b.type&Ht.KINEMATIC||g.type&Ht.KINEMATIC&&b.type&Ht.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);let _=g.shapes[v];for(let y=0;y<b.shapes.length;y++){b.quaternion.mult(b.shapeOrientations[y],c),b.quaternion.vmult(b.shapeOffsets[y],d),d.vadd(b.position,d);let T=b.shapes[y];if(!(_.collisionFilterMask&T.collisionFilterGroup&&T.collisionFilterMask&_.collisionFilterGroup)||h.distanceTo(d)>_.boundingSphereRadius+T.boundingSphereRadius)continue;let E=null;_.material&&T.material&&(E=n.getContactMaterial(_.material,T.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;let C=_.type|T.type,I=this[C];if(I){let M=!1;_.type<T.type?M=I.call(this,_,T,h,d,l,c,g,b,_,T,p):M=I.call(this,T,_,d,h,c,l,b,g,_,T,p),M&&p&&(n.shapeOverlapKeeper.set(_.id,T.id),n.bodyOverlapKeeper.set(g.id,b.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,h,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,l,t,e,c,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,h,d){let u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(s,cl),u.ni.scale(u.ni.dot(cl),Jd),cl.vsub(Jd,u.rj),-cl.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,d)}sphereBox(t,e,n,s,r,o,a,l,c,h,d){let u=this.v3pool,f=Gv;n.vsub(s,hl),e.getSideNormals(f,o);let g=t.radius,b=!1,m=qv,p=Xv,v=Yv,_=null,y=0,T=0,E=0,C=null;for(let D=0,J=f.length;D!==J&&b===!1;D++){let H=kv;H.copy(f[D]);let j=H.length();H.normalize();let at=hl.dot(H);if(at<j+g&&at>0){let ft=Vv,rt=Hv;ft.copy(f[(D+1)%3]),rt.copy(f[(D+2)%3]);let Zt=ft.length(),ne=rt.length();ft.normalize(),rt.normalize();let Yt=hl.dot(ft),Z=hl.dot(rt);if(Yt<Zt&&Yt>-Zt&&Z<ne&&Z>-ne){let Q=Math.abs(at-j-g);if((C===null||Q<C)&&(C=Q,T=Yt,E=Z,_=j,m.copy(H),p.copy(ft),v.copy(rt),y++,d))return!0}}}if(y){b=!0;let D=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,D.ri),D.ni.copy(m),D.ni.negate(D.ni),m.scale(_,m),p.scale(T,p),m.vadd(p,m),v.scale(E,v),m.vadd(v,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let I=u.get(),M=Wv;for(let D=0;D!==2&&!b;D++)for(let J=0;J!==2&&!b;J++)for(let H=0;H!==2&&!b;H++)if(I.set(0,0,0),D?I.vadd(f[0],I):I.vsub(f[0],I),J?I.vadd(f[1],I):I.vsub(f[1],I),H?I.vadd(f[2],I):I.vsub(f[2],I),s.vadd(I,M),M.vsub(n,M),M.lengthSquared()<g*g){if(d)return!0;b=!0;let j=this.createContactEquation(a,l,t,e,c,h);j.ri.copy(M),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(g,j.ri),j.rj.copy(I),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(s,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}u.release(I),I=null;let x=u.get(),P=u.get(),B=u.get(),L=u.get(),U=u.get(),z=f.length;for(let D=0;D!==z&&!b;D++)for(let J=0;J!==z&&!b;J++)if(D%3!==J%3){f[J].cross(f[D],x),x.normalize(),f[D].vadd(f[J],P),B.copy(n),B.vsub(P,B),B.vsub(s,B);let H=B.dot(x);x.scale(H,L);let j=0;for(;j===D%3||j===J%3;)j++;U.copy(n),U.vsub(L,U),U.vsub(P,U),U.vsub(s,U);let at=Math.abs(H),ft=U.length();if(at<f[j].length()&&ft<g){if(d)return!0;b=!0;let rt=this.createContactEquation(a,l,t,e,c,h);P.vadd(L,rt.rj),rt.rj.copy(rt.rj),U.negate(rt.ni),rt.ni.normalize(),rt.ri.copy(rt.rj),rt.ri.vadd(s,rt.ri),rt.ri.vsub(n,rt.ri),rt.ri.normalize(),rt.ri.scale(g,rt.ri),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(l.position,rt.rj),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult)}}u.release(x,P,B,L,U)}planeBox(t,e,n,s,r,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,d)}convexConvex(t,e,n,s,r,o,a,l,c,h,d,u,f){let g=ly;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,g,u,f)){let b=[],m=cy;t.clipAgainstHull(n,r,e,s,o,g,-100,100,b);let p=0;for(let v=0;v!==b.length;v++){if(d)return!0;let _=this.createContactEquation(a,l,t,e,c,h),y=_.ri,T=_.rj;g.negate(_.ni),b[v].normal.negate(m),m.scale(b[v].depth,m),b[v].point.vadd(m,y),T.copy(b[v].point),y.vsub(n,y),T.vsub(s,T),y.vadd(n,y),y.vsub(a.position,y),T.vadd(s,T),T.vsub(l.position,T),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,r,o,a,l,c,h,d){let u=this.v3pool;n.vsub(s,$v);let f=e.faceNormals,g=e.faces,b=e.vertices,m=t.radius,p=!1;for(let v=0;v!==b.length;v++){let _=b[v],y=Kv;o.vmult(_,y),s.vadd(y,y);let T=Jv;if(y.vsub(n,T),T.lengthSquared()<m*m){if(d)return!0;p=!0;let E=this.createContactEquation(a,l,t,e,c,h);E.ri.copy(T),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),y.vsub(s,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(s,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,_=g.length;v!==_&&p===!1;v++){let y=f[v],T=g[v],E=Qv;o.vmult(y,E);let C=ty;o.vmult(b[T[0]],C),C.vadd(s,C);let I=ey;E.scale(-m,I),n.vadd(I,I);let M=ny;I.vsub(C,M);let x=M.dot(E),P=iy;if(n.vsub(C,P),x<0&&P.dot(E)>0){let B=[];for(let L=0,U=T.length;L!==U;L++){let z=u.get();o.vmult(b[T[L]],z),s.vadd(z,z),B.push(z)}if(zv(B,E,n)){if(d)return!0;p=!0;let L=this.createContactEquation(a,l,t,e,c,h);E.scale(-m,L.ri),E.negate(L.ni);let U=u.get();E.scale(-x,U);let z=u.get();E.scale(-m,z),n.vsub(s,L.rj),L.rj.vadd(z,L.rj),L.rj.vadd(U,L.rj),L.rj.vadd(s,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),u.release(U),u.release(z),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let D=0,J=B.length;D!==J;D++)u.release(B[D]);return}else for(let L=0;L!==T.length;L++){let U=u.get(),z=u.get();o.vmult(b[T[(L+1)%T.length]],U),o.vmult(b[T[(L+2)%T.length]],z),s.vadd(U,U),s.vadd(z,z);let D=Zv;z.vsub(U,D);let J=jv;D.unit(J);let H=u.get(),j=u.get();n.vsub(U,j);let at=j.dot(J);J.scale(at,H),H.vadd(U,H);let ft=u.get();if(H.vsub(n,ft),at>0&&at*at<D.lengthSquared()&&ft.lengthSquared()<m*m){if(d)return!0;let rt=this.createContactEquation(a,l,t,e,c,h);H.vsub(s,rt.rj),H.vsub(n,rt.ni),rt.ni.normalize(),rt.ni.scale(m,rt.ri),rt.rj.vadd(s,rt.rj),rt.rj.vsub(l.position,rt.rj),rt.ri.vadd(n,rt.ri),rt.ri.vsub(a.position,rt.ri),this.result.push(rt),this.createFrictionEquationsFromContact(rt,this.frictionResult);for(let Zt=0,ne=B.length;Zt!==ne;Zt++)u.release(B[Zt]);u.release(U),u.release(z),u.release(H),u.release(ft),u.release(j);return}u.release(U),u.release(z),u.release(H),u.release(ft),u.release(j)}for(let L=0,U=B.length;L!==U;L++)u.release(B[L])}}}planeConvex(t,e,n,s,r,o,a,l,c,h,d){let u=sy,f=ry;f.set(0,0,1),r.vmult(f,f);let g=0,b=oy;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),o.vmult(u,u),s.vadd(u,u),u.vsub(n,b),f.dot(b)<=0){if(d)return!0;let v=this.createContactEquation(a,l,t,e,c,h),_=ay;f.scale(f.dot(b),_),u.vsub(_,_),_.vsub(n,v.ri),v.ni.copy(f),u.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,s,r,o,a,l,c,h,d){let u=e.data,f=t.radius,g=e.elementSize,b=xy,m=_y;te.pointToLocalFrame(s,o,n,m);let p=Math.floor((m.x-f)/g)-1,v=Math.ceil((m.x+f)/g)+1,_=Math.floor((m.y-f)/g)-1,y=Math.ceil((m.y+f)/g)+1;if(v<0||y<0||p>u.length||_>u[0].length)return;p<0&&(p=0),v<0&&(v=0),_<0&&(_=0),y<0&&(y=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),y>=u[0].length&&(y=u[0].length-1),_>=u[0].length&&(_=u[0].length-1);let T=[];e.getRectMinMax(p,_,v,y,T);let E=T[0],C=T[1];if(m.z-f>C||m.z+f<E)return;let I=this.result;for(let M=p;M<v;M++)for(let x=_;x<y;x++){let P=I.length,B=!1;if(e.getConvexTrianglePillar(M,x,!1),te.pointToWorldFrame(s,o,e.pillarOffset,b),n.distanceTo(b)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,b,r,o,a,l,t,e,d)),d&&B||(e.getConvexTrianglePillar(M,x,!0),te.pointToWorldFrame(s,o,e.pillarOffset,b),n.distanceTo(b)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(B=this.sphereConvex(t,e.pillarConvex,n,b,r,o,a,l,t,e,d)),d&&B))return!0;if(I.length-P>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,s,r,o,a,l,c,h,d){let u=e.data,f=e.elementSize,g=t.boundingSphereRadius,b=vy,m=yy,p=by;te.pointToLocalFrame(s,o,n,p);let v=Math.floor((p.x-g)/f)-1,_=Math.ceil((p.x+g)/f)+1,y=Math.floor((p.y-g)/f)-1,T=Math.ceil((p.y+g)/f)+1;if(_<0||T<0||v>u.length||y>u[0].length)return;v<0&&(v=0),_<0&&(_=0),y<0&&(y=0),T<0&&(T=0),v>=u.length&&(v=u.length-1),_>=u.length&&(_=u.length-1),T>=u[0].length&&(T=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);let E=[];e.getRectMinMax(v,y,_,T,E);let C=E[0],I=E[1];if(!(p.z-g>I||p.z+g<C))for(let M=v;M<_;M++)for(let x=y;x<T;x++){let P=!1;if(e.getConvexTrianglePillar(M,x,!1),te.pointToWorldFrame(s,o,e.pillarOffset,b),n.distanceTo(b)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,b,r,o,a,l,null,null,d,m,null)),d&&P||(e.getConvexTrianglePillar(M,x,!0),te.pointToWorldFrame(s,o,e.pillarOffset,b),n.distanceTo(b)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(P=this.convexConvex(t,e.pillarConvex,n,b,r,o,a,l,null,null,d,m,null)),d&&P))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,h,d){let u=fy;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,h,d){let u=hy;u.set(0,0,1),a.quaternion.vmult(u,u);let f=uy;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let b=this.createContactEquation(l,a,e,t,c,h);b.ni.copy(u),b.ni.negate(b.ni),b.ri.set(0,0,0);let m=dy;u.scale(u.dot(s),m),s.vsub(m,m),b.rj.copy(m),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}convexParticle(t,e,n,s,r,o,a,l,c,h,d){let u=-1,f=my,g=gy,b=null,m=py;if(m.copy(s),m.vsub(n,m),r.conjugate(Kd),Kd.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,v=t.faces.length;p!==v;p++){let _=[t.worldVertices[t.faces[p][0]]],y=t.worldFaceNormals[p];s.vsub(_[0],Qd);let T=-y.dot(Qd);if(b===null||Math.abs(T)<Math.abs(b)){if(d)return!0;b=T,u=p,f.copy(y)}}if(u!==-1){let p=this.createContactEquation(l,a,e,t,c,h);f.scale(b,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);let v=p.ri,_=p.rj;v.vadd(s,v),v.vsub(l.position,v),_.vadd(n,_),_.vsub(a.position,_),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,h,d){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,h,d)}particleCylinder(t,e,n,s,r,o,a,l,c,h,d){return this.convexParticle(e,t,s,n,o,r,l,a,c,h,d)}sphereTrimesh(t,e,n,s,r,o,a,l,c,h,d){let u=Ev,f=Tv,g=Av,b=Cv,m=Rv,p=Iv,v=Nv,_=wv,y=Sv,T=Dv;te.pointToLocalFrame(s,o,n,m);let E=t.radius;v.lowerBound.set(m.x-E,m.y-E,m.z-E),v.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(v,T);let C=Mv,I=t.radius*t.radius;for(let L=0;L<T.length;L++)for(let U=0;U<3;U++)if(e.getVertex(e.indices[T[L]*3+U],C),C.vsub(m,y),y.lengthSquared()<=I){if(_.copy(C),te.pointToWorldFrame(s,o,_,C),C.vsub(n,y),d)return!0;let z=this.createContactEquation(a,l,t,e,c,h);z.ni.copy(y),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(t.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(C),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let L=0;L<T.length;L++)for(let U=0;U<3;U++){e.getVertex(e.indices[T[L]*3+U],u),e.getVertex(e.indices[T[L]*3+(U+1)%3],f),f.vsub(u,g),m.vsub(f,p);let z=p.dot(g);m.vsub(u,p);let D=p.dot(g);if(D>0&&z<0&&(m.vsub(u,p),b.copy(g),b.normalize(),D=p.dot(b),b.scale(D,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;let H=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,H.ni),H.ni.normalize(),H.ni.scale(t.radius,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),te.pointToWorldFrame(s,o,p,p),p.vsub(l.position,H.rj),te.vectorToWorldFrame(o,H.ni,H.ni),te.vectorToWorldFrame(o,H.ri,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}let M=Pv,x=Lv,P=Fv,B=xv;for(let L=0,U=T.length;L!==U;L++){e.getTriangleVertices(T[L],M,x,P),e.getNormal(T[L],B),m.vsub(M,p);let z=p.dot(B);if(B.scale(z,p),m.vsub(p,p),z=p.distanceTo(m),un.pointInTriangle(p,M,x,P)&&z<t.radius){if(d)return!0;let D=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),te.pointToWorldFrame(s,o,p,p),p.vsub(l.position,D.rj),te.vectorToWorldFrame(o,D.ni,D.ni),te.vectorToWorldFrame(o,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}T.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,h,d){let u=new S,f=vv;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);let b=new S;b.copy(u),te.pointToWorldFrame(s,o,b,u);let m=yv;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(f);let _=_v;f.scale(m.dot(f),_),u.vsub(_,_),v.ri.copy(_),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},Ki=new S,Gs=new S,Ws=new S,pv=new S,mv=new S,gv=new Ie,bv=new Ie,vv=new S,yv=new S,_v=new S,xv=new S,Sv=new S;new S;var Mv=new S,wv=new S,Ev=new S,Tv=new S,Av=new S,Cv=new S,Rv=new S,Iv=new S,Pv=new S,Lv=new S,Fv=new S,Nv=new en,Dv=[],cl=new S,Jd=new S,Bv=new S,Uv=new S,Ov=new S;function zv(i,t,e){let n=null,s=i.length;for(let r=0;r!==s;r++){let o=i[r],a=Bv;i[(r+1)%s].vsub(o,a);let l=Uv;a.cross(t,l);let c=Ov;e.vsub(o,c);let h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var hl=new S,kv=new S,Vv=new S,Hv=new S,Gv=[new S,new S,new S,new S,new S,new S],Wv=new S,qv=new S,Xv=new S,Yv=new S,$v=new S,Zv=new S,jv=new S,Jv=new S,Kv=new S,Qv=new S,ty=new S,ey=new S,ny=new S,iy=new S;new S;new S;var sy=new S,ry=new S,oy=new S,ay=new S,ly=new S,cy=new S,hy=new S,uy=new S,dy=new S,fy=new S,Kd=new Ie,py=new S;new S;var my=new S,Qd=new S,gy=new S,by=new S,vy=new S,yy=[0],_y=new S,xy=new S,Sl=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),s=this.current,r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,s=this.previous,r=n.length,o=s.length,a=0;for(let l=0;l<r;l++){let c=!1,h=n[l];for(;h>s[a];)a++;c=h===s[a],c||tf(t,h)}a=0;for(let l=0;l<o;l++){let c=!1,h=s[l];for(;h>n[a];)a++;c=n[a]===h,c||tf(e,h)}}};function tf(i,t){i.push((t&4294901760)>>16,t&65535)}var oh=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`,gh=class{constructor(){this.data={keys:[]}}get(t,e){let n=oh(t,e);return this.data[n]}set(t,e,n){let s=oh(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){let n=oh(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},Ml=class extends dl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new lh,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new dh,this.constraints=[],this.narrowphase=new mh(this),this.collisionMatrix=new ul,this.collisionMatrixPrevious=new ul,this.bodyOverlapKeeper=new Sl,this.shapeOverlapKeeper=new Sl,this.contactmaterials=[],this.contactMaterialTable=new gh,this.defaultMaterial=new $s("default"),this.defaultContactMaterial=new Ys(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Xs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=un.ALL,n.from=t,n.to=e,n.callback=s,ah.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=un.ANY,n.from=t,n.to=e,n.result=s,ah.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=un.CLOSEST,n.from=t,n.to=e,n.result=s,ah.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ht&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let s=e[n].shapes;for(let r=0;r<s.length;r++){let o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Re.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let s=Re.now(),r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Re.now()-s>t*1e3)););this.accumulator=this.accumulator%t;let o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=Ty,s=Ay,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Ht.DYNAMIC,u=-1/0,f=this.constraints,g=Ey;l.length();let b=l.x,m=l.y,p=l.z,v=0;for(c&&(u=Re.now()),v=0;v!==r;v++){let L=o[v];if(L.type===d){let U=L.force,z=L.mass;U.x+=z*b,U.y+=z*m,U.z+=z*p}}for(let L=0,U=this.subsystems.length;L!==U;L++)this.subsystems[L].update();c&&(u=Re.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(h.broadphase=Re.now()-u);let _=f.length;for(v=0;v!==_;v++){let L=f[v];if(!L.collideConnected)for(let U=n.length-1;U>=0;U-=1)(L.bodyA===n[U]&&L.bodyB===s[U]||L.bodyB===n[U]&&L.bodyA===s[U])&&(n.splice(U,1),s.splice(U,1))}this.collisionMatrixTick(),c&&(u=Re.now());let y=wy,T=e.length;for(v=0;v!==T;v++)y.push(e[v]);e.length=0;let E=this.frictionEquations.length;for(v=0;v!==E;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,y,this.frictionEquations,g),c&&(h.narrowphase=Re.now()-u),c&&(u=Re.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let C=e.length;for(let L=0;L!==C;L++){let U=e[L],z=U.bi,D=U.bj,J=U.si,H=U.sj,j;if(z.material&&D.material?j=this.getContactMaterial(z.material,D.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,z.material&&D.material&&(z.material.friction>=0&&D.material.friction>=0&&z.material.friction*D.material.friction,z.material.restitution>=0&&D.material.restitution>=0&&(U.restitution=z.material.restitution*D.material.restitution)),a.addEquation(U),z.allowSleep&&z.type===Ht.DYNAMIC&&z.sleepState===Ht.SLEEPING&&D.sleepState===Ht.AWAKE&&D.type!==Ht.STATIC){let at=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),ft=D.sleepSpeedLimit**2;at>=ft*2&&(z.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===Ht.DYNAMIC&&D.sleepState===Ht.SLEEPING&&z.sleepState===Ht.AWAKE&&z.type!==Ht.STATIC){let at=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),ft=z.sleepSpeedLimit**2;at>=ft*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,D,!0),this.collisionMatrixPrevious.get(z,D)||(qr.body=D,qr.contact=U,z.dispatchEvent(qr),qr.body=z,D.dispatchEvent(qr)),this.bodyOverlapKeeper.set(z.id,D.id),this.shapeOverlapKeeper.set(J.id,H.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Re.now()-u,u=Re.now()),v=0;v!==r;v++){let L=o[v];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(_=f.length,v=0;v!==_;v++){let L=f[v];L.update();for(let U=0,z=L.equations.length;U!==z;U++){let D=L.equations[U];a.addEquation(D)}}a.solve(t,this),c&&(h.solve=Re.now()-u),a.removeAllEquations();let I=Math.pow;for(v=0;v!==r;v++){let L=o[v];if(L.type&d){let U=I(1-L.linearDamping,t),z=L.velocity;z.scale(U,z);let D=L.angularVelocity;if(D){let J=I(1-L.angularDamping,t);D.scale(J,D)}}}this.dispatchEvent(My),c&&(u=Re.now());let x=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(v=0;v!==r;v++)o[v].integrate(t,x,P);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Re.now()-u),this.stepnumber+=1,this.dispatchEvent(Sy);let B=!0;if(this.allowSleep)for(B=!1,v=0;v!==r;v++){let L=o[v];L.sleepTick(this.time),L.sleepState!==Ht.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ai,li),t){for(let r=0,o=ai.length;r<o;r+=2)Xr.bodyA=this.getBodyById(ai[r]),Xr.bodyB=this.getBodyById(ai[r+1]),this.dispatchEvent(Xr);Xr.bodyA=Xr.bodyB=null}if(e){for(let r=0,o=li.length;r<o;r+=2)Yr.bodyA=this.getBodyById(li[r]),Yr.bodyB=this.getBodyById(li[r+1]),this.dispatchEvent(Yr);Yr.bodyA=Yr.bodyB=null}ai.length=li.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(ai,li),n){for(let r=0,o=ai.length;r<o;r+=2){let a=this.getShapeById(ai[r]),l=this.getShapeById(ai[r+1]);ci.shapeA=a,ci.shapeB=l,a&&(ci.bodyA=a.body),l&&(ci.bodyB=l.body),this.dispatchEvent(ci)}ci.bodyA=ci.bodyB=ci.shapeA=ci.shapeB=null}if(s){for(let r=0,o=li.length;r<o;r+=2){let a=this.getShapeById(li[r]),l=this.getShapeById(li[r+1]);hi.shapeA=a,hi.shapeB=l,a&&(hi.bodyA=a.body),l&&(hi.bodyB=l.body),this.dispatchEvent(hi)}hi.bodyA=hi.bodyB=hi.shapeA=hi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new en;var ah=new un,Re=globalThis.performance||{};if(!Re.now){let i=Date.now();Re.timing&&Re.timing.navigationStart&&(i=Re.timing.navigationStart),Re.now=()=>Date.now()-i}new S;var Sy={type:"postStep"},My={type:"preStep"},qr={type:Ht.COLLIDE_EVENT_NAME,body:null,contact:null},wy=[],Ey=[],Ty=[],Ay=[],ai=[],li=[],Xr={type:"beginContact",bodyA:null,bodyB:null},Yr={type:"endContact",bodyA:null,bodyB:null},ci={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},hi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var Zs={wood:{friction:.62,restitution:.1,drag:.035,rolling:.22},metal:{friction:.32,restitution:.22,drag:.015,rolling:.08},stone:{friction:.82,restitution:.035,drag:.025,rolling:.32},ceramic:{friction:.46,restitution:.14,drag:.025,rolling:.16},glass:{friction:.25,restitution:.18,drag:.02,rolling:.1},projectile:{friction:.28,restitution:.28,drag:.008,rolling:.06}},Ry={metal:13,wood:8},Iy=.3,Py=3,Ly=.1,Fy=-1.55,wl=class{constructor({level:t,physics:e,tuning:n,materialOf:s,onBreak:r=()=>{},onImpact:o=()=>{}}){this.level=t,this.physics=e,this.tuning=n,this.onBreak=r,this.onImpact=o,this.time=0,this.shots=0,this.lastShot=-99,this.cleared=0,this.blocks=[],this.balls=[],this.pending=new Map,this.rotationAngle=0;let a=new Ml({gravity:new S(0,e.gravityY,0),allowSleep:!0});a.broadphase=new ml(a),a.solver.iterations=25,a.solver.tolerance=1e-4,a.defaultContactMaterial.friction=.6,a.defaultContactMaterial.restitution=0,a.defaultContactMaterial.contactEquationStiffness=1e8,this.world=a,this.materials=Object.fromEntries(Object.keys(Zs).map(h=>[h,new $s(h)]));let l=Object.keys(Zs);for(let h=0;h<l.length;h++)for(let d=h;d<l.length;d++){let u=Zs[l[h]],f=Zs[l[d]];a.addContactMaterial(new Ys(this.materials[l[h]],this.materials[l[d]],{friction:Math.sqrt(u.friction*f.friction),restitution:Math.min(u.restitution,f.restitution),contactEquationStiffness:1e8}))}let c=new Ht({mass:0,material:this.materials.stone,shape:new xl});c.quaternion.setFromEuler(-Math.PI/2,0,0),c.position.y=Fy,c.isGround=!0,a.addBody(c),this.tables=t.tables.map(h=>{let d=new Ht({mass:0,material:this.materials.wood,shape:new qs(new S(h.dim[0]/2,.175,h.dim[1]/2)),position:new S(h.pos[0],h.pos[1]-.175,h.pos[2]),quaternion:new Ie(...h.rot)});return a.addBody(d),{data:h,body:d}});for(let h of t.objects)this.addBlock(h,s)}addBlock(t,e){let{level:n,physics:s,tuning:r}=this,o=this.tables.find(E=>E.data.id===t.table)||this.tables[0],a=new Ie(...t.rot),l=new S(...t.pos);o.body.quaternion.vmult(l,l),l.vadd(new S(...o.data.pos),l),o.body.quaternion.mult(a,a);let c=Math.max(1,Math.round(t.s[0]*t.s[1]*t.s[2])),h=s.massByType[t.t]||[1],d=r.lateMass,u=n.id>=d.fromLevel?d[t.t]??d.other:1,f=(h[Math.min(c-1,h.length-1)]||1)*n.massScale*u,g=t.s.map(Math.abs),b=Dd.has(t.t)?new _l(g[0]*(t.t===2?.3:.485),g[0]*.485,g[1]*.98,12):new qs(new S(g[0]*.495,g[1]*.495,g[2]*.495)),m=e(t.t,n),p=Zs[m]||Zs.wood,v=new Ht({mass:f,material:this.materials[m]||this.materials.wood,shape:b,position:l,quaternion:a,linearDamping:p.drag,angularDamping:p.rolling,allowSleep:!0,sleepSpeedLimit:.15,sleepTimeLimit:.8}),_=eh(t.t,n.id,r),y={data:t,body:v,kind:m,removed:!1,hits:0,requiredHits:_?th(t.t,n.id,r):m==="metal"?2:1,counted:_,clamped:_&&(r.heavyRule==="allFromLevel6"||r.heavyClampToTable),hitBalls:new Set,home:l.clone(),table:o,lastImpact:-1};v.block=y,v.sleep(),this.world.addBody(v),this.blocks.push(y);let T=(Ry[m]??5.5)*(1+(n.massScale-1)*.7);v.addEventListener("collide",E=>{if(y.removed||this.shots===0)return;let C=Math.abs(E.contact.getImpactVelocityAlongNormal()),I=E.body;if(I.isGround){this.onImpact(y,"floor",C),y.clamped||this.pending.set(y,"fall");return}if(C>2.5&&this.time-y.lastImpact>.12&&(y.lastImpact=this.time,this.onImpact(y,"hit",C)),I.isProjectile){if(y.hitBalls.has(I.id))return;if(y.hitBalls.add(I.id),y.hits++,v.wakeUp(),!y.counted&&!I.boosted&&C>=s.destroyVelocityThreshold){I.boosted=!0;let M=I.velocity.clone();M.normalize();let x=C*I.mass*v.mass/(I.mass+v.mass)*(s.ballFirstHitBoomPower-1);v.applyImpulse(M.scale(x))}if(y.clamped){let M=Math.hypot(v.velocity.x,v.velocity.z);M>3&&(v.velocity.x*=3/M,v.velocity.z*=3/M),v.angularVelocity.scale(.45,v.angularVelocity)}y.hits>=y.requiredHits&&this.pending.set(y,m)}else!y.counted&&C>T&&this.pending.set(y,m)})}canShoot(){return this.shots<this.level.ammo&&this.time-this.lastShot>=Ly}shoot(t,e){if(!this.canShoot())return null;this.lastShot=this.time,this.shots++;for(let o of this.blocks)o.removed||o.body.wakeUp();let n=new Ht({mass:this.physics.projectileMass,material:this.materials.projectile,shape:new yl(Iy),position:new S(...t),linearDamping:0,angularDamping:.05}),s=new S(...e);s.normalize(),s.scale(this.physics.projectileInitialSpeed,n.velocity),n.isProjectile=!0,this.world.addBody(n);let r={body:n,born:this.time,removed:!1};return this.balls.push(r),r}remove(t,e){if(!t.removed){t.removed=!0,this.cleared++,this.world.removeBody(t.body),this.onBreak(t,e);for(let n of this.blocks)!n.removed&&n.body.position.distanceTo(t.body.position)<2.5&&n.body.wakeUp()}}rotatePlatforms(t){if(!this.level.rotating)return;let e=this.level.rotationSpeed*t,n=new Ie;n.setFromAxisAngle(new S(0,1,0),e),this.rotationAngle+=e;for(let s of this.tables)n.mult(s.body.quaternion,s.body.quaternion),s.body.aabbNeedsUpdate=!0;for(let s of this.blocks){if(s.removed)continue;let r=new S(...s.table.data.pos),o=s.body,a=Math.hypot(s.table.data.dim[0],s.table.data.dim[1]);if(o.position.y>=r.y-.2&&Math.hypot(o.position.x-r.x,o.position.z-r.z)<a){let c=o.position.vsub(r);n.vmult(c,c),c.vadd(r,o.position),n.mult(o.quaternion,o.quaternion),n.vmult(o.velocity,o.velocity),n.vmult(o.angularVelocity,o.angularVelocity),o.aabbNeedsUpdate=!0}let l=s.home.vsub(r);n.vmult(l,l),l.vadd(r,s.home)}this.world.broadphase.dirty=!0}step(t){let e=Math.min(t,.05),n=Math.max(1,Math.ceil(e*240)),s=e/n;for(let r=0;r<n;r++){this.time+=s,this.rotatePlatforms(s),this.world.step(s);for(let o of this.blocks)o.clamped&&!o.removed&&this.clampToTable(o);for(let[o,a]of this.pending)this.remove(o,a);if(this.pending.clear(),!!this.shots)for(let o of this.blocks){if(o.removed)continue;let a=o.body.position;o.clamped?(a.y<-5||Math.abs(a.x)>14||Math.abs(a.z)>22)&&(a.copy(o.home),o.body.velocity.setZero(),o.body.angularVelocity.setZero()):(a.y<-.8||Math.abs(a.x)>25||Math.abs(a.z)>30)&&this.remove(o,"fall")}}for(let r of this.balls)!r.removed&&this.time-r.born>Py&&(r.removed=!0,this.world.removeBody(r.body));this.balls=this.balls.filter(r=>!r.removed)}clampToTable(t){let e=t.table.data,n=new S(...e.pos),r=t.table.body.quaternion.inverse().vmult(t.body.position.vsub(n)),o=e.dim[0]/2-t.data.s[0]*.55,a=e.dim[1]/2-t.data.s[2]*.55,l=Math.max(-o,Math.min(o,r.x)),c=Math.max(-a,Math.min(a,r.z));(l!==r.x||c!==r.z)&&(r.x=l,r.z=c,t.table.body.quaternion.vmult(r,r),r.vadd(n,t.body.position),t.body.velocity.x=t.body.velocity.z=0);let h=e.pos[1]+t.data.s[1]*.49;t.body.position.y<h&&(t.body.position.y=h,t.body.velocity.y=Math.max(0,t.body.velocity.y))}get remaining(){return this.blocks.length-this.cleared}get ammoLeft(){return this.level.ammo-this.shots}get result(){return this.remaining===0?"win":this.shots>=this.level.ammo&&this.time-this.lastShot>5&&this.blocks.every(t=>t.removed||t.body.velocity.length()<.5)?"lose":null}};var El=class extends Hi{constructor(){super();let t=new Qe;t.deleteAttribute("uv");let e=new xe({side:Be}),n=new xe,s=new Nr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Mr(t,n,6),a=new we;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Dt(t,js(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Dt(t,js(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Dt(t,js(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Dt(t,js(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Dt(t,js(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Dt(t,js(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function js(i){return new Pr({color:0,emissive:16777215,emissiveIntensity:i})}var Zr=new N;function dn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Zr.copy(t),Zr[n]=0,Zr.normalize();let c=.5*o/(o+a),h=1-Zr.angleTo(i)/l;return Math.sign(Zr[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ri=class i extends Qe{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,b=new N,m=.5/o;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=h.x*Math.sign(l.x)+c.x*r,d[p+1]=h.y*Math.sign(l.y)+c.y*r,d[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:b.set(1,0,0),f[v+0]=dn(b,c,"z","y",r,n),f[v+1]=1-dn(b,c,"y","z",r,e);break;case 1:b.set(-1,0,0),f[v+0]=1-dn(b,c,"z","y",r,n),f[v+1]=1-dn(b,c,"y","z",r,e);break;case 2:b.set(0,1,0),f[v+0]=1-dn(b,c,"x","z",r,t),f[v+1]=dn(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),f[v+0]=1-dn(b,c,"x","z",r,t),f[v+1]=1-dn(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),f[v+0]=1-dn(b,c,"x","y",r,t),f[v+1]=1-dn(b,c,"y","x",r,e);break;case 5:b.set(0,0,-1),f[v+0]=dn(b,c,"x","y",r,t),f[v+1]=1-dn(b,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Ii=new N(0,.6,-5.02),_h=new N(0,6.5,-14.2),cf=new N(0,2.1,2.8),Ny=-1.55,Tl=class{constructor(t){let e=new el({canvas:t,antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio||1,2)),e.shadowMap.enabled=!0,e.shadowMap.type=ia,e.outputColorSpace=_e,e.toneMapping=da,e.toneMappingExposure=.95,e.setClearColor(0,0),this.renderer=e;let n=new Hi,s=new ks(e);n.environment=s.fromScene(new El,.04).texture,n.environmentIntensity=.5,s.dispose(),this.scene=n,this.camera=new De(45,1,.1,120),this.cameraBase=_h.clone(),this.hemi=new Fr(16777215,9136714,.75),n.add(this.hemi);let r=new Ps(16774361,2.5);r.position.set(9,18,-10),r.castShadow=!0,r.shadow.mapSize.set(2048,2048),Object.assign(r.shadow.camera,{left:-12,right:12,top:16,bottom:-10,near:.5,far:60}),r.shadow.bias=-3e-4,r.shadow.normalBias=.02,n.add(r),this.key=r,this.fill=new Ps(12970495,.9),this.fill.position.set(-8,6,8),n.add(this.fill);let o=new Dt(new Ln(80,80),new Ir({opacity:.32}));o.rotation.x=-Math.PI/2,o.position.y=Ny,o.receiveShadow=!0,n.add(o),this.levelGroup=new Fe,n.add(this.levelGroup),this.buildCannon(),this.buildAim()}applyLight(t){this.hemi.color.set(t.hemiSky),this.hemi.groundColor.set(t.hemiGround),this.key.color.set(t.key),this.key.intensity=t.keyPower,this.fill.color.set(t.fill),this.fill.intensity=t.fillPower,this.renderer.toneMappingExposure=t.exposure}clearLevel(){for(let t of[...this.levelGroup.children])this.levelGroup.remove(t),t.userData.disposable&&t.traverse(e=>{e.isMesh&&e.geometry.dispose()})}buildTable(t,e){let[n,s]=t.dim,r=new Fe;r.position.set(...t.pos),r.quaternion.set(...t.rot);let o=new xe({color:e.top,roughness:.55}),a=new xe({color:e.trim,roughness:.3,metalness:.8}),l=new xe({color:e.legs,roughness:.5}),c=new Dt(new Ri(n+.12,.35,s+.12,2,.05),o);c.position.y=-.175;let h=new Dt(new Ri(n+.2,.1,s+.2,2,.04),a);h.position.y=-.3,r.add(c,h);for(let d of[-1,1])for(let u of[-1,1]){let f=new Dt(new Sn(.11,.08,1.2,16),l);f.position.set(d*(n/2-.22),-.95,u*(s/2-.22));let g=new Dt(new Mn(.12,12,8),a);g.position.set(f.position.x,-1.55,f.position.z),r.add(f,g)}return r.traverse(d=>{d.isMesh&&(d.castShadow=d.receiveShadow=!0)}),r.userData.tableId=t.id,r.userData.disposable=!0,this.levelGroup.add(r),r}buildCannon(){let t=new xe({color:15777856,metalness:.95,roughness:.22}),e=new xe({color:5975171,roughness:.45,metalness:.15}),n=new xe({color:2757184,roughness:.5}),s=new Fe;s.position.copy(Ii);let r=new Dt(new Ri(1.5,.55,1.9,2,.08),e);r.position.set(0,-.62,-.25),s.add(r);for(let u of[-1,1]){let f=new Dt(new Sn(.48,.48,.16,28),n);f.rotation.z=Math.PI/2,f.position.set(u*.86,-.75,-.25);let g=new Dt(new Fn(.42,.06,8,28),t);g.rotation.y=Math.PI/2,g.position.copy(f.position);let b=new Dt(new Sn(.12,.12,.2,16),t);b.rotation.z=Math.PI/2,b.position.copy(f.position),s.add(f,g,b)}let o=new Fe;o.position.set(0,-.15,-.25);let a=[[0,-1.45],[.4,-1.45],[.48,-1.3],[.42,-1.1],[.38,-.4],[.33,.6],[.4,.7],[.4,.82],[.3,.84],[.26,.6],[0,.6]],l=new Gi(a.map(([u,f])=>new Tt(u,f)),36),c=new Dt(l,t);c.rotation.x=Math.PI/2;let h=new Fe;h.add(c);for(let u of[-.7,.1]){let f=new Dt(new Fn(.4,.05,8,32),e);f.position.z=u,h.add(f)}let d=new Dt(new Mn(.18,16,12),t);d.position.z=-1.55,h.add(d),o.add(h),s.add(o),s.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),this.cannon={root:s,pivot:o,recoil:h},this.scene.add(s)}setCannonLogo(t){if(!t)return;let e=new Ee(t);e.colorSpace=_e,e.needsUpdate=!0;let n=t.width/t.height,s=new Dt(new Ln(1.3,1.3/n),new cn({map:e,transparent:!0,toneMapped:!1}));s.position.set(0,-.6,-1.21),s.rotation.y=Math.PI,this.cannon.root.add(s)}aimCannon(t){let e=new N(...t).add(this.cannon.root.position);this.cannon.pivot.lookAt(e)}buildAim(){this.dots=new Fe;let t=new Mn(.05,8,6),e=new cn({color:16777215,transparent:!0,opacity:.85,toneMapped:!1});for(let n=0;n<22;n++)this.dots.add(new Dt(t,e));this.reticle=new Dt(new Cr(.17,.23,32),new cn({color:16769162,side:Ye,transparent:!0,opacity:.95,depthTest:!1,toneMapped:!1})),this.reticle.renderOrder=10,this.scene.add(this.dots,this.reticle)}showAim(t,e,n,s){let r=new N(...t),o=e.distanceTo(Ii);this.dots.children.forEach((a,l)=>{let c=(l+1)/23*o/n;a.position.copy(Ii).addScaledVector(r,n*c),a.position.y+=.5*s*c*c}),this.reticle.position.copy(e),this.reticle.quaternion.copy(this.camera.quaternion)}setAimVisible(t){this.dots.visible=this.reticle.visible=t}resize(t,e){this.renderer.setSize(t,e,!1);let n=t/e,s=_h.distanceTo(cf),r=2*Math.atan((this.fitHalfWidth||3.6)/s),o=2*Math.atan(Math.tan(r/2)/n);this.camera.fov=si.clamp(si.radToDeg(o),49,66),this.camera.aspect=n,this.camera.position.copy(_h),this.camera.lookAt(cf),this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}};var Cl='"PingFang TC","Microsoft JhengHei","Noto Sans TC","Heiti TC",sans-serif';function jr(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function uf(i,t,e){if(i.save(),i.globalAlpha=.22,i.fillStyle=e,i.strokeStyle=e,t==="stripes"){i.lineWidth=26;for(let n=-512;n<512*2;n+=70)i.beginPath(),i.moveTo(n,0),i.lineTo(n+512,512),i.stroke()}else if(t==="dots"||t==="goji"){t==="goji"&&(i.globalAlpha=.85);for(let n=30;n<512;n+=64)for(let s=n/64%2?62:30;s<512;s+=64)i.beginPath(),t==="goji"?i.ellipse(s,n,9,14,.6,0,7):i.arc(s,n,12,0,7),i.fill()}else if(t==="diamonds"){i.lineWidth=6;for(let n=-512;n<512*2;n+=64)i.beginPath(),i.moveTo(n,0),i.lineTo(n+512,512),i.moveTo(n+512,0),i.lineTo(n,512),i.stroke()}else if(t==="brocade"){i.lineWidth=5;for(let n=0;n<572;n+=84)for(let s=n/84%2?42:0;s<572;s+=84)i.beginPath(),i.arc(s,n,28,0,Math.PI),i.stroke(),i.beginPath(),i.arc(s,n+14,12,Math.PI,0),i.stroke()}else if(t==="capsules"){i.globalAlpha=.35;for(let n=0;n<14;n++){let s=n*137%512,r=n*211%512;i.beginPath(),i.arc(s,r,30,0,7),i.fill()}}else if(t==="hills"){i.globalAlpha=.3;for(let n=0;n<3;n++){i.beginPath(),i.moveTo(0,512);for(let s=0;s<=512;s+=16)i.lineTo(s,330+n*50+Math.sin(s/60+n)*30);i.lineTo(512,512),i.fill()}}else if(t==="knit"){i.lineWidth=8;for(let n=20;n<512;n+=40)for(let s=0;s<512;s+=40)i.beginPath(),i.moveTo(s,n),i.lineTo(s+20,n+20),i.lineTo(s+40,n),i.stroke()}else if(t==="swirl"){i.lineWidth=18;for(let n=30;n<400;n+=50)i.beginPath(),i.arc(512/2,512/2-40,n,n/40,n/40+4),i.stroke()}i.restore()}var Ue={coin(i,t,e,n,s){s.coin&&i.drawImage(s.coin,t-n,e-n,n*2,n*2)},head(i,t,e,n,s){i.save(),i.beginPath(),i.arc(t,e,n,0,7),i.fillStyle="#fff6dc",i.fill(),i.clip(),s.head&&i.drawImage(s.head,t-n,e-n,n*2,n*2),i.restore(),i.lineWidth=n*.12,i.strokeStyle="#e7b84a",i.beginPath(),i.arc(t,e,n,0,7),i.stroke()},headGray(i,t,e,n,s){i.save(),i.filter="grayscale(1) contrast(1.15) brightness(1.08)",Ue.head(i,t,e,n,s),i.restore()},mustache(i,t,e,n,s,r="#ffffff"){i.save(),i.translate(t,e),i.fillStyle=r,i.strokeStyle="rgba(0,0,0,.35)",i.lineWidth=n*.06;for(let o of[-1,1])i.beginPath(),i.moveTo(0,-n*.05),i.bezierCurveTo(o*n*.35,-n*.45,o*n*.95,-n*.2,o*n*1.05,-n*.55),i.bezierCurveTo(o*n*1.15,n*.05,o*n*.5,n*.35,0,n*.12),i.fill(),i.stroke();i.restore()},monocle(i,t,e,n){i.save(),i.strokeStyle="#f2c94c",i.lineWidth=n*.16,i.beginPath(),i.arc(t,e,n*.7,0,7),i.stroke(),i.fillStyle="rgba(200,230,255,.35)",i.fill(),i.lineWidth=n*.05,i.setLineDash([n*.08,n*.06]),i.beginPath(),i.moveTo(t+n*.6,e+n*.35),i.quadraticCurveTo(t+n*1.1,e+n*.9,t+n*.7,e+n*1.2),i.stroke(),i.restore()},bowtie(i,t,e,n){i.save(),i.fillStyle="#7b2fbf",i.strokeStyle="#3a0d66",i.lineWidth=n*.06;for(let s of[-1,1])i.beginPath(),i.moveTo(t,e),i.lineTo(t+s*n,e-n*.6),i.lineTo(t+s*n,e+n*.6),i.closePath(),i.fill(),i.stroke();i.beginPath(),i.arc(t,e,n*.22,0,7),i.fillStyle="#9b4fd8",i.fill(),i.stroke(),i.restore()},sparkle(i,t,e,n){i.save(),i.fillStyle="#fff3b0";for(let[s,r,o]of[[0,0,1],[-.7,-.6,.45],[.75,.5,.35]]){let a=t+s*n,l=e+r*n,c=n*.8*o;i.beginPath(),i.moveTo(a,l-c),i.quadraticCurveTo(a,l,a+c,l),i.quadraticCurveTo(a,l,a,l+c),i.quadraticCurveTo(a,l,a-c,l),i.quadraticCurveTo(a,l,a,l-c),i.fill()}i.restore()},goldbar(i,t,e,n){i.save();let s=i.createLinearGradient(t-n,e-n,t+n,e+n);s.addColorStop(0,"#fff2a8"),s.addColorStop(1,"#d4a017"),i.fillStyle=s,i.strokeStyle="#8a6400",i.lineWidth=n*.06,i.beginPath(),i.moveTo(t-n*.7,e-n*.35),i.lineTo(t+n*.7,e-n*.35),i.lineTo(t+n,e+n*.4),i.lineTo(t-n,e+n*.4),i.closePath(),i.fill(),i.stroke(),i.restore(),Ue.sparkle(i,t+n*.6,e-n*.6,n*.4)},tooth(i,t,e,n){i.save();let s=i.createLinearGradient(t,e-n,t,e+n);s.addColorStop(0,"#fff6c0"),s.addColorStop(1,"#d4a017"),i.fillStyle=s,i.strokeStyle="#7a5200",i.lineWidth=n*.06,i.beginPath(),i.moveTo(t-n*.7,e-n*.5),i.bezierCurveTo(t-n*.8,e-n,t-n*.1,e-n*.9,t,e-n*.7),i.bezierCurveTo(t+n*.1,e-n*.9,t+n*.8,e-n,t+n*.7,e-n*.5),i.bezierCurveTo(t+n*.6,e+n*.2,t+n*.45,e+n*.9,t+n*.25,e+n*.9),i.lineTo(t,e+n*.1),i.lineTo(t-n*.25,e+n*.9),i.bezierCurveTo(t-n*.45,e+n*.9,t-n*.6,e+n*.2,t-n*.7,e-n*.5),i.fill(),i.stroke(),i.restore(),Ue.sparkle(i,t+n*.75,e-n*.75,n*.35)},briefs(i,t,e,n){i.save(),i.fillStyle="#7b2fbf",i.strokeStyle="#ffd36b",i.lineWidth=n*.08,i.beginPath(),i.moveTo(t-n,e-n*.55),i.lineTo(t+n,e-n*.55),i.lineTo(t+n*.8,e+n*.1),i.quadraticCurveTo(t+n*.25,e+n*.2,t+n*.15,e+n*.75),i.lineTo(t-n*.15,e+n*.75),i.quadraticCurveTo(t-n*.25,e+n*.2,t-n*.8,e+n*.1),i.closePath(),i.fill(),i.stroke(),i.beginPath(),i.moveTo(t-n,e-n*.4),i.lineTo(t+n,e-n*.4),i.stroke(),i.restore(),Ue.sparkle(i,t+n*.9,e-n*.9,n*.35)},seeds(i,t,e,n){i.save();for(let s=0;s<9;s++){let r=s*.7,o=s%3*n*.32;i.save(),i.translate(t+Math.cos(r)*o,e+Math.sin(r)*o),i.rotate(r),i.fillStyle="#3a2a1a",i.beginPath(),i.ellipse(0,0,n*.13,n*.26,0,0,7),i.fill(),i.strokeStyle="#e8dcc8",i.lineWidth=n*.03,i.beginPath(),i.moveTo(0,-n*.2),i.lineTo(0,n*.2),i.stroke(),i.restore()}i.restore()},clock(i,t,e,n){i.save(),i.fillStyle="#fffaf0",i.strokeStyle="#c79100",i.lineWidth=n*.14,i.beginPath(),i.arc(t,e,n*.8,0,7),i.fill(),i.stroke(),i.strokeStyle="#3e2723",i.lineWidth=n*.07,i.beginPath(),i.moveTo(t,e),i.lineTo(t,e-n*.55),i.moveTo(t,e),i.lineTo(t+n*.4,e+n*.1),i.stroke(),i.fillStyle="#c79100",i.beginPath(),i.arc(t,e-n*.95,n*.15,0,7),i.fill(),i.restore()},glasses(i,t,e,n){i.save(),i.strokeStyle="#3e2723",i.lineWidth=n*.12,i.fillStyle="rgba(255,255,255,.5)";for(let s of[-1,1])i.beginPath(),i.arc(t+s*n*.5,e,n*.4,0,7),i.fill(),i.stroke();i.beginPath(),i.moveTo(t-n*.12,e-n*.05),i.quadraticCurveTo(t,e-n*.2,t+n*.12,e-n*.05),i.stroke(),i.restore()},bonsai(i,t,e,n){i.save(),i.strokeStyle="#5d4037",i.lineWidth=n*.14,i.beginPath(),i.moveTo(t,e+n),i.quadraticCurveTo(t-n*.2,e+n*.4,t,e+n*.1),i.stroke(),i.restore(),Ue.mustache(i,t,e-n*.1,n*1.05,null,"#3f9a3a")},plaster(i,t,e,n,s){Ue.head(i,t,e,n,s),i.save(),i.translate(t+n*.55,e-n*.55),i.rotate(-.6),i.fillStyle="#f6d7b8",i.strokeStyle="#c9a07a",i.lineWidth=n*.04,jr(i,-n*.5,-n*.16,n,n*.32,n*.1),i.fill(),i.stroke(),i.rotate(1.2),jr(i,-n*.5,-n*.16,n,n*.32,n*.1),i.fill(),i.stroke(),i.restore()},bottles(i,t,e,n){i.save();for(let s=-1;s<=1;s++){let r=t+s*n*.62;i.fillStyle="#5a1a0a",jr(i,r-n*.22,e-n*.35,n*.44,n*1.1,n*.1),i.fill(),i.fillStyle="#ffd36b",i.fillRect(r-n*.12,e-n*.62,n*.24,n*.3),i.fillRect(r-n*.22,e+n*.05,n*.44,n*.25)}i.restore()},cup(i,t,e,n){i.save(),i.fillStyle="rgba(255,255,255,.85)",i.beginPath(),i.moveTo(t-n*.7,e-n*.7),i.lineTo(t+n*.7,e-n*.7),i.lineTo(t,e+n*.1),i.closePath(),i.fill(),i.fillStyle="#b44be0",i.beginPath(),i.moveTo(t-n*.55,e-n*.55),i.lineTo(t+n*.55,e-n*.55),i.lineTo(t,e),i.closePath(),i.fill(),i.strokeStyle="rgba(255,255,255,.85)",i.lineWidth=n*.1,i.beginPath(),i.moveTo(t,e+n*.1),i.lineTo(t,e+n*.75),i.moveTo(t-n*.4,e+n*.8),i.lineTo(t+n*.4,e+n*.8),i.stroke(),i.restore(),Ue.mustache(i,t+n*.05,e-n*.95,n*.4)},star(i,t,e,n){i.save(),i.fillStyle="#fff176",i.strokeStyle="#f57f17",i.lineWidth=n*.06,i.beginPath();for(let s=0;s<10;s++){let r=-Math.PI/2+s*Math.PI/5,o=s%2?n*.42:n;i.lineTo(t+Math.cos(r)*o,e+Math.sin(r)*o)}i.closePath(),i.fill(),i.stroke(),i.restore()},heart(i,t,e,n){i.save(),i.fillStyle="#ffd36b",i.beginPath(),i.moveTo(t,e+n*.8),i.bezierCurveTo(t-n*1.3,e-n*.1,t-n*.5,e-n*1.1,t,e-n*.35),i.bezierCurveTo(t+n*.5,e-n*1.1,t+n*1.3,e-n*.1,t,e+n*.8),i.fill(),i.restore()},bubbles(i,t,e,n){i.save(),i.strokeStyle="rgba(255,255,255,.9)",i.lineWidth=n*.07;for(let[s,r,o]of[[0,0,.45],[-.6,.5,.25],[.55,-.55,.3],[.6,.6,.18],[-.5,-.6,.15]])i.beginPath(),i.arc(t+s*n,e+r*n,o*n,0,7),i.stroke();i.restore()}},xh=(i,...t)=>Ue[i]?.(...t);function Dy(i,t,e,n,s=394){i.save();let r=74;for(i.font=`900 ${r}px ${Cl}`;i.measureText(t).width>442&&r>30;)r-=4,i.font=`900 ${r}px ${Cl}`;let o=Math.min(488,i.measureText(t).width+56),a=r+30;i.fillStyle=n,jr(i,(512-o)/2,s,o,a,a/2),i.fill(),i.lineWidth=6,i.strokeStyle="#ffe08a",i.stroke(),i.textAlign="center",i.textBaseline="middle",i.lineWidth=8,i.strokeStyle="rgba(0,0,0,.35)",i.strokeText(t,512/2,s+a/2+2),i.fillStyle=e,i.fillText(t,512/2,s+a/2+2),i.restore()}function Al(i,t){let e=i.createLinearGradient(0,0,0,512);e.addColorStop(0,t[0]),e.addColorStop(1,t[1]),i.fillStyle=e,i.fillRect(0,0,512,512)}function By(i){i.fillStyle="#e7b84a",i.fillRect(0,0,512,18),i.fillRect(0,494,512,18),i.fillStyle="rgba(255,255,255,.35)",i.fillRect(0,18,512,4)}var hf={dice(i,t){i.fillStyle="#fbfaf6",i.fillRect(0,0,512,512),i.strokeStyle="#d8d0c0",i.lineWidth=16,jr(i,14,14,484,484,60),i.stroke();let e=(n,s,r,o=44)=>{i.fillStyle=r,i.beginPath(),i.arc(n,s,o,0,7),i.fill()};e(512/2,512/2,"#d32f2f",70);for(let[n,s]of[[130,130],[382,382],[382,130],[130,382]])e(n,s,"#222");return!1},eldermeme(i,t,e){let n=i.createLinearGradient(0,0,512,512);n.addColorStop(0,"#ff7eb3"),n.addColorStop(.5,"#ffe259"),n.addColorStop(1,"#7fe3ff"),i.fillStyle=n,i.fillRect(0,0,512,512);for(let s=0;s<6;s++)i.fillStyle=`rgba(255,255,255,${.5-s*.07})`,i.beginPath(),i.ellipse(110+s*60,420-s%2*30,70,34,-.3,0,7),i.fill();i.save(),i.translate(400,400);for(let s=0;s<7;s++)i.rotate(Math.PI/7),i.fillStyle=s%2?"#ff8fbf":"#ffb3d1",i.beginPath(),i.ellipse(0,-36,22,52,0,0,7),i.fill();return i.restore(),Ue.head(i,180,300,120,e),Ue.sparkle(i,420,120,60),Ue.sparkle(i,80,110,40),i.save(),i.textAlign="center",i.font=`900 150px ${Cl}`,i.lineWidth=22,i.strokeStyle="#d81b60",i.strokeText("\u65E9\u5B89",330,170),i.fillStyle="#fffb7a",i.fillText("\u65E9\u5B89",330,170),i.font=`900 54px ${Cl}`,i.lineWidth=10,i.strokeStyle="#1565c0",i.strokeText("\u5E73\u5B89\u559C\u6A02",360,260),i.fillStyle="#fff",i.fillText("\u5E73\u5B89\u559C\u6A02",360,260),i.restore(),i.strokeStyle="#ffd700",i.lineWidth=20,i.strokeRect(10,10,492,492),!1},monocles(i,t){Al(i,t.colors);for(let e=0;e<3;e++)for(let n=0;n<4;n++)Ue.monocle(i,80+n*118,80+e*110,46);return!0},cake(i,t,e){Al(i,t.colors),i.fillStyle="#ff80ab",i.beginPath(),i.moveTo(0,0),i.lineTo(512,0),i.lineTo(512,90);for(let n=512;n>=0;n-=64)i.quadraticCurveTo(n-16,150+(n%128?30:0),n-32,90);i.closePath(),i.fill();for(let n=0;n<8;n++)i.fillStyle="#e53935",i.beginPath(),i.arc(40+n*62,300,16,0,7),i.fill();return Ue.head(i,512/2,215,80,e),!0},gift(i,t){return Al(i,t.colors),uf(i,"dots","#ffffff"),i.fillStyle="#ffd36b",i.fillRect(512/2-34,0,68,512),i.fillRect(0,512/2-90,512,68),Ue.bowtie(i,512/2,512/2-56,90),!0},safe(i,t,e){let n=i.createLinearGradient(0,0,512,512);n.addColorStop(0,"#78828e"),n.addColorStop(1,"#2f353d"),i.fillStyle=n,i.fillRect(0,0,512,512),i.strokeStyle="rgba(255,255,255,.08)",i.lineWidth=2;for(let s=0;s<512;s+=6)i.beginPath(),i.moveTo(0,s),i.lineTo(512,s+3),i.stroke();i.fillStyle="#c9cfd6";for(let[s,r]of[[40,40],[472,40],[40,472],[472,472]])i.beginPath(),i.arc(s,r,16,0,7),i.fill();i.strokeStyle="#d9b44a",i.lineWidth=26,i.beginPath(),i.arc(512/2,512/2,150,0,7),i.stroke();for(let s=0;s<24;s++){let r=s*Math.PI/12;i.lineWidth=6,i.beginPath(),i.moveTo(512/2+Math.cos(r)*165,512/2+Math.sin(r)*165),i.lineTo(512/2+Math.cos(r)*185,512/2+Math.sin(r)*185),i.stroke()}return Ue.head(i,512/2,512/2,120,e),!1},marble(i,t,e){i.fillStyle="#efece5",i.fillRect(0,0,512,512),i.strokeStyle="rgba(120,115,105,.35)",i.lineWidth=3;for(let n=0;n<9;n++){i.beginPath();let s=n*60;i.moveTo(0,s);for(let r=0;r<=512;r+=32)i.lineTo(r,s+Math.sin(r/50+n)*22+r*.15);i.stroke()}return i.globalAlpha=.85,Ue.headGray(i,512/2,512/2,150,e),i.globalAlpha=1,i.strokeStyle="#b5aea0",i.lineWidth=18,i.strokeRect(9,9,494,494),!1}};function df(i,t,e,n){let s=document.createElement("canvas");s.width=s.height=512;let r=s.getContext("2d"),o=n;if(e)r.drawImage(e,0,0,512,512);else if(i.style&&hf[i.style])o=hf[i.style](r,i,t)&&n;else{Al(r,i.colors),uf(r,i.pattern,i.colors[2]),By(r);let a=Ue[i.emblem];a&&a(r,512/2,o?210:512/2,135,t,i.emblem==="mustache"?i.colors[2]:void 0)}return o&&i.name&&Dy(r,i.name,"#ffffff",i.colors[3]||"#5b2c83"),s}function ff(i){let t=document.createElement("canvas");t.width=t.height=8;let e=t.getContext("2d",{willReadFrequently:!0});e.drawImage(i,0,0,8,8);let n=e.getImageData(0,0,8,8).data,s=0,r=0,o=0;for(let l=0;l<n.length;l+=4)s+=n[l],r+=n[l+1],o+=n[l+2];let a=n.length/4;return Math.round(s/a)<<16|Math.round(r/a)<<8|Math.round(o/a)}var pf={metal:{roughness:.32,metalness:.35},glass:{roughness:.12,metalness:.05},ceramic:{roughness:.28,metalness:.02},wood:{roughness:.62,metalness:0},stone:{roughness:.8,metalness:0}};function Uy(i){let t=i.attributes.position,e=i.attributes.uv;for(let n=0;n<t.count;n++)e.setY(n,si.clamp((t.getY(n)+.49)/.98,0,1));return e.needsUpdate=!0,i}var mf=i=>Uy(new Gi(i.map(([t,e])=>new Tt(t,e)),40)),ui={canSide:new Sn(.48,.48,.92,40,1,!0),canCap:new Sn(.47,.47,.04,40),canRim:new Fn(.47,.022,8,40),vase:mf([[.001,-.49],[.44,-.49],[.485,-.42],[.48,-.05],[.42,.16],[.32,.3],[.27,.4],[.3,.47],[.3,.49],[.001,.49]]),jarBody:mf([[.001,-.49],[.44,-.49],[.475,-.44],[.48,.16],[.44,.26],[.36,.31],[.001,.31]]),jarLid:new Sn(.4,.42,.12,40),jarKnob:new Mn(.09,16,12),box:new Ri(1,1,1,3,.07)},Oy=i=>new Ut(i),zy=()=>new Promise(i=>globalThis.requestIdleCallback?requestIdleCallback(()=>i(),{timeout:50}):setTimeout(i,16)),Jr=class{constructor({skin:t,images:e,manifest:n,renderer:s}){this.skin=t,this.images=e,this.manifest=n,this.maxAniso=Math.min(8,s.capabilities.getMaxAnisotropy()),this.renderer=s,this.cache=new Map,this.inflight=new Map,this.badges=new Map,this.gold=new xe({color:15250734,metalness:.9,roughness:.25})}texture(t,e=!1){let n=new xi(t);return n.colorSpace=_e,n.anisotropy=this.maxAniso,e&&(n.wrapS=_s),n}prepareScene(t,{gentle:e=!1}={}){let n=this.skin.scenes[t];if(this.cache.has(n.key))return Promise.resolve();if(this.inflight.has(n.key))return this.inflight.get(n.key);let s=(async()=>{let r=this.manifest.tiles?.[n.key]||[],o=await Promise.all(n.items.map((l,c)=>r.includes(c+1)?this.images.load(`assets/tiles/${n.key}_${c+1}.webp`):Promise.resolve(null))),a=[];for(let l=0;l<10;l++)a.push(this.buildLook(n.items[l],o[l])),e&&(this.upload(a[l]),await zy());this.cache.set(n.key,a),this.inflight.delete(n.key)})();return this.inflight.set(n.key,s),s}upload(t){for(let e of[t.face,t.wrap])e.map&&this.renderer.initTexture(e.map)}async prepareHeavy(){if(this.cache.has("heavy"))return;let t={};for(let[e,n]of[[51,"metal"],[52,"stone"]]){let s={...this.skin.heavy[e],material:n},r=this.manifest.heavy?.includes(n)?await this.images.load(`assets/heavy_${n}.webp`):null;t[e]=this.buildLook(s,r)}this.cache.set("heavy",t)}buildLook(t,e){let n=df(t,this.images.all,e,this.skin.labelText),s=pf[t.material]||pf.wood,r=ff(e||n),o=this.texture(n),a=this.texture(n,!0);a.repeat.x=2,a.offset.x=.5;let l=new Ut(r).multiplyScalar(.85);return{item:t,color:r,face:new xe({map:o,...s}),wrap:new xe({map:a,...s,side:Ye}),plain:new xe({color:l,...s}),lid:new xe({color:Oy(t.lid||t.colors[2]||"#e8b52e"),roughness:.3,metalness:t.lid?.55:.2})}}lookFor(t,e,n){return t===51||t===52?this.cache.get("heavy")[t]:this.cache.get(this.skin.scenes[e].key)[(n||rl[t])-1]}static boxSlot(t,e){if(t!==3&&t!==41)return 0;let n=t===3?[3,3,3,4,5,6,7,8,9,10]:[4,4,4,3,5,6,7,8,9,10];return n[Math.floor(e()*n.length)]}create(t,e,n,s=0){let r=this.lookFor(t,n,s),o=new Fe,a=(l,c,h=0)=>{let d=new Dt(l,c);return d.position.y=h,d.castShadow=d.receiveShadow=!0,o.add(d),d};if(t===1){a(ui.canSide,r.wrap),a(ui.canCap,this.gold,.47),a(ui.canCap,this.gold,-.47);for(let l of[.46,-.46]){let c=a(ui.canRim,this.gold,l);c.rotation.x=Math.PI/2}}else t===2?a(ui.vase,r.wrap):t>=11&&t<=16?(a(ui.jarBody,r.wrap),a(ui.jarLid,r.lid,.37),a(ui.jarKnob,r.lid,.47)):a(ui.box,[r.face,r.face,r.plain,r.plain,r.face,r.face]);return o.scale.set(...e.map(Math.abs)),o.userData.look=r,o}badge(t){if(!this.badges.has(t)){let n=document.createElement("canvas");n.width=256,n.height=96;let s=n.getContext("2d");s.fillStyle="rgba(58,13,102,.92)",s.beginPath(),s.roundRect(4,4,248,88,44),s.fill(),s.lineWidth=6,s.strokeStyle="#ffd36b",s.stroke(),s.fillStyle="#fff3c4",s.textAlign="center",s.textBaseline="middle",s.font='900 46px "PingFang TC","Microsoft JhengHei",sans-serif',s.fillText(`\u518D\u64CA ${t} \u4E0B`,128,50);let r=new ti({map:this.texture(n),depthTest:!1,transparent:!0});this.badges.set(t,r)}let e=new _i(this.badges.get(t));return e.scale.set(1.1,.41,1),e.renderOrder=20,e}};var ky=220,Vy=70,Pi=400,Hy=90;function Gy(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.lineCap="round";for(let e of[-1,1])t.strokeStyle="#f4f1ea",t.lineWidth=22,t.beginPath(),t.moveTo(128+e*28,92),t.quadraticCurveTo(128+e*62,64,128+e*96,86),t.stroke();return xh("mustache",t,128,168,92,null,"#ffffff"),i}function gf(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(46,42,6,64,64,60);e.addColorStop(0,"#8a8f9c"),e.addColorStop(.35,"#3a3d46"),e.addColorStop(1,"#121318"),t.fillStyle=e,t.beginPath(),t.arc(64,64,58,0,7),t.fill(),t.lineCap="round";for(let n of[-1,1])t.strokeStyle="#f4f1ea",t.lineWidth=9,t.beginPath(),t.moveTo(64+n*12,46),t.quadraticCurveTo(64+n*26,36,64+n*40,45),t.stroke();return xh("mustache",t,64,82,40,null,"#ffffff"),t.strokeStyle="#f2c94c",t.lineWidth=5,t.beginPath(),t.arc(46,60,13,0,7),t.stroke(),i.toDataURL()}function Wy(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,31);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new xi(i);return n.colorSpace=_e,n}var Rl=class{constructor(t,e){this.scene=t,this.shards=[],this.coins=[],this.shardGeos=[new Rr(.16),new Qe(.22,.05,.16),new Qe(.12,.12,.04)];let n=new Ee(e);n.colorSpace=_e,n.needsUpdate=!0,this.coinSprite=new ti({map:n,transparent:!0,depthWrite:!1});let s=new xi(Gy());s.colorSpace=_e,this.ballParts={sphere:new Mn(.34,28,20),iron:new xe({color:2763827,metalness:.85,roughness:.3}),face:new Ln(.62,.62),faceMat:new cn({map:s,transparent:!0,depthWrite:!1}),ring:new Fn(.085,.017,8,24),gold:new xe({color:15911244,metalness:.95,roughness:.2}),lens:new Ar(.08,20),glass:new cn({color:14217471,transparent:!0,opacity:.45,depthWrite:!1})},this.puffs=[],this.puffTex=Wy(),this.sparkPos=new Float32Array(Pi*3),this.sparkVel=new Float32Array(Pi*3),this.sparkLife=new Float32Array(Pi),this.sparkCol=new Float32Array(Pi*3),this.sparkNext=0;let r=new Te;r.setAttribute("position",new Ne(this.sparkPos,3)),r.setAttribute("color",new Ne(this.sparkCol,3)),this.sparks=new wr(r,new Rs({size:.11,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Ls,toneMapped:!1})),this.sparks.frustumCulled=!1;for(let o=0;o<Pi;o++)this.sparkPos[o*3+1]=-99;t.add(this.sparks)}ballMesh(){let t=this.ballParts,e=new Fe,n=new Dt(t.sphere,t.iron);n.castShadow=!0;let s=new Dt(t.face,t.faceMat);s.position.z=.35,s.renderOrder=2;let r=new Dt(t.ring,t.gold);r.position.set(.11,.09,.33);let o=new Dt(t.lens,t.glass);return o.position.set(.11,.09,.335),e.add(n,s,r,o),e.scale.setScalar(1.3),this.scene.add(e),e}puff(t,{size:e=.5,grow:n=1.6,life:s=.6,opacity:r=.55,color:o=14605010,vel:a=null,additive:l=!1}={}){if(this.puffs.length>=Hy){let d=this.puffs.shift();this.scene.remove(d.sprite),d.sprite.material.dispose()}let c=new ti({map:this.puffTex,color:o,transparent:!0,opacity:r,depthWrite:!1,blending:l?Ls:Jn,toneMapped:!l}),h=new _i(c);h.position.copy(t),h.scale.setScalar(e),h.material.rotation=Math.random()*6,this.scene.add(h),this.puffs.push({sprite:h,size:e,grow:n,life:s,max:s,opacity:r,vel:a||new N(0,.3,0)})}muzzleBlast(t,e){let n=new N(...e);this.puff(t,{size:1.3,grow:.6,life:.14,opacity:1,color:16757575,additive:!0}),this.puff(t.clone().addScaledVector(n,.4),{size:.9,grow:.8,life:.1,opacity:.9,color:16773800,additive:!0});for(let s=0;s<9;s++){let r=n.clone().multiplyScalar(1.5+Math.random()*2.5).add(new N((Math.random()-.5)*2.2,Math.random()*1.2,(Math.random()-.5)*1.2));this.puff(t.clone().addScaledVector(n,Math.random()*.6),{size:.55+Math.random()*.4,grow:2.4,life:.7+Math.random()*.5,opacity:.6,vel:r})}}trail(t){this.puff(t,{size:.32,grow:2.2,life:.45,opacity:.42,vel:new N((Math.random()-.5)*.3,.25,(Math.random()-.5)*.3)})}spark(t,e,n,s=5){let r=new Ut(e);for(let o=0;o<n;o++){let a=this.sparkNext;this.sparkNext=(this.sparkNext+1)%Pi,this.sparkPos.set([t.x,t.y,t.z],a*3);let l=Math.random()*Math.PI*2,c=Math.random()*2-1,h=s*(.4+Math.random()*.8),d=Math.sqrt(1-c*c);this.sparkVel.set([Math.cos(l)*d*h,Math.abs(c)*h+1.5,Math.sin(l)*d*h],a*3),this.sparkLife[a]=.4+Math.random()*.5,this.sparkCol.set([r.r,r.g,r.b],a*3)}}burst(t,e,n){let s=n==="glass"||n==="ceramic"?18:12,r=[e.face,e.plain];for(let o=0;o<s;o++){if(this.shards.length>=ky){let c=this.shards.shift();this.scene.remove(c.mesh)}let a=new Dt(this.shardGeos[o%3],r[o%2]);a.position.set(t.x+(Math.random()-.5)*.6,t.y+(Math.random()-.5)*.6,t.z+(Math.random()-.5)*.6),a.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6);let l=.7+Math.random()*.8;a.scale.setScalar(l),a.castShadow=!0,this.scene.add(a),this.shards.push({mesh:a,v:new N((Math.random()-.5)*7,2+Math.random()*5,(Math.random()-.5)*7),life:1.1+Math.random()*.7,s:l,bounced:!1})}this.spark(t,e.color,14,4),this.spark(t,16769162,8,6)}coinPop(t,e=1){for(let n=0;n<e;n++){if(this.coins.length>=Vy){let r=this.coins.shift();this.scene.remove(r.sprite)}let s=new _i(this.coinSprite);s.position.copy(t),s.scale.setScalar(.42),this.scene.add(s),this.coins.push({sprite:s,v:new N((Math.random()-.5)*3,5+Math.random()*3,(Math.random()-.5)*2),life:1.2+Math.random()*.4,spin:Math.random()*6})}}coinShower(t,e=30){for(let n=0;n<e;n++)this.coinPop(new N(t.x+(Math.random()-.5)*5,t.y+4+Math.random()*2,t.z+(Math.random()-.5)*2),1)}update(t,e){for(let n of this.puffs){n.life-=t;let s=1-Math.max(0,n.life)/n.max;n.sprite.position.addScaledVector(n.vel,t),n.vel.multiplyScalar(Math.pow(.15,t)),n.sprite.scale.setScalar(n.size*(1+n.grow*s)),n.sprite.material.opacity=n.opacity*(1-s),n.life<=0&&(this.scene.remove(n.sprite),n.sprite.material.dispose())}this.puffs=this.puffs.filter(n=>n.life>0);for(let n of this.shards)n.life-=t,n.v.y-=18*t,n.mesh.position.addScaledVector(n.v,t),n.mesh.rotation.x+=t*4,n.mesh.rotation.z+=t*2,n.mesh.position.y<-1.5&&(n.mesh.position.y=-1.5,!n.bounced&&n.v.y<-2&&(n.bounced=!0,e?.(n.mesh.position)),n.v.y=Math.abs(n.v.y)*.2,n.v.x*=.9,n.v.z*=.9),n.life<.3&&n.mesh.scale.setScalar(n.s*Math.max(0,n.life/.3)),n.life<=0&&this.scene.remove(n.mesh);this.shards=this.shards.filter(n=>n.life>0);for(let n of this.coins)n.life-=t,n.v.y-=14*t,n.sprite.position.addScaledVector(n.v,t),n.spin+=t*10,n.sprite.scale.set(.42*Math.abs(Math.cos(n.spin))+.05,.42,1),n.life<.25&&(n.sprite.material.opacity=1),n.life<=0&&this.scene.remove(n.sprite);this.coins=this.coins.filter(n=>n.life>0);for(let n=0;n<Pi;n++){if(this.sparkLife[n]<=0)continue;this.sparkLife[n]-=t;let s=n*3;this.sparkVel[s+1]-=12*t,this.sparkPos[s]+=this.sparkVel[s]*t,this.sparkPos[s+1]+=this.sparkVel[s+1]*t,this.sparkPos[s+2]+=this.sparkVel[s+2]*t,this.sparkLife[n]<=0&&(this.sparkPos[s+1]=-99)}this.sparks.geometry.attributes.position.needsUpdate=!0,this.sparks.geometry.attributes.color.needsUpdate=!0}get busy(){return this.shards.length>0}clear(){for(let t of this.shards)this.scene.remove(t.mesh);for(let t of this.coins)this.scene.remove(t.sprite);for(let t of this.puffs)this.scene.remove(t.sprite),t.sprite.material.dispose();this.shards=[],this.coins=[],this.puffs=[],this.sparkLife.fill(0);for(let t=0;t<Pi;t++)this.sparkPos[t*3+1]=-99}};function fn(i,t,e,n){let s=i.createLinearGradient(0,t,0,e);return n.forEach(([r,o])=>s.addColorStop(r,o)),s}function ts(i,t,e,n,s,r=.6){let o=i.createRadialGradient(t,e,0,t,e,n);o.addColorStop(0,s.replace("A",r)),o.addColorStop(1,s.replace("A",0)),i.fillStyle=o,i.fillRect(t-n,e-n,n*2,n*2)}function Sh(i,t,e,n,s,r){i.fillStyle=fn(i,900,1536,[[0,n],[1,s]]),i.fillRect(0,900,1024,636),i.strokeStyle=r,i.lineWidth=3;let o=1024/2,a=200;for(let l=-1600;l<=2624;l+=140){let c=(900-a)/(1536-a);i.beginPath(),i.moveTo(o+(l-o)*c,900),i.lineTo(l,1536),i.stroke()}for(let l=1;l<9;l++){let c=900+636*Math.pow(l/9,1.6);i.globalAlpha=.5,i.beginPath(),i.moveTo(0,c),i.lineTo(1024,c),i.stroke(),i.globalAlpha=1}}function Kr(i,t){i.fillStyle=t,i.fillRect(0,874,1024,26)}function qy(i){let t=i.createRadialGradient(512,844.8000000000001,384,512,844.8000000000001,1228.8000000000002);t.addColorStop(0,"rgba(0,0,0,0)"),t.addColorStop(1,"rgba(0,0,0,.45)"),i.fillStyle=t,i.fillRect(0,0,1024,1536)}var bf={vault(i){i.fillStyle=fn(i,0,900,[[0,"#1b1f27"],[1,"#3a3f4b"]]),i.fillRect(0,0,1024,900),i.strokeStyle="rgba(255,255,255,.06)",i.lineWidth=4;for(let s=0;s<1024;s+=170)for(let r=0;r<900;r+=170)i.strokeRect(s+6,r+6,158,158);i.fillStyle="rgba(255,255,255,.15)";for(let s=0;s<1024;s+=170)for(let r=0;r<900;r+=170)for(let[o,a]of[[18,18],[152,18],[18,152],[152,152]])i.beginPath(),i.arc(s+o,r+a,5,0,7),i.fill();ts(i,1024/2,420,520,"rgba(255,200,90,A)",.45);let t=1024/2,e=430;i.fillStyle="#6f6a5f",i.beginPath(),i.arc(t,e,330,0,7),i.fill();let n=i.createRadialGradient(t-80,e-90,40,t,e,300);n.addColorStop(0,"#fff0b5"),n.addColorStop(.6,"#d4a32a"),n.addColorStop(1,"#7a5a10"),i.fillStyle=n,i.beginPath(),i.arc(t,e,290,0,7),i.fill(),i.strokeStyle="#7a5a10",i.lineWidth=10;for(let s of[230,150])i.beginPath(),i.arc(t,e,s,0,7),i.stroke();i.lineWidth=26;for(let s=0;s<6;s++){let r=s*Math.PI/3;i.beginPath(),i.moveTo(t+Math.cos(r)*60,e+Math.sin(r)*60),i.lineTo(t+Math.cos(r)*140,e+Math.sin(r)*140),i.stroke()}i.fillStyle="#fff3c4",i.beginPath(),i.arc(t,e,58,0,7),i.fill(),i.fillStyle="#c9cfd6";for(let s=0;s<16;s++){let r=s*Math.PI/8;i.beginPath(),i.arc(t+Math.cos(r)*312,e+Math.sin(r)*312,11,0,7),i.fill()}for(let s of[70,774])for(let r=0;r<3;r++){let o=260+r*190;i.fillStyle="#4a3a22",i.fillRect(s-20,o+70,220,16);for(let a=0;a<4;a++)for(let l=0;l<2-(a%2?1:0);l++){let c=s+a*46+l*10,h=o+44-l*26,d=i.createLinearGradient(c,h,c+44,h+26);d.addColorStop(0,"#fff2a8"),d.addColorStop(1,"#c8901a"),i.fillStyle=d,i.beginPath(),i.moveTo(c+6,h),i.lineTo(c+40,h),i.lineTo(c+46,h+26),i.lineTo(c,h+26),i.closePath(),i.fill()}}Kr(i,"#151820"),i.fillStyle=fn(i,900,1536,[[0,"#2a2d34"],[1,"#0f1115"]]),i.fillRect(0,900,1024,636),i.fillStyle="rgba(255,255,255,.05)";for(let s=0;s<10;s++)for(let r=-8;r<16;r++)if((s+r)%2){let o=900+636*Math.pow(s/10,1.6),a=900+636*Math.pow((s+1)/10,1.6),l=.35+.65*(s/10),c=.35+.65*((s+1)/10),h=150;i.beginPath(),i.moveTo(1024/2+(r*h-1024/2)*l,o),i.lineTo(1024/2+((r+1)*h-1024/2)*l,o),i.lineTo(1024/2+((r+1)*h-1024/2)*c,a),i.lineTo(1024/2+(r*h-1024/2)*c,a),i.fill()}ts(i,1024/2,1100,500,"rgba(255,190,80,A)",.18)},mahjong(i){i.fillStyle=fn(i,0,900,[[0,"#4a0e0e"],[1,"#8a2420"]]),i.fillRect(0,0,1024,900),i.strokeStyle="rgba(255,200,100,.18)",i.lineWidth=6;for(let s=0;s<1024;s+=96)for(let r=0;r<900;r+=96)i.strokeRect(s+18,r+18,60,60),i.beginPath(),i.moveTo(s+48,r+18),i.lineTo(s+48,r+78),i.moveTo(s+18,r+48),i.lineTo(s+78,r+48),i.stroke();let t=1024/2,e=400,n=260;i.fillStyle="#5a3a1a",i.beginPath(),i.arc(t,e,n+34,0,7),i.fill(),i.save(),i.beginPath(),i.arc(t,e,n,0,7),i.clip(),i.fillStyle=fn(i,e-n,e+n,[[0,"#0b1640"],[1,"#41306e"]]),i.fillRect(t-n,e-n,n*2,n*2);for(let s=0;s<14;s++){let r=40+s*37%60,o=120+s*71%220,a=t-n+s*40;i.fillStyle="#141a33",i.fillRect(a,e+n-o,r,o),i.fillStyle="#ffd56b";for(let l=e+n-o+14;l<e+n-10;l+=22)for(let c=a+6;c<a+r-8;c+=14)(c*7+l*3)%5<2&&i.fillRect(c,l,6,9)}i.fillStyle="#fff5cf",i.beginPath(),i.arc(t+120,e-130,40,0,7),i.fill(),i.restore(),i.strokeStyle="#7a4a1a",i.lineWidth=8,i.beginPath(),i.moveTo(t-n,e),i.lineTo(t+n,e),i.moveTo(t,e-n),i.lineTo(t,e+n),i.stroke();for(let s of[150,874]){i.strokeStyle="#3a1a0a",i.lineWidth=4,i.beginPath(),i.moveTo(s,0),i.lineTo(s,170),i.stroke(),ts(i,s,280,240,"rgba(255,120,60,A)",.55),i.fillStyle="#e53935",i.beginPath(),i.ellipse(s,280,95,115,0,0,7),i.fill(),i.strokeStyle="rgba(120,10,10,.6)",i.lineWidth=4;for(let r of[-60,-20,20,60])i.beginPath(),i.ellipse(s,280,Math.abs(r)+8,115,0,0,7),i.stroke();i.fillStyle="#e7b84a",i.fillRect(s-50,160,100,22),i.fillRect(s-50,380,100,22),i.strokeStyle="#e7b84a",i.lineWidth=3;for(let r=-30;r<=30;r+=10)i.beginPath(),i.moveTo(s+r,402),i.lineTo(s+r,470),i.stroke()}Kr(i,"#3a1a0a"),Sh(i,900,1536,"#7a4a2a","#3a2010","rgba(0,0,0,.25)")},gallery(i,t){i.fillStyle=fn(i,0,900,[[0,"#10241d"],[1,"#24493c"]]),i.fillRect(0,0,1024,900),i.fillStyle="rgba(255,230,160,.06)";for(let s=0;s<1024;s+=64)i.fillRect(s,0,28,900);for(let s of[30,734]){i.fillStyle="#3e2414",i.fillRect(s,120,260,760);for(let r=0;r<5;r++){let o=150+r*140,a=s+16;for(i.fillStyle="#2a170c",i.fillRect(s+8,o+112,244,14);a<s+240;){let l=18+(a*13+r*7)%22,c=80+a*7%30;i.fillStyle=["#8e2b2b","#2b4f8e","#d4a017","#3f7a3a","#6b3a8e","#c2672a"][(a+r)%6],i.fillRect(a,o+112-c,l,c),i.fillStyle="rgba(255,220,120,.6)",i.fillRect(a,o+112-c+12,l,4),a+=l+3}}}ts(i,1024/2,380,420,"rgba(255,214,140,A)",.4);let e=1024/2-170,n=170;i.fillStyle="#c8901a",i.fillRect(e-26,n-26,392,452),i.fillStyle="#7a5410",i.fillRect(e-8,n-8,356,416),i.fillStyle=fn(i,n,n+400,[[0,"#5b2c83"],[1,"#2a1145"]]),i.fillRect(e,n,340,400),t.head&&(i.save(),i.beginPath(),i.ellipse(e+170,n+190,140,165,0,0,7),i.clip(),i.drawImage(t.head,e+20,n+20,300,320),i.restore()),Kr(i,"#2a170c"),i.fillStyle=fn(i,900,1536,[[0,"#6e1b1b"],[1,"#3a0b0b"]]),i.fillRect(0,900,1024,636),i.strokeStyle="rgba(230,180,80,.35)",i.lineWidth=8,i.strokeRect(80,960,864,616),i.lineWidth=3;for(let s=1020;s<1536;s+=90)for(let r=140;r<904;r+=120)i.beginPath(),i.arc(r,s,20,0,7),i.stroke()},rooftop(i){i.fillStyle=fn(i,0,900,[[0,"#0a1238"],[.6,"#33296a"],[1,"#c45a8a"]]),i.fillRect(0,0,1024,900),i.fillStyle="#ffffff";for(let t=0;t<120;t++){let e=t*263%1024,n=t*151%520;i.globalAlpha=.3+t%5/8,i.fillRect(e,n,2+t%3,2+t%3)}i.globalAlpha=1,i.fillStyle="#fff3c8",i.beginPath(),i.arc(820,170,60,0,7),i.fill(),ts(i,820,170,200,"rgba(255,240,200,A)",.35);for(let t=0;t<2;t++){let e=-20;for(;e<1024;){let n=60+(e*17+t*31)%90,s=(t?180:280)+e*29%200;i.fillStyle=t?"#1b1f45":"#121633",i.fillRect(e,780-s+t*60,n,s+200),i.fillStyle=t?"rgba(255,214,110,.75)":"rgba(255,214,110,.55)";for(let r=800-s+t*60;r<860;r+=26)for(let o=e+8;o<e+n-10;o+=16)(o*5+r*11)%7<2&&i.fillRect(o,r,7,10);e+=n+6}}for(let[t,e]of[[150,110],[260,80]]){i.strokeStyle="#2a2a2a",i.lineWidth=3,i.beginPath(),i.moveTo(0,t),i.quadraticCurveTo(1024/2,t+e*2,1024,t),i.stroke();for(let n=1;n<14;n++){let s=n/14,r=s*1024,o=(1-s)*(1-s)*t+2*(1-s)*s*(t+e*2)+s*s*t,a=["255,214,110","255,120,160","140,220,255","180,255,150"][n%4];ts(i,r,o+14,40,`rgba(${a},A)`,.8),i.fillStyle=`rgb(${a})`,i.beginPath(),i.arc(r,o+14,9,0,7),i.fill()}}i.fillStyle="#d9d2c4",i.fillRect(0,750,1024,16);for(let t=10;t<1024;t+=60)i.fillRect(t,760,12,140);Kr(i,"#5a3a22"),Sh(i,900,1536,"#9a6a3e","#4a2e18","rgba(0,0,0,.22)")},banquet(i){i.fillStyle=fn(i,0,900,[[0,"#e9cf9a"],[1,"#f8ead0"]]),i.fillRect(0,0,1024,900);for(let t=0;t<3;t++){let e=170+t*342;i.fillStyle="rgba(255,255,255,.35)",i.beginPath(),i.moveTo(e-120,870),i.lineTo(e-120,330),i.arc(e,330,120,Math.PI,0),i.lineTo(e+120,870),i.fill(),i.strokeStyle="#d4a017",i.lineWidth=8,i.stroke()}for(let[t,e]of[[0,1],[1024,-1]]){i.fillStyle=fn(i,0,900,[[0,"#6a1b9a"],[1,"#3b0d5a"]]),i.beginPath(),i.moveTo(t,0),i.lineTo(t+e*230,0),i.quadraticCurveTo(t+e*120,420,t+e*170,900),i.lineTo(t,900),i.fill(),i.strokeStyle="rgba(255,255,255,.12)",i.lineWidth=6;for(let n=40;n<220;n+=45)i.beginPath(),i.moveTo(t+e*n,0),i.quadraticCurveTo(t+e*(n*.6),420,t+e*(n*.75),900),i.stroke();i.fillStyle="#e7b84a",i.beginPath(),i.arc(t+e*150,470,22,0,7),i.fill()}i.fillStyle="#7a1a5a",i.fillRect(0,0,1024,60);for(let t=0;t<1024;t+=80)i.fillStyle="#7a1a5a",i.beginPath(),i.arc(t+40,60,40,0,Math.PI),i.fill();ts(i,1024/2,230,360,"rgba(255,240,190,A)",.75),i.strokeStyle="#c8901a",i.lineWidth=6,i.beginPath(),i.moveTo(1024/2,60),i.lineTo(1024/2,150),i.stroke();for(let[t,e]of[[190,230],[130,190],[70,160]]){i.beginPath(),i.ellipse(1024/2,e,t,t*.22,0,0,7),i.stroke();for(let n=0;n<t/14;n++){let s=n/(t/14)*Math.PI*2,r=1024/2+Math.cos(s)*t,o=e+Math.sin(s)*t*.22;i.fillStyle="rgba(255,255,255,.9)",i.beginPath(),i.moveTo(r,o),i.lineTo(r-6,o+18),i.lineTo(r,o+36),i.lineTo(r+6,o+18),i.fill()}}Kr(i,"#b8902a"),Sh(i,900,1536,"#d9b77a","#8a6a3a","rgba(90,60,20,.25)"),i.fillStyle=fn(i,900,1536,[[0,"#b71c1c"],[1,"#7f0000"]]),i.beginPath(),i.moveTo(1024/2-130,900),i.lineTo(1024/2+130,900),i.lineTo(1024/2+420,1536),i.lineTo(1024/2-420,1536),i.fill(),i.strokeStyle="#e7b84a",i.lineWidth=10,i.stroke()}};function vf(i,t){let e=document.createElement("canvas");e.width=1024,e.height=1536;let n=e.getContext("2d");return(bf[i]||bf.vault)(n,t),qy(n),e.toDataURL("image/jpeg",.86)}var yf=globalThis.__ASSETS__||null;function He(i){return yf&&yf[i]||i}var Il=class{constructor(){this.all={},this.pending=new Map}load(t,e){return this.pending.has(t)||this.pending.set(t,new Promise(n=>{let s=new Image;s.decoding="async",s.onload=()=>n(s),s.onerror=()=>{console.warn("\u5716\u7247\u8F09\u5165\u5931\u6557",t),n(null)},s.src=He(t)})),this.pending.get(t).then(n=>(e&&(this.all[e]=n),n))}};var Xy=["shoot_01","big_shoot","impact_can_01","impact_glass_03","impact_wood_02","impact_rock_01","break_can_01","break_can_03","break_glass_01","break_glass_03","break_wood_01","break_wood_03","coin","clear","lose","cheers","button","combo2","combo3","combo4"],Pl=class{constructor(){this.ctx=null,this.buffers={},this.muted=!1,this.bgm=null}async init(){let t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.9,this.master.connect(this.ctx.destination),await Promise.all([...Xy,"bgm"].map(async e=>{try{let n=await fetch(He(`assets/sfx/${e}.mp3`));this.buffers[e]=await this.ctx.decodeAudioData(await n.arrayBuffer())}catch(n){console.warn("\u97F3\u6548\u8F09\u5165\u5931\u6557",e,n)}})))}resume(){this.ctx?.resume?.().catch(()=>{})}play(t,e=1,n=0,s=.94+Math.random()*.12){if(this.muted||!this.ctx||!this.buffers[t])return;let r=this.ctx.createBufferSource();r.buffer=this.buffers[t],r.playbackRate.value=s;let o=this.ctx.createGain();o.gain.value=e;let a=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;a?(a.pan.value=Math.max(-.7,Math.min(.7,n)),r.connect(o).connect(a).connect(this.master)):r.connect(o).connect(this.master),r.start()}startBgm(t){if(!this.ctx||!this.buffers.bgm||this.bgm)return;let e=this.buffers.bgm,n=this.ctx.createBufferSource();n.buffer=e,n.loop=!0;let s=0;t&&e.duration>t+.005&&(s=Math.min(e.duration-t,1105/44100)),t&&(n.loopStart=s,n.loopEnd=s+Math.min(t,e.duration-s));let r=this.ctx.createGain();r.gain.value=this.muted?0:.22,n.connect(r).connect(this.master),n.start(0,s),this.bgm={src:n,g:r},this.bgmInfo={bufferSec:+e.duration.toFixed(4),loopSec:t,loopStart:+n.loopStart.toFixed(4),loopEnd:+n.loopEnd.toFixed(4),sampleRate:e.sampleRate}}setMuted(t){this.muted=t,this.bgm&&(this.bgm.g.gain.value=t?0:.22)}};var ct=i=>document.getElementById(i),eo=new URLSearchParams(location.search),wh=eo.has("manualTick"),Sf=eo.has("debug"),Yy=eo.has("mute"),An=Fd.levels,kn=Ti.ui||{},Js=(i,t="",e="")=>`<img class="ui-word ${e}" src="${He(`assets/ui_${i}.webp`)}" alt="${t}" draggable="false">`,$y=1.3,Zy=.5,zn=new Il,fe=new Pl,ee=new Tl(ct("scene")),Li,Cn,W={state:"loading",index:0,seed:0,world:null,sceneIndex:0,blocks:[],balls:[],aimTarget:new N(0,2,2.8),aiming:!1,firstShot:!0,combo:0,lastBreak:-9,comboPeak:0,maxShown:!1,shake:0,flash:0,settle:0,recoil:0,backdrops:{},fps:60,stars:[],clearTimer:0,firstHeavy:!0},Nl=i=>Math.max(0,ge.scenes.findIndex(t=>t.key===i));function jy(i,t){return i===51?"metal":i===52?"stone":ge.scenes[t.sceneIndex].items[rl[i]-1]?.material||"wood"}function Jy(i){let t=ge.scenes[i].key;W.backdrops[t]||(W.backdrops[t]=Ti.bg?.includes(t)?He(`assets/bg_${t}.webp`):vf(ge.scenes[i].backdrop,zn.all)),ct("backdrop").style.backgroundImage=`url("${W.backdrops[t]}")`}async function Dl(i,t=Number(eo.get("seed"))||Nd()){W.index=Math.max(0,Math.min(An.length-1,i)),W.seed=t>>>0;let e=An[W.index],n=Ld[e.from-1];W.sceneIndex=Nl(e.scene),await Li.prepareScene(W.sceneIndex),await Li.prepareHeavy(),Cn.clear();for(let c of W.balls)ee.scene.remove(c.mesh);W.balls=[],ee.clearLevel();let s=Ud(n,ri,Qc(W.seed));s.sceneIndex=W.sceneIndex,e.ammo&&(s.ammo=e.ammo),W.world=new wl({level:s,physics:Hs,tuning:ri,materialOf:jy,onBreak:Qy,onImpact:Ky}),W.tables=s.tables.map(c=>ee.buildTable(c,ge.scenes[W.sceneIndex].table)),W.blocks=W.world.blocks;let r=Qc(W.seed^2654435769);for(let c of W.blocks)c.mesh=Li.create(c.data.t,c.data.s,W.sceneIndex,Jr.boxSlot(c.data.t,r)),c.mesh.position.copy(c.body.position),c.mesh.quaternion.copy(c.body.quaternion),ee.levelGroup.add(c.mesh);ee.applyLight(ge.scenes[W.sceneIndex].light),Jy(W.sceneIndex);let o=s.tables[0];ee.fitHalfWidth=Math.max(3.6,s.rotating?Math.hypot(o.dim[0],o.dim[1])/2+.3:o.dim[0]/2+.8),Fl(),W.aimTarget.set(0,2,s.tables[0].pos[2]),Object.assign(W,{state:"playing",combo:0,comboPeak:0,maxShown:!1,settle:0,shake:0,flash:0,firstShot:!0}),ct("levelNo").textContent=W.index+1,ct("levelTotal").textContent=An.length,ct("sceneName").textContent=ge.scenes[W.sceneIndex].label+(s.rotating?" \xB7 \u65CB\u8F49\u95DC":"");let a=W.blocks.filter(c=>c.counted).length,l=s.rotating?"\u65CB\u8F49\u95DC \xB7 \u684C\u5B50\u6703\u8F49\uFF01":a?`${a} \u500B\u91CD\u7269\u8981\u591A\u6253\u5E7E\u4E0B`:"";s.rotating&&kn.tag_rotate?(ct("tag").innerHTML=Js("tag_rotate",l),ct("tag").classList.add("img")):(ct("tag").textContent=l,ct("tag").classList.remove("img")),ct("tag").hidden=!l,Bl(e.tip||"\u7784\u6E96\u5E95\u90E8\uFF0C\u4E00\u7832\u5012\u4E00\u7247\uFF01"),ct("combo").className="",ct("combo").textContent="",W.comboShown="",Ks("wave"),ct("clear").hidden=!0,ct("endcard").hidden=!0,ee.setAimVisible(!0),Ih(),Ch(),s_()}function Ch(){let i=W.world;ct("ammoNo").textContent=i.ammoLeft,ct("progressText").textContent=`${i.cleared} / ${i.blocks.length}`,ct("progressFill").style.width=`${i.cleared/i.blocks.length*100}%`}function Bl(i){ct("hint").textContent=i,ct("hint").style.opacity=i?"1":"0"}var Ll=0;function Ks(i,t=0){let e=ct("grandpa");e.src=He(`assets/gp_${i}.webp`),e.classList.remove("bounce"),e.offsetWidth,e.classList.add("bounce"),Ll=t}function Ky(i,t,e){let n=i.body.position.x/-12,s=i.kind;fe.play(s==="metal"?"impact_can_01":s==="wood"?"impact_wood_02":s==="stone"?"impact_rock_01":"impact_glass_03",Math.min(.8,.2+e/35),n),t==="floor"?W.shake=Math.max(W.shake,.025):W.shake=Math.max(W.shake,Math.min(.09,e*.0015))}function Qy(i,t){let e=new N().copy(i.body.position),n=i.mesh.userData.look;ee.levelGroup.remove(i.mesh),i.badge&&(ee.levelGroup.remove(i.badge),i.badge=null);let s=i.kind,r=Math.random()>.5?"_01":"_03";fe.play((s==="wood"?"break_wood":s==="metal"||s==="stone"?"break_can":"break_glass")+r,.7,e.x/-12),Cn.burst(e,n,s),Cn.coinPop(e,i.counted?3:1),t==="fall"?W.shake=Math.max(W.shake,.05):W.shake=Math.max(W.shake,.07);let o=W.world.time;W.combo=o-W.lastBreak<ri.combo.window?W.combo+1:1,W.lastBreak=o,W.combo>W.comboPeak&&(W.comboPeak=W.combo,W.combo===3&&fe.play("combo2",.7,0,1),W.combo===6&&(fe.play("combo3",.75,0,1),Ks("fists",1.6)),W.combo===9&&fe.play("combo4",.8,0,1)),W.combo>=ri.combo.max&&!W.maxShown&&(W.maxShown=!0,fe.play("cheers",.6,0,1),fe.play("coin",.7,0,1),Cn.coinShower(e,30),Ks("cheer",2)),Ch()}var Mh=new Br,_f=new Tt;function Rh(i){let t=ct("scene").getBoundingClientRect();_f.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1),Mh.setFromCamera(_f,ee.camera);let e=W.blocks.filter(s=>!s.removed).map(s=>s.mesh),n=Mh.intersectObjects(e,!0)[0];if(n)W.aimTarget.copy(n.point);else{let s=new on(new N(0,0,1),-W.world.level.tables[0].pos[2]),r=new N;Mh.ray.intersectPlane(s,r)&&(r.x=si.clamp(r.x,-9,9),r.y=si.clamp(r.y,.1,12),W.aimTarget.copy(r))}Ih()}function Mf(){return zd(Ii.toArray(),W.aimTarget.toArray(),Hs.projectileInitialSpeed,Hs.gravityY)}function Ih(){let i=Mf();ee.aimCannon(i),ee.showAim(i,W.aimTarget,Hs.projectileInitialSpeed,Hs.gravityY)}function Ph(){if(W.state!=="playing")return!1;let i=Mf(),t=W.world.shoot(Ii.toArray(),i);if(!t)return!1;let e=Cn.ballMesh();e.position.copy(Ii),W.balls.push({ball:t,mesh:e,smoke:0,spin:Math.random()*6}),fe.play("shoot_01",.85),fe.play("big_shoot",.45);let n=new N(...i).multiplyScalar(1.5).add(Ii);return Cn.muzzleBlast(n,i),Cn.spark(n,16769162,22,6),W.shake=.22,W.flash=.16,W.recoil=.42,W.firstShot&&(W.firstShot=!1,Bl("")),Ch(),!0}var to=ct("scene");to.addEventListener("pointerdown",i=>{if(!(W.state!=="playing"||i.button!==0)){fe.resume(),W.aiming=!0;try{to.setPointerCapture(i.pointerId)}catch{}Rh(i)}});to.addEventListener("pointermove",i=>{W.state==="playing"&&(W.aiming||i.pointerType==="mouse")&&Rh(i)});to.addEventListener("pointerup",i=>{!W.aiming||i.button!==0||(W.aiming=!1,Rh(i),Ph())});to.addEventListener("pointercancel",()=>{W.aiming=!1});window.addEventListener("keydown",i=>{W.state==="playing"&&(i.code==="Space"&&(i.preventDefault(),Ph()),i.key.toLowerCase()==="r"&&Dl(W.index))});var t_=i=>[1,2,3].map(t=>kn.stars?`<img class="star ${t<=i?"on":"off"}" style="animation-delay:${.12*t}s" src="${He(`assets/ui_star_${t<=i?"on":"off"}.webp`)}" alt="${t<=i?"\u2605":"\u2606"}" draggable="false">`:`<span class="${t<=i?"":"off"}">\u2605</span>`).join(""),e_=i=>{let t=i.replace(/[&<>]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[e]);return kn.stars?t.replace(/★/g,`<img class="inline-star" src="${He("assets/ui_star_on.webp")}" alt="\u2605">`):t};function n_(i,t){let e=t?"max":String(i);if(W.comboShown===e)return;W.comboShown=e;let n=ct("combo");kn.digits&&kn.combo_max?(n.innerHTML=t?Js("combo_max",ge.comboText.max,"combo-max"):`<span class="combo-row">${String(i).split("").map(s=>Js(`digit_${s}`,s,"digit")).join("")}${Js("combo_word","\u9023\u64CA\uFF01","word")}</span>`,n.classList.add("img")):(n.textContent=t?ge.comboText.max:ge.comboText.normal.replace("{n}",i),n.classList.remove("img")),n.classList.remove("bump"),n.offsetWidth,n.classList.add("bump")}var Eh=()=>W.stars.reduce((i,t)=>i+(t||0),0);function wf(i){W.state="result",ee.setAimVisible(!1),Bl("");let t=W.world,e=W.index===An.length-1;if(i==="win"){let n=Od(t.ammoLeft,t.level.ammo,ri);if(W.stars[W.index]=n,fe.play("clear",.65,0,1),Ks("cheer"),e){xf("win");return}let s=ge.scenes[Nl(An[W.index+1].scene)].label;ct("clearStars").innerHTML=t_(n);let r=n===3?"clear_perfect":"clear",o=n===3?"\u723A\u723A\u7206\u8B9A\uFF01":"\u904E\u95DC\uFF01";kn[r]?(ct("clearTitle").innerHTML=Js(r,o),ct("clearTitle").classList.add("img")):(ct("clearTitle").textContent=o,ct("clearTitle").classList.remove("img")),ct("clearText").textContent=`\u7B2C ${W.index+1} \u95DC\u5B8C\u6210\u3000\u4E0B\u4E00\u95DC\uFF1A${s}`,ct("clear").hidden=!1,W.clearTimer=$y}else fe.play("lose",.6,0,1),Ks("shrug"),xf("lose")}function Ef(){W.state!=="result"||ct("clear").hidden||(ct("clear").hidden=!0,W.clearTimer=0,Dl(W.index+1))}ct("clear").addEventListener("pointerdown",Ef);function xf(i){W.state="end",W.endKind=i;let t=i==="win";ct("endGrandpa").src=He(`assets/gp_${t?"cheer":"shrug"}.webp`);let e=t?`${An.length} \u95DC\u5168\u7834\uFF01`:"\u5DEE\u4E00\u9EDE\u9EDE\uFF01",n=t?"end_win":"end_fail";kn[n]&&(!t||An.length===10)?(ct("endTitle").innerHTML=Js(n,e),ct("endTitle").classList.add("img")):(ct("endTitle").textContent=e,ct("endTitle").classList.remove("img")),ct("endText").innerHTML=e_(t?`\u723A\u723A\u7684\u5BF6\u8C9D\u5168\u88AB\u4F60\u6253\u7206\u4E86
\u7E3D\u5171\u62FF\u5230 \u2605 \xD7 ${Eh()}`:`\u7B2C ${W.index+1} \u95DC\u9084\u5269 ${W.world.remaining} \u500B\u6C92\u6253\u7206
\u76EE\u524D\u62FF\u5230 \u2605 \xD7 ${Eh()}`);let s=ct("endcard");s.hidden=!1,s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),t&&(fe.play("cheers",.6,0,1),fe.play("coin",.6,0,1))}ct("ctaBtn").onclick=()=>{fe.play("button",.6,0,1);let i=navigator.userAgent,t=/iPhone|iPad|iPod/i.test(i)?ge.cta.ios:/Android/i.test(i)?ge.cta.android:ge.cta.desktop;window.open(t,"_blank","noopener")};ct("soundBtn").onclick=()=>{fe.setMuted(!fe.muted),ct("soundBtn").textContent=fe.muted?"\xD7":"\u266A"};var Th=performance.now();function Tf(i){wh||requestAnimationFrame(Tf);let t=Math.min((i-Th)/1e3,.04);Th=i,!(!wh&&document.hidden)&&Ah(t)}var i_=new _n;function Ah(i){W.fps=W.fps*.95+1/Math.max(i,.001)*.05;let t=W.world;if(W.clearTimer>0&&(W.clearTimer-=i,W.clearTimer<=0&&Ef()),t&&(W.state==="playing"||W.state==="settling")){t.step(i);for(let n=0;n<W.tables.length;n++)W.tables[n].quaternion.copy(t.tables[n].body.quaternion);for(let n of W.blocks)if(!n.removed&&(n.mesh.position.copy(n.body.position),n.mesh.quaternion.copy(i_.set(n.body.quaternion.x,n.body.quaternion.y,n.body.quaternion.z,n.body.quaternion.w)),n.counted&&n.hits>0)){let s=n.requiredHits-n.hits;n.shownLeft!==s&&(n.badge&&ee.levelGroup.remove(n.badge),n.badge=Li.badge(s),ee.levelGroup.add(n.badge),n.shownLeft=s,n.mesh.scale.multiplyScalar(.985)),n.badge.position.set(n.body.position.x,n.body.position.y+n.data.s[1]/2+.45,n.body.position.z)}for(let n of W.balls)n.mesh.position.copy(n.ball.body.position),n.spin+=i*9,n.mesh.lookAt(ee.camera.position),n.mesh.rotateZ(Math.sin(n.spin)*.35),n.smoke-=i,n.smoke<=0&&n.ball.body.velocity.length()>12&&(Cn.trail(n.mesh.position),n.smoke=.022),n.ball.removed&&ee.scene.remove(n.mesh);W.balls=W.balls.filter(n=>!n.ball.removed),t.result&&W.state==="playing"&&(W.state="settling",W.settle=0,W.aiming=!1,ee.setAimVisible(!1),Bl("")),W.state==="settling"&&(W.settle+=i,W.settle>(t.result==="win"?Zy:.85)&&(t.result==="win"||!Cn.busy)&&wf(t.result))}let e=ct("combo");if(t&&W.combo>=ri.combo.showFrom&&t.time-W.lastBreak<ri.combo.window){let n=W.combo>=ri.combo.max;n_(W.combo,n),e.classList.add("show"),e.classList.toggle("max",n)}else t&&t.time-W.lastBreak>1&&(e.classList.remove("show","max","bump"),W.combo=0,W.comboShown="");Cn.update(i,n=>fe.play("impact_glass_03",.1,n.x/-12)),W.shake*=Math.pow(.82,i*60),W.flash=Math.max(0,W.flash-i),W.recoil*=Math.pow(.8,i*60),ee.camera.position.copy(ee.cameraBase).add(new N((Math.random()-.5)*W.shake,(Math.random()-.5)*W.shake,0)),ee.cannon.recoil.position.z=-W.recoil,ct("game").style.setProperty("--flash",String(W.flash*2)),Ll>0&&(Ll-=i,Ll<=0&&W.state==="playing"&&Ks("wave")),Sf&&t&&(ct("debug").textContent=`FPS ${W.fps.toFixed(0)}
\u7269\u4EF6 ${t.remaining}/${t.blocks.length}
\u7832\u5F48 ${t.ammoLeft}/${t.level.ammo}
seed ${W.seed}`),ee.render()}function Fl(){let i=ct("game").getBoundingClientRect();ee.resize(i.width,i.height)}window.addEventListener("resize",Fl);function s_(){let i=An[W.index+1];if(!i)return;let t=Nl(i.scene),e=ge.scenes[t].key;Ti.bg?.includes(e)&&zn.load(`assets/bg_${e}.webp`),Li.prepareScene(t,{gentle:!0})}function Qr(i,t){ct("loadingBar").style.width=`${i}%`,t&&(ct("loadingText").textContent=t)}async function r_(){ct("gameTitle").textContent=ge.gameTitle,ct("gameSubtitle").textContent=ge.gameSubtitle,document.title=`${ge.gameTitle} \xB7 \u6EFF\u8CAB\u5927\u4EA8`;let i=He("assets/logo.webp");ct("heroLogo").src=i,ct("endLogo").src=i,ct("ctaCoin").src=He("assets/coin.webp"),ct("heroGrandpa").src=He("assets/gp_point.webp"),ct("ammoIcon").src=gf(),ct("ctaLabel").textContent=ge.cta.label,ct("endPerks").innerHTML=(ge.cta.perks||[]).map(n=>`<li>${n}</li>`).join(""),Ti.hero&&(ct("loading").classList.add("has-hero"),ct("loading").style.backgroundImage=`url("${He("assets/ui_loading_hero.webp")}")`),Ti.title&&(ct("gameTitle").innerHTML=`<img class="title-img" src="${He("assets/ui_title.webp")}" alt="${ge.gameTitle}">`,ct("gameTitle").classList.add("has-img")),Ti.endcard&&(ct("endcard").classList.add("has-art"),ct("endcard").style.backgroundImage=`url("${He("assets/ui_endcard.webp")}")`),Qr(15,"\u723A\u723A\u6B63\u5728\u64FA\u76E4\u2026"),await Promise.all([zn.load("assets/gp_head.webp","head"),zn.load("assets/coin.webp","coin"),zn.load("assets/logo.webp","logo"),...["wave","fists","cheer","shrug","point"].map(n=>zn.load(`assets/gp_${n}.webp`,`gp_${n}`)),...[...kn.digits?["combo_word",..."0123456789".split("").map(n=>`digit_${n}`)]:[],...kn.stars?["star_on","star_off"]:[],...["combo_max","clear_perfect","clear","end_win","end_fail","tag_rotate"].filter(n=>kn[n])].map(n=>zn.load(`assets/ui_${n}.webp`))]),Qr(45,"\u628A\u723A\u723A\u7684\u5BF6\u8C9D\u642C\u4E0A\u684C\u2026"),Li=new Jr({skin:ge,images:zn,manifest:Ti,renderer:ee.renderer}),Cn=new Rl(ee.scene,zn.all.coin),ee.setCannonLogo(zn.all.logo),await Li.prepareScene(Nl(An[0].scene)),await Li.prepareHeavy(),Qr(70,"\u5E6B\u5927\u7832\u88DD\u586B\u723A\u5E63\u2026"),Yy&&(fe.setMuted(!0),ct("soundBtn").textContent="\xD7");let t=fe.init().catch(n=>console.warn(n));await Promise.race([t,new Promise(n=>setTimeout(n,4e3))]),Qr(100,`${An.length} \u95DC \xB7 \u6253\u7206\u723A\u723A\u7684\u5BF6\u8C9D`),W.state="ready",Fl();let e=Number(eo.get("level"))||1;ct("startBtn").disabled=!1,ct("startBtn").textContent="\u958B\u59CB\u904A\u6232 \u279C",ct("startBtn").onclick=async()=>{if(W.state==="ready"){fe.resume(),fe.play("button",.6,0,1),fe.startBgm(ge.bgm?.loopSec),await Dl(e-1),ct("loading").remove();for(let n of["hud-top","progress","hud-bottom","grandpa"])ct(n).hidden=!1;ct("debug").hidden=!Sf,Fl(),Th=performance.now(),wh||requestAnimationFrame(Tf)}}}window.game={get state(){let i=W.world;return{level:W.index+1,levels:An.length,status:W.state,seed:W.seed,ammo:i?i.ammoLeft:0,ammoTotal:i?.level.ammo??0,remaining:i?.remaining??0,total:i?.blocks.length??0,combo:W.combo,stars:Eh(),clearShown:!ct("clear").hidden,endcard:ct("endcard").hidden?null:W.endKind}},loadLevel:(i,t)=>Dl(i-1,t),aimAt:(i,t,e)=>{W.aimTarget.set(i,t,e),Ih()},aimAtBlock(i=0){let t=W.blocks.filter(e=>!e.removed)[i];return t&&this.aimAt(t.body.position.x,t.body.position.y,t.body.position.z),!!t},fire:Ph,tick:(i=1)=>{for(let t=0;t<i;t++)Ah(1/60)},start:()=>ct("startBtn")?.onclick?.(),async snapshot(i=1){ee.render();let t=ee.renderer.domElement,e=document.createElement("canvas");e.width=Math.round(t.width*i),e.height=Math.round(t.height*i);let n=e.getContext("2d"),s=l=>new Promise(c=>{let h=new Image,d=setTimeout(()=>c(h),3e3);h.onload=()=>{clearTimeout(d),c(h)},h.onerror=()=>{clearTimeout(d),c(h)},h.src=l}),r=t.toDataURL(),o=await s(ct("backdrop").style.backgroundImage.slice(5,-2));if(o.width){let l=Math.max(e.width/o.width,e.height/o.height);n.drawImage(o,(e.width-o.width*l)/2,e.height-o.height*l,o.width*l,o.height*l)}let a=await s(r);return n.drawImage(a,0,0,e.width,e.height),e.toDataURL("image/png")},async saveShot(i,t=1){let e=await this.snapshot(t);return await fetch(`/__shot?name=${encodeURIComponent(i)}`,{method:"POST",body:e}),i},get world(){return W.world},get camera(){return ee.camera},get stage(){return ee},get audioInfo(){return fe.bgmInfo},showCombo(i){W.combo=i,W.lastBreak=W.world.time,Ah(1e-4)},forceFinish(i,t){t!=null&&(W.world.shots=W.world.level.ammo-t),wf(i)}};r_().catch(i=>{console.error(i),Qr(100,"\u8F09\u5165\u5931\u6557\uFF1A"+i.message),ct("startBtn").disabled=!1,ct("startBtn").textContent="\u91CD\u65B0\u8F09\u5165 \u21BB",ct("startBtn").onclick=()=>location.reload()});})();
