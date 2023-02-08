import { useState, useRef, useCallback, useEffect } from "react";

const Testing = () => {
  useEffect(() => {
    const postData = async () => {
      // await fetch("https://qiita.com/api/v2/items", {
      const test = await fetch("/api/test_fastapi");
      // await fetch("/api/test_fastapi", {
      // method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({ name: "John" }),
      // });
      console.log(test.json());
    };

    postData();
  }, []);

  return (
    <>
      <div>Test page</div>
    </>
  );
};

export default Testing;
