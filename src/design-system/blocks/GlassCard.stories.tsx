import type { Meta, StoryObj } from "@storybook/react";
import GlassCard from "./GlassCard";

const meta = {
    title: "Organisms/Glass Card",
    component: GlassCard,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof GlassCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="bg-black min-h-screen p-20">
            <GlassCard className="w-[400px]" />
        </div>
    )
};

export const Highlight: Story = {
    render: () => (
        <div className="bg-black min-h-screen p-20">
            <div
                className="
                flex
                flex-col
                items-start
                p-[43px_32px]
                gap-[22px]
                w-[546px]
                h-[306px]
                bg-[rgba(26,26,26,0.4)]
                rounded-[16px]
            "
            >
                <h2 className="text-white text-2xl">Card Title</h2>
                <p className="text-white/60">Card content goes here</p>
            </div>
        </div>
    )
};
