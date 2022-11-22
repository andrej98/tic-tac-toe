# Task 10 - Deployment

## Prerequisites

1. Correctly initialize firebase app with your `firebaseConfig`.

Your task for this lesson is to enable Progressive Web App functionality and deploy this page with Firebase Hosting.

## PWA

There are two new files copied (and cleaned up) from CRA template `cra-template-pwa-typescript`, `service-worker.ts` and `serviceWorkerRegistration.ts` plus few new dependencies starting with `workbox`.

Enable the progressive web app functionality by calling `register` from `serviceWorkerRegistration.ts` in the `index.tsx`.

Now we should also update the `manifest.json` file:

- Update the `short_name` and `name` to **Tic Tac Toe**
- Change the `icons` attribute to use the `grid.svg` as icon:
  ```json
  {
    "src": "/grid.svg",
    "type": "image/svg+xml",
    "sizes": "48x48 192x192 512x512"
  },
  ```
- Set theme and background color to the colors used in app

## Metadata

Update meta tags in `index.html`.

- **Title:** Tic Tac Toe
- **Description:** Website developed as an assignment in React development course.
- **Image:** Use the `preview.png`

Also update the favicon to use the `grid.svg` icon.

```html
<link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/grid.svg" />
```

## Deployment

By following instruction from the study materials and/or firebase documentation, enable Hosting on your Firebase project and correctly initialize firebase hosting in this app with automatic Github Actions deployment.

## Hints

- `cra-template-pwa-typescript` can be found [here](https://github.com/cra-template/pwa#readme).
- All firebase related setup is done through `firebase` CLI.
- [metatags.io](https://metatags.io/) is a useful online tool for generating tags for web/social url previews. You can also check if everything is set up correctly by inserting URL to your page to teh input at the top.
- Certain meta tags like `og:image` require full and not just relative URL therefore using `%PUBLIC_URL%` won't be enough
- Make sure to not leave duplicate meta tags in the `index.html` from the original CRA template
- Resulting link previews should look something like this

  ![Link previews example](/example.jpg)
