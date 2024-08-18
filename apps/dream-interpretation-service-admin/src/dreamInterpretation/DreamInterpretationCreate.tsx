import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DreamRequestTitle } from "../dreamRequest/DreamRequestTitle";

export const DreamInterpretationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="dreamRequest.id"
          reference="DreamRequest"
          label="dreamRequest"
        >
          <SelectInput optionText={DreamRequestTitle} />
        </ReferenceInput>
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="interpretation" multiline source="interpretation" />
      </SimpleForm>
    </Create>
  );
};
