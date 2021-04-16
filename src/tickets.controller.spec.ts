import { Test } from '@nestjs/testing';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';

describe('CatsController', () => {
    let catsController: TicketsController;
    let catsService: TicketsService;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            controllers: [TicketsController],
            providers: [TicketsService],
        }).compile();

        catsService = moduleRef.get<TicketsService>(TicketsService);
        catsController = moduleRef.get<TicketsController>(TicketsController);
    });

    describe('findAll', () => {
        it('should return an array of cats', async () => {
        const result = [{ "msg": "test"}];
        jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

        expect(await catsController.findAll()).toBe(result);
        });
    });
});