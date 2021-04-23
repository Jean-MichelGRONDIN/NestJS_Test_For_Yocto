import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketsModule } from './tickets.module';

@Module({
    imports: [
            MongooseModule.forRoot('mongodb+srv://DB_USERNAME:DM_PASSWORD@DB_NAME/testyocto?retryWrites=true&w=majority'),
            TicketsModule
        ],
    controllers: [AppController],
    providers: [AppService],
})


export class AppModule {}
