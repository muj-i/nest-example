import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from 'src/comment/comment.service';
import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
  ) {}
  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.findUser(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id/comments')
  getUserComments(@Param('id') id: string) {
    return this.commentService.findComment(id);
  }
}
