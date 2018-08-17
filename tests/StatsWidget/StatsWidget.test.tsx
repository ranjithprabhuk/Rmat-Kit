import * as React from 'react';
import { render } from 'enzyme';
import StatsWidget from '../../components/StatsWidget';

describe('StatsWidget', () => {
  it('renders stats widget value', () => {
    const wrapper = render(<StatsWidget value='123' />);
    expect(wrapper.find('h1').text()).toEqual('123');
  });

  it('renders stats widget title', () => {
    const wrapper = render(<StatsWidget title='some title' />);
    expect(wrapper.find('h3').text()).toEqual('some title');
  });
});
