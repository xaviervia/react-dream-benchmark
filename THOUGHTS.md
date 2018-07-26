# Factors potentially affecting the experiment

- Dev vs Prod
- Existence of dev tools installed
- Complexity of example
- Overhead given by development tool
- Choice of tools for solving the issue
  - Recompact?
  - Recompose with the ability to detect "static" ones?
  -

# Goals

## Things to test

- Stateless hocs (squashable)
- Stateful hocs (non-squashable)
- Component composition (with of + ap)

## Library coverage goals

P - Pure (stateless)
I - Impure (stateful)
M - Miscellaneous (not composing)

*Recompose*:

- mapProps P
- withProps P
- withHandlers I
- defaultProps M
- renameProp P
- renameProps P
- flattenProp P
- withState I
- withStateHandlers I
- withReducer I
- branch P
- renderComponent ?
- renderNothing ?
- shouldUpdate I
- pure ?
- onlyUpdateForKeys I
- onlyUpdateForPropTypes I
- withContext ?
- getContext ?
- lifecycle I
- toClass I
- toRenderProps ?
- fromRenderProps ?

*@hocs*:

- omit-props P
- with-lifecycle I
- debounce-handler I
- throttle-handler I
- safe-timers I
- with-callback-on-change I
- with-callback-on-change-while I
- with-callback-once I
- with-log I
- with-debugger I

*@klarna/higher-order-components*:

- normalizeStyle P
- withStyleSheetOverride P
- withFocusProps I
- withKeyboardFocusProps I
- withHoverProps I
- withPressedProps I
- withTouchProps I
- withNotifyOnLowFPS I
- withDeprecationWarning M
- withUniqueFormIdentifier P
- withOverrideFromContext ?
- withTheme ?
- withUncontrolledProp I
- withJwtProp ?
- withAutofillProps I

## Scenarios for stateless HoC manipulation

- Ids for the entire tree
- Style
- Removing props that where passed in accidentally
