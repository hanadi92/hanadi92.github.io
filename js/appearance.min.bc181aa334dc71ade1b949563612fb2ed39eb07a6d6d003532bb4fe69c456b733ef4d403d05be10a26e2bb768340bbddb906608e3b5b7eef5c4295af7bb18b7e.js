const sitePreference=document.documentElement.getAttribute("data-default-appearance"),userPreference=localStorage.getItem("appearance");(sitePreference==="dark"&&userPreference===null||userPreference==="dark")&&document.documentElement.classList.add("dark"),document.documentElement.getAttribute("data-auto-appearance")==="true"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&userPreference!=="light"&&document.documentElement.classList.add("dark"),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}));var updateMeta,updateLogo,getTargetAppearance,updateMermaidTheme=()=>{if(typeof mermaid!="undefined"){const e=document.documentElement.classList.contains("dark"),t=document.querySelectorAll("pre.mermaid");t.forEach(e=>{e.getAttribute("data-processed")?(e.removeAttribute("data-processed"),e.innerHTML=e.getAttribute("data-graph")):e.setAttribute("data-graph",e.textContent)}),e?(initMermaidDark(),mermaid.run()):(initMermaidLight(),mermaid.run())}};window.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("appearance-switcher"),n=document.getElementById("appearance-switcher-mobile");updateMeta(),this.updateLogo?.(getTargetAppearance()),updateMermaidTheme(),t&&(t.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");var e=getTargetAppearance();localStorage.setItem("appearance",e),updateMeta(),updateMermaidTheme(),this.updateLogo?.(e)}),t.addEventListener("contextmenu",e=>{e.preventDefault(),localStorage.removeItem("appearance")})),n&&(n.addEventListener("click",()=>{document.documentElement.classList.toggle("dark");var e=getTargetAppearance();localStorage.setItem("appearance",e),updateMeta(),updateMermaidTheme(),this.updateLogo?.(e)}),n.addEventListener("contextmenu",e=>{e.preventDefault(),localStorage.removeItem("appearance")}))}),updateMeta=()=>{var e=document.querySelector("body"),t=getComputedStyle(e);document.querySelector('meta[name="theme-color"]').setAttribute("content",t.backgroundColor)},updateLogo=e=>{var t=document.querySelectorAll("img.logo"),n=document.querySelectorAll("span.logo");targetLogoPath=e=="dark"?"/img/logo-light.svg":"/img/logo-dark.svg";for(const e of t)e.setAttribute("src",targetLogoPath);targetContent=e=="dark"?`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@700&amp;display=swap');
    </style>
  </defs>
  <rect width="400" height="200" rx="20" fill="#ffffff"/>
  <text
    x="200"
    y="145"
    font-family="'Noto Naskh Arabic', 'Traditional Arabic', serif"
    font-size="120"
    font-weight="700"
    fill="#1e293b"
    text-anchor="middle"
    direction="rtl"
    unicode-bidi="bidi-override"
  >هـ</text>
</svg>
`:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200" width="400" height="200">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@700&amp;display=swap');
    </style>
  </defs>
  <rect width="400" height="200" rx="20" fill="#1e293b"/>
  <text
    x="200"
    y="145"
    font-family="'Noto Naskh Arabic', 'Traditional Arabic', serif"
    font-size="120"
    font-weight="700"
    fill="#f1f5f9"
    text-anchor="middle"
    direction="rtl"
    unicode-bidi="bidi-override"
  >هـ</text>
</svg>
`;for(const e of n)e.innerHTML=targetContent},getTargetAppearance=()=>document.documentElement.classList.contains("dark")?"dark":"light",window.addEventListener("DOMContentLoaded",e=>{const t=document.getElementById("top-scroller"),n=document.getElementById("site-footer");t&&n&&t.getBoundingClientRect().top>n.getBoundingClientRect().top&&(t.hidden=!0)})