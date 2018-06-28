

export  function Controller(params:String):ClassDecorator {
    return (controller:Function|any) => {

        
    }
}

export  function Get(params:String) :MethodDecorator{
    return (controller:Function|any,propertyKey:string|symbol,value) => {

        
    }
}


export function param(params:String):ParameterDecorator{
    return (controller:Function|any,propertyKey:string|symbol,index:number) => {

    }
}