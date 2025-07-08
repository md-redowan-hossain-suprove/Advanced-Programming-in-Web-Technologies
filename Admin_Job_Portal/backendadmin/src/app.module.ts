import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { NoticeModule } from './notice/notice.module';
import { CompanyModule } from './company/company.module';
import { Company } from './company/company.entity';
import { Admin } from './admin/admin.entity';
import { User } from './user/user.entity';
import { Notice } from './notice/notice.entity';
import { Complaint } from './complaint/complaint.entity';
import { SupportMessageModule } from './support-message/support-message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',      
  password: '809030',  
  database: 'job_portal',    
  entities: [Admin, User, Notice, Company,],
  synchronize: true,         
}),

    AdminModule,
    UserModule,
    NoticeModule,
    CompanyModule,
    Complaint,
    SupportMessageModule,
  ],
})
export class AppModule {}