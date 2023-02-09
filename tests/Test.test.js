import React from 'react';
import renderer from 'react-test-renderer';

import Test from '..\src\component\Test.js';

describe('<Test />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Test />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });