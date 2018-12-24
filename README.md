# Stackline Assessment Panel

## Goals

1. A solution that resembles the provided mock up closely and implements AT LEAST ONE of either the graph or chart as seen in the mock up

1. A working solution that takes the provided JSON file as output from a stubbed-out API call

1. A solution that implements React and Redux best practices and patterns

1. Clean code

## Demo URL

https://stackline-demo.ameo.design/

## Repository

https://github.com/Ameobea/stackline-panel

## Wireframe

![Wireframe of the application](https://ameo.link/u/5y3.png)

## Screenshot of Real Application

![Screenshot of the actual application](https://ameo.link/u/5y5.png)

## Implementation

The data file included with the assignment has been included as a static file for the project, available at `/products/B007TIE0GQ.json`. It is dynamically fetched and parsed by the application at runtime.

CSS-in-JS is used for the majority of styling. I prefer this because it allows styling to be done quickly and dynamically by keeping it alongside the code. However, I'm comfortable using normal CSS as well, and I've used specialized React styling libraries such as [Stylish](https://github.com/jamiebuilds/react-stylish) in the past.

I chose not to use Redux for this project, even though it was hinted at in the assignment email. Since there was only a single product in the demo and no routing/pagination was used, passing props down directly was by far the simplest and most direct solution.

The email also mentioned a second chart/graph that I could pick between implementing, but I didn't see that either. I added in placeholder behavior for the menu items on the left (showing an alert with a URL that could be navigated to using `react-router` or similar for a SPA) but didn't implement anything because there was no wireframes for them. It is likely that Redux would end up being the best choice if more complicated functionality was added to the application.

### Chart

The cart is created using [ECharts](https://ecomfe.github.io/echarts-doc/public/en/index.html), a charting library originally developed by Baidu and is not maintained in part by Apache. the `echarts-for-react` package is used, which provides more or less direct bindings to the ECharts API and makes using Echarts from React easy.

### Table

The table is implemented using [`react-bootstrap-table2`](https://github.com/react-bootstrap-table/react-bootstrap-table2). The API is straightfoward and direct. Column sorting was built-in for free.

### Other Packages Used

- [Ramda](https://ramdajs.com/) - various functional utilities and mixins plus a small bundle size, I end up pulling this in on most of my projects
- [Moment.js](https://momentjs.com/) - Tons of time and date utilities. Makes parsing and formatting dates and times extremely simple, but is quite large (~60KB gzipped)
- [Numeral.js](http://numeraljs.com/) - A very useful number formatter. Can handle complex localization needs if necessary.
- [Prettier](https://prettier.io/) - A code formatter for JavaScript + TypeScript. I _LOVE_ this tool; not having to think about code formatting and being able to focus entirely on the logic is extremely useful to me.
