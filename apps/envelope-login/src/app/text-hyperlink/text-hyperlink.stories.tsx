import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextHyperlink } from './text-hyperlink';

export default {
  component: TextHyperlink,
  title: 'TextHyperlink',
} as ComponentMeta<typeof TextHyperlink>;

const Template: ComponentStory<typeof TextHyperlink> = (args) => (
  <TextHyperlink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  children: 'This is a hyperlink',
};
