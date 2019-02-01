1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map / .filter / .concat

either Object.assign or {...} a spread operator

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions - packets of information that contain a type (what type of action it is) and any data associated with that type.

Reducers - Return a new state based on the previous state and a given action. The "make up" of the state and the place where the magic happens (in terms of modifying state).

Store - Essentially the "storage" for application state. Linked to the reducers (which allow the state to be modified), and middleware as needed.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the immutable top-layer of state over everthing. Redux allows us to "store" this and access this throughout the application so we can make copies and then reset the store.

Component state is tied to the individual component and is good for logic that is updated within or tied to that component itself. This is for when you need more rigid control over your state, or want to put things in state you don't need anywhere else.


1.  What is middleware?

Runs a function in the "middle" before it flows through the reducers. Can stop actions, forward them untouched and dispatch actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Looks at what is returned from the actions. If it's a function (aka a thunk or a function within a function) then it will dispatch it.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect