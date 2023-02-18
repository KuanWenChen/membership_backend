import { UserEntity } from 'src/common/class/database-entity/user.entity';
import { PickType } from '@nestjs/swagger';

export class UserLoginDto extends PickType(UserEntity, ['account', 'password']) {}
