import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserModel } from "./user.model";
import { Repository } from "typeorm";
import { UserDTO } from "./user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userRepository: Repository<UserModel>
  ) {}

  create(details: UserDTO): Promise<UserModel> {
    return this.userRepository.save(details);
  }

  findAll(): Promise<UserModel[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<UserModel> {
    return this.userRepository.findOne(id);
  }
}
