import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem, ListHeader } from "./List";
import { Panel } from "./Panel";
import { Button } from "./Button";
import { Key, Database, Server, Users, Calendar, Clock } from "lucide-react";

const meta = {
    title: "Atoms/List",
    component: List,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * API Keys List - Console Style
 *
 * Full example matching the console API keys page design.
 */
export const APIKeysList: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="w-[1200px]">
            {/* Header Section */}
            <div className="mb-8 flex justify-between items-start">
                <div>
                    <h1 className="text-4xl font-medium mb-2">API Keys</h1>
                    <p className="text-white/60">
                        Manage API keys for accessing Berget AI services
                    </p>
                </div>
                <Button variant="secondary" size="lg">
                    + Create New Key
                </Button>
            </div>

            {/* List Panel */}
            <Panel variant="highlight" padding="none" radius="lg">
                <div className="relative z-10">
                    {/* Table Header */}
                    <ListHeader>
                        <div className="flex items-center gap-4 pl-14">
                            <span className="flex-1">Name</span>
                            <span className="w-40">Created</span>
                            <span className="w-40">Last Used</span>
                            <span className="w-32">Prefix</span>
                        </div>
                    </ListHeader>

                    {/* List Items */}
                    <List>
                        <ListItem
                            icon={<Key className="w-7 h-7 text-white" strokeWidth={1} />}
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium mb-1">
                                        API Key: Protokoll Klippare
                                    </h3>
                                    <p className="text-sm text-white/40">
                                        Plan: api-usage-eur
                                    </p>
                                </div>
                                <div className="w-40 text-sm text-white/60">
                                    2026-01-21
                                </div>
                                <div className="w-40 text-sm text-white/60">Never</div>
                                <div className="w-32 text-sm text-white/60">sk-...</div>
                            </div>
                        </ListItem>

                        <ListItem
                            icon={<Key className="w-7 h-7 text-white" strokeWidth={1} />}
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium mb-1">
                                        API Key: Openresponses
                                    </h3>
                                    <p className="text-sm text-white/40">
                                        Plan: api-usage-eur
                                    </p>
                                </div>
                                <div className="w-40 text-sm text-white/60">
                                    2026-01-15
                                </div>
                                <div className="w-40 text-sm text-white/60">Never</div>
                                <div className="w-32 text-sm text-white/60">sk-...</div>
                            </div>
                        </ListItem>

                        <ListItem
                            icon={<Key className="w-7 h-7 text-white" strokeWidth={1} />}
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <h3 className="text-base font-medium mb-1">
                                        API Key: Inventory
                                    </h3>
                                    <p className="text-sm text-white/40">
                                        Plan: api-usage-eur
                                    </p>
                                </div>
                                <div className="w-40 text-sm text-white/60">
                                    2026-01-13
                                </div>
                                <div className="w-40 text-sm text-white/60">Never</div>
                                <div className="w-32 text-sm text-white/60">sk-...</div>
                            </div>
                        </ListItem>
                    </List>
                </div>
            </Panel>
        </div>
    )
};

/**
 * Simple List - Basic Usage
 */
export const SimpleList: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <Panel variant="highlight" padding="none" radius="lg" className="w-[600px]">
            <div className="relative z-10">
                <List>
                    <ListItem
                        icon={<Database className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div>
                            <h3 className="text-base font-medium mb-1">
                                PostgreSQL Database
                            </h3>
                            <p className="text-sm text-white/40">Production · 15.2 GB</p>
                        </div>
                    </ListItem>

                    <ListItem
                        icon={<Server className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div>
                            <h3 className="text-base font-medium mb-1">API Server</h3>
                            <p className="text-sm text-white/40">Running · 4 instances</p>
                        </div>
                    </ListItem>

                    <ListItem
                        icon={<Users className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div>
                            <h3 className="text-base font-medium mb-1">Team Members</h3>
                            <p className="text-sm text-white/40">12 active users</p>
                        </div>
                    </ListItem>
                </List>
            </div>
        </Panel>
    )
};

/**
 * List with Header
 */
export const WithHeader: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <Panel variant="highlight" padding="none" radius="lg" className="w-[800px]">
            <div className="relative z-10">
                <ListHeader>
                    <div className="flex items-center gap-4 pl-14">
                        <span className="flex-1">Resource</span>
                        <span className="w-40">Status</span>
                        <span className="w-40">Last Updated</span>
                    </div>
                </ListHeader>

                <List>
                    <ListItem
                        icon={<Server className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <h3 className="text-base font-medium">
                                    Production Cluster
                                </h3>
                            </div>
                            <div className="w-40">
                                <span className="text-sm px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E]">
                                    Healthy
                                </span>
                            </div>
                            <div className="w-40 text-sm text-white/60">2 hours ago</div>
                        </div>
                    </ListItem>

                    <ListItem
                        icon={<Database className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <h3 className="text-base font-medium">Main Database</h3>
                            </div>
                            <div className="w-40">
                                <span className="text-sm px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E]">
                                    Online
                                </span>
                            </div>
                            <div className="w-40 text-sm text-white/60">
                                5 minutes ago
                            </div>
                        </div>
                    </ListItem>

                    <ListItem
                        icon={<Calendar className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex-1">
                                <h3 className="text-base font-medium">Backup Service</h3>
                            </div>
                            <div className="w-40">
                                <span className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                                    Running
                                </span>
                            </div>
                            <div className="w-40 text-sm text-white/60">1 hour ago</div>
                        </div>
                    </ListItem>
                </List>
            </div>
        </Panel>
    )
};

/**
 * Compact List - Without Icons
 */
export const CompactList: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <Panel variant="highlight" padding="none" radius="lg" className="w-[500px]">
            <div className="relative z-10">
                <List>
                    <ListItem icon={null} interactive={false}>
                        <div className="flex justify-between items-center">
                            <span className="text-base">Total API Calls</span>
                            <span className="text-base font-medium">1,247,832</span>
                        </div>
                    </ListItem>

                    <ListItem icon={null} interactive={false}>
                        <div className="flex justify-between items-center">
                            <span className="text-base">Successful Requests</span>
                            <span className="text-base font-medium text-[#22C55E]">
                                1,245,991
                            </span>
                        </div>
                    </ListItem>

                    <ListItem icon={null} interactive={false}>
                        <div className="flex justify-between items-center">
                            <span className="text-base">Failed Requests</span>
                            <span className="text-base font-medium text-red-400">
                                1,841
                            </span>
                        </div>
                    </ListItem>

                    <ListItem icon={null} interactive={false}>
                        <div className="flex justify-between items-center">
                            <span className="text-base">Average Latency</span>
                            <span className="text-base font-medium">42ms</span>
                        </div>
                    </ListItem>
                </List>
            </div>
        </Panel>
    )
};

/**
 * Interactive List - Hover States
 */
export const InteractiveList: Story = {
    args: {
        children: ""
    },
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <Panel variant="highlight" padding="none" radius="lg" className="w-[600px]">
            <div className="relative z-10">
                <div className="px-6 py-4 border-b border-[hsl(var(--border))]">
                    <h2 className="text-xl font-medium">Recent Activity</h2>
                </div>

                <List>
                    <ListItem
                        icon={<Clock className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div>
                            <h3 className="text-base font-medium mb-1">Model Deployed</h3>
                            <p className="text-sm text-white/40">
                                Llama-3.1-405B deployed to production · 2 minutes ago
                            </p>
                        </div>
                    </ListItem>

                    <ListItem
                        icon={<Users className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div>
                            <h3 className="text-base font-medium mb-1">
                                Team Member Added
                            </h3>
                            <p className="text-sm text-white/40">
                                john@example.com joined the team · 1 hour ago
                            </p>
                        </div>
                    </ListItem>

                    <ListItem
                        icon={<Key className="w-7 h-7 text-white" strokeWidth={1} />}
                    >
                        <div>
                            <h3 className="text-base font-medium mb-1">
                                API Key Created
                            </h3>
                            <p className="text-sm text-white/40">
                                New key for staging environment · 3 hours ago
                            </p>
                        </div>
                    </ListItem>
                </List>
            </div>
        </Panel>
    )
};
