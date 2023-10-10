import { IsString, IsNumber, IsNotEmpty, Min } from "class-validator"

export class CreatePointDto{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @Min(0)
    x: number

    @IsNumber()
    @Min(0)
    y: number
}