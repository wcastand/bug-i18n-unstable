# Bug with i18n and unstable_settings

if you launch the app:

```
yarn 
npx expo start
```

you can see the app load but if you make a change to the en.json or fr.json the app will fully reload
it doesn't show the splashscreen tho.

if you comment the `unstable_settings` it won't full reload and make a fast refresh like normal.