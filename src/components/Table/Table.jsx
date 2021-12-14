import React, { Fragment, useState, useEffect, useCallback } from "react";
import MaterialTable, { Column } from "material-table";
// https://material-table.com/#/docs/get-started
// https://material-table.com/#/docs/all-props
import TableIcons from './TableIcons';

export default function CustomEditComponent(props) {
  return (
      <Fragment>
        <MaterialTable
          icons={TableIcons}
          columns={props?.tableColumns}
          data={props?.tableData}
          title={"Asteroids Data"}
          options={{
            toolbar: false, actionsColumnIndex: -1, headerStyle: {
              fontWeight: 'bold',
            }
          }}
        />
      </Fragment>
    )
}