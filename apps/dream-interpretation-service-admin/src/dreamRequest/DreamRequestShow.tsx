import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DREAMREQUEST_TITLE_FIELD } from "./DreamRequestTitle";

export const DreamRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dreamDescription" source="dreamDescription" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user" source="user" />
        <ReferenceManyField
          reference="DreamInterpretation"
          target="dreamRequestId"
          label="DreamInterpretations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="dreamRequest"
              source="dreamrequest.id"
              reference="DreamRequest"
            >
              <TextField source={DREAMREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="imageUrl" source="imageUrl" />
            <TextField label="interpretation" source="interpretation" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
