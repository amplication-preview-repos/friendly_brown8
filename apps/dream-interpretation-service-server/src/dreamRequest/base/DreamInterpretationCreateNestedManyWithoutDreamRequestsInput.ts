/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DreamInterpretationWhereUniqueInput } from "../../dreamInterpretation/base/DreamInterpretationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class DreamInterpretationCreateNestedManyWithoutDreamRequestsInput {
  @Field(() => [DreamInterpretationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DreamInterpretationWhereUniqueInput],
  })
  connect?: Array<DreamInterpretationWhereUniqueInput>;
}

export { DreamInterpretationCreateNestedManyWithoutDreamRequestsInput as DreamInterpretationCreateNestedManyWithoutDreamRequestsInput };
