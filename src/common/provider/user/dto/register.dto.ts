import { PickType } from '@nestjs/swagger';
import { UserEntity } from 'src/common/class/database-entity/user.entity';

export class RegisterUserDto extends PickType(UserEntity, ['account', 'password']) {}
