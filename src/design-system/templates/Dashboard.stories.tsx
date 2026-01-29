import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "../atoms/Panel";
import { Activity, ArrowUpRight, TrendingUp, Cpu } from "lucide-react";

const meta: Meta = {
    title: "Templates/Dashboard",
    parameters: {
        layout: "fullscreen"
    }
};

export default meta;
type Story = StoryObj;

/**
 * Console Dashboard
 *
 * Full dashboard layout inspired by Berget Console.
 * Features:
 * - Large rounded panels (rounded-3xl)
 * - Subtle bokeh effect on all panels
 * - Console-style stat cards
 * - Backdrop blur and transparency
 */
export const ConsoleDashboard: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <div className="min-h-screen bg-background p-8">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-medium tracking-tight mb-2">
                    Welcome, Christina
                </h1>
                <p className="text-white/60">
                    Here's the latest overview of your account and resources.
                </p>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {/* Account Balance */}
                <Panel variant="highlight" padding="lg" radius="lg">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-base text-white/40">
                                Account Balance
                            </span>
                            <Activity className="w-7 h-7 text-white/80" strokeWidth={2} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-3xl font-medium tracking-tight">
                                    1157.87 EUR
                                </h3>
                            </div>
                            <p className="text-sm text-white/40">Available balance</p>
                        </div>
                    </div>
                </Panel>

                {/* API Usage */}
                <Panel variant="highlight" padding="lg" radius="lg">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-base text-white/40">API Usage</span>
                            <Cpu className="w-7 h-7 text-white/80" strokeWidth={2} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-3xl font-medium tracking-tight">
                                    24.3K
                                </h3>
                                <span className="text-base text-white/60">12.45 EUR</span>
                            </div>
                            <p className="text-sm text-white/40">Requests this period</p>
                        </div>
                    </div>
                </Panel>

                {/* Growth */}
                <Panel variant="highlight" padding="lg" radius="lg">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-base text-white/40">Growth</span>
                            <TrendingUp
                                className="w-7 h-7 text-white/80"
                                strokeWidth={2}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-3xl font-medium tracking-tight">
                                    +23.5%
                                </h3>
                                <span className="text-base text-[#22C55E]">+18.2%</span>
                            </div>
                            <p className="text-sm text-white/40">vs. last period</p>
                        </div>
                    </div>
                </Panel>

                {/* Status */}
                <Panel variant="highlight" padding="lg" radius="lg">
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-base text-white/40">Status</span>
                            <ArrowUpRight
                                className="w-7 h-7 text-white/80"
                                strokeWidth={2}
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-baseline gap-3">
                                <h3 className="text-3xl font-medium tracking-tight">
                                    Active
                                </h3>
                            </div>
                            <p className="text-sm text-white/40">
                                All systems operational
                            </p>
                        </div>
                    </div>
                </Panel>
            </div>

            {/* Large Content Panels */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Main Content - Larger radius for bigger panels */}
                <Panel
                    variant="highlight"
                    padding="lg"
                    radius="xl"
                    className="xl:col-span-2"
                >
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-medium">Account Overview</h2>
                                <p className="text-white/60">
                                    Current balance and usage for the past week
                                </p>
                            </div>
                        </div>

                        {/* Chart Placeholder */}
                        <div className="h-64 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                            <p className="text-white/40">Chart Component</p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-white/5">
                                <p className="text-sm text-white/40 mb-1">
                                    Total Requests
                                </p>
                                <p className="text-2xl font-medium">127.4K</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <p className="text-sm text-white/40 mb-1">Avg Latency</p>
                                <p className="text-2xl font-medium">42ms</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5">
                                <p className="text-sm text-white/40 mb-1">Success Rate</p>
                                <p className="text-2xl font-medium">99.8%</p>
                            </div>
                        </div>
                    </div>
                </Panel>

                {/* Sidebar Panel */}
                <Panel variant="highlight" padding="lg" radius="xl">
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-medium">Recent Activity</h2>
                            <button className="text-sm text-white/40 hover:text-white transition-colors">
                                View all
                            </button>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    title: "Model Deployed",
                                    time: "2 minutes ago",
                                    desc: "Llama-3.1-405B to production"
                                },
                                {
                                    title: "Balance Topped Up",
                                    time: "1 hour ago",
                                    desc: "Added 500.00 EUR"
                                },
                                {
                                    title: "API Key Created",
                                    time: "3 hours ago",
                                    desc: "Production environment"
                                },
                                {
                                    title: "Team Member Added",
                                    time: "5 hours ago",
                                    desc: "john@example.com"
                                }
                            ].map((activity, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-white/60" />
                                    </div>
                                    <div>
                                        <p className="text-base font-medium">
                                            {activity.title}
                                        </p>
                                        <p className="text-sm text-white/40">
                                            {activity.time}
                                        </p>
                                        <p className="text-sm text-white/60 mt-1">
                                            {activity.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Panel>
            </div>
        </div>
    )
};

/**
 * Stat Cards Only
 *
 * Just the stat cards for focused testing of the console-style panels.
 */
export const StatCards: Story = {
    parameters: {

        controls: { hide: true }

    },

    render: () => (
        <div className="min-h-screen bg-background p-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-medium mb-8">Console-Style Stat Cards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Panel variant="highlight" padding="lg" radius="lg">
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-base text-white/40">
                                    Account Balance
                                </span>
                                <Activity
                                    className="w-7 h-7 text-white/80"
                                    strokeWidth={2}
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-medium tracking-tight">
                                    1157.87 EUR
                                </h3>
                                <p className="text-sm text-white/40">Available balance</p>
                            </div>
                        </div>
                    </Panel>

                    <Panel variant="highlight" padding="lg" radius="lg">
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-base text-white/40">API Usage</span>
                                <Cpu className="w-7 h-7 text-white/80" strokeWidth={2} />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-baseline gap-3">
                                    <h3 className="text-3xl font-medium tracking-tight">
                                        24.3K
                                    </h3>
                                    <span className="text-base text-white/60">
                                        12.45 EUR
                                    </span>
                                </div>
                                <p className="text-sm text-white/40">
                                    Requests this period
                                </p>
                            </div>
                        </div>
                    </Panel>

                    <Panel variant="glass" padding="lg" radius="lg">
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-base text-white/40">
                                    With Glass
                                </span>
                                <TrendingUp
                                    className="w-7 h-7 text-white/80"
                                    strokeWidth={2}
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-medium tracking-tight">
                                    +23.5%
                                </h3>
                                <p className="text-sm text-white/40">
                                    Liquid glass variant
                                </p>
                            </div>
                        </div>
                    </Panel>

                    <Panel variant="highlight" padding="lg" radius="lg">
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-base text-white/40">No Bokeh</span>
                                <ArrowUpRight
                                    className="w-7 h-7 text-white/80"
                                    strokeWidth={2}
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-3xl font-medium tracking-tight">
                                    Clean
                                </h3>
                                <p className="text-sm text-white/40">Bokeh disabled</p>
                            </div>
                        </div>
                    </Panel>
                </div>

                <div className="mt-12">
                    <h3 className="text-xl font-medium mb-4">Radius Variants</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Panel variant="highlight" padding="lg" radius="default">
                            <div className="relative z-10">
                                <p className="text-white/60 mb-2">
                                    Default (rounded-2xl)
                                </p>
                                <p className="text-2xl font-medium">32px</p>
                            </div>
                        </Panel>

                        <Panel variant="highlight" padding="lg" radius="lg">
                            <div className="relative z-10">
                                <p className="text-white/60 mb-2">Large (rounded-3xl)</p>
                                <p className="text-2xl font-medium">48px</p>
                            </div>
                        </Panel>

                        <Panel variant="highlight" padding="lg" radius="xl">
                            <div className="relative z-10">
                                <p className="text-white/60 mb-2">XL (rounded-[2rem])</p>
                                <p className="text-2xl font-medium">64px</p>
                            </div>
                        </Panel>
                    </div>
                </div>
            </div>
        </div>
    )
};
