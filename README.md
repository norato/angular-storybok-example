# Angular Storybook Example

[The Storybook](https://storybook.js.org) is a tool to developers be able to create components isolated from application and demonstrate it as a showcase.

This project was created to explain and demonstrate show to use Storybook inside a Angular project.

The demo is available at [Gitlab Pages](https://norato.gitlab.io/angular-storybok-example/)

## The Stack

- [Angular](https://angular.io) - v6.1.0
- [Angular CLI](https://github.com/angular/angular-cli) - v6.2.8
- [Storybook](https://storybook.js.org) - v4.0.12
- [Jest](https://jestjs.io/) - v23.6.0

## Install

You need to have installed previously `node` and `yarn` before install the dependencies.

```bash
$ yarn install
```

## Run the Angular Application

```bash
$ yarn start
```

## Run the Storybook Server

```bash
$ yarn storybook
```

## Build Storybook static files

```bash
$ yarn storybook:prebuild && yarn build-storybooka
```

## Storybook Addons

There are some demos about the available Addons for Storybook.

- [Notes](https://github.com/storybooks/storybook/tree/master/addons/notes) - Add a footnote as string or importing a Markdown file;
- [Actions](https://github.com/storybooks/storybook/tree/master/addons/actions) - Logging the response of a event emitted by a component;
- [Links](https://github.com/storybooks/storybook/tree/master/addons/links) - Link to another story;
- [Knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) - Allows to edit the story props;
- [ViewPort](https://github.com/storybooks/storybook/tree/master/addons/viewport) - Provides select view size of the story to build responsive components;
- [Storysource](https://github.com/storybooks/storybook/tree/master/addons/storysource) - Show the story code in the Story Panel;
- [Options](https://github.com/storybooks/storybook/tree/master/addons/options) - Change some storybook server properties;
- [Backgrounds](https://github.com/storybooks/storybook/tree/master/addons/backgrounds) - Allows to change the story background color;
- [Console](https://github.com/storybooks/storybook-addon-console) -
  Redirects console output into Action Logger Panel;
- [Jest](https://github.com/storybooks/storybook/tree/master/addons/jest) - Shows the Jest tests status at Jest Panel.
