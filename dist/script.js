function SfxrParams(){this.setSettings=function(e){for(var t=0;t<24;t++)this[String.fromCharCode(97+t)]=e[t]||0;this.c<.01&&(this.c=.01);var s=this.b+this.c+this.e;if(s<.18){var i=.18/s;this.b*=i,this.c*=i,this.e*=i}}}function SfxrSynth(){this._params=new SfxrParams;var e,t,s,i,r,h,a,n,o,c,A,d;this.reset=function(){var e=this._params;i=100/(e.f*e.f+.001),r=100/(e.g*e.g+.001),h=1-e.h*e.h*e.h*.01,a=-e.i*e.i*e.i*1e-6,e.a||(A=.5-e.n/2,d=5e-5*-e.o),n=1+e.l*e.l*(e.l>0?-.9:10),o=0,c=1==e.m?0:(1-e.m)*(1-e.m)*2e4+32},this.totalReset=function(){this.reset();var i=this._params;return e=i.b*i.b*1e5,t=i.c*i.c*1e5,s=i.e*i.e*1e5+12,3*((e+t+s)/3|0)},this.synthWave=function(l,p){var m=this._params,f=1!=m.s||m.v,w=m.v*m.v*.1,u=1+3e-4*m.w,x=m.s*m.s*m.s*.1,y=1+1e-4*m.t,g=1!=m.s,v=m.x*m.x,b=m.g,G=m.q||m.r,S=m.r*m.r*m.r*.2,k=m.q*m.q*(m.q<0?-1020:1020),W=m.p?32+((1-m.p)*(1-m.p)*2e4|0):0,C=m.d,V=m.j/2,D=m.k*m.k*.01,R=m.a,L=e,Q=1/e,B=1/t,M=1/s,E=5/(1+m.u*m.u*20)*(.01+x);E>.8&&(E=.8),E=1-E;for(var U,X,q,H,I,J,T=!1,K=0,F=0,P=0,z=0,j=0,O=0,Z=0,Y=0,N=0,_=0,$=new Array(1024),ee=new Array(32),te=$.length;te--;)$[te]=0;for(te=ee.length;te--;)ee[te]=2*Math.random()-1;for(te=0;te<p;te++){if(T)return te;if(W&&++N>=W&&(N=0,this.reset()),c&&++o>=c&&(c=0,i*=n),h+=a,(i*=h)>r&&(i=r,b>0&&(T=!0)),X=i,V>0&&(_+=D,X*=1+Math.sin(_)*V),(X|=0)<8&&(X=8),R||((A+=d)<0?A=0:A>.5&&(A=.5)),++F>L)switch(F=0,++K){case 1:L=t;break;case 2:L=s}switch(K){case 0:P=F*Q;break;case 1:P=1+2*(1-F*B)*C;break;case 2:P=1-F*M;break;case 3:P=0,T=!0}G&&((q=0|(k+=S))<0?q=-q:q>1023&&(q=1023)),f&&u&&((w*=u)<1e-5?w=1e-5:w>.1&&(w=.1)),J=0;for(var se=8;se--;){if(++Z>=X&&(Z%=X,3==R))for(var ie=ee.length;ie--;)ee[ie]=2*Math.random()-1;switch(R){case 0:I=Z/X<A?.5:-.5;break;case 1:I=1-Z/X*2;break;case 2:I=.225*(((I=1.27323954*(H=6.28318531*((H=Z/X)>.5?H-1:H))+.405284735*H*H*(H<0?1:-1))<0?-1:1)*I*I-I)+I;break;case 3:I=ee[Math.abs(32*Z/X|0)]}f&&(U=O,(x*=y)<0?x=0:x>.1&&(x=.1),g?(j+=(I-O)*x,j*=E):(O=I,j=0),z+=(O+=j)-U,I=z*=1-w),G&&($[Y%1024]=I,I+=$[(Y-q+1024)%1024],Y++),J+=I}J*=.125*P*v,l[te]=J>=1?32767:J<=-1?-32768:32767*J|0}return p}}var synth=new SfxrSynth,jsfxr=function(e){synth._params.setSettings(e);var t=synth.totalReset(),s=new Uint8Array(4*((t+1)/2|0)+44),i=2*synth.synthWave(new Uint16Array(s.buffer,44),t),r=new Uint32Array(s.buffer,0,44);r[0]=1179011410,r[1]=i+36,r[2]=1163280727,r[3]=544501094,r[4]=16,r[5]=65537,r[6]=44100,r[7]=88200,r[8]=1048578,r[9]=1635017060,r[10]=i,i+=44;for(var h=0,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="data:audio/wav;base64,";h<i;h+=3){var o=s[h]<<16|s[h+1]<<8|s[h+2];n+=a[o>>18]+a[o>>12&63]+a[o>>6&63]+a[63&o]}return n};"function"==typeof require?module.exports=jsfxr:this.jsfxr=jsfxr;var Game;!function(e){class t{constructor(e,t,s){this.pos=e,this.w=t,this.h=s}test(e){return this.pos.x<e.pos.x+e.w&&this.pos.x+this.w>e.pos.x&&this.pos.y<e.pos.y+e.h&&this.h+this.pos.y>e.pos.y}intersect(s){let i=Math.round(this.pos.x),r=Math.round(this.pos.y),h=i+this.w,a=r+this.h,n=Math.round(s.pos.x),o=Math.round(s.pos.y),c=n+s.w,A=o+s.h,d=i<n?n:i,l=r<o?o:r,p=h<c?h:c,m=a<A?a:A;return new t(new e.Vec(d,l),p-d,m-l)}clone(){return new t(this.pos.clone(),this.w,this.h)}}e.Box=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s,i,r=0){this.collided=new e.Vec(0,0),this.frame=0,this.walk=!1,this.box=new e.Box(t,16,16),this.speed=s,this.sprite=i,this.color=r}render(e){this.sprite.render(e,this.box,this.color,3!=this.frame?this.frame:1)}update(e){e%8==0&&(this.frame=++this.frame%3),this.collided.y&&(this.speed.y=-this.speed.y),this.collided.x&&(this.speed.x=-this.speed.x)}}e.Enemy=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s,i,r){this.collided=new e.Vec(0,0),this.face=0,this.color=0,this.walk=!0,this.frame=1,this.jetSprite=r,this.sprite=i,this.speed=new e.Vec(0,1),this.box=new e.Box(new e.Vec(t,s),16,24)}render(e){let t=this.box,s=2*this.color+this.face,i=this.frame;this.walk?(i=i<3?i:1,this.sprite.render(e,t,s,i+1)):this.sprite.render(e,t,s,0)}renderJet(e){this.walk||this.jetSprite.render(e,this.box,this.face+2,this.frame)}update(e){e%8==0&&(this.walk?0!=this.speed.x&&(this.frame=++this.frame%4):this.frame=++this.frame%3)}}e.Hero=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s,i,r,h=0){this.box=new e.Box(new e.Vec(t,s),i,8),this.sprite=r,this.color=h}render(e){if(!this.sprite)return;let t=this.color,s=this.box.clone(),i=Math.round(s.w/8)-1;s.w=8,this.sprite.render(e,s,t,0);for(let r=1;r<i;r++)s.pos.x+=s.w,this.sprite.render(e,s,t,1);s.pos.x+=s.w,this.sprite.render(e,s,t,2)}}e.Platform=t}(Game||(Game={}));var Game;!function(e){class t{constructor(e,t){this.tick=0,this.width=256,this.ictx=e,this.sprite=t,this.initHero(),this.initShip(),this.initPlatforms(),this.initEnemies()}ready(){return e.Sprite.load==e.Sprite.loaded}initHero(){const t=this.sprite.crop(this.ictx,0,0,64,48,[]),s=this.sprite.crop(this.ictx,64,0,48,48,[[255,204,0]]);this.hero=new e.Hero(96,160,t,s)}initShip(){const t=this.sprite.crop(this.ictx,0,88,64,48,[[255,102,255]]);this.ship=new e.Ship(160,136,t)}initPlatforms(){const t=this.sprite.crop(this.ictx,0,80,24,8,[[0,204,0],[255,204,0]]);this.platforms=[new e.Platform(-50,0,350,null),new e.Platform(32,72,48,t,1),new e.Platform(120,96,32,t,1),new e.Platform(192,48,48,t,1),new e.Platform(-50,184,350,t,2)]}initEnemies(){const t=new e.Vec(.5,-.5),s=this.sprite.crop(this.ictx,0,48,48,16,[[255,102,102,192],[255,102,255,192],[102,102,255,192],[102,255,255,192]]);this.enemies=[];for(let i=0;i<4;i++){let r=new e.Enemy(new e.Vec(0,40*i+20),t.clone(),s,i+1);this.enemies.push(r)}}back(e){if(this.cache)return void e.drawImage(this.cache,0,0);let t=e.createLinearGradient(0,0,0,192);t.addColorStop(0,"#002"),t.addColorStop(1,"#224"),e.fillStyle=t,e.fillRect(0,0,e.canvas.width,e.canvas.height),this.platforms.forEach(t=>{t.render(e)}),this.cache=new Image,this.cache.src=e.canvas.toDataURL()}render(e){this.back(e),this.ship.render(e),this.hero.render(e),this.hero.renderJet(e),this.enemies.forEach(t=>{t.render(e)})}update(){let e=this.hero;e.update(this.tick),this.move(e);for(let t=0;t<this.enemies.length;t++){let s=this.enemies[t];s.update(this.tick),this.move(s),this.collide(e,s)&&this.enemies.splice(t,1)}this.tick++}collide(e,t){let s=this.ictx,i=this.width,r=e.box.clone(),h=t.box.clone(),a=!1;if(!r.test(h)&&(r.pos.x+r.w>i&&(r.pos.x-=i,a=!0),h.pos.x+h.w>i&&(h.pos.x-=i,a=!0),!a||!r.test(h)))return!1;let n=r.intersect(h),o=Math.round(n.pos.x),c=Math.round(n.pos.y),A=n.w+1,d=n.h+1;s.clearRect(o,c,A,d),e.render(s);let l=s.getImageData(o,c,A,d);s.clearRect(o,c,A,d),t.render(s);let p=s.getImageData(o,c,A,d),m=l.data.length;for(let e=3;e<m;e+=20)if(l.data[e]&&p.data[e])return!0;return!1}move(e){let t=e.collided,s=e.speed,i=e.box.pos,r=i.clone(),h=!1;i.x+=s.x,i.x>this.width?i.x-=this.width:i.x<0&&(i.x+=this.width),t.x=0,this.platforms.forEach(s=>{s.box.test(e.box)&&(i.x=r.x,t.x=1)}),i.y+=s.y,t.y=0,this.platforms.forEach(a=>{a.box.test(e.box)&&(i.y=r.y,t.y=1,s.y>0&&(h=!0))}),e.walk=h}}e.Scene=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s,i){this.sprite=i,this.boxes=[new e.Box(new e.Vec(t,s),16,16),new e.Box(new e.Vec(t,s+16),16,16),new e.Box(new e.Vec(t,s+32),16,16)]}render(e){this.boxes.forEach((t,s)=>{this.sprite.render(e,t,s,0)})}}e.Ship=t}(Game||(Game={}));var Game;!function(e){class t{constructor(e,s,i=null){t.load++,this.img=new Image,this.img.onload=(()=>{t.loaded++,i&&i.call(this)}),this.img.src=e,this.width=s}render(e,t,s,i){let r=t.pos,h=r.x,a=r.y,n=t.w,o=t.h;s*=o,e.drawImage(this.img,n*i,s,n,o,h,a,n,o),h+n>this.width&&e.drawImage(this.img,n*i,s,n,o,h-this.width,a,n,o)}crop(e,s,i,r,h,a=[],n=!1,o=!1){let c=e.canvas,A=c.width,d=c.height,l=a.length;if(c.width=r,c.height=h*(l+1),e.save(),e.translate(n?r:0,o?h:0),e.scale(n?-1:1,o?-1:1),e.drawImage(this.img,s,i,r,h,0,0,r,h),e.restore(),l>0){const t=e.getImageData(0,0,c.width,c.height),s=t.data.length/(l+1);for(let e=0;e<s;e+=4)if(t.data[e+3])for(let i=0;i<4;i++)for(let r=0;r<l;r++){let h=t.data[e+i];a[r].length>i&&(h-=255-a[r][i]);let n=(r+1)*s+e+i;t.data[n]=h>0?h:0}e.putImageData(t,0,0)}const p=new t(c.toDataURL(),this.width);return c.width=A,c.height=d,p}}t.load=0,t.loaded=0,e.Sprite=t}(Game||(Game={}));var Game;!function(e){class t{constructor(e,t){this.x=e,this.y=t}clone(){return new t(this.x,this.y)}}e.Vec=t}(Game||(Game={}));var Game;!function(e){function t(e,t){return(t||document).querySelector(e)}function s(e,t,s){e.addEventListener(t,s,!1)}function i(){let e=document.body,t=e.clientWidth/e.clientHeight<a.width/a.height;a.style.width=t?"100%":"",a.style.height=t?"":"100%"}function r(){const e=o.hero;s(document,"keydown",t=>{let s=t.keyCode;38==s||87==s||119==s?e.speed.y=-1:37==s||65==s||97==s?(e.speed.x=-1,e.face=0):39!=s&&68!=s&&100!=s||(e.speed.x=1,e.face=1)}),s(document,"keyup",t=>{let s=t.keyCode;38==s||87==s||119==s||40==s||83==s||115==s?e.speed.y=1:37!=s&&65!=s&&97!=s&&39!=s&&68!=s&&100!=s||(e.speed.x=0)}),s(window,"resize",i)}function h(){requestAnimationFrame(()=>{h()}),o.ready()&&(o.update(),o.render(n))}let a,n,o;s(window,"load",()=>{a=t("#game"),n=a.getContext("2d");const s=new e.Sprite("data:image/png;base64,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",a.width,()=>{o=new e.Scene(t("#test").getContext("2d"),s),i(),r(),h()})})}(Game||(Game={}));