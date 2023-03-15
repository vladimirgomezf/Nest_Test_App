import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityAModule } from './entity-a/entity-a.module';
import { EntityBModule } from './entity-b/entity-b.module';
import { EntityCModule } from './entity-c/entity-c.module';
import { EntityDModule } from './entity-d/entity-d.module';

@Module({
  imports: [EntityAModule, EntityBModule, EntityCModule, EntityDModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
