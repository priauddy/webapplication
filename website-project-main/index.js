let form = document.getElementById("form");
let Aname = document.getElementById("con-name");
let email = document.getElementById("con-email");
let subject = document.getElementById("con-subject");
let msg = document.getElementById("con-msg");
let form1 =document.getElementById("login-form")
let emaillogin = document.getElementById("email-login");
let pwdlogin = document.getElementById("pwd-login");
let form2 = document.getElementById("form-art");
let Atitle= document.getElementById("a-title");
let article= document.getElementById("article");
let form3 = document.getElementById("pers-form");
let pname = document.getElementById("p-name");
let puname = document.getElementById("p-uname");
let paddress = document.getElementById("p-address")
let pjob = document.getElementById("p-job");
let pperoid = document.getElementById("p-peroid");
let pemail = document.getElementById("p-email");
let pphone= document.getElementById("p-phone");
let form4 =document.getElementById("reg-form");
let fname =document.getElementById("fname");
let lname =document.getElementById("lname");
let Uname = document.getElementById("Uname");
let uemail = document.getElementById("U-email");
let fcmt = document.getElementById("fcmt");
let txtcmt = document.getElementById("commenttxt");


let upwd = document.getElementById("upwd");
let repwd = document.getElementById("re-pwd");
let currentuser ;




let validaterform =() =>{
    let check4 = true;
    fnamevalue = fname.value.trim();
    lnamevalue = lname.value.trim();
    Unamevalue =Uname.value.trim();
    uemailvalue = uemail.value.trim();
    upwdvalue = upwd.value.trim();
    repwdvalue = repwd.value.trim();

    if(fnamevalue===""){
        setError(fname,"required");
        check4=false;
    }
    else{
        setsucces(fname);
        
    }
    if(lnamevalue===""){
        setError(lname,"required");
        check4=false;
    }
    else{
        setsucces(lname);    
    }
    if(Unamevalue===""){
        setError(Uname,"required");
        check4=false;
    }
    else{
        setsucces(Uname);
        
    }
    if(uemailvalue===""){
        setError(uemail,"required");
        check4=false;
    }
    else{
        setsucces(uemail);
        
    }
    if(upwdvalue===""){
        setError(upwd,"required");
        check4=false;
    }
    else{
        setsucces(upwd);
        
    }
    if(repwdvalue===""){
        setError(repwd,"required");
        check4=false;
    }
    else if(repwdvalue!=upwdvalue){
        setError(repwd,"doesn't match");
        check4=false; 
    }
    else{
        setsucces(repwd);
        
    }
    if(check4===true){
        console.log("checked everything")
        register(fnamevalue,lnamevalue,Unamevalue,uemailvalue,upwdvalue);
        // location.reload();
    }

}

const validatepform = ()=>{
    let check3 = true;
    let pnamevalue = pname.value.trim();
    let punamevalue = puname.value.trim();
    let paddressvalue =paddress.value.trim();
    let pjobvalue = pjob.value.trim();
    let pperoidvalue =pperoid.value.trim();
    let pemailvalue =pemail.value.trim();
    let pphonevalue =pphone.value.trim();

    
    if(pnamevalue===""){
        setError(pname,"required");
        check3=false;
    }
    else{
        setsucces(pname);
        
    }
    if(punamevalue===""){
        setError(puname,"required");
        check3=false;
    }
    else{
        setsucces(puname);
        
    }
    if(paddressvalue===""){
        setError(paddress," required");
        check3=false;
    }
    else{
        setsucces(paddress);
        
    }
    if(pjobvalue===""){
        setError(pjob," required");
        check3=false;
    }
    else{
        setsucces(pjob);
        
    }
    if(pperoidvalue===""){
        setError(pperoid," required");
        check3=false;
    }
    else{
        setsucces(pperoid);
        
    }
    if(pphonevalue===""){
        setError(pphone,"  required");
        check3=false;
    }
    else{
        setsucces(pphone);
        
    }
    if(pemailvalue===""){
        setError(pemail,"required");
        check=false;
    }
    else if(!validemail(pemailvalue)){
        setError(pemail,"enter a valid email");
        check=false;
    }
    else{
        setsucces(pemail)
        
    }
}

