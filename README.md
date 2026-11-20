# Plantsy

Plantsy is a small plant shop admin app built with React and Vite. It displays
plants from a JSON Server API and lets you add plants, mark them as sold out,
and filter the list by name.

![Plantsy app demo](./demo.gif)

## Features

- Loads the plant catalog from the backend when the app opens.
- Adds plants through the form and saves them to the backend.
- Marks plants as sold out for the current page session.
- Filters plants by name as you type; clearing the search restores the full list.

## Requirements

- Node.js and npm

## Run locally

Install dependencies:

```sh
npm install
```

In separate terminals, start the API and frontend:

```sh
npm run server
```

```sh
npm run dev
```

Open the local URL printed by Vite (typically http://localhost:5173). The API
is available at http://localhost:6001/plants.

## API

The app uses the JSON Server endpoint `http://localhost:6001/plants`:

- `GET /plants` loads all plants.
- `POST /plants` creates a plant with `name`, `image`, and `price` fields.

## Tests

```sh
npm run test
```
