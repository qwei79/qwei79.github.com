import{g as s,c as p,u as d}from"./index-Bv6xT3cS.js";import{f as r}from"./three.core-CAoFeAfN.js";import{g as i,h as u}from"./index-HxFdCjmu.js";const w={__name:"sphere",props:{group:{type:Object,default:()=>null}},setup(h){const o=h,g=new r(5,10,8),a=Math.PI*2,t={radius:5,widthSegments:10,heightSegments:8,phiStart:0,phiLength:a,thetaStart:0,thetaLength:Math.PI};function n(){d(o.group,new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength))}const e=new s;return e.add(t,"radius",1,30).onChange(n),e.add(t,"widthSegments",3,64).step(1).onChange(n),e.add(t,"heightSegments",2,32).step(1).onChange(n),e.add(t,"phiStart",0,a).onChange(n),e.add(t,"phiLength",0,a).onChange(n),e.add(t,"thetaStart",0,a).onChange(n),e.add(t,"thetaLength",0,a).onChange(n),i(()=>{p(o.group,g)}),u(()=>{e.destroy(),o.group.remove(...o.group.children)}),(m,c)=>null}};export{w as default};
