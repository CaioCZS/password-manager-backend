import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CredentialsModule } from './credentials/credentials.module';
import { SecureNotesModule } from './secure-notes/secure-notes.module';
import { CardsModule } from './cards/cards.module';
import { EraseModule } from './erase/erase.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, CredentialsModule, SecureNotesModule, CardsModule, EraseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
