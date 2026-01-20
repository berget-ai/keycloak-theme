<p align="center">
    <i>🏔️ Berget Keycloak Theme 🏔️</i>
    <br/>
    <i>Modern, Scandinavian design for Keycloak authentication</i>
    <br/>
    <br/>
    <i>Built with <a href="https://keycloakify.dev">Keycloakify</a> v11</i>
    <br/>
    <br/>
</p>

# Berget Keycloak Theme

Berget är ett modernt Keycloak-tema med skandinavisk design estetik, skapat för [Berget AI Console](https://berget.ai). Temat erbjuder en ren och minimalistisk inloggningsupplevelse med fokus på användarupplevelse och tillgänglighet.

## 📚 Design System (Storybook)

Utforska designsystemet och alla UI-komponenter i vår live Storybook:

**🔗 [https://berget-ai.github.io/berget-design-system/](https://berget-ai.github.io/berget-design-system/)**

Här kan du se alla komponenter, deras varianter och användningsexempel direkt i webbläsaren.

## Design Principles

-   **Skandinavisk design** - Minimalistiskt och funktionellt gränssnitt inspirerat av nordisk designtradition
-   **Glassmorphism** - Subtila backdrop-blur effekter och genomskinliga kort
-   **Mörkt tema** - Elegant mörk design (#1A1A1A) med bra kontrast och läsbarhet
-   **Typografi** - DM Sans för brödtext, Ovo serif för rubriker
-   **Färgschema** - Grön accent färg (hsl(142 33% 46%)) och vita knappar för optimal kontrast
-   **Grid bakgrund** - Subtilt 24px rutnätsmönster för visuell struktur

## Features

-   **Responsiv layout** - Fungerar perfekt på alla enheter (mobil, tablet, desktop)
-   **Typsäker utveckling** - Byggt med React och TypeScript för robusthet
-   **Modern UI-komponenter** - Använder Tailwind CSS och shadcn/ui komponenter
-   **Social providers** - Stöd för GitHub, Google, Freja eID och andra identity providers
-   **Berget logo** - Integrerad vit logo med SVG-inverterad filter
-   **Storybook integration** - Utveckla och testa komponenter isolerat

## Komponenter

Temat inkluderar anpassade UI-komponenter från shadcn/ui:

-   **Card** - Glassmorphic kort med backdrop-blur och subtila borders
-   **Button** - Vita knappar med shadow-effekter för tydlig call-to-action
-   **Alert** - Meddelanden för success, error och info states
-   **Checkbox** - Anpassade checkboxar med Berget färgschema
-   **Input fields** - Stilade input-fält med focus states och validering
-   **Form elements** - Kompletta formulär med labels och error handling

## Tech Stack

-   **Keycloakify v11** - React-baserat ramverk för Keycloak teman
-   **React 18** - Modern React med hooks och TypeScript
-   **Tailwind CSS** - Utility-first CSS framework med custom Berget design tokens
-   **shadcn/ui** - High-quality React komponenter byggda på Radix UI
-   **PostCSS & Autoprefixer** - CSS-bearbetning för cross-browser kompatibilitet
-   **Storybook 10** - Komponentutveckling och dokumentation
-   **TypeScript** - Type safety och bättre utvecklarupplevelse

# Quick Start

## Installation

```bash
git clone https://github.com/berget-ai/keycloak-theme
cd keycloak-theme
npm install
```

## Development

Starta Storybook för att utveckla och testa komponenter:

```bash
npm run storybook
```

Detta öppnar Storybook på `http://localhost:6006` där du kan se och testa alla komponenter.

## Available Stories

-   **Berget/Simple** - Enkel demo av login-sidan
-   **Berget/Login** - Fullständig login-sida med Keycloak-integration
-   **login/login.ftl** - Alla olika variants av login-sidan (med errors, social providers, etc.)

# Testing the theme locally

[Documentation](https://docs.keycloakify.dev/testing-your-theme)

# How to customize the theme

[Documentation](https://docs.keycloakify.dev/customization-strategies)

# Building the Theme

## Prerequisites

Du behöver ha [Maven](https://maven.apache.org/) installerat för att bygga temat (Maven >= 3.1.1, Java >= 7).  
Kommandot `mvn` måste finnas i $PATH.

**Installation:**

-   macOS: `brew install maven`
-   Debian/Ubuntu: `sudo apt-get install maven`
-   Windows: `choco install openjdk` och `choco install maven` (eller ladda ner från [här](https://maven.apache.org/download.cgi))

## Build Commands

```bash
# Bygg production version av React-appen
npm run build

# Bygg Keycloak-tema (genererar JAR-filer)
npm run build-keycloak-theme
```

Keycloakify genererar som standard flera .jar-filer för olika versioner av Keycloak:

-   `keycloak-theme-for-kc-22-to-25.jar` - För Keycloak 22-25
-   `keycloak-theme-for-kc-all-other-versions.jar` - För övriga versioner

Du kan anpassa detta beteende, se [dokumentation här](https://docs.keycloakify.dev/features/compiler-options/keycloakversiontargets).

## Deploy to Keycloak

1. Bygg temat: `npm run build-keycloak-theme`
2. Hitta JAR-filen i `dist_keycloak/`
3. Kopiera JAR-filen till Keycloaks `providers/` mapp
4. Starta om Keycloak
5. Gå till Admin Console → Realm Settings → Themes
6. Välj "keycloak-theme" för Login Theme

# Additional Themes (Optional)

## Account Theme

För att anpassa "My Account" sidan i Keycloak:

```bash
npx keycloakify initialize-account-theme
```

Detta skapar en `src/account/` mapp med komponenter för Account-temat.

## Email Theme

För att anpassa email-templates (verifieringsmail, glömt lösenord, etc.):

```bash
npx keycloakify initialize-email-theme
```

Detta skapar mallar för emails som du kan anpassa med Berget-designen.

# Customization

## Design Tokens

Berget design tokens finns i `src/index.css`:

```css
:root {
    --berget-background: 0 0% 10%; /* Mörk bakgrund */
    --berget-foreground: 0 0% 100%; /* Vit text */
    --berget-primary: 142 33% 46%; /* Grön accent */
    --berget-secondary: 151 33% 62%; /* Ljusare grön */
    --berget-border: 0 0% 25%; /* Border färg */
    --berget-input: 0 0% 15%; /* Input bakgrund */
}
```

## Modifiera Komponenter

Alla UI-komponenter finns i `src/components/ui/`:

-   `Card.tsx` - Layout containers
-   `Button.tsx` - Knappar och actions
-   `Alert.tsx` - Meddelanden
-   `Checkbox.tsx` - Form elements

## Anpassa Login-sidan

Login-komponenten finns i `src/login/Login.tsx`. Du kan:

-   Ändra layout och spacing
-   Lägga till eller ta bort fält
-   Anpassa felmeddelanden
-   Integrera med social providers
-   Ändra logotyp och branding

## Testing i Storybook

Testa dina ändringar direkt i Storybook:

```bash
npm run storybook
```

Navigera till din komponent och se ändringarna live med hot-reload.

# Documentation

## Keycloakify Documentation

-   [Testing theme locally](https://docs.keycloakify.dev/testing-your-theme)
-   [Customization strategies](https://docs.keycloakify.dev/customization-strategies)
-   [Compiler options](https://docs.keycloakify.dev/features/compiler-options)
-   [Real world examples](https://docs.keycloakify.dev/real-world-examples)

## Berget Design System

Detta tema följer Berget AI:s design system med:

-   **Fonts**: DM Sans (body), Ovo (headings)
-   **Colors**: Dark theme med grön accent
-   **Spacing**: 24px grid system
-   **Effects**: Glassmorphism med backdrop-blur
-   **Shadows**: Subtila shadows för depth

# Contributing

Vi välkomnar bidrag! För att bidra:

1. Forka repositoryt
2. Skapa en feature branch: `git checkout -b feature/min-feature`
3. Gör dina ändringar och testa i Storybook
4. Commita: `git commit -m "feat: lägg till ny feature"`
5. Pusha: `git push origin feature/min-feature`
6. Skapa en Pull Request

## Commit Convention

Vi följer [Conventional Commits](https://www.conventionalcommits.org/):

-   `feat:` - Ny feature
-   `fix:` - Buggfix
-   `docs:` - Dokumentation
-   `style:` - Styling/formattering
-   `refactor:` - Code refactoring
-   `test:` - Tester
-   `chore:` - Maintenance tasks

# License

MIT License - se [LICENSE](LICENSE) fil för detaljer.

# Contact

-   **Berget AI**: [https://berget.ai](https://berget.ai)
-   **Issues**: [GitHub Issues](https://github.com/berget-ai/keycloak-theme/issues)
-   **Documentation**: [Keycloakify Docs](https://docs.keycloakify.dev)

# GitHub Actions - Automated CI/CD

Berget-temat har ett automatiserat CI/CD-flöde med GitHub Actions (`.github/workflows/ci.yaml`) som:

## Workflow Jobs

### 1. Test & Build (Körs vid varje push/PR)

-   Checkar ut koden
-   Installerar dependencies med npm
-   Bygger temat med `npm run build-keycloak-theme`
-   Validerar att bygget lyckas

### 2. Version Check (Körs vid push till main)

-   Kontrollerar om version i `package.json` har uppdaterats
-   Jämför med tidigare version i Git history
-   Avgör om det är en pre-release (beta, alpha, rc)

### 3. Create GitHub Release (Körs vid ny version)

-   Bygger temat
-   Skapar en GitHub Release med tag `v{version}`
-   Genererar release notes automatiskt från commits
-   Laddar upp JAR-filer som release assets:
    -   `keycloak-theme-for-kc-22-to-25.jar`
    -   `keycloak-theme-for-kc-all-other-versions.jar`

## Publicera Ny Version

**Steg för att skapa en release:**

1. Uppdatera version i `package.json`:

    ```bash
    npm version patch  # 0.0.0 -> 0.0.1
    npm version minor  # 0.0.1 -> 0.1.0
    npm version major  # 0.1.0 -> 1.0.0
    ```

2. Commita och pusha:

    ```bash
    git add package.json package-lock.json
    git commit -m "chore: bump version to 1.0.0"
    git push origin main
    ```

3. GitHub Actions skapar automatiskt:
    - Git tag `v1.0.0`
    - GitHub Release med release notes
    - JAR-filer som kan laddas ner

## Konfigurera Workflow Permissions

För att aktivera automatiska releases, sätt repository permissions:

1. Gå till `Settings` > `Actions` > `General`
2. Under "Workflow permissions", välj **"Read and write permissions"**
3. Aktivera **"Allow GitHub Actions to create and approve pull requests"**
4. Klicka "Save"
