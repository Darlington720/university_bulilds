import{r as c,R as K,b as e,a7 as V,j as t,s as i,M as S,L as W,F as d,K as m,q as b,B as f,U as X,v as x,X as J,a6 as M}from"./vendor.d738f66a.js";import{a as D}from"./staffApi.28f2f47c.js";import"./index.6b14fc96.js";const Q=[{value:"MAIN",label:"Main Campus"},{value:"KAMPALA",label:"Kampala Campus"}],Z={schools:[],studyTimes:[],year_sem:[],rooms:[],modules:[],sessions:[]},k={school:"",campus:"",study_time:"",year_sem:""},ee=[{value:"core",label:"Core"},{value:"elective",label:"Elective"}],ae=[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"}],se=[{value:"1",label:"1"},{value:"2",label:"2"}],L={courseID:"",courseName:"",courseCode:"",moduleLevel:[],studyYr:[],sem:[],school:[]};function re(){const N=[{date:new Date,session:"",room:"",courseUnit:""}],[h,_]=c.exports.useState(1),[n,g]=c.exports.useState(N),[R,C]=c.exports.useState(!1),[y,A]=c.exports.useState(Z),[r,v]=c.exports.useState(k),[B,T]=c.exports.useState(!1),[$,w]=c.exports.useState(!1),[P,U]=c.exports.useState([]),[u,E]=c.exports.useState(L);c.exports.useState(!1);const q=async()=>{C(!0);const a=await D.getExamTTReqs();if(C(!1),!a.ok)return alert("Failed to load the requirements needed to start adding the timetable");console.log("result",a.data);let l={schools:[],studyTimes:[],year_sem:[],rooms:[],modules:[],sessions:[]};a.data.result.schools.forEach(s=>{l.schools.push({value:s.school_id,label:`${s.school_name} - ${s.alias}`})});const o=a.data.result.schools.map(s=>({value:s.alias,label:`${s.school_name} - ${s.alias}`}));U(o),a.data.result.rooms.forEach(s=>{l.rooms.push({value:s.room_id,label:s.room_name})}),a.data.result.study_times.forEach(s=>{l.studyTimes.push({value:s.st_id,label:s.study_time_name})}),a.data.result.year_sem.forEach(s=>{l.year_sem.push({value:s.ys_id,label:`year: ${s.year}, sem: ${s.sem}`})}),a.data.result.sessions.forEach(s=>{l.sessions.push({value:s.s_id,label:s.session_name})}),a.data.result.modules.forEach(s=>{l.modules.push({value:{course_code:s.course_id,course_name:s.course_name},label:`${s.course_name} - ${s.school_id}`})}),A(l)};c.exports.useEffect(()=>{q()},[]);class Y extends K.Component{render(){const{options:l,children:o,maxHeight:s,getValue:I}=this.props,[O]=I(),j=l.indexOf(O)*40;return e(V,{height:s,itemCount:o.length,itemSize:40,initialScrollOffset:j,children:({index:H,style:z})=>e("div",{style:z,children:o[H]})})}}const G=async a=>{a.preventDefault();const l={headers:{school:r.school,studyTime:r.study_time,campus:r.campus,year_sem:r.year_sem},timetable:n};console.log("To be added",l),C(!0);const o=await D.addExamTT(l);if(C(!1),!o.ok)return console.log(o.data),alert("Failed to save the timetable");if(console.log(o.data),!o.data.success)return M.fire({title:"Error",text:o.data.message});if(o.data.success)return _(1),g(N),v(k),M.fire({icon:"success",title:"Success",text:o.data.message})},F=async a=>{a.preventDefault(),console.log("data am sending",u),w(!0);const l=await D.addNewModule(u);if(w(!1),l.ok||console.log("Error saving module"),!l.data.success)return alert(l.data.message);alert(l.data.message),E(L),q()},p=(a,l)=>{E({...u,[a]:l})};return t(i,{md:12,xl:12,xs:12,sm:12,children:[t(S,{show:B,backdrop:"static",keyboard:!1,children:[t(S.Header,{children:[e(S.Title,{children:"ADD NEW COURSE UNIT"}),e(W,{to:"#",as:"span",className:"d-flex ms-auto text-dark",onClick:()=>{T(!1)},children:e("i",{className:"fe fe-x ms-auto"})})]}),t(d,{onSubmit:F,children:[t(S.Body,{children:[e("h6",{children:"Course ID"}),e(d.Control,{className:"mb-3",required:!0,type:"text",name:"courseID",value:u.courseID,onChange:a=>p(a.target.name,a.target.value),placeholder:"Course ID"}),e("h6",{children:"Course Name"}),e(d.Control,{className:"mb-3",required:!0,type:"text",id:"inputName",value:u.courseName,name:"courseName",onChange:a=>p(a.target.name,a.target.value),placeholder:"Course Name"}),e("h6",{children:"Course Code"}),e(d.Control,{className:"mb-3",type:"text",required:!0,id:"inputName",placeholder:"Course Code",value:u.courseCode,name:"courseCode",onChange:a=>p(a.target.name,a.target.value)}),e("h6",{children:"Module level"}),e(m,{classNamePrefix:"Select-sm mb-3",required:!0,name:"moduleLevel",value:u.moduleLevel,onChange:a=>p("moduleLevel",a),options:ee,placeholder:"Module Level"}),t(b,{style:{marginTop:10,marginBottom:10},children:[t(i,{children:[e("h6",{children:"Study Year"}),e(m,{required:!0,classNamePrefix:"Select-sm",value:u.studyYr,options:ae,name:"studyYr",onChange:a=>p("studyYr",a),placeholder:"Study Year"})]}),t(i,{children:[e("h6",{children:"Sem"}),e(m,{required:!0,classNamePrefix:"Select-sm",value:u.sem,options:se,onChange:a=>p("sem",a),placeholder:"Sem"})]})]}),e("h6",{children:"School"}),e(m,{required:!0,classNamePrefix:"Select-sm",value:u.school,onChange:a=>p("school",a),options:P,placeholder:"School"})]}),t(S.Footer,{children:[e(f,{type:"submit",className:"ripple",variant:"primary",children:$?"Saving...":"Save"}),e(f,{className:"ripple",variant:"secondary",onClick:()=>T(!1),children:"Close"})]})]})]}),R?e("div",{className:"overlay_dashboard",style:{},children:e(X,{animation:"border",variant:"primary",className:"",role:"status",children:e("span",{className:"sr-only",children:"Loading..."})})}):null,e(x,{className:"card-primary",children:e(x.Body,{children:t(d,{onSubmit:G,children:[t(b,{children:[t(i,{sm:12,md:6,children:[e("div",{className:"main-content-label mg-b-5",children:"Add Exam Timetable"}),e("p",{className:"mg-b-20",children:"Exams/Add Exam Timetable"})]}),e(i,{style:{display:"flex",flexDirection:"column"},children:e("div",{onClick:()=>console.log("open modal"),style:{alignSelf:"flex-end"},children:e(f,{className:"main-content-label mg-b-5 text-white",onClick:()=>T(!0),children:"Add Course Unit"})})})]}),e("label",{className:"main-content-label mg-b-5",style:{fontSize:12},children:"General Examination details"}),e(x,{className:"card-body border shadow-none",style:{padding:5},children:t(i,{lg:12,children:[t(b,{children:[e(i,{lg:6,md:6,children:t(d.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Campus"}),e(m,{classNamePrefix:"Select-sm",name:"staff",isDisabled:h>1,required:!0,value:r.campus,onChange:a=>{r.campus=a,v({...r})},options:Q,placeholder:"Campus"})]})}),e(i,{lg:6,md:6,children:t(d.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"School"}),e(m,{classNamePrefix:"Select-sm",name:"school",isDisabled:h>1,required:!0,value:r.school,onChange:a=>{r.school=a,v({...r})},options:y.schools,placeholder:"Select School"})]})})]}),t(b,{children:[e(i,{lg:6,md:6,children:t(d.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Study Time"}),e(m,{classNamePrefix:"Select-sm",name:"study_time",isDisabled:h>1,required:!0,value:r.study_time,onChange:a=>{r.study_time=a,v({...r})},options:y.studyTimes,placeholder:"Select Study time"})]})}),e(i,{lg:6,md:6,children:t(d.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Year - Sem"}),e(m,{classNamePrefix:"Select-sm",name:"year_sem",isDisabled:h>1,required:!0,value:r.year_sem,onChange:a=>{r.year_sem=a,v({...r})},options:y.year_sem,placeholder:"select year - sem"})]})})]})]})}),e("label",{className:"main-content-label mg-b-5 text-center",style:{fontSize:12,textAlign:"center"},children:"Examinations"}),[...Array(h)].map((a,l)=>e(x,{className:"card-body border shadow-none ",style:{padding:5},children:t(i,{lg:12,children:[t(b,{children:[e(i,{lg:6,md:6,children:t(d.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Date"}),e(J,{selected:n[l].date,onChange:o=>{const s=new Date(o).getFullYear()+"-"+(new Date(o).getMonth()+1)+"-"+new Date(o).getDate();console.log("Date",s),n[l].date=o,g([...n])},dateFormat:"yyyy-MM-dd",className:"form-control date-picker"})," "]})}),e(i,{lg:6,md:6,children:t(d.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Session"}),e(m,{classNamePrefix:"Select-sm",name:"session",required:!0,value:n[l].session,onChange:o=>{n[l].session=o,g([...n])},options:y.sessions,placeholder:"Select Session"})]})})]}),t(b,{children:[e(i,{lg:6,md:6,children:t(d.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Room"}),e(m,{classNamePrefix:"Select-sm",name:"room",required:!0,value:n[l].room,onChange:o=>{n[l].room=o,g([...n])},options:y.rooms,placeholder:"Select Room"})]})}),e(i,{lg:6,md:6,children:t(d.Group,{style:{marginBottom:10,marginTop:0},children:[e("label",{children:"Course Unit"}),e(m,{components:{MenuList:Y},maxMenuHeight:200,value:n[l].courseUnit,onChange:o=>{let s={label:`${o.label}`,value:{...o.value,course_code:r.study_time.label==="DAY/WEEKEND"?`${o.value.course_code}`:`${o.value.course_code}-${r.study_time.label}`}};n[l].courseUnit=s,g([...n])},classNamePrefix:"Select-sm",name:"module",required:!0,options:y.modules,placeholder:"Select Course Unit"})]})})]})]})},l)),t("div",{style:{display:"flex",width:"100%",justifyContent:"space-between"},children:[e(f,{type:"submit",children:"Save Timetable"}),t("div",{style:{display:"flex",justifyContent:"flex-end"},children:[e("div",{style:{marginRight:5},children:e(f,{onClick:()=>{h==1?alert("Deleting the 1st row is not allowed"):(n.pop(),_(h-1))},style:{backgroundColor:"red",padding:0,width:40,height:40},children:e("i",{className:"fa fa-trash"})})}),e("div",{style:{marginLeft:5},children:e(f,{onClick:()=>{g(n.concat(N)),_(h+1)},style:{backgroundColor:"blue",padding:0,width:40,height:40},children:e("i",{className:"fa fa-plus"})})})]})]})]})})})]})}export{re as default};
