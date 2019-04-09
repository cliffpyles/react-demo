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

Components are the building blocks of React. Conceptually you can think of them much like symbols in Sketch. Much like a symbol, components can container other components, and when a component is used, they can be configured to behave differently on a per-instance basis.

#### Example Component Usage

**Code for creating a component**

```jsx
function Card({ title, children }) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  )
}
```

**Code to use the component**

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

```jsx
<div>
  <h1>Some Example Page</h1>
  <div>
    <h3>Example Item #1</h3>
    <p>This is some example content</p>
  </div>
  <div>
    <h3>Example Item #2</h3>
    <p>This is some example content</p>
  </div>
</div>
```

Everything is a component in React. This includes layouts, pages, components, sections, etc.

3. Props are how information is passed to a component.
