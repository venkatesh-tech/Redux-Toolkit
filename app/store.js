const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");

//store
const store = configureStore({
  reducer: {
    cake: cakeReducer,
  },
});

module.exports = store;
