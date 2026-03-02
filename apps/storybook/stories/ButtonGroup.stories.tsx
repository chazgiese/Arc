import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup, ButtonGroupSeparator, Button } from "@arc/ui";

const meta: Meta<typeof ButtonGroup> = {
  title: "Arc UI/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const Brand: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="subtle" size="xs">Left</Button>
      <ButtonGroupSeparator />
      <Button variant="subtle" size="xs">Center</Button>
      <ButtonGroupSeparator />
      <Button variant="subtle" size="xs">Right</Button>
    </ButtonGroup>
  ),
};
