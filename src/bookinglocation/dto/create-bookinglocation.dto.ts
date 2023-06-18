import { ApiProperty } from "@nestjs/swagger"

export class CreateBookingLocationDto {
    @ApiProperty()
    title: string
    
    @ApiProperty()
    cityId: string
    
    @ApiProperty()
    order?: number
}
