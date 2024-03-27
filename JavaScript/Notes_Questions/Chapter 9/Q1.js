function loadJavascript(url){
    return new Promise((resolve,reject)=>{
        var script=document.createElement('script')
        script.src=url
        script.onload=resolve
        script.onerror=reject
        document.head.appendChild(script)
    })
}

loadJavascript('Q1.js').then(()=>{
    alert("File has been loaded")
})
