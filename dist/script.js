function SfxrParams(){this.setSettings=function(t){for(var e=0;e<24;e++)this[String.fromCharCode(97+e)]=t[e]||0;this.c<.01&&(this.c=.01);var s=this.b+this.c+this.e;if(s<.18){var i=.18/s;this.b*=i,this.c*=i,this.e*=i}}}function SfxrSynth(){this._params=new SfxrParams;var t,e,s,i,r,h,a,n,o,c,m,d;this.reset=function(){var t=this._params;i=100/(t.f*t.f+.001),r=100/(t.g*t.g+.001),h=1-t.h*t.h*t.h*.01,a=-t.i*t.i*t.i*1e-6,t.a||(m=.5-t.n/2,d=5e-5*-t.o),n=1+t.l*t.l*(t.l>0?-.9:10),o=0,c=1==t.m?0:(1-t.m)*(1-t.m)*2e4+32},this.totalReset=function(){this.reset();var i=this._params;return t=i.b*i.b*1e5,e=i.c*i.c*1e5,s=i.e*i.e*1e5+12,3*((t+e+s)/3|0)},this.synthWave=function(l,u){var p=this._params,f=1!=p.s||p.v,w=p.v*p.v*.1,x=1+3e-4*p.w,y=p.s*p.s*p.s*.1,g=1+1e-4*p.t,S=1!=p.s,b=p.x*p.x,v=p.g,G=p.q||p.r,A=p.r*p.r*p.r*.2,k=p.q*p.q*(p.q<0?-1020:1020),B=p.p?32+((1-p.p)*(1-p.p)*2e4|0):0,j=p.d,R=p.j/2,Y=p.k*p.k*.01,M=p.a,I=t,C=1/t,z=1/e,E=1/s,q=5/(1+p.u*p.u*20)*(.01+y);q>.8&&(q=.8),q=1-q;for(var P,D,O,W,T,Q,V=!1,J=0,N=0,Z=0,H=0,K=0,L=0,F=0,U=0,X=0,_=0,$=new Array(1024),tt=new Array(32),et=$.length;et--;)$[et]=0;for(et=tt.length;et--;)tt[et]=2*Math.random()-1;for(et=0;et<u;et++){if(V)return et;if(B&&++X>=B&&(X=0,this.reset()),c&&++o>=c&&(c=0,i*=n),h+=a,(i*=h)>r&&(i=r,v>0&&(V=!0)),D=i,R>0&&(_+=Y,D*=1+Math.sin(_)*R),(D|=0)<8&&(D=8),M||((m+=d)<0?m=0:m>.5&&(m=.5)),++N>I)switch(N=0,++J){case 1:I=e;break;case 2:I=s}switch(J){case 0:Z=N*C;break;case 1:Z=1+2*(1-N*z)*j;break;case 2:Z=1-N*E;break;case 3:Z=0,V=!0}G&&((O=0|(k+=A))<0?O=-O:O>1023&&(O=1023)),f&&x&&((w*=x)<1e-5?w=1e-5:w>.1&&(w=.1)),Q=0;for(var st=8;st--;){if(++F>=D&&(F%=D,3==M))for(var it=tt.length;it--;)tt[it]=2*Math.random()-1;switch(M){case 0:T=F/D<m?.5:-.5;break;case 1:T=1-F/D*2;break;case 2:T=.225*(((T=1.27323954*(W=6.28318531*((W=F/D)>.5?W-1:W))+.405284735*W*W*(W<0?1:-1))<0?-1:1)*T*T-T)+T;break;case 3:T=tt[Math.abs(32*F/D|0)]}f&&(P=L,(y*=g)<0?y=0:y>.1&&(y=.1),S?(K+=(T-L)*y,K*=q):(L=T,K=0),H+=(L+=K)-P,T=H*=1-w),G&&($[U%1024]=T,T+=$[(U-O+1024)%1024],U++),Q+=T}Q*=.125*Z*b,l[et]=Q>=1?32767:Q<=-1?-32768:32767*Q|0}return u}}var synth=new SfxrSynth;window.jsfxr=function(t){synth._params.setSettings(t);var e=synth.totalReset(),s=new Uint8Array(4*((e+1)/2|0)+44),i=2*synth.synthWave(new Uint16Array(s.buffer,44),e),r=new Uint32Array(s.buffer,0,44);return r[0]=1179011410,r[1]=i+36,r[2]=1163280727,r[3]=544501094,r[4]=16,r[5]=65537,r[6]=44100,r[7]=88200,r[8]=1048578,r[9]=1635017060,r[10]=i,s.buffer};var Game;!function(t){class e{constructor(t,e,s){this.pos=t,this.w=e,this.h=s}test(t){return this.pos.x<t.pos.x+t.w&&this.pos.x+this.w>t.pos.x&&this.pos.y<t.pos.y+t.h&&this.h+this.pos.y>t.pos.y}intersect(s){let i=Math.round(this.pos.x),r=Math.round(this.pos.y),h=i+this.w,a=r+this.h,n=Math.round(s.pos.x),o=Math.round(s.pos.y),c=n+s.w,m=o+s.h,d=i<n?n:i,l=r<o?o:r,u=h<c?h:c,p=a<m?a:m;return new e(new t.Vec(d,l),u-d,p-l)}clone(){return new e(this.pos.clone(),this.w,this.h)}}t.Box=e}(Game||(Game={}));var Game;!function(t){class e{constructor(e,s){this.frame=0,this.end=!1,this.box=new t.Box(e,16,16),this.sprite=s}render(t){this.frame<3&&this.sprite.render(t,this.box,1,this.frame)}update(t){t%4==0&&(this.end=++this.frame>2)}}t.Bumm=e}(Game||(Game={}));var Game;!function(t){class e{constructor(e,s,i,r=0){this.collided=new t.Vec(0,0),this.frame=0,this.walk=!1,this.box=new t.Box(e,16,16),this.speed=s,this.sprite=i,this.color=r}render(t){this.sprite.render(t,this.box,this.color,3!=this.frame?this.frame:1)}update(t){t%8==0&&(this.frame=++this.frame%3),this.collided.y&&(this.speed.y=-this.speed.y),this.collided.x&&(this.speed.x=-this.speed.x)}}t.Enemy=e}(Game||(Game={}));var Game;!function(t){class e{constructor(e,s,i,r){this.collided=new t.Vec(0,0),this.speed=new t.Vec(0,1),this.face=0,this.color=0,this.walk=!0,this.frame=1,this.jetSprite=r,this.sprite=i,this.box=new t.Box(new t.Vec(e,s),16,24)}render(t){let e=this.box,s=2*this.color+this.face,i=this.frame;this.walk?(i=i<3?i:1,this.sprite.render(t,e,s,i+1)):this.sprite.render(t,e,s,0)}renderJet(t){this.walk||this.jetSprite.render(t,this.box,this.face+2,this.frame)}update(t){t%8==0&&(this.walk?0!=this.speed.x&&(this.frame=++this.frame%4):this.frame=++this.frame%3)}}t.Hero=e}(Game||(Game={}));var Game;!function(t){class e{constructor(e,s,i,r,h=0){this.box=new t.Box(new t.Vec(e,s),i,8),this.sprite=r,this.color=h}render(t){if(!this.sprite)return;let e=this.color,s=this.box.clone(),i=Math.round(s.w/8)-1;s.w=8,this.sprite.render(t,s,e,0);for(let r=1;r<i;r++)s.pos.x+=s.w,this.sprite.render(t,s,e,1);s.pos.x+=s.w,this.sprite.render(t,s,e,2)}}t.Platform=e}(Game||(Game={}));var Game;!function(t){class e{constructor(e,s){this.tick=0,this.width=256,this.bumms=[],this.jetSound=null,this.ictx=e,this.sprite=s,this.bummSprite=s.crop(e,0,136,48,16,[[255,255,102,192]]),this.initHero(),this.initShip(),this.initPlatforms(),this.initEnemies(),this.bummSfx=new t.Sfx([3,,.38,.47,.29,.09,,,,,,,,,,.55,.34,-.13,1,,,,,.5]),this.jetSfx=new t.Sfx([3,,1,,.08,.61,,.76,.12,,-.96,-.14,.29,.34,-.91,,-.26,.01,.63,0,.18,,,.5])}ready(){return t.Sprite.load==t.Sprite.loaded}initHero(){const e=this.sprite.crop(this.ictx,0,0,64,48,[]),s=this.sprite.crop(this.ictx,64,0,48,48,[[255,204,0]]);this.hero=new t.Hero(96,160,e,s)}initShip(){const e=this.sprite.crop(this.ictx,0,88,64,48,[[255,102,255]]);this.ship=new t.Ship(160,136,e)}initPlatforms(){const e=this.sprite.crop(this.ictx,0,80,24,8,[[0,204,0],[255,204,0]]);this.platforms=[new t.Platform(-50,0,350,null),new t.Platform(32,72,48,e,1),new t.Platform(120,96,32,e,1),new t.Platform(192,48,48,e,1),new t.Platform(-50,184,350,e,2)]}initEnemies(){const e=new t.Vec(.5,-.5),s=this.sprite.crop(this.ictx,0,48,48,16,[[255,102,102,192],[255,102,255,192],[102,102,255,192],[102,255,255,192]]);this.enemies=[];for(let i=0;i<4;i++){let r=new t.Enemy(new t.Vec(0,40*i+20),e.clone(),s,i+1);this.enemies.push(r)}}back(t){if(this.cache)return void t.drawImage(this.cache,0,0);let e=t.createLinearGradient(0,0,0,192);e.addColorStop(0,"#002"),e.addColorStop(1,"#224"),t.fillStyle=e,t.fillRect(0,0,t.canvas.width,t.canvas.height),this.platforms.forEach(e=>{e.render(t)}),this.cache=new Image,this.cache.src=t.canvas.toDataURL()}render(t){this.back(t),this.ship.render(t),this.hero.render(t),this.hero.renderJet(t),this.enemies.forEach(e=>{e.render(t)}),this.bumms.forEach(e=>{e.render(t)})}update(){let e=this.hero;e.update(this.tick),this.move(e),e.walk&&this.jetSound&&(this.jetSound.stop(),this.jetSound=null),e.walk||this.jetSound||(this.jetSound=this.jetSfx.play(.5,!0));let s=0;for(;s<this.enemies.length;){let i=this.enemies[s];i.update(this.tick),this.move(i),this.collide(e,i)?(this.enemies.splice(s,1),this.bumms.push(new t.Bumm(i.box.pos.clone(),this.bummSprite)),this.bummSfx.play()):s++}for(s=0;s<this.bumms.length;){let t=this.bumms[s];t.update(this.tick),t.end?this.bumms.splice(s,1):s++}this.tick++}collide(t,e){let s=this.ictx,i=this.width,r=t.box.clone(),h=e.box.clone(),a=!1;if(!r.test(h)&&(r.pos.x+r.w>i&&(r.pos.x-=i,a=!0),h.pos.x+h.w>i&&(h.pos.x-=i,a=!0),!a||!r.test(h)))return!1;let n=r.intersect(h),o=Math.round(n.pos.x),c=Math.round(n.pos.y),m=n.w+1,d=n.h+1;s.clearRect(o,c,m,d),t.render(s);let l=s.getImageData(o,c,m,d);s.clearRect(o,c,m,d),e.render(s);let u=s.getImageData(o,c,m,d),p=l.data.length;for(let t=3;t<p;t+=20)if(l.data[t]&&u.data[t])return!0;return!1}move(t){let e=t.collided,s=t.speed,i=t.box.pos,r=i.clone(),h=!1;i.x+=s.x,i.x>this.width?i.x-=this.width:i.x<0&&(i.x+=this.width),e.x=0,this.platforms.forEach(s=>{s.box.test(t.box)&&(i.x=r.x,e.x=1)}),i.y+=s.y,e.y=0,this.platforms.forEach(a=>{a.box.test(t.box)&&(i.y=r.y,e.y=1,s.y>0&&(h=!0))}),t.walk=h}}t.Scene=e}(Game||(Game={}));var Game;!function(t){class e{constructor(t){const s=jsfxr(t);e.ctx||(e.ctx=new AudioContext,e.master=e.ctx.createGain(),e.master.connect(e.ctx.destination)),e.ctx.decodeAudioData(s,t=>{this.buffer=t})}play(t=1,s=!1){const i=e.ctx.createGain(),r=e.ctx.createBufferSource();return i.connect(e.master),i.gain.value=t,r.loop=s,r.buffer=this.buffer,r.connect(i),r.start(e.ctx.currentTime),r}}t.Sfx=e}(Game||(Game={}));var Game;!function(t){class e{constructor(e,s,i){this.sprite=i,this.boxes=[new t.Box(new t.Vec(e,s),16,16),new t.Box(new t.Vec(e,s+16),16,16),new t.Box(new t.Vec(e,s+32),16,16)]}render(t){this.boxes.forEach((e,s)=>{this.sprite.render(t,e,s,0)})}}t.Ship=e}(Game||(Game={}));var Game;!function(t){class e{constructor(t,s,i=null){e.load++,this.img=new Image,this.img.onload=(()=>{e.loaded++,i&&i.call(this)}),this.img.src=t,this.width=s}render(t,e,s,i){let r=e.pos,h=r.x,a=r.y,n=e.w,o=e.h;s*=o,t.drawImage(this.img,n*i,s,n,o,h,a,n,o),h+n>this.width&&t.drawImage(this.img,n*i,s,n,o,h-this.width,a,n,o)}crop(t,s,i,r,h,a=[],n=!1,o=!1){let c=t.canvas,m=c.width,d=c.height,l=a.length;if(c.width=r,c.height=h*(l+1),t.save(),t.translate(n?r:0,o?h:0),t.scale(n?-1:1,o?-1:1),t.drawImage(this.img,s,i,r,h,0,0,r,h),t.restore(),l>0){const e=t.getImageData(0,0,c.width,c.height),s=e.data.length/(l+1);for(let t=0;t<s;t+=4)if(e.data[t+3])for(let i=0;i<4;i++)for(let r=0;r<l;r++){let h=e.data[t+i];a[r].length>i&&(h-=255-a[r][i]);let n=(r+1)*s+t+i;e.data[n]=h>0?h:0}t.putImageData(e,0,0)}const u=new e(c.toDataURL(),this.width);return c.width=m,c.height=d,u}}e.load=0,e.loaded=0,t.Sprite=e}(Game||(Game={}));var Game;!function(t){class e{constructor(t,e){this.x=t,this.y=e}clone(){return new e(this.x,this.y)}}t.Vec=e}(Game||(Game={}));var Game;!function(t){function e(t,e){return(e||document).querySelector(t)}function s(t,e,s){t.addEventListener(e,s,!1)}function i(){let t=document.body,e=t.clientWidth/t.clientHeight<a.width/a.height;a.style.width=e?"100%":"",a.style.height=e?"":"100%"}function r(){const t=o.hero;s(document,"keydown",e=>{let s=e.keyCode;38==s||87==s||119==s?t.speed.y=-1:37==s||65==s||97==s?(t.speed.x=-1,t.face=0):39!=s&&68!=s&&100!=s||(t.speed.x=1,t.face=1)}),s(document,"keyup",e=>{let s=e.keyCode;38==s||87==s||119==s||40==s||83==s||115==s?t.speed.y=1:37!=s&&65!=s&&97!=s&&39!=s&&68!=s&&100!=s||(t.speed.x=0)}),s(window,"resize",i)}function h(){requestAnimationFrame(()=>{h()}),o.ready()&&(o.update(),o.render(n))}let a,n,o;s(window,"load",()=>{a=e("#game"),n=a.getContext("2d");const s=new t.Sprite("data:image/gif;base64,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",a.width,()=>{o=new t.Scene(e("#test").getContext("2d"),s),i(),r(),h()})})}(Game||(Game={}));