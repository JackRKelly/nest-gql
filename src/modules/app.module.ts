import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "@controllers/app.controller";
import { AppService } from "@services/app.service";
import { UserModule } from "@data/user/user.module";
import { env } from "@lib/env";

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      autoSchemaFile: "schema.gql",
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "nestjs-gql",
      entities: ["dist/**/*.model.js"],
      synchronize: env.NodeEnv === "development",
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
