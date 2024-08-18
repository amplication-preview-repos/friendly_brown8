import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DreamRequestTitle } from "../dreamRequest/DreamRequestTitle";

export const DreamInterpretationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
