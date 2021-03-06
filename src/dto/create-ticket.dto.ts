import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly description: string;
}