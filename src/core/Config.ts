import { Systemconfig } from "./SytemConfig";


export function Config(param:Object){
    return (target:any) => {
        Systemconfig.path = {...Systemconfig.path,...param}
    }
}