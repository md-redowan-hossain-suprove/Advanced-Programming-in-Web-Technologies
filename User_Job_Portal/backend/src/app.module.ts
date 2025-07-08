import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';
import { Application } from './application/application.entity';
import { ApplicationModule } from './application/application.module';
import { User } from './user/user.entity';
import { Job } from './job/job.entity';
import { Contact } from './contact/contact.entity';
import { ContactModule } from './contact/contact.module';
import { UserModule } from './user/user.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '809030',
      database: 'user_job_portal',
      entities: [User, Job, Application, Contact],
      synchronize: true,
    }),
    AuthModule,
    JobModule,
    ApplicationModule,
    ContactModule,
    UserModule,
    
  ],

})
export class AppModule {}
