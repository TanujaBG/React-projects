# Copilot Instructions for React Projects

## Architecture Overview
This workspace contains multiple React learning projects built with Vite. Each project is self-contained with its own `package.json`, but shares common patterns:
- **ecommerce-project**: Full e-commerce site with routing (Home, Checkout, Orders, Tracking) using React Router. Mock data in `starting-code/` (products, cart, orders JSON). Currently uses hardcoded HTML in components; data files are for reference.
- **chatbot-project**: Simple chatbot using `supersimpledev` library for AI responses. Persists messages in localStorage.
- **login-form**: Basic login form component.
- **react-basics**: HTML/JS exercises, not React.

## Key Patterns
- **Component Structure**: JSX files with accompanying CSS (e.g., `Header.jsx` + `Header.css`). Import CSS directly in JSX.
- **Styling**: Use `className` attributes. Images sourced from `public/images/` (e.g., `src="images/products/item.jpg"`).
- **Routing**: In ecommerce-project, use React Router v7 with `<Routes>` and `<Route path="..." element={<Component />} />`.
- **Data Handling**:
  - Ecommerce: Products array in `starting-code/data/products.js` (exported as `products`). Prices in cents (e.g., `priceCents: 1090` for $10.90).
  - Chatbot: Messages as array of objects, stored in localStorage as JSON.
- **Libraries**:
  - Chatbot: `Chatbot.addResponses()` for custom responses (functions or strings).
  - Ecommerce: React Router for navigation.

## Workflows
- **Development**: `npm run dev` starts Vite dev server.
- **Build**: `npm run build` for production build.
- **Lint**: `npm run lint` checks with ESLint (React hooks, refresh plugins).
- **Preview**: `npm run preview` serves built app.
- **Testing**: No tests configured yet; chatbot has `mktest`/`rmtest` scripts for directory creation.

## Conventions
- **File Naming**: PascalCase for components (e.g., `ChatInput.jsx`), camelCase for CSS (`chatInput.css`).
- **Exports**: Named exports for components (e.g., `export function HomePage()`).
- **State Management**: useState for local state; localStorage for persistence in chatbot.
- **Icons/Images**: Placed in `public/images/` subfolders (products, icons, ratings).
- **Mock Backend**: Ecommerce uses JSON files in `starting-code/backend/` for cart, orders, delivery options.

## Examples
- Add new route: In `App.jsx`, import component and add `<Route path="newpage" element={<NewPage />} />`.
- Update product display: Use `products` array from `data/products.js`; map to JSX with `product.name`, `product.priceCents / 100` for dollars.
- Chatbot response: `Chatbot.addResponses({ 'hello': 'Hi there!' })` in useEffect.

Focus on integrating data from `starting-code/` into components for dynamic rendering.