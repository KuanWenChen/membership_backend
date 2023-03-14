import { UserEntity } from 'src/common/class/database-entity/user.entity';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class UserBasicEntity extends OmitType(UserEntity, ['password', 'salt']) {}
export class UserTokenEntity extends UserBasicEntity {
  @Expose()
  @ApiProperty({ description: '使用者 token' })
  @IsString()
  token!: string;
}
