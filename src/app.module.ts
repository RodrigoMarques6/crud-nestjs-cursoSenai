import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'login_crud_user',
      synchronize: true
    })  // Criando conexão com o banco de dados e atributos da conexão dentro do objeto
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
