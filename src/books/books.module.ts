import { forwardRef, Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [TypeOrmModule.forFeature([Book]), forwardRef(() => AuthModule)],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
