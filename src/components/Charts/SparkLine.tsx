import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

type SparklineProps = {
  currentColor: string;
  id: string;
  type: 'Line';
  heigth: string;
  width: string;
  data: any;
  color: string;
};

export const SparkLine = ({
  id,
  currentColor,
  color,
  data,
  heigth,
  type,
  width,
}: SparklineProps): JSX.Element => {
  return (
    <SparklineComponent
      id={id}
      height={heigth}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};
