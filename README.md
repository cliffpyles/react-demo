# React Demo

An introduction to React for the design and marketing team

### JSX

JSX is what React uses to build components. It resembles both JavaScript and HTML.

**JSX Example**

```jsx
function exampleComponent() {
  return (
    <div>
      <h1>Example Title</h1>
      <p>Example text for the component</p>
    </div>
  )
}
```

### Components

Components are the building blocks of React. Conceptually you can think of them much like symbols in Sketch. Much like a symbol, components can contain other components, and components can be configured with each usage.

#### Example Component Usage

**JSX for creating a component**

```jsx
function Card({ title, children }) {
  return (
    <div className="Card">
      <h3>{title}</h3>
      {children}
    </div>
  )
}
```

**JSX to use the component**

```jsx
<div>
  <h1>Some Example Page</h1>
  <Card title="Example Item #1">
    <p>This is some example content</p>
  </Card>
  <Card title="Example Item #2">
    <p>This is some example content</p>
  </Card>
</div>
```

**The browser would render**

```html
<div>
  <h1>Some Example Page</h1>
  <div class="Card">
    <h3>Example Item #1</h3>
    <p>This is some example content</p>
  </div>
  <div class="Card">
    <h3>Example Item #2</h3>
    <p>This is some example content</p>
  </div>
</div>
```

---

1. All of the UI is a component in React. This includes layouts, pages, components, sections, etc.
2. Components are configured by passing props.
3. There are serveral ways to create a component.
4. To allow a component to be used, it must be exported.
5. To use a component, it must be imported.
6. Stay away from jQuery style JavaScript. It will break the app.

**Example of React component**

```jsx
import React from 'react'

function Card({ title, children }) {
  return (
    <div className="Card">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Card
```

**Example of React component usage**

```jsx
import React from 'react'
import Card from './components/Card'

function ExamplePage() {
  return (
    <div>
      <h1>Some Example Page</h1>
      <Card title="Example Item #1">
        <p>This is some example content</p>
      </Card>
      <Card title="Example Item #2">
        <p>This is some example content</p>
      </Card>
    </div>
  )
}

export default ExamplePage
```
