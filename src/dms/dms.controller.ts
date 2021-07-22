import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
    @ApiParam({
        name: 'url',
        required: true,
        description: '워크스페이스 url',
    })
    @ApiParam({
        name: 'id',
        required: true,
        description: '사용자 id',
    })
    @ApiQuery({
        name: 'page',
        required: true,
        description: '불러올 페이지',
    })
    @ApiQuery({
        name: 'perPage',
        required: true,
        description: '한번에 가져오는 개수',
    })
    @Get(':id/chats')
    getChat(@Query() query, @Param() param) {
        console.log(query.perPage, query.page, param);
    }

    @Post(':id/chats')
    postChat(@Body() body) {}
}
