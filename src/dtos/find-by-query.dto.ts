import { IsNumber, Min } from "class-validator"


export class FindByQueryDto{
    @IsNumber()
    @Min(0)
    x: number

    @IsNumber()
    @Min(0)
    y: number

    @IsNumber()
    @Min(0)
    d: number
}