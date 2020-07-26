import React from 'react';
import AwesomeBox from '../awesome-box';

import {
  MasonryContainer, MasonryItem,
} from './style';

interface Props {
  nodes: Array<object>,
  columns?: number,
}

const DemoBox: React.FC<Props> = ({ nodes, columns }) => {
  const renderContainer = () => (
    nodes.map((item: any, index: number) => <AwesomeBox
      code={item.code}
      title={item.title}
      desc={item.desc}
    >
      {item.node}
    </AwesomeBox>
    )
  )

  return (
    <MasonryContainer columns={columns}>
      {
        renderContainer().map((item, key) => <MasonryItem key={key}>{item}</MasonryItem>)
      }
    </MasonryContainer>
  )
}

export default DemoBox;