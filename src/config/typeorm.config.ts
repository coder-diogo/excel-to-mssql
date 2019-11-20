import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mssql',
  host:
    process.env.DBURL ||
    'excelimporter2.c4dgfkhhcrkd.eu-west-2.rds.amazonaws.com',
  port: 1433,
  username: process.env.DBUSERNAME || 'admin',
  password: process.env.DBPASSWORD || 'thmc*.5*',
  database: 'excel',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
