import{a}from"./index.142592eb.js";const o=t=>a.apiClient.post("/api/dashboard/staffbydate",t),n=()=>a.apiClient.get("/staff"),p=t=>a.apiClient.post("/api/lecturer/addStaff",t),l=t=>a.apiClient3.post("/api/upload/importExceltodb",t),d=t=>a.apiClient.post("/api/auth/login",t),r=()=>a.apiClient.get("/api/lecturer/staff_assignment_reqs"),m=t=>a.apiClient.post("/api/lecturer/assignStaffRole",t),g=()=>a.apiClient.get("/api/upload/lastUploadDateForFees"),c=()=>a.apiClient.get("/api/timetable/requirements/exam_tt"),f=()=>a.apiClient.get("/api/timetable/requirements/assign_inv"),C=t=>a.apiClient.post("/api/timetable/examsInRoom",t),u=t=>a.apiClient.get(`/api/dashboard/students_in_exam/${t}`),b=t=>a.apiClient.post("/api/dashboard/addInvigilator",t),x=t=>a.apiClient.post("/api/timetable/addExamTimetable",t),_=(t,e,i,s)=>a.apiClient2.post("/bridge",{action:"portal",method:"load_modules",data:[{stdno:t,study_yr:e,sem:i,progcode:s,page:1,start:0,limit:25}],type:"rpc",tid:25}),R=t=>a.apiClient.post("/api/timetable/save_new_module",t),q=()=>a.apiClient.get("/api/exams/exam_report_reqs"),T={getStaffByDate:o,getAllStaffMembers:n,addStaff:p,login:d,getStaffAssignReqs:r,assignRoleToStaff:m,importExcelToDB:l,lastUploadDate:g,getExamTTReqs:c,addExamTT:x,getAssignInvReqs:f,getExamsInRoom:C,addInvigilators:b,getModules:_,addNewModule:R,examReportReqs:q,getStudentsInCU:u};export{T as a};
