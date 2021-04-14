import { ApiProperty } from '@nestjs/swagger';

export class UpdateTicketDto {
    @ApiProperty()
    readonly _id: string;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly description: string;
}