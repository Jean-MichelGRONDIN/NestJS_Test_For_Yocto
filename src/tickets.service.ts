import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ticket, TicketDocument } from './schemas/ticket.schema';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { DeleteTicketDto } from './dto/delete-ticket.dto';

@Injectable()
export class TicketsService {
    constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>) {}

    async create(CreateTicketDto: CreateTicketDto): Promise<Ticket> {
        const createdTicket = new this.ticketModel(CreateTicketDto);
        return createdTicket.save();
    }

    async update(UpdateTicketDto: CreateTicketDto, TicketIdDto: DeleteTicketDto): Promise<UpdateQuery<Ticket>> {
        return this.ticketModel.updateOne( TicketIdDto, UpdateTicketDto ).exec();
    }

    async delete(DeleteTicketDto: DeleteTicketDto): Promise<FilterQuery<Ticket>> {
        return this.ticketModel.deleteOne( DeleteTicketDto ).exec();
    }

    async findAll(): Promise<Ticket[]> {
        return this.ticketModel.find().exec();
    }
}