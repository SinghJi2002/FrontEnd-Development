async function loadJavascript(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var script=document.createElement('script')
            script.src=url
            script.onload=resolve
            script.onerror=reject
            document.head.appendChild(script)
        },10000)
    })
}

async function loader(){
    await loadJavascript('Q2.js').then(()=>{
        alert("Successfull")
    }).catch(()=>{
        alert("Unsuccessful")
    })
}

loader()