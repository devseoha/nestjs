import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';

@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @ApiResponse({ type: UserDto })
    @ApiOperation({ summary: '회원가입' })
    @Post()
    postUsers(@Body() data: JoinRequestDto): any {
        this.usersService.postUsers(data.email, data.nickname, data.password);
        return null;
    }

    @ApiResponse({
        status: 200,
        description: '성공',
        type: UserDto,
    })
    @ApiOperation({ summary: '로그인' })
    @Post('login')
    login(@Req() req) {
        return req.user;
    }
    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logout();
        req.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok');
    }
}
