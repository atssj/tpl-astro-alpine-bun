# tpl-astro-alpine-bun

A base template for Astro 5.3 projects, integrating Tailwind CSS and Alpine.js, and using Bun as the package manager.

This template is designed to provide a solid foundation for building fast, content-focused websites with Astro, enhanced with the utility-first styling of Tailwind CSS and the dynamic interactivity of Alpine.js. It leverages Bun for faster dependency installation and script execution.

## Features

- **Astro 5.3:** Utilizes the latest features of Astro for building performant websites with content at the core.
- **Tailwind CSS:** Integrated for rapid styling and consistent design using utility classes.
- **Alpine.js:** Included for adding lightweight interactivity and dynamic behavior to your web pages.
- **Bun Package Manager:** Configured to use Bun for faster and more efficient dependency management and script execution.
- **Basic Layout:** Comes with a basic layout component to get you started quickly.
- **Example Component:** Includes a simple Counter component built with Alpine.js to demonstrate interactivity.
- **Pre-configured:** Ready to start building your website with essential configurations already set up.

## Getting Started

To use this template, run the following command with Bun:

```bash
bunx create-astro@latest --template atssj/tpl-astro-alpine-bun
```

Follow the prompts from the Astro CLI to set up your new project.

### Development

Navigate to your project directory and start the development server:

```bash
bun run dev
```

This command starts the Astro development server, and you can view your project in the browser at `http://localhost:4321`.

### Building

To build your project for production, use:

```bash
bun run build
```

This command generates a production-ready build of your website in the `dist` directory.

### Previewing

To preview the production build locally, use:

```bash
bun run preview
```

This command starts a local server to serve the built website, allowing you to test it before deployment.

### Installing Dependencies

While the template comes pre-configured for Bun, if you need to add or update dependencies, use:

```bash
bun install
```

## Customization

### Tailwind CSS Configuration

Tailwind CSS is configured using `tailwind.config.mjs` at the root of your project. You can customize the theme, variants, and other Tailwind CSS settings in this file.

Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/configuration) for detailed configuration options.

### Alpine.js Components

Alpine.js is ready to use in your Astro components. You can add Alpine.js directives directly in your HTML templates to create interactive elements.

See the example `src/components/Counter.astro` and `src/components/Counter.js` for an example of how to use Alpine.js. For more information, visit the [Alpine.js documentation](https://alpinejs.dev/).

### Astro Components and Layouts

Astro components are located in the `src/components` directory, and layouts are in `src/layouts`. You can create new components and layouts as needed for your project.

Refer to the [Astro documentation](https://docs.astro.build/) to learn more about building components, layouts, and pages.

### Assets

Static assets like images and fonts are located in the `public` directory. You can place your assets here, and they will be served at the root of your deployed site.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/atssj/tpl-astro-astro-alpine-bun).

## License

[MIT](LICENSE)

---

## Maintainer

This project is maintained by [S Saha](https://github.com/atssj). For any queries or support, you can reach out via [X.com](https://x.com/atsswk) or [Bluesky](https://bsky.app/profile/atssj.bsky.social).