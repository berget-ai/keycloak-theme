import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

/**
 * Select-komponent för att välja ett alternativ från en lista.
 *
 * Stöder olika varianter, storlekar och kan visa etiketter och beskrivningar.
 * Inkluderar felmeddelanden, platshållare och inaktiverat tillstånd.
 */
const meta = {
    title: "Atoms/Select",
    component: Select,
    parameters: {
        layout: "padded"
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "primary", "subtle", "muted"],
            description: "Visuell variant"
        },
        size: {
            control: "select",
            options: ["sm", "default", "lg"],
            description: "Storlek på selecten"
        },
        label: {
            control: "text",
            description: "Etikett att visa ovanför selecten"
        },
        description: {
            control: "text",
            description: "Beskrivning att visa under etiketten"
        },
        error: {
            control: "text",
            description: "Felmeddelande att visa"
        },
        placeholder: {
            control: "text",
            description: "Platshållartext"
        },
        disabled: {
            control: "boolean",
            description: "Om selecten är inaktiverad"
        }
    }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
    { value: "option1", label: "Alternativ 1" },
    { value: "option2", label: "Alternativ 2" },
    { value: "option3", label: "Alternativ 3" }
];

/**
 * Interaktiv demo med alla tillgängliga kontroller.
 */
export const Interactive: Story = {
    args: {
        variant: "default",
        size: "default",
        label: "Välj ett alternativ",
        placeholder: "Välj...",
        options: defaultOptions
    }
};

/**
 * Alla varianter av Select-komponenten.
 */
export const AllVariants: Story = {
    render: () => (
        <div className="space-y-6">
            <Select
                variant="default"
                label="Variant: Default"
                placeholder="Välj..."
                options={defaultOptions}
            />
            <Select
                variant="primary"
                label="Variant: Primary"
                placeholder="Välj..."
                options={defaultOptions}
            />
            <Select
                variant="subtle"
                label="Variant: Subtle"
                placeholder="Välj..."
                options={defaultOptions}
            />
            <Select
                variant="muted"
                label="Variant: Muted"
                placeholder="Välj..."
                options={defaultOptions}
            />
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Alla storlekar av Select-komponenten.
 */
export const AllSizes: Story = {
    render: () => (
        <div className="space-y-6">
            <Select
                size="sm"
                label="Liten select"
                placeholder="Välj..."
                options={defaultOptions}
            />
            <Select
                size="default"
                label="Standard select"
                placeholder="Välj..."
                options={defaultOptions}
            />
            <Select
                size="lg"
                label="Stor select"
                placeholder="Välj..."
                options={defaultOptions}
            />
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select med olika tillstånd.
 */
export const States: Story = {
    render: () => (
        <div className="space-y-6">
            <Select
                label="Tom"
                placeholder="Välj ett alternativ"
                options={defaultOptions}
            />
            <Select
                label="Med valt värde"
                defaultValue="option2"
                options={defaultOptions}
            />
            <Select
                label="Inaktiverad"
                placeholder="Kan inte välja"
                options={defaultOptions}
                disabled
            />
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select med felmeddelande.
 */
export const WithError: Story = {
    render: () => (
        <div className="space-y-6">
            <Select
                label="Land"
                placeholder="Välj land"
                options={defaultOptions}
                error="Du måste välja ett land"
            />
            <Select
                variant="primary"
                label="Språk"
                placeholder="Välj språk"
                options={defaultOptions}
                error="Detta språk är inte tillgängligt"
            />
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select med beskrivning.
 */
export const WithDescription: Story = {
    render: () => (
        <div className="space-y-6">
            <Select
                label="Roll"
                description="Välj din roll i projektet"
                placeholder="Välj roll..."
                options={[
                    { value: "admin", label: "Administratör" },
                    { value: "editor", label: "Redaktör" },
                    { value: "viewer", label: "Visare" }
                ]}
            />
            <Select
                label="Tidszon"
                description="Välj din lokala tidszon"
                placeholder="Välj tidszon..."
                options={[
                    { value: "utc", label: "UTC" },
                    { value: "cet", label: "CET (Central European Time)" },
                    { value: "est", label: "EST (Eastern Standard Time)" }
                ]}
            />
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select med inaktiverade alternativ.
 */
export const WithDisabledOptions: Story = {
    render: () => (
        <div className="space-y-6">
            <Select
                label="Prenumeration"
                placeholder="Välj prenumeration..."
                options={[
                    { value: "free", label: "Gratis" },
                    { value: "pro", label: "Pro" },
                    { value: "enterprise", label: "Enterprise", disabled: true }
                ]}
            />
            <Select
                variant="primary"
                label="Region"
                placeholder="Välj region..."
                options={[
                    { value: "eu", label: "Europa" },
                    { value: "us", label: "USA" },
                    { value: "asia", label: "Asien", disabled: true }
                ]}
            />
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select i formulär.
 */
export const InForm: Story = {
    render: () => (
        <div className="bg-white/5 rounded-xl p-6 space-y-6">
            <h3 className="text-white font-semibold text-lg">Profilinställningar</h3>

            <Select
                label="Land"
                placeholder="Välj land..."
                options={[
                    { value: "se", label: "Sverige" },
                    { value: "no", label: "Norge" },
                    { value: "dk", label: "Danmark" },
                    { value: "fi", label: "Finland" }
                ]}
            />

            <Select
                label="Språk"
                description="Välj ditt föredragna språk"
                placeholder="Välj språk..."
                options={[
                    { value: "sv", label: "Svenska" },
                    { value: "en", label: "Engelska" },
                    { value: "no", label: "Norska" }
                ]}
            />

            <Select
                variant="primary"
                label="Tidszon"
                placeholder="Välj tidszon..."
                options={[
                    { value: "cet", label: "CET" },
                    { value: "utc", label: "UTC" },
                    { value: "est", label: "EST" }
                ]}
            />
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select-grupp för relaterade val.
 */
export const SelectGroup: Story = {
    render: () => (
        <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Leveransadress</h3>

            <div className="space-y-4">
                <Select
                    label="Land"
                    placeholder="Välj land..."
                    options={[
                        { value: "se", label: "Sverige" },
                        { value: "no", label: "Norge" },
                        { value: "dk", label: "Danmark" }
                    ]}
                />

                <Select
                    label="Region"
                    placeholder="Välj region..."
                    options={[
                        { value: "stockholm", label: "Stockholm" },
                        { value: "goteborg", label: "Göteborg" },
                        { value: "malmo", label: "Malmö" }
                    ]}
                />

                <Select
                    label="Postnummer"
                    placeholder="Välj postnummer..."
                    options={[
                        { value: "111", label: "111 xx" },
                        { value: "112", label: "112 xx" },
                        { value: "113", label: "113 xx" }
                    ]}
                />
            </div>
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select med många alternativ.
 */
export const ManyOptions: Story = {
    render: () => (
        <div className="space-y-6">
            <Select
                label="Stad"
                placeholder="Välj stad..."
                options={[
                    { value: "sthlm", label: "Stockholm" },
                    { value: "gbg", label: "Göteborg" },
                    { value: "malmo", label: "Malmö" },
                    { value: "uppsala", label: "Uppsala" },
                    { value: "vasteras", label: "Västerås" },
                    { value: "orebro", label: "Örebro" },
                    { value: "linkoping", label: "Linköping" },
                    { value: "helsingborg", label: "Helsingborg" },
                    { value: "jonkoping", label: "Jönköping" },
                    { value: "norrkoping", label: "Norrköping" }
                ]}
            />
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select i kort.
 */
export const InCard: Story = {
    render: () => (
        <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-6">Inställningar</h3>

            <div className="space-y-6">
                <Select
                    label="Tema"
                    placeholder="Välj tema..."
                    options={[
                        { value: "light", label: "Ljust" },
                        { value: "dark", label: "Mörkt" },
                        { value: "auto", label: "Automatiskt" }
                    ]}
                />

                <Select
                    variant="primary"
                    label="Språk"
                    placeholder="Välj språk..."
                    options={[
                        { value: "sv", label: "Svenska" },
                        { value: "en", label: "Engelska" }
                    ]}
                />
            </div>
        </div>
    ),
    args: { options: defaultOptions }
};

/**
 * Select med validering.
 */
export const WithValidation: Story = {
    render: () => (
        <div className="space-y-6">
            <Select
                label="Land"
                placeholder="Välj land..."
                options={defaultOptions}
                error="Du måste välja ett land"
            />
            <Select
                variant="primary"
                label="Region"
                placeholder="Välj region..."
                options={defaultOptions}
                description="Välj din region för bättre service"
            />
            <Select
                label="Stad"
                placeholder="Välj stad..."
                options={[
                    { value: "sthlm", label: "Stockholm" },
                    { value: "gbg", label: "Göteborg" },
                    { value: "malmo", label: "Malmö" }
                ]}
            />
        </div>
    ),
    args: { options: defaultOptions }
};
