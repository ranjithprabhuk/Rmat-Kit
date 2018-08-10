import * as React from 'react';
import { render } from 'enzyme';
import StatsWidget from '../../components/StatsWidget';

describe('StatsWidget', () => {
  it('renders stats widget value', () => {
    const wrapper = render(<StatsWidget value='123' />);
    expect(wrapper.find('h1').text()).toEqual('123');
  });
});
