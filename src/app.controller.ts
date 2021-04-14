import { Controller, Get, Post, Req,  Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { Interface } from 'node:readline';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('AllTickets')
  // AllTickets() {//@Res() res: Response
  //   // return res.status(200).json({ msg: "This route return all tickets", test: request.body, testTwo: request.body.servicename});
  //   return { msg: "This route return all tickets", req: "request" };
  // }
}


// @Post('AllTickets')
// AllTickets(@Req() request: Request, @Res() res: Response) {
//   return res.status(201).json({ msg: "This route return all tickets", test: request.body, testTwo: request.body.servicename});
//   // return { msg: "This route return all tickets", req: request };
// }