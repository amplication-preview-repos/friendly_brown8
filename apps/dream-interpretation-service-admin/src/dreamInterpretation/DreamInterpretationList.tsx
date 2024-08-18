import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DREAMREQUEST_TITLE_FIELD } from "../dreamRequest/DreamRequestTitle";

export const DreamInterpretationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DreamInterpretations"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
