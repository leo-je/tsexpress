

export  function Controller(params:String) {
    return (tagert:any) => {
        console.log(params)
        
        tagert._path = params
        console.log(tagert);
        
    }
}