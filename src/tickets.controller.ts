import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { DeleteTicketDto } from './dto/delete-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './schemas/ticket.schema';
import { ApiBody } from '@nestjs/swagger';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly TicketsService: TicketsService) {}

    @Post('create')
    @ApiBody({type: CreateTicketDto, required: true})
    async create(@Body() CreateTicketDto: CreateTicketDto) {
        await this.TicketsService.create(CreateTicketDto);
    }

    @Delete('delete')
    @ApiBody({type: DeleteTicketDto, required: true})
    async delete(@Body() DeleteTicketDto: DeleteTicketDto) {
        await this.TicketsService.delete(DeleteTicketDto);
    }

    @Post('update')
    @ApiBody({type: UpdateTicketDto, required: true})
    async update(@Body() UpdateTicketDto: CreateTicketDto, TicketIdDto: DeleteTicketDto) {
        await this.TicketsService.update(UpdateTicketDto, TicketIdDto);
    }

    @Get('getAll')
    async findAll(): Promise<Ticket[]> {
        return this.TicketsService.findAll();
    }
}