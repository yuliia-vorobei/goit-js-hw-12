import{S as m,a as x,i as d}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(s){return s.hits.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:a,downloads:w})=>`
        <div class="gallery-item">
             <a href="${o}" class="gallery-link">
              <img class="img" src="${t}" alt="${i}" />
            </a>
            <div class="gallery-text-container">
            <p class="gallery-text"><b>Likes </b>${e}</p>
            <p class="gallery-text"><b>Views </b>${r}</p>
            <p class="gallery-text"><b>Comments </b>${a}</p>
            <p class="gallery-text"><b>Downloads </b>${w}</p>
            </div>
      </div>
      
      `).join("")}const q="23547596-77757707a75e05ac426ee1dd8",P="https://pixabay.com/api/",H=document.querySelector(".load");let u,y=1;async function h(s,t,o=15){const i=new URLSearchParams({key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:o,page:t}).toString(),e=`${P}?${i}`;return(await x.get(e)).data}H.addEventListener("click",O);function O(s){s.preventDefault(),y+=1,h(n,y,S).then(t=>{$(),t.total!==0&&(c(),l.insertAdjacentHTML("beforeend",p(t)),u=new m(".gallery a",{}),u.refresh())}).catch(t=>console.log(t))}const b=document.querySelector(".form"),L=document.querySelector(".loader"),v=document.querySelector(".bottom"),T=document.querySelector(".load");let f;const l=document.querySelector(".gallery");let n="",S=15,g=1;b.addEventListener("submit",M);function M(s){if(s.preventDefault(),n=s.currentTarget.elements.text.value.toLowerCase(),g=1,n===""){d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight"});return}h(n,g,S).then(o=>{$(),o.total!==0?(c(),l.innerHTML="",l.insertAdjacentHTML("beforeend",p(o)),f=new m(".gallery a",{}),f.refresh(),T.style.visibility="visible"):(c(),l.innerHTML="",d.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight"}))}).catch(o=>console.log(o)).finally(()=>b.reset())}function $(){L.style.visibility="visible",v.style.visibility="visible"}function c(){L.style.visibility="hidden",v.style.visibility="hidden"}
//# sourceMappingURL=commonHelpers.js.map
