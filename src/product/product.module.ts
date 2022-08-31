import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductShecma } from './product.schema';
import { ProductService } from './product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductShecma }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}