import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      resave:false,
      saveUninitialized: false, 
      secret: 'keyboard cat',
      cookie: {maxAge:3600000},
    })
  );

  app.use(passport.initialize());
  app.use(passport.session()); 

  await app.listen(3000);
}
bootstrap();
