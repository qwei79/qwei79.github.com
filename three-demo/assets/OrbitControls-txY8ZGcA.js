import{an as Wa,q as Xa,ao as Ct,C as $e,ap as ha,V as De,aq as Ya,ar as Yt,as as Mn,at as Ot,z as Qt,a4 as it,h as At,au as vt,ad as tn,av as Ka,aw as qa,ax as Za,ay as Gt,az as $a,aA as ja,s as qe,P as hn,aB as pt,aC as Qa,aD as Rt,aE as vn,aF as jn,aG as nn,aH as an,aI as _a,aJ as Ja,a5 as Kt,o as Tn,aK as ma,aL as He,aM as er,aN as tr,aO as nr,aP as Ft,Q as ga,w as _n,a as bt,aQ as va,aR as Nt,aS as xt,N as en,aT as En,aU as jt,aV as ir,aW as ar,aX as rr,aY as or,aZ as sr,a_ as lr,a$ as cr,b0 as fr,b1 as dr,b2 as ur,b3 as pr,b4 as hr,b5 as _r,b6 as mr,b7 as gr,b8 as vr,b9 as Er,R as Sr,aa as Mr,ab as Tr,a7 as xr,a9 as ln,y as kt,a8 as Cn,ba as Ar,bb as Rr,bc as br,bd as Ea,be as Cr,bf as Pr,bg as Dr,bh as Lr,G as cn,bi as Sa,bj as Ma,bk as Ta,bl as Sn,bm as xa,bn as Aa,bo as xn,B as Ra,bp as si,bq as Ke,d as ba,br as Ca,bs as Pa,bt as It,bu as Vn,bv as kn,bw as Ur,bx as Da,by as wr,bz as yr,bA as mn,bB as Ir,bC as Nr,bD as li,bE as ci,bF as fi,bG as Or,bH as di,bI as Fr,bJ as Vt,bK as ui,bL as Br,bM as Hr,bN as Gr,bO as Vr,bP as kr,bQ as zr,bR as Wr,bS as Xr,bT as Yr,bU as Pn,bV as Dn,bW as Ln,bX as Un,bY as pi,bZ as hi,b_ as _i,b$ as mi,c0 as gi,c1 as vi,c2 as Ei,c3 as Si,c4 as Mi,c5 as Ti,c6 as xi,c7 as Ai,c8 as Ri,c9 as bi,ca as Ci,cb as Pi,cc as Di,cd as Li,ce as Ui,cf as wi,cg as yi,ch as wn,ci as Ii,cj as Ni,ck as Kr,cl as Oi,cm as Fi,cn as Bi,af as La,co as ut,cp as Ua,cq as rn,cr as qt,M as qr,cs as Zr,ct as $r,cu as jr,cv as Hi,cw as Qr,cx as zn,cy as Wn,cz as Xn,cA as Yn,cB as Kn,cC as qn,cD as Zn,cE as Jr,cF as eo,cG as wa,$ as to,cH as no,cI as io,cJ as ao,cK as ro,cL as oo,cM as so,cN as lo,cO as co,cP as fo,cQ as uo,cR as po,cS as ho,cT as _o,cU as mo,cV as go,cW as vo,cX as Xt,cY as zt,a6 as Gi,cZ as Vi,_ as Eo}from"./three.core-CAoFeAfN.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ya(){let e=null,n=!1,t=null,i=null;function r(o,p){t(o,p),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function So(e){const n=new WeakMap;function t(f,b){const v=f.array,C=f.usage,R=v.byteLength,E=e.createBuffer();e.bindBuffer(b,E),e.bufferData(b,v,C),f.onUploadCallback();let x;if(v instanceof Float32Array)x=e.FLOAT;else if(v instanceof Uint16Array)f.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(v instanceof Int16Array)x=e.SHORT;else if(v instanceof Uint32Array)x=e.UNSIGNED_INT;else if(v instanceof Int32Array)x=e.INT;else if(v instanceof Int8Array)x=e.BYTE;else if(v instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:x,bytesPerElement:v.BYTES_PER_ELEMENT,version:f.version,size:R}}function i(f,b,v){const C=b.array,R=b.updateRanges;if(e.bindBuffer(v,f),R.length===0)e.bufferSubData(v,0,C);else{R.sort((x,N)=>x.start-N.start);let E=0;for(let x=1;x<R.length;x++){const N=R[E],P=R[x];P.start<=N.start+N.count+1?N.count=Math.max(N.count,P.start+P.count-N.start):(++E,R[E]=P)}R.length=E+1;for(let x=0,N=R.length;x<N;x++){const P=R[x];e.bufferSubData(v,P.start*C.BYTES_PER_ELEMENT,C,P.start,P.count)}b.clearUpdateRanges()}b.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const b=n.get(f);b&&(e.deleteBuffer(b.buffer),n.delete(f))}function p(f,b){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const C=n.get(f);(!C||C.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const v=n.get(f);if(v===void 0)n.set(f,t(f,b));else if(v.version<f.version){if(v.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(v.buffer,f,b),v.version=f.version}}return{get:r,remove:o,update:p}}var Mo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,To=`#ifdef USE_ALPHAHASH
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
#endif`,xo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ao=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ro=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Co=`#ifdef USE_AOMAP
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
#endif`,Po=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Do=`#ifdef USE_BATCHING
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
#endif`,Lo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yo=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Io=`#ifdef USE_IRIDESCENCE
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
#endif`,No=`#ifdef USE_BUMPMAP
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
#endif`,Oo=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ho=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Go=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ko=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zo=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wo=`#define PI 3.141592653589793
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
} // validated`,Xo=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yo=`vec3 transformedNormal = objectNormal;
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
#endif`,Ko=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$o=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jo="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jo=`#ifdef USE_ENVMAP
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
#endif`,es=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ts=`#ifdef USE_ENVMAP
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
#endif`,ns=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,is=`#ifdef USE_ENVMAP
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
#endif`,as=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,os=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ss=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ls=`#ifdef USE_GRADIENTMAP
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
}`,cs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ds=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,us=`uniform bool receiveShadow;
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
#endif`,ps=`#ifdef USE_ENVMAP
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
#endif`,hs=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_s=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ms=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gs=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vs=`PhysicalMaterial material;
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
#endif`,Es=`struct PhysicalMaterial {
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
}`,Ss=`
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
#endif`,Ms=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ts=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xs=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,As=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rs=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bs=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cs=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ps=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ds=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ls=`#if defined( USE_POINTS_UV )
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
#endif`,Us=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ws=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ys=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Is=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ns=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Os=`#ifdef USE_MORPHTARGETS
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
#endif`,Fs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hs=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ks=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zs=`#ifdef USE_NORMALMAP
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
#endif`,Ws=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xs=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ys=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ks=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qs=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zs=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$s=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,js=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qs=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Js=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,el=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,il=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,al=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rl=`float getShadowMask() {
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
}`,ol=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sl=`#ifdef USE_SKINNING
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
#endif`,ll=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cl=`#ifdef USE_SKINNING
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
#endif`,fl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ul=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pl=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hl=`#ifdef USE_TRANSMISSION
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
#endif`,_l=`#ifdef USE_TRANSMISSION
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
#endif`,ml=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,El=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ml=`uniform sampler2D t2D;
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
}`,Tl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Al=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bl=`#include <common>
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
}`,Cl=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pl=`#define DISTANCE
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
}`,Dl=`#define DISTANCE
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
}`,Ll=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ul=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wl=`uniform float scale;
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
}`,yl=`uniform vec3 diffuse;
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
}`,Il=`#include <common>
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
}`,Nl=`uniform vec3 diffuse;
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
}`,Ol=`#define LAMBERT
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
}`,Fl=`#define LAMBERT
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
}`,Bl=`#define MATCAP
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
}`,Hl=`#define MATCAP
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
}`,Gl=`#define NORMAL
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
}`,Vl=`#define NORMAL
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
}`,kl=`#define PHONG
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
}`,zl=`#define PHONG
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
}`,Wl=`#define STANDARD
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
}`,Xl=`#define STANDARD
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
}`,Yl=`#define TOON
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
}`,Kl=`#define TOON
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
}`,ql=`uniform float size;
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
}`,Zl=`uniform vec3 diffuse;
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
}`,$l=`#include <common>
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
}`,jl=`uniform vec3 color;
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
}`,Ql=`uniform float rotation;
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
}`,Jl=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:Mo,alphahash_pars_fragment:To,alphamap_fragment:xo,alphamap_pars_fragment:Ao,alphatest_fragment:Ro,alphatest_pars_fragment:bo,aomap_fragment:Co,aomap_pars_fragment:Po,batching_pars_vertex:Do,batching_vertex:Lo,begin_vertex:Uo,beginnormal_vertex:wo,bsdfs:yo,iridescence_fragment:Io,bumpmap_pars_fragment:No,clipping_planes_fragment:Oo,clipping_planes_pars_fragment:Fo,clipping_planes_pars_vertex:Bo,clipping_planes_vertex:Ho,color_fragment:Go,color_pars_fragment:Vo,color_pars_vertex:ko,color_vertex:zo,common:Wo,cube_uv_reflection_fragment:Xo,defaultnormal_vertex:Yo,displacementmap_pars_vertex:Ko,displacementmap_vertex:qo,emissivemap_fragment:Zo,emissivemap_pars_fragment:$o,colorspace_fragment:jo,colorspace_pars_fragment:Qo,envmap_fragment:Jo,envmap_common_pars_fragment:es,envmap_pars_fragment:ts,envmap_pars_vertex:ns,envmap_physical_pars_fragment:ps,envmap_vertex:is,fog_vertex:as,fog_pars_vertex:rs,fog_fragment:os,fog_pars_fragment:ss,gradientmap_pars_fragment:ls,lightmap_pars_fragment:cs,lights_lambert_fragment:fs,lights_lambert_pars_fragment:ds,lights_pars_begin:us,lights_toon_fragment:hs,lights_toon_pars_fragment:_s,lights_phong_fragment:ms,lights_phong_pars_fragment:gs,lights_physical_fragment:vs,lights_physical_pars_fragment:Es,lights_fragment_begin:Ss,lights_fragment_maps:Ms,lights_fragment_end:Ts,logdepthbuf_fragment:xs,logdepthbuf_pars_fragment:As,logdepthbuf_pars_vertex:Rs,logdepthbuf_vertex:bs,map_fragment:Cs,map_pars_fragment:Ps,map_particle_fragment:Ds,map_particle_pars_fragment:Ls,metalnessmap_fragment:Us,metalnessmap_pars_fragment:ws,morphinstance_vertex:ys,morphcolor_vertex:Is,morphnormal_vertex:Ns,morphtarget_pars_vertex:Os,morphtarget_vertex:Fs,normal_fragment_begin:Bs,normal_fragment_maps:Hs,normal_pars_fragment:Gs,normal_pars_vertex:Vs,normal_vertex:ks,normalmap_pars_fragment:zs,clearcoat_normal_fragment_begin:Ws,clearcoat_normal_fragment_maps:Xs,clearcoat_pars_fragment:Ys,iridescence_pars_fragment:Ks,opaque_fragment:qs,packing:Zs,premultiplied_alpha_fragment:$s,project_vertex:js,dithering_fragment:Qs,dithering_pars_fragment:Js,roughnessmap_fragment:el,roughnessmap_pars_fragment:tl,shadowmap_pars_fragment:nl,shadowmap_pars_vertex:il,shadowmap_vertex:al,shadowmask_pars_fragment:rl,skinbase_vertex:ol,skinning_pars_vertex:sl,skinning_vertex:ll,skinnormal_vertex:cl,specularmap_fragment:fl,specularmap_pars_fragment:dl,tonemapping_fragment:ul,tonemapping_pars_fragment:pl,transmission_fragment:hl,transmission_pars_fragment:_l,uv_pars_fragment:ml,uv_pars_vertex:gl,uv_vertex:vl,worldpos_vertex:El,background_vert:Sl,background_frag:Ml,backgroundCube_vert:Tl,backgroundCube_frag:xl,cube_vert:Al,cube_frag:Rl,depth_vert:bl,depth_frag:Cl,distanceRGBA_vert:Pl,distanceRGBA_frag:Dl,equirect_vert:Ll,equirect_frag:Ul,linedashed_vert:wl,linedashed_frag:yl,meshbasic_vert:Il,meshbasic_frag:Nl,meshlambert_vert:Ol,meshlambert_frag:Fl,meshmatcap_vert:Bl,meshmatcap_frag:Hl,meshnormal_vert:Gl,meshnormal_frag:Vl,meshphong_vert:kl,meshphong_frag:zl,meshphysical_vert:Wl,meshphysical_frag:Xl,meshtoon_vert:Yl,meshtoon_frag:Kl,points_vert:ql,points_frag:Zl,shadow_vert:$l,shadow_frag:jl,sprite_vert:Ql,sprite_frag:Jl},ee={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mt={basic:{uniforms:ut([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:ut([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:ut([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:ut([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:ut([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:ut([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:ut([ee.points,ee.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:ut([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:ut([ee.common,ee.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:ut([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:ut([ee.sprite,ee.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distanceRGBA:{uniforms:ut([ee.common,ee.displacementmap,{referencePosition:{value:new De},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distanceRGBA_vert,fragmentShader:Pe.distanceRGBA_frag},shadow:{uniforms:ut([ee.lights,ee.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Mt.physical={uniforms:ut([Mt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};const fn={r:0,b:0,g:0},Lt=new Ua,ec=new Kt;function tc(e,n,t,i,r,o,p){const f=new $e(0);let b=o===!0?0:1,v,C,R=null,E=0,x=null;function N(T){let m=T.isScene===!0?T.background:null;return m&&m.isTexture&&(m=(T.backgroundBlurriness>0?t:n).get(m)),m}function P(T){let m=!1;const G=N(T);G===null?a(f,b):G&&G.isColor&&(a(G,1),m=!0);const L=e.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,p):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,p),(e.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function c(T,m){const G=N(m);G&&(G.isCubeTexture||G.mapping===xn)?(C===void 0&&(C=new bt(new Ra(1,1,1),new Ft({name:"BackgroundCubeMaterial",uniforms:si(Mt.backgroundCube.uniforms),vertexShader:Mt.backgroundCube.vertexShader,fragmentShader:Mt.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),C.geometry.deleteAttribute("normal"),C.geometry.deleteAttribute("uv"),C.onBeforeRender=function(L,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(C.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(C)),Lt.copy(m.backgroundRotation),Lt.x*=-1,Lt.y*=-1,Lt.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Lt.y*=-1,Lt.z*=-1),C.material.uniforms.envMap.value=G,C.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,C.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,C.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,C.material.uniforms.backgroundRotation.value.setFromMatrix4(ec.makeRotationFromEuler(Lt)),C.material.toneMapped=it.getTransfer(G.colorSpace)!==Ke,(R!==G||E!==G.version||x!==e.toneMapping)&&(C.material.needsUpdate=!0,R=G,E=G.version,x=e.toneMapping),C.layers.enableAll(),T.unshift(C,C.geometry,C.material,0,0,null)):G&&G.isTexture&&(v===void 0&&(v=new bt(new ba(2,2),new Ft({name:"BackgroundMaterial",uniforms:si(Mt.background.uniforms),vertexShader:Mt.background.vertexShader,fragmentShader:Mt.background.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(v)),v.material.uniforms.t2D.value=G,v.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,v.material.toneMapped=it.getTransfer(G.colorSpace)!==Ke,G.matrixAutoUpdate===!0&&G.updateMatrix(),v.material.uniforms.uvTransform.value.copy(G.matrix),(R!==G||E!==G.version||x!==e.toneMapping)&&(v.material.needsUpdate=!0,R=G,E=G.version,x=e.toneMapping),v.layers.enableAll(),T.unshift(v,v.geometry,v.material,0,0,null))}function a(T,m){T.getRGB(fn,Ca(e)),i.buffers.color.setClear(fn.r,fn.g,fn.b,m,p)}function y(){C!==void 0&&(C.geometry.dispose(),C.material.dispose()),v!==void 0&&(v.geometry.dispose(),v.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(T,m=1){f.set(T),b=m,a(f,b)},getClearAlpha:function(){return b},setClearAlpha:function(T){b=T,a(f,b)},render:P,addToRenderList:c,dispose:y}}function nc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=E(null);let o=r,p=!1;function f(d,A,K,V,Y){let j=!1;const z=R(V,K,A);o!==z&&(o=z,v(o.object)),j=x(d,V,K,Y),j&&N(d,V,K,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(j||p)&&(p=!1,m(d,A,K,V),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function b(){return e.createVertexArray()}function v(d){return e.bindVertexArray(d)}function C(d){return e.deleteVertexArray(d)}function R(d,A,K){const V=K.wireframe===!0;let Y=i[d.id];Y===void 0&&(Y={},i[d.id]=Y);let j=Y[A.id];j===void 0&&(j={},Y[A.id]=j);let z=j[V];return z===void 0&&(z=E(b()),j[V]=z),z}function E(d){const A=[],K=[],V=[];for(let Y=0;Y<t;Y++)A[Y]=0,K[Y]=0,V[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:K,attributeDivisors:V,object:d,attributes:{},index:null}}function x(d,A,K,V){const Y=o.attributes,j=A.attributes;let z=0;const J=K.getAttributes();for(const F in J)if(J[F].location>=0){const Se=Y[F];let Le=j[F];if(Le===void 0&&(F==="instanceMatrix"&&d.instanceMatrix&&(Le=d.instanceMatrix),F==="instanceColor"&&d.instanceColor&&(Le=d.instanceColor)),Se===void 0||Se.attribute!==Le||Le&&Se.data!==Le.data)return!0;z++}return o.attributesNum!==z||o.index!==V}function N(d,A,K,V){const Y={},j=A.attributes;let z=0;const J=K.getAttributes();for(const F in J)if(J[F].location>=0){let Se=j[F];Se===void 0&&(F==="instanceMatrix"&&d.instanceMatrix&&(Se=d.instanceMatrix),F==="instanceColor"&&d.instanceColor&&(Se=d.instanceColor));const Le={};Le.attribute=Se,Se&&Se.data&&(Le.data=Se.data),Y[F]=Le,z++}o.attributes=Y,o.attributesNum=z,o.index=V}function P(){const d=o.newAttributes;for(let A=0,K=d.length;A<K;A++)d[A]=0}function c(d){a(d,0)}function a(d,A){const K=o.newAttributes,V=o.enabledAttributes,Y=o.attributeDivisors;K[d]=1,V[d]===0&&(e.enableVertexAttribArray(d),V[d]=1),Y[d]!==A&&(e.vertexAttribDivisor(d,A),Y[d]=A)}function y(){const d=o.newAttributes,A=o.enabledAttributes;for(let K=0,V=A.length;K<V;K++)A[K]!==d[K]&&(e.disableVertexAttribArray(K),A[K]=0)}function T(d,A,K,V,Y,j,z){z===!0?e.vertexAttribIPointer(d,A,K,Y,j):e.vertexAttribPointer(d,A,K,V,Y,j)}function m(d,A,K,V){P();const Y=V.attributes,j=K.getAttributes(),z=A.defaultAttributeValues;for(const J in j){const F=j[J];if(F.location>=0){let he=Y[J];if(he===void 0&&(J==="instanceMatrix"&&d.instanceMatrix&&(he=d.instanceMatrix),J==="instanceColor"&&d.instanceColor&&(he=d.instanceColor)),he!==void 0){const Se=he.normalized,Le=he.itemSize,Ge=n.get(he);if(Ge===void 0)continue;const Qe=Ge.buffer,k=Ge.type,Q=Ge.bytesPerElement,ue=k===e.INT||k===e.UNSIGNED_INT||he.gpuType===Pa;if(he.isInterleavedBufferAttribute){const ie=he.data,Me=ie.stride,Re=he.offset;if(ie.isInstancedInterleavedBuffer){for(let Ue=0;Ue<F.locationSize;Ue++)a(F.location+Ue,ie.meshPerAttribute);d.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ue=0;Ue<F.locationSize;Ue++)c(F.location+Ue);e.bindBuffer(e.ARRAY_BUFFER,Qe);for(let Ue=0;Ue<F.locationSize;Ue++)T(F.location+Ue,Le/F.locationSize,k,Se,Me*Q,(Re+Le/F.locationSize*Ue)*Q,ue)}else{if(he.isInstancedBufferAttribute){for(let ie=0;ie<F.locationSize;ie++)a(F.location+ie,he.meshPerAttribute);d.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ie=0;ie<F.locationSize;ie++)c(F.location+ie);e.bindBuffer(e.ARRAY_BUFFER,Qe);for(let ie=0;ie<F.locationSize;ie++)T(F.location+ie,Le/F.locationSize,k,Se,Le*Q,Le/F.locationSize*ie*Q,ue)}}else if(z!==void 0){const Se=z[J];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(F.location,Se);break;case 3:e.vertexAttrib3fv(F.location,Se);break;case 4:e.vertexAttrib4fv(F.location,Se);break;default:e.vertexAttrib1fv(F.location,Se)}}}}y()}function G(){B();for(const d in i){const A=i[d];for(const K in A){const V=A[K];for(const Y in V)C(V[Y].object),delete V[Y];delete A[K]}delete i[d]}}function L(d){if(i[d.id]===void 0)return;const A=i[d.id];for(const K in A){const V=A[K];for(const Y in V)C(V[Y].object),delete V[Y];delete A[K]}delete i[d.id]}function I(d){for(const A in i){const K=i[A];if(K[d.id]===void 0)continue;const V=K[d.id];for(const Y in V)C(V[Y].object),delete V[Y];delete K[d.id]}}function B(){h(),p=!0,o!==r&&(o=r,v(o.object))}function h(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:B,resetDefaultState:h,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:P,enableAttribute:c,disableUnusedAttributes:y}}function ic(e,n,t){let i;function r(v){i=v}function o(v,C){e.drawArrays(i,v,C),t.update(C,i,1)}function p(v,C,R){R!==0&&(e.drawArraysInstanced(i,v,C,R),t.update(C,i,R))}function f(v,C,R){if(R===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,v,0,C,0,R);let x=0;for(let N=0;N<R;N++)x+=C[N];t.update(x,i,1)}function b(v,C,R,E){if(R===0)return;const x=n.get("WEBGL_multi_draw");if(x===null)for(let N=0;N<v.length;N++)p(v[N],C[N],E[N]);else{x.multiDrawArraysInstancedWEBGL(i,v,0,C,0,E,0,R);let N=0;for(let P=0;P<R;P++)N+=C[P]*E[P];t.update(N,i,1)}}this.setMode=r,this.render=o,this.renderInstances=p,this.renderMultiDraw=f,this.renderMultiDrawInstances=b}function ac(e,n,t,i){let r;function o(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function p(I){return!(I!==Rt&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const B=I===Mn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==Ot&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==It&&!B)}function b(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=t.precision!==void 0?t.precision:"highp";const C=b(v);C!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",C,"instead."),v=C);const R=t.logarithmicDepthBuffer===!0,E=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),N=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),a=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),T=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),G=N>0,L=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:b,textureFormatReadable:p,textureTypeReadable:f,precision:v,logarithmicDepthBuffer:R,reverseDepthBuffer:E,maxTextures:x,maxVertexTextures:N,maxTextureSize:P,maxCubemapSize:c,maxAttributes:a,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:m,vertexTextures:G,maxSamples:L}}function rc(e){const n=this;let t=null,i=0,r=!1,o=!1;const p=new ma,f=new He,b={value:null,needsUpdate:!1};this.uniform=b,this.numPlanes=0,this.numIntersection=0,this.init=function(R,E){const x=R.length!==0||E||i!==0||r;return r=E,i=R.length,x},this.beginShadows=function(){o=!0,C(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(R,E){t=C(R,E,0)},this.setState=function(R,E,x){const N=R.clippingPlanes,P=R.clipIntersection,c=R.clipShadows,a=e.get(R);if(!r||N===null||N.length===0||o&&!c)o?C(null):v();else{const y=o?0:i,T=y*4;let m=a.clippingState||null;b.value=m,m=C(N,E,T,x);for(let G=0;G!==T;++G)m[G]=t[G];a.clippingState=m,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=y}};function v(){b.value!==t&&(b.value=t,b.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function C(R,E,x,N){const P=R!==null?R.length:0;let c=null;if(P!==0){if(c=b.value,N!==!0||c===null){const a=x+P*4,y=E.matrixWorldInverse;f.getNormalMatrix(y),(c===null||c.length<a)&&(c=new Float32Array(a));for(let T=0,m=x;T!==P;++T,m+=4)p.copy(R[T]).applyMatrix4(y,f),p.normal.toArray(c,m),c[m+3]=p.constant}b.value=c,b.needsUpdate=!0}return n.numPlanes=P,n.numIntersection=0,c}}function oc(e){let n=new WeakMap;function t(p,f){return f===Vn?p.mapping=rn:f===kn&&(p.mapping=qt),p}function i(p){if(p&&p.isTexture){const f=p.mapping;if(f===Vn||f===kn)if(n.has(p)){const b=n.get(p).texture;return t(b,p.mapping)}else{const b=p.image;if(b&&b.height>0){const v=new Ur(b.height);return v.fromEquirectangularTexture(e,p),n.set(p,v),p.addEventListener("dispose",r),t(v.texture,p.mapping)}else return null}}return p}function r(p){const f=p.target;f.removeEventListener("dispose",r);const b=n.get(f);b!==void 0&&(n.delete(f),b.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const Wt=4,ki=[.125,.215,.35,.446,.526,.582],yt=20,yn=new to,zi=new $e;let In=null,Nn=0,On=0,Fn=!1;const wt=(1+Math.sqrt(5))/2,Ht=1/wt,Wi=[new De(-wt,Ht,0),new De(wt,Ht,0),new De(-Ht,0,wt),new De(Ht,0,wt),new De(0,wt,-Ht),new De(0,wt,Ht),new De(-1,1,-1),new De(1,1,-1),new De(-1,1,1),new De(1,1,1)];class Xi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100){In=this._renderer.getRenderTarget(),Nn=this._renderer.getActiveCubeFace(),On=this._renderer.getActiveMipmapLevel(),Fn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(n,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ki(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(In,Nn,On),this._renderer.xr.enabled=Fn,n.scissorTest=!1,dn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===rn||n.mapping===qt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),In=this._renderer.getRenderTarget(),Nn=this._renderer.getActiveCubeFace(),On=this._renderer.getActiveMipmapLevel(),Fn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Mn,format:Rt,colorSpace:Tn,depthBuffer:!1},r=Yi(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yi(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sc(o)),this._blurMaterial=lc(o,n,t)}return r}_compileMaterial(n){const t=new bt(this._lodPlanes[0],n);this._renderer.compile(t,yn)}_sceneToCubeUV(n,t,i,r){const f=new hn(90,1,t,i),b=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],C=this._renderer,R=C.autoClear,E=C.toneMapping;C.getClearColor(zi),C.toneMapping=Ct,C.autoClear=!1;const x=new qr({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),N=new bt(new Ra,x);let P=!1;const c=n.background;c?c.isColor&&(x.color.copy(c),n.background=null,P=!0):(x.color.copy(zi),P=!0);for(let a=0;a<6;a++){const y=a%3;y===0?(f.up.set(0,b[a],0),f.lookAt(v[a],0,0)):y===1?(f.up.set(0,0,b[a]),f.lookAt(0,v[a],0)):(f.up.set(0,b[a],0),f.lookAt(0,0,v[a]));const T=this._cubeSize;dn(r,y*T,a>2?T:0,T,T),C.setRenderTarget(r),P&&C.render(N,f),C.render(n,f)}N.geometry.dispose(),N.material.dispose(),C.toneMapping=E,C.autoClear=R,n.background=c}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===rn||n.mapping===qt;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qi()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ki());const o=r?this._cubemapMaterial:this._equirectMaterial,p=new bt(this._lodPlanes[0],o),f=o.uniforms;f.envMap.value=n;const b=this._cubeSize;dn(t,0,0,3*b,2*b),i.setRenderTarget(t),i.render(p,yn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const p=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=Wi[(r-o-1)%Wi.length];this._blur(n,o-1,o,p,f)}t.autoClear=i}_blur(n,t,i,r,o){const p=this._pingPongRenderTarget;this._halfBlur(n,p,t,i,r,"latitudinal",o),this._halfBlur(p,n,i,i,r,"longitudinal",o)}_halfBlur(n,t,i,r,o,p,f){const b=this._renderer,v=this._blurMaterial;p!=="latitudinal"&&p!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const C=3,R=new bt(this._lodPlanes[r],v),E=v.uniforms,x=this._sizeLods[i]-1,N=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*yt-1),P=o/N,c=isFinite(o)?1+Math.floor(C*P):yt;c>yt&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${yt}`);const a=[];let y=0;for(let I=0;I<yt;++I){const B=I/P,h=Math.exp(-B*B/2);a.push(h),I===0?y+=h:I<c&&(y+=2*h)}for(let I=0;I<a.length;I++)a[I]=a[I]/y;E.envMap.value=n.texture,E.samples.value=c,E.weights.value=a,E.latitudinal.value=p==="latitudinal",f&&(E.poleAxis.value=f);const{_lodMax:T}=this;E.dTheta.value=N,E.mipInt.value=T-i;const m=this._sizeLods[r],G=3*m*(r>T-Wt?r-T+Wt:0),L=4*(this._cubeSize-m);dn(t,G,L,3*m,2*m),b.setRenderTarget(t),b.render(R,yn)}}function sc(e){const n=[],t=[],i=[];let r=e;const o=e-Wt+1+ki.length;for(let p=0;p<o;p++){const f=Math.pow(2,r);t.push(f);let b=1/f;p>e-Wt?b=ki[p-e+Wt-1]:p===0&&(b=0),i.push(b);const v=1/(f-2),C=-v,R=1+v,E=[C,C,R,C,R,R,C,C,R,R,C,R],x=6,N=6,P=3,c=2,a=1,y=new Float32Array(P*N*x),T=new Float32Array(c*N*x),m=new Float32Array(a*N*x);for(let L=0;L<x;L++){const I=L%3*2/3-1,B=L>2?0:-1,h=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];y.set(h,P*N*L),T.set(E,c*N*L);const d=[L,L,L,L,L,L];m.set(d,a*N*L)}const G=new ga;G.setAttribute("position",new _n(y,P)),G.setAttribute("uv",new _n(T,c)),G.setAttribute("faceIndex",new _n(m,a)),n.push(G),r>Wt&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Yi(e,n,t){const i=new Yt(e,n,t);return i.texture.mapping=xn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dn(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function lc(e,n,t){const i=new Float32Array(yt),r=new De(0,1,0);return new Ft({name:"SphericalGaussianBlur",defines:{n:yt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qn(),fragmentShader:`

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
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Ki(){return new Ft({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qn(),fragmentShader:`

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
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function qi(){return new Ft({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nt,depthTest:!1,depthWrite:!1})}function Qn(){return`

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
	`}function cc(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const b=f.mapping,v=b===Vn||b===kn,C=b===rn||b===qt;if(v||C){let R=n.get(f);const E=R!==void 0?R.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==E)return t===null&&(t=new Xi(e)),R=v?t.fromEquirectangular(f,R):t.fromCubemap(f,R),R.texture.pmremVersion=f.pmremVersion,n.set(f,R),R.texture;if(R!==void 0)return R.texture;{const x=f.image;return v&&x&&x.height>0||C&&x&&r(x)?(t===null&&(t=new Xi(e)),R=v?t.fromEquirectangular(f):t.fromCubemap(f),R.texture.pmremVersion=f.pmremVersion,n.set(f,R),f.addEventListener("dispose",o),R.texture):null}}}return f}function r(f){let b=0;const v=6;for(let C=0;C<v;C++)f[C]!==void 0&&b++;return b===v}function o(f){const b=f.target;b.removeEventListener("dispose",o);const v=n.get(b);v!==void 0&&(n.delete(b),v.dispose())}function p(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:p}}function fc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Gt("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dc(e,n,t,i){const r={},o=new WeakMap;function p(R){const E=R.target;E.index!==null&&n.remove(E.index);for(const N in E.attributes)n.remove(E.attributes[N]);E.removeEventListener("dispose",p),delete r[E.id];const x=o.get(E);x&&(n.remove(x),o.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function f(R,E){return r[E.id]===!0||(E.addEventListener("dispose",p),r[E.id]=!0,t.memory.geometries++),E}function b(R){const E=R.attributes;for(const x in E)n.update(E[x],e.ARRAY_BUFFER)}function v(R){const E=[],x=R.index,N=R.attributes.position;let P=0;if(x!==null){const y=x.array;P=x.version;for(let T=0,m=y.length;T<m;T+=3){const G=y[T+0],L=y[T+1],I=y[T+2];E.push(G,L,L,I,I,G)}}else if(N!==void 0){const y=N.array;P=N.version;for(let T=0,m=y.length/3-1;T<m;T+=3){const G=T+0,L=T+1,I=T+2;E.push(G,L,L,I,I,G)}}else return;const c=new(Zr(E)?$r:jr)(E,1);c.version=P;const a=o.get(R);a&&n.remove(a),o.set(R,c)}function C(R){const E=o.get(R);if(E){const x=R.index;x!==null&&E.version<x.version&&v(R)}else v(R);return o.get(R)}return{get:f,update:b,getWireframeAttribute:C}}function uc(e,n,t){let i;function r(E){i=E}let o,p;function f(E){o=E.type,p=E.bytesPerElement}function b(E,x){e.drawElements(i,x,o,E*p),t.update(x,i,1)}function v(E,x,N){N!==0&&(e.drawElementsInstanced(i,x,o,E*p,N),t.update(x,i,N))}function C(E,x,N){if(N===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,E,0,N);let c=0;for(let a=0;a<N;a++)c+=x[a];t.update(c,i,1)}function R(E,x,N,P){if(N===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let a=0;a<E.length;a++)v(E[a]/p,x[a],P[a]);else{c.multiDrawElementsInstancedWEBGL(i,x,0,o,E,0,P,0,N);let a=0;for(let y=0;y<N;y++)a+=x[y]*P[y];t.update(a,i,1)}}this.setMode=r,this.setIndex=f,this.render=b,this.renderInstances=v,this.renderMultiDraw=C,this.renderMultiDrawInstances=R}function pc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,p,f){switch(t.calls++,p){case e.TRIANGLES:t.triangles+=f*(o/3);break;case e.LINES:t.lines+=f*(o/2);break;case e.LINE_STRIP:t.lines+=f*(o-1);break;case e.LINE_LOOP:t.lines+=f*o;break;case e.POINTS:t.points+=f*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",p);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hc(e,n,t){const i=new WeakMap,r=new pt;function o(p,f,b){const v=p.morphTargetInfluences,C=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,R=C!==void 0?C.length:0;let E=i.get(f);if(E===void 0||E.count!==R){let h=function(){I.dispose(),i.delete(f),f.removeEventListener("dispose",h)};E!==void 0&&E.texture.dispose();const x=f.morphAttributes.position!==void 0,N=f.morphAttributes.normal!==void 0,P=f.morphAttributes.color!==void 0,c=f.morphAttributes.position||[],a=f.morphAttributes.normal||[],y=f.morphAttributes.color||[];let T=0;x===!0&&(T=1),N===!0&&(T=2),P===!0&&(T=3);let m=f.attributes.position.count*T,G=1;m>n.maxTextureSize&&(G=Math.ceil(m/n.maxTextureSize),m=n.maxTextureSize);const L=new Float32Array(m*G*4*R),I=new Da(L,m,G,R);I.type=It,I.needsUpdate=!0;const B=T*4;for(let d=0;d<R;d++){const A=c[d],K=a[d],V=y[d],Y=m*G*4*d;for(let j=0;j<A.count;j++){const z=j*B;x===!0&&(r.fromBufferAttribute(A,j),L[Y+z+0]=r.x,L[Y+z+1]=r.y,L[Y+z+2]=r.z,L[Y+z+3]=0),N===!0&&(r.fromBufferAttribute(K,j),L[Y+z+4]=r.x,L[Y+z+5]=r.y,L[Y+z+6]=r.z,L[Y+z+7]=0),P===!0&&(r.fromBufferAttribute(V,j),L[Y+z+8]=r.x,L[Y+z+9]=r.y,L[Y+z+10]=r.z,L[Y+z+11]=V.itemSize===4?r.w:1)}}E={count:R,texture:I,size:new qe(m,G)},i.set(f,E),f.addEventListener("dispose",h)}if(p.isInstancedMesh===!0&&p.morphTexture!==null)b.getUniforms().setValue(e,"morphTexture",p.morphTexture,t);else{let x=0;for(let P=0;P<v.length;P++)x+=v[P];const N=f.morphTargetsRelative?1:1-x;b.getUniforms().setValue(e,"morphTargetBaseInfluence",N),b.getUniforms().setValue(e,"morphTargetInfluences",v)}b.getUniforms().setValue(e,"morphTargetsTexture",E.texture,t),b.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:o}}function _c(e,n,t,i){let r=new WeakMap;function o(b){const v=i.render.frame,C=b.geometry,R=n.get(b,C);if(r.get(R)!==v&&(n.update(R),r.set(R,v)),b.isInstancedMesh&&(b.hasEventListener("dispose",f)===!1&&b.addEventListener("dispose",f),r.get(b)!==v&&(t.update(b.instanceMatrix,e.ARRAY_BUFFER),b.instanceColor!==null&&t.update(b.instanceColor,e.ARRAY_BUFFER),r.set(b,v))),b.isSkinnedMesh){const E=b.skeleton;r.get(E)!==v&&(E.update(),r.set(E,v))}return R}function p(){r=new WeakMap}function f(b){const v=b.target;v.removeEventListener("dispose",f),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:o,dispose:p}}const Ia=new La,Zi=new _a(1,1),Na=new Da,Oa=new uo,Fa=new po,$i=[],ji=[],Qi=new Float32Array(16),Ji=new Float32Array(9),ea=new Float32Array(4);function Zt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let o=$i[r];if(o===void 0&&(o=new Float32Array(r),$i[r]=o),n!==0){i.toArray(o,0);for(let p=1,f=0;p!==n;++p)f+=t,e[p].toArray(o,f)}return o}function rt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ot(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function An(e,n){let t=ji[n];t===void 0&&(t=new Int32Array(n),ji[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function mc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function gc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2fv(this.addr,n),ot(t,n)}}function vc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(rt(t,n))return;e.uniform3fv(this.addr,n),ot(t,n)}}function Ec(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4fv(this.addr,n),ot(t,n)}}function Sc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;ea.set(i),e.uniformMatrix2fv(this.addr,!1,ea),ot(t,i)}}function Mc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;Ji.set(i),e.uniformMatrix3fv(this.addr,!1,Ji),ot(t,i)}}function Tc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(rt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ot(t,n)}else{if(rt(t,i))return;Qi.set(i),e.uniformMatrix4fv(this.addr,!1,Qi),ot(t,i)}}function xc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Ac(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2iv(this.addr,n),ot(t,n)}}function Rc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(rt(t,n))return;e.uniform3iv(this.addr,n),ot(t,n)}}function bc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4iv(this.addr,n),ot(t,n)}}function Cc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Pc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(rt(t,n))return;e.uniform2uiv(this.addr,n),ot(t,n)}}function Dc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(rt(t,n))return;e.uniform3uiv(this.addr,n),ot(t,n)}}function Lc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(rt(t,n))return;e.uniform4uiv(this.addr,n),ot(t,n)}}function Uc(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let o;this.type===e.SAMPLER_2D_SHADOW?(Zi.compareFunction=Ea,o=Zi):o=Ia,t.setTexture2D(n||o,r)}function wc(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Oa,r)}function yc(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Fa,r)}function Ic(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Na,r)}function Nc(e){switch(e){case 5126:return mc;case 35664:return gc;case 35665:return vc;case 35666:return Ec;case 35674:return Sc;case 35675:return Mc;case 35676:return Tc;case 5124:case 35670:return xc;case 35667:case 35671:return Ac;case 35668:case 35672:return Rc;case 35669:case 35673:return bc;case 5125:return Cc;case 36294:return Pc;case 36295:return Dc;case 36296:return Lc;case 35678:case 36198:case 36298:case 36306:case 35682:return Uc;case 35679:case 36299:case 36307:return wc;case 35680:case 36300:case 36308:case 36293:return yc;case 36289:case 36303:case 36311:case 36292:return Ic}}function Oc(e,n){e.uniform1fv(this.addr,n)}function Fc(e,n){const t=Zt(n,this.size,2);e.uniform2fv(this.addr,t)}function Bc(e,n){const t=Zt(n,this.size,3);e.uniform3fv(this.addr,t)}function Hc(e,n){const t=Zt(n,this.size,4);e.uniform4fv(this.addr,t)}function Gc(e,n){const t=Zt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Vc(e,n){const t=Zt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function kc(e,n){const t=Zt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function zc(e,n){e.uniform1iv(this.addr,n)}function Wc(e,n){e.uniform2iv(this.addr,n)}function Xc(e,n){e.uniform3iv(this.addr,n)}function Yc(e,n){e.uniform4iv(this.addr,n)}function Kc(e,n){e.uniform1uiv(this.addr,n)}function qc(e,n){e.uniform2uiv(this.addr,n)}function Zc(e,n){e.uniform3uiv(this.addr,n)}function $c(e,n){e.uniform4uiv(this.addr,n)}function jc(e,n,t){const i=this.cache,r=n.length,o=An(t,r);rt(i,o)||(e.uniform1iv(this.addr,o),ot(i,o));for(let p=0;p!==r;++p)t.setTexture2D(n[p]||Ia,o[p])}function Qc(e,n,t){const i=this.cache,r=n.length,o=An(t,r);rt(i,o)||(e.uniform1iv(this.addr,o),ot(i,o));for(let p=0;p!==r;++p)t.setTexture3D(n[p]||Oa,o[p])}function Jc(e,n,t){const i=this.cache,r=n.length,o=An(t,r);rt(i,o)||(e.uniform1iv(this.addr,o),ot(i,o));for(let p=0;p!==r;++p)t.setTextureCube(n[p]||Fa,o[p])}function ef(e,n,t){const i=this.cache,r=n.length,o=An(t,r);rt(i,o)||(e.uniform1iv(this.addr,o),ot(i,o));for(let p=0;p!==r;++p)t.setTexture2DArray(n[p]||Na,o[p])}function tf(e){switch(e){case 5126:return Oc;case 35664:return Fc;case 35665:return Bc;case 35666:return Hc;case 35674:return Gc;case 35675:return Vc;case 35676:return kc;case 5124:case 35670:return zc;case 35667:case 35671:return Wc;case 35668:case 35672:return Xc;case 35669:case 35673:return Yc;case 5125:return Kc;case 36294:return qc;case 36295:return Zc;case 36296:return $c;case 35678:case 36198:case 36298:case 36306:case 35682:return jc;case 35679:case 36299:case 36307:return Qc;case 35680:case 36300:case 36308:case 36293:return Jc;case 36289:case 36303:case 36311:case 36292:return ef}}class nf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nc(t.type)}}class af{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tf(t.type)}}class rf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let o=0,p=r.length;o!==p;++o){const f=r[o];f.setValue(n,t[f.id],i)}}}const Bn=/(\w+)(\])?(\[|\.)?/g;function ta(e,n){e.seq.push(n),e.map[n.id]=n}function of(e,n,t){const i=e.name,r=i.length;for(Bn.lastIndex=0;;){const o=Bn.exec(i),p=Bn.lastIndex;let f=o[1];const b=o[2]==="]",v=o[3];if(b&&(f=f|0),v===void 0||v==="["&&p+2===r){ta(t,v===void 0?new nf(f,e,n):new af(f,e,n));break}else{let R=t.map[f];R===void 0&&(R=new rf(f),ta(t,R)),t=R}}}class gn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=n.getActiveUniform(t,r),p=n.getUniformLocation(t,o.name);of(o,p,this)}}setValue(n,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let o=0,p=t.length;o!==p;++o){const f=t[o],b=i[f.id];b.needsUpdate!==!1&&f.setValue(n,b.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,o=n.length;r!==o;++r){const p=n[r];p.id in t&&i.push(p)}return i}}function na(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const sf=37297;let lf=0;function cf(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let p=r;p<o;p++){const f=p+1;i.push(`${f===n?">":" "} ${f}: ${t[p]}`)}return i.join(`
`)}const ia=new He;function ff(e){it._getMatrix(ia,it.workingColorSpace,e);const n=`mat3( ${ia.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(e)){case wa:return[n,"LinearTransferOETF"];case Ke:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function aa(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=e.getShaderInfoLog(n).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const p=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cf(e.getShaderSource(n),p)}else return r}function df(e,n){const t=ff(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function uf(e,n){let t;switch(n){case lo:t="Linear";break;case so:t="Reinhard";break;case oo:t="Cineon";break;case ro:t="ACESFilmic";break;case ao:t="AgX";break;case io:t="Neutral";break;case no:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const un=new De;function pf(){it.getLuminanceCoefficients(un);const e=un.x.toFixed(4),n=un.y.toFixed(4),t=un.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jt).join(`
`)}function _f(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function mf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=e.getActiveAttrib(n,r),p=o.name;let f=1;o.type===e.FLOAT_MAT2&&(f=2),o.type===e.FLOAT_MAT3&&(f=3),o.type===e.FLOAT_MAT4&&(f=4),t[p]={type:o.type,location:e.getAttribLocation(n,p),locationSize:f}}return t}function Jt(e){return e!==""}function ra(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function oa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const gf=/^[ \t]*#include +<([\w\d./]+)>/gm;function $n(e){return e.replace(gf,Ef)}const vf=new Map;function Ef(e,n){let t=Pe[n];if(t===void 0){const i=vf.get(n);if(i!==void 0)t=Pe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return $n(t)}const Sf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sa(e){return e.replace(Sf,Mf)}function Mf(e,n,t,i){let r="";for(let o=parseInt(n);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function la(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Tf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===va?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===co?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===xt&&(n="SHADOWMAP_TYPE_VSM"),n}function xf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case rn:case qt:n="ENVMAP_TYPE_CUBE";break;case xn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Af(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case qt:n="ENVMAP_MODE_REFRACTION";break}return n}function Rf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case mo:n="ENVMAP_BLENDING_MULTIPLY";break;case _o:n="ENVMAP_BLENDING_MIX";break;case ho:n="ENVMAP_BLENDING_ADD";break}return n}function bf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Cf(e,n,t,i){const r=e.getContext(),o=t.defines;let p=t.vertexShader,f=t.fragmentShader;const b=Tf(t),v=xf(t),C=Af(t),R=Rf(t),E=bf(t),x=hf(t),N=_f(o),P=r.createProgram();let c,a,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Jt).join(`
`),c.length>0&&(c+=`
`),a=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N].filter(Jt).join(`
`),a.length>0&&(a+=`
`)):(c=[la(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+C:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jt).join(`
`),a=[la(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,N,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.envMap?"#define "+C:"",t.envMap?"#define "+R:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ct?"#define TONE_MAPPING":"",t.toneMapping!==Ct?Pe.tonemapping_pars_fragment:"",t.toneMapping!==Ct?uf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,df("linearToOutputTexel",t.outputColorSpace),pf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jt).join(`
`)),p=$n(p),p=ra(p,t),p=oa(p,t),f=$n(f),f=ra(f,t),f=oa(f,t),p=sa(p),f=sa(f),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,c=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,a=["#define varying in",t.glslVersion===Hi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+a);const T=y+c+p,m=y+a+f,G=na(r,r.VERTEX_SHADER,T),L=na(r,r.FRAGMENT_SHADER,m);r.attachShader(P,G),r.attachShader(P,L),t.index0AttributeName!==void 0?r.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(P,0,"position"),r.linkProgram(P);function I(A){if(e.debug.checkShaderErrors){const K=r.getProgramInfoLog(P).trim(),V=r.getShaderInfoLog(G).trim(),Y=r.getShaderInfoLog(L).trim();let j=!0,z=!0;if(r.getProgramParameter(P,r.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,P,G,L);else{const J=aa(r,G,"vertex"),F=aa(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(P,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+K+`
`+J+`
`+F)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(V===""||Y==="")&&(z=!1);z&&(A.diagnostics={runnable:j,programLog:K,vertexShader:{log:V,prefix:c},fragmentShader:{log:Y,prefix:a}})}r.deleteShader(G),r.deleteShader(L),B=new gn(r,P),h=mf(r,P)}let B;this.getUniforms=function(){return B===void 0&&I(this),B};let h;this.getAttributes=function(){return h===void 0&&I(this),h};let d=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=r.getProgramParameter(P,sf)),d},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lf++,this.cacheKey=n,this.usedTimes=1,this.program=P,this.vertexShader=G,this.fragmentShader=L,this}let Pf=0;class Df{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),p=this._getShaderCacheForMaterial(n);return p.has(r)===!1&&(p.add(r),r.usedTimes++),p.has(o)===!1&&(p.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Lf(n),t.set(n,i)),i}}class Lf{constructor(n){this.id=Pf++,this.code=n,this.usedTimes=0}}function Uf(e,n,t,i,r,o,p){const f=new Qr,b=new Df,v=new Set,C=[],R=r.logarithmicDepthBuffer,E=r.vertexTextures;let x=r.precision;const N={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(h){return v.add(h),h===0?"uv":`uv${h}`}function c(h,d,A,K,V){const Y=K.fog,j=V.geometry,z=h.isMeshStandardMaterial?K.environment:null,J=(h.isMeshStandardMaterial?t:n).get(h.envMap||z),F=J&&J.mapping===xn?J.image.height:null,he=N[h.type];h.precision!==null&&(x=r.getMaxPrecision(h.precision),x!==h.precision&&console.warn("THREE.WebGLProgram.getParameters:",h.precision,"not supported, using",x,"instead."));const Se=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Le=Se!==void 0?Se.length:0;let Ge=0;j.morphAttributes.position!==void 0&&(Ge=1),j.morphAttributes.normal!==void 0&&(Ge=2),j.morphAttributes.color!==void 0&&(Ge=3);let Qe,k,Q,ue;if(he){const ze=Mt[he];Qe=ze.vertexShader,k=ze.fragmentShader}else Qe=h.vertexShader,k=h.fragmentShader,b.update(h),Q=b.getVertexShaderID(h),ue=b.getFragmentShaderID(h);const ie=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),Re=V.isInstancedMesh===!0,Ue=V.isBatchedMesh===!0,je=!!h.map,Ne=!!h.matcap,tt=!!J,_=!!h.aoMap,_t=!!h.lightMap,we=!!h.bumpMap,ye=!!h.normalMap,_e=!!h.displacementMap,Ye=!!h.emissiveMap,me=!!h.metalnessMap,u=!!h.roughnessMap,s=h.anisotropy>0,D=h.clearcoat>0,W=h.dispersion>0,q=h.iridescence>0,H=h.sheen>0,pe=h.transmission>0,ae=s&&!!h.anisotropyMap,le=D&&!!h.clearcoatMap,Oe=D&&!!h.clearcoatNormalMap,$=D&&!!h.clearcoatRoughnessMap,ce=q&&!!h.iridescenceMap,Ee=q&&!!h.iridescenceThicknessMap,Te=H&&!!h.sheenColorMap,fe=H&&!!h.sheenRoughnessMap,Ie=!!h.specularMap,Ce=!!h.specularColorMap,Xe=!!h.specularIntensityMap,g=pe&&!!h.transmissionMap,te=pe&&!!h.thicknessMap,O=!!h.gradientMap,X=!!h.alphaMap,oe=h.alphaTest>0,re=!!h.alphaHash,be=!!h.extensions;let Je=Ct;h.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Je=e.toneMapping);const lt={shaderID:he,shaderType:h.type,shaderName:h.name,vertexShader:Qe,fragmentShader:k,defines:h.defines,customVertexShaderID:Q,customFragmentShaderID:ue,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:x,batching:Ue,batchingColor:Ue&&V._colorsTexture!==null,instancing:Re,instancingColor:Re&&V.instanceColor!==null,instancingMorph:Re&&V.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Tn,alphaToCoverage:!!h.alphaToCoverage,map:je,matcap:Ne,envMap:tt,envMapMode:tt&&J.mapping,envMapCubeUVHeight:F,aoMap:_,lightMap:_t,bumpMap:we,normalMap:ye,displacementMap:E&&_e,emissiveMap:Ye,normalMapObjectSpace:ye&&h.normalMapType===wr,normalMapTangentSpace:ye&&h.normalMapType===yr,metalnessMap:me,roughnessMap:u,anisotropy:s,anisotropyMap:ae,clearcoat:D,clearcoatMap:le,clearcoatNormalMap:Oe,clearcoatRoughnessMap:$,dispersion:W,iridescence:q,iridescenceMap:ce,iridescenceThicknessMap:Ee,sheen:H,sheenColorMap:Te,sheenRoughnessMap:fe,specularMap:Ie,specularColorMap:Ce,specularIntensityMap:Xe,transmission:pe,transmissionMap:g,thicknessMap:te,gradientMap:O,opaque:h.transparent===!1&&h.blending===mn&&h.alphaToCoverage===!1,alphaMap:X,alphaTest:oe,alphaHash:re,combine:h.combine,mapUv:je&&P(h.map.channel),aoMapUv:_&&P(h.aoMap.channel),lightMapUv:_t&&P(h.lightMap.channel),bumpMapUv:we&&P(h.bumpMap.channel),normalMapUv:ye&&P(h.normalMap.channel),displacementMapUv:_e&&P(h.displacementMap.channel),emissiveMapUv:Ye&&P(h.emissiveMap.channel),metalnessMapUv:me&&P(h.metalnessMap.channel),roughnessMapUv:u&&P(h.roughnessMap.channel),anisotropyMapUv:ae&&P(h.anisotropyMap.channel),clearcoatMapUv:le&&P(h.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&P(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&P(h.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&P(h.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&P(h.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&P(h.sheenColorMap.channel),sheenRoughnessMapUv:fe&&P(h.sheenRoughnessMap.channel),specularMapUv:Ie&&P(h.specularMap.channel),specularColorMapUv:Ce&&P(h.specularColorMap.channel),specularIntensityMapUv:Xe&&P(h.specularIntensityMap.channel),transmissionMapUv:g&&P(h.transmissionMap.channel),thicknessMapUv:te&&P(h.thicknessMap.channel),alphaMapUv:X&&P(h.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ye||s),vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(je||X),fog:!!Y,useFog:h.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:h.flatShading===!0,sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:R,reverseDepthBuffer:Me,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ge,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:p.numPlanes,numClipIntersection:p.numIntersection,dithering:h.dithering,shadowMapEnabled:e.shadowMap.enabled&&A.length>0,shadowMapType:e.shadowMap.type,toneMapping:Je,decodeVideoTexture:je&&h.map.isVideoTexture===!0&&it.getTransfer(h.map.colorSpace)===Ke,decodeVideoTextureEmissive:Ye&&h.emissiveMap.isVideoTexture===!0&&it.getTransfer(h.emissiveMap.colorSpace)===Ke,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===At,flipSided:h.side===vt,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:be&&h.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&h.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return lt.vertexUv1s=v.has(1),lt.vertexUv2s=v.has(2),lt.vertexUv3s=v.has(3),v.clear(),lt}function a(h){const d=[];if(h.shaderID?d.push(h.shaderID):(d.push(h.customVertexShaderID),d.push(h.customFragmentShaderID)),h.defines!==void 0)for(const A in h.defines)d.push(A),d.push(h.defines[A]);return h.isRawShaderMaterial===!1&&(y(d,h),T(d,h),d.push(e.outputColorSpace)),d.push(h.customProgramCacheKey),d.join()}function y(h,d){h.push(d.precision),h.push(d.outputColorSpace),h.push(d.envMapMode),h.push(d.envMapCubeUVHeight),h.push(d.mapUv),h.push(d.alphaMapUv),h.push(d.lightMapUv),h.push(d.aoMapUv),h.push(d.bumpMapUv),h.push(d.normalMapUv),h.push(d.displacementMapUv),h.push(d.emissiveMapUv),h.push(d.metalnessMapUv),h.push(d.roughnessMapUv),h.push(d.anisotropyMapUv),h.push(d.clearcoatMapUv),h.push(d.clearcoatNormalMapUv),h.push(d.clearcoatRoughnessMapUv),h.push(d.iridescenceMapUv),h.push(d.iridescenceThicknessMapUv),h.push(d.sheenColorMapUv),h.push(d.sheenRoughnessMapUv),h.push(d.specularMapUv),h.push(d.specularColorMapUv),h.push(d.specularIntensityMapUv),h.push(d.transmissionMapUv),h.push(d.thicknessMapUv),h.push(d.combine),h.push(d.fogExp2),h.push(d.sizeAttenuation),h.push(d.morphTargetsCount),h.push(d.morphAttributeCount),h.push(d.numDirLights),h.push(d.numPointLights),h.push(d.numSpotLights),h.push(d.numSpotLightMaps),h.push(d.numHemiLights),h.push(d.numRectAreaLights),h.push(d.numDirLightShadows),h.push(d.numPointLightShadows),h.push(d.numSpotLightShadows),h.push(d.numSpotLightShadowsWithMaps),h.push(d.numLightProbes),h.push(d.shadowMapType),h.push(d.toneMapping),h.push(d.numClippingPlanes),h.push(d.numClipIntersection),h.push(d.depthPacking)}function T(h,d){f.disableAll(),d.supportsVertexTextures&&f.enable(0),d.instancing&&f.enable(1),d.instancingColor&&f.enable(2),d.instancingMorph&&f.enable(3),d.matcap&&f.enable(4),d.envMap&&f.enable(5),d.normalMapObjectSpace&&f.enable(6),d.normalMapTangentSpace&&f.enable(7),d.clearcoat&&f.enable(8),d.iridescence&&f.enable(9),d.alphaTest&&f.enable(10),d.vertexColors&&f.enable(11),d.vertexAlphas&&f.enable(12),d.vertexUv1s&&f.enable(13),d.vertexUv2s&&f.enable(14),d.vertexUv3s&&f.enable(15),d.vertexTangents&&f.enable(16),d.anisotropy&&f.enable(17),d.alphaHash&&f.enable(18),d.batching&&f.enable(19),d.dispersion&&f.enable(20),d.batchingColor&&f.enable(21),h.push(f.mask),f.disableAll(),d.fog&&f.enable(0),d.useFog&&f.enable(1),d.flatShading&&f.enable(2),d.logarithmicDepthBuffer&&f.enable(3),d.reverseDepthBuffer&&f.enable(4),d.skinning&&f.enable(5),d.morphTargets&&f.enable(6),d.morphNormals&&f.enable(7),d.morphColors&&f.enable(8),d.premultipliedAlpha&&f.enable(9),d.shadowMapEnabled&&f.enable(10),d.doubleSided&&f.enable(11),d.flipSided&&f.enable(12),d.useDepthPacking&&f.enable(13),d.dithering&&f.enable(14),d.transmission&&f.enable(15),d.sheen&&f.enable(16),d.opaque&&f.enable(17),d.pointsUvs&&f.enable(18),d.decodeVideoTexture&&f.enable(19),d.decodeVideoTextureEmissive&&f.enable(20),d.alphaToCoverage&&f.enable(21),h.push(f.mask)}function m(h){const d=N[h.type];let A;if(d){const K=Mt[d];A=Ir.clone(K.uniforms)}else A=h.uniforms;return A}function G(h,d){let A;for(let K=0,V=C.length;K<V;K++){const Y=C[K];if(Y.cacheKey===d){A=Y,++A.usedTimes;break}}return A===void 0&&(A=new Cf(e,d,h,o),C.push(A)),A}function L(h){if(--h.usedTimes===0){const d=C.indexOf(h);C[d]=C[C.length-1],C.pop(),h.destroy()}}function I(h){b.remove(h)}function B(){b.dispose()}return{getParameters:c,getProgramCacheKey:a,getUniforms:m,acquireProgram:G,releaseProgram:L,releaseShaderCache:I,programs:C,dispose:B}}function wf(){let e=new WeakMap;function n(p){return e.has(p)}function t(p){let f=e.get(p);return f===void 0&&(f={},e.set(p,f)),f}function i(p){e.delete(p)}function r(p,f,b){e.get(p)[f]=b}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:o}}function yf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function ca(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function fa(){const e=[];let n=0;const t=[],i=[],r=[];function o(){n=0,t.length=0,i.length=0,r.length=0}function p(R,E,x,N,P,c){let a=e[n];return a===void 0?(a={id:R.id,object:R,geometry:E,material:x,groupOrder:N,renderOrder:R.renderOrder,z:P,group:c},e[n]=a):(a.id=R.id,a.object=R,a.geometry=E,a.material=x,a.groupOrder=N,a.renderOrder=R.renderOrder,a.z=P,a.group=c),n++,a}function f(R,E,x,N,P,c){const a=p(R,E,x,N,P,c);x.transmission>0?i.push(a):x.transparent===!0?r.push(a):t.push(a)}function b(R,E,x,N,P,c){const a=p(R,E,x,N,P,c);x.transmission>0?i.unshift(a):x.transparent===!0?r.unshift(a):t.unshift(a)}function v(R,E){t.length>1&&t.sort(R||yf),i.length>1&&i.sort(E||ca),r.length>1&&r.sort(E||ca)}function C(){for(let R=n,E=e.length;R<E;R++){const x=e[R];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:f,unshift:b,finish:C,sort:v}}function If(){let e=new WeakMap;function n(i,r){const o=e.get(i);let p;return o===void 0?(p=new fa,e.set(i,[p])):r>=o.length?(p=new fa,o.push(p)):p=o[r],p}function t(){e=new WeakMap}return{get:n,dispose:t}}function Nf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new De,color:new $e};break;case"SpotLight":t={position:new De,direction:new De,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new De,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new De,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new De,halfWidth:new De,halfHeight:new De};break}return e[n.id]=t,t}}}function Of(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Ff=0;function Bf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Hf(e){const n=new Nf,t=Of(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)i.probe.push(new De);const r=new De,o=new Kt,p=new Kt;function f(v){let C=0,R=0,E=0;for(let h=0;h<9;h++)i.probe[h].set(0,0,0);let x=0,N=0,P=0,c=0,a=0,y=0,T=0,m=0,G=0,L=0,I=0;v.sort(Bf);for(let h=0,d=v.length;h<d;h++){const A=v[h],K=A.color,V=A.intensity,Y=A.distance,j=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)C+=K.r*V,R+=K.g*V,E+=K.b*V;else if(A.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(A.sh.coefficients[z],V);I++}else if(A.isDirectionalLight){const z=n.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,F=t.get(A);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[x]=F,i.directionalShadowMap[x]=j,i.directionalShadowMatrix[x]=A.shadow.matrix,y++}i.directional[x]=z,x++}else if(A.isSpotLight){const z=n.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(K).multiplyScalar(V),z.distance=Y,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,i.spot[P]=z;const J=A.shadow;if(A.map&&(i.spotLightMap[G]=A.map,G++,J.updateMatrices(A),A.castShadow&&L++),i.spotLightMatrix[P]=J.matrix,A.castShadow){const F=t.get(A);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[P]=F,i.spotShadowMap[P]=j,m++}P++}else if(A.isRectAreaLight){const z=n.get(A);z.color.copy(K).multiplyScalar(V),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),i.rectArea[c]=z,c++}else if(A.isPointLight){const z=n.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){const J=A.shadow,F=t.get(A);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[N]=F,i.pointShadowMap[N]=j,i.pointShadowMatrix[N]=A.shadow.matrix,T++}i.point[N]=z,N++}else if(A.isHemisphereLight){const z=n.get(A);z.skyColor.copy(A.color).multiplyScalar(V),z.groundColor.copy(A.groundColor).multiplyScalar(V),i.hemi[a]=z,a++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=C,i.ambient[1]=R,i.ambient[2]=E;const B=i.hash;(B.directionalLength!==x||B.pointLength!==N||B.spotLength!==P||B.rectAreaLength!==c||B.hemiLength!==a||B.numDirectionalShadows!==y||B.numPointShadows!==T||B.numSpotShadows!==m||B.numSpotMaps!==G||B.numLightProbes!==I)&&(i.directional.length=x,i.spot.length=P,i.rectArea.length=c,i.point.length=N,i.hemi.length=a,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=m,i.spotShadowMap.length=m,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=m+G-L,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,B.directionalLength=x,B.pointLength=N,B.spotLength=P,B.rectAreaLength=c,B.hemiLength=a,B.numDirectionalShadows=y,B.numPointShadows=T,B.numSpotShadows=m,B.numSpotMaps=G,B.numLightProbes=I,i.version=Ff++)}function b(v,C){let R=0,E=0,x=0,N=0,P=0;const c=C.matrixWorldInverse;for(let a=0,y=v.length;a<y;a++){const T=v[a];if(T.isDirectionalLight){const m=i.directional[R];m.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),m.direction.sub(r),m.direction.transformDirection(c),R++}else if(T.isSpotLight){const m=i.spot[x];m.position.setFromMatrixPosition(T.matrixWorld),m.position.applyMatrix4(c),m.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),m.direction.sub(r),m.direction.transformDirection(c),x++}else if(T.isRectAreaLight){const m=i.rectArea[N];m.position.setFromMatrixPosition(T.matrixWorld),m.position.applyMatrix4(c),p.identity(),o.copy(T.matrixWorld),o.premultiply(c),p.extractRotation(o),m.halfWidth.set(T.width*.5,0,0),m.halfHeight.set(0,T.height*.5,0),m.halfWidth.applyMatrix4(p),m.halfHeight.applyMatrix4(p),N++}else if(T.isPointLight){const m=i.point[E];m.position.setFromMatrixPosition(T.matrixWorld),m.position.applyMatrix4(c),E++}else if(T.isHemisphereLight){const m=i.hemi[P];m.direction.setFromMatrixPosition(T.matrixWorld),m.direction.transformDirection(c),P++}}}return{setup:f,setupView:b,state:i}}function da(e){const n=new Hf(e),t=[],i=[];function r(C){v.camera=C,t.length=0,i.length=0}function o(C){t.push(C)}function p(C){i.push(C)}function f(){n.setup(t)}function b(C){n.setupView(t,C)}const v={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:v,setupLights:f,setupLightsView:b,pushLight:o,pushShadow:p}}function Gf(e){let n=new WeakMap;function t(r,o=0){const p=n.get(r);let f;return p===void 0?(f=new da(e),n.set(r,[f])):o>=p.length?(f=new da(e),p.push(f)):f=p[o],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const Vf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kf=`uniform sampler2D shadow_pass;
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
}`;function zf(e,n,t){let i=new ha;const r=new qe,o=new qe,p=new pt,f=new er({depthPacking:tr}),b=new nr,v={},C=t.maxTextureSize,R={[tn]:vt,[vt]:tn,[At]:At},E=new Ft({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Vf,fragmentShader:kf}),x=E.clone();x.defines.HORIZONTAL_PASS=1;const N=new ga;N.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new bt(N,E),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=va;let a=this.type;this.render=function(L,I,B){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||L.length===0)return;const h=e.getRenderTarget(),d=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),K=e.state;K.setBlending(Nt),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const V=a!==xt&&this.type===xt,Y=a===xt&&this.type!==xt;for(let j=0,z=L.length;j<z;j++){const J=L[j],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const he=F.getFrameExtents();if(r.multiply(he),o.copy(F.mapSize),(r.x>C||r.y>C)&&(r.x>C&&(o.x=Math.floor(C/he.x),r.x=o.x*he.x,F.mapSize.x=o.x),r.y>C&&(o.y=Math.floor(C/he.y),r.y=o.y*he.y,F.mapSize.y=o.y)),F.map===null||V===!0||Y===!0){const Le=this.type!==xt?{minFilter:en,magFilter:en}:{};F.map!==null&&F.map.dispose(),F.map=new Yt(r.x,r.y,Le),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}e.setRenderTarget(F.map),e.clear();const Se=F.getViewportCount();for(let Le=0;Le<Se;Le++){const Ge=F.getViewport(Le);p.set(o.x*Ge.x,o.y*Ge.y,o.x*Ge.z,o.y*Ge.w),K.viewport(p),F.updateMatrices(J,Le),i=F.getFrustum(),m(I,B,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===xt&&y(F,B),F.needsUpdate=!1}a=this.type,c.needsUpdate=!1,e.setRenderTarget(h,d,A)};function y(L,I){const B=n.update(P);E.defines.VSM_SAMPLES!==L.blurSamples&&(E.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,E.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Yt(r.x,r.y)),E.uniforms.shadow_pass.value=L.map.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,e.setRenderTarget(L.mapPass),e.clear(),e.renderBufferDirect(I,null,B,E,P,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,e.setRenderTarget(L.map),e.clear(),e.renderBufferDirect(I,null,B,x,P,null)}function T(L,I,B,h){let d=null;const A=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)d=A;else if(d=B.isPointLight===!0?b:f,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const K=d.uuid,V=I.uuid;let Y=v[K];Y===void 0&&(Y={},v[K]=Y);let j=Y[V];j===void 0&&(j=d.clone(),Y[V]=j,I.addEventListener("dispose",G)),d=j}if(d.visible=I.visible,d.wireframe=I.wireframe,h===xt?d.side=I.shadowSide!==null?I.shadowSide:I.side:d.side=I.shadowSide!==null?I.shadowSide:R[I.side],d.alphaMap=I.alphaMap,d.alphaTest=I.alphaTest,d.map=I.map,d.clipShadows=I.clipShadows,d.clippingPlanes=I.clippingPlanes,d.clipIntersection=I.clipIntersection,d.displacementMap=I.displacementMap,d.displacementScale=I.displacementScale,d.displacementBias=I.displacementBias,d.wireframeLinewidth=I.wireframeLinewidth,d.linewidth=I.linewidth,B.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const K=e.properties.get(d);K.light=B}return d}function m(L,I,B,h,d){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&d===xt)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const V=n.update(L),Y=L.material;if(Array.isArray(Y)){const j=V.groups;for(let z=0,J=j.length;z<J;z++){const F=j[z],he=Y[F.materialIndex];if(he&&he.visible){const Se=T(L,he,h,d);L.onBeforeShadow(e,L,I,B,V,Se,F),e.renderBufferDirect(B,null,V,Se,L,F),L.onAfterShadow(e,L,I,B,V,Se,F)}}}else if(Y.visible){const j=T(L,Y,h,d);L.onBeforeShadow(e,L,I,B,V,j,null),e.renderBufferDirect(B,null,V,j,L,null),L.onAfterShadow(e,L,I,B,V,j,null)}}const K=L.children;for(let V=0,Y=K.length;V<Y;V++)m(K[V],I,B,h,d)}function G(L){L.target.removeEventListener("dispose",G);for(const B in v){const h=v[B],d=L.target.uuid;d in h&&(h[d].dispose(),delete h[d])}}}const Wf={[Zn]:qn,[Kn]:Wn,[Yn]:zn,[En]:Xn,[qn]:Zn,[Wn]:Kn,[zn]:Yn,[Xn]:En};function Xf(e,n){function t(){let g=!1;const te=new pt;let O=null;const X=new pt(0,0,0,0);return{setMask:function(oe){O!==oe&&!g&&(e.colorMask(oe,oe,oe,oe),O=oe)},setLocked:function(oe){g=oe},setClear:function(oe,re,be,Je,lt){lt===!0&&(oe*=Je,re*=Je,be*=Je),te.set(oe,re,be,Je),X.equals(te)===!1&&(e.clearColor(oe,re,be,Je),X.copy(te))},reset:function(){g=!1,O=null,X.set(-1,0,0,0)}}}function i(){let g=!1,te=!1,O=null,X=null,oe=null;return{setReversed:function(re){if(te!==re){const be=n.get("EXT_clip_control");te?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT);const Je=oe;oe=null,this.setClear(Je)}te=re},getReversed:function(){return te},setTest:function(re){re?ie(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(re){O!==re&&!g&&(e.depthMask(re),O=re)},setFunc:function(re){if(te&&(re=Wf[re]),X!==re){switch(re){case Zn:e.depthFunc(e.NEVER);break;case qn:e.depthFunc(e.ALWAYS);break;case Kn:e.depthFunc(e.LESS);break;case En:e.depthFunc(e.LEQUAL);break;case Yn:e.depthFunc(e.EQUAL);break;case Xn:e.depthFunc(e.GEQUAL);break;case Wn:e.depthFunc(e.GREATER);break;case zn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}X=re}},setLocked:function(re){g=re},setClear:function(re){oe!==re&&(te&&(re=1-re),e.clearDepth(re),oe=re)},reset:function(){g=!1,O=null,X=null,oe=null,te=!1}}}function r(){let g=!1,te=null,O=null,X=null,oe=null,re=null,be=null,Je=null,lt=null;return{setTest:function(ze){g||(ze?ie(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(ze){te!==ze&&!g&&(e.stencilMask(ze),te=ze)},setFunc:function(ze,Et,Tt){(O!==ze||X!==Et||oe!==Tt)&&(e.stencilFunc(ze,Et,Tt),O=ze,X=Et,oe=Tt)},setOp:function(ze,Et,Tt){(re!==ze||be!==Et||Je!==Tt)&&(e.stencilOp(ze,Et,Tt),re=ze,be=Et,Je=Tt)},setLocked:function(ze){g=ze},setClear:function(ze){lt!==ze&&(e.clearStencil(ze),lt=ze)},reset:function(){g=!1,te=null,O=null,X=null,oe=null,re=null,be=null,Je=null,lt=null}}}const o=new t,p=new i,f=new r,b=new WeakMap,v=new WeakMap;let C={},R={},E=new WeakMap,x=[],N=null,P=!1,c=null,a=null,y=null,T=null,m=null,G=null,L=null,I=new $e(0,0,0),B=0,h=!1,d=null,A=null,K=null,V=null,Y=null;const j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=J>=2);let he=null,Se={};const Le=e.getParameter(e.SCISSOR_BOX),Ge=e.getParameter(e.VIEWPORT),Qe=new pt().fromArray(Le),k=new pt().fromArray(Ge);function Q(g,te,O,X){const oe=new Uint8Array(4),re=e.createTexture();e.bindTexture(g,re),e.texParameteri(g,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(g,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let be=0;be<O;be++)g===e.TEXTURE_3D||g===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,X,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(te+be,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return re}const ue={};ue[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),p.setClear(1),f.setClear(0),ie(e.DEPTH_TEST),p.setFunc(En),we(!1),ye(di),ie(e.CULL_FACE),_(Nt);function ie(g){C[g]!==!0&&(e.enable(g),C[g]=!0)}function Me(g){C[g]!==!1&&(e.disable(g),C[g]=!1)}function Re(g,te){return R[g]!==te?(e.bindFramebuffer(g,te),R[g]=te,g===e.DRAW_FRAMEBUFFER&&(R[e.FRAMEBUFFER]=te),g===e.FRAMEBUFFER&&(R[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Ue(g,te){let O=x,X=!1;if(g){O=E.get(te),O===void 0&&(O=[],E.set(te,O));const oe=g.textures;if(O.length!==oe.length||O[0]!==e.COLOR_ATTACHMENT0){for(let re=0,be=oe.length;re<be;re++)O[re]=e.COLOR_ATTACHMENT0+re;O.length=oe.length,X=!0}}else O[0]!==e.BACK&&(O[0]=e.BACK,X=!0);X&&e.drawBuffers(O)}function je(g){return N!==g?(e.useProgram(g),N=g,!0):!1}const Ne={[jt]:e.FUNC_ADD,[ir]:e.FUNC_SUBTRACT,[ar]:e.FUNC_REVERSE_SUBTRACT};Ne[Jr]=e.MIN,Ne[eo]=e.MAX;const tt={[rr]:e.ZERO,[or]:e.ONE,[sr]:e.SRC_COLOR,[lr]:e.SRC_ALPHA,[cr]:e.SRC_ALPHA_SATURATE,[fr]:e.DST_COLOR,[dr]:e.DST_ALPHA,[ur]:e.ONE_MINUS_SRC_COLOR,[pr]:e.ONE_MINUS_SRC_ALPHA,[hr]:e.ONE_MINUS_DST_COLOR,[_r]:e.ONE_MINUS_DST_ALPHA,[mr]:e.CONSTANT_COLOR,[gr]:e.ONE_MINUS_CONSTANT_COLOR,[vr]:e.CONSTANT_ALPHA,[Er]:e.ONE_MINUS_CONSTANT_ALPHA};function _(g,te,O,X,oe,re,be,Je,lt,ze){if(g===Nt){P===!0&&(Me(e.BLEND),P=!1);return}if(P===!1&&(ie(e.BLEND),P=!0),g!==Nr){if(g!==c||ze!==h){if((a!==jt||m!==jt)&&(e.blendEquation(e.FUNC_ADD),a=jt,m=jt),ze)switch(g){case mn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fi:e.blendFunc(e.ONE,e.ONE);break;case ci:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case li:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case mn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case fi:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case ci:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case li:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}y=null,T=null,G=null,L=null,I.set(0,0,0),B=0,c=g,h=ze}return}oe=oe||te,re=re||O,be=be||X,(te!==a||oe!==m)&&(e.blendEquationSeparate(Ne[te],Ne[oe]),a=te,m=oe),(O!==y||X!==T||re!==G||be!==L)&&(e.blendFuncSeparate(tt[O],tt[X],tt[re],tt[be]),y=O,T=X,G=re,L=be),(Je.equals(I)===!1||lt!==B)&&(e.blendColor(Je.r,Je.g,Je.b,lt),I.copy(Je),B=lt),c=g,h=!1}function _t(g,te){g.side===At?Me(e.CULL_FACE):ie(e.CULL_FACE);let O=g.side===vt;te&&(O=!O),we(O),g.blending===mn&&g.transparent===!1?_(Nt):_(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),p.setFunc(g.depthFunc),p.setTest(g.depthTest),p.setMask(g.depthWrite),o.setMask(g.colorWrite);const X=g.stencilWrite;f.setTest(X),X&&(f.setMask(g.stencilWriteMask),f.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),f.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),Ye(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function we(g){d!==g&&(g?e.frontFace(e.CW):e.frontFace(e.CCW),d=g)}function ye(g){g!==Or?(ie(e.CULL_FACE),g!==A&&(g===di?e.cullFace(e.BACK):g===Fr?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),A=g}function _e(g){g!==K&&(z&&e.lineWidth(g),K=g)}function Ye(g,te,O){g?(ie(e.POLYGON_OFFSET_FILL),(V!==te||Y!==O)&&(e.polygonOffset(te,O),V=te,Y=O)):Me(e.POLYGON_OFFSET_FILL)}function me(g){g?ie(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function u(g){g===void 0&&(g=e.TEXTURE0+j-1),he!==g&&(e.activeTexture(g),he=g)}function s(g,te,O){O===void 0&&(he===null?O=e.TEXTURE0+j-1:O=he);let X=Se[O];X===void 0&&(X={type:void 0,texture:void 0},Se[O]=X),(X.type!==g||X.texture!==te)&&(he!==O&&(e.activeTexture(O),he=O),e.bindTexture(g,te||ue[g]),X.type=g,X.texture=te)}function D(){const g=Se[he];g!==void 0&&g.type!==void 0&&(e.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function W(){try{e.compressedTexImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function q(){try{e.compressedTexImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function H(){try{e.texSubImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function pe(){try{e.texSubImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ae(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function le(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Oe(){try{e.texStorage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function $(){try{e.texStorage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function ce(){try{e.texImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ee(){try{e.texImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Te(g){Qe.equals(g)===!1&&(e.scissor(g.x,g.y,g.z,g.w),Qe.copy(g))}function fe(g){k.equals(g)===!1&&(e.viewport(g.x,g.y,g.z,g.w),k.copy(g))}function Ie(g,te){let O=v.get(te);O===void 0&&(O=new WeakMap,v.set(te,O));let X=O.get(g);X===void 0&&(X=e.getUniformBlockIndex(te,g.name),O.set(g,X))}function Ce(g,te){const X=v.get(te).get(g);b.get(te)!==X&&(e.uniformBlockBinding(te,X,g.__bindingPointIndex),b.set(te,X))}function Xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),p.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),C={},he=null,Se={},R={},E=new WeakMap,x=[],N=null,P=!1,c=null,a=null,y=null,T=null,m=null,G=null,L=null,I=new $e(0,0,0),B=0,h=!1,d=null,A=null,K=null,V=null,Y=null,Qe.set(0,0,e.canvas.width,e.canvas.height),k.set(0,0,e.canvas.width,e.canvas.height),o.reset(),p.reset(),f.reset()}return{buffers:{color:o,depth:p,stencil:f},enable:ie,disable:Me,bindFramebuffer:Re,drawBuffers:Ue,useProgram:je,setBlending:_,setMaterial:_t,setFlipSided:we,setCullFace:ye,setLineWidth:_e,setPolygonOffset:Ye,setScissorTest:me,activeTexture:u,bindTexture:s,unbindTexture:D,compressedTexImage2D:W,compressedTexImage3D:q,texImage2D:ce,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:Ce,texStorage2D:Oe,texStorage3D:$,texSubImage2D:H,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:le,scissor:Te,viewport:fe,reset:Xe}}function Yf(e,n,t,i,r,o,p){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,b=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new qe,C=new WeakMap;let R;const E=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(u,s){return x?new OffscreenCanvas(u,s):fo("canvas")}function P(u,s,D){let W=1;const q=me(u);if((q.width>D||q.height>D)&&(W=D/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const H=Math.floor(W*q.width),pe=Math.floor(W*q.height);R===void 0&&(R=N(H,pe));const ae=s?N(H,pe):R;return ae.width=H,ae.height=pe,ae.getContext("2d").drawImage(u,0,0,H,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+H+"x"+pe+")."),ae}else return"data"in u&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),u;return u}function c(u){return u.generateMipmaps}function a(u){e.generateMipmap(u)}function y(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(u,s,D,W,q=!1){if(u!==null){if(e[u]!==void 0)return e[u];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let H=s;if(s===e.RED&&(D===e.FLOAT&&(H=e.R32F),D===e.HALF_FLOAT&&(H=e.R16F),D===e.UNSIGNED_BYTE&&(H=e.R8)),s===e.RED_INTEGER&&(D===e.UNSIGNED_BYTE&&(H=e.R8UI),D===e.UNSIGNED_SHORT&&(H=e.R16UI),D===e.UNSIGNED_INT&&(H=e.R32UI),D===e.BYTE&&(H=e.R8I),D===e.SHORT&&(H=e.R16I),D===e.INT&&(H=e.R32I)),s===e.RG&&(D===e.FLOAT&&(H=e.RG32F),D===e.HALF_FLOAT&&(H=e.RG16F),D===e.UNSIGNED_BYTE&&(H=e.RG8)),s===e.RG_INTEGER&&(D===e.UNSIGNED_BYTE&&(H=e.RG8UI),D===e.UNSIGNED_SHORT&&(H=e.RG16UI),D===e.UNSIGNED_INT&&(H=e.RG32UI),D===e.BYTE&&(H=e.RG8I),D===e.SHORT&&(H=e.RG16I),D===e.INT&&(H=e.RG32I)),s===e.RGB_INTEGER&&(D===e.UNSIGNED_BYTE&&(H=e.RGB8UI),D===e.UNSIGNED_SHORT&&(H=e.RGB16UI),D===e.UNSIGNED_INT&&(H=e.RGB32UI),D===e.BYTE&&(H=e.RGB8I),D===e.SHORT&&(H=e.RGB16I),D===e.INT&&(H=e.RGB32I)),s===e.RGBA_INTEGER&&(D===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),D===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),D===e.UNSIGNED_INT&&(H=e.RGBA32UI),D===e.BYTE&&(H=e.RGBA8I),D===e.SHORT&&(H=e.RGBA16I),D===e.INT&&(H=e.RGBA32I)),s===e.RGB&&D===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),s===e.RGBA){const pe=q?wa:it.getTransfer(W);D===e.FLOAT&&(H=e.RGBA32F),D===e.HALF_FLOAT&&(H=e.RGBA16F),D===e.UNSIGNED_BYTE&&(H=pe===Ke?e.SRGB8_ALPHA8:e.RGBA8),D===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),D===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&n.get("EXT_color_buffer_float"),H}function m(u,s){let D;return u?s===null||s===an||s===nn?D=e.DEPTH24_STENCIL8:s===It?D=e.DEPTH32F_STENCIL8:s===Sn&&(D=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===an||s===nn?D=e.DEPTH_COMPONENT24:s===It?D=e.DEPTH_COMPONENT32F:s===Sn&&(D=e.DEPTH_COMPONENT16),D}function G(u,s){return c(u)===!0||u.isFramebufferTexture&&u.minFilter!==en&&u.minFilter!==kt?Math.log2(Math.max(s.width,s.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?s.mipmaps.length:1}function L(u){const s=u.target;s.removeEventListener("dispose",L),B(s),s.isVideoTexture&&C.delete(s)}function I(u){const s=u.target;s.removeEventListener("dispose",I),d(s)}function B(u){const s=i.get(u);if(s.__webglInit===void 0)return;const D=u.source,W=E.get(D);if(W){const q=W[s.__cacheKey];q.usedTimes--,q.usedTimes===0&&h(u),Object.keys(W).length===0&&E.delete(D)}i.remove(u)}function h(u){const s=i.get(u);e.deleteTexture(s.__webglTexture);const D=u.source,W=E.get(D);delete W[s.__cacheKey],p.memory.textures--}function d(u){const s=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(s.__webglFramebuffer[W]))for(let q=0;q<s.__webglFramebuffer[W].length;q++)e.deleteFramebuffer(s.__webglFramebuffer[W][q]);else e.deleteFramebuffer(s.__webglFramebuffer[W]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[W])}else{if(Array.isArray(s.__webglFramebuffer))for(let W=0;W<s.__webglFramebuffer.length;W++)e.deleteFramebuffer(s.__webglFramebuffer[W]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let W=0;W<s.__webglColorRenderbuffer.length;W++)s.__webglColorRenderbuffer[W]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[W]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const D=u.textures;for(let W=0,q=D.length;W<q;W++){const H=i.get(D[W]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),p.memory.textures--),i.remove(D[W])}i.remove(u)}let A=0;function K(){A=0}function V(){const u=A;return u>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+r.maxTextures),A+=1,u}function Y(u){const s=[];return s.push(u.wrapS),s.push(u.wrapT),s.push(u.wrapR||0),s.push(u.magFilter),s.push(u.minFilter),s.push(u.anisotropy),s.push(u.internalFormat),s.push(u.format),s.push(u.type),s.push(u.generateMipmaps),s.push(u.premultiplyAlpha),s.push(u.flipY),s.push(u.unpackAlignment),s.push(u.colorSpace),s.join()}function j(u,s){const D=i.get(u);if(u.isVideoTexture&&_e(u),u.isRenderTargetTexture===!1&&u.version>0&&D.__version!==u.version){const W=u.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(D,u,s);return}}t.bindTexture(e.TEXTURE_2D,D.__webglTexture,e.TEXTURE0+s)}function z(u,s){const D=i.get(u);if(u.version>0&&D.__version!==u.version){k(D,u,s);return}t.bindTexture(e.TEXTURE_2D_ARRAY,D.__webglTexture,e.TEXTURE0+s)}function J(u,s){const D=i.get(u);if(u.version>0&&D.__version!==u.version){k(D,u,s);return}t.bindTexture(e.TEXTURE_3D,D.__webglTexture,e.TEXTURE0+s)}function F(u,s){const D=i.get(u);if(u.version>0&&D.__version!==u.version){Q(D,u,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+s)}const he={[Sr]:e.REPEAT,[Mr]:e.CLAMP_TO_EDGE,[Tr]:e.MIRRORED_REPEAT},Se={[en]:e.NEAREST,[xr]:e.NEAREST_MIPMAP_NEAREST,[ln]:e.NEAREST_MIPMAP_LINEAR,[kt]:e.LINEAR,[Cn]:e.LINEAR_MIPMAP_NEAREST,[Qt]:e.LINEAR_MIPMAP_LINEAR},Le={[Ar]:e.NEVER,[Rr]:e.ALWAYS,[br]:e.LESS,[Ea]:e.LEQUAL,[Cr]:e.EQUAL,[Pr]:e.GEQUAL,[Dr]:e.GREATER,[Lr]:e.NOTEQUAL};function Ge(u,s){if(s.type===It&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===kt||s.magFilter===Cn||s.magFilter===ln||s.magFilter===Qt||s.minFilter===kt||s.minFilter===Cn||s.minFilter===ln||s.minFilter===Qt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,he[s.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,he[s.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,he[s.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Se[s.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Se[s.minFilter]),s.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,Le[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===en||s.minFilter!==ln&&s.minFilter!==Qt||s.type===It&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const D=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function Qe(u,s){let D=!1;u.__webglInit===void 0&&(u.__webglInit=!0,s.addEventListener("dispose",L));const W=s.source;let q=E.get(W);q===void 0&&(q={},E.set(W,q));const H=Y(s);if(H!==u.__cacheKey){q[H]===void 0&&(q[H]={texture:e.createTexture(),usedTimes:0},p.memory.textures++,D=!0),q[H].usedTimes++;const pe=q[u.__cacheKey];pe!==void 0&&(q[u.__cacheKey].usedTimes--,pe.usedTimes===0&&h(s)),u.__cacheKey=H,u.__webglTexture=q[H].texture}return D}function k(u,s,D){let W=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(W=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(W=e.TEXTURE_3D);const q=Qe(u,s),H=s.source;t.bindTexture(W,u.__webglTexture,e.TEXTURE0+D);const pe=i.get(H);if(H.version!==pe.__version||q===!0){t.activeTexture(e.TEXTURE0+D);const ae=it.getPrimaries(it.workingColorSpace),le=s.colorSpace===Vt?null:it.getPrimaries(s.colorSpace),Oe=s.colorSpace===Vt||ae===le?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let $=P(s.image,!1,r.maxTextureSize);$=Ye(s,$);const ce=o.convert(s.format,s.colorSpace),Ee=o.convert(s.type);let Te=T(s.internalFormat,ce,Ee,s.colorSpace,s.isVideoTexture);Ge(W,s);let fe;const Ie=s.mipmaps,Ce=s.isVideoTexture!==!0,Xe=pe.__version===void 0||q===!0,g=H.dataReady,te=G(s,$);if(s.isDepthTexture)Te=m(s.format===vn,s.type),Xe&&(Ce?t.texStorage2D(e.TEXTURE_2D,1,Te,$.width,$.height):t.texImage2D(e.TEXTURE_2D,0,Te,$.width,$.height,0,ce,Ee,null));else if(s.isDataTexture)if(Ie.length>0){Ce&&Xe&&t.texStorage2D(e.TEXTURE_2D,te,Te,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],Ce?g&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,ce,Ee,fe.data):t.texImage2D(e.TEXTURE_2D,O,Te,fe.width,fe.height,0,ce,Ee,fe.data);s.generateMipmaps=!1}else Ce?(Xe&&t.texStorage2D(e.TEXTURE_2D,te,Te,$.width,$.height),g&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,$.width,$.height,ce,Ee,$.data)):t.texImage2D(e.TEXTURE_2D,0,Te,$.width,$.height,0,ce,Ee,$.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){Ce&&Xe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Te,Ie[0].width,Ie[0].height,$.depth);for(let O=0,X=Ie.length;O<X;O++)if(fe=Ie[O],s.format!==Rt)if(ce!==null)if(Ce){if(g)if(s.layerUpdates.size>0){const oe=ui(fe.width,fe.height,s.format,s.type);for(const re of s.layerUpdates){const be=fe.data.subarray(re*oe/fe.data.BYTES_PER_ELEMENT,(re+1)*oe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,re,fe.width,fe.height,1,ce,be)}s.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,$.depth,ce,fe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,O,Te,fe.width,fe.height,$.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?g&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,O,0,0,0,fe.width,fe.height,$.depth,ce,Ee,fe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,O,Te,fe.width,fe.height,$.depth,0,ce,Ee,fe.data)}else{Ce&&Xe&&t.texStorage2D(e.TEXTURE_2D,te,Te,Ie[0].width,Ie[0].height);for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],s.format!==Rt?ce!==null?Ce?g&&t.compressedTexSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(e.TEXTURE_2D,O,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?g&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,fe.width,fe.height,ce,Ee,fe.data):t.texImage2D(e.TEXTURE_2D,O,Te,fe.width,fe.height,0,ce,Ee,fe.data)}else if(s.isDataArrayTexture)if(Ce){if(Xe&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,Te,$.width,$.height,$.depth),g)if(s.layerUpdates.size>0){const O=ui($.width,$.height,s.format,s.type);for(const X of s.layerUpdates){const oe=$.data.subarray(X*O/$.data.BYTES_PER_ELEMENT,(X+1)*O/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,X,$.width,$.height,1,ce,Ee,oe)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ce,Ee,$.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Te,$.width,$.height,$.depth,0,ce,Ee,$.data);else if(s.isData3DTexture)Ce?(Xe&&t.texStorage3D(e.TEXTURE_3D,te,Te,$.width,$.height,$.depth),g&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ce,Ee,$.data)):t.texImage3D(e.TEXTURE_3D,0,Te,$.width,$.height,$.depth,0,ce,Ee,$.data);else if(s.isFramebufferTexture){if(Xe)if(Ce)t.texStorage2D(e.TEXTURE_2D,te,Te,$.width,$.height);else{let O=$.width,X=$.height;for(let oe=0;oe<te;oe++)t.texImage2D(e.TEXTURE_2D,oe,Te,O,X,0,ce,Ee,null),O>>=1,X>>=1}}else if(Ie.length>0){if(Ce&&Xe){const O=me(Ie[0]);t.texStorage2D(e.TEXTURE_2D,te,Te,O.width,O.height)}for(let O=0,X=Ie.length;O<X;O++)fe=Ie[O],Ce?g&&t.texSubImage2D(e.TEXTURE_2D,O,0,0,ce,Ee,fe):t.texImage2D(e.TEXTURE_2D,O,Te,ce,Ee,fe);s.generateMipmaps=!1}else if(Ce){if(Xe){const O=me($);t.texStorage2D(e.TEXTURE_2D,te,Te,O.width,O.height)}g&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,Ee,$)}else t.texImage2D(e.TEXTURE_2D,0,Te,ce,Ee,$);c(s)&&a(W),pe.__version=H.version,s.onUpdate&&s.onUpdate(s)}u.__version=s.version}function Q(u,s,D){if(s.image.length!==6)return;const W=Qe(u,s),q=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+D);const H=i.get(q);if(q.version!==H.__version||W===!0){t.activeTexture(e.TEXTURE0+D);const pe=it.getPrimaries(it.workingColorSpace),ae=s.colorSpace===Vt?null:it.getPrimaries(s.colorSpace),le=s.colorSpace===Vt||pe===ae?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Oe=s.isCompressedTexture||s.image[0].isCompressedTexture,$=s.image[0]&&s.image[0].isDataTexture,ce=[];for(let X=0;X<6;X++)!Oe&&!$?ce[X]=P(s.image[X],!0,r.maxCubemapSize):ce[X]=$?s.image[X].image:s.image[X],ce[X]=Ye(s,ce[X]);const Ee=ce[0],Te=o.convert(s.format,s.colorSpace),fe=o.convert(s.type),Ie=T(s.internalFormat,Te,fe,s.colorSpace),Ce=s.isVideoTexture!==!0,Xe=H.__version===void 0||W===!0,g=q.dataReady;let te=G(s,Ee);Ge(e.TEXTURE_CUBE_MAP,s);let O;if(Oe){Ce&&Xe&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,Ee.width,Ee.height);for(let X=0;X<6;X++){O=ce[X].mipmaps;for(let oe=0;oe<O.length;oe++){const re=O[oe];s.format!==Rt?Te!==null?Ce?g&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,re.width,re.height,Te,re.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,0,0,re.width,re.height,Te,fe,re.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe,Ie,re.width,re.height,0,Te,fe,re.data)}}}else{if(O=s.mipmaps,Ce&&Xe){O.length>0&&te++;const X=me(ce[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ie,X.width,X.height)}for(let X=0;X<6;X++)if($){Ce?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ce[X].width,ce[X].height,Te,fe,ce[X].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,ce[X].width,ce[X].height,0,Te,fe,ce[X].data);for(let oe=0;oe<O.length;oe++){const be=O[oe].image[X].image;Ce?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,be.width,be.height,Te,fe,be.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,be.width,be.height,0,Te,fe,be.data)}}else{Ce?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Te,fe,ce[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ie,Te,fe,ce[X]);for(let oe=0;oe<O.length;oe++){const re=O[oe];Ce?g&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,0,0,Te,fe,re.image[X]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,oe+1,Ie,Te,fe,re.image[X])}}}c(s)&&a(e.TEXTURE_CUBE_MAP),H.__version=q.version,s.onUpdate&&s.onUpdate(s)}u.__version=s.version}function ue(u,s,D,W,q,H){const pe=o.convert(D.format,D.colorSpace),ae=o.convert(D.type),le=T(D.internalFormat,pe,ae,D.colorSpace),Oe=i.get(s),$=i.get(D);if($.__renderTarget=s,!Oe.__hasExternalTextures){const ce=Math.max(1,s.width>>H),Ee=Math.max(1,s.height>>H);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?t.texImage3D(q,H,le,ce,Ee,s.depth,0,pe,ae,null):t.texImage2D(q,H,le,ce,Ee,0,pe,ae,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),ye(s)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,W,q,$.__webglTexture,0,we(s)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,W,q,$.__webglTexture,H),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(u,s,D){if(e.bindRenderbuffer(e.RENDERBUFFER,u),s.depthBuffer){const W=s.depthTexture,q=W&&W.isDepthTexture?W.type:null,H=m(s.stencilBuffer,q),pe=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ae=we(s);ye(s)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ae,H,s.width,s.height):D?e.renderbufferStorageMultisample(e.RENDERBUFFER,ae,H,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,H,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pe,e.RENDERBUFFER,u)}else{const W=s.textures;for(let q=0;q<W.length;q++){const H=W[q],pe=o.convert(H.format,H.colorSpace),ae=o.convert(H.type),le=T(H.internalFormat,pe,ae,H.colorSpace),Oe=we(s);D&&ye(s)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe,le,s.width,s.height):ye(s)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe,le,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,le,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Me(u,s){if(s&&s.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(s.depthTexture);W.__renderTarget=s,(!W.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),j(s.depthTexture,0);const q=W.__webglTexture,H=we(s);if(s.depthTexture.format===jn)ye(s)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,q,0);else if(s.depthTexture.format===vn)ye(s)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Re(u){const s=i.get(u),D=u.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==u.depthTexture){const W=u.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),W){const q=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),s.__depthDisposeCallback=q}s.__boundDepthTexture=W}if(u.depthTexture&&!s.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Me(s.__webglFramebuffer,u)}else if(D){s.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[W]),s.__webglDepthbuffer[W]===void 0)s.__webglDepthbuffer[W]=e.createRenderbuffer(),ie(s.__webglDepthbuffer[W],u,!1);else{const q=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=s.__webglDepthbuffer[W];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,H)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),ie(s.__webglDepthbuffer,u,!1);else{const W=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,W,e.RENDERBUFFER,q)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ue(u,s,D){const W=i.get(u);s!==void 0&&ue(W.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),D!==void 0&&Re(u)}function je(u){const s=u.texture,D=i.get(u),W=i.get(s);u.addEventListener("dispose",I);const q=u.textures,H=u.isWebGLCubeRenderTarget===!0,pe=q.length>1;if(pe||(W.__webglTexture===void 0&&(W.__webglTexture=e.createTexture()),W.__version=s.version,p.memory.textures++),H){D.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(s.mipmaps&&s.mipmaps.length>0){D.__webglFramebuffer[ae]=[];for(let le=0;le<s.mipmaps.length;le++)D.__webglFramebuffer[ae][le]=e.createFramebuffer()}else D.__webglFramebuffer[ae]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){D.__webglFramebuffer=[];for(let ae=0;ae<s.mipmaps.length;ae++)D.__webglFramebuffer[ae]=e.createFramebuffer()}else D.__webglFramebuffer=e.createFramebuffer();if(pe)for(let ae=0,le=q.length;ae<le;ae++){const Oe=i.get(q[ae]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=e.createTexture(),p.memory.textures++)}if(u.samples>0&&ye(u)===!1){D.__webglMultisampledFramebuffer=e.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ae=0;ae<q.length;ae++){const le=q[ae];D.__webglColorRenderbuffer[ae]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,D.__webglColorRenderbuffer[ae]);const Oe=o.convert(le.format,le.colorSpace),$=o.convert(le.type),ce=T(le.internalFormat,Oe,$,le.colorSpace,u.isXRRenderTarget===!0),Ee=we(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee,ce,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ae,e.RENDERBUFFER,D.__webglColorRenderbuffer[ae])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(D.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(D.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){t.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,s);for(let ae=0;ae<6;ae++)if(s.mipmaps&&s.mipmaps.length>0)for(let le=0;le<s.mipmaps.length;le++)ue(D.__webglFramebuffer[ae][le],u,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else ue(D.__webglFramebuffer[ae],u,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);c(s)&&a(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ae=0,le=q.length;ae<le;ae++){const Oe=q[ae],$=i.get(Oe);t.bindTexture(e.TEXTURE_2D,$.__webglTexture),Ge(e.TEXTURE_2D,Oe),ue(D.__webglFramebuffer,u,Oe,e.COLOR_ATTACHMENT0+ae,e.TEXTURE_2D,0),c(Oe)&&a(e.TEXTURE_2D)}t.unbindTexture()}else{let ae=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ae=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ae,W.__webglTexture),Ge(ae,s),s.mipmaps&&s.mipmaps.length>0)for(let le=0;le<s.mipmaps.length;le++)ue(D.__webglFramebuffer[le],u,s,e.COLOR_ATTACHMENT0,ae,le);else ue(D.__webglFramebuffer,u,s,e.COLOR_ATTACHMENT0,ae,0);c(s)&&a(ae),t.unbindTexture()}u.depthBuffer&&Re(u)}function Ne(u){const s=u.textures;for(let D=0,W=s.length;D<W;D++){const q=s[D];if(c(q)){const H=y(u),pe=i.get(q).__webglTexture;t.bindTexture(H,pe),a(H),t.unbindTexture()}}}const tt=[],_=[];function _t(u){if(u.samples>0){if(ye(u)===!1){const s=u.textures,D=u.width,W=u.height;let q=e.COLOR_BUFFER_BIT;const H=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=i.get(u),ae=s.length>1;if(ae)for(let le=0;le<s.length;le++)t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let le=0;le<s.length;le++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),ae){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pe.__webglColorRenderbuffer[le]);const Oe=i.get(s[le]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Oe,0)}e.blitFramebuffer(0,0,D,W,0,0,D,W,q,e.NEAREST),b===!0&&(tt.length=0,_.length=0,tt.push(e.COLOR_ATTACHMENT0+le),u.depthBuffer&&u.resolveDepthBuffer===!1&&(tt.push(H),_.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ae)for(let le=0;le<s.length;le++){t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,pe.__webglColorRenderbuffer[le]);const Oe=i.get(s[le]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,pe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,Oe,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&b){const s=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function we(u){return Math.min(r.maxSamples,u.samples)}function ye(u){const s=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function _e(u){const s=p.render.frame;C.get(u)!==s&&(C.set(u,s),u.update())}function Ye(u,s){const D=u.colorSpace,W=u.format,q=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||D!==Tn&&D!==Vt&&(it.getTransfer(D)===Ke?(W!==Rt||q!==Ot)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),s}function me(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(v.width=u.naturalWidth||u.width,v.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(v.width=u.displayWidth,v.height=u.displayHeight):(v.width=u.width,v.height=u.height),v}this.allocateTextureUnit=V,this.resetTextureUnits=K,this.setTexture2D=j,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=Ue,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ye}function Kf(e,n){function t(i,r=Vt){let o;const p=it.getTransfer(r);if(i===Ot)return e.UNSIGNED_BYTE;if(i===xa)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Aa)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Br)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Hr)return e.BYTE;if(i===Gr)return e.SHORT;if(i===Sn)return e.UNSIGNED_SHORT;if(i===Pa)return e.INT;if(i===an)return e.UNSIGNED_INT;if(i===It)return e.FLOAT;if(i===Mn)return e.HALF_FLOAT;if(i===Vr)return e.ALPHA;if(i===kr)return e.RGB;if(i===Rt)return e.RGBA;if(i===zr)return e.LUMINANCE;if(i===Wr)return e.LUMINANCE_ALPHA;if(i===jn)return e.DEPTH_COMPONENT;if(i===vn)return e.DEPTH_STENCIL;if(i===Xr)return e.RED;if(i===Ta)return e.RED_INTEGER;if(i===Yr)return e.RG;if(i===Ma)return e.RG_INTEGER;if(i===Sa)return e.RGBA_INTEGER;if(i===Pn||i===Dn||i===Ln||i===Un)if(p===Ke)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Pn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ln)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Un)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Pn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dn)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ln)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Un)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pi||i===hi||i===_i||i===mi)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===pi)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hi)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_i)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mi)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gi||i===vi||i===Ei)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===gi||i===vi)return p===Ke?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Ei)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Si||i===Mi||i===Ti||i===xi||i===Ai||i===Ri||i===bi||i===Ci||i===Pi||i===Di||i===Li||i===Ui||i===wi||i===yi)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Si)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mi)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ti)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xi)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ai)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ri)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bi)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ci)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pi)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Di)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Li)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ui)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wi)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yi)return p===Ke?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wn||i===Ii||i===Ni)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===wn)return p===Ke?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ii)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ni)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kr||i===Oi||i===Fi||i===Bi)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===wn)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Oi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fi)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bi)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const qf={type:"move"};class Hn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new De,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new De),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new De,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new De),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const t=this._hand;if(t)for(const i of n.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,t,i){let r=null,o=null,p=null;const f=this._targetRay,b=this._grip,v=this._hand;if(n&&t.session.visibilityState!=="visible-blurred"){if(v&&n.hand){p=!0;for(const P of n.hand.values()){const c=t.getJointPose(P,i),a=this._getHandJoint(v,P);c!==null&&(a.matrix.fromArray(c.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,a.jointRadius=c.radius),a.visible=c!==null}const C=v.joints["index-finger-tip"],R=v.joints["thumb-tip"],E=C.position.distanceTo(R.position),x=.02,N=.005;v.inputState.pinching&&E>x+N?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!v.inputState.pinching&&E<=x-N&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else b!==null&&n.gripSpace&&(o=t.getPose(n.gripSpace,i),o!==null&&(b.matrix.fromArray(o.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.matrixWorldNeedsUpdate=!0,o.linearVelocity?(b.hasLinearVelocity=!0,b.linearVelocity.copy(o.linearVelocity)):b.hasLinearVelocity=!1,o.angularVelocity?(b.hasAngularVelocity=!0,b.angularVelocity.copy(o.angularVelocity)):b.hasAngularVelocity=!1));f!==null&&(r=t.getPose(n.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return f!==null&&(f.visible=r!==null),b!==null&&(b.visible=o!==null),v!==null&&(v.visible=p!==null),this}_getHandJoint(n,t){if(n.joints[t.jointName]===void 0){const i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,n.joints[t.jointName]=i,n.add(i)}return n.joints[t.jointName]}}const Zf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$f=`
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

}`;class jf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const r=new La,o=n.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Ft({vertexShader:Zf,fragmentShader:$f,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qf extends ja{constructor(n,t){super();const i=this;let r=null,o=1,p=null,f="local-floor",b=1,v=null,C=null,R=null,E=null,x=null,N=null;const P=new jf,c=t.getContextAttributes();let a=null,y=null;const T=[],m=[],G=new qe;let L=null;const I=new hn;I.viewport=new pt;const B=new hn;B.viewport=new pt;const h=[I,B],d=new Qa;let A=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=T[k];return Q===void 0&&(Q=new Hn,T[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=T[k];return Q===void 0&&(Q=new Hn,T[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=T[k];return Q===void 0&&(Q=new Hn,T[k]=Q),Q.getHandSpace()};function V(k){const Q=m.indexOf(k.inputSource);if(Q===-1)return;const ue=T[Q];ue!==void 0&&(ue.update(k.inputSource,k.frame,v||p),ue.dispatchEvent({type:k.type,data:k.inputSource}))}function Y(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let k=0;k<T.length;k++){const Q=m[k];Q!==null&&(m[k]=null,T[k].disconnect(Q))}A=null,K=null,P.reset(),n.setRenderTarget(a),x=null,E=null,R=null,r=null,y=null,Qe.stop(),i.isPresenting=!1,n.setPixelRatio(L),n.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){f=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||p},this.setReferenceSpace=function(k){v=k},this.getBaseLayer=function(){return E!==null?E:x},this.getBinding=function(){return R},this.getFrame=function(){return N},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(a=n.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),c.xrCompatible!==!0&&await t.makeXRCompatible(),L=n.getPixelRatio(),n.getSize(G),r.renderState.layers===void 0){const Q={antialias:c.antialias,alpha:!0,depth:c.depth,stencil:c.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:x}),n.setPixelRatio(1),n.setSize(x.framebufferWidth,x.framebufferHeight,!1),y=new Yt(x.framebufferWidth,x.framebufferHeight,{format:Rt,type:Ot,colorSpace:n.outputColorSpace,stencilBuffer:c.stencil})}else{let Q=null,ue=null,ie=null;c.depth&&(ie=c.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=c.stencil?vn:jn,ue=c.stencil?nn:an);const Me={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:o};R=new XRWebGLBinding(r,t),E=R.createProjectionLayer(Me),r.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),y=new Yt(E.textureWidth,E.textureHeight,{format:Rt,type:Ot,depthTexture:new _a(E.textureWidth,E.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:c.stencil,colorSpace:n.outputColorSpace,samples:c.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(b),v=null,p=await r.requestReferenceSpace(f),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function j(k){for(let Q=0;Q<k.removed.length;Q++){const ue=k.removed[Q],ie=m.indexOf(ue);ie>=0&&(m[ie]=null,T[ie].disconnect(ue))}for(let Q=0;Q<k.added.length;Q++){const ue=k.added[Q];let ie=m.indexOf(ue);if(ie===-1){for(let Re=0;Re<T.length;Re++)if(Re>=m.length){m.push(ue),ie=Re;break}else if(m[Re]===null){m[Re]=ue,ie=Re;break}if(ie===-1)break}const Me=T[ie];Me&&Me.connect(ue)}}const z=new De,J=new De;function F(k,Q,ue){z.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(ue.matrixWorld);const ie=z.distanceTo(J),Me=Q.projectionMatrix.elements,Re=ue.projectionMatrix.elements,Ue=Me[14]/(Me[10]-1),je=Me[14]/(Me[10]+1),Ne=(Me[9]+1)/Me[5],tt=(Me[9]-1)/Me[5],_=(Me[8]-1)/Me[0],_t=(Re[8]+1)/Re[0],we=Ue*_,ye=Ue*_t,_e=ie/(-_+_t),Ye=_e*-_;if(Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ye),k.translateZ(_e),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Me[10]===-1)k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const me=Ue+_e,u=je+_e,s=we-Ye,D=ye+(ie-Ye),W=Ne*je/u*me,q=tt*je/u*me;k.projectionMatrix.makePerspective(s,D,W,q,me,u),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function he(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let Q=k.near,ue=k.far;P.texture!==null&&(P.depthNear>0&&(Q=P.depthNear),P.depthFar>0&&(ue=P.depthFar)),d.near=B.near=I.near=Q,d.far=B.far=I.far=ue,(A!==d.near||K!==d.far)&&(r.updateRenderState({depthNear:d.near,depthFar:d.far}),A=d.near,K=d.far),I.layers.mask=k.layers.mask|2,B.layers.mask=k.layers.mask|4,d.layers.mask=I.layers.mask|B.layers.mask;const ie=k.parent,Me=d.cameras;he(d,ie);for(let Re=0;Re<Me.length;Re++)he(Me[Re],ie);Me.length===2?F(d,I,B):d.projectionMatrix.copy(I.projectionMatrix),Se(k,d,ie)};function Se(k,Q,ue){ue===null?k.matrix.copy(Q.matrixWorld):(k.matrix.copy(ue.matrixWorld),k.matrix.invert(),k.matrix.multiply(Q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ja*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return d},this.getFoveation=function(){if(!(E===null&&x===null))return b},this.setFoveation=function(k){b=k,E!==null&&(E.fixedFoveation=k),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=k)},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(d)};let Le=null;function Ge(k,Q){if(C=Q.getViewerPose(v||p),N=Q,C!==null){const ue=C.views;x!==null&&(n.setRenderTargetFramebuffer(y,x.framebuffer),n.setRenderTarget(y));let ie=!1;ue.length!==d.cameras.length&&(d.cameras.length=0,ie=!0);for(let Re=0;Re<ue.length;Re++){const Ue=ue[Re];let je=null;if(x!==null)je=x.getViewport(Ue);else{const tt=R.getViewSubImage(E,Ue);je=tt.viewport,Re===0&&(n.setRenderTargetTextures(y,tt.colorTexture,E.ignoreDepthValues?void 0:tt.depthStencilTexture),n.setRenderTarget(y))}let Ne=h[Re];Ne===void 0&&(Ne=new hn,Ne.layers.enable(Re),Ne.viewport=new pt,h[Re]=Ne),Ne.matrix.fromArray(Ue.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(Ue.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(je.x,je.y,je.width,je.height),Re===0&&(d.matrix.copy(Ne.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale)),ie===!0&&d.cameras.push(Ne)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")){const Re=R.getDepthInformation(ue[0]);Re&&Re.isValid&&Re.texture&&P.init(n,Re,r.renderState)}}for(let ue=0;ue<T.length;ue++){const ie=m[ue],Me=T[ue];ie!==null&&Me!==void 0&&Me.update(ie,Q,v||p)}Le&&Le(k,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),N=null}const Qe=new ya;Qe.setAnimationLoop(Ge),this.setAnimationLoop=function(k){Le=k},this.dispose=function(){}}}const Ut=new Ua,Jf=new Kt;function ed(e,n){function t(c,a){c.matrixAutoUpdate===!0&&c.updateMatrix(),a.value.copy(c.matrix)}function i(c,a){a.color.getRGB(c.fogColor.value,Ca(e)),a.isFog?(c.fogNear.value=a.near,c.fogFar.value=a.far):a.isFogExp2&&(c.fogDensity.value=a.density)}function r(c,a,y,T,m){a.isMeshBasicMaterial||a.isMeshLambertMaterial?o(c,a):a.isMeshToonMaterial?(o(c,a),R(c,a)):a.isMeshPhongMaterial?(o(c,a),C(c,a)):a.isMeshStandardMaterial?(o(c,a),E(c,a),a.isMeshPhysicalMaterial&&x(c,a,m)):a.isMeshMatcapMaterial?(o(c,a),N(c,a)):a.isMeshDepthMaterial?o(c,a):a.isMeshDistanceMaterial?(o(c,a),P(c,a)):a.isMeshNormalMaterial?o(c,a):a.isLineBasicMaterial?(p(c,a),a.isLineDashedMaterial&&f(c,a)):a.isPointsMaterial?b(c,a,y,T):a.isSpriteMaterial?v(c,a):a.isShadowMaterial?(c.color.value.copy(a.color),c.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}function o(c,a){c.opacity.value=a.opacity,a.color&&c.diffuse.value.copy(a.color),a.emissive&&c.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(c.map.value=a.map,t(a.map,c.mapTransform)),a.alphaMap&&(c.alphaMap.value=a.alphaMap,t(a.alphaMap,c.alphaMapTransform)),a.bumpMap&&(c.bumpMap.value=a.bumpMap,t(a.bumpMap,c.bumpMapTransform),c.bumpScale.value=a.bumpScale,a.side===vt&&(c.bumpScale.value*=-1)),a.normalMap&&(c.normalMap.value=a.normalMap,t(a.normalMap,c.normalMapTransform),c.normalScale.value.copy(a.normalScale),a.side===vt&&c.normalScale.value.negate()),a.displacementMap&&(c.displacementMap.value=a.displacementMap,t(a.displacementMap,c.displacementMapTransform),c.displacementScale.value=a.displacementScale,c.displacementBias.value=a.displacementBias),a.emissiveMap&&(c.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,c.emissiveMapTransform)),a.specularMap&&(c.specularMap.value=a.specularMap,t(a.specularMap,c.specularMapTransform)),a.alphaTest>0&&(c.alphaTest.value=a.alphaTest);const y=n.get(a),T=y.envMap,m=y.envMapRotation;T&&(c.envMap.value=T,Ut.copy(m),Ut.x*=-1,Ut.y*=-1,Ut.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ut.y*=-1,Ut.z*=-1),c.envMapRotation.value.setFromMatrix4(Jf.makeRotationFromEuler(Ut)),c.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=a.reflectivity,c.ior.value=a.ior,c.refractionRatio.value=a.refractionRatio),a.lightMap&&(c.lightMap.value=a.lightMap,c.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,c.lightMapTransform)),a.aoMap&&(c.aoMap.value=a.aoMap,c.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,c.aoMapTransform))}function p(c,a){c.diffuse.value.copy(a.color),c.opacity.value=a.opacity,a.map&&(c.map.value=a.map,t(a.map,c.mapTransform))}function f(c,a){c.dashSize.value=a.dashSize,c.totalSize.value=a.dashSize+a.gapSize,c.scale.value=a.scale}function b(c,a,y,T){c.diffuse.value.copy(a.color),c.opacity.value=a.opacity,c.size.value=a.size*y,c.scale.value=T*.5,a.map&&(c.map.value=a.map,t(a.map,c.uvTransform)),a.alphaMap&&(c.alphaMap.value=a.alphaMap,t(a.alphaMap,c.alphaMapTransform)),a.alphaTest>0&&(c.alphaTest.value=a.alphaTest)}function v(c,a){c.diffuse.value.copy(a.color),c.opacity.value=a.opacity,c.rotation.value=a.rotation,a.map&&(c.map.value=a.map,t(a.map,c.mapTransform)),a.alphaMap&&(c.alphaMap.value=a.alphaMap,t(a.alphaMap,c.alphaMapTransform)),a.alphaTest>0&&(c.alphaTest.value=a.alphaTest)}function C(c,a){c.specular.value.copy(a.specular),c.shininess.value=Math.max(a.shininess,1e-4)}function R(c,a){a.gradientMap&&(c.gradientMap.value=a.gradientMap)}function E(c,a){c.metalness.value=a.metalness,a.metalnessMap&&(c.metalnessMap.value=a.metalnessMap,t(a.metalnessMap,c.metalnessMapTransform)),c.roughness.value=a.roughness,a.roughnessMap&&(c.roughnessMap.value=a.roughnessMap,t(a.roughnessMap,c.roughnessMapTransform)),a.envMap&&(c.envMapIntensity.value=a.envMapIntensity)}function x(c,a,y){c.ior.value=a.ior,a.sheen>0&&(c.sheenColor.value.copy(a.sheenColor).multiplyScalar(a.sheen),c.sheenRoughness.value=a.sheenRoughness,a.sheenColorMap&&(c.sheenColorMap.value=a.sheenColorMap,t(a.sheenColorMap,c.sheenColorMapTransform)),a.sheenRoughnessMap&&(c.sheenRoughnessMap.value=a.sheenRoughnessMap,t(a.sheenRoughnessMap,c.sheenRoughnessMapTransform))),a.clearcoat>0&&(c.clearcoat.value=a.clearcoat,c.clearcoatRoughness.value=a.clearcoatRoughness,a.clearcoatMap&&(c.clearcoatMap.value=a.clearcoatMap,t(a.clearcoatMap,c.clearcoatMapTransform)),a.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=a.clearcoatRoughnessMap,t(a.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),a.clearcoatNormalMap&&(c.clearcoatNormalMap.value=a.clearcoatNormalMap,t(a.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(a.clearcoatNormalScale),a.side===vt&&c.clearcoatNormalScale.value.negate())),a.dispersion>0&&(c.dispersion.value=a.dispersion),a.iridescence>0&&(c.iridescence.value=a.iridescence,c.iridescenceIOR.value=a.iridescenceIOR,c.iridescenceThicknessMinimum.value=a.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=a.iridescenceThicknessRange[1],a.iridescenceMap&&(c.iridescenceMap.value=a.iridescenceMap,t(a.iridescenceMap,c.iridescenceMapTransform)),a.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=a.iridescenceThicknessMap,t(a.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),a.transmission>0&&(c.transmission.value=a.transmission,c.transmissionSamplerMap.value=y.texture,c.transmissionSamplerSize.value.set(y.width,y.height),a.transmissionMap&&(c.transmissionMap.value=a.transmissionMap,t(a.transmissionMap,c.transmissionMapTransform)),c.thickness.value=a.thickness,a.thicknessMap&&(c.thicknessMap.value=a.thicknessMap,t(a.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=a.attenuationDistance,c.attenuationColor.value.copy(a.attenuationColor)),a.anisotropy>0&&(c.anisotropyVector.value.set(a.anisotropy*Math.cos(a.anisotropyRotation),a.anisotropy*Math.sin(a.anisotropyRotation)),a.anisotropyMap&&(c.anisotropyMap.value=a.anisotropyMap,t(a.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=a.specularIntensity,c.specularColor.value.copy(a.specularColor),a.specularColorMap&&(c.specularColorMap.value=a.specularColorMap,t(a.specularColorMap,c.specularColorMapTransform)),a.specularIntensityMap&&(c.specularIntensityMap.value=a.specularIntensityMap,t(a.specularIntensityMap,c.specularIntensityMapTransform))}function N(c,a){a.matcap&&(c.matcap.value=a.matcap)}function P(c,a){const y=n.get(a).light;c.referencePosition.value.setFromMatrixPosition(y.matrixWorld),c.nearDistance.value=y.shadow.camera.near,c.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function td(e,n,t,i){let r={},o={},p=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function b(y,T){const m=T.program;i.uniformBlockBinding(y,m)}function v(y,T){let m=r[y.id];m===void 0&&(N(y),m=C(y),r[y.id]=m,y.addEventListener("dispose",c));const G=T.program;i.updateUBOMapping(y,G);const L=n.render.frame;o[y.id]!==L&&(E(y),o[y.id]=L)}function C(y){const T=R();y.__bindingPointIndex=T;const m=e.createBuffer(),G=y.__size,L=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,m),e.bufferData(e.UNIFORM_BUFFER,G,L),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,T,m),m}function R(){for(let y=0;y<f;y++)if(p.indexOf(y)===-1)return p.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(y){const T=r[y.id],m=y.uniforms,G=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,T);for(let L=0,I=m.length;L<I;L++){const B=Array.isArray(m[L])?m[L]:[m[L]];for(let h=0,d=B.length;h<d;h++){const A=B[h];if(x(A,L,h,G)===!0){const K=A.__offset,V=Array.isArray(A.value)?A.value:[A.value];let Y=0;for(let j=0;j<V.length;j++){const z=V[j],J=P(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,K+Y,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,Y),Y+=J.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,K,A.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(y,T,m,G){const L=y.value,I=T+"_"+m;if(G[I]===void 0)return typeof L=="number"||typeof L=="boolean"?G[I]=L:G[I]=L.clone(),!0;{const B=G[I];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return G[I]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function N(y){const T=y.uniforms;let m=0;const G=16;for(let I=0,B=T.length;I<B;I++){const h=Array.isArray(T[I])?T[I]:[T[I]];for(let d=0,A=h.length;d<A;d++){const K=h[d],V=Array.isArray(K.value)?K.value:[K.value];for(let Y=0,j=V.length;Y<j;Y++){const z=V[Y],J=P(z),F=m%G,he=F%J.boundary,Se=F+he;m+=he,Se!==0&&G-Se<J.storage&&(m+=G-Se),K.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=m,m+=J.storage}}}const L=m%G;return L>0&&(m+=G-L),y.__size=m,y.__cache={},this}function P(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),T}function c(y){const T=y.target;T.removeEventListener("dispose",c);const m=p.indexOf(T.__bindingPointIndex);p.splice(m,1),e.deleteBuffer(r[T.id]),delete r[T.id],delete o[T.id]}function a(){for(const y in r)e.deleteBuffer(r[y]);p=[],r={},o={}}return{bind:b,update:v,dispose:a}}class md{constructor(n={}){const{canvas:t=Wa(),context:i=null,depth:r=!0,stencil:o=!1,alpha:p=!1,antialias:f=!1,premultipliedAlpha:b=!0,preserveDrawingBuffer:v=!1,powerPreference:C="default",failIfMajorPerformanceCaveat:R=!1,reverseDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=p;const N=new Uint32Array(4),P=new Int32Array(4);let c=null,a=null;const y=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xa,this.toneMapping=Ct,this.toneMappingExposure=1;const m=this;let G=!1,L=0,I=0,B=null,h=-1,d=null;const A=new pt,K=new pt;let V=null;const Y=new $e(0);let j=0,z=t.width,J=t.height,F=1,he=null,Se=null;const Le=new pt(0,0,z,J),Ge=new pt(0,0,z,J);let Qe=!1;const k=new ha;let Q=!1,ue=!1;const ie=new Kt,Me=new Kt,Re=new De,Ue=new pt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function tt(){return B===null?F:1}let _=i;function _t(l,S){return t.getContext(l,S)}try{const l={alpha:!0,depth:r,stencil:o,antialias:f,premultipliedAlpha:b,preserveDrawingBuffer:v,powerPreference:C,failIfMajorPerformanceCaveat:R};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",re,!1),_===null){const S="webgl2";if(_=_t(S,l),_===null)throw _t(S)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(l){throw console.error("THREE.WebGLRenderer: "+l.message),l}let we,ye,_e,Ye,me,u,s,D,W,q,H,pe,ae,le,Oe,$,ce,Ee,Te,fe,Ie,Ce,Xe,g;function te(){we=new fc(_),we.init(),Ce=new Kf(_,we),ye=new ac(_,we,n,Ce),_e=new Xf(_,we),ye.reverseDepthBuffer&&E&&_e.buffers.depth.setReversed(!0),Ye=new pc(_),me=new wf,u=new Yf(_,we,_e,me,ye,Ce,Ye),s=new oc(m),D=new cc(m),W=new So(_),Xe=new nc(_,W),q=new dc(_,W,Ye,Xe),H=new _c(_,q,W,Ye),Te=new hc(_,ye,u),$=new rc(me),pe=new Uf(m,s,D,we,ye,Xe,$),ae=new ed(m,me),le=new If,Oe=new Gf(we),Ee=new tc(m,s,D,_e,H,x,b),ce=new zf(m,H,ye),g=new td(_,Ye,ye,_e),fe=new ic(_,we,Ye),Ie=new uc(_,we,Ye),Ye.programs=pe.programs,m.capabilities=ye,m.extensions=we,m.properties=me,m.renderLists=le,m.shadowMap=ce,m.state=_e,m.info=Ye}te();const O=new Qf(m,_);this.xr=O,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const l=we.get("WEBGL_lose_context");l&&l.loseContext()},this.forceContextRestore=function(){const l=we.get("WEBGL_lose_context");l&&l.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(l){l!==void 0&&(F=l,this.setSize(z,J,!1))},this.getSize=function(l){return l.set(z,J)},this.setSize=function(l,S,U=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=l,J=S,t.width=Math.floor(l*F),t.height=Math.floor(S*F),U===!0&&(t.style.width=l+"px",t.style.height=S+"px"),this.setViewport(0,0,l,S)},this.getDrawingBufferSize=function(l){return l.set(z*F,J*F).floor()},this.setDrawingBufferSize=function(l,S,U){z=l,J=S,F=U,t.width=Math.floor(l*U),t.height=Math.floor(S*U),this.setViewport(0,0,l,S)},this.getCurrentViewport=function(l){return l.copy(A)},this.getViewport=function(l){return l.copy(Le)},this.setViewport=function(l,S,U,w){l.isVector4?Le.set(l.x,l.y,l.z,l.w):Le.set(l,S,U,w),_e.viewport(A.copy(Le).multiplyScalar(F).round())},this.getScissor=function(l){return l.copy(Ge)},this.setScissor=function(l,S,U,w){l.isVector4?Ge.set(l.x,l.y,l.z,l.w):Ge.set(l,S,U,w),_e.scissor(K.copy(Ge).multiplyScalar(F).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(l){_e.setScissorTest(Qe=l)},this.setOpaqueSort=function(l){he=l},this.setTransparentSort=function(l){Se=l},this.getClearColor=function(l){return l.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(l=!0,S=!0,U=!0){let w=0;if(l){let M=!1;if(B!==null){const Z=B.texture.format;M=Z===Sa||Z===Ma||Z===Ta}if(M){const Z=B.texture.type,ne=Z===Ot||Z===an||Z===Sn||Z===nn||Z===xa||Z===Aa,se=Ee.getClearColor(),de=Ee.getClearAlpha(),xe=se.r,Ae=se.g,ge=se.b;ne?(N[0]=xe,N[1]=Ae,N[2]=ge,N[3]=de,_.clearBufferuiv(_.COLOR,0,N)):(P[0]=xe,P[1]=Ae,P[2]=ge,P[3]=de,_.clearBufferiv(_.COLOR,0,P))}else w|=_.COLOR_BUFFER_BIT}S&&(w|=_.DEPTH_BUFFER_BIT),U&&(w|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Ee.dispose(),le.dispose(),Oe.dispose(),me.dispose(),s.dispose(),D.dispose(),H.dispose(),Xe.dispose(),g.dispose(),pe.dispose(),O.dispose(),O.removeEventListener("sessionstart",ei),O.removeEventListener("sessionend",ti),Pt.stop()};function X(l){l.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const l=Ye.autoReset,S=ce.enabled,U=ce.autoUpdate,w=ce.needsUpdate,M=ce.type;te(),Ye.autoReset=l,ce.enabled=S,ce.autoUpdate=U,ce.needsUpdate=w,ce.type=M}function re(l){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",l.statusMessage)}function be(l){const S=l.target;S.removeEventListener("dispose",be),Je(S)}function Je(l){lt(l),me.remove(l)}function lt(l){const S=me.get(l).programs;S!==void 0&&(S.forEach(function(U){pe.releaseProgram(U)}),l.isShaderMaterial&&pe.releaseShaderCache(l))}this.renderBufferDirect=function(l,S,U,w,M,Z){S===null&&(S=je);const ne=M.isMesh&&M.matrixWorld.determinant()<0,se=Ha(l,S,U,w,M);_e.setMaterial(w,ne);let de=U.index,xe=1;if(w.wireframe===!0){if(de=q.getWireframeAttribute(U),de===void 0)return;xe=2}const Ae=U.drawRange,ge=U.attributes.position;let Fe=Ae.start*xe,Ve=(Ae.start+Ae.count)*xe;Z!==null&&(Fe=Math.max(Fe,Z.start*xe),Ve=Math.min(Ve,(Z.start+Z.count)*xe)),de!==null?(Fe=Math.max(Fe,0),Ve=Math.min(Ve,de.count)):ge!=null&&(Fe=Math.max(Fe,0),Ve=Math.min(Ve,ge.count));const nt=Ve-Fe;if(nt<0||nt===1/0)return;Xe.setup(M,w,se,U,de);let et,Be=fe;if(de!==null&&(et=W.get(de),Be=Ie,Be.setIndex(et)),M.isMesh)w.wireframe===!0?(_e.setLineWidth(w.wireframeLinewidth*tt()),Be.setMode(_.LINES)):Be.setMode(_.TRIANGLES);else if(M.isLine){let ve=w.linewidth;ve===void 0&&(ve=1),_e.setLineWidth(ve*tt()),M.isLineSegments?Be.setMode(_.LINES):M.isLineLoop?Be.setMode(_.LINE_LOOP):Be.setMode(_.LINE_STRIP)}else M.isPoints?Be.setMode(_.POINTS):M.isSprite&&Be.setMode(_.TRIANGLES);if(M.isBatchedMesh)if(M._multiDrawInstances!==null)Be.renderMultiDrawInstances(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount,M._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))Be.renderMultiDraw(M._multiDrawStarts,M._multiDrawCounts,M._multiDrawCount);else{const ve=M._multiDrawStarts,st=M._multiDrawCounts,ke=M._multiDrawCount,St=de?W.get(de).bytesPerElement:1,Bt=me.get(w).currentProgram.getUniforms();for(let ht=0;ht<ke;ht++)Bt.setValue(_,"_gl_DrawID",ht),Be.render(ve[ht]/St,st[ht])}else if(M.isInstancedMesh)Be.renderInstances(Fe,nt,M.count);else if(U.isInstancedBufferGeometry){const ve=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,st=Math.min(U.instanceCount,ve);Be.renderInstances(Fe,nt,st)}else Be.render(Fe,nt)};function ze(l,S,U){l.transparent===!0&&l.side===At&&l.forceSinglePass===!1?(l.side=vt,l.needsUpdate=!0,sn(l,S,U),l.side=tn,l.needsUpdate=!0,sn(l,S,U),l.side=At):sn(l,S,U)}this.compile=function(l,S,U=null){U===null&&(U=l),a=Oe.get(U),a.init(S),T.push(a),U.traverseVisible(function(M){M.isLight&&M.layers.test(S.layers)&&(a.pushLight(M),M.castShadow&&a.pushShadow(M))}),l!==U&&l.traverseVisible(function(M){M.isLight&&M.layers.test(S.layers)&&(a.pushLight(M),M.castShadow&&a.pushShadow(M))}),a.setupLights();const w=new Set;return l.traverse(function(M){if(!(M.isMesh||M.isPoints||M.isLine||M.isSprite))return;const Z=M.material;if(Z)if(Array.isArray(Z))for(let ne=0;ne<Z.length;ne++){const se=Z[ne];ze(se,U,M),w.add(se)}else ze(Z,U,M),w.add(Z)}),T.pop(),a=null,w},this.compileAsync=function(l,S,U=null){const w=this.compile(l,S,U);return new Promise(M=>{function Z(){if(w.forEach(function(ne){me.get(ne).currentProgram.isReady()&&w.delete(ne)}),w.size===0){M(l);return}setTimeout(Z,10)}we.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let Et=null;function Tt(l){Et&&Et(l)}function ei(){Pt.stop()}function ti(){Pt.start()}const Pt=new ya;Pt.setAnimationLoop(Tt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(l){Et=l,O.setAnimationLoop(l),l===null?Pt.stop():Pt.start()},O.addEventListener("sessionstart",ei),O.addEventListener("sessionend",ti),this.render=function(l,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(l.matrixWorldAutoUpdate===!0&&l.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(S),S=O.getCamera()),l.isScene===!0&&l.onBeforeRender(m,l,S,B),a=Oe.get(l,T.length),a.init(S),T.push(a),Me.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),k.setFromProjectionMatrix(Me),ue=this.localClippingEnabled,Q=$.init(this.clippingPlanes,ue),c=le.get(l,y.length),c.init(),y.push(c),O.enabled===!0&&O.isPresenting===!0){const Z=m.xr.getDepthSensingMesh();Z!==null&&Rn(Z,S,-1/0,m.sortObjects)}Rn(l,S,0,m.sortObjects),c.finish(),m.sortObjects===!0&&c.sort(he,Se),Ne=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Ne&&Ee.addToRenderList(c,l),this.info.render.frame++,Q===!0&&$.beginShadows();const U=a.state.shadowsArray;ce.render(U,l,S),Q===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const w=c.opaque,M=c.transmissive;if(a.setupLights(),S.isArrayCamera){const Z=S.cameras;if(M.length>0)for(let ne=0,se=Z.length;ne<se;ne++){const de=Z[ne];ii(w,M,l,de)}Ne&&Ee.render(l);for(let ne=0,se=Z.length;ne<se;ne++){const de=Z[ne];ni(c,l,de,de.viewport)}}else M.length>0&&ii(w,M,l,S),Ne&&Ee.render(l),ni(c,l,S);B!==null&&(u.updateMultisampleRenderTarget(B),u.updateRenderTargetMipmap(B)),l.isScene===!0&&l.onAfterRender(m,l,S),Xe.resetDefaultState(),h=-1,d=null,T.pop(),T.length>0?(a=T[T.length-1],Q===!0&&$.setGlobalState(m.clippingPlanes,a.state.camera)):a=null,y.pop(),y.length>0?c=y[y.length-1]:c=null};function Rn(l,S,U,w){if(l.visible===!1)return;if(l.layers.test(S.layers)){if(l.isGroup)U=l.renderOrder;else if(l.isLOD)l.autoUpdate===!0&&l.update(S);else if(l.isLight)a.pushLight(l),l.castShadow&&a.pushShadow(l);else if(l.isSprite){if(!l.frustumCulled||k.intersectsSprite(l)){w&&Ue.setFromMatrixPosition(l.matrixWorld).applyMatrix4(Me);const ne=H.update(l),se=l.material;se.visible&&c.push(l,ne,se,U,Ue.z,null)}}else if((l.isMesh||l.isLine||l.isPoints)&&(!l.frustumCulled||k.intersectsObject(l))){const ne=H.update(l),se=l.material;if(w&&(l.boundingSphere!==void 0?(l.boundingSphere===null&&l.computeBoundingSphere(),Ue.copy(l.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Ue.copy(ne.boundingSphere.center)),Ue.applyMatrix4(l.matrixWorld).applyMatrix4(Me)),Array.isArray(se)){const de=ne.groups;for(let xe=0,Ae=de.length;xe<Ae;xe++){const ge=de[xe],Fe=se[ge.materialIndex];Fe&&Fe.visible&&c.push(l,ne,Fe,U,Ue.z,ge)}}else se.visible&&c.push(l,ne,se,U,Ue.z,null)}}const Z=l.children;for(let ne=0,se=Z.length;ne<se;ne++)Rn(Z[ne],S,U,w)}function ni(l,S,U,w){const M=l.opaque,Z=l.transmissive,ne=l.transparent;a.setupLightsView(U),Q===!0&&$.setGlobalState(m.clippingPlanes,U),w&&_e.viewport(A.copy(w)),M.length>0&&on(M,S,U),Z.length>0&&on(Z,S,U),ne.length>0&&on(ne,S,U),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ii(l,S,U,w){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;a.state.transmissionRenderTarget[w.id]===void 0&&(a.state.transmissionRenderTarget[w.id]=new Yt(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?Mn:Ot,minFilter:Qt,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const Z=a.state.transmissionRenderTarget[w.id],ne=w.viewport||A;Z.setSize(ne.z,ne.w);const se=m.getRenderTarget();m.setRenderTarget(Z),m.getClearColor(Y),j=m.getClearAlpha(),j<1&&m.setClearColor(16777215,.5),m.clear(),Ne&&Ee.render(U);const de=m.toneMapping;m.toneMapping=Ct;const xe=w.viewport;if(w.viewport!==void 0&&(w.viewport=void 0),a.setupLightsView(w),Q===!0&&$.setGlobalState(m.clippingPlanes,w),on(l,U,w),u.updateMultisampleRenderTarget(Z),u.updateRenderTargetMipmap(Z),we.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ge=0,Fe=S.length;ge<Fe;ge++){const Ve=S[ge],nt=Ve.object,et=Ve.geometry,Be=Ve.material,ve=Ve.group;if(Be.side===At&&nt.layers.test(w.layers)){const st=Be.side;Be.side=vt,Be.needsUpdate=!0,ai(nt,U,w,et,Be,ve),Be.side=st,Be.needsUpdate=!0,Ae=!0}}Ae===!0&&(u.updateMultisampleRenderTarget(Z),u.updateRenderTargetMipmap(Z))}m.setRenderTarget(se),m.setClearColor(Y,j),xe!==void 0&&(w.viewport=xe),m.toneMapping=de}function on(l,S,U){const w=S.isScene===!0?S.overrideMaterial:null;for(let M=0,Z=l.length;M<Z;M++){const ne=l[M],se=ne.object,de=ne.geometry,xe=w===null?ne.material:w,Ae=ne.group;se.layers.test(U.layers)&&ai(se,S,U,de,xe,Ae)}}function ai(l,S,U,w,M,Z){l.onBeforeRender(m,S,U,w,M,Z),l.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,l.matrixWorld),l.normalMatrix.getNormalMatrix(l.modelViewMatrix),M.onBeforeRender(m,S,U,w,l,Z),M.transparent===!0&&M.side===At&&M.forceSinglePass===!1?(M.side=vt,M.needsUpdate=!0,m.renderBufferDirect(U,S,w,M,l,Z),M.side=tn,M.needsUpdate=!0,m.renderBufferDirect(U,S,w,M,l,Z),M.side=At):m.renderBufferDirect(U,S,w,M,l,Z),l.onAfterRender(m,S,U,w,M,Z)}function sn(l,S,U){S.isScene!==!0&&(S=je);const w=me.get(l),M=a.state.lights,Z=a.state.shadowsArray,ne=M.state.version,se=pe.getParameters(l,M.state,Z,S,U),de=pe.getProgramCacheKey(se);let xe=w.programs;w.environment=l.isMeshStandardMaterial?S.environment:null,w.fog=S.fog,w.envMap=(l.isMeshStandardMaterial?D:s).get(l.envMap||w.environment),w.envMapRotation=w.environment!==null&&l.envMap===null?S.environmentRotation:l.envMapRotation,xe===void 0&&(l.addEventListener("dispose",be),xe=new Map,w.programs=xe);let Ae=xe.get(de);if(Ae!==void 0){if(w.currentProgram===Ae&&w.lightsStateVersion===ne)return oi(l,se),Ae}else se.uniforms=pe.getUniforms(l),l.onBeforeCompile(se,m),Ae=pe.acquireProgram(se,de),xe.set(de,Ae),w.uniforms=se.uniforms;const ge=w.uniforms;return(!l.isShaderMaterial&&!l.isRawShaderMaterial||l.clipping===!0)&&(ge.clippingPlanes=$.uniform),oi(l,se),w.needsLights=Va(l),w.lightsStateVersion=ne,w.needsLights&&(ge.ambientLightColor.value=M.state.ambient,ge.lightProbe.value=M.state.probe,ge.directionalLights.value=M.state.directional,ge.directionalLightShadows.value=M.state.directionalShadow,ge.spotLights.value=M.state.spot,ge.spotLightShadows.value=M.state.spotShadow,ge.rectAreaLights.value=M.state.rectArea,ge.ltc_1.value=M.state.rectAreaLTC1,ge.ltc_2.value=M.state.rectAreaLTC2,ge.pointLights.value=M.state.point,ge.pointLightShadows.value=M.state.pointShadow,ge.hemisphereLights.value=M.state.hemi,ge.directionalShadowMap.value=M.state.directionalShadowMap,ge.directionalShadowMatrix.value=M.state.directionalShadowMatrix,ge.spotShadowMap.value=M.state.spotShadowMap,ge.spotLightMatrix.value=M.state.spotLightMatrix,ge.spotLightMap.value=M.state.spotLightMap,ge.pointShadowMap.value=M.state.pointShadowMap,ge.pointShadowMatrix.value=M.state.pointShadowMatrix),w.currentProgram=Ae,w.uniformsList=null,Ae}function ri(l){if(l.uniformsList===null){const S=l.currentProgram.getUniforms();l.uniformsList=gn.seqWithValue(S.seq,l.uniforms)}return l.uniformsList}function oi(l,S){const U=me.get(l);U.outputColorSpace=S.outputColorSpace,U.batching=S.batching,U.batchingColor=S.batchingColor,U.instancing=S.instancing,U.instancingColor=S.instancingColor,U.instancingMorph=S.instancingMorph,U.skinning=S.skinning,U.morphTargets=S.morphTargets,U.morphNormals=S.morphNormals,U.morphColors=S.morphColors,U.morphTargetsCount=S.morphTargetsCount,U.numClippingPlanes=S.numClippingPlanes,U.numIntersection=S.numClipIntersection,U.vertexAlphas=S.vertexAlphas,U.vertexTangents=S.vertexTangents,U.toneMapping=S.toneMapping}function Ha(l,S,U,w,M){S.isScene!==!0&&(S=je),u.resetTextureUnits();const Z=S.fog,ne=w.isMeshStandardMaterial?S.environment:null,se=B===null?m.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Tn,de=(w.isMeshStandardMaterial?D:s).get(w.envMap||ne),xe=w.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ae=!!U.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),ge=!!U.morphAttributes.position,Fe=!!U.morphAttributes.normal,Ve=!!U.morphAttributes.color;let nt=Ct;w.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(nt=m.toneMapping);const et=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Be=et!==void 0?et.length:0,ve=me.get(w),st=a.state.lights;if(Q===!0&&(ue===!0||l!==d)){const ct=l===d&&w.id===h;$.setState(w,l,ct)}let ke=!1;w.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==st.state.version||ve.outputColorSpace!==se||M.isBatchedMesh&&ve.batching===!1||!M.isBatchedMesh&&ve.batching===!0||M.isBatchedMesh&&ve.batchingColor===!0&&M.colorTexture===null||M.isBatchedMesh&&ve.batchingColor===!1&&M.colorTexture!==null||M.isInstancedMesh&&ve.instancing===!1||!M.isInstancedMesh&&ve.instancing===!0||M.isSkinnedMesh&&ve.skinning===!1||!M.isSkinnedMesh&&ve.skinning===!0||M.isInstancedMesh&&ve.instancingColor===!0&&M.instanceColor===null||M.isInstancedMesh&&ve.instancingColor===!1&&M.instanceColor!==null||M.isInstancedMesh&&ve.instancingMorph===!0&&M.morphTexture===null||M.isInstancedMesh&&ve.instancingMorph===!1&&M.morphTexture!==null||ve.envMap!==de||w.fog===!0&&ve.fog!==Z||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==$.numPlanes||ve.numIntersection!==$.numIntersection)||ve.vertexAlphas!==xe||ve.vertexTangents!==Ae||ve.morphTargets!==ge||ve.morphNormals!==Fe||ve.morphColors!==Ve||ve.toneMapping!==nt||ve.morphTargetsCount!==Be)&&(ke=!0):(ke=!0,ve.__version=w.version);let St=ve.currentProgram;ke===!0&&(St=sn(w,S,M));let Bt=!1,ht=!1,$t=!1;const Ze=St.getUniforms(),mt=ve.uniforms;if(_e.useProgram(St.program)&&(Bt=!0,ht=!0,$t=!0),w.id!==h&&(h=w.id,ht=!0),Bt||d!==l){_e.buffers.depth.getReversed()?(ie.copy(l.projectionMatrix),Ka(ie),qa(ie),Ze.setValue(_,"projectionMatrix",ie)):Ze.setValue(_,"projectionMatrix",l.projectionMatrix),Ze.setValue(_,"viewMatrix",l.matrixWorldInverse);const ft=Ze.map.cameraPosition;ft!==void 0&&ft.setValue(_,Re.setFromMatrixPosition(l.matrixWorld)),ye.logarithmicDepthBuffer&&Ze.setValue(_,"logDepthBufFC",2/(Math.log(l.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&Ze.setValue(_,"isOrthographic",l.isOrthographicCamera===!0),d!==l&&(d=l,ht=!0,$t=!0)}if(M.isSkinnedMesh){Ze.setOptional(_,M,"bindMatrix"),Ze.setOptional(_,M,"bindMatrixInverse");const ct=M.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),Ze.setValue(_,"boneTexture",ct.boneTexture,u))}M.isBatchedMesh&&(Ze.setOptional(_,M,"batchingTexture"),Ze.setValue(_,"batchingTexture",M._matricesTexture,u),Ze.setOptional(_,M,"batchingIdTexture"),Ze.setValue(_,"batchingIdTexture",M._indirectTexture,u),Ze.setOptional(_,M,"batchingColorTexture"),M._colorsTexture!==null&&Ze.setValue(_,"batchingColorTexture",M._colorsTexture,u));const gt=U.morphAttributes;if((gt.position!==void 0||gt.normal!==void 0||gt.color!==void 0)&&Te.update(M,U,St),(ht||ve.receiveShadow!==M.receiveShadow)&&(ve.receiveShadow=M.receiveShadow,Ze.setValue(_,"receiveShadow",M.receiveShadow)),w.isMeshGouraudMaterial&&w.envMap!==null&&(mt.envMap.value=de,mt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),w.isMeshStandardMaterial&&w.envMap===null&&S.environment!==null&&(mt.envMapIntensity.value=S.environmentIntensity),ht&&(Ze.setValue(_,"toneMappingExposure",m.toneMappingExposure),ve.needsLights&&Ga(mt,$t),Z&&w.fog===!0&&ae.refreshFogUniforms(mt,Z),ae.refreshMaterialUniforms(mt,w,F,J,a.state.transmissionRenderTarget[l.id]),gn.upload(_,ri(ve),mt,u)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(gn.upload(_,ri(ve),mt,u),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&Ze.setValue(_,"center",M.center),Ze.setValue(_,"modelViewMatrix",M.modelViewMatrix),Ze.setValue(_,"normalMatrix",M.normalMatrix),Ze.setValue(_,"modelMatrix",M.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){const ct=w.uniformsGroups;for(let ft=0,bn=ct.length;ft<bn;ft++){const Dt=ct[ft];g.update(Dt,St),g.bind(Dt,St)}}return St}function Ga(l,S){l.ambientLightColor.needsUpdate=S,l.lightProbe.needsUpdate=S,l.directionalLights.needsUpdate=S,l.directionalLightShadows.needsUpdate=S,l.pointLights.needsUpdate=S,l.pointLightShadows.needsUpdate=S,l.spotLights.needsUpdate=S,l.spotLightShadows.needsUpdate=S,l.rectAreaLights.needsUpdate=S,l.hemisphereLights.needsUpdate=S}function Va(l){return l.isMeshLambertMaterial||l.isMeshToonMaterial||l.isMeshPhongMaterial||l.isMeshStandardMaterial||l.isShadowMaterial||l.isShaderMaterial&&l.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(l,S,U){me.get(l.texture).__webglTexture=S,me.get(l.depthTexture).__webglTexture=U;const w=me.get(l);w.__hasExternalTextures=!0,w.__autoAllocateDepthBuffer=U===void 0,w.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),w.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(l,S){const U=me.get(l);U.__webglFramebuffer=S,U.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(l,S=0,U=0){B=l,L=S,I=U;let w=!0,M=null,Z=!1,ne=!1;if(l){const de=me.get(l);if(de.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(_.FRAMEBUFFER,null),w=!1;else if(de.__webglFramebuffer===void 0)u.setupRenderTarget(l);else if(de.__hasExternalTextures)u.rebindTextures(l,me.get(l.texture).__webglTexture,me.get(l.depthTexture).__webglTexture);else if(l.depthBuffer){const ge=l.depthTexture;if(de.__boundDepthTexture!==ge){if(ge!==null&&me.has(ge)&&(l.width!==ge.image.width||l.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");u.setupDepthRenderbuffer(l)}}const xe=l.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ne=!0);const Ae=me.get(l).__webglFramebuffer;l.isWebGLCubeRenderTarget?(Array.isArray(Ae[S])?M=Ae[S][U]:M=Ae[S],Z=!0):l.samples>0&&u.useMultisampledRTT(l)===!1?M=me.get(l).__webglMultisampledFramebuffer:Array.isArray(Ae)?M=Ae[U]:M=Ae,A.copy(l.viewport),K.copy(l.scissor),V=l.scissorTest}else A.copy(Le).multiplyScalar(F).floor(),K.copy(Ge).multiplyScalar(F).floor(),V=Qe;if(_e.bindFramebuffer(_.FRAMEBUFFER,M)&&w&&_e.drawBuffers(l,M),_e.viewport(A),_e.scissor(K),_e.setScissorTest(V),Z){const de=me.get(l.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+S,de.__webglTexture,U)}else if(ne){const de=me.get(l.texture),xe=S||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,de.__webglTexture,U||0,xe)}h=-1},this.readRenderTargetPixels=function(l,S,U,w,M,Z,ne){if(!(l&&l.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=me.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){_e.bindFramebuffer(_.FRAMEBUFFER,se);try{const de=l.texture,xe=de.format,Ae=de.type;if(!ye.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=l.width-w&&U>=0&&U<=l.height-M&&_.readPixels(S,U,w,M,Ce.convert(xe),Ce.convert(Ae),Z)}finally{const de=B!==null?me.get(B).__webglFramebuffer:null;_e.bindFramebuffer(_.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(l,S,U,w,M,Z,ne){if(!(l&&l.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=me.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){const de=l.texture,xe=de.format,Ae=de.type;if(!ye.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(S>=0&&S<=l.width-w&&U>=0&&U<=l.height-M){_e.bindFramebuffer(_.FRAMEBUFFER,se);const ge=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,ge),_.bufferData(_.PIXEL_PACK_BUFFER,Z.byteLength,_.STREAM_READ),_.readPixels(S,U,w,M,Ce.convert(xe),Ce.convert(Ae),0);const Fe=B!==null?me.get(B).__webglFramebuffer:null;_e.bindFramebuffer(_.FRAMEBUFFER,Fe);const Ve=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Za(_,Ve,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,ge),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,Z),_.deleteBuffer(ge),_.deleteSync(Ve),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(l,S=null,U=0){l.isTexture!==!0&&(Gt("WebGLRenderer: copyFramebufferToTexture function signature has changed."),S=arguments[0]||null,l=arguments[1]);const w=Math.pow(2,-U),M=Math.floor(l.image.width*w),Z=Math.floor(l.image.height*w),ne=S!==null?S.x:0,se=S!==null?S.y:0;u.setTexture2D(l,0),_.copyTexSubImage2D(_.TEXTURE_2D,U,0,0,ne,se,M,Z),_e.unbindTexture()};const ka=_.createFramebuffer(),za=_.createFramebuffer();this.copyTextureToTexture=function(l,S,U=null,w=null,M=0,Z=null){l.isTexture!==!0&&(Gt("WebGLRenderer: copyTextureToTexture function signature has changed."),w=arguments[0]||null,l=arguments[1],S=arguments[2],Z=arguments[3]||0,U=null),Z===null&&(M!==0?(Gt("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Z=M,M=0):Z=0);let ne,se,de,xe,Ae,ge,Fe,Ve,nt;const et=l.isCompressedTexture?l.mipmaps[Z]:l.image;if(U!==null)ne=U.max.x-U.min.x,se=U.max.y-U.min.y,de=U.isBox3?U.max.z-U.min.z:1,xe=U.min.x,Ae=U.min.y,ge=U.isBox3?U.min.z:0;else{const gt=Math.pow(2,-M);ne=Math.floor(et.width*gt),se=Math.floor(et.height*gt),l.isDataArrayTexture?de=et.depth:l.isData3DTexture?de=Math.floor(et.depth*gt):de=1,xe=0,Ae=0,ge=0}w!==null?(Fe=w.x,Ve=w.y,nt=w.z):(Fe=0,Ve=0,nt=0);const Be=Ce.convert(S.format),ve=Ce.convert(S.type);let st;S.isData3DTexture?(u.setTexture3D(S,0),st=_.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(u.setTexture2DArray(S,0),st=_.TEXTURE_2D_ARRAY):(u.setTexture2D(S,0),st=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,S.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,S.unpackAlignment);const ke=_.getParameter(_.UNPACK_ROW_LENGTH),St=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Bt=_.getParameter(_.UNPACK_SKIP_PIXELS),ht=_.getParameter(_.UNPACK_SKIP_ROWS),$t=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,et.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,et.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,xe),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ae),_.pixelStorei(_.UNPACK_SKIP_IMAGES,ge);const Ze=l.isDataArrayTexture||l.isData3DTexture,mt=S.isDataArrayTexture||S.isData3DTexture;if(l.isDepthTexture){const gt=me.get(l),ct=me.get(S),ft=me.get(gt.__renderTarget),bn=me.get(ct.__renderTarget);_e.bindFramebuffer(_.READ_FRAMEBUFFER,ft.__webglFramebuffer),_e.bindFramebuffer(_.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Dt=0;Dt<de;Dt++)Ze&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,me.get(l).__webglTexture,M,ge+Dt),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,me.get(S).__webglTexture,Z,nt+Dt)),_.blitFramebuffer(xe,Ae,ne,se,Fe,Ve,ne,se,_.DEPTH_BUFFER_BIT,_.NEAREST);_e.bindFramebuffer(_.READ_FRAMEBUFFER,null),_e.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(M!==0||l.isRenderTargetTexture||me.has(l)){const gt=me.get(l),ct=me.get(S);_e.bindFramebuffer(_.READ_FRAMEBUFFER,ka),_e.bindFramebuffer(_.DRAW_FRAMEBUFFER,za);for(let ft=0;ft<de;ft++)Ze?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,gt.__webglTexture,M,ge+ft):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,gt.__webglTexture,M),mt?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,ct.__webglTexture,Z,nt+ft):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,ct.__webglTexture,Z),M!==0?_.blitFramebuffer(xe,Ae,ne,se,Fe,Ve,ne,se,_.COLOR_BUFFER_BIT,_.NEAREST):mt?_.copyTexSubImage3D(st,Z,Fe,Ve,nt+ft,xe,Ae,ne,se):_.copyTexSubImage2D(st,Z,Fe,Ve,xe,Ae,ne,se);_e.bindFramebuffer(_.READ_FRAMEBUFFER,null),_e.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else mt?l.isDataTexture||l.isData3DTexture?_.texSubImage3D(st,Z,Fe,Ve,nt,ne,se,de,Be,ve,et.data):S.isCompressedArrayTexture?_.compressedTexSubImage3D(st,Z,Fe,Ve,nt,ne,se,de,Be,et.data):_.texSubImage3D(st,Z,Fe,Ve,nt,ne,se,de,Be,ve,et):l.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,Z,Fe,Ve,ne,se,Be,ve,et.data):l.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,Z,Fe,Ve,et.width,et.height,Be,et.data):_.texSubImage2D(_.TEXTURE_2D,Z,Fe,Ve,ne,se,Be,ve,et);_.pixelStorei(_.UNPACK_ROW_LENGTH,ke),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,St),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Bt),_.pixelStorei(_.UNPACK_SKIP_ROWS,ht),_.pixelStorei(_.UNPACK_SKIP_IMAGES,$t),Z===0&&S.generateMipmaps&&_.generateMipmap(st),_e.unbindTexture()},this.copyTextureToTexture3D=function(l,S,U=null,w=null,M=0){return l.isTexture!==!0&&(Gt("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,w=arguments[1]||null,l=arguments[2],S=arguments[3],M=arguments[4]||0),Gt('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(l,S,U,w,M)},this.initRenderTarget=function(l){me.get(l).__webglFramebuffer===void 0&&u.setupRenderTarget(l)},this.initTexture=function(l){l.isCubeTexture?u.setTextureCube(l,0):l.isData3DTexture?u.setTexture3D(l,0):l.isDataArrayTexture||l.isCompressedArrayTexture?u.setTexture2DArray(l,0):u.setTexture2D(l,0),_e.unbindTexture()},this.resetState=function(){L=0,I=0,B=null,_e.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(n),t.unpackColorSpace=it._getUnpackColorSpace()}}const ua={type:"change"},Jn={type:"start"},Ba={type:"end"},pn=new go,pa=new ma,nd=Math.cos(70*Eo.DEG2RAD),at=new De,dt=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gn=1e-6;class gd extends vo{constructor(n,t=null){super(n,t),this.state=We.NONE,this.enabled=!0,this.target=new De,this.cursor=new De,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xt.ROTATE,MIDDLE:Xt.DOLLY,RIGHT:Xt.PAN},this.touches={ONE:zt.ROTATE,TWO:zt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new De,this._lastQuaternion=new Gi,this._lastTargetPosition=new De,this._quat=new Gi().setFromUnitVectors(n.up,new De(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vi,this._sphericalDelta=new Vi,this._scale=1,this._panOffset=new De,this._rotateStart=new qe,this._rotateEnd=new qe,this._rotateDelta=new qe,this._panStart=new qe,this._panEnd=new qe,this._panDelta=new qe,this._dollyStart=new qe,this._dollyEnd=new qe,this._dollyDelta=new qe,this._dollyDirection=new De,this._mouse=new qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ad.bind(this),this._onPointerDown=id.bind(this),this._onPointerUp=rd.bind(this),this._onContextMenu=ud.bind(this),this._onMouseWheel=ld.bind(this),this._onKeyDown=cd.bind(this),this._onTouchStart=fd.bind(this),this._onTouchMove=dd.bind(this),this._onMouseDown=od.bind(this),this._onMouseMove=sd.bind(this),this._interceptControlDown=pd.bind(this),this._interceptControlUp=hd.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ua),this.update(),this.state=We.NONE}update(n=null){const t=this.object.position;at.copy(t).sub(this.target),at.applyQuaternion(this._quat),this._spherical.setFromVector3(at),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=dt:i>Math.PI&&(i-=dt),r<-Math.PI?r+=dt:r>Math.PI&&(r-=dt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const p=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=p!=this._spherical.radius}if(at.setFromSpherical(this._spherical),at.applyQuaternion(this._quatInverse),t.copy(this.target).add(at),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let p=null;if(this.object.isPerspectiveCamera){const f=at.length();p=this._clampDistance(f*this._scale);const b=f-p;this.object.position.addScaledVector(this._dollyDirection,b),this.object.updateMatrixWorld(),o=!!b}else if(this.object.isOrthographicCamera){const f=new De(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const b=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=b!==this.object.zoom;const v=new De(this._mouse.x,this._mouse.y,0);v.unproject(this.object),this.object.position.sub(v).add(f),this.object.updateMatrixWorld(),p=at.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;p!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(p).add(this.object.position):(pn.origin.copy(this.object.position),pn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(pn.direction))<nd?this.object.lookAt(this.target):(pa.setFromNormalAndCoplanarPoint(this.object.up,this.target),pn.intersectPlane(pa,this.target))))}else if(this.object.isOrthographicCamera){const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),p!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Gn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gn||this._lastTargetPosition.distanceToSquared(this.target)>Gn?(this.dispatchEvent(ua),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?dt/60*this.autoRotateSpeed*n:dt/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){at.setFromMatrixColumn(t,0),at.multiplyScalar(-n),this._panOffset.add(at)}_panUp(n,t){this.screenSpacePanning===!0?at.setFromMatrixColumn(t,1):(at.setFromMatrixColumn(t,0),at.crossVectors(this.object.up,at)),at.multiplyScalar(n),this._panOffset.add(at)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;at.copy(r).sub(this.target);let o=at.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=n-i.left,o=t-i.top,p=i.width,f=i.height;this._mouse.x=r/p*2-1,this._mouse.y=-(o/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dt*this._rotateDelta.x/t.clientHeight),this._rotateUp(dt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(dt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-dt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(dt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-dt*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),r=.5*(n.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),r=.5*(n.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,r=n.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),r=.5*(n.pageX+i.x),o=.5*(n.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dt*this._rotateDelta.x/t.clientHeight),this._rotateUp(dt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),r=.5*(n.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,r=n.pageY-t.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const p=(n.pageX+t.x)*.5,f=(n.pageY+t.y)*.5;this._updateZoomParameters(p,f)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new qe,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function id(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function ad(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function rd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ba),this.state=We.NONE;break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function od(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case Xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=We.DOLLY;break;case Xt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=We.ROTATE}break;case Xt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Jn)}function sd(e){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function ld(e){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(e.preventDefault(),this.dispatchEvent(Jn),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Ba))}function cd(e){this.enabled!==!1&&this._handleKeyDown(e)}function fd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=We.TOUCH_ROTATE;break;case zt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case zt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=We.TOUCH_DOLLY_PAN;break;case zt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Jn)}function dd(e){switch(this._trackPointer(e),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=We.NONE}}function ud(e){this.enabled!==!1&&e.preventDefault()}function pd(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hd(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}export{gd as O,md as W};
