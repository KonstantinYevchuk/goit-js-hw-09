const t=document.body,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");t.style.textAlign="center",e.style.padding="15px 30px",e.style.fontSize="20px",e.style.backgroundColor="white",o.style.padding="15px 30px",o.style.fontSize="20px",o.style.backgroundColor="white",r(set,o);let n=null;function r(t,e){t.setAttribute("disabled",!0),e.removeAttribute("disabled")}e.addEventListener("click",(function(){t.hasAttribute("background-color")?clearInterval(n):(n=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),r(e,remove),r(set,o))})),o.addEventListener("click",(function(){r(e,remove),r(set,o),clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.670b1f82.js.map
