
import * as Express from 'express'


export class Application {

    private app:Express.Application
    private port:number
    constructor(){
        this.port = 3000
        this.app = Express()
    }

    public async start(){
        this.app.listen(this.port,()=>{
            console.log(`Application is listening on port ${this.port}`);
        })
    }

}