var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,o=(e,o)=>{for(var u in o||(o={}))t.call(o,u)&&n(e,u,o[u]);if(r)for(var u of r(o))s.call(o,u)&&n(e,u,o[u]);return e};import{z as u,b as c,B as i,C as l,F as a,G as m,H as b,e as d}from"./vendor.a6ef5708.js";import{A as p}from"./index.e32c2111.js";var N,f,_="_header_icmtn_1",C="_container_icmtn_5",I="_buttonsContainer_icmtn_16",h="_topRowButton_icmtn_29",k="_numberButton_icmtn_36",S="_operationButton_icmtn_43",$="_curvedBottomLeftButton_icmtn_50",w="_curvedBottomRightButton_icmtn_54",D="_showArea_icmtn_58";(f=N||(N={})).InsertFirstNumber="InsertFirstNumber",f.InsertDecimalFirstNumber="InsertDecimalFirstNumber",f.OperatorPressed="OperatorPressed",f.InsertSecondNumber="InsertSecondNumber",f.InsertDecimalSecondNumber="InsertDecimalSecondNumber",f.ShowingResult="ShowingResult";const g={mode:N.InsertFirstNumber,firstNumber:0,secondNumber:0,operator:null,result:"0"};function F({first:e,operator:t,second:r}){return Number(function({first:e,operator:t,second:r}){switch(t){case"+":return e+r;case"-":return e-r;case"*":return e*r;case"/":return e/r}}({first:e,operator:t,second:r}).toFixed(12))}function O(e,t){const r=t.payload,{mode:s,firstNumber:n,secondNumber:u,operator:c,result:i}=e,l=[N.InsertFirstNumber,N.InsertDecimalFirstNumber,N.ShowingResult].includes(s),a=[N.OperatorPressed,N.ShowingResult].includes(s);if([0,1,2,3,4,5,6,7,8,9].includes(r)){const{updatedResult:t,updatedNumber:c}=function(e){const t=l?n:u;if(a)return{updatedResult:`${e}`,updatedNumber:e};const r=[N.InsertDecimalFirstNumber,N.InsertDecimalSecondNumber].includes(s)&&!String(t).includes(".");return{updatedResult:r?`${t}.${e}`:`${0===t?"":t}${e}`,updatedNumber:Number(r?`${t}.${e}`:`${i}${e}`)}}(r);return o(o(o({},e),{mode:s===N.OperatorPressed?N.InsertSecondNumber:s,result:t}),l?{firstNumber:c}:{secondNumber:c})}if("."===r){return[N.InsertDecimalFirstNumber,N.InsertDecimalSecondNumber].includes(s)?e:s===N.ShowingResult?o(o({},e),{operator:null,mode:N.InsertDecimalFirstNumber,firstNumber:0,result:"0."}):s===N.OperatorPressed?o(o({},e),{mode:N.InsertDecimalSecondNumber,secondNumber:0,result:"0."}):o(o(o({},e),{mode:l?N.InsertDecimalFirstNumber:N.InsertDecimalSecondNumber,result:l?`${n}.`:`${u}.`}),l?{firstNumber:n}:{secondNumber:u})}if(function(e){return["+","-","*","/"].includes(e)}(r)){if(s===N.OperatorPressed)return o(o({},e),{operator:r});const t=i.endsWith(".")?i.substr(0,i.length-1):i,a=l?t:F({first:n,second:u,operator:null!=c?c:r});return o(o({},e),{mode:N.OperatorPressed,operator:r,firstNumber:Number(a),result:`${a}`})}if("+/-"===r){const t=-Number(i);return o(o(o({},e),l?{firstNumber:t}:{secondNumber:t}),{result:`${t}`})}if("%"===r){const t=l?Number(i)/100:u/100*n;return o(o(o({},e),l?{firstNumber:t}:{secondNumber:t}),{result:`${t}`})}if("="===r){const t=null==c?[N.InsertSecondNumber,N.InsertDecimalSecondNumber].includes(s)?u:n:F({first:n,second:u,operator:c});return o(o({},e),{mode:N.ShowingResult,result:`${t}`,firstNumber:t})}return g}export default()=>{const[e,t]=u(O,g),{result:r}=e;function s(e){t({type:"Press",payload:e})}return c("section",{class:C},c("header",{class:d("app-window-drag-handle",_)}),c("section",{class:D},r),c("section",{class:I},c("button",{class:h,onClick:()=>s("AC")},Number(r)>0?"C":"AC"),c("button",{class:h,onClick:()=>s("+/-")},c(p,{path:i})),c("button",{class:h,onClick:()=>s("%")},c(p,{path:l})),c("button",{class:S,onClick:()=>s("/")},c(p,{path:a})),c("button",{class:k,onClick:()=>s(7)},"7"),c("button",{class:k,onClick:()=>s(8)},"8"),c("button",{class:k,onClick:()=>s(9)},"9"),c("button",{class:S,onClick:()=>s("*")},c(p,{path:m})),c("button",{class:k,onClick:()=>s(4)},"4"),c("button",{class:k,onClick:()=>s(5)},"5"),c("button",{class:k,onClick:()=>s(6)},"6"),c("button",{class:S,onClick:()=>s("-")},c(p,{path:b,size:24})),c("button",{class:k,onClick:()=>s(1)},"1"),c("button",{class:k,onClick:()=>s(2)},"2"),c("button",{class:k,onClick:()=>s(3)},"3"),c("button",{class:S,onClick:()=>s("+")},"+"),c("button",{class:d(k,$),style:{gridColumn:"1 / span 2"},onClick:()=>s(0)},"0"),c("button",{class:k,onClick:()=>s(".")},"."),c("button",{class:d(S,w),onClick:()=>s("=")},"=")))};