// const initialState = {
//     value: 0,
//     userData: {}
//   };

function addReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREASE':
      return { ...state, value: state.value - 1 };
    case 'FETCH_USER_SUCCESS':
      return { ...state, userData: action.data };
    case 'FETCH_EMPLOYEE_DATA_SUCCESS':
      return { ...state, employeeData: action.data };
    default:
      return state;
  }
}

export default addReducer;
