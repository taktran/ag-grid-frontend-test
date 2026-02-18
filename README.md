# AG Grid Frontend Test

This is a project scaffold for the AG Grid Frontend Test.

It is built on the [Astro web framework](https://astro.build/).

## Files

```text
/
├── ag-website-shared/
|   └── src/
|       └── components/ - Shared website components
|       └── design-system/ - Design system files
├── public/ - Static assets
├── src/
|   └── components/ - Astro/React components
|   └── layouts/ - Layout components
│   └── pages/ - Astro pages
│       └── api/ - API endpoints
```

## Development

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`

   Open http://localhost:4688/

## API Endpoints

### `POST /api/contact` - Contact form endpoint

Body

```json
{
  "name": "Someone",
  "message": "Hello there"
}
```
