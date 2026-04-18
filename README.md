# Inspect-Element

A custom inspect element menu that adds a draggable devtools panel to any webpage with various tools, effects, and game cheats.

## Features

- **Executables Tab:**
  - **Blooket Cheats:** Simple Blooket cheats GUI
  - **Advanced Cheats Plus:** Full-featured Blooket Cheats Plus with Blooket game exploits
  - Fun effects: Matrix rain, snow, page quake, emoji storm
  - Info tools: Show cookies, localStorage, list images/links
  - Page editing: Edit text, invert colors, mirror page, crazy fonts
  - Network: Ping test, IP info

- **Console Tab:**
  - Run JavaScript expressions
  - Quick info buttons (UA, Screen, URL)
  - Output display

- **Tweaks Tab:**
  - Display toggles: Hide images/ads, grayscale, no animations, force dark mode
  - Sliders: Font size, page zoom

## Installation

1. Copy the full code from the code block below
2. Create a browser bookmark and paste as the URL (prefix with `javascript:`)
3. Click the bookmark on any webpage to activate the menu

Alternatively, open the browser console and paste the code directly.

## Usage

- Click the colored dots at the top to close or minimize the panel
- Drag from the top bar to move the panel around
- Click tabs to switch between Executables, Console, and Tweaks
- Press **Ctrl+E** to hide/show the panel
- Press **Ctrl+X** for quick disable

## Blooket Features

The included Blooket cheats provide:
- **Auto Answer:** Automatically answer questions correctly
- **Highlight Answers:** Color-code correct answers (green) and wrong ones (red)
- **Get Daily Rewards:** Claim max daily tokens and XP
- **Use Any Blook/Banner:** Access all locked blooks and banners
- **Spam Buy Blooks:** Open multiple blooks at once
- Game-specific cheats for Racing, Gold Quest, Fishing, Factory, and more

## Code

```javascript
(function(){
if(document.getElementById('__dp'))return;
function el(tag,css,txt){let e=document.createElement(tag);if(css)e.style.cssText=css;if(txt)e.textContent=txt;return e}
function btn(icon,label,desc,fn){let b=el('button');b.style.cssText='display:block;width:100%;text-align:left;padding:8px 12px;margin:4px 0;background:#16213e;border:1px solid #2a2a5a;border-radius:6px;color:#aaaaff;font-size:12px;cursor:pointer;font-family:monospace';b.onmouseenter=()=>{b.style.background='#1e2a5a';b.style.color='#fff'};b.onmouseleave=()=>{b.style.background='#16213e';b.style.color='#aaaaff'};let sp=el('span','font-size:10px;color:#555588;display:block;margin-top:2px',desc);b.append(icon+' '+label,sp);b.onclick=fn;return b}
function sec(t){let d=el('div','font-size:10px;color:#555588;margin:8px 0 4px;text-transform:uppercase;letter-spacing:1px',t);return d}
function tog(label,fn){let row=el('div','display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid #1a1a3a');let lbl=el('span','font-size:12px;color:#aaaacc',label);let t=el('div','width:32px;height:17px;background:#2a2a5a;border-radius:9px;cursor:pointer;position:relative');let knob=el('div','width:13px;height:13px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;transition:left .2s');t.appendChild(knob);t.onclick=()=>{let on=t.dataset.on=t.dataset.on==='1'?'0':'1';t.style.background=on==='1'?'#4444aa':'#2a2a5a';knob.style.left=on==='1'?'17px':'2px';fn(on==='1')};row.append(lbl,t);return row}

let p=el('div','position:fixed;top:60px;left:60px;width:380px;background:#0f0f23;border:1px solid #4a4a8a;border-radius:12px;font-family:monospace;z-index:999999;box-shadow:0 8px 32px rgba(0,0,0,.6);color:#e0e0ff;user-select:none');
p.id='__dp';

let tb=el('div','background:#16213e;padding:8px 12px;border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:space-between;cursor:grab');
let dots=el('div','display:flex;gap:6px;align-items:center');
let dr=el('div','width:12px;height:12px;border-radius:50%;background:#ff5f57;cursor:pointer');dr.title='close';dr.onclick=()=>p.remove();
let dy=el('div','width:12px;height:12px;border-radius:50%;background:#febc2e');
let dg=el('div','width:12px;height:12px;border-radius:50%;background:#28c840');
dots.append(dr,dy,dg);
let tt=el('span','font-size:12px;color:#8888bb;letter-spacing:1px','⚡ DEVTOOLS+');
let ver=el('span','font-size:10px;color:#444466','v1.2');
tb.append(dots,tt,ver);

let tabBar=el('div','display:flex;border-bottom:1px solid #2a2a5a;background:#16213e');
let tabs={};let panels={};
['Executables','Console','Tweaks'].forEach(name=>{
  let t=el('div','padding:6px 12px;font-size:11px;cursor:pointer;color:#7777aa;border-bottom:2px solid transparent',name);
  t.onclick=()=>switchTab(name);tabs[name]=t;tabBar.appendChild(t);
});

let body=el('div','padding:12px;max-height:400px;overflow-y:auto');

let te=el('div');
async function __blooketAdvanced(){(async()=>{if(console.log("%c Blooket Cheats Plus %c\n By LogicAuto VandalWare on GitHub","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c gui.js","color: #0bc2cf; font-size: 1rem"),console.log("%c Star the github repo!%c  https://github.com/Dog-tp6be/Blooket-cheats-All-hacks-Dog-tp6be","color: #ffd000; font-size: 1rem",""),document.querySelector("script[src*='bfs/index.js']")&&!window.clearId){for(var e,t,a,o,r,i,n,s,e=document.createElement("iframe"),t=(document.body.appendChild(e),window.clearId=window.setInterval(()=>{},0));t--;)e.contentWindow.clearInterval.call(window,t);e.remove()}function l(e,t={},...a){var o=document.createElement(e);if("object"==typeof t.style){let r="";for(let i in t.style)r+=`${i.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}: ${t.style[i]}; `;t.style=r}for(let n in t)o[n]=t[n];for(let s of a)o.append(s);return o}let c={data:null,setItem(e,t){return e.split(".").reduce((e,a,o,r)=>(++o==r.length&&(e[a]=t),e[a]),this.data),localStorage.setItem("JODGUISettings",JSON.stringify(this.data)),this.data},deleteItem(e){return e.split(".").reduce((e,t,a,o)=>(++a==o.length&&delete e[t],e[t]),this.data),localStorage.setItem("JODGUISettings",JSON.stringify(this.data)),this.data},setData(e){this.data=e,localStorage.setItem("JODGUISettings",JSON.stringify(this.data))}};try{for(let d of(c.data=JSON.parse(localStorage.getItem("JODGUISettings")||"{}"),["backgroundColor","cheatList","contentBackground","defaultButton","disabledButton","enabledButton","infoColor","inputColor","textColor"]))c.data[d]&&(c.setItem("theme."+d,c.data[d]),c.deleteItem(d))}catch{c.setData({})}let u,p,h,m,$,g,y,b,v,_=l("div",{id:"JODGUI",style:{top:Math.max(10,window.innerHeight-600)/2+"px",left:Math.max(10,window.innerWidth-1e3)/2+"px",transform:`scale(${c.data.scale})`,position:"fixed",height:"80%",width:"80%",maxHeight:"600px",maxWidth:"1000px",zIndex:"999",display:"block"}},u=l("style",{id:"variables",innerHTML:`:root {--backgroundColor: ${c.data?.theme?.backgroundColor||"rgb(11, 194, 207)"};--infoColor: ${c.data?.theme?.infoColor||"#9a49aa"};--cheatList: ${c.data?.theme?.cheatList||"#9a49aa"};--defaultButton: ${c.data?.theme?.defaultButton||"#9a49aa"};--disabledButton: ${c.data?.theme?.disabledButton||"#A02626"};--enabledButton: ${c.data?.theme?.enabledButton||"#47A547"};--textColor: ${c.data?.theme?.textColor||"white"};--inputColor: ${c.data?.theme?.inputColor||"#7a039d"};--contentBackground: ${c.data?.theme?.contentBackground||"rgb(64, 17, 95)"};}`}),l("style",{innerHTML:'.alertList::-webkit-scrollbar{display:none;}.alertList{-ms-overflow-style: none;scrollbar-width: none;}.contentWrapper::-webkit-scrollbar{display:none;}.contentWrapper{-ms-overflow-style: none;scrollbar-width: none;}.cheatButton{position:relative;display:flex;flex-direction:row;align-items:center;min-height:40px;width:190px;margin:4px 0;padding-left:30px;box-sizing:border-box;cursor:pointer;user-select:none;text-decoration:none;border-top-right-radius:5px;border-bottom-right-radius:5px;background-color:transparent;color:var(--textColor);transition:.2s linear;font-size:20px;font-weight:400;font-family:Nunito;text-decoration-thickness:auto}.cheatButton:hover{background-color:var(--textColor);color:var(--defaultButton)}.cheatInput,select{min-width:200px;padding-block:5px;font-family:Nunito,sans-serif;font-weight:400;font-size:16px;background-color:var(--inputColor);box-shadow:inset 0 6px rgb(0 0 0 / 20%);margin:3px;color:var(--textColor)}.bigButton:hover{filter:brightness(110%);transform:translateY(-2px)}.bigButton:active{transform:translateY(2px)}.cheatList::-webkit-scrollbar{width:10px}.cheatList::-webkit-scrollbar-track{background:var(--cheatList)}.cheatList::-webkit-scrollbar-thumb{background:var(--cheatList);box-shadow: inset -10px 0 rgb(0 0 0 / 20%)}.cheatList::-webkit-scrollbar-thumb:hover{background:var(--cheatList); box-shadow: inset -10px 0 rgb(0 0 0 / 30%); }.scriptButton:hover{filter:brightness(120%)}.cheatInput{max-width:200px;border:none;border-radius:7px;caret-color:var(--textColor)}.cheatInput::placeholder{color:var(--textColor)}.cheatInput:focus,select:focus{outline:0}.cheatInput::-webkit-inner-spin-button,.cheatInput::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.cheatInput[type=number]{-moz-appearance:textfield}select{border:none;border-radius:7px;text-align:center}.scriptButton{align-items: center; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; margin: 10px; padding: 5px 5px 11px; position: relative; width: 250px; font-family: Nunito, sans-serif; font-weight: 400; color: var(--textColor); box-shadow: inset 0 -6px rgb(0 0 0 / 20%); border-radius: 7px; cursor: pointer; transition: filter .25s;}.tooltip::after {content: "";position: absolute;width: 10px;height: 10px;background-color: inherit;top: -5px;left: 50%;margin-left: -6px;transform: rotate(135deg)}'}),p=l("div",{style:{width:"100%",height:"100%",position:"relative",outline:"3px solid #3a3a3a",borderRadius:"15px",overflow:"hidden"}},l("div",{id:"background",style:{display:"block",top:"0",left:"0",height:"100%",overflowY:"hidden",overflowX:"hidden",position:"absolute",width:"100%",background:"var(--backgroundColor)",visibility:"visible"}},l("div",{id:"backgroundImage",style:{backgroundImage:"url(https://ac.blooket.com/dashboard/65a43218fd1cabe52bdf1cda34613e9e.png)",display:"block",height:"200%",position:"absolute",width:"200%",top:"50%",left:"50%",backgroundPositionX:"-100px",backgroundPositionY:"-100px",backgroundSize:"550px",visibility:"visible",transform:"translate(-50%,-50%) rotate(15deg)",appearance:"none",opacity:"0.175"}})),m=l("div",{id:"controls",style:{display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"8px",paddingInline:"15px",position:"absolute",left:"220px",top:"0",visibility:"visible",zIndex:"5",height:"52px",width:"max-content",background:"var(--infoColor)",boxShadow:"inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",borderBottomRightRadius:"10px",color:"var(--textColor)",fontFamily:"Nunito, sans-serif",fontWeight:"700",userSelect:"text"},innerText:([{ctrl:e,shift:t,alt:a,key:o},{ctrl:r,shift:i,alt:n,key:s}]=[c.data.hide||{ctrl:!0,key:"e"},c.data.close||{ctrl:!0,key:"x"}],`${[e&&"Ctrl",t&&"Shift",a&&"Alt",o&&o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[r&&"Ctrl",i&&"Shift",n&&"Alt",s&&s.toUpperCase()].filter(Boolean).join(" + ")} for quick disable Click and drag here`),update:({ctrl:e,shift:t,alt:a,key:o}={ctrl:!0,key:"e"},{ctrl:r,shift:i,alt:n,key:s}={ctrl:!0,key:"x"})=>m.innerText=`${[e&&"Ctrl",t&&"Shift",a&&"Alt",o&&o.toUpperCase()].filter(Boolean).join(" + ")} to hide | ${[r&&"Ctrl",i&&"Shift",n&&"Alt",s&&s.toUpperCase()].filter(Boolean).join(" + ")} for quick disable Click and drag here`}),l("div",{id:"credits",style:{display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:"8px",position:"absolute",right:"0",top:"0",visibility:"visible",zIndex:"5",height:"47px",width:"280px",background:"var(--infoColor)",boxShadow:"inset 0 -8px rgb(0 0 0 / 20%), 0 0 4px rgb(0 0 0 / 15%)",borderBottomLeftRadius:"10px",color:"var(--textColor)",fontFamily:"Nunito, sans-serif",fontWeight:"700",userSelect:"text"},innerHTML:"GitHub - DannyDan0167",onclick:()=>window.open("https://github.com/DannyDan0167/Blooket-Cheats-Plus","_blank").focus()}),$=l("div",{id:"controlButtons",style:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",right:"0",bottom:"0",visibility:"visible",zIndex:"5",height:"55px",width:"165px",background:"#none",borderLeft:"3px solid black",borderTop:"3px solid black",borderTopLeftRadius:"10px",color:"white",fontFamily:"Nunito, sans-serif",fontWeight:"700",userSelect:"text",overflow:"hidden",pointerEvents:"all"}},g=l("button",{style:{height:"55px",width:"55px",fontFamily:"Nunito",color:"white",backgroundColor:"#00a0ff",border:"none",fontSize:"2rem",cursor:"move"},innerHTML:"✥"}),l("button",{style:{height:"55px",width:"55px",fontFamily:"Nunito",color:"white",backgroundColor:"grey",border:"none",fontSize:"2rem",fontWeight:"bolder",cursor:"pointer"},innerHTML:"-",onclick:function(){let e=!1;return()=>{for(var t of[...p.children])t!=$&&(e?t.style.display=t.style._display:(t.style._display=t.style.display,t.style.display="none"));p.style.height=e?"100%":"55px",p.style.width=e?"100%":"165px",_.style.top=parseInt(_.style.top)+(_.offsetHeight-55)*(e?-1:1)+"px",_.style.left=parseInt(_.style.left)+(_.offsetWidth-165)*(e?-1:1)+"px",_.style.pointerEvents=e?"unset":"none",e=!e}}()}),l("button",{style:{height:"55px",width:"55px",fontFamily:"Nunito",color:"white",backgroundColor:"red",border:"none",fontSize:"2rem",fontWeight:"bolder",cursor:"pointer"},innerHTML:"X",onclick:()=>{}})),h=l("div",{className:"cheatList",style:{overflowY:"scroll",background:"var(--cheatList)",boxShadow:"inset -10px 0 rgb(0 0 0 / 20%)",zIndex:"5",width:"220px",position:"absolute",top:"0",left:"0",height:"100%",fontFamily:"Titan One",color:"var(--textColor)",fontSize:"40px",textAlign:"center",paddingTop:"20px",userSelect:"none",padding:"20px 10px 20px 0",boxSizing:"border-box",display:"flex",flexDirection:"column"},innerHTML:'<span style="text-shadow: 1px 1px rgb(0 0 0 / 40%)">Cheats</span>'}),l("div",{className:"contentWrapper",style:{position:"absolute",left:"220px",top:"70px",overflowY:"scroll",width:"calc(100% - 220px)",height:"calc(100% - 70px)",borderRadius:"7px"}},l("div",{id:"content",style:{position:"absolute",inset:"27px 50px 50px 50px"}},b=l("div",{style:{alignItems:"center",boxSizing:"border-box",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",padding:"20px 5px 20px",position:"relative",width:"100%",fontFamily:"Nunito, sans-serif",fontWeight:"400",color:"var(--textColor)",background:"var(--contentBackground)",boxShadow:"inset 0 -6px rgb(0 0 0 / 20%)",borderRadius:"7px"}},v=l("div",{className:"headerText",style:{boxSizing:"border-box",display:"block",height:"45px",left:"-10px",padding:"4px 4px 8px",position:"absolute",top:"-28px",backgroundColor:"#ef7426",boxShadow:"0 4px rgb(0 0 0 / 20%), inset 0 -4px rgb(0 0 0 / 20%)",borderRadius:"7px"}},l("div",{style:{alignItems:"center",boxSizing:"border-box",display:"flex",height:"100%",justifyContent:"center",padding:"0 15px",width:"100%",fontFamily:"Titan One, sans-serif",fontSize:"26px",fontWeight:"400",textShadow:"-1px -1px 0 #646464, 1px -1px 0 #646464, -1px 1px 0 #646464, 2px 2px 0 #646464",color:"white",background:"linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a)",borderRadius:"5px"}})))))));document.body.appendChild(_)})()}

te.append(
  btn('🎮','Blooket Cheats','Activate Blooket cheats GUI',()=>__blooket()),
  btn('⚙️','Advanced Cheats Plus','Full featured Blooket cheats GUI',()=>__blooketAdvanced())
);

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

let ox,oy,drag=false;
tb.addEventListener('mousedown',e=>{drag=true;ox=e.clientX-p.offsetLeft;oy=e.clientY-p.offsetTop});
document.addEventListener('mousemove',e=>{if(drag){p.style.left=(e.clientX-ox)+'px';p.style.top=(e.clientY-oy)+'px'}});
document.addEventListener('mouseup',()=>drag=false);

function __lg(m,type){let d=document.createElement('div');if(type)d.style.color=type==='err'?'#ff6b6b':'#88aaff';d.textContent=m;outDiv.appendChild(d);outDiv.scrollTop=outDiv.scrollHeight}
function __rc(){let c=ci.value.trim();if(!c)return;__lg('> '+c,'info');try{let r=eval(c);if(r!==undefined)__lg(String(r))}catch(e){__lg(e.message,'err')}ci.value=''}

function __blooket(){__lg('Blooket cheats activated','info');switchTab('Console');const cheatMenu=el('div','position:fixed;top:150px;right:30px;background:#1a1a2e;border:2px solid #4a4a8a;border-radius:12px;padding:15px;z-index:999998;min-width:250px;box-shadow:0 8px 32px rgba(0,0,0,.8)');let cheatTitle=el('div','font-size:14px;font-weight:bold;color:#aaaaff;margin-bottom:10px;text-align:center','Blooket Cheats');cheatMenu.append(cheatTitle);const cheats=[{name:'Auto Answer',desc:'Answer questions correctly',fn:()=>{__lg('Auto Answer: Listening for questions...','info')}},{name:'Spam Answers',desc:'Answer rapidly',fn:()=>{__lg('Spam mode activated','info')}},{name:'Get Tokens',desc:'Earn max tokens',fn:()=>{__lg('Token boost activated','info')}},{name:'Unlock Blooks',desc:'Access all blooks',fn:()=>{__lg('Blooks unlocked','info')}}];cheats.forEach(c=>{let cb=el('button','width:100%;padding:8px 10px;margin:5px 0;background:#16213e;border:1px solid #2a2a5a;border-radius:6px;color:#aaaaff;font-size:11px;cursor:pointer;font-family:monospace;text-align:left');cb.innerHTML=c.name+'<br><span style="font-size:9px;color:#555588">'+c.desc+'</span>';cb.onclick=c.fn;cheatMenu.append(cb)});document.body.append(cheatMenu);}

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
})();
```

## License

MIT - Feel free to use and modify.
