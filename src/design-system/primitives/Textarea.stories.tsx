import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

/**
 * Textarea-komponent för flerradig textinmatning.
 *
 * Stöder olika varianter, storlekar och kan visa etiketter och beskrivningar.
 * Inkluderar felmeddelanden, platshållare, teckenräkning och inaktiverat tillstånd.
 */
const meta = {
    title: "Primitives/Textarea",
    component: Textarea,
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
            description: "Storlek på textarean"
        },
        label: {
            control: "text",
            description: "Etikett att visa ovanför textarean"
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
            description: "Om textarean är inaktiverad"
        },
        maxLength: {
            control: "number",
            description: "Maximalt antal tecken"
        },
        showCount: {
            control: "boolean",
            description: "Visa teckenräkning"
        },
        rows: {
            control: "number",
            description: "Antal rader"
        }
    }
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interaktiv demo med alla tillgängliga kontroller.
 */
export const Interactive: Story = {
    args: {
        variant: "default",
        size: "default",
        label: "Meddelande",
        placeholder: "Skriv ditt meddelande här...",
        rows: 4
    }
};

/**
 * Alla varianter av Textarea-komponenten.
 */
export const AllVariants: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea
                variant="default"
                label="Variant: Default"
                placeholder="Skriv något..."
                rows={3}
            />
            <Textarea
                variant="primary"
                label="Variant: Primary"
                placeholder="Skriv något..."
                rows={3}
            />
            <Textarea
                variant="subtle"
                label="Variant: Subtle"
                placeholder="Skriv något..."
                rows={3}
            />
            <Textarea
                variant="muted"
                label="Variant: Muted"
                placeholder="Skriv något..."
                rows={3}
            />
        </div>
    )
};

/**
 * Alla storlekar av Textarea-komponenten.
 */
export const AllSizes: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea
                size="sm"
                label="Liten textarea"
                placeholder="Skriv något..."
                rows={2}
            />
            <Textarea
                size="default"
                label="Standard textarea"
                placeholder="Skriv något..."
                rows={3}
            />
            <Textarea
                size="lg"
                label="Stor textarea"
                placeholder="Skriv något..."
                rows={4}
            />
        </div>
    )
};

/**
 * Textarea med olika tillstånd.
 */
export const States: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea label="Tom" placeholder="Skriv ditt meddelande..." rows={3} />
            <Textarea
                label="Med text"
                defaultValue="Detta är ett exempel på text i en textarea. Du kan skriva så mycket text du vill."
                rows={3}
            />
            <Textarea
                label="Inaktiverad"
                placeholder="Kan inte skriva"
                disabled
                rows={3}
            />
        </div>
    )
};

/**
 * Textarea med felmeddelande.
 */
export const WithError: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea
                label="Kommentar"
                placeholder="Skriv din kommentar..."
                rows={3}
                error="Kommentaren får inte vara tom"
            />
            <Textarea
                variant="primary"
                label="Beskrivning"
                placeholder="Skriv en beskrivning..."
                rows={3}
                error="Beskrivningen måste vara minst 10 tecken"
            />
        </div>
    )
};

/**
 * Textarea med beskrivning.
 */
export const WithDescription: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea
                label="Feedback"
                description="Din feedback hjälper oss att förbättra tjänsten"
                placeholder="Skriv din feedback..."
                rows={3}
            />
            <Textarea
                label="Anmärkningar"
                description="Lägg till eventuella anmärkningar om ordern"
                placeholder="Skriv dina anmärkningar..."
                rows={4}
            />
        </div>
    )
};

/**
 * Textarea med teckenräkning.
 */
export const WithCharacterCount: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea
                label="Kort beskrivning"
                placeholder="Skriv en kort beskrivning..."
                maxLength={100}
                showCount
                rows={2}
            />
            <Textarea
                variant="primary"
                label="Långt meddelande"
                placeholder="Skriv ditt meddelande..."
                maxLength={500}
                showCount
                rows={4}
            />
            <Textarea
                label="Kommentar"
                placeholder="Skriv en kommentar..."
                maxLength={50}
                showCount
                defaultValue="Detta är en testkommentar"
                rows={2}
            />
        </div>
    )
};

/**
 * Textarea med olika antal rader.
 */
export const DifferentRows: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea label="Kort text" placeholder="Skriv kort text..." rows={2} />
            <Textarea
                label="Medellång text"
                placeholder="Skriv medellång text..."
                rows={4}
            />
            <Textarea label="Lång text" placeholder="Skriv lång text..." rows={8} />
        </div>
    )
};

/**
 * Textarea i formulär.
 */
export const InForm: Story = {
    render: () => (
        <div className="bg-white/5 rounded-xl p-6 space-y-6">
            <h3 className="text-white font-semibold text-lg">Skicka feedback</h3>

            <Textarea
                label="Titel"
                placeholder="Kort titel på din feedback..."
                rows={2}
            />

            <Textarea
                label="Beskrivning"
                description="Beskriv din feedback i detalj"
                placeholder="Skriv en detaljerad beskrivning..."
                rows={4}
            />

            <Textarea
                variant="primary"
                label="Förslag på förbättringar"
                placeholder="Har du några förslag på hur vi kan förbättra?"
                rows={3}
                maxLength={500}
                showCount
            />
        </div>
    )
};

/**
 * Textarea-grupp för relaterade fält.
 */
export const TextareaGroup: Story = {
    render: () => (
        <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Produktbeskrivning</h3>

            <div className="space-y-4">
                <Textarea
                    label="Kort beskrivning"
                    placeholder="En kort beskrivning av produkten..."
                    rows={2}
                    maxLength={150}
                    showCount
                />

                <Textarea
                    label="Detaljerad beskrivning"
                    placeholder="En detaljerad beskrivning av produkten..."
                    rows={5}
                />

                <Textarea
                    label="Specifikationer"
                    placeholder="Lista tekniska specifikationer..."
                    rows={4}
                />
            </div>
        </div>
    )
};

/**
 * Textarea med validering.
 */
export const WithValidation: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea
                label="Kommentar"
                placeholder="Skriv din kommentar..."
                rows={3}
                error="Kommentaren får inte vara tom"
            />
            <Textarea
                variant="primary"
                label="Beskrivning"
                placeholder="Skriv en beskrivning..."
                rows={3}
                description="Minst 10 tecken krävs"
                maxLength={500}
                showCount
            />
            <Textarea
                label="Meddelande"
                placeholder="Skriv ditt meddelande..."
                rows={4}
                maxLength={200}
                showCount
                defaultValue="Detta är ett meddelande som är nära gränsen"
            />
        </div>
    )
};

/**
 * Textarea i kort.
 */
export const InCard: Story = {
    render: () => (
        <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-6">Anteckningar</h3>

            <div className="space-y-6">
                <Textarea
                    label="Snabbnote"
                    placeholder="Skriv en snabbnote..."
                    rows={2}
                />

                <Textarea
                    variant="primary"
                    label="Detaljerad anteckning"
                    placeholder="Skriv en detaljerad anteckning..."
                    rows={4}
                    maxLength={300}
                    showCount
                />
            </div>
        </div>
    )
};

/**
 * Textarea med autofokus.
 */
export const WithAutoFocus: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea
                label="Meddelande"
                placeholder="Börja skriva direkt..."
                autoFocus
                rows={4}
            />
        </div>
    )
};

/**
 * Textarea med readonly.
 */
export const Readonly: Story = {
    render: () => (
        <div className="space-y-6">
            <Textarea
                label="Läsbar information"
                defaultValue="Denna text kan inte redigeras men kan kopieras. Det är användbart för att visa information som användaren ska kunna läsa men inte ändra."
                readOnly
                rows={4}
            />
            <Textarea
                variant="primary"
                label="Systemmeddelande"
                defaultValue="Viktigt systemmeddelande som endast är för läsning."
                readOnly
                rows={3}
            />
        </div>
    )
};
