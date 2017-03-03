## FTCM-Loader
This library is a webpack loader for Friendly-Typed-CSS-Modules. It's super cool and you'll love it.
Every time you change a css file, ftcm-loader will generate new `.d.ts` files next to them. Yay! Types!

### How to Use
Just add this to your webpack config. It should probably be above any transpilers you might have.

```
  {
    loader: 'ftcm-loader',
    options: {
      allowGenericStringAccess: true, // this adds `[key: string]: string` to all of your css files allowing you to `accessThem[like + this]`;
    },
  },
```
