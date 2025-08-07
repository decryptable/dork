# Google Dork Generator

A modern, interactive web application for generating advanced Google search queries ("Google Dorks") with ease. Built with React, TypeScript, and Vite, this tool helps security researchers, penetration testers, and power users craft complex search queries using filters, operators, and custom text inputs.

## Features

- **Dork Builder**: Intuitive UI to combine Google search operators, filters, and custom text.
- **Live Query Preview**: See your generated query update in real time.
- **Operator Guide**: Learn about each Google search operator and how to use them.
- **Filter Selector**: Quickly add or remove filters to refine your search.
- **Example Dorks**: Browse and use a library of example queries for inspiration.
- **Theme Toggle**: Switch between light and dark mode for comfortable viewing.
- **Responsive Design**: Works great on desktop and mobile devices.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/decryptable/dork.git
cd dork
npm install # or yarn install
```

### Running the App

```bash
npm run dev # or yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Project Structure

- `src/components/` - Reusable UI components (accordion, button, card, etc.)
- `src/components/custom-text/` - Custom text input for dork builder
- `src/components/examples/` - Example dork queries
- `src/components/filters/` - Filter selection components
- `src/components/operators/` - Operator guide and info
- `src/components/query/` - Query display and live preview
- `src/components/theme/` - Theme toggle and related UI
- `src/data/` - Static data for filters, operators, and examples
- `src/hooks/` - Custom React hooks (e.g., dork builder logic)
- `src/lib/` - Utility functions
- `src/types/` - TypeScript type definitions

## Usage

1. **Select Operators & Filters**: Use the UI to add Google search operators and filters.
2. **Enter Custom Text**: Add your own keywords or phrases.
3. **Preview Query**: The query display updates as you build.
4. **Copy & Use**: Copy the generated query and use it in Google Search.

## Example Dorks

- `site:example.com inurl:admin`
- `intitle:index.of "parent directory"`
- `filetype:pdf confidential`

Find more examples in the app under the "Examples" section.

## Contributing

Contributions are welcome! Please open issues or pull requests for new features, bug fixes, or improvements.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a Pull Request

## License

[MIT](LICENSE)

## Acknowledgments

- Inspired by the security and OSINT community
- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [TypeScript](https://www.typescriptlang.org/)
- UI components inspired by modern design systems

---

**Happy Dorking!**
