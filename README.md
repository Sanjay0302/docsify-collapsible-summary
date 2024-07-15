![GitHub forks][fork]
![GitHub watchers][watcher]
[![GitHub repo size][repo-size]][repo]
[![GitHub License][licence-badge]][licence]

# Docsify Collapsible Summary Plugin

**I recommend reading through** [Docsify Preview][gh-pages]

> This plugin enhances Docsify with `collapsible summarie` capabilities, allowing for easy insertion of responsive, customizable collapsible element directly into your Markdown files.
>
> The detailed explanation of the plugin usage and its preview is shown in this [:link: Docsify documentation][gh-pages].

---

## Features

- [ ] Automatically adds `<!-- {docsify-ignore} -->` to headings inside the summary content to prevent them from appearing in the sidebar.

  <details>
    <summary>There is an error with this feature</summary>

  `Currently, this won't work as expected without a custom _sidebar.md file.`

  `It is recommended to use a custom sidebar while using this plugin.`

  Sometimes, all the other `headings` get ignored when using `docsify-ignore` inline with `headings` of `summary-text` inside the collapsible.

  So, try adding the `docsify-ignore` comment manually to headings you want to ignore, `this only works when a custom sidebar is being used`.

  Only use the `docsify-ignore` comment with `headings`; `Avoid unnecessarily adding that comment inside the collapsible.`
  </details>

- [x] Adds smooth transitions when opening and closing the summaries.

---

## Customization

> You can adjust the maximum width, box shadow, and border radius of the collapsible element by modifying the CSS provided with the plugin.

---

## Compatibility

> This plugin is designed to work with Docsify and has been tested with the latest version as of `July/2024`. It should be compatible with most modern web browsers.

---

## Contributing

> Contributions, issues, and feature requests are welcome! Feel free to check [issues page][issue].

---

## License

```html
Copyright  2024 Sanjay0302

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```


[issue]: https://github.com/Sanjay0302/docsify-collapsible-summary/issues/1
[gh-pages]: https://sanjay0302.github.io/docsify-collapsible-summary
[fork]: https://img.shields.io/github/forks/Sanjay0302/docsify-collapsible-summary?style=flat-square
[watcher]: https://img.shields.io/github/watchers/Sanjay0302/docsify-collapsible-summary?style=flat-square
[repo-size]: https://img.shields.io/github/repo-size/Sanjay0302/docsify-collapsible-summary?style=flat-square
[repo]: https://github.com/Sanjay0302/docsify-collapsible-summary.git
[licence-badge]: https://img.shields.io/github/license/Sanjay0302/docsify-collapsible-summary?style=flat-square
[licence]: https://github.com/Sanjay0302/docsify-collapsible-summary/blob/48b424e047ab144500dbf3f2eb3a868566963528/LICENSE