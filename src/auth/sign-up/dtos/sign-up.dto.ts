import { User } from "src/users/entities/user.entity";

export interface SignUpDto {
    userInfo: Omit<User, "id">;
}
