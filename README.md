<h1 align="center">RMat-Kit</h1>
<h4 align="center">React Material UI Component Kit</h4>

<div align="center">

[React](http://facebook.github.io/react/) components that implement [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html).

[![npm version](https://img.shields.io/npm/v/rmat-kit/latest.svg)](https://www.npmjs.com/package/rmat-kit)
[![npm downloads]https://img.shields.io/npm/dm/rmat-kit.svg](https://www.npmjs.com/package/@material-ui/core)
[![Build Status](https://travis-ci.org/ranjithprabhuk/Rmat-Kit.svg?branch=master)](https://travis-ci.org/ranjithprabhuk/Rmat-Kit)
[![codecov](https://codecov.io/gh/ranjithprabhuk/Rmat-Kit/branch/master/graph/badge.svg)](https://codecov.io/gh/ranjithprabhuk/Rmat-Kit)
[![License: MIT](https://img.shields.io/github/license/ranjithprabhuk/rmat-kit.svg)](https://opensource.org/licenses/MIT)

</div>

## Installation

RMat-Kit is available as an [npm package](https://www.npmjs.com/package/rmat-kit).

**[Stable channel v1](https://material-ui.com/)**
```sh
// with npm
npm install rmat-kit

// with yarn
yarn add rmat-kit
```

**[v0.x](https://v0.material-ui.com/)** ([Migration to v1](https://material-ui.com/guides/migration-v0x/))
```sh
// with npm
npm install material-ui

// with yarn
yarn add material-ui
```


Please note that `@next` will only point to pre-releases; to get the latest stable release use `@latest` instead.

## Supporting Material-UI

Material-UI is an MIT-licensed open source project. It's an independent project with ongoing development made possible thanks to the support of these awesome [backers](/BACKERS.md). If you'd like to join them, please consider:
- [Become a backer or sponsor on Patreon](https://www.patreon.com/oliviertassinari).
- [Become a backer or sponsor on OpenCollective](https://opencollective.com/material-ui).

#### What's the difference between Patreon and OpenCollective?

Funds donated via Patreon directly support [Olivier Tassinari](https://github.com/oliviertassinari)'s work on Material-UI.
Funds donated via OpenCollective are managed transparently and will be used for compensating work and expenses for core team members.
Your name/logo will receive proper recognition and exposure by donating on either platform.

### Gold Sponsors

Gold Sponsors are those who have pledged $500/month and more to Material-UI.

via [Patreon](https://www.patreon.com/oliviertassinari)

<p style="display: flex;">
  <a href="https://www.creative-tim.com/?utm_source=material-ui&utm_medium=docs&utm_campaign=homepage" rel="noopener" target="_blank"><img width="126" src="https://avatars1.githubusercontent.com/u/20172349?s=378" alt="creative-tim" title="Premium Themes"></a>
  <a href="https://bitsrc.io" rel="noopener" target="_blank"><img width="96" src="https://avatars1.githubusercontent.com/u/24789812?s=192" alt="bitsrc" title="The fastest way to share code"></a>
</p>

via [OpenCollective](https://opencollective.com/material-ui)

<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/0/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/0/avatar.svg" alt="0" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/1/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/1/avatar.svg" alt="1" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/2/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/2/avatar.svg" alt="2" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/3/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/3/avatar.svg" alt="3" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/4/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/4/avatar.svg" alt="4" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/5/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/5/avatar.svg" alt="5" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/6/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/6/avatar.svg" alt="6" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/7/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/7/avatar.svg" alt="7" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/8/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/8/avatar.svg" alt="8" /></a>
<a href="https://opencollective.com/material-ui/tiers/gold-sponsors/9/website" rel="noopener" target="_blank"><img src="https://opencollective.com/material-ui/tiers/gold-sponsors/9/avatar.svg" alt="9" /></a>

### There is more!

See the full list of [our backers](/BACKERS.md).

## Usage

Here is a quick example to get you started, **it's all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="raised" color="primary">
      Hello World
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, it's really all you need to get started as you can see in this live and interactive demo:

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/4j7m47vlm4)

## Questions

For *how-to* questions and other non-issues,
please use [StackOverflow](http://stackoverflow.com/questions/tagged/material-ui) instead of Github issues.
There is a StackOverflow tag called "material-ui" that you can use to tag your questions.

## Examples

Are you looking for an example project to get started?
[We host some](https://material-ui.com/getting-started/example-projects/).

## Documentation

Check out our [documentation website](https://material-ui.com/).

## Contributing

We'd greatly appreciate any [contribution](/CONTRIBUTING.md) you make. :)

## Changelog

Recently Updated?
Please read the [changelog](https://github.com/mui-org/material-ui/releases).

## Roadmap

The future plans and high priority features and enhancements can be found in the [ROADMAP.md](https://material-ui.com/discover-more/roadmap/) file.

## Thanks

[<img src="https://www.browserstack.com/images/mail/browserstack-logo-footer.png" width="120">](https://www.browserstack.com/)

Thank you to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers.

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
