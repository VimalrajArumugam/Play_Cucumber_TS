import { info } from "console"
import {format, transports} from "winston"


export function options(scenarioName : string){

    return{
        transports :[
            new transports.File({
                filename: `test-results/logs/${scenarioName}/log.log`,
                level:`info`,
                format:format.combine(
                    format.timestamp({format:`MM-DD-YYYY HH:MM:SS`}),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            }),
        ]
    }

};