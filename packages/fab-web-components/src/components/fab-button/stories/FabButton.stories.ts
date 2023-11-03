import { createElement } from './FabButton.js';

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ label, primary, disabled, rounded, height, width, fontSize, click }) => {
    return createElement({ label, primary, disabled, rounded, height, width, fontSize, click });
  },
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    rounded: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    height: { control: 'text' },
    width: { control: 'text' },
    click: { action: 'click' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
    primary: true,
    disabled: false,
    rounded: 'medium',
    width: '150px',
    height: '50px',
    fontSize: '20px',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    primary: false,
    disabled: false,
    rounded: 'medium',
    width: '150px',
    height: '50px',
    fontSize: '20px',
  },
};
