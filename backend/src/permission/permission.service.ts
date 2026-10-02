import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entities/permission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PermissionService {
  constructor(@InjectRepository(Permission)
    private permissionRepository : Repository<Permission>
){}

 
async create(createPermissionDto: CreatePermissionDto) {
    const {roleId,...permissionData} = createPermissionDto  
    const permission =  this.permissionRepository.create(
      {
        ...permissionData,
        role : roleId ? {id:roleId}:undefined
      }
    )
    return await this.permissionRepository.save(permission);
  }

  async findAll() {
    return await this.permissionRepository.find({
      order:{
        id: 'ASC'
      }
    });
  }

  async findOne(id: number) {
    const permission = await this.permissionRepository.findOne({where:{id}})
    if(!permission){
      throw new NotFoundException(`Permission With this ID ${id} not found`)
    }
    return permission;
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto) {
    const permission = await this.findOne(id)
    const {roleId,...permissionData} = updatePermissionDto

    Object.assign(permission,permissionData)
    if(roleId !== undefined){
      permission.role = roleId ? ({id: roleId}as any) : null;
    }
    return await this.permissionRepository.save(permission);
  }

  async remove(id: number) {
    const permission = await this.findOne(id)
    return await this.permissionRepository.remove(permission);
  }
}
