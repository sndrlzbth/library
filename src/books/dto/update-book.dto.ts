import { ApiProperty } from "@nestjs/swagger"
export class UpdateBookDto {
    @ApiProperty({ example: 'The Lord of the Rings', description: 'El título del libro' })
    title?: string;
    @ApiProperty({ example: 'J.R.R. Tolkien', description: 'El autor del libro' })
    author?: string;
    @ApiProperty({ example: '1954', description: 'El año del libro' })
    year?: number;
}