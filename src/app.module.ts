import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgreeConfigService } from 'config/postgree.config.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [UsuarioModule, 
    ProdutoModule, 
    ConfigModule.forRoot({
      isGlobal: true
    }),
    
    TypeOrmModule.forRootAsync({
    useClass: PostgreeConfigService,
    inject: [PostgreeConfigService]
  })],

})
export class AppModule {}
