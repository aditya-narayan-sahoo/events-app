# My Events

A Next.js application designed to showcase various events. The app provides functionality to display all events, view upcoming events, filter events based on their occurrence, and explore individual events.

## Features

- **All Events**: View a list of all available events.
- **Upcoming Events**: Filter events to see only those happening in the future.
- **Event Filtering**: Filter events by their occurrence date.
- **Event Details**: Explore individual event details.

## Installation

### Prerequisites

- Node.js (version 20 or higher)
- npm (version 8 or higher)
- Git

### Steps to Set Up the Project Locally

1. **Clone the Repository**
   ```sh
   git clone https://github.com/aditya-narayan-sahoo/events-app.git
   ```

2. **Navigate to the Project Directory**
   ```sh
   cd events-app
   ```

3. **Install Dependencies**
   ```sh
   npm install
   ```

4. **Start the Development Server**
   ```sh
   npm run dev
   ```

5. **Open in Browser**
   - Your application should now be running at [http://localhost:3000](http://localhost:3000).

### Running Tests

To run tests, use the following command:

```sh
npm test
```

### Building for Production

To build the application for production, use the following command:

```sh
npm run build
```

### Deploying to GitHub Pages

To deploy your application to GitHub Pages, follow these steps:

1. **Create a new GitHub Pages site**:
   - Go to your repository settings.
   - Scroll down to the "GitHub Pages" section.
   - Select "Branch" and choose "main" (or any other branch you want to use).
   - Click "Save".

2. **Deploy using GitHub Actions**:
   - Make sure you have a `.github/workflows/deploy.yml` file in your repository.
   - This file should contain the necessary configuration for deploying your application.

Here's an example `.github/workflows/deploy.yml` file:

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}

      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          static_site_generator: next

      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json', '**/yarn.lock') }}-

      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}

      - name: Build with Next.js
        run: ${{ steps.detect-package-manager.outputs.runner }} next build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
   - Fork the repository on GitHub.

2. **Create Your Feature Branch**
   - Create a new branch from the main branch (e.g., `git checkout -b feature/new-feature`).

3. **Commit Your Changes**
   - Commit changes using a meaningful commit message (e.g., `git commit -m "Added new feature"`).

4. **Push to the Branch**
   - Push your changes to the remote repository (e.g., `git push origin feature/new-feature`).

5. **Open a Pull Request**
   - Open a pull request from your feature branch to the main branch.
