import{a as m,S as F,i as d}from"./assets/vendor-Do60_h77.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const S="30800646-c6d90f2a5eec003f430555754";m.defaults.baseURL="https://pixabay.com/api/";const p=async(o,t)=>{const l={key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15},{data:s}=await m.get("",{params:l});return s},i={galleryList:document.querySelector(".js-gallery-list"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-btn")},B=new F(".gallery a",{captionsData:"alt",captionDelay:250}),u=o=>{const t=o.map(({webformatURL:l,largeImageURL:s,tags:e,likes:r,views:n,comments:w,downloads:x})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${s}">
              <img class="gallery-img" src="${l}" alt="${e}" />
              <div class="gallery-info">
                <p class="gallery-info-item">
                  <b>Likes</b>
                  <span>${r}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Views</b>
                  <span>${n}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Comments</b>
                  <span>${w}</span>
                </p>
                <p class="gallery-info-item">
                  <b>Downloads</b>
                  <span>${x}</span>
                </p>
              </div>
            </a>
          </li>
        `).join("");i.galleryList.insertAdjacentHTML("beforeend",t),B.refresh()},M=()=>{i.galleryList.innerHTML=""},y=()=>{i.loader.classList.add("is-active")},h=()=>{i.loader.classList.remove("is-active")},L=()=>{i.loadMoreBtn.classList.remove("is-hidden")},b=()=>{i.loadMoreBtn.classList.add("is-hidden")},f={searchForm:document.querySelector(".js-submit-form"),galleryList:document.querySelector(".js-gallery-list"),loadMoreBtn:document.querySelector(".load-more-btn")};let a=1,g=0;const C=15;let c="",v=0;const q=async()=>{try{a++,b(),y();const o=await p(c,a);u(o.hits),scrollBy({top:v*2,behavior:"smooth"}),a<g?L():d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"#00FFFF",maxWidth:"432px",messageColor:"#000000"})}catch{d.error({message:"Something went wrong. Please try again later.",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"})}finally{h()}},P=async o=>{try{if(o.preventDefault(),c=o.target.elements["search-text"].value.trim(),M(),b(),a=1,!c){d.warning({message:"You forgot to type what you are looking for!",position:"topRight",color:"#FFCE1B",maxWidth:"432px",messageColor:"#ffffff"});return}y();const t=await p(c,a);if(t.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"#EF4040",maxWidth:"432px",messageColor:"#ffffff"});return}u(t.hits),g=Math.ceil(t.totalHits/C),v=f.galleryList.children[0].getBoundingClientRect().height,a<g&&L()}catch(t){console.log(t.message)}finally{h(),f.searchForm.reset()}};f.searchForm.addEventListener("submit",P);f.loadMoreBtn.addEventListener("click",q);
//# sourceMappingURL=index.js.map
