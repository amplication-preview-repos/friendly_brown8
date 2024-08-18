/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DreamRequestWhereUniqueInput } from "./DreamRequestWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DreamRequestUpdateInput } from "./DreamRequestUpdateInput";

@ArgsType()
class UpdateDreamRequestArgs {
  @ApiProperty({
    required: true,
    type: () => DreamRequestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DreamRequestWhereUniqueInput)
  @Field(() => DreamRequestWhereUniqueInput, { nullable: false })
  where!: DreamRequestWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DreamRequestUpdateInput,
  })
  @ValidateNested()
  @Type(() => DreamRequestUpdateInput)
  @Field(() => DreamRequestUpdateInput, { nullable: false })
  data!: DreamRequestUpdateInput;
}

export { UpdateDreamRequestArgs as UpdateDreamRequestArgs };
