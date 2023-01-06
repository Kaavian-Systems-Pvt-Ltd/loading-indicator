import React from "react";
import { Content } from "../component/content";
export default {
  title: 'Loading/Content',
  component: Content,
  argTypes: {
    borderTopColor: { control: 'color' },
  },
};
const Template = (args) => <Content {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
