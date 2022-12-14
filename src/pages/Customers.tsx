import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Toolbar,
  Edit,
  Sort,
  Filter
} from '@syncfusion/ej2-react-grids';
import { customersData, contextMenuItems, customersGrid } from '../data/dummy';
import { Header } from '../components';
type Props = {};

export const Customers = (props: Props) => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Customers' />
      <GridComponent
        width='auto'
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowDeleting: true, allowEditing: true}}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Filter, Sort, Selection]} />
      </GridComponent>
    </div>
  );
};
