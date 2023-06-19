import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

axios.defaults.baseURL = "http://localhost:8080";

type Props = {
  data: string;
};

const Testing = ({ data }: Props) => {
  // const res = () => {
  //   axios.get("/").then((test) => {
  //     console.log(test);
  //   });
  // };
  // res();

  const post = async () => {
    await fetch("http://localhost:8080/img/circles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: test_img }),
    }).then((data) => {
      console.log(data.body);
    });
  };
  post();

  // "/img/circles"

  // const res = async () => {
  //   await axios
  //     .post("/img", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: "Data sent from Next.js!!!!",
  //     })
  //     .then((test) => {
  //       console.log(test);
  //     });
  // };
  // res();

  // const post = async () => {
  //   const response = await fetch("http://localhost:8080/img", {
  //     method: "POST",
  //     body: JSON.stringify({ data: "test!!!!!" }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // };
  // post();

  return (
    <>
      <button>Post Data</button>
      {/* <Image
        alt=""
        height={360}
        width={720}
        src={`data:image/jpeg;base64,${data}`}
      /> */}
      {/* <form onSubmit={() => send()}>
        <input name="test_text" type="text" />
        <input type="submit" />
      </form> */}
    </>
  );
};

// export async function getStaticProps() {
//   const res = await fetch("http://api:8080/img");
//   const data = await res.json();

//   return { props: data };
// }

export default Testing;
