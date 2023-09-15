import{_ as v,S as x}from"./index.c7bb2c58.js";import{r as l,b as e,F as w,j as o,U as d,l as N,q as C,s as p,d as c}from"./vendor.9c0f602b.js";const{AgGridReact:_}=await v(()=>import("./vendor.9c0f602b.js").then(r=>r.m),["assets/vendor.9c0f602b.js","assets/vendor.f5fe307f.css"]),R=[{headerName:"ID",valueGetter:"node.rowIndex + 1",cellStyle:{borderLeft:"1px solid #ccc"},sortable:!0,filter:!0},{headerName:"Course Unit",field:"course_unit_name",cellStyle:{borderLeft:"1px solid #ccc"},sortable:!0,filter:!0},{headerName:"Session",field:"session_name",cellStyle:{borderLeft:"1px solid #ccc"},width:150,sortable:!0,filter:!0},{headerName:"Room",field:"room_name",cellStyle:{borderLeft:"1px solid #ccc"},width:150,sortable:!0,filter:!0},{headerName:"lecturer",field:"staff_name",cellStyle:{borderLeft:"1px solid #ccc"},sortable:!0,filter:!0}];function g(){return e("div",{className:"ag-overlay-no-rows-wrapper",children:e("div",{className:"ag-overlay-no-rows-center",children:"No Data Available"})})}function D(){const r=l.exports.useContext(x),n=[],h=[],m=[],f=l.exports.useMemo(()=>g,[]),b=l.exports.useMemo(()=>({noRowsMessageFunc:()=>"Sorry - no rows! at: "+new Date}),[]),s=r.generalRoleIds.includes(r.user.assignedRole.role_id)?r.data.lectures.map(t=>t.school):[`${r.user.assignedRole.for_wc_sch}`];for(let t=0;t<s.length;t++)n[t]=l.exports.useRef(null),h[t]={rowStyle:{borderBottom:"1px solid #ccc"},headerHeight:40,rowHeight:10},m[t]=l.exports.useCallback(()=>{n[t].current.api.setQuickFilter(document.getElementById(`filter-text-box${t}`).value)},[]);const i=r.data.lectures.map(t=>t.notYetStarted);console.log("Not yet lectures",i),console.log("schools",s);const y=l.exports.useMemo(()=>({sortable:!0,filter:!0,resizable:!0}),[]),u=i.map((t,a)=>e(w,{children:o(d.Pane,{eventKey:t[0]?t[0].alias:s[a],onClick:()=>console.log("lecture",t),children:[o("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:5,paddingLeft:10,paddingRight:10},children:[e("div",{style:{},children:e("h5",{children:`Lectures that have not yet started in ${s[a]} TODAY`})}),e("div",{children:e(N.Control,{className:"mb-3",style:{width:300},type:"text",id:`filter-text-box${a}`,placeholder:"Search...",onInput:m[a]})})]}),e("div",{style:{width:"100%",height:1,backgroundColor:"lightgray"}}),e("div",{className:"ag-theme-alpine justify-content-center",style:{height:400,marginTop:10,width:"100%"},children:e(_,{ref:n[a],gridOptions:h[a],columnDefs:R,rowData:i[a],rowHeight:30,headerHeight:30,cacheQuickFilter:!0,rowSelection:"single",animateRows:!0,rowStyle:{borderBottom:"1px solid #ccc"},defaultColDef:y,noRowsOverlayComponent:f,overlayNoRowsTemplate:g,noRowsOverlayComponentParams:b,pagination:!0})})]},a)}));return console.log("tab panes",u),e("div",{children:e(C,{xl:12,children:e(p,{id:"tabs-style4",children:o(p.Body,{children:[e("div",{className:"main-content-label mg-b-5",children:"Lectures that have not yet started today"}),e("div",{className:"d-grid d-sm-flex",children:e("p",{className:"mg-b-20 mg-b-20",children:`Lectures that have not started on ${new Date().toLocaleDateString()} Per School`})}),e("div",{className:"text-wrap",children:e("div",{className:"example",children:e("div",{className:"d-md-flex",children:o(d.Container,{id:"left-tabs-example",defaultActiveKey:r.generalRoleIds.includes(r.user.assignedRole.role_id)?"SBA":`${r.user.assignedRole.for_wc_sch}`,className:"",children:[e("div",{className:"panel panel-primary tabs-style-4",children:e("div",{className:"tab-menu-heading",children:e("div",{className:"tabs-menu",children:e(c,{variant:"",className:"nav panel-tabs me-3",children:s.map(t=>e(c.Item,{children:e(c.Link,{eventKey:t,children:t})}))})})})}),o("div",{className:"tabs-style-4",style:{width:"100%"},children:[e("div",{style:{width:"100%",height:1,backgroundColor:"#EFEFEF"}}),e(d.Content,{className:"border border-top-0 p-0  br-dark",style:{width:"100%",padding:0},children:u})]})]})})})})]})})})})}export{D as default};