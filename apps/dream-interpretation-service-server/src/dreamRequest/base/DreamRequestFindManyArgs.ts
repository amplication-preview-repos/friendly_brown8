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
import { DreamRequestWhereInput } from "./DreamRequestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DreamRequestOrderByInput } from "./DreamRequestOrderByInput";

@ArgsType()
class DreamRequestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DreamRequestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DreamRequestWhereInput, { nullable: true })
  @Type(() => DreamRequestWhereInput)
  where?: DreamRequestWhereInput;

  @ApiProperty({
    required: false,
    type: [DreamRequestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DreamRequestOrderByInput], { nullable: true })
  @Type(() => DreamRequestOrderByInput)
  orderBy?: Array<DreamRequestOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DreamRequestFindManyArgs as DreamRequestFindManyArgs };
