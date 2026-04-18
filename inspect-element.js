(function(){
if(document.getElementById('__dp'))return;
function el(tag,css,txt){let e=document.createElement(tag);if(css)e.style.cssText=css;if(txt)e.textContent=txt;return e}
function btn(icon,label,desc,fn){let b=el('button');b.style.cssText='display:block;width:100%;text-align:left;padding:8px 12px;margin:4px 0;background:#16213e;border:1px solid #2a2a5a;border-radius:6px;color:#aaaaff;font-size:12px;cursor:pointer;font-family:monospace';b.onmouseenter=()=>{b.style.background='#1e2a5a';b.style.color='#fff'};b.onmouseleave=()=>{b.style.background='#16213e';b.style.color='#aaaaff'};let sp=el('span','font-size:10px;color:#555588;display:block;margin-top:2px',desc);b.append(icon+' '+label,sp);b.onclick=fn;return b}
function sec(t){let d=el('div','font-size:10px;color:#555588;margin:8px 0 4px;text-transform:uppercase;letter-spacing:1px',t);return d}
function tog(label,fn){let row=el('div','display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1a1a3a');let lbl=el('span','font-size:12px;color:#aaaacc',label);let t=el('div','width:32px;height:17px;background:#2a2a5a;border-radius:9px;cursor:pointer;position:relative');let knob=el('div','width:13px;height:13px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transition:left .2s');t.appendChild(knob);t.onclick=()=>{let on=t.dataset.on=t.dataset.on==='1'?'0':'1';t.style.background=on==='1'?'#4444aa':'#2a2a5a';knob.style.left=on==='1'?'17px':'2px';fn(on==='1')};row.append(lbl,t);return row}

let p=el('div','position:fixed;top:60px;left:60px;width:380px;background:#0f0f23;border:1px solid #4a4a8a;border-radius:12px;font-family:monospace;z-index:999999;box-shadow:0 8px 32px rgba(0,0,0,.6);color:#e0e0ff;user-select:none');
p.id='__dp';

// Titlebar
let tb=el('div','background:#16213e;padding:8px 12px;border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:space-between;cursor:grab');
let dots=el('div','display:flex;gap:6px;align-items:center');
let dr=el('div','width:12px;height:12px;border-radius:50%;background:#ff5f57;cursor:pointer');dr.title='close';dr.onclick=()=>p.remove();
let dy=el('div','width:12px;height:12px;border-radius:50%;background:#febc2e');
let dg=el('div','width:12px;height:12px;border-radius:50%;background:#28c840');
dots.append(dr,dy,dg);
let tt=el('span','font-size:12px;color:#8888bb;letter-spacing:1px','⚡ DEVTOOLS+');
let ver=el('span','font-size:10px;color:#444466','v1.2');
tb.append(dots,tt,ver);

// Tabs
let tabBar=el('div','display:flex;border-bottom:1px solid #2a2a5a;background:#16213e');
let tabs={};let panels={};
['Executables','Console','Tweaks'].forEach(name=>{
  let t=el('div','padding:6px 12px;font-size:11px;cursor:pointer;color:#7777aa;border-bottom:2px solid transparent',name);
  t.onclick=()=>switchTab(name);tabs[name]=t;tabBar.appendChild(t);
});

let body=el('div','padding:12px;max-height:400px;overflow-y:auto');

// --- Executables ---
let te=el('div');
te.append(
  btn('🎮','Blooket Cheats','Activate Blooket cheats GUI',()=>__blooket())
);

// --- Console ---
let tc=el('div');
let outDiv=el('div','background:#0d1117;border:1px solid #2a2a5a;border-radius:6px;padding:10px;font-size:11px;color:#00ff88;min-height:60px;max-height:150px;overflow-y:auto;white-space:pre-wrap;word-break:break-all');
let initMsg=document.createTextNode('// Output appears here...');
outDiv.appendChild(initMsg);
let ir=el('div','display:flex;gap:6px;margin-top:8px');
let ci=el('input','flex:1;background:#0d1117;border:1px solid #2a2a5a;border-radius:6px;padding:6px 8px;color:#00ff88;font-size:11px;font-family:monospace;outline:none');
ci.placeholder='JS expression...';ci.onkeydown=e=>{if(e.key==='Enter')__rc()};
let rb=el('button','padding:6px 10px;background:#2a2a8a;border:none;border-radius:6px;color:#aaaaff;font-size:11px;cursor:pointer;font-family:monospace','▶ Run');
rb.onclick=__rc;
ir.append(ci,rb);
let qrow=el('div','margin-top:6px;display:flex;gap:6px');
['Clear','UA','Screen','URL'].forEach(label=>{
  let b=el('button','width:auto;padding:4px 10px;background:#16213e;border:1px solid #2a2a5a;border-radius:6px;color:#aaaaff;font-size:11px;cursor:pointer;font-family:monospace',label);
  b.onclick=()=>{
    if(label==='Clear')outDiv.textContent='';
    else if(label==='UA')__lg('UA: '+navigator.userAgent,'info');
    else if(label==='Screen')__lg('Screen: '+screen.width+'x'+screen.height,'info');
    else __lg('URL: '+location.href,'info');
  };
  qrow.appendChild(b);
});
tc.append(el('div','font-size:10px;color:#555588;margin:8px 0 4px;text-transform:uppercase;letter-spacing:1px','Output'),outDiv,ir,qrow);

// --- Tweaks ---
let tw=el('div');
let sx=document.createElement('style');sx.id='__ds';document.head.appendChild(sx);
tw.append(
  sec('Display'),
  tog('Hide all images',on=>{sx.textContent=on?sx.textContent+'\nimg{visibility:hidden!important}':sx.textContent.replace(/\nimg\{visibility:hidden!important\}/g,'')}),
  tog('Hide ads',on=>{sx.textContent=on?sx.textContent+'\ndiv[class*="ad"]{display:none!important}':sx.textContent.replace(/\ndiv\[class\*="ad"\]\{display:none!important\}/g,'')}),
  tog('Grayscale',on=>{document.body.style.filter=on?'grayscale(1)':''}),
  tog('No animations',on=>{sx.textContent=on?sx.textContent+'\n*{animation:none!important;transition:none!important}':sx.textContent.replace(/\n\*\{animation:none!important;transition:none!important\}/g,'')}),
  tog('Force dark mode',on=>{sx.textContent=on?sx.textContent+'\nhtml{filter:invert(1) hue-rotate(180deg)!important}img,video{filter:invert(1) hue-rotate(180deg)!important}':sx.textContent.replace(/\nhtml\{filter.*?\}img,video\{filter.*?\}/g,'')})
);
let fsLabel=sec('Font Size');let fsSlider=el('input','width:100%;margin-top:4px');fsSlider.type='range';fsSlider.min=8;fsSlider.max=32;fsSlider.value=16;fsSlider.oninput=()=>document.body.style.fontSize=fsSlider.value+'px';
let zLabel=sec('Page Zoom');let zSlider=el('input','width:100%;margin-top:4px');zSlider.type='range';zSlider.min=0.5;zSlider.max=2;zSlider.step=0.05;zSlider.value=1;zSlider.oninput=()=>document.body.style.zoom=zSlider.value;
tw.append(fsLabel,fsSlider,zLabel,zSlider);

panels['Executables']=te;panels['Console']=tc;panels['Tweaks']=tw;
body.append(te,tc,tw);
p.append(tb,tabBar,body);
document.body.appendChild(p);

function switchTab(name){
  Object.keys(tabs).forEach(k=>{
    tabs[k].style.color=k===name?'#aaaaff':'#7777aa';
    tabs[k].style.borderBottom=k===name?'2px solid #6666ff':'2px solid transparent';
    panels[k].style.display=k===name?'block':'none';
  });
}
switchTab('Executables');

// Drag
let ox,oy,drag=false;
tb.addEventListener('mousedown',e=>{drag=true;ox=e.clientX-p.offsetLeft;oy=e.clientY-p.offsetTop});
document.addEventListener('mousemove',e=>{if(drag){p.style.left=(e.clientX-ox)+'px';p.style.top=(e.clientY-oy)+'px'}});
document.addEventListener('mouseup',()=>drag=false);

// Logger
function __lg(m,type){let d=document.createElement('div');if(type)d.style.color=type==='err'?'#ff6b6b':'#88aaff';d.textContent=m;outDiv.appendChild(d);outDiv.scrollTop=outDiv.scrollHeight}
function __rc(){let c=ci.value.trim();if(!c)return;__lg('> '+c,'info');try{let r=eval(c);if(r!==undefined)__lg(String(r))}catch(e){__lg(e.message,'err')}ci.value=''}

// Executables
function __rain(){let c=document.createElement('canvas');c.style.cssText='position:fixed;top:0;left:0;z-index:999998;pointer-events:none;opacity:.7';document.body.appendChild(c);c.width=innerWidth;c.height=innerHeight;let x=c.getContext('2d'),drops=Array(Math.floor(c.width/16)).fill(1),id=setInterval(()=>{x.fillStyle='rgba(0,0,0,.05)';x.fillRect(0,0,c.width,c.height);x.fillStyle='#00ff41';x.font='14px monospace';drops.forEach((y,i)=>{x.fillText(String.fromCharCode(0x30A0+Math.random()*96),i*16,y*16);drops[i]=y>c.height/16&&Math.random()>.975?0:y+1})},33);setTimeout(()=>{clearInterval(id);c.remove()},8000);__lg('Matrix rain (8s)','info');switchTab('Console')}
function __snow(){let fl=[];for(let i=0;i<80;i++){let s=document.createElement('div');s.textContent='❄';s.style.cssText='position:fixed;top:-20px;font-size:'+(10+Math.random()*20)+'px;opacity:'+(0.4+Math.random()*0.6)+';z-index:999998;pointer-events:none';s.style.left=Math.random()*100+'vw';document.body.appendChild(s);fl.push({el:s,speed:1+Math.random()*3,x:parseFloat(s.style.left),y:-20})}let id=setInterval(()=>{fl.forEach(f=>{f.y+=f.speed;f.x+=Math.sin(f.y/50)*.5;f.el.style.top=f.y+'px';f.el.style.left=f.x+'px';if(f.y>innerHeight+20){f.y=-20;f.x=Math.random()*innerWidth}})},16);setTimeout(()=>{clearInterval(id);fl.forEach(f=>f.el.remove())},10000);__lg('Snow (10s)','info');switchTab('Console')}
function __shake(){let i=0,id=setInterval(()=>{document.body.style.transform='translate('+(Math.random()-.5)*12+'px,'+(Math.random()-.5)*8+'px) rotate('+(Math.random()-.5)+'deg)';if(i++>30){clearInterval(id);document.body.style.transform=''}},33);__lg('QUAKE!','info');switchTab('Console')}
function __emoji(){let em='🎉🔥💥⭐🌈🦄🐉💎🚀🎯🧠⚡🎪🤯🎭'.split('');for(let i=0;i<40;i++)setTimeout(()=>{let e=document.createElement('div');e.textContent=em[Math.floor(Math.random()*em.length)];e.style.cssText='position:fixed;top:-40px;font-size:'+(20+Math.random()*30)+'px;z-index:999998;pointer-events:none;transition:top 3s ease-in';e.style.left=Math.random()*90+'vw';document.body.appendChild(e);setTimeout(()=>e.style.top='110vh',10);setTimeout(()=>e.remove(),3100)},i*80);__lg('Emoji storm!','info');switchTab('Console')}
function __cookies(){__lg('Cookies:\n'+(document.cookie||'(none)'),'info');switchTab('Console')}
function __ls(){let k=Object.keys(localStorage);switchTab('Console');k.length?k.forEach(key=>__lg(key+' = '+localStorage.getItem(key),'info')):__lg('localStorage empty','info')}
function __imgs(){let im=[...document.images].map(i=>i.src).filter(Boolean);switchTab('Console');im.slice(0,20).forEach(s=>__lg(s,'info'));if(!im.length)__lg('No images','err');else if(im.length>20)__lg('...and '+(im.length-20)+' more')}
function __links(){let lk=[...document.links].map(l=>l.href).filter(Boolean);switchTab('Console');lk.slice(0,20).forEach(s=>__lg(s,'info'));if(!lk.length)__lg('No links','err');else if(lk.length>20)__lg('...and '+(lk.length-20)+' more')}
let __em=false;function __edit(){__em=!__em;document.body.contentEditable=__em;__lg(__em?'Edit mode ON':'Edit mode OFF','info');switchTab('Console')}
let __inv=false;function __invert(){__inv=!__inv;document.body.style.filter=__inv?'invert(1)':'';__lg(__inv?'Inverted':'Restored','info');switchTab('Console')}
let __mir=false;function __mirror(){__mir=!__mir;document.body.style.transform=__mir?'scaleX(-1)':'';__lg(__mir?'Mirrored':'Unmirrored','info');switchTab('Console')}
let __fo=[],__fl=['Comic Sans MS','Papyrus','Impact','Courier New','Georgia','Arial Black'];
function __fonts(){if(__fo.length){__fo.forEach(([e,f])=>e.style.fontFamily=f);__fo=[];__lg('Fonts restored','info')}else{[...document.querySelectorAll('p,h1,h2,h3,span,a,li,button')].forEach(e=>{__fo.push([e,e.style.fontFamily]);e.style.fontFamily=__fl[Math.floor(Math.random()*__fl.length)]});__lg('Crazy fonts: '+__fo.length+' els','info')}switchTab('Console')}
async function __ping(){switchTab('Console');__lg('Pinging...','info');let t=Date.now();try{await fetch('https://www.google.com/favicon.ico?_='+t,{mode:'no-cors'});__lg('~'+(Date.now()-t)+'ms','info')}catch(e){__lg('Failed: '+e.message,'err')}}
async function __ip(){switchTab('Console');__lg('Fetching IP...','info');try{let d=await(await fetch('https://ipapi.co/json/')).json();__lg('IP: '+d.ip+'\nCity: '+d.city+', '+d.region+'\nCountry: '+d.country_name+'\nISP: '+d.org,'info')}catch(e){__lg('Failed: '+e.message,'err')}}
function __blooket(){
var a=document.createElement("iframe");
document.body.appendChild(a);
a.style.display="none";
a.contentDocument.write("<body><script>window.alert=function(){};window.confirm=function(){};window.prompt=function(){};<\/script><\/body>");
var b=a.contentDocument.createElement("script");
b.innerHTML=`(function(){var a=document.createElement("div");a.innerHTML=\`<style>.cheat{display:block;width:440px;height:280px;background:#222;border:2px solid #444;border-radius:10px;position:fixed;top:100px;left:calc(50vw - 220px);z-index:99999;font-family:Arial,sans-serif;color:#fff;overflow:hidden}.cheat .header{background:#333;padding:10px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #444}.cheat .header .title{font-size:18px;font-weight:bold}.cheat .header .close{cursor:pointer;font-size:20px;color:#aaa}.cheat .header .close:hover{color:#fff}.cheat .content{padding:10px;height:calc(100% - 60px);overflow-y:auto}.cheat .section{margin-bottom:15px}.cheat .section h3{font-size:14px;margin:0 0 5px 0;color:#ccc;text-transform:uppercase}.cheat .button{display:inline-block;padding:8px 12px;background:#555;border:1px solid #777;border-radius:5px;cursor:pointer;margin:2px;font-size:12px}.cheat .button:hover{background:#666}.cheat .input{display:inline-block;padding:5px;margin:2px;border:1px solid #777;border-radius:3px;background:#333;color:#fff;width:100px}.cheat .textarea{width:100%;height:60px;padding:5px;border:1px solid #777;border-radius:3px;background:#333;color:#fff;font-family:monospace;font-size:12px;margin-top:5px}<\/style><div class="cheat"><div class="header"><div class="title">Blooket Cheats</div><div class="close" onclick="this.parentElement.parentElement.remove()">×</div></div><div class="content"><div class="section"><h3>Add Tokens</h3><input class="input" id="tokenAmount" placeholder="Amount" type="number"><button class="button" onclick="addTokens()">Add Tokens</button></div><div class="section"><h3>Add XP</h3><input class="input" id="xpAmount" placeholder="Amount" type="number"><button class="button" onclick="addXP()">Add XP</button></div><div class="section"><h3>Unlock All Blooks</h3><button class="button" onclick="unlockAllBlooks()">Unlock All</button></div><div class="section"><h3>Spam Buy Blooks</h3><input class="input" id="blookAmount" placeholder="Amount" type="number"><button class="button" onclick="spamBuyBlooks()">Spam Buy</button></div><div class="section"><h3>Custom Script</h3><textarea class="textarea" id="customScript" placeholder="Enter custom JavaScript code..."></textarea><button class="button" onclick="runCustomScript()">Run Script</button></div></div></div>\`;document.body.appendChild(a);function addTokens(){var b=parseInt(document.getElementById("tokenAmount").value);if(isNaN(b)||b<=0){alert("Please enter a valid amount.");return}window.setInterval(function(){window.webpackJsonp.push([[],{setLocal:function(a,b,c){a.exports[c]={setLocal:function(){},getLocal:function(){return b}}}},"setLocal"])},100);setTimeout(function(){window.webpackJsonp.push([[],{getLocal:function(a,b,c){a.exports[c]={setLocal:function(a){window.localStorage.setItem("b",a)},getLocal:function(){return window.localStorage.getItem("b")}}}},"getLocal"])},200);setTimeout(function(){var a=window.webpackJsonp.find(function(a){return a[0].find(function(a){return a.getLocal})});if(a){a[1].getLocal().setLocal(JSON.stringify({t:parseInt(window.localStorage.getItem("b").split('"t":')[1].split(",")[0])+b}))}else{alert("Failed to add tokens.")}},300)}function addXP(){var b=parseInt(document.getElementById("xpAmount").value);if(isNaN(b)||b<=0){alert("Please enter a valid amount.");return}window.setInterval(function(){window.webpackJsonp.push([[],{setLocal:function(a,b,c){a.exports[c]={setLocal:function(){},getLocal:function(){return b}}}},"setLocal"])},100);setTimeout(function(){window.webpackJsonp.push([[],{getLocal:function(a,b,c){a.exports[c]={setLocal:function(a){window.localStorage.setItem("b",a)},getLocal:function(){return window.localStorage.getItem("b")}}}},"getLocal"])},200);setTimeout(function(){var a=window.webpackJsonp.push([[],{getLocal:function(a,b,c){a.exports[c]={setLocal:function(a){window.localStorage.setItem("b",a)},getLocal:function(){return window.localStorage.getItem("b")}}}},"getLocal"]);if(a){a[1].getLocal().setLocal(JSON.stringify({xp:parseInt(window.localStorage.getItem("b").split('"xp":')[1].split(",")[0])+b}))}else{alert("Failed to add XP.")}},300)}function unlockAllBlooks(){window.setInterval(function(){window.webpackJsonp.push([[],{setLocal:function(a,b,c){a.exports[c]={setLocal:function(){},getLocal:function(){return b}}}},"setLocal"])},100);setTimeout(function(){window.webpackJsonp.push([[],{getLocal:function(a,b,c){a.exports[c]={setLocal:function(a){window.localStorage.setItem("b",a)},getLocal:function(){return window.localStorage.getItem("b")}}}},"getLocal"])},200);setTimeout(function(){var a=window.webpackJsonp.find(function(a){return a[0].find(function(a){return a.getLocal})});if(a){var b=JSON.parse(a[1].getLocal().getLocal());b.unlocks=Object.keys(window.webpackJsonp.find(function(a){return a[0].find(function(a){return a.getLocal})})[1].getLocal().getLocal().bl||{});a[1].getLocal().setLocal(JSON.stringify(b))}else{alert("Failed to unlock blooks.")}},300)}function spamBuyBlooks(){var b=parseInt(document.getElementById("blookAmount").value);if(isNaN(b)||b<=0){alert("Please enter a valid amount.");return}for(var c=0;c<b;c++){setTimeout(function(){window.webpackJsonp.push([[],{setLocal:function(a,b,c){a.exports[c]={setLocal:function(){},getLocal:function(){return b}}}},"setLocal"])},100);setTimeout(function(){window.webpackJsonp.push([[],{getLocal:function(a,b,c){a.exports[c]={setLocal:function(a){window.localStorage.setItem("b",a)},getLocal:function(){return window.localStorage.getItem("b")}}}},"getLocal"])},200);setTimeout(function(){var a=window.webpackJsonp.find(function(a){return a[0].find(function(a){return a.getLocal})});if(a){var d=JSON.parse(a[1].getLocal().getLocal());d.t=parseInt(d.t)+1;a[1].getLocal().setLocal(JSON.stringify(d))}else{alert("Failed to buy blook.")}},300)}}function runCustomScript(){var b=document.getElementById("customScript").value;if(!b.trim()){alert("Please enter some code.");return}try{eval(b);alert("Script executed successfully.")}catch(c){alert("Error: "+c.message)}}})()<\/script>`;
a.contentDocument.body.appendChild(b);
__lg('Blooket cheats activated','info');switchTab('Console');
}
})();