import{j as e,b as r}from"./index.50596548.js";function a({tokens:n,hasRemValue:t=!1}){return e("div",{children:r("table",{className:"tokens-grid",children:[e("thead",{children:r("tr",{children:[e("th",{children:"Name:"}),e("th",{children:"Value:"}),t&&e("th",{children:"Pixels:"})]})}),e("tbody",{children:Object.entries(n).map(([d,i])=>r("tr",{children:[e("td",{children:d}),e("td",{children:i}),t&&r("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},d))})]})})}try{a.displayName="TokensGrid",a.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{a as T};
//# sourceMappingURL=tokens-grid.a3370ecc.js.map