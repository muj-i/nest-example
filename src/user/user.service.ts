import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  findUser(id: String) {
    return {
      name: 'John Doe',
      id: id,
    };
  }

  createUser(createUserDto: CreateUserDto) {
    return 'User created successfully!';
  }

  
}
