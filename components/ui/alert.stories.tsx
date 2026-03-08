import type { Meta, StoryObj } from "@storybook/react"
import { SiInfoCircle } from "stera-icons"
import { Alert, AlertTitle, AlertDescription, AlertAction } from "./alert"
import { Button } from "./button"

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can change your email in your account settings.</AlertDescription>
      <Button>Link</Button>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <AlertTitle>Something went wrong</AlertTitle>
      <AlertDescription>Your session has expired. Please sign in again.</AlertDescription>
    </Alert>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Alert className="w-96">
      <SiInfoCircle />
      <AlertTitle>New update available</AlertTitle>
      <AlertDescription>A new version of the app is ready to install.</AlertDescription>
    </Alert>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>Cookie policy</AlertTitle>
      <AlertDescription>We use cookies to improve your experience.</AlertDescription>
      <AlertAction>
        <Button size="xs">Dismiss</Button>
      </AlertAction>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert>
        <SiInfoCircle />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>This is a default alert with an icon.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <SiInfoCircle />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>This is a destructive alert with an icon.</AlertDescription>
      </Alert>
    </div>
  ),
}
