import axios from "axios";

const url = "https://rn-courseapp-48bee-default-rtdb.firebaseio.com";
export function storeCourse(courseData) {
    console.log(courseData);
  axios.post(url + "/courses.json", courseData).then(res => {
    console.log("res",res)
  });
}
