var x=Uint8Array,B=Uint16Array,Ne=Int32Array,we=new x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xe=new x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ke=new x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),be=function(t,e){for(var r=new B(31),n=0;n<31;++n)r[n]=e+=1<<t[n-1];for(var i=new Ne(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return{b:r,r:i}},Ae=be(we,2),ze=Ae.b,_e=Ae.r;ze[28]=258,_e[258]=28;var Ee=be(xe,0),We=Ee.b,Tt=Ee.r,te=new B(32768);for(p=0;p<32768;++p)D=(p&43690)>>1|(p&21845)<<1,D=(D&52428)>>2|(D&13107)<<2,D=(D&61680)>>4|(D&3855)<<4,te[p]=((D&65280)>>8|(D&255)<<8)>>1;var D,p,O=function(t,e,r){for(var n=t.length,i=0,a=new B(e);i<n;++i)t[i]&&++a[t[i]-1];var s=new B(e);for(i=1;i<e;++i)s[i]=s[i-1]+a[i-1]<<1;var u;if(r){u=new B(1<<e);var l=15-e;for(i=0;i<n;++i)if(t[i])for(var c=i<<4|t[i],f=e-t[i],o=s[t[i]-1]++<<f,h=o|(1<<f)-1;o<=h;++o)u[te[o]>>l]=c}else for(u=new B(n),i=0;i<n;++i)t[i]&&(u[i]=te[s[t[i]-1]++]>>15-t[i]);return u},Z=new x(288);for(p=0;p<144;++p)Z[p]=8;var p;for(p=144;p<256;++p)Z[p]=9;var p;for(p=256;p<280;++p)Z[p]=7;var p;for(p=280;p<288;++p)Z[p]=8;var p,Ue=new x(32);for(p=0;p<32;++p)Ue[p]=5;var p;var qe=O(Z,9,1);var Je=O(Ue,5,1),Q=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},z=function(t,e,r){var n=e/8|0;return(t[n]|t[n+1]<<8)>>(e&7)&r},ee=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},$e=function(t){return(t+7)/8|0},Xe=function(t,e,r){(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length);var n=new x(r-e);return n.set(t.subarray(e,r)),n};var Ye=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],w=function(t,e,r){var n=new Error(e||Ye[t]);if(n.code=t,Error.captureStackTrace&&Error.captureStackTrace(n,w),!r)throw n;return n},re=function(t,e,r,n){var i=t.length,a=n?n.length:0;if(!i||e.f&&!e.l)return r||new x(0);var s=!r||e.i!=2,u=e.i;r||(r=new x(i*3));var l=function(me){var ye=r.length;if(me>ye){var de=new x(Math.max(ye*2,me));de.set(r),r=de}},c=e.f||0,f=e.p||0,o=e.b||0,h=e.l,U=e.d,m=e.m,g=e.n,y=i*8;do{if(!h){c=z(t,f,1);var d=z(t,f+1,3);if(f+=3,d)if(d==1)h=qe,U=Je,m=9,g=5;else if(d==2){var W=z(t,f,31)+257,fe=z(t,f+10,15)+4,ce=W+z(t,f+5,31)+1;f+=14;for(var P=new x(ce),q=new x(19),b=0;b<fe;++b)q[ke[b]]=z(t,f+b*3,7);f+=fe*3;for(var le=Q(q),Ve=(1<<le)-1,Fe=O(q,le,1),b=0;b<ce;){var he=Fe[z(t,f,Ve)];f+=he&15;var v=he>>4;if(v<16)P[b++]=v;else{var M=0,j=0;for(v==16?(j=3+z(t,f,3),f+=2,M=P[b-1]):v==17?(j=3+z(t,f,7),f+=3):v==18&&(j=11+z(t,f,127),f+=7);j--;)P[b++]=M}}var ge=P.subarray(0,W),A=P.subarray(W);m=Q(ge),g=Q(A),h=O(ge,m,1),U=O(A,g,1)}else w(1);else{var v=$e(f)+4,C=t[v-4]|t[v-3]<<8,_=v+C;if(_>i){u&&w(0);break}s&&l(o+C),r.set(t.subarray(v,_),o),e.b=o+=C,e.p=f=_*8,e.f=c;continue}if(f>y){u&&w(0);break}}s&&l(o+131072);for(var Ke=(1<<m)-1,je=(1<<g)-1,J=f;;J=f){var M=h[ee(t,f)&Ke],S=M>>4;if(f+=M&15,f>y){u&&w(0);break}if(M||w(2),S<256)r[o++]=S;else if(S==256){J=f,h=null;break}else{var pe=S-254;if(S>264){var b=S-257,R=we[b];pe=z(t,f,(1<<R)-1)+ze[b],f+=R}var $=U[ee(t,f)&je],X=$>>4;$||w(3),f+=$&15;var A=We[X];if(X>3){var R=xe[X];A+=ee(t,f)&(1<<R)-1,f+=R}if(f>y){u&&w(0);break}s&&l(o+131072);var Y=o+pe;if(o<A){var ve=a-A,Ge=Math.min(A,Y);for(ve+o<0&&w(3);o<Ge;++o)r[o]=n[ve+o]}for(;o<Y;o+=4)r[o]=r[o-A],r[o+1]=r[o+1-A],r[o+2]=r[o+2-A],r[o+3]=r[o+3-A];o=Y}}e.l=h,e.p=J,e.b=o,e.f=c,h&&(c=1,e.m=m,e.d=U,e.n=g)}while(!c);return o==r.length?r:Xe(r,0,o)};var Qe=new x(0);var et=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&w(6,"invalid gzip data");var e=t[3],r=10;e&4&&(r+=(t[10]|t[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!t[r++]);return r+(e&2)},tt=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0};var rt=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&w(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&w(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function nt(t,e){return re(t,{i:2},e&&e.out,e&&e.dictionary)}function it(t,e){var r=et(t);return r+8>t.length&&w(6,"invalid gzip data"),re(t.subarray(r,-8),{i:2},e&&e.out||new x(tt(t)),e&&e.dictionary)}function at(t,e){return re(t.subarray(rt(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}function I(t,e){return t[0]==31&&t[1]==139&&t[2]==8?it(t,e):(t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31?nt(t,e):at(t,e)}var st=typeof TextDecoder<"u"&&new TextDecoder,ot=0;try{st.decode(Qe,{stream:!0}),ot=1}catch{}var Ce=(t,e)=>t*Math.pow(2,e),V=(t,e)=>Math.floor(t/Math.pow(2,e)),G=(t,e)=>Ce(t.getUint16(e+1,!0),8)+t.getUint8(e),Me=(t,e)=>Ce(t.getUint32(e+2,!0),16)+t.getUint16(e,!0),ut=(t,e,r,n,i)=>{if(t!=n.getUint8(i))return t-n.getUint8(i);let a=G(n,i+1);if(e!=a)return e-a;let s=G(n,i+4);return r!=s?r-s:0},ft=(t,e,r,n)=>{let i=Le(t,e|128,r,n);return i?{z:e,x:r,y:n,offset:i[0],length:i[1],is_dir:!0}:null},De=(t,e,r,n)=>{let i=Le(t,e,r,n);return i?{z:e,x:r,y:n,offset:i[0],length:i[1],is_dir:!1}:null},Le=(t,e,r,n)=>{let i=0,a=t.byteLength/17-1;for(;i<=a;){let s=a+i>>1,u=ut(e,r,n,t,s*17);if(u>0)i=s+1;else if(u<0)a=s-1;else return[Me(t,s*17+7),t.getUint32(s*17+13,!0)]}return null},ct=(t,e)=>t.is_dir&&!e.is_dir?1:!t.is_dir&&e.is_dir?-1:t.z!==e.z?t.z-e.z:t.x!==e.x?t.x-e.x:t.y-e.y,Se=(t,e)=>{let r=t.getUint8(e*17);return{z:r&127,x:G(t,e*17+1),y:G(t,e*17+4),offset:Me(t,e*17+7),length:t.getUint32(e*17+13,!0),is_dir:r>>7===1}},Te=t=>{let e=[],r=new DataView(t);for(let n=0;n<r.byteLength/17;n++)e.push(Se(r,n));return lt(e)},lt=t=>{t.sort(ct);let e=new ArrayBuffer(17*t.length),r=new Uint8Array(e);for(let n=0;n<t.length;n++){let i=t[n],a=i.z;i.is_dir&&(a=a|128),r[n*17]=a,r[n*17+1]=i.x&255,r[n*17+2]=i.x>>8&255,r[n*17+3]=i.x>>16&255,r[n*17+4]=i.y&255,r[n*17+5]=i.y>>8&255,r[n*17+6]=i.y>>16&255,r[n*17+7]=i.offset&255,r[n*17+8]=V(i.offset,8)&255,r[n*17+9]=V(i.offset,16)&255,r[n*17+10]=V(i.offset,24)&255,r[n*17+11]=V(i.offset,32)&255,r[n*17+12]=V(i.offset,48)&255,r[n*17+13]=i.length&255,r[n*17+14]=i.length>>8&255,r[n*17+15]=i.length>>16&255,r[n*17+16]=i.length>>24&255}return e},ht=(t,e)=>{if(t.byteLength<17)return null;let r=t.byteLength/17,n=Se(t,r-1);if(n.is_dir){let i=n.z,a=e.z-i,s=Math.trunc(e.x/(1<<a)),u=Math.trunc(e.y/(1<<a));return{z:i,x:s,y:u}}return null};async function gt(t){let e=await t.getBytes(0,512e3),r=new DataView(e.data),n=r.getUint32(4,!0),i=r.getUint16(8,!0),a=new TextDecoder("utf-8"),s=JSON.parse(a.decode(new DataView(e.data,10,n))),u=0;s.compression==="gzip"&&(u=2);let l=0;"minzoom"in s&&(l=+s.minzoom);let c=0;"maxzoom"in s&&(c=+s.maxzoom);let f=0,o=0,h=0,U=-180,m=-85,g=180,y=85;if(s.bounds){let v=s.bounds.split(",");U=+v[0],m=+v[1],g=+v[2],y=+v[3]}if(s.center){let v=s.center.split(",");f=+v[0],o=+v[1],h=+v[2]}return{specVersion:r.getUint16(2,!0),rootDirectoryOffset:10+n,rootDirectoryLength:i*17,jsonMetadataOffset:10,jsonMetadataLength:n,leafDirectoryOffset:0,leafDirectoryLength:void 0,tileDataOffset:0,tileDataLength:void 0,numAddressedTiles:0,numTileEntries:0,numTileContents:0,clustered:!1,internalCompression:1,tileCompression:u,tileType:1,minZoom:l,maxZoom:c,minLon:U,minLat:m,maxLon:g,maxLat:y,centerZoom:h,centerLon:f,centerLat:o,etag:e.etag}}async function pt(t,e,r,n,i,a,s){let u=await r.getArrayBuffer(e,t.rootDirectoryOffset,t.rootDirectoryLength,t);t.specVersion===1&&(u=Te(u));let l=De(new DataView(u),n,i,a);if(l){let o=(await e.getBytes(l.offset,l.length,s)).data,h=new DataView(o);return h.getUint8(0)==31&&h.getUint8(1)==139&&(o=I(new Uint8Array(o))),{data:o}}let c=ht(new DataView(u),{z:n,x:i,y:a});if(c){let f=ft(new DataView(u),c.z,c.x,c.y);if(f){let o=await r.getArrayBuffer(e,f.offset,f.length,t);t.specVersion===1&&(o=Te(o));let h=De(new DataView(o),n,i,a);if(h){let m=(await e.getBytes(h.offset,h.length,s)).data,g=new DataView(m);return g.getUint8(0)==31&&g.getUint8(1)==139&&(m=I(new Uint8Array(m))),{data:m}}}}}var ne={getHeader:gt,getZxy:pt};function H(t,e){return(e>>>0)*4294967296+(t>>>0)}function mt(t,e){let r=e.buf,n,i;if(i=r[e.pos++],n=(i&112)>>4,i<128||(i=r[e.pos++],n|=(i&127)<<3,i<128)||(i=r[e.pos++],n|=(i&127)<<10,i<128)||(i=r[e.pos++],n|=(i&127)<<17,i<128)||(i=r[e.pos++],n|=(i&127)<<24,i<128)||(i=r[e.pos++],n|=(i&1)<<31,i<128))return H(t,n);throw new Error("Expected varint not more than 10 bytes")}function K(t){let e=t.buf,r,n;return n=e[t.pos++],r=n&127,n<128||(n=e[t.pos++],r|=(n&127)<<7,n<128)||(n=e[t.pos++],r|=(n&127)<<14,n<128)||(n=e[t.pos++],r|=(n&127)<<21,n<128)?r:(n=e[t.pos],r|=(n&15)<<28,mt(r,t))}function yt(t,e,r,n){if(n==0){r==1&&(e[0]=t-1-e[0],e[1]=t-1-e[1]);let i=e[0];e[0]=e[1],e[1]=i}}var dt=[0,1,5,21,85,341,1365,5461,21845,87381,349525,1398101,5592405,22369621,89478485,357913941,1431655765,5726623061,22906492245,91625968981,366503875925,1466015503701,5864062014805,23456248059221,93824992236885,375299968947541,0x5555555555555];function wt(t,e,r){if(t>26)throw Error("Tile zoom level exceeds max safe number limit (26)");if(e>Math.pow(2,t)-1||r>Math.pow(2,t)-1)throw Error("tile x/y outside zoom level bounds");let n=dt[t],i=Math.pow(2,t),a=0,s=0,u=0,l=[e,r],c=i/2;for(;c>0;)a=(l[0]&c)>0?1:0,s=(l[1]&c)>0?1:0,u+=c*c*(3*a^s),yt(c,l,a,s),c=c/2;return n+u}async function oe(t,e){if(e===1||e===0)return t;if(e===2){if(typeof globalThis.DecompressionStream>"u")return I(new Uint8Array(t));{let n=new Response(t).body.pipeThrough(new globalThis.DecompressionStream("gzip"));return new Response(n).arrayBuffer()}}else throw Error("Compression method not supported")}var xt=127;function bt(t,e){let r=0,n=t.length-1;for(;r<=n;){let i=n+r>>1,a=e-t[i].tileId;if(a>0)r=i+1;else if(a<0)n=i-1;else return t[i]}return n>=0&&(t[n].runLength===0||e-t[n].tileId<t[n].runLength)?t[n]:null}var ae=class{url;customHeaders;constructor(e,r=new Headers){this.url=e,this.customHeaders=r}getKey(){return this.url}setHeaders(e){this.customHeaders=e}async getBytes(e,r,n){let i;n||(i=new AbortController,n=i.signal);let a=new Headers(this.customHeaders);a.set("Range","bytes="+e+"-"+(e+r-1));let s=await fetch(this.url,{signal:n,headers:a});if(s.status===416&&e===0){let c=s.headers.get("Content-Range");if(!c||!c.startsWith("bytes */"))throw Error("Missing content-length on 416 response");let f=+c.substr(8);s=await fetch(this.url,{signal:n,headers:{Range:"bytes=0-"+(f-1)}})}if(s.status>=300)throw Error("Bad response code: "+s.status);let u=s.headers.get("Content-Length");if(s.status===200&&(!u||+u>r))throw i&&i.abort(),Error("Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving.");return{data:await s.arrayBuffer(),etag:s.headers.get("ETag")||void 0,cacheControl:s.headers.get("Cache-Control")||void 0,expires:s.headers.get("Expires")||void 0}}};function E(t,e){let r=t.getUint32(e+4,!0),n=t.getUint32(e+0,!0);return r*Math.pow(2,32)+n}function At(t,e){let r=new DataView(t),n=r.getUint8(7);if(n>3)throw Error(`Archive is spec version ${n} but this library supports up to spec version 3`);return{specVersion:n,rootDirectoryOffset:E(r,8),rootDirectoryLength:E(r,16),jsonMetadataOffset:E(r,24),jsonMetadataLength:E(r,32),leafDirectoryOffset:E(r,40),leafDirectoryLength:E(r,48),tileDataOffset:E(r,56),tileDataLength:E(r,64),numAddressedTiles:E(r,72),numTileEntries:E(r,80),numTileContents:E(r,88),clustered:r.getUint8(96)===1,internalCompression:r.getUint8(97),tileCompression:r.getUint8(98),tileType:r.getUint8(99),minZoom:r.getUint8(100),maxZoom:r.getUint8(101),minLon:r.getInt32(102,!0)/1e7,minLat:r.getInt32(106,!0)/1e7,maxLon:r.getInt32(110,!0)/1e7,maxLat:r.getInt32(114,!0)/1e7,centerZoom:r.getUint8(118),centerLon:r.getInt32(119,!0)/1e7,centerLat:r.getInt32(123,!0)/1e7,etag:e}}function Be(t){let e={buf:new Uint8Array(t),pos:0},r=K(e),n=[],i=0;for(let a=0;a<r;a++){let s=K(e);n.push({tileId:i+s,offset:0,length:0,runLength:1}),i+=s}for(let a=0;a<r;a++)n[a].runLength=K(e);for(let a=0;a<r;a++)n[a].length=K(e);for(let a=0;a<r;a++){let s=K(e);s===0&&a>0?n[a].offset=n[a-1].offset+n[a-1].length:n[a].offset=s-1}return n}function zt(t){let e=new DataView(t);return e.getUint16(2,!0)===2?(console.warn("PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),2):e.getUint16(2,!0)===1?(console.warn("PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"),1):3}var T=class extends Error{};async function He(t,e,r,n){let i=await t.getBytes(0,16384);if(new DataView(i.data).getUint16(0,!0)!==19792)throw new Error("Wrong magic number for PMTiles archive");if(zt(i.data)<3)return[await ne.getHeader(t)];let s=i.data.slice(0,xt),u=i.etag;n&&i.etag!=n&&(console.warn("ETag conflict detected; your HTTP server might not support content-based ETag headers. ETags disabled for "+t.getKey()),u=void 0);let l=At(s,u);if(r){let c=i.data.slice(l.rootDirectoryOffset,l.rootDirectoryOffset+l.rootDirectoryLength),f=t.getKey()+"|"+(l.etag||"")+"|"+l.rootDirectoryOffset+"|"+l.rootDirectoryLength,o=Be(await e(c,l.internalCompression));return[l,[f,o.length,o]]}return[l,void 0]}async function Pe(t,e,r,n,i){let a=await t.getBytes(r,n);if(i.etag&&i.etag!==a.etag)throw new T(a.etag);let s=await e(a.data,i.internalCompression),u=Be(s);if(u.length===0)throw new Error("Empty directory is invalid");return u}var N=class{cache;maxCacheEntries;counter;prefetch;decompress;constructor(e=100,r=!0,n=oe){this.cache=new Map,this.maxCacheEntries=e,this.counter=1,this.prefetch=r,this.decompress=n}async getHeader(e,r){let n=e.getKey();if(this.cache.has(n))return this.cache.get(n).lastUsed=this.counter++,this.cache.get(n).data;let i=await He(e,this.decompress,this.prefetch,r);return i[1]&&this.cache.set(i[1][0],{lastUsed:this.counter++,data:i[1][2]}),this.cache.set(n,{lastUsed:this.counter++,data:i[0]}),this.prune(),i[0]}async getDirectory(e,r,n,i){let a=e.getKey()+"|"+(i.etag||"")+"|"+r+"|"+n;if(this.cache.has(a))return this.cache.get(a).lastUsed=this.counter++,this.cache.get(a).data;let s=await Pe(e,this.decompress,r,n,i);return this.cache.set(a,{lastUsed:this.counter++,data:s}),this.prune(),s}async getArrayBuffer(e,r,n,i){let a=e.getKey()+"|"+(i.etag||"")+"|"+r+"|"+n;if(this.cache.has(a))return this.cache.get(a).lastUsed=this.counter++,await this.cache.get(a).data;let s=await e.getBytes(r,n);if(i.etag&&i.etag!==s.etag)throw new T(i.etag);return this.cache.set(a,{lastUsed:this.counter++,data:s.data}),this.prune(),s.data}prune(){if(this.cache.size>this.maxCacheEntries){let e=1/0,r;this.cache.forEach((n,i)=>{n.lastUsed<e&&(e=n.lastUsed,r=i)}),r&&this.cache.delete(r)}}async invalidate(e,r){this.cache.delete(e.getKey()),await this.getHeader(e,r)}},se=class{cache;maxCacheEntries;counter;prefetch;decompress;constructor(e=100,r=!0,n=oe){this.cache=new Map,this.maxCacheEntries=e,this.counter=1,this.prefetch=r,this.decompress=n}async getHeader(e,r){let n=e.getKey();if(this.cache.has(n))return this.cache.get(n).lastUsed=this.counter++,await this.cache.get(n).data;let i=new Promise((a,s)=>{He(e,this.decompress,this.prefetch,r).then(u=>{u[1]&&this.cache.set(u[1][0],{lastUsed:this.counter++,data:Promise.resolve(u[1][2])}),a(u[0]),this.prune()}).catch(u=>{s(u)})});return this.cache.set(n,{lastUsed:this.counter++,data:i}),i}async getDirectory(e,r,n,i){let a=e.getKey()+"|"+(i.etag||"")+"|"+r+"|"+n;if(this.cache.has(a))return this.cache.get(a).lastUsed=this.counter++,await this.cache.get(a).data;let s=new Promise((u,l)=>{Pe(e,this.decompress,r,n,i).then(c=>{u(c),this.prune()}).catch(c=>{l(c)})});return this.cache.set(a,{lastUsed:this.counter++,data:s}),s}async getArrayBuffer(e,r,n,i){let a=e.getKey()+"|"+(i.etag||"")+"|"+r+"|"+n;if(this.cache.has(a))return this.cache.get(a).lastUsed=this.counter++,await this.cache.get(a).data;let s=new Promise((u,l)=>{e.getBytes(r,n).then(c=>{if(i.etag&&i.etag!==c.etag)throw new T(c.etag);u(c.data),this.cache.has(a),this.prune()}).catch(c=>{l(c)})});return this.cache.set(a,{lastUsed:this.counter++,data:s}),s}prune(){if(this.cache.size>=this.maxCacheEntries){let e=1/0,r;this.cache.forEach((n,i)=>{n.lastUsed<e&&(e=n.lastUsed,r=i)}),r&&this.cache.delete(r)}}async invalidate(e,r){this.cache.delete(e.getKey()),await this.getHeader(e,r)}},F=class{source;cache;decompress;constructor(e,r,n){typeof e=="string"?this.source=new ae(e):this.source=e,n?this.decompress=n:this.decompress=oe,r?this.cache=r:this.cache=new se}async getHeader(){return await this.cache.getHeader(this.source)}async getZxyAttempt(e,r,n,i){let a=wt(e,r,n),s=await this.cache.getHeader(this.source);if(s.specVersion<3)return ne.getZxy(s,this.source,this.cache,e,r,n,i);if(e<s.minZoom||e>s.maxZoom)return;let u=s.rootDirectoryOffset,l=s.rootDirectoryLength;for(let c=0;c<=3;c++){let f=await this.cache.getDirectory(this.source,u,l,s),o=bt(f,a);if(o)if(o.runLength>0){let h=await this.source.getBytes(s.tileDataOffset+o.offset,o.length,i);if(s.etag&&s.etag!==h.etag)throw new T(h.etag);return{data:await this.decompress(h.data,s.tileCompression),cacheControl:h.cacheControl,expires:h.expires}}else u=s.leafDirectoryOffset+o.offset,l=o.length;else return}throw Error("Maximum directory depth exceeded")}async getZxy(e,r,n,i){try{return await this.getZxyAttempt(e,r,n,i)}catch(a){if(a instanceof T)return this.cache.invalidate(this.source,a.message),await this.getZxyAttempt(e,r,n,i);throw a}}async getMetadataAttempt(){let e=await this.cache.getHeader(this.source),r=await this.source.getBytes(e.jsonMetadataOffset,e.jsonMetadataLength);if(e.etag&&e.etag!==r.etag)throw new T(r.etag);let n=await this.decompress(r.data,e.internalCompression),i=new TextDecoder("utf-8");return JSON.parse(i.decode(n))}async getMetadata(){try{return await this.getMetadataAttempt()}catch(e){if(e instanceof T)return this.cache.invalidate(this.source,e.message),await this.getMetadataAttempt();throw e}}};var Re=(t,e)=>e?e.replaceAll("{name}",t):t+".pmtiles",Et=/^\/(?<NAME>[0-9a-zA-Z\/!\-_\.\*\'\(\)]+)\/(?<Z>\d+)\/(?<X>\d+)\/(?<Y>\d+).(?<EXT>[a-z]+)$/,Ut=/^\/(?<NAME>[0-9a-zA-Z\/!\-_\.\*\'\(\)]+).json$/,Oe=t=>{let e=t.match(Et);if(e){let n=e.groups;return{ok:!0,name:n.NAME,tile:[+n.Z,+n.X,+n.Y],ext:n.EXT}}let r=t.match(Ut);return r?{ok:!0,name:r.groups.NAME,ext:"json"}:{ok:!1,name:"",tile:[0,0,0],ext:""}},Ze=(t,e,r,n)=>{let i="";return t.tileType===1?i=".mvt":t.tileType===2?i=".png":t.tileType===3?i=".jpg":t.tileType===4?i=".webp":t.tileType===5&&(i=".avif"),{tilejson:"3.0.0",scheme:"xyz",tiles:["https://"+r+"/"+n+"/{z}/{x}/{y}"+i],vector_layers:e.vector_layers,attribution:e.attribution,description:e.description,name:e.name,version:e.version,bounds:[t.minLon,t.minLat,t.maxLon,t.maxLat],center:[t.centerLon,t.centerLat,t.centerZoom],minzoom:t.minZoom,maxzoom:t.maxZoom}};var k=class extends Error{constructor(e){super(e)}};async function Ie(t,e){if(e===1||e===0)return t;if(e===2){let n=new Response(t).body.pipeThrough(new DecompressionStream("gzip"));return new Response(n).arrayBuffer()}else throw Error("Compression method not supported")}var Dt=new N(25,void 0,Ie),ue=class{env;archive_name;constructor(e,r){this.env=e,this.archive_name=r}getKey(){return this.archive_name}async getBytes(e,r){let n=await this.env.BUCKET.get(Re(this.archive_name,this.env.PMTILES_PATH),{range:{offset:e,length:r}});if(!n)throw new k("Archive not found");let i=n;return{data:await i.arrayBuffer(),etag:i.etag,cacheControl:i.httpMetadata?.cacheControl,expires:i.httpMetadata?.cacheExpiry?.toISOString()}}},$t={async fetch(t,e,r){if(t.method.toUpperCase()==="POST")return new Response(void 0,{status:405});let n=new URL(t.url),{ok:i,name:a,tile:s,ext:u}=Oe(n.pathname),l=caches.default;if(i){let c="";if(typeof e.ALLOWED_ORIGINS<"u")for(let g of e.ALLOWED_ORIGINS.split(","))(g===t.headers.get("Origin")||g==="*")&&(c=g);let f=await l.match(t.url);if(f){let g=new Headers(f.headers);return c&&g.set("Access-Control-Allow-Origin",c),g.set("Vary","Origin"),new Response(f.body,{headers:g,status:f.status})}let o=(g,y,d)=>{y.set("Cache-Control","max-age="+(e.CACHE_MAX_AGE||86400));let v=new Response(g,{headers:y,status:d});r.waitUntil(l.put(t.url,v));let C=new Headers(y);return c&&C.set("Access-Control-Allow-Origin",c),C.set("Vary","Origin"),new Response(g,{headers:C,status:d})},h=new Headers,U=new ue(e,a),m=new F(U,Dt,Ie);try{let g=await m.getHeader();if(!s){h.set("Content-Type","application/json");let d=Ze(g,await m.getMetadata(),e.PUBLIC_HOSTNAME||n.hostname,a);return o(JSON.stringify(d),h,200)}if(s[0]<g.minZoom||s[0]>g.maxZoom)return o(void 0,h,404);for(let d of[[1,"mvt"],[2,"png"],[3,"jpg"],[4,"webp"],[5,"avif"]])if(g.tileType===d[0]&&u!==d[1]){if(g.tileType==1&&u==="pbf")continue;return o(`Bad request: requested .${u} but archive has type .${d[1]}`,h,400)}let y=await m.getZxy(s[0],s[1],s[2]);switch(g.tileType){case 1:h.set("Content-Type","application/x-protobuf");break;case 2:h.set("Content-Type","image/png");break;case 3:h.set("Content-Type","image/jpeg");break;case 4:h.set("Content-Type","image/webp");break}return y?o(y.data,h,200):o(void 0,h,204)}catch(g){if(g instanceof k)return o("Archive not found",h,404);throw g}}return new Response("Invalid URL",{status:404})}};export{$t as default};
//# sourceMappingURL=index.js.map
