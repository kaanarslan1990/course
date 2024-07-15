import { StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Courses from "../components/Courses";
import { CoursesContext } from "../store/coursesContext";
import { getLastWeek } from "../helper/date";
import { getCourses } from "../helper/http";

export default function RecentCourses() {
  const coursesContext = useContext(CoursesContext);

  const [fetchedCourses, setFetchedCourses] = useState([]);

  useEffect(() => {
    async function takeCourses() {
      const courses = await getCourses();
      coursesContext.setCourses(courses)
      // setFetchedCourses(courses)
    }

    takeCourses();
  },[]);

  const recentCourses = coursesContext.courses.filter((course) => {
    const today = new Date();
    const dateLastWeek = getLastWeek(today, 7);

    return course.date >= dateLastWeek && course.date <= today;
  });

  return (
    <Courses
      courses={recentCourses}
      coursesPeriod="Last Week"
      nullText="You don't have recent courses!"
    />
  );
}

const styles = StyleSheet.create({});
