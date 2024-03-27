async function loadJavascript(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        var script=document.createElement('script')
        script.src=url
        try{
            script.onload=resolve
            document.head.appendChild(script)
        }catch{
            script.onerror=reject
        }
        },10000)
    })
}

async function loader(){
    await loadJavascript('Q3.java').then(()=>{
        alert("Successful")
    }).catch(()=>{
        alert("Unsuccessful")
    })
}