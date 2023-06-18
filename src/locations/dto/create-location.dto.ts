import { ApiProperty } from "@nestjs/swagger";

export class CreateLocationDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    cityid: string;

    @ApiProperty({required: false})
    order: number=0;
}
