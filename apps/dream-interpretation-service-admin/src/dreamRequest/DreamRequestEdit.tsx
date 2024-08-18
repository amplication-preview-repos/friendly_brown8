import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DreamInterpretationTitle } from "../dreamInterpretation/DreamInterpretationTitle";

export const DreamRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          label="dreamDescription"
          multiline
          source="dreamDescription"
        />
        <ReferenceArrayInput
          source="dreamInterpretations"
          reference="DreamInterpretation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DreamInterpretationTitle} />
        </ReferenceArrayInput>
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
