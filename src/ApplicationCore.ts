
import * as Express from 'express'
import { Systemconfig } from './core/SytemConfig';


export class ApplicationCore {

    private app:Express.Application
    private port:number
    private srcDir :string
    private configDir :string
    private logDir :string

    constructor(){
        this.port = 3000
        this.app = Express()
        this.srcDir = Systemconfig.path.srcDir;
        this.srcDir = Systemconfig.path.configDir;
        this.srcDir = Systemconfig.path.logDir;
    }

    private async loadComponents() {
        console.log(`loadComponents....`);
        require('require-all')({
            dirname     :  this.srcDir,
            excludeDirs :  new RegExp(`^\.(git|svn|node_modules|${this.configDir}|${this.logDir}})$`),
            recursive   : true
        });

        return this;
    }


    public async loadRouter(){

    }
    
    public async start(){
        await this.loadComponents()
        await this.loadRouter()
        this.app.listen(this.port,()=>{
            console.log(`Application is listening on port ${this.port}`);
        })
    }

}