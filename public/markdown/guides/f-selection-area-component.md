# Selection Area

**Selector:** f-selection-area

The **FSelectionAreaComponent** provides an interactive region for selecting multiple nodes and connections within the flow. It supports marquee selection, modifier keys for extended selections, and dynamically syncs with canvas movements like zooming or panning. The component emits selection events as users adjust the area, ensuring responsive and accurate updates to the flow state.

## Inputs

- `fTrigger: FEventTrigger`  
  A callback function that defines when the selection area should be activated based on user input events.  
  By default, it triggers when the **Shift** key is pressed, allowing users to control when multi-selection is enabled.  
  `Default: (event: FTriggerEvent) => event.shiftKey`

## Styles

- `.f-component`  
  A shared base class applied to all F components, providing consistent layout and visual behavior across the flow environment.

- `.f-selection-area`  
  Specific to the **FSelectionAreaComponent**, this class defines the appearance of the selection rectangle, including its border, background, and visibility during drag interactions.

## Usage

#### Basic Usage

To add a minimap to your flow, simply include the `FMinimapComponent` within the [f-flow](f-flow-component) component. This provides users with an overview of the flow layout and enhances navigation capabilities.

```html
<f-flow>
  ...// Other components
  |:|<f-minimap></f-minimap>|:|
</f-flow>
```

#### Navigation and Interaction

For navigation and interaction you need to add [f-draggable](f-draggable-directive) directive to the [f-flow](f-flow-component) component.

```html
<f-flow |:|fDraggable|:|>
  ...// Other components
  <f-minimap></f-minimap>
</f-flow>
```

#### Custom Scale

You can set a custom scale for the minimap by using the `fMinSize` input. This allows you to control the size of the minimap based on your requirements.

```html
<f-flow fDraggable>
  ...// Other components
  <f-minimap |:|[fMinSize]="3000"|:|></f-minimap>
</f-flow>
```

## Examples

#### Basic Example

This example shows a basic implementation of the minimap component within a larger flow, providing users with an overview and easy navigation capabilities.

::: ng-component <minimap-basic-example></minimap-basic-example>
[component.html] <<< https://raw.githubusercontent.com/Foblex/f-flow/main/projects/f-guides-examples/minimap-basic-example/minimap-basic-example.component.html
[component.ts] <<< https://raw.githubusercontent.com/Foblex/f-flow/main/projects/f-guides-examples/minimap-basic-example/minimap-basic-example.component.ts
[component.scss] <<< https://raw.githubusercontent.com/Foblex/f-flow/main/projects/f-guides-examples/minimap-basic-example/minimap-basic-example.component.scss
[common.scss] <<< https://raw.githubusercontent.com/Foblex/f-flow/main/projects/f-guides-examples/_flow-common.scss
:::

#### Custom Scale Example

This example demonstrates the use of a custom scale for the minimap, allowing you to control the size of the minimap based on your requirements.

::: ng-component <minimap-scaled-example></minimap-scaled-example>
[component.html] <<< https://raw.githubusercontent.com/Foblex/f-flow/main/projects/f-guides-examples/minimap-scaled-example/minimap-scaled-example.component.html
[component.ts] <<< https://raw.githubusercontent.com/Foblex/f-flow/main/projects/f-guides-examples/minimap-scaled-example/minimap-scaled-example.component.ts
[component.scss] <<< https://raw.githubusercontent.com/Foblex/f-flow/main/projects/f-guides-examples/minimap-scaled-example/minimap-scaled-example.component.scss
[common.scss] <<< https://raw.githubusercontent.com/Foblex/f-flow/main/projects/f-guides-examples/_flow-common.scss
:::
