import React from 'react';
import jumboData from '../fixtures/jumbo';
import Jumbotron, {
  JumbotronFrame,
  JumbotronPane,
  JumbotronTitle,
  JumbotronSubTitle,
  JumbotronImage,
} from '../components/jumbotron';

export function JumbotronContainer() {
  return (
    <JumbotronFrame>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <JumbotronPane>
            <JumbotronTitle>{item.title}</JumbotronTitle>
            <JumbotronSubTitle>{item.subTitle}</JumbotronSubTitle>
          </JumbotronPane>
          <JumbotronPane>
            <JumbotronImage src={item.image} alt={item.alt} />
          </JumbotronPane>
        </Jumbotron>
      ))}
    </JumbotronFrame>
  );
}
