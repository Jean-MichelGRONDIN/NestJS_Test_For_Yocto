import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketsModule } from './tickets.module';

@Module({
    imports: [
            MongooseModule.forRoot('mongodb+srv://jmAdmin:oKP3C7iiCoh7yKMA@jm-experiment-database.4h4xe.mongodb.net/testyocto?retryWrites=true&w=majority'),
            TicketsModule
        ],
    controllers: [AppController],
    providers: [AppService],
})


export class AppModule {}
