# simple-redux
A js library containing utilities to simplify tasks involved for setting up redux global state. This library currently provides easy interface for creating constants, action creators return nothing but the action (without any data), and creating reducers.

## Installation
```
npm install simple-redux
```
**or**
```
git clone git@github.com:anshulsahni/simple-redux.git
npm install /path/to/clone/repository
```

## Usage

```
import simpleRedux from 'simple-redux'
export default simpleRedux.getConsts(
'CONSTANT_ONE',
'CONSTANT_TWO',
);
```

## API Reference

### getConsts
This function returns an object containing the string constants as properties of object

Example
```
import { getConsts } from 'simple-redux';

return getConsts(
'CONSTANT_ONE',
'CONSTANT_TWO',
'CONSTANT_THREE',
);

//returned object
{ CONSTANT_ONE: 'CONSTANT_ONE', CONSTANT_TWO: 'CONSTANT_TWO', CONSTANT_THREE: 'CONSTANT_ONE' }

```

### createSimpleActionCreators
This method returns an object which contains methods that returns action creators which returns only action without any data

Example
```
import { getSimpleActionCreators } from 'simple-redux';

const actions =  {
  ...getSimpleActionCreators(
    'FIRST_ACTION',
    'SECOND_ACTION',
    'THIRD_ACTIONS'
  ),
};

actions.firstAction();

//returned value is action
{ type: 'FIRST_ACTION' };

```

### createReducer
This method takes in initialState and action handlers as arguments, in which handlers is an object with property being the action and value being the functions which will handle those actions

Example
```
import { createReducer } from 'simple-redux';

const initialState = {
  messages: [],
};

const onAddMessage = (state, action) => {
  //...code to handle ADD_MESSAGE action
};

const onDeleteMessage = (state, action) => {
  //...code to handle DELETE_MESSAGE action
};

const onUpdateMessage = (state, action) => {
 //...code to handle UPDATE_MESSAGE action
};

export default createReducer(initialState, {
  ADD_MESSAGE: onAddMessage,
  DELETE_MESSAGE: onDeleteMessage,
  UPDATE_MESSAGE: onUpdateMessage,
});
```
