import { Controller, Get, param } from "../core/mvc/Controller";


@Controller("/test")
export class TestController {

    @Get('/:id/getInfo')
    public async getInfo(@param("id")id:string){

    }

}