import { Injectable } from '@nestjs/common';
import { InterestPoint } from './app.entity';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'


@Injectable()
export class AppService {
  constructor(@InjectRepository(InterestPoint) private repo: Repository<InterestPoint>){}

  async createPoint(name: string, x: number, y: number){
    const point = await this.repo.create({name, x, y})
    return this.repo.save(point)
  }

  async getAllPoints(){
    return await this.repo.find()
  }

  async findByQuery(x: number, y: number, d: number){
    const allPoints = await this.repo.find()
    return allPoints.filter((point)=>{
        const distance = Math.sqrt(Math.pow(point.x-x, 2) + Math.pow(point.y-y, 2))
        return distance <= d
    })
  }
}
