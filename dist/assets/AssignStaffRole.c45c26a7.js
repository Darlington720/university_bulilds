import{r as o,j as l,b as e,p as T,q as j,s as i,l as r,J as m,F as k,B as F,V as G,W as h}from"./vendor.9c0f602b.js";import{a as g}from"./staffApi.25d27803.js";import"./index.81294854.js";const S={staff:{value:"",label:""},role:{value:"",label:""},school:{value:"",label:""},campus:{value:"",label:""}},_=[{value:1,label:"MAIN CAMPUS"},{value:2,label:"KAMPALA CAMPUS"}],U=()=>{const[n,u]=o.exports.useState(S),{staff:O,role:d,school:b,campus:v}=n,[C,x]=o.exports.useState([]),[N,y]=o.exports.useState([]),[A,R]=o.exports.useState([]),[f,p]=o.exports.useState(!1),B=async()=>{const a=await g.getStaffAssignReqs();if(!a.ok)return alert("Failed to get the neccessary data");console.log(a.data);const s=a.data.result.staff.map(t=>({value:t.staff_id,label:t.staff_name})),w=a.data.result.roles.map(t=>({value:t.role_id,label:t.role_name})),M=a.data.result.schools.map(t=>({value:t.alias,label:t.school_name}));x(s),R(M),y(w)};o.exports.useEffect(()=>{B()},[]);const c=(a,s)=>{u({...n,[a]:s})},P=async a=>{a.preventDefault(),console.log("data",n),p(!0);const s=await g.assignRoleToStaff(n);if(p(!1),!s.ok){alert("error adding new staff role to server");return}if(!s.data.success)return h(s.data.message,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});h(s.data.message,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),u(S)},q=[3,4,6];return l("div",{children:[e(T,{className:"row-sm justify-content-center",children:e(j,{lg:6,xl:6,md:12,sm:12,children:l(i,{className:"box-shadow-0",children:[l(i.Header,{children:[e(i.Title,{as:"h3",className:"mb-1",children:"Assign Staff Role"}),e("p",{className:"mb-2"})]}),e(i.Body,{className:"pt-0",children:l(r,{className:"form-horizontal",onSubmit:P,children:[l(r.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Staff Name"}),e(m,{classNamePrefix:"Select-sm",name:"staff",required:!0,value:n.staff,onChange:a=>c("staff",a),options:C,placeholder:"Staff Name"})]}),l(r.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Role"}),e(m,{classNamePrefix:"Select-sm",name:"role",required:!0,value:d,onChange:a=>c("role",a),options:N,placeholder:"Role"})]}),q.includes(d.value)?null:l(k,{children:[e("label",{children:"School"}),e(r.Group,{style:{marginBottom:10,marginTop:0},children:e(m,{classNamePrefix:"Select-sm",name:"school",required:!0,value:b,onChange:a=>c("school",a),options:A,placeholder:"School"})})]}),e("label",{children:"Campus"}),e(r.Group,{style:{marginBottom:10,marginTop:0},children:e(m,{classNamePrefix:"Select-sm",name:"campus",required:!0,value:v,onChange:a=>c("campus",a),options:_,placeholder:"Campus"})}),e(r.Group,{className:"mb-0 mt-3 justify-content-end",children:e("div",{children:e(F,{variant:"primary",className:"",type:"submit",disabled:f,children:f?"Saving":"Save"})})})]})})]})})}),e(G,{})]})};export{U as default};