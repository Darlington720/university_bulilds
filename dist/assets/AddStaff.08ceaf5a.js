import{r as m,j as o,b as e,p as h,q as g,s as n,l as t,J as S,B as v,W as b,U as u}from"./vendor.81523695.js";import{a as C}from"./staffApi.1e39a766.js";import"./index.1a6db8a1.js";const N=[{value:"MR",label:"MR"},{value:"MS",label:"MS"},{value:"PROFFESSOR",label:"PROFFESSOR"},{value:"DR",label:"DR"},{value:"ASSOC PROF",label:"ASSOCIATE PROFFESSOR"}],f={staff_id:"",staff_name:"",title:"",role:""},y=()=>{const[s,i]=m.exports.useState(f),[d,c]=m.exports.useState(!1),l=(a,r)=>{i({...s,[a]:r})},p=async a=>{a.preventDefault(),console.log("data",s),c(!0);const r=await C.addStaff(s);if(c(!1),!r.ok){alert("error adding new staff to server");return}if(!r.data.success)return u(r.data.message,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});u(r.data.message,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),i(f)};return o("div",{children:[e(h,{className:"row-sm justify-content-center",children:e(g,{lg:6,xl:6,md:12,sm:12,children:o(n,{className:"box-shadow-0",children:[o(n.Header,{children:[e(n.Title,{as:"h3",className:"mb-1",children:"Add New Staff"}),e("p",{className:"mb-2"})]}),e(n.Body,{className:"pt-0",children:o(t,{className:"form-horizontal",onSubmit:p,children:[e(t.Group,{children:e(t.Control,{className:"mb-3",type:"text",name:"staff_id",id:"inputName",value:s.staff_id,onChange:a=>l("staff_id",a.target.value),required:!0,placeholder:"Staff id"})}),e(t.Group,{style:{marginBottom:10,marginTop:0},children:e(S,{classNamePrefix:"Select-sm",name:"title",required:!0,value:s.title,onChange:a=>l("title",a),options:N,placeholder:"Title"})}),e(t.Group,{children:e(t.Control,{className:"mb-3",type:"text",id:"inputName",name:"staff_name",required:!0,value:s.staff_name,onChange:a=>l("staff_name",a.target.value),placeholder:"Staff Name"})}),e(t.Group,{children:e(t.Control,{className:"mb-3",type:"text",id:"inputName",required:!0,value:s.role,onChange:a=>l("role",a.target.value),placeholder:"Role"})}),e(t.Group,{className:"mb-0 mt-3 justify-content-end",children:e("div",{children:e(v,{variant:"primary",className:"",type:"submit",disabled:d,children:d?"Saving":"Save"})})})]})})]})})}),e(b,{})]})};export{y as default};