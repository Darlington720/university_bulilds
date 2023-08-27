import{r,R as se,b as e,a3 as ie,j as t,l as W,p as ee,q as L,a4 as f,J as A,F as ne,B as O,Q as J,a5 as pe,s as ye,v as P,a6 as te,a7 as ae}from"./vendor.9c0f602b.js";import{s as ge}from"./Indexpage.module.efae9193.js";import{a as H}from"./index.81294854.js";const ve=Array.from({length:1e5}).map((s,u)=>({label:`Item #${u}`,value:u})),be=s=>({sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6})[s.toLowerCase()]||-1,le=({index:s,onRemove:u,reqs:p,onChangeCU:R,onChangeLecturer:C,onChangeRoom:h,onCheckBoxChange:D,cuValue:y,lecturerValue:S,roomValue:_,checkBoxValue:z})=>(r.exports.useState(null),t("tr",{children:[e("td",{style:{padding:5,width:"5rem",margin:0},children:e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e(W.Check,{type:"checkbox",id:"checkbox1",value:z,onChange:D,style:{fontSize:25,position:"relative"}})})}),e("td",{style:{padding:5,maxWidth:"5rem",margin:0},children:e("div",{children:e(f,{value:y,required:!0,onChange:R,options:p?p.modules.map(d=>({label:`${d.course_name} - ${d.school_id}`,value:d})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Course Unit",style:{width:"100%",padding:0,margin:0}})})}),e("td",{style:{padding:5,width:"5rem",margin:0},children:e("div",{children:e(f,{value:S,required:!0,onChange:C,options:p?p.staff_members.map(d=>({label:d.staff_name,value:d.staff_id})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Lecturer",style:{width:"100%",padding:0,margin:0}})})}),e("td",{style:{padding:5,width:"5rem",margin:0},children:t("div",{style:{display:"flex",justifyContent:"space-between"},children:[e("div",{style:{width:"80%"},children:e(f,{value:_,required:!0,onChange:h,options:p?p.rooms.map(d=>({label:d.room_name,value:d.room_id})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Room",style:{width:"100%",padding:0,margin:0}})}),e("button",{type:"button",class:"btn btn-danger removeTR",onClick:u,style:{padding:0,paddingTop:0,paddingLeft:15,paddingRight:15,height:"auto"},children:e("i",{style:{padding:0,margin:0},class:"bi bi-x-lg"})})]})})]})),Se=({reqs:s,days:u,handleSave:p,showDialog:R,setShow3:C,defaultDay:h,defaultSession:D})=>{const y=r.exports.useRef(null),[S,_]=r.exports.useState(null),[z,d]=r.exports.useState(h),[B,N]=r.exports.useState(D),[I,U]=r.exports.useState(!1);r.exports.useEffect(()=>{d(h),N(D)},[h,D]);const c=[{room:null,courseUnit:null,lecturer:null,day_wkd:!1}],[l,g]=se.useState(c),q=[],[i,T]=r.exports.useState([]),F=()=>{T([...i,e(le,{index:q.length,onRemove:M})])},M=n=>{console.log("index to remove",n);const o=[...i];o.splice(n,1),T(o)},V=async n=>{const o={selectedDay:z,selectedSession:B,timetableFormFields:l};U(!0),await p(o),U(!1),d(null),N(null),T([]),g(c)},Q=t("div",{children:[e(O,{onClick:V,className:"ripple",variant:"primary",children:I?e(J,{animation:"border",size:"sm",className:"",role:"status","aria-hidden":"true",children:e("span",{className:"sr-only",children:"Loading..."})}):"Save Changes"}),e(O,{className:"ripple",variant:"secondary",onClick:()=>{C(!1)},children:"Close"})]}),[j,G]=r.exports.useState([]);return e("div",{children:e(ie,{header:"Add Timetable",visible:R,position:"top",footer:Q,maximizable:!0,style:{width:"70vw",padding:0},onHide:()=>C(!1),children:t(W,{ref:y,id:"myForm",onSubmit:V,children:[t(ee,{style:{paddingBottom:10},children:[t(L,{lg:4,children:[e("label",{className:"lb",children:"Day"}),e(f,{value:z,required:!0,onChange:n=>{d(n.value),console.log("the value",n.value)},options:u.map(n=>({label:n,value:be(n)})),virtualScrollerOptions:{itemSize:38},placeholder:"Select Day",style:{width:"100%",padding:0,margin:0,fontSize:10}})]}),t(L,{lg:4,children:[e("label",{className:"lb",children:"Session"}),e(f,{value:B,required:!0,onChange:n=>N(n.value),options:s?s.sessions.map(n=>({label:n.session_name,value:n.ls_id})):[],virtualScrollerOptions:{itemSize:38},placeholder:"Select Session",style:{width:"100%",padding:0,margin:0}})]})]}),e("div",{className:"table-responsive",children:t("table",{style:{zIndex:-999},className:"table table-bordered table-condensed",children:[e("thead",{children:t("tr",{children:[e("th",{style:{width:"10%"},children:"Day/Weekend"}),t("th",{style:{width:"30%"},children:["Course Unit ",e("span",{className:"required",children:"*"})]}),t("th",{style:{width:"30%"},children:["Lecturer ",e("span",{className:"required",children:"*"})]}),e("th",{style:{width:"30%"},children:"Room"})]})}),e("tbody",{id:"timetable_entry_append",style:{borderBottom:"1px solid #ddd"},children:j.length>0?j.map((n,o)=>t("tr",{className:"iadd",children:[e("td",{className:"center",width:"90",children:e("div",{className:"checkbox-replace",children:t("label",{className:"i-checks",children:[e("input",{type:"checkbox",defaultChecked:!1}),e("i",{})]})})}),e("td",{width:"20%",children:e("div",{children:e(f,{value:S,onChange:k=>_(k.value),options:ve,virtualScrollerOptions:{itemSize:38},placeholder:"Select Item",className:"w-full md:w-14rem"})})}),e("td",{width:"20%",children:t("div",{children:[e(A,{classNamePrefix:"Select-sm",placeholder:"Select Lecturer"}),e("span",{className:"error"})]})}),e("td",{children:t("div",{children:[t("div",{className:"input-group",children:[e("span",{className:"input-group-addon",children:e("i",{className:"far fa-clock"})}),e("input",{type:"text",name:`timetable[${o}][time_start]`,className:"form-control"})]}),e("span",{className:"error"})]})}),e("td",{children:t("div",{children:[t("div",{className:"input-group",children:[e("span",{className:"input-group-addon",children:e("i",{className:"far fa-clock"})}),e("input",{type:"text",name:`timetable[${o}][time_end]`,className:"form-control"})]}),e("span",{className:"error"})]})}),t("td",{className:"timet-td",children:[e("input",{type:"text",className:"form-control",name:`timetable[${o}][class_room]`}),e("button",{type:"button",className:"btn btn-danger removeTR",children:e("i",{className:"fas fa-times"})})]})]})):t(ne,{children:[t("tr",{children:[e("td",{style:{width:"10%",padding:5,margin:0},children:e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e(W.Check,{type:"checkbox",id:"checkbox1",style:{fontSize:25,position:"relative"},value:l[0].day_wkd,onChange:n=>{l[0].day_wkd=n.target.checked,g([...l])}})})}),e("td",{style:{padding:5,maxWidth:"5rem",margin:0,overflow:"hidden"},children:e("div",{style:{maxWidth:"100%",overflow:"hidden"},children:e(f,{value:l[0].courseUnit,required:!0,onChange:n=>{l[0].courseUnit=n.value,g([...l])},options:s?s.modules.map(n=>({label:`${n.course_name} - ${n.school_id}`,value:n})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Course Unit",style:{width:"100%",padding:0,margin:0}})})}),e("td",{style:{padding:5,width:"5rem",margin:0,overflow:"hidden"},children:e(f,{value:l[0].lecturer,required:!0,onChange:n=>{l[0].lecturer=n.value,g([...l])},options:s?s.staff_members.map(n=>({label:n.staff_name,value:n.staff_id})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Lecturer",style:{width:"100%",padding:0,margin:0}})}),e("td",{style:{padding:5,width:"5rem",margin:0,overflow:"hidden"},children:e(f,{value:l[0].room,required:!0,onChange:n=>{l[0].room=n.value,g([...l])},options:s?s.rooms.map(n=>({label:n.room_name,value:n.room_id})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Room",style:{width:"100%",padding:0,margin:0}})})]}),i.map((n,o)=>e(le,{index:o,onRemove:()=>{l.pop(),M(o)},checkBoxValue:l[o+1].day_wkd,cuValue:l[o+1].courseUnit,lecturerValue:l[o+1].lecturer,roomValue:l[o+1].room,onCheckBoxChange:k=>{l[o+1].day_wkd=k.target.checked,g([...l])},onChangeCU:k=>{l[o+1].courseUnit=k.value,g([...l])},onChangeLecturer:k=>{l[o+1].lecturer=k.value,g([...l])},onChangeRoom:k=>{l[o+1].room=k.value,g([...l])},reqs:s},o))]})})]})}),e("div",{style:{marginTop:20},children:t(O,{type:"button",variant:"outline-dark",onClick:()=>{g(l.concat(c)),F()},class:"btn btn-danger removeTR",style:{padding:5},children:[e("i",{class:"bi bi-plus-square-fill"})," Add More"]})})]})})})},fe=s=>H.apiClient.get("/api/timetable/reqs/class_tt"),_e=s=>H.apiClient.post("/api/timetable/lecture_timetable",s),we=s=>H.apiClient.post("/api/timetable/addClassTimetable",s),xe=s=>H.apiClient.post("/api/timetable/edit_lecture_tt",s),Ce=s=>H.apiClient.delete(`/api/timetable/delete_tt_cu/${s}`),$={getClassTTReqs:fe,getLectureTimetable:_e,saveLectureTimetable:we,updateLectureTimetable:xe,deleteCuFromTT:Ce};Array.from({length:1e5}).map((s,u)=>({label:`Item #${u}`,value:u}));const Ne=s=>({sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6})[s.toLowerCase()]||-1,Te=({reqs:s,days:u,handleSave:p,showDialog:R,setShow4:C,defaultDay:h,defaultSession:D,selectedCu:y})=>{const S=r.exports.useRef(null);r.exports.useState(null);const[_,z]=r.exports.useState(h),[d,B]=r.exports.useState(D),[N,I]=r.exports.useState(!1),U=[{room:null,courseUnit:null,lecturer:null,day_wkd:!1}],[c,l]=se.useState(U);r.exports.useState([]),r.exports.useEffect(()=>{if(z(h),B(D),console.log("cu---",y),y){let i="";const T=y.c_unit_id.includes("-");T?i=y.c_unit_id.split("-")[0]:i=y.c_unit_id,console.log("c_id---",i),l([{...c[0],room:y.room_id,courseUnit:{course_id:i,course_name:y.course_unit_name},lecturer:y.staff_id,day_wkd:!T}])}},[h,D,y]);const g=async i=>{const T={tt_id:y.tt_id,selectedDay:_,selectedSession:d,timetableFormFields:c};console.log("data",T),I(!0),await p(T),I(!1)},q=t("div",{children:[e(O,{onClick:g,className:"ripple",variant:"primary",children:N?e(J,{animation:"border",size:"sm",className:"",role:"status","aria-hidden":"true",children:e("span",{className:"sr-only",children:"Loading..."})}):"Update"}),e(O,{className:"ripple",variant:"secondary",onClick:()=>{C(!1)},children:"Close"})]});return r.exports.useState([]),e("div",{children:e(ie,{header:"Edit Timetable",visible:R,position:"top",footer:q,maximizable:!0,style:{width:"70vw",padding:0},onHide:()=>C(!1),children:t(W,{ref:S,id:"myForm",onSubmit:g,children:[t(ee,{style:{paddingBottom:10},children:[t(L,{lg:4,children:[e("label",{className:"lb",children:"Day"}),e(f,{value:_,required:!0,onChange:i=>{z(i.value),console.log("the value",i.value)},options:u.map(i=>({label:i,value:Ne(i)})),virtualScrollerOptions:{itemSize:38},placeholder:"Select Day",style:{width:"100%",padding:0,margin:0,fontSize:10}})]}),t(L,{lg:4,children:[e("label",{className:"lb",children:"Session"}),e(f,{value:d,required:!0,onChange:i=>B(i.value),options:s?s.sessions.map(i=>({label:i.session_name,value:i.ls_id})):[],virtualScrollerOptions:{itemSize:38},placeholder:"Select Session",style:{width:"100%",padding:0,margin:0}})]})]}),e("div",{className:"table-responsive",children:t("table",{style:{zIndex:-999},className:"table table-bordered table-condensed",children:[e("thead",{children:t("tr",{children:[e("th",{style:{width:"10%"},children:"Day/Weekend"}),t("th",{style:{width:"30%"},children:["Course Unit ",e("span",{className:"required",children:"*"})]}),t("th",{style:{width:"30%"},children:["Lecturer ",e("span",{className:"required",children:"*"})]}),e("th",{style:{width:"30%"},children:"Room"})]})}),e("tbody",{id:"timetable_entry_append",style:{borderBottom:"1px solid #ddd"},children:e(ne,{children:t("tr",{children:[e("td",{style:{width:"10%",padding:5,margin:0},children:e("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e(W.Check,{type:"checkbox",id:"checkbox1",style:{fontSize:25,position:"relative"},value:c[0].day_wkd,defaultChecked:c[0].day_wkd,onChange:i=>{c[0].day_wkd=i.target.checked,l([...c])}})})}),e("td",{style:{padding:5,maxWidth:"5rem",margin:0,overflow:"hidden"},children:e("div",{style:{maxWidth:"100%",overflow:"hidden"},children:e(f,{value:c[0].courseUnit,required:!0,onChange:i=>{c[0].courseUnit=i.value,l([...c])},options:s?s.modules.map(i=>({label:`${i.course_name} - ${i.school_id}`,value:{course_id:i.course_id,course_name:i.course_name}})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Course Unit",style:{width:"100%",padding:0,margin:0}})})}),e("td",{style:{padding:5,width:"5rem",margin:0,overflow:"hidden"},children:e(f,{value:c[0].lecturer,required:!0,onChange:i=>{c[0].lecturer=i.value,l([...c])},options:s?s.staff_members.map(i=>({label:i.staff_name,value:i.staff_id})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Lecturer",style:{width:"100%",padding:0,margin:0}})}),e("td",{style:{padding:5,width:"5rem",margin:0,overflow:"hidden"},children:e(f,{value:c[0].room,required:!0,onChange:i=>{c[0].room=i.value,l([...c])},options:s?s.rooms.map(i=>({label:i.room_name,value:i.room_id})):[],filter:!0,virtualScrollerOptions:{itemSize:38},placeholder:"Select Room",style:{width:"100%",padding:0,margin:0}})})]})})})]})})]})})})},Z=s=>({sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6})[s.toLowerCase()]||-1,ke=[{value:"1",label:"1"},{value:"2",label:"2"}],De=[{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"},{value:"2023",label:"2023"}],Ue=({courseUnitName:s,lecturer:u,room:p,onClickEditCU:R,onClickDeleteCU:C})=>t("div",{style:{display:"flex",marginBottom:10},children:[e("div",{style:{marginRight:5},children:"-"}),t("div",{children:[e(te,{placement:"top",overlay:e(ae,{children:s}),children:e("div",{style:{whiteSpace:"normal",textOverflow:"ellipsis",overflow:"hidden",height:"2.3em",lineHeight:"1.1em",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"},children:s})}),t("div",{style:{display:"flex"},children:[e(te,{placement:"top",overlay:e(ae,{children:u}),children:e("div",{style:{marginRight:10,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",width:"8em"},children:e("strong",{children:u})})}),e("div",{children:e("span",{children:p})})]}),e("a",{onClick:R,className:"btn btn-success btn-sm text-white",style:{marginRight:5},children:"Edit"}),e("a",{onClick:C,style:{marginLeft:5},className:"btn btn-danger btn-sm","data-id":"Sunday,11","data-toggle":"modal",children:"Delete"})]})]}),Le=()=>{const s=r.exports.useRef(null),[u,p]=r.exports.useState(!1),[R,C]=r.exports.useState(!1),[h,D]=r.exports.useState(),[y,S]=r.exports.useState(!1),[_,z]=r.exports.useState(),[d,B]=r.exports.useState(),[N,I]=r.exports.useState(),[U,c]=r.exports.useState(),[l,g]=r.exports.useState(),[q,i]=r.exports.useState([]),[T,F]=r.exports.useState([]),[M,V]=r.exports.useState(),[Q,j]=r.exports.useState(!1),[G,n]=r.exports.useState(),[o,k]=r.exports.useState(),[re,de]=r.exports.useState(),[K,Y]=r.exports.useState();Array.from({length:1e5}).map((a,m)=>({label:`Item #${m}`,value:m}));const oe=async()=>{S(!0);const a=await $.getClassTTReqs();if(S(!1),!a.ok)return alert("Failed to load the start up data");console.log("result",a.data.result),D(a.data.result)};r.exports.useEffect(()=>{oe()},[]);const ce=async a=>{if(a.preventDefault(),!d||!_||!N||!l||!U)return alert("All the fields are required!!!");const m={school_id:d.value.school_id,study_time_id:l.value.study_time_code,campus:_.value,sem:U.value,year:N.value};console.log("sent...",m),j(!0);const w=await $.getLectureTimetable(m);if(j(!1),!w.ok)return alert("Failed to load lecture timetable");console.log("days chosen",JSON.parse(l.value.days_taught)),i(JSON.parse(l.value.days_taught)),w.data.success&&s.current.show({severity:"success",summary:"Success",detail:"Timetable Loaded Successfully",life:3e3}),console.log("timetable",w.data.result),Y(w.data.result);const v=P.uniqBy(w.data.result,"session_id");console.log("unique sessions",v),F(v),V(`Timetable-${d.value.alias}-${l.value.study_time_name}`)},ue=async a=>{const m={school_id:d.value.school_id,study_time_id:l.value.study_time_code,campus:_.value,sem:U.value,year:N.value};console.log("headers",m);const w=a.timetableFormFields.map(b=>b.day_wkd?{selectedDay:a.selectedDay,selectedSession:a.selectedSession,...b,courseUnit:{...b.courseUnit,course_id:b.courseUnit.course_id}}:{selectedDay:a.selectedDay,selectedSession:a.selectedSession,...b,courseUnit:{...b.courseUnit,course_id:`${b.courseUnit.course_id}-${l.value.study_time_name}`}}),v={headers:m,timetable:w},x=await $.saveLectureTimetable(v);if(!x.ok)return alert(x.data.message);console.log("insert response",x.data),s.current.show({severity:"success",summary:"Success",detail:x.data.message,life:3e3}),S(!0);const E=await $.getLectureTimetable(m);S(!1),Y(E.data.result);const X=P.uniqBy(E.data.result,"session_id");F(X)},me=async a=>{const m={school_id:d.value.school_id,study_time_id:l.value.study_time_code,campus:_.value,sem:U.value,year:N.value},v={timetable:a.timetableFormFields.map(b=>b.day_wkd?{selectedDay:a.selectedDay,tt_id:a.tt_id,selectedSession:a.selectedSession,...b,courseUnit:{...b.courseUnit,course_id:b.courseUnit.course_id}}:{selectedDay:a.selectedDay,tt_id:a.tt_id,selectedSession:a.selectedSession,...b,courseUnit:{...b.courseUnit,course_id:`${b.courseUnit.course_id}-${l.value.study_time_name}`}})},x=await $.updateLectureTimetable(v);if(!x.ok)return alert(x.data.message);console.log("insert response",x.data),s.current.show({severity:"success",summary:"Success",detail:x.data.message,life:3e3}),S(!0);const E=await $.getLectureTimetable(m);S(!1),Y(E.data.result);const X=P.uniqBy(E.data.result,"session_id");F(X)},he=async a=>{const m={school_id:d.value.school_id,study_time_id:l.value.study_time_code,campus:_.value,sem:U.value,year:N.value},w=await $.deleteCuFromTT(a.tt_id);if(!w.ok)return alert(w.data.message);s.current.show({severity:"success",summary:"Success",detail:w.data.message,life:3e3}),S(!0);const v=await $.getLectureTimetable(m);S(!1),Y(v.data.result);const x=P.uniqBy(v.data.result,"session_id");F(x)};return t("div",{className:ge.Indexpage,children:[e(pe,{ref:s}),e("div",{className:"breadcrumb-header justify-content-between",children:e("div",{className:"left-content",children:e("div",{children:e("h4",{className:"main-content-title tx-24 mg-b-1 mg-b-lg-1",children:"Class Timetable"})})})}),t("div",{children:[e(Se,{reqs:h,timetable:K,days:q,selectedStudyTime:l,handleSave:ue,showDialog:u,setShow3:p,defaultDay:G,defaultSession:o}),e(Te,{reqs:h,timetable:K,days:q,selectedStudyTime:l,handleSave:me,showDialog:R,setShow4:C,defaultDay:G,defaultSession:o,selectedCu:re}),e(W,{onSubmit:ce,children:t(ee,{className:"row-sm center",style:{marginBottom:20},children:[t(L,{lg:2,children:[e("label",{className:"lb",children:"Campus"}),e(A,{classNamePrefix:"Select-sm",required:!0,value:_,onChange:a=>z(a),options:h?h.campus.map(a=>({label:a.campus_name,value:a.cam_id})):[],placeholder:"Campus"})]}),t(L,{lg:3,children:[e("label",{className:"lb",children:"School"}),e(A,{classNamePrefix:"Select-sm",required:!0,value:d,onChange:a=>B(a),options:h?h.schools.map(a=>({label:a.school_name,value:a})):[],placeholder:"Select School"})]}),t(L,{lg:2,children:[e("label",{className:"lb",children:"Acc Year"}),e(A,{classNamePrefix:"Select-sm",required:!0,value:N,onChange:a=>I(a),options:De,placeholder:"Select Acc/yr"})]}),t(L,{lg:2,children:[e("label",{className:"lb",children:"Sem"}),e(A,{classNamePrefix:"Select-sm",required:!0,value:U,onChange:a=>c(a),options:ke,placeholder:"Select Sem"})]}),t(L,{lg:2,children:[e("label",{className:"lb",children:"Study Time"}),e(A,{classNamePrefix:"Select-sm",required:!0,value:l,onChange:a=>g(a),options:h?h.study_times.map(a=>({label:a.study_time_name,value:a})):[],placeholder:"Study Time"})]}),e(L,{lg:1,style:{display:"flex",justifyContent:"flex-end"},children:e(O,{type:"submit",style:{alignSelf:"flex-end",width:"100%",marginBottom:3,padding:10,paddingTop:5,paddingBottom:5},children:Q?e(J,{animation:"border",size:"sm",className:"",role:"status","aria-hidden":"true",children:e("span",{className:"sr-only",children:"Loading..."})}):"Load"})})]})})]}),q.length>0&&e(ye,{style:{boxShadow:"none",borderColor:"lightgray",borderWidth:1,padding:0},children:t("div",{className:"col-md-12",style:{paddingTop:10},children:[t("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[e("div",{children:e("h4",{children:M})}),e("div",{children:e(O,{onClick:()=>p(!0),className:"btn-success",style:{alignSelf:"flex-end",width:"100%",marginBottom:3,padding:10,paddingTop:5,paddingBottom:5},children:"Add"})})]}),e("div",{className:"table-responsive",children:t("table",{className:"table table-bordered table-striped",children:[e("thead",{className:"tt-thead",children:t("tr",{className:"tt-thead",children:[e("th",{className:"col-md-2 text-white",children:"Time"}),q.map((a,m)=>e("th",{className:"col-md-2 text-white",children:a},m))]})}),e("tbody",{children:T.length>0?T.map(a=>t("tr",{style:{whiteSpace:"nowrap"},id:"7.00_8.00",children:[t("th",{style:{color:"white",backgroundColor:"#666"},children:[e("span",{id:"spanSTime_","data-id":"7.00",children:a.start_time})," ","-"," ",e("span",{id:"spanETime_","data-id":"8.00",children:a.end_time})]}),q.map((m,w)=>t("td",{style:{maxWidth:"20%"},children:[P.filter(K,{day_id:Z(m).toString(),ls_id:a.ls_id}).map((v,x)=>t("div",{children:[e(Ue,{courseUnitName:v.course_unit_name,lecturer:v.staff_name,room:v.room_name,onClickEditCU:()=>{n(Z(m)),k(a.ls_id),de(v),C(!0)},onClickDeleteCU:()=>{confirm("Are You sure you want to delete this course from the timetable")&&he(v)}}),e("hr",{style:{padding:0,marginBottom:5,marginTop:1}})]},x)),e("a",{onClick:()=>{n(Z(m)),k(a.ls_id),p(!0)},className:"btn btn-success btn-sm text-white",style:{marginTop:5,alignSelf:"flex-end"},"data-id":"Sunday,11","data-toggle":"modal",children:"Add"})]}))]},a.ls_id)):null})]})})]})}),y?e("div",{className:"overlay_dashboard",style:{},children:e(J,{animation:"border",variant:"primary",className:"",role:"status",children:e("span",{className:"sr-only",children:"Loading..."})})}):null]})};Le.defaultProps={};export{Le as default};