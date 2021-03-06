import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema()
export class Ticket {
    @Prop()
    name: string;

    @Prop()
    description: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);