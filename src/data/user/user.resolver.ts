import { UserService } from "./user.service";
import { UserModel } from "./user.model";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Inject } from "@nestjs/common";

@Resolver(() => UserModel)
export class UserResolver {
  constructor(@Inject(UserService) private userRepository: UserService) {}

  @Query(() => UserModel)
  async user(@Args("id") id: string): Promise<UserModel> {
    return await this.userRepository.findOne(id);
  }

  @Query(() => [UserModel])
  async users(): Promise<UserModel[]> {
    return await this.userRepository.findAll();
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args("name") name: string,
    @Args("email") email: string,
    @Args("phone", { nullable: true }) phone: string,
    @Args("address", { nullable: true }) address: string
  ): Promise<UserModel> {
    return await this.userRepository.create({ name, email, phone, address });
  }
}
