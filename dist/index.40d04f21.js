let e=0;function t(t,a){let c=!1,s=!1;if(0!=a){let t=1===a?3:0,r=1===a?-1:1;for(let l=0;l<4;l++){let i=t;for(;i<=3&&1===r||i>=0&&-1===r;){if(0===W[l][i]){i+=r;continue}let t=n(l,i,0,a),d=".row"+(l+1)+".column"+(i+1),m=document.querySelector(d);if(!t.merge||t.merge&&s){s=!1,t.destinationX+=t.merge?r:0,W[l][t.destinationX]=W[l][i],t.destinationX!==i&&(c=!0,W[l][i]=0),o(l,t.destinationX,m,!1),i+=r;continue}s=!0,W[l][t.destinationX]=2*W[l][i],console.log("after merge",W[l][t.destinationX]),e+=W[l][t.destinationX],_.innerHTML=e,c=!0,W[l][i]=0,o(l,t.destinationX,m,t.merge),i+=r}}}else if(0!=t){let r=1===t?3:0,l=1===t?-1:1;console.log("row",r,"col",a);for(let i=0;i<4;i++){let d=r;for(console.log("row",d,"col",a);d<=3&&1===l||d>=0&&-1===l;){if(0===W[d][i]){d+=l;continue}let a=n(d,i,t,0),r=".row"+(d+1)+".column"+(i+1),m=document.querySelector(r);if(!a.merge||a.merge&&s){s=!1,a.destinationY+=a.merge?l:0,W[a.destinationY][i]=W[d][i],a.destinationY!==d&&(c=!0,W[d][i]=0),o(a.destinationY,i,m,!1),d+=l;continue}s=!0,W[a.destinationY][i]=2*W[d][i],e+=W[a.destinationY][i],_.innerHTML=e,c=!0,W[d][i]=0,o(a.destinationY,i,m,a.merge),d+=l}}}return c}function n(e,t,n,o){let a=e,c=t,s=!1;for(;a<3&&1===n||a>0&&-1===n||c<3&&1===o||c>0&&-1===o;){console.log("y",n,"x",o);let r=a+n,l=c+o,i=W[r][l],d=W[e][t];if((0===i||i===d)&&(a=r,c=l,s=i===d),(0===i||i===d)&&(a=r,c=l,s=i===d),0!==i&&i!==d||s)break}return{merge:s,destinationY:a,destinationX:c}}function o(e,t,n,o){if(Array.from(n.classList).forEach(e=>{(e.startsWith("row")||e.startsWith("column"))&&n.classList.remove(e)}),n.classList.add("row"+(e+1),"column"+(t+1)),o){let n=A.querySelectorAll(".row"+(e+1)+".column"+(t+1));for(;n.length>1;)A.removeChild(n[0]),n=A.querySelectorAll(".row"+(e+1)+".column"+(t+1));n[0].className="tile row"+(e+1)+" column"+(t+1)+" value"+W[e][t],n[0].innerHTML=W[e][t],n[0].classList.add("merged"),n[0].addEventListener("animationend",()=>{n[0].classList.remove("merged")})}}const a=document.createElement("div");a.id="modal";const c=document.createElement("button");c.type="button",c.id="close-modal",c.addEventListener("click",()=>{a.style.display="none"});const s=document.createElement("div");function r(){a.style.display="none",window.addEventListener("keydown",p)}s.id="modal-context",a.append(c,s);const l=document.createElement("div");l.className="raitings-wrap";const i=document.createElement("h3");i.className="raitings-title",i.textContent="Raitings";const d=document.createElement("ul");d.id="raitings",l.append(i,d);const m=function(e){let t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear(),a=String(e.getHours()).padStart(2,"0"),c=String(e.getMinutes()).padStart(2,"0");return`${t}.${n}.${o} ${a}:${c}`}(new Date);let u=[];function p(n){let o;switch(n.key){case"ArrowUp":g(),o=t(1,0);break;case"ArrowDown":g(),o=t(-1,0);break;case"ArrowLeft":g(),o=t(0,-1);break;case"ArrowRight":g(),o=t(0,1)}if(o){P();let t=function(){let t=!1;for(let n=0;n<W.length;n++)for(let o=0;o<W[n].length;o++){if(0===W[n][o]&&(t=!0),2048===W[n][o]&&!wonGame)return{gameOver:!0,message:"You won!",finalScore:e};3!=o&&W[n][o]===W[n][o+1]&&(t=!0),3!=n&&W[n][o]===W[n+1][o]&&(t=!0)}return t?{gameOver:!1,message:""}:{gameOver:!0,message:"Game over!",finalScore:e}}();if(console.log("is gameover",t.gameOver),t.gameOver){var c;let n={score:e,currentTime:m};u.push(n),localStorage.setItem("scoreItem",JSON.stringify(u)),c=t.message,s.innerHTML="","Game over!"==c&&(a.style.display="flex",function(){let t=document.createElement("div");t.className="game-over-wrap";let n=document.createElement("h2");n.className="game-over-title",n.textContent="Game Over!";let o=document.createElement("div");o.id="total-score",o.textContent=e;let a=document.createElement("button");a.type="button",a.id="game-over",a.textContent="Try Again",a.addEventListener("click",J),t.append(n,o,a),s.append(t)}()),"You won!"==c&&(wonGame=!0,function(){let t=document.createElement("div");t.className="you-won-wrap";let n=document.createElement("h2");n.className="you-won-title",n.textContent="You Won!!";let o=document.createElement("div");o.id="total-score",o.textContent=e;let a=document.createElement("button");a.type="button",a.id="you-won",a.textContent="New Game",a.addEventListener("click",J);let c=document.createElement("button");c.type="button",c.id="continue",c.textContent="Do You Want To Continue Playing?",c.addEventListener("click",r),t.append(n,o,a,c),s.append(t)}(),window.removeEventListener("keydown",p))}}}function g(){let e=document.createElement("audio"),t=document.createElement("source");t.src="./157776__hiddenpersuader__click-sound-from-a-ps9-circuit-bent-machine.wav",e.append(t),C.append(e),e.play()}const f=document.createElement("div");f.className="audio-wrap";const v=document.createElement("audio");v.id="bg-music",v.loop="true";const E=document.createElement("source");E.type="audio/mpeg",E.src="./eco-sounds_assets_audio_Hope-Emotional-Soundtrack(chosic.com).mp3",v.append(E),f.append(v);const w=document.createElement("div");w.className="controls";const y=document.createElement("h3");y.textContent="Music";const L=document.createElement("div");L.className="stop-play-wrap";const h=document.createElement("button");h.id="change",L.append(h),L.classList.add("stop");const b=document.createElement("div");b.className="volume-wrap";const N=document.createElement("input");N.setAttribute("min","0"),N.setAttribute("max","1"),N.setAttribute("step","0.1"),N.value="1",N.type="range",N.id="volume-range",b.append(N);const x=document.createElement("h3");async function S(){try{v.play(),L.classList.remove("stop"),L.classList.add("play"),console.log(v.paused),v.volume=1}catch{console.log("error",error)}}async function k(){try{v.pause(),L.classList.remove("play"),L.classList.add("stop"),console.log(v.paused)}catch{console.log("error",error)}}x.textContent="Volume",w.append(y,L,x,b),L.addEventListener("click",function(){v.currentTime=0,L.classList.contains("play")?(k(),L.classList.add("off"),console.log(v.paused)):L.classList.contains("stop")&&(S(),L.classList.remove("off"),console.log(v.paused))}),N.addEventListener("input",function(){v.volume=N.value});const C=document.querySelector("body"),M=document.createElement("div");M.className="container";const T=document.createElement("button");T.className="raitings-btn",T.type="button",T.textContent="Raitings",T.addEventListener("click",function(){let e=function(){let e=localStorage.getItem("scoreItem");return e?JSON.parse(e):[]}();s.innerHTML="",0===e.length?(a.style.display="flex",s.innerHTML="<p class = 'empty-raitings'>No Games Played Yet</p>"):(a.style.display="flex",console.log(e),e.forEach(e=>{let t=1,n=document.createElement("li");n.className="raiting-list_item",n.textContent=`${t++}.  ${e.currentTime} - Score: ${e.score}`,d.append(n),s.append(l)}))});const Y=document.createElement("div");Y.className="game-field",Y.id="game-field";const A=document.createElement("div");A.className="tile-wrap",I();const H=document.createElement("div");H.className="info-wrap";const $=document.createElement("div");$.className="title-wrap";const X=document.createElement("h1");X.textContent="2048",$.append(X);const G=document.createElement("div");G.className="score-wrap";const O=document.createElement("div");O.id="score-label",O.textContent="Score";const _=document.createElement("div");_.id="score-element",_.textContent="0",G.append(O,_);const q=document.createElement("div");q.className="btn-wrap";const D=document.createElement("button");function I(){for(let e=1;e<=16;e++){let e=document.createElement("div");e.className="square",A.append(e)}}D.className="new-game-btn",D.textContent="New Game",q.addEventListener("click",J),q.append(D),H.append($,G,q,T),Y.append(A,H),C.append(f),M.append(w,Y),C.prepend(M),M.after(a);let W=[];function R(){W=[];for(let e=0;e<4;e++){let e=[];for(let t=0;t<4;t++)e.push(0);W.push(e)}}function J(){a.style.display="none",A.innerHTML="",I(),_.innerHTML=0,W=[],$e73bf42412feb220$export$e55b6242cf16bbb8=0,window.addEventListener("keydown",p),R(),P(),P()}function P(){var e;let t,n=[];for(let e=0;e<W.length;e++)for(let t=0;t<W[e].length;t++)0===W[e][t]&&n.push([e,t]);let[o,a]=n[Math.floor(Math.random()*n.length)];W[o][a]=.8>Math.random()?2:4,e=W[o][a],(t=document.createElement("div")).classList.add("tile","row"+(o+1),"column"+(a+1),"value"+e),t.innerHTML=e,A.append(t),t.classList.add("merged"),t.addEventListener("animationend",()=>{t.classList.remove("merged")})}window.addEventListener("keydown",p),R(),P(),P();
//# sourceMappingURL=index.40d04f21.js.map
