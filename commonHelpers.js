import{a as w,i as y,S as f}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const S="23547596-77757707a75e05ac426ee1dd8",q="https://pixabay.com/api/";async function h(s,r,o=15){const i=new URLSearchParams({key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:o,page:r}).toString(),e=`${q}?${i}`;return w.get(e).then(function(t){return t.data})}function p(s){return s.hits.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:L})=>`
        <div class="gallery-item">
             <a href="${o}" class="gallery-link">
              <img class="img" src="${r}" alt="${i}" />
            </a>
            <div class="gallery-text-container">
            <p class="gallery-text"><b>Likes </b>${e}</p>
            <p class="gallery-text"><b>Views </b>${t}</p>
            <p class="gallery-text"><b>Comments </b>${a}</p>
            <p class="gallery-text"><b>Downloads </b>${L}</p>
            </div>
      </div>
      
      `).join("")}const x=document.querySelector(".form"),b=document.querySelector(".loader"),v=document.querySelector(".bottom"),u=document.querySelector(".load"),l=document.querySelector(".gallery");let d,c="",g=15,n=1;x.addEventListener("submit",P);u.addEventListener("click",$);async function P(s){if(s.preventDefault(),c=s.currentTarget.elements.text.value.toLowerCase(),n=1,c===""){y.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight"});return}H();try{let o=await h(c,n,g);o.total!==0?(m(),l.innerHTML="",l.insertAdjacentHTML("beforeend",p(o)),d=new f(".gallery a",{}),d.refresh(),u.style.visibility="visible"):(m(),l.innerHTML="",y.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight"}))}catch(o){console.log(o)}}async function $(s){try{B(),C(),s.preventDefault(),n+=1;const r=await h(c,n,g);m(),l.insertAdjacentHTML("beforeend",p(r)),d=new f(".gallery a",{}),d.refresh(),n*g>r.totalHits?y.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"black",color:"red",position:"topRight"}):O();const o=document.querySelector(".gallery-item");if(o){const i=o.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}}catch(r){console.log(r)}}function H(){b.style.visibility="visible"}function B(){v.style.visibility="visible"}function m(){b.style.visibility="hidden",v.style.visibility="hidden"}function C(){u.style.visibility="hidden"}function O(){u.style.visibility="visible"}
//# sourceMappingURL=commonHelpers.js.map