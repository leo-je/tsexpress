
import { Config } from './core/Config';
import { ApplicationCore } from './ApplicationCore';

@Config({srcDir:`${__dirname}/`,
        configDir:`${__dirname}/`,
        logDir:`${__dirname}/`})
export class Application extends ApplicationCore{

}