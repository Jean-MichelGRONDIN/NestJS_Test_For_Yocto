import { ApiProperty } from '@nestjs/swagger';

export class DeleteTicketDto {
    @ApiProperty()
    readonly _id: string;
}