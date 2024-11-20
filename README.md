# longhorn-hackday

A longhorn ui Rancher Extension for quick demo.


## Running for Development

This is what you probably want to get started.

### Development Mode

For development, serve with hot reload at https://localhost:8005

```bash
# Install dependencies
yarn install

API=https://rancher-ip yarn dev
```


### Rancher Integration Mode

In this mode, you need to have Rancher and [follow the steps](https://extensions.rancher.io/extensions/next/extensions-getting-started) to import this extension on rancher.

```bash
# build harvester plugin
yarn build-pkg longhorn-hackday && yarn serve-pkgs

#Serving catalog on http://127.0.0.1:4500
#Serving packages:
#longhorn-hackday-0.1.0 available at: http://127.0.0.1:4500/longhorn-hackday-0.1.0/longhorn-hackday-0.1.0.umd.min.js
```

License
=======
MIT License

Copyright (c) 2019-2024 Othneil Drew

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
