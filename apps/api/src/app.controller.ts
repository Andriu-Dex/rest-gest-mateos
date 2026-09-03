import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service.js';

@ApiTags('health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  @ApiOperation({ summary: 'Check API and database availability' })
  @ApiOkResponse({
    schema: {
      example: { status: 'ok', database: 'connected' },
    },
  })
  getHealth(): Promise<{ status: 'ok'; database: 'connected' }> {
    return this.appService.getHealth();
  }
}
