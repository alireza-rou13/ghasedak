import { Prisma, Role, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class LoginEntity implements User {
  @ApiProperty()
  id: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  fullname: string;
  @ApiProperty()
  hash: string;
  @ApiProperty()
  role: Role;
  @ApiProperty()
  cityId: string;
  @ApiProperty()
  data: Prisma.JsonValue;
  @ApiProperty()
  status: boolean;
}
