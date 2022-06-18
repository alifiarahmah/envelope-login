import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormGroup } from './form-group';

export default {
  component: FormGroup,
  title: 'FormGroup',
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => (
  <FormGroup {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
