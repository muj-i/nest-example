import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get('/get-user')
    getUser() {
        return 'Get User';
    }

    @Post('/create-user')
    createUser(@Body() body: any) {
        return body;
    }
}
