// product-variant.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class ProductVariantDto {
  @ApiProperty()
  color: string;

  @ApiProperty()
  storage: string;

  @ApiProperty()
  RAM: string;
}

export class ProductDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ type: [ProductVariantDto] })
  variants: ProductVariantDto[];
}
