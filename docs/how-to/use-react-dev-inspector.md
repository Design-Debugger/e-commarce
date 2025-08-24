# Using React Dev Inspector

React Dev Inspector is a powerful development tool that allows you to click on any React component in your browser and jump directly to its source code in your IDE.

## What is React Dev Inspector?

React Dev Inspector bridges the gap between your browser and IDE, making debugging and development much faster and more efficient. Instead of manually searching for component files, you can simply click on any element and be taken straight to the source code.

## Getting Started

### Prerequisites

- Development server must be running (`npm run dev`)
- Your IDE must be configured to handle file opening requests

### Activating React Dev Inspector

React Dev Inspector is already integrated into this project and works automatically in development mode.

**Hotkey Combinations:**
- **Mac:** `Control + Shift + Command + C`
- **Windows/Linux:** `Control + Shift + C`

### How to Use

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:3000`

3. **Activate Inspector mode** by pressing the hotkey combination:
   - **Mac:** `Ctrl + Shift + Cmd + C`
   - **Windows/Linux:** `Ctrl + Shift + C`

4. **Click on any React component** in the browser:
   - The component will be highlighted
   - Your IDE will automatically open the corresponding source file
   - The cursor will be positioned at the exact component definition

## Supported IDEs

React Dev Inspector works with most popular IDEs and editors:

- **Visual Studio Code** (recommended)
- **WebStorm** / **IntelliJ IDEA**
- **Atom**
- **Sublime Text**
- **Vim** / **Neovim**
- **Emacs**

## IDE Configuration

### Visual Studio Code

VS Code works out of the box with React Dev Inspector. Make sure you have the `code` command available in your terminal.

If the `code` command is not available:
1. Open VS Code
2. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
3. Type "Shell Command: Install 'code' command in PATH"
4. Select and execute the command

### WebStorm

WebStorm should work automatically. If it doesn't open files:
1. Make sure WebStorm is set as your default editor for TypeScript/JavaScript files
2. Check that the `webstorm` or `idea` command is available in your terminal

### Other Editors

For other editors, you may need to configure environment variables:
```bash
export EDITOR="your-editor-command"
```

## Troubleshooting

### React Dev Inspector Not Working

**1. Check if you're in development mode:**
```bash
echo $NODE_ENV
# Should output 'development' or be empty
```

**2. Verify the development server is running:**
Make sure you're accessing the site through the development server (localhost:3000) and not a production build.

**3. Check browser console:**
Look for any error messages related to React Dev Inspector in the browser's developer console.

**4. IDE not opening files:**
- Verify your IDE's command line tools are installed
- Check that the IDE command is available in your terminal
- Try setting the `EDITOR` environment variable

### Common Issues

**Problem:** Files open in wrong editor
**Solution:** Set the correct `EDITOR` environment variable or configure your default file associations.

**Problem:** Inspector mode doesn't activate
**Solution:** Make sure you're using the correct hotkey combination and that the development server is running.

**Problem:** Clicking components doesn't open files
**Solution:** Verify your IDE's command line tools are properly installed and accessible from the terminal.

## Best Practices

1. **Use meaningful component names:** This makes it easier to identify components when using the inspector.

2. **Keep components in separate files:** The inspector works best when each component has its own file.

3. **Use proper file naming conventions:** Follow the project's naming conventions for easier navigation.

4. **Organize your components:** Keep related components in logical folder structures.

## How It Works (Technical Details)

React Dev Inspector works by:

1. **Babel Plugin Integration:** During development builds, the Babel plugin injects source location metadata into React components.

2. **Runtime Inspector:** The Inspector component listens for hotkey combinations and click events.

3. **Source Mapping:** When you click on a component, the inspector uses the embedded metadata to determine the source file and line number.

4. **IDE Communication:** The inspector sends a request to open the file in your configured IDE.

## Project Integration Details

In this project, React Dev Inspector is integrated as follows:

- **Package:** `react-dev-inspector` is installed as a dev dependency
- **Wrapper Component:** `DevInspectorWrapper` in `src/components/development/dev-inspector.tsx`
- **App Integration:** The wrapper is applied in `src/app/layout.tsx`
- **Environment Check:** Only active when `NODE_ENV === 'development'`

## Customization

You can customize React Dev Inspector behavior by modifying the `DevInspectorWrapper` component:

```typescript
// src/components/development/dev-inspector.tsx
<InspectorComponent
  {...(process.env.NODE_ENV === 'development' && {
    keys: ['control', 'shift', 'command', 'c'], // Custom hotkey
    disableLaunchEditor: false, // Allow/prevent editor launching
    onHoverElement: (element) => { /* custom hover behavior */ },
    onClickElement: (element) => { /* custom click behavior */ },
  })}
>
```

## Security Notes

- React Dev Inspector is **only active in development mode**
- It's automatically disabled in production builds
- No source code information is included in production bundles
- The inspector adds zero overhead to production builds

## Related Tools

- **React Developer Tools:** Browser extension for inspecting React component trees
- **Redux DevTools:** For debugging Redux state management
- **Next.js DevTools:** Built-in development tools for Next.js applications

## Support

If you encounter issues with React Dev Inspector:

1. Check the [official documentation](https://github.com/zthxxx/react-dev-inspector)
2. Verify your IDE setup and command line tools
3. Check the browser console for error messages
4. Ensure you're in development mode with the dev server running

## Performance Impact

React Dev Inspector has:
- **Zero impact on production builds** (completely removed)
- **Minimal impact on development** (only active when hotkey is pressed)
- **No bundle size increase** in production
- **No runtime performance cost** in production
