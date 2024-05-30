import{Q as z,r as t,j as l,b as e,l as _,p as H,q as m,J as A,s as J,af as K,B as O,Y as F,a7 as Q,a1 as B,H as V,ag as G,ah as W,$ as k}from"./vendor.daf4729c.js";import{a as D}from"./staffApi.560af7a2.js";import{u as X,b as Z}from"./index.142592eb.js";const ee=X.baseUrl1,ae=z(ee),te=[{value:"1",label:"1"},{value:"2",label:"2"}];function ne(){const p=t.exports.useRef(null),[f,h]=t.exports.useState([]),[L,se]=t.exports.useState(!1),[g,y]=t.exports.useState(!1),[S,re]=t.exports.useState(0),[C,x]=t.exports.useState(),[P,U]=t.exports.useState(),[i,E]=t.exports.useState(""),[d,Y]=t.exports.useState(""),[j,T]=t.exports.useState(),b=async()=>{x(!0);const a=await D.lastUploadDate();if(x(!1),!a.ok)return console.log("Error in fetching the last upload date and time",a.data.data);U(a.data.data.upload_date)},R=async()=>{const a=await Z.getAccYrs();if(!a.ok)return alert("Failed to fetch acc_yrs");T(a.data.map(s=>({value:s.id,label:s.acc_yr})))};t.exports.useEffect(()=>{b(),R()},[]);const $=a=>new Promise((s,c)=>{const o=new FileReader;o.onload=n=>{const u=n.target.result;s(u)},o.onerror=n=>{c(n)},o.readAsArrayBuffer(a)}),q=async()=>{for(const a of f)try{const s=await $(a),c=G(s),o=c.Sheets[c.SheetNames[0]],u=W.sheet_to_json(o).map(w=>{const v={};for(const N in w){let I=N.replace(/"/g,"");v[I]=w[N].replace(/"/g,"")}return v}),M={acc_yr_id:d.value,sem:i.value,students:u};y(!0);const r=await D.importExcelToDB(M);return y(!1),r.ok?r.data.success?(p.current.removeFiles(),h([]),b(),ae.emit("update_elligible_voters_from_upload",{elligible_voters:r.data.result.elligibleVoters+r.data.result.exemptedStudents}),k.fire({icon:"success",title:"Success",text:r.data.message})):k.fire({title:"Error!!!",text:r.data.message}):(console.log("errror",r.problem),alert("Failed to upload file"))}catch(s){console.error("Error reading file:",s)}};return l("div",{children:[e(_,{children:l(H,{className:"row-sm center",style:{marginBottom:20},children:[l(m,{lg:2,children:[e("label",{className:"lb",children:"Acc Yr"}),e(A,{classNamePrefix:"Select-sm",required:!0,value:d,onChange:a=>Y(a),options:j,placeholder:"Select acc yr"})]}),l(m,{lg:2,children:[e("label",{className:"lb",children:"Sem"}),e(A,{classNamePrefix:"Select-sm",required:!0,value:i,onChange:a=>E(a),options:te,placeholder:"Select sem"})]})]})}),l(J,{style:{padding:10},children:[e(_.Label,{className:"mt-3",children:"Upload Excel files here"}),e(K,{ref:p,className:"mt-3 mb-3",allowMultiple:!0,maxFiles:1,acceptedFileTypes:["csv"],name:"excelFile",onupdatefiles:a=>{h(a.map(s=>s.file))}}),e("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:e(m,{sm:6,md:2,className:"mg-t-10 mg-sm-t-0 justify-center",children:e(O,{variant:"primary",className:"btn-block",disabled:f.length===0||!d||!i||g,onClick:q,children:g?e(F,{animation:"border",size:"sm",className:"",role:"status","aria-hidden":"true",children:e("span",{className:"sr-only",children:"Loading..."})}):"Upload"})})})]}),e("div",{style:{display:"flex",justifyContent:"center"},children:l(Q,{variant:"primary",style:{padding:5,alignSelf:"center"},children:["Last Update Date:",C?e(F,{animation:"grow",className:"",role:"status",children:e("span",{className:"sr-only",children:"Loading..."})}):new Date(P).toLocaleString()]})}),e(B,{show:L,backdrop:"static",centered:!0,children:l(B.Body,{className:"text-center p-2 pb-0",children:[e("h4",{style:{textAlign:"center"},children:"Progress (%)"}),e(V,{className:"h-8",variant:"primary",now:S*100,label:`${(S*100).toFixed(2)}%`}),e("div",{style:{margin:10},children:e("h6",{children:"Please wait..."})})]})})]})}export{ne as default};