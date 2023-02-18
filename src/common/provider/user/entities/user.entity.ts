import { UserEntity } from 'src/common/class/database-entity/user.entity';
import { OmitType } from '@nestjs/swagger';

export class UserBasicEntity extends OmitType(UserEntity, ['password', 'salt']) {}
