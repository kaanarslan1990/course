import { createContext, useReducer } from "react";

export const CoursesContext = createContext({
  courses: [],
  addCourse: ({ description, amount, date }) => {},
  deleteCourse: (id) => {},
 setCourses: (courses) => {},
  updateCourse: (id, { description, amount, date }) => {},
});

function coursesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      // const id = new Date().toString() + Math.random().toString();
      return [action.payload, ...state];
    case "DELETE":
      return state.filter((course) => course.id !== action.payload);
    case "SET":
      const reverseData = action.payload.reverse()
      return reverseData;
    case "UPDATE":
      const updatableCourseIndex = state.findIndex(
        (course) => course.id === action.payload.id
      );
      const updateableCourse = state[updatableCourseIndex];
      const updatedItem = { ...updateableCourse, ...action.payload.data };
      const updatedCourses = [...state];
      updatedCourses[updatableCourseIndex] = updatedItem;
      return updatedCourses;
    default:
      return state;
  }
}
function CoursesContextProvider({ children }) {
  const [coursesState, dispatch] = useReducer(coursesReducer, []);

  function addCourse(courseData) {
    dispatch({ type: "ADD", payload: courseData });
  }
  function setCourses(courses) {
    dispatch({ type: "SET", payload: courses });
  }
  function deleteCourse(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateCourse(id, courseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: courseData } });
  }

  const value = {
    courses: coursesState,
    addCourse: addCourse,
    deleteCourse: deleteCourse,
    updateCourse: updateCourse,
    setCourses:setCourses
  };

  return (
    <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>
  );
}

export default CoursesContextProvider;
