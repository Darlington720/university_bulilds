import{r,Y as w,b as e,j as a,o as m,p as l,C as f,Z as y,k as s,B as S}from"./vendor.3f9da98c.js";import{S as A,n as L,a as I}from"./index.a8f0071e.js";import{a as k}from"./staffApi.3013c964.js";const M="/assets/im1.47878e53.jpeg",P={username:"",password:""};function R(){const i=r.exports.useContext(A),[c,o]=r.exports.useState(""),[h,u]=r.exports.useState(!1),[d,g]=r.exports.useState(P),{username:x,password:N}=d,p=n=>{g({...d,[n.target.name]:n.target.value}),o("")},b=async n=>{n.preventDefault(),u(!0);const t=await k.login(d);if(u(!1),!t.ok){o(t.data.error);return}if(t.data.role==="Student"){o("Invalid Username or password");return}i.setCampus(t.data.assignedRole.campus_id===1?{id:1,name:"MAIN CAMPUS"}:{id:2,name:"KAMPALA CAMPUS"}),i.setIsLoggedIn(!0),i.setUser(t.data),I.apiClient.setHeader("session_token",t.data.active_auth),v()};let C=w();const v=()=>{C("/indexpage")};return e("div",{children:e("div",{className:"main-container container-fluid",children:a(m,{className:"no-gutter",children:[e(l,{md:6,lg:6,xl:7,className:"d-none d-md-flex bg-primary-transparent",children:e(m,{className:"wd-100p mx-auto text-center",children:e(l,{md:12,lg:12,xl:12,className:"my-auto mx-auto wd-100p",children:e("img",{src:M,className:"my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto",alt:"logo"})})})}),e(l,{md:6,lg:6,xl:5,className:"bg-white py-4",children:e("div",{className:"login d-flex align-items-center py-2",children:e(f,{className:"p-0",children:e(m,{children:e(l,{md:10,lg:10,xl:9,className:"mx-auto",children:a("div",{className:"card-sigin",children:[e("div",{className:"mb-5 d-flex",children:e("img",{alt:"user-img",style:{width:200},src:L})}),e("div",{className:"card-sigin",children:a("div",{className:"main-signup-header",children:[e("h2",{children:"Welcome!!"}),e("h5",{className:"fw-semibold mb-4",children:"Please sign in to continue."}),c&&e(y,{variant:"danger",children:c}),a(s,{action:"#",onSubmit:b,children:[a(s.Group,{children:[e(s.Label,{className:"mb-2",children:"Username"}),e(s.Control,{className:"mb-3",name:"username",placeholder:"Enter your username",type:"text",value:x,onChange:p,required:!0})," "]}),a(s.Group,{children:[e(s.Label,{className:"mb-2",children:"Password"}),e(s.Control,{className:"mb-3",name:"password",placeholder:"Enter your password",type:"password",value:N,onChange:p,required:!0})," "]}),a(S,{className:"btn-main-primary btn-block",type:"submit",children:["Sign In",h?e("span",{role:"status","aria-hidden":"true",className:"spinner-border spinner-border-sm ms-2"}):""]})]})]})})]})})})})})})]})})})}export{R as default};
