import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { DeleteTicketDto } from './dto/delete-ticket.dto';
import { Ticket } from './schemas/ticket.schema';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly TicketsService: TicketsService) {}

    @Post('create')
    async create(@Body() CreateTicketDto: CreateTicketDto) {
        await this.TicketsService.create(CreateTicketDto);
    }

    @Post('delete')
    async delete(@Body() DeleteTicketDto: DeleteTicketDto) {
        await this.TicketsService.delete(DeleteTicketDto);
    }

    @Post('update')
    async update(@Body() UpdateTicketDto: CreateTicketDto, TicketIdDto: DeleteTicketDto) {
        await this.TicketsService.update(UpdateTicketDto, TicketIdDto);
    }

    @Get('getAll')
    async findAll(): Promise<Ticket[]> {
        return this.TicketsService.findAll();
    }
}