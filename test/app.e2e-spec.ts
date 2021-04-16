import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TicketsService } from './../src/tickets.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let tmpticketsService = { findAll: () => ['test'] };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .overrideProvider(TicketsService)
    .useValue(tmpticketsService)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('​/tickets​/getAll (GET)', () => {
    return request(app.getHttpServer())
      .get('​/tickets​/getAll')
      .expect(200)
      .expect({
        data: tmpticketsService.findAll(),
      });
  });
});
