![GitHub forks][forks]
![GitHub watchers][watchers]
[![GitHub repo size][repo-size]][repo]
[![GitHub License][license]][licence-github-link]

# Docsify Collapsible Summary Plugin

> This is a Docsify plugin that adds collapsible summaries to your Docsify-powered documentation.

---

## Features

1. Automatically adds `<!-- {docsify-ignore} -->` to headings inside the summary content to prevent them from appearing in the sidebar.

    [*There is an error with this feature*]{
    > `Currently, this won't work as expected without a custom _sidebar.md file.`
    >
    > `It is recommended to use a custom sidebar while using this plugin.`
    >
    > Sometimes, all the other `headings` get ignored when using `docsify-ignore` inline with `headings` of `summary-text` inside the collapsible.
    >
    > So, try adding the `docsify-ignore` comment manually to headings you want to ignore, `this only works when a custom sidebar is being used`.
    >
    > Only use the `docsify-ignore` comment with `headings`; `Avoid unnecessarily adding that comment inside the collapsible.`
    }

2. Adds smooth transitions when opening and closing the summaries.

---

## Installation

<!-- tabs:start -->

<!-- tab:Preview -->

[Summary Title]{

# Heading 1 <!-- {docsify-ignore} -->

Some content here.

## Heading 2 <!-- {docsify-ignore} -->

More Markdown content here.

:camera: `Images`
:star2: `Lists`
:computer: `Code-fence`
:hash: `Headings`
:pencil: `Paragraphs`
:wave: `Emoji`

- `Other Plugins` (`tabs`,`markmap`,`mindmap`,`etc.;`)

}

<!-- tab:Installation -->

1. Include the plugin script in your Docsify configuration:

```html
<script src="path/to/docsify-collapsible-summary.js"></script>
<link rel="stylesheet" href="path/to/docsify-collapsible-summary.css">
```

<!-- tab:Usage -->
To create a collapsible summary, use the following syntax in your Markdown files:

> The content inside the curly braces `{}` will be displayed in the collapsible summary, and the text inside the square brackets `[]` will be used as the summary title.

<style> img[alt=syntax] { width: 360px; border-radius: 20px } </style>

[Syntax 1: *Syntax to use collapsible like this*]{
![syntax](./assets/images/syntax1.svg)
}

> To Ignore headings in sidebar we use `<!-- {docsify-ignore} -->` in front of headings to ignore them; the exact same thing is used inside collapsible window also

[Syntax 2: *ignoring headings from sidebar*]{
![syntax](./assets/images/syntax2.svg)
}

> We can also use <u>Markdown text formatting</u>  \in `title-text` and also within `summary`.

<!-- tabs:end -->

<!-- Links -->
[forks]: https://img.shields.io/github/forks/Sanjay0302/docsify-collapsible-summary?style=flat-square
[watchers]: https://img.shields.io/github/watchers/Sanjay0302/docsify-collapsible-summary?style=flat-square
[repo-size]: https://img.shields.io/github/repo-size/Sanjay0302/docsify-collapsible-summary?style=flat-square
[license]: https://img.shields.io/github/license/Sanjay0302/docsify-collapsible-summary?style=flat-square
[licence-github-link]: https://github.com/Sanjay0302/docsify-collapsible-summary/blob/48b424e047ab144500dbf3f2eb3a868566963528/LICENSE
[repo]: https://github.com/Sanjay0302/docsify-collapsible-summary.git
