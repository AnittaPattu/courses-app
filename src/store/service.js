function service() {
  const BASEURL = "http://localhost:4000";

  async function getAllCourses() {
    const courseresponse = await fetch("http://localhost:4000/courses/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await courseresponse.json();
  }
}

export default service;
