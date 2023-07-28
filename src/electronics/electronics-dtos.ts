// product-variant.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ProductVariant {
  @ApiProperty({example : "Silver"})
  color: string;

  @ApiProperty({example : "256GB"})
  storage: string;

  @ApiProperty({example : "100GB"})
  RAM: string;
}

export class Products {
  @ApiProperty({example : "Laptop"})
  name: string;

  @ApiProperty({example : 200})
  price: number;

  @ApiProperty({ example: {
    "color": "Silver",
    "storage": "256GB",
    "RAM": "string"
  }, type: [ProductVariant] })
  variants: ProductVariant[];
}
