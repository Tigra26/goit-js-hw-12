import{a as p,S as v,i as a}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const S="30800646-c6d90f2a5eec003f430555754";p.defaults.baseURL="https://pixabay.com/api/";const h=async(r,t)=>{const n={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},{data:s}=await p.get("",{params:n});return s},l={galleryList:document.querySelector(".js-gallery-list"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-btn")},B=new v(".gallery a",{captionsData:"alt",captionDelay:250}),u=r=>{const t=r.map(({webformatURL:n,largeImageURL:s,tags:e,likes:o,views:c,comments:x,downloads:w})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${s}">
              <img class="gallery-img" src="${n}" alt="${e}" />
              <div class="gallery-info">
                <p class="gallery-info-item">
                  <b>Likes</b>
                  <span>${o}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Views</b>
                  <span>${c}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Comments</b>
                  <span>${x}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Downloads</b>
                  <span>${w}</span>
                </p>
              </div>
            </a>
          </li>
        `).join("");l.galleryList.insertAdjacentHTML("beforeend",t),B.refresh()},C=()=>{l.galleryList.innerHTML=""},y=()=>{l.loader.classList.add("is-active")},L=()=>{l.loader.classList.remove("is-active")},b=()=>{l.loadMoreBtn.classList.remove("is-hidden")},m=()=>{l.loadMoreBtn.classList.add("is-hidden")},g={searchForm:document.querySelector(".js-submit-form"),galleryList:document.querySelector(".js-gallery-list"),loadMoreBtn:document.querySelector(".load-more-btn")};let i=1,f=0;const M=15;let d="",F=0;const P=async()=>{try{i++,m(),y();const r=await h(d,i);u(r.hits),scrollBy({top:F*2,behavior:"smooth"}),i<f?b():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"#00FFFF",maxWidth:"432px",messageColor:"#000000"})}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"})}finally{L()}},q=async r=>{try{if(r.preventDefault(),d=r.target.elements["search-text"].value.trim(),C(),m(),i=1,!d){a.warning({message:"You forgot to type what you are looking for!",position:"topRight",color:"#FFCE1B",maxWidth:"432px",messageColor:"#000000"});return}y();const t=await h(d,i);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"});return}u(t.hits),f=Math.ceil(t.totalHits/M),F=g.galleryList.children[0].getBoundingClientRect().height,i<f?b():(m(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"#00FFFF",maxWidth:"432px",messageColor:"#000000"}))}catch(t){a.error({message:"Something went wrong. Please try again later.",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"}),console.log(t.message)}finally{L(),g.searchForm.reset()}};g.searchForm.addEventListener("submit",q);g.loadMoreBtn.addEventListener("click",P);
//# sourceMappingURL=index.js.map
