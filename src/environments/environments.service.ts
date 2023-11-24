import { Injectable } from '@nestjs/common';
import { CreateEnvironmentDto } from './dto/create-environment.dto';
import { UpdateEnvironmentDto } from './dto/update-environment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnvironmentsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createEnvironmentDto: CreateEnvironmentDto) {
    const data = this.prismaService.environments.create({
      data: createEnvironmentDto,
    });
    return data;
  }

  findAll() {
    const data = this.prismaService.environments.findMany();
    return data;
  }

  findOne(id: string) {
    const data = this.prismaService.environments.findUnique({ where: id });
    return `This action returns a #${id} environment`;
  }

  update(id: number, updateEnvironmentDto: UpdateEnvironmentDto) {
    return `This action updates a #${id} environment`;
  }

  remove(id: number) {
    return `This action removes a #${id} environment`;
  }
}
