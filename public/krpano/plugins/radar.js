/*
	krpano 1.21 Radar Plugin (build 2023-02-09)
	https://krpano.com/plugins/radar/
*/
var krpanoplugin=function(){function J(k,b){function a(d){return"rgb("+(d>>16&255)+","+(d>>8&255)+","+(d&255)+")"}var d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("width",k);d.setAttribute("height",b);d.style.position="absolute";d.style.left="0px";d.style.top="0px";var e=document.createElementNS("http://www.w3.org/2000/svg","path");d.appendChild(e);var c={};c.svg=d;c.path=e;c.setstyle=function(d,b,k,c,f){e.setAttribute("stroke",a(d));e.setAttribute("stroke-width",
b);e.setAttribute("stroke-opacity",k);e.setAttribute("fill",a(c));e.setAttribute("fill-opacity",f)};c.drawpie=function(d,b,k,a,c){var g,f;a>c&&(g=c,c=a,a=g);a=a*Math.PI/180;c=c*Math.PI/180;f=c-a;g=(a+c)/2;var h=f>Math.PI?1:0;f>=2*Math.PI&&(f=2*Math.PI-.01);a=g-f/2;c=g+f/2;g=d+k*Math.sin(a);a=b-k*Math.cos(a);f=d+k*Math.sin(c);c=b-k*Math.cos(c);e.setAttribute("d","M "+d+","+b+" L "+g+","+a+" A "+k+","+k+" 0 "+h+" 1 "+f+","+c+" Z")};return c}function A(a){r=!0;n(a);e.mouse&&(window.addEventListener("mousemove",
n,!0),window.addEventListener("mouseup",l,!0));e.touch&&(window.addEventListener(e.touchmove,n,!0),window.addEventListener(e.touchcancel,l,!0),window.addEventListener(e.touchend,l,!0))}function l(a){e.mouse&&(window.removeEventListener("mousemove",n,!0),window.removeEventListener("mouseup",l,!0));e.touch&&(window.removeEventListener(e.touchmove,n,!0),window.removeEventListener(e.touchcancel,l,!0),window.removeEventListener(e.touchend,l,!0))}function n(a){if(null==c)l(a);else if(null!=f){a&&(a.preventDefault(),
a.stopImmediatePropagation(),a.stopPropagation());var b,g=b=0,d=f.svg.parentNode.getBoundingClientRect();e.touch?(a=a.changedTouches?a.changedTouches:[a],0<a.length&&(g=a[0],b=Math.round(g.clientX-d.left),g=Math.round(g.clientY-d.top))):(b=Math.round(a.clientX-d.left),g=Math.round(a.clientY-d.top));b=180*Math.atan2(g-.5*B*c.stagescale,b-.5*C*c.stagescale)/Math.PI;b-=p;if(1==r)D=b-Number(c.view.hlookat),r=!1;else{for(b-=D;180<b;)b-=360;for(;-180>b;)b+=360;c.view.hlookat=b}h=!0}}function E(){var e=
m/2*c.stagescale;2E3<e&&(e=2E3);var b=Math.ceil(2*e),g=2+2*q+b;if(g!=F){F=g;var d=f.svg;d.setAttribute("width",g);d.setAttribute("height",g);d.style.left=(b-g>>1)+"px";d.style.top=(b-g>>1)+"px";h=!0}b=p+t-0+c.view.hlookat;d=c.view.hfov;u&&(d=-d);a&&a.sprite&&(a.sprite.style.pointerEvents="none");var l=f.path.style;l.pointerEvents=a.enabled?"visiblePainted":"none";l.cursor=a.handcursor?"pointer":"default";if(.01<Math.abs(b-G)||.02<Math.abs(d-H))G=b,H=d,h=!0;h&&(h=!1,f.setstyle(v,q,w,x,y),f.drawpie(g/
2-.5,g/2-.5,e,b-.5*d,b+.5*d))}this.name="Radar";this.version="__BUILD_VERSION__";this.build="__BUILD_DATE__";var c=null,a=null,z=null,e=null,f=null,m=256,C=256,B=256,p=0,t=90,u=!1,x=16777215,v=16777215,y=.5,w=.3,q=0,r=!1,D=null,h=!0,I=null,F=-1,G=0,H=0;this.registerplugin=function(k,b,g){c=k;a=g;"1.18">c.version?(c.trace(3,"Radar Plugin - too old krpano version (min. 1.18)"),a=c=null):(z=c.device,e=z.browser.events,a.registerattribute("heading",0,function(a){p=Number(a);h=!0},function(){return p}),
a.registerattribute("headingoffset",90,function(a){t=Number(a);h=!0},function(){return t}),a.registerattribute("invert",!1,function(a){u="true"==String(a).toLowerCase();h=!0},function(){return u}),a.registerattribute("fillcolor",16777215,function(a){x=parseInt(a);h=!0},function(){return x}),a.registerattribute("linecolor",16777215,function(a){v=parseInt(a);h=!0},function(){return v}),a.registerattribute("fillalpha",.5,function(a){y=Number(a);h=!0},function(){return y}),a.registerattribute("linealpha",
.3,function(a){w=Number(a);h=!0},function(){return w}),a.registerattribute("linewidth",0,function(a){q=Number(a);h=!0},function(){return q}),a.registercontentsize(m,m),f=J(m,m),a._assignEvents(f.path),f.path.kobject=a,a.sprite.style.pointerEvents="none",a.sprite.appendChild(f.svg),e.mouse&&f.path.addEventListener("mousedown",A,!0),e.touch&&f.path.addEventListener(e.touchstart,A,!0),I=setInterval(E,1E3/30))};this.unloadplugin=function(){if(c&&a){clearInterval(I);try{f.path.kobject=null,a.sprite.removeChild(f.svg)}catch(e){}c=
a=null}};this.onresize=function(a,b){C=a;B=b;m=Math.max(a,b);h=!0;E();f.path.style[z.browser.css.transform]="scale("+(a/m).toFixed(6)+","+(b/m).toFixed(6)+")";return!1}};
