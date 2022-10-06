import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create coffee dto object' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'A new coffe name' })
  name: string;
  brand: string;
  flavors: string[];
}
