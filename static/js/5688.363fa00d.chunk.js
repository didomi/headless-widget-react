"use strict";(self.webpackChunkreact_app_widgets=self.webpackChunkreact_app_widgets||[]).push([[5688],{1329:function(t,e,n){n.d(e,{d:function(){return l},f:function(){return p},g:function(){return o},o:function(){return m}});var r=n(1811);function o(){return{top:0,right:0,bottom:0,left:0}}var i={left:"right",right:"left",bottom:"top",top:"bottom"};function a(t){return t.replace(/left|right|bottom|top/g,(function(t){return i[t]}))}var f={start:"end",end:"start"};function u(t){return t.replace(/start|end/g,(function(t){return f[t]}))}function c(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function d(t,e){return e===r.v?c(function(t){var e=(0,r.g)(t),n=(0,r.a)(t),o=e.visualViewport,i=n.clientWidth,a=n.clientHeight,f=0,u=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(f=o.offsetLeft,u=o.offsetTop)),{width:i,height:a,x:f+(0,r.b)(t),y:u}}(t)):(0,r.e)(e)?function(t){var e=(0,r.h)(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):c(function(t){var e,n=(0,r.a)(t),o=(0,r.c)(t),i=null==(e=t.ownerDocument)?void 0:e.body,a=(0,r.m)(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),f=(0,r.m)(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),u=-o.scrollLeft+(0,r.b)(t),c=-o.scrollTop;return"rtl"===(0,r.d)(i||n).direction&&(u+=(0,r.m)(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:f,x:u,y:c}}((0,r.a)(t)))}function s(t){var e=(0,r.l)((0,r.j)(t)),n=["absolute","fixed"].indexOf((0,r.d)(t).position)>=0&&(0,r.e)(t)?(0,r.k)(t):t;return(0,r.n)(n)?e.filter((function(t){return(0,r.n)(t)&&function(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.i)(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}(t,n)&&"body"!==(0,r.o)(t)})):[]}function l(t,e){void 0===e&&(e={});var n,o=e,i=o.placement,a=void 0===i?t.placement:i,f=o.boundary,u=void 0===f?r.s:f,l=o.rootBoundary,p=void 0===l?r.v:l,m=o.elementContext,h=void 0===m?r.r:m,g=o.altBoundary,v=void 0!==g&&g,y=o.padding,b=void 0===y?0:y,x=function(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}("number"!==typeof b?b:(n=b,r.p.reduce((function(t,e){return t[e]=n,t}),{}))),w=h===r.r?r.x:r.r,O=t.elements.reference,D=t.rects.popper,k=t.elements[v?w:h],A=function(t,e,n){var o="clippingParents"===e?s(t):[].concat(e),i=[].concat(o,[n]),a=i[0],f=i.reduce((function(e,n){var o=d(t,n);return e.top=(0,r.m)(o.top,e.top),e.right=(0,r.f)(o.right,e.right),e.bottom=(0,r.f)(o.bottom,e.bottom),e.left=(0,r.m)(o.left,e.left),e}),d(t,a));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}((0,r.n)(k)?k:k.contextElement||(0,r.a)(t.elements.popper),u,p),B=(0,r.h)(O),E=(0,r.q)({reference:B,element:D,strategy:"absolute",placement:a}),W=c(Object.assign({},D,E)),j=h===r.r?W:B,H={top:A.top-j.top+x.top,bottom:j.bottom-A.bottom+x.bottom,left:A.left-j.left+x.left,right:j.right-A.right+x.right},_=t.modifiersData.offset;if(h===r.r&&_){var C=_[a];Object.keys(H).forEach((function(t){var e=[r.t,r.u].indexOf(t)>=0?1:-1,n=[r.w,r.u].indexOf(t)>=0?"y":"x";H[t]+=C[n]*e}))}return H}var p={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var i=n.mainAxis,f=void 0===i||i,c=n.altAxis,d=void 0===c||c,s=n.fallbackPlacements,p=n.padding,m=n.boundary,h=n.rootBoundary,g=n.altBoundary,v=n.flipVariations,y=void 0===v||v,b=n.allowedAutoPlacements,x=e.options.placement,w=(0,r.A)(x),O=s||(w===x||!y?[a(x)]:function(t){if((0,r.A)(t)===r.C)return[];var e=a(t);return[u(t),e,u(e)]}(x)),D=[x].concat(O).reduce((function(t,n){return t.concat((0,r.A)(n)===r.C?function(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=n.boundary,a=n.rootBoundary,f=n.padding,u=n.flipVariations,c=n.allowedAutoPlacements,d=void 0===c?r.B:c,s=(0,r.y)(o),p=s?u?r.z:r.z.filter((function(t){return(0,r.y)(t)===s})):r.p,m=p.filter((function(t){return d.indexOf(t)>=0}));0===m.length&&(m=p);var h=m.reduce((function(e,n){return e[n]=l(t,{placement:n,boundary:i,rootBoundary:a,padding:f})[(0,r.A)(n)],e}),{});return Object.keys(h).sort((function(t,e){return h[t]-h[e]}))}(e,{placement:n,boundary:m,rootBoundary:h,padding:p,flipVariations:y,allowedAutoPlacements:b}):n)}),[]),k=e.rects.reference,A=e.rects.popper,B=new Map,E=!0,W=D[0],j=0;j<D.length;j++){var H=D[j],_=(0,r.A)(H),C=(0,r.y)(H)===r.D,P=[r.w,r.u].indexOf(_)>=0,q=P?"width":"height",L=l(e,{placement:H,boundary:m,rootBoundary:h,altBoundary:g,padding:p}),N=P?C?r.t:r.E:C?r.u:r.w;k[q]>A[q]&&(N=a(N));var T=a(N),V=[];if(f&&V.push(L[_]<=0),d&&V.push(L[N]<=0,L[T]<=0),V.every((function(t){return t}))){W=H,E=!1;break}B.set(H,V)}if(E)for(var z=function(t){var e=D.find((function(e){var n=B.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return W=e,"break"},I=y?3:1;I>0;I--){if("break"===z(I))break}e.placement!==W&&(e.modifiersData[o]._skip=!0,e.placement=W,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};var m={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.offset,a=void 0===i?[0,0]:i,f=r.B.reduce((function(t,n){return t[n]=function(t,e,n){var o=(0,r.A)(t),i=[r.E,r.w].indexOf(o)>=0?-1:1,a="function"===typeof n?n(Object.assign({},e,{placement:t})):n,f=a[0],u=a[1];return f=f||0,u=(u||0)*i,[r.E,r.t].indexOf(o)>=0?{x:u,y:f}:{x:f,y:u}}(n,e.rects,a),t}),{}),u=f[e.placement],c=u.x,d=u.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=d),e.modifiersData[o]=f}}},5688:function(t,e,n){n.d(e,{p:function(){return a}});var r=n(1811),o=n(1329);function i(t,e,n){return(0,r.m)(t,(0,r.f)(e,n))}var a={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,a=t.name,f=n.mainAxis,u=void 0===f||f,c=n.altAxis,d=void 0!==c&&c,s=n.boundary,l=n.rootBoundary,p=n.altBoundary,m=n.padding,h=n.tether,g=void 0===h||h,v=n.tetherOffset,y=void 0===v?0:v,b=(0,o.d)(e,{boundary:s,rootBoundary:l,padding:m,altBoundary:p}),x=(0,r.A)(e.placement),w=(0,r.y)(e.placement),O=!w,D=(0,r.F)(x),k="x"===D?"y":"x",A=e.modifiersData.popperOffsets,B=e.rects.reference,E=e.rects.popper,W="function"===typeof y?y(Object.assign({},e.rects,{placement:e.placement})):y,j={x:0,y:0};if(A){if(u||d){var H="y"===D?r.w:r.E,_="y"===D?r.u:r.t,C="y"===D?"height":"width",P=A[D],q=A[D]+b[H],L=A[D]-b[_],N=g?-E[C]/2:0,T=w===r.D?B[C]:E[C],V=w===r.D?-E[C]:-B[C],z=e.elements.arrow,I=g&&z?(0,r.G)(z):{width:0,height:0},R=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:(0,o.g)(),F=R[H],G=R[_],M=i(0,B[C],I[C]),S=O?B[C]/2-N-M-F-W:T-M-F-W,J=O?-B[C]/2+N+M+G+W:V+M+G+W,K=e.elements.arrow&&(0,r.k)(e.elements.arrow),Q=K?"y"===D?K.clientTop||0:K.clientLeft||0:0,U=e.modifiersData.offset?e.modifiersData.offset[e.placement][D]:0,X=A[D]+S-U-Q,Y=A[D]+J-U;if(u){var Z=i(g?(0,r.f)(q,X):q,P,g?(0,r.m)(L,Y):L);A[D]=Z,j[D]=Z-P}if(d){var $="x"===D?r.w:r.E,tt="x"===D?r.u:r.t,et=A[k],nt=et+b[$],rt=et-b[tt],ot=i(g?(0,r.f)(nt,X):nt,et,g?(0,r.m)(rt,Y):rt);A[k]=ot,j[k]=ot-et}}e.modifiersData[a]=j}},requiresIfExists:["offset"]}}}]);
//# sourceMappingURL=5688.363fa00d.chunk.js.map