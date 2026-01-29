import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

/**
 * Divider-komponent för visuell separation av innehåll.
 *
 * Stöder både horisontell och vertikal orientering med olika varianter och storlekar.
 * Kan även visa en etikett i mitten av avdelaren (endast horisontell).
 */
const meta = {
    title: "Atoms/Divider",
    component: Divider,
    parameters: {
        layout: "padded"
    },
    tags: ["autodocs"],
    argTypes: {
        orientation: {
            control: "select",
            options: ["horizontal", "vertical"],
            description: "Orientering av avdelaren"
        },
        variant: {
            control: "select",
            options: ["default", "subtle", "strong", "primary", "muted"],
            description: "Visuell variant"
        },
        size: {
            control: "select",
            options: ["thin", "medium", "thick"],
            description: "Tjocklek på avdelaren"
        },
        label: {
            control: "text",
            description: "Etikett att visa i mitten av avdelaren"
        },
        labelPosition: {
            control: "select",
            options: ["center", "left", "right"],
            description: "Position för etiketten"
        }
    }
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interaktiv demo med alla tillgängliga kontroller.
 */
export const Interactive: Story = {
    args: {
        orientation: "horizontal",
        variant: "default",
        size: "thin"
    }
};

/**
 * Alla varianter av Divider-komponenten.
 */
export const AllVariants: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-white mb-4">Variant: Default</h3>
                <Divider variant="default" />
            </div>

            <div>
                <h3 className="text-white mb-4">Variant: Subtle</h3>
                <Divider variant="subtle" />
            </div>

            <div>
                <h3 className="text-white mb-4">Variant: Strong</h3>
                <Divider variant="strong" />
            </div>

            <div>
                <h3 className="text-white mb-4">Variant: Primary</h3>
                <Divider variant="primary" />
            </div>

            <div>
                <h3 className="text-white mb-4">Variant: Muted</h3>
                <Divider variant="muted" />
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Alla storlekar av Divider-komponenten.
 */
export const AllSizes: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-white mb-4">Size: Thin</h3>
                <Divider size="thin" />
            </div>

            <div>
                <h3 className="text-white mb-4">Size: Medium</h3>
                <Divider size="medium" />
            </div>

            <div>
                <h3 className="text-white mb-4">Size: Thick</h3>
                <Divider size="thick" />
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Horisontell och vertikal orientering.
 */
export const Orientations: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-white mb-4">Horisontell</h3>
                <Divider orientation="horizontal" />
            </div>

            <div>
                <h3 className="text-white mb-4">Vertikal (med höjd)</h3>
                <div className="flex h-32 items-center">
                    <div className="flex-1 text-white/60">Vänster innehåll</div>
                    <Divider orientation="vertical" />
                    <div className="flex-1 text-white/60">Höger innehåll</div>
                </div>
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Divider med etiketter.
 */
export const WithLabels: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="text-white mb-4">Centrerad etikett</h3>
                <Divider label="Eller" />
            </div>

            <div>
                <h3 className="text-white mb-4">Vänsterjusterad etikett</h3>
                <Divider label="Alternativ" labelPosition="left" />
            </div>

            <div>
                <h3 className="text-white mb-4">Högerjusterad etikett</h3>
                <Divider label="Fortsätt" labelPosition="right" />
            </div>

            <div>
                <h3 className="text-white mb-4">Etikett med variant</h3>
                <Divider label="Primär" variant="primary" />
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Divider i kontext - användning i kort och listor.
 */
export const InContext: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Kort med sektioner</h3>
                <p className="text-white/60 mb-4">Första sektionen med lite text.</p>
                <Divider />
                <p className="text-white/60 mt-4">Andra sektionen med mer text.</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Kort med etikett</h3>
                <p className="text-white/60 mb-4">Innan avdelaren.</p>
                <Divider label="Eller" />
                <p className="text-white/60 mt-4">Efter avdelaren.</p>
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Divider i navigationsmenyer.
 */
export const InNavigation: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="bg-white/5 rounded-xl p-4 w-64">
            <nav className="space-y-1">
                <a
                    href="#"
                    className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg"
                >
                    Dashboard
                </a>
                <a
                    href="#"
                    className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg"
                >
                    Projekt
                </a>
                <a
                    href="#"
                    className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg"
                >
                    Team
                </a>
                <Divider />
                <a
                    href="#"
                    className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg"
                >
                    Inställningar
                </a>
                <a
                    href="#"
                    className="block px-3 py-2 text-white hover:bg-white/10 rounded-lg"
                >
                    Profil
                </a>
            </nav>
        </div>
    ),
    args: { children: "" }
};

/**
 * Divider i sidfot.
 */
export const InFooter: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="bg-white/5 rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-white/60 text-sm">
                    © 2024 Berget Design System. Alla rättigheter förbehållna.
                </div>
                <div className="flex gap-4">
                    <a href="#" className="text-white/60 text-sm hover:text-white">
                        Integritet
                    </a>
                    <a href="#" className="text-white/60 text-sm hover:text-white">
                        Villkor
                    </a>
                    <a href="#" className="text-white/60 text-sm hover:text-white">
                        Support
                    </a>
                </div>
            </div>
            <Divider className="mt-6" />
            <div className="mt-6 text-center text-white/40 text-sm">
                Byggd med TypeScript, React och Tailwind CSS
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Divider med olika varianter i samma layout.
 */
export const MixedVariants: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Blandade varianter</h3>
                <p className="text-white/60 mb-4">Sektion 1</p>
                <Divider variant="default" />
                <p className="text-white/60 my-4">Sektion 2</p>
                <Divider variant="subtle" />
                <p className="text-white/60 my-4">Sektion 3</p>
                <Divider variant="strong" />
                <p className="text-white/60 mt-4">Sektion 4</p>
            </div>
        </div>
    ),
    args: { children: "" }
};
