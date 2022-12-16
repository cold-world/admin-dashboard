import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Header } from '../../components';
type Props = {};

export const Area = (props: Props): JSX.Element => {
  const { currentMode } = useStateContext();
  return (
    <div>
      <Header category='Chart' title='Area' />
      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={{
          valueType: 'DateTime',
          labelFormat: 'y',
          majorGridLines: { width: 0 },
          intervalType: 'Years',
          edgeLabelPlacement: 'Shift',
          labelStyle: { color: 'gray' },
        }}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[DateTime, Legend, SplineAreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
