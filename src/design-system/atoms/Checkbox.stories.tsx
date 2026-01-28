import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

/**
 * Checkbox-komponent för val av alternativ.
 *
 * Stöder olika varianter, storlekar och kan visa etiketter och beskrivningar.
 * Inkluderar felmeddelanden och inaktiverat tillstånd.
 */
const meta = {
    title: "Atoms/Checkbox",
    component: Checkbox,
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
            description: "Storlek på checkboxen"
        },
        label: {
            control: "text",
            description: "Etikett att visa bredvid checkboxen"
        },
        description: {
            control: "text",
            description: "Beskrivning att visa under etiketten"
        },
        error: {
            control: "text",
            description: "Felmeddelande att visa"
        },
        disabled: {
            control: "boolean",
            description: "Om checkboxen är inaktiverad"
        },
        defaultChecked: {
            control: "boolean",
            description: "Om checkboxen är ikryssad som standard"
        }
    }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interaktiv demo med alla tillgängliga kontroller.
 */
export const Interactive: Story = {
    args: {
        variant: "default",
        size: "default",
        label: "Acceptera villkor",
        description: "Jag har läst och accepterat användarvillkoren"
    }
};

/**
 * Alla varianter av Checkbox-komponenten.
 */
export const AllVariants: Story = {
    render: () => (
        <div className="space-y-4">
            <Checkbox
                variant="default"
                label="Variant: Default"
                description="Standardvariant med vit ram"
            />
            <Checkbox
                variant="primary"
                label="Variant: Primary"
                description="Primär variant med accentfärg"
            />
            <Checkbox
                variant="subtle"
                label="Variant: Subtle"
                description="Subtil variant med tunnare ram"
            />
            <Checkbox
                variant="muted"
                label="Variant: Muted"
                description="Mjukad variant med mycket subtil ram"
            />
        </div>
    ),
    args: { children: "" }
};

/**
 * Alla storlekar av Checkbox-komponenten.
 */
export const AllSizes: Story = {
    render: () => (
        <div className="space-y-4">
            <Checkbox
                size="sm"
                label="Liten checkbox"
                description="Compact size för tät layout"
            />
            <Checkbox
                size="default"
                label="Standard checkbox"
                description="Standardstorlek för vanlig användning"
            />
            <Checkbox
                size="lg"
                label="Stor checkbox"
                description="Stor storlek för bättre synlighet"
            />
        </div>
    ),
    args: { children: "" }
};

/**
 * Checkbox med olika tillstånd.
 */
export const States: Story = {
    render: () => (
        <div className="space-y-4">
            <Checkbox label="Omarkerad" />
            <Checkbox label="Markerad" defaultChecked />
            <Checkbox label="Inaktiverad" disabled />
            <Checkbox label="Markerad och inaktiverad" defaultChecked disabled />
        </div>
    ),
    args: { children: "" }
};

/**
 * Checkbox med felmeddelande.
 */
export const WithError: Story = {
    render: () => (
        <div className="space-y-4">
            <Checkbox
                label="Godkänn villkor"
                error="Du måste godkänna villkoren för att fortsätta"
            />
            <Checkbox
                variant="primary"
                label="Bekräfta e-post"
                defaultChecked
                error="E-postadressen är ogiltig"
            />
        </div>
    ),
    args: { children: "" }
};

/**
 * Checkbox med beskrivning.
 */
export const WithDescription: Story = {
    render: () => (
        <div className="space-y-4">
            <Checkbox
                label="Prenumerera på nyhetsbrev"
                description="Få de senaste uppdateringarna direkt i din inkorg"
            />
            <Checkbox
                label="Spara mina uppgifter"
                description="Vi kommer att spara dina uppgifter för nästa besök"
                defaultChecked
            />
            <Checkbox
                variant="primary"
                label="Aktivera tvåfaktorsautentisering"
                description="Öka säkerheten för ditt konto med 2FA"
            />
        </div>
    ),
    args: { children: "" }
};

/**
 * Checkbox-grupp för flera alternativ.
 */
export const CheckboxGroup: Story = {
    render: () => (
        <div className="space-y-4">
            <h3 className="text-white font-semibold">Välj dina intressen</h3>
            <div className="space-y-3">
                <Checkbox
                    label="Webbutveckling"
                    description="Frontend, backend, fullstack"
                />
                <Checkbox
                    label="Mobilutveckling"
                    description="iOS, Android, React Native"
                />
                <Checkbox label="Design" description="UI/UX, grafisk design" />
                <Checkbox label="DevOps" description="CI/CD, Kubernetes, Docker" />
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Checkbox i formulär.
 */
export const InForm: Story = {
    render: () => (
        <div className="bg-white/5 rounded-xl p-6 space-y-6">
            <h3 className="text-white font-semibold text-lg">Kontoinställningar</h3>

            <div className="space-y-4">
                <Checkbox
                    label="Public profil"
                    description="Gör din profil synlig för andra användare"
                    defaultChecked
                />
                <Checkbox
                    label="E-postnotiser"
                    description="Få e-post när någon kommenterar på dina inlägg"
                />
                <Checkbox
                    label="SMS-notiser"
                    description="Få SMS för viktiga uppdateringar"
                />
                <Checkbox
                    variant="primary"
                    label="Tvåfaktorsautentisering"
                    description="Kräv 2FA vid inloggning"
                />
            </div>

            <div className="pt-4 border-t border-white/10">
                <Checkbox
                    label="Jag accepterar användarvillkoren"
                    description="Genom att fortsätta godkänner du våra villkor"
                />
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Checkbox med olika varianter i grupp.
 */
export const MixedVariants: Story = {
    render: () => (
        <div className="space-y-4">
            <h3 className="text-white font-semibold">Behörigheter</h3>
            <div className="space-y-3">
                <Checkbox variant="default" label="Läsåtkomst" defaultChecked />
                <Checkbox variant="primary" label="Skrivåtkomst" />
                <Checkbox variant="subtle" label="Ta bort åtkomst" />
                <Checkbox variant="muted" label="Administratörsåtkomst" />
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Checkbox i kort.
 */
export const InCard: Story = {
    render: () => (
        <div className="bg-white/5 rounded-xl p-6">
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <Checkbox
                        label="Premium-paket"
                        description="Få tillgång till alla funktioner"
                        defaultChecked
                    />
                </div>
                <div className="flex items-start gap-3">
                    <Checkbox
                        label="Standard-paket"
                        description="Grundläggande funktioner"
                    />
                </div>
                <div className="flex items-start gap-3">
                    <Checkbox
                        variant="primary"
                        label="Enterprise-paket"
                        description="Avancerade funktioner och support"
                    />
                </div>
            </div>
        </div>
    ),
    args: { children: "" }
};

/**
 * Checkbox med validering.
 */
export const WithValidation: Story = {
    render: () => (
        <div className="space-y-4">
            <Checkbox
                label="Jag är 18 år eller äldre"
                error="Du måste vara 18 år för att fortsätta"
            />
            <Checkbox
                label="Jag accepterar sekretesspolicyn"
                description="Läs vår sekretetspolicy för mer information"
                error="Du måste acceptera sekretesspolicyn"
            />
            <Checkbox
                variant="primary"
                label="Jag godkänner marknadsföring"
                description="Vi kan skicka dig relevanta erbjudanden"
            />
        </div>
    ),
    args: { children: "" }
};
