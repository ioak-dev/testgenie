import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import AuthReducer from './reducers/AuthReducer';
import CompanyReducer from './reducers/CompanyReducer';
import LabelReducer from './reducers/LabelReducer';
import MetadataDefinitionReducer from './reducers/MetadataDefinitionReducer';
import MetadataValueReducer from './reducers/MetadataValueReducer';
import NoteReducer from './reducers/NoteReducer';
import ProfileReducer from './reducers/ProfileReducer';
import RoleReducer from './reducers/RoleReducer';
import SpaceReducer from './reducers/SpaceReducer';
import TagReducer from './reducers/TagReducer';
import UserReducer from './reducers/UserReducer';
import NotelinkReducer from './reducers/NotelinkReducer';
import NotelinkAutoReducer from './reducers/NotelinkAutoReducer';
import ColorfilterReducer from './reducers/ColorfilterReducer';
import KeywordReducer from './reducers/KeywordReducer';

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  {
    reducer: {
      authorization: AuthReducer,
      profile: ProfileReducer,
      user: UserReducer,
      role: RoleReducer,
      company: CompanyReducer,
      space: SpaceReducer,
      tag: TagReducer,
      note: NoteReducer,
      notelink: NotelinkReducer,
      notelinkAuto: NotelinkAutoReducer,
      label: LabelReducer,
      keyword: KeywordReducer,
      metadataDefinition: MetadataDefinitionReducer,
      metadataValue: MetadataValueReducer,
      colorfilter: ColorfilterReducer
    }
  }
);
// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware) // ,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

export default store;
