import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { roleId, ...userData } = createUserDto;

    const user = this.userRepository.create({
      ...userData,
      role: roleId ? { id: roleId } : undefined,
    });
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find({
      order: {
        id: 'ASC',
      },
    });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User With Id ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    const { roleId, ...userData } = updateUserDto;
    Object.assign(user, userData);
    if (roleId !== undefined) {
      user.role = roleId ? ({ id: roleId } as any) : null;
    }
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return await this.userRepository.remove(user);
  }
}
