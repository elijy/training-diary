export const SET_SELECTED_EXERCISE = "set-sel-ex";
export const FETCH_EXERCISES = "set-exercises";
export const ADD_EXERCISE = "add-ex";
export const DELETE_EXERCISE = "del-ex";
export const UPDATE_SETS = "update-sets";

export const exercisesReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_EXERCISE:
      return {
        ...state,
        selectedExercise: action.payload,
      };
    case FETCH_EXERCISES:
      return {
        ...state,
        exercises: [...action.payload],
      };
    case ADD_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case DELETE_EXERCISE:
      return {
        ...state,
        exercises: [
          ...state.exercises.filter(
            (exercise) => exercise.id !== action.payload.id
          ),
        ],
        selectedExercise: null,
      };
    case UPDATE_SETS:
      return {
        ...state,
        exercises: [
          ...state.exercises.map((ex) =>
            ex.id === action.payload.id ? { ...action.payload } : ex
          ),
        ],
        selectedExercise: action.payload,
      };
    default:
      return state;
  }
};
