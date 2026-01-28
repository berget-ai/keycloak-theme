import type { Meta, StoryObj } from "@storybook/react";
import SimpleBergetPage from "./SimpleBergetPage";

const meta = {
    title: "Berget/Simple",
    component: SimpleBergetPage
} satisfies Meta<typeof SimpleBergetPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <SimpleBergetPage />
};
