import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

type Props = {
  data: string;
};

const Testing = ({ data }: Props) => {
  const res = async () => {
    await axios.post("http://api:8080/img", {
      message: "test!",
    });
  };
  console.log(res.data);

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

// const post = async () => {
//   console.log("pressed");

//   const response = await fetch("http://api:8080/img", {
//     method: "POST",
//     body: JSON.stringify({ name: "test!!!!!" }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();
//   return data;
// };

// export async function getStaticProps() {
//   const res = await fetch("http://api:8080/img");
//   const data = await res.json();

//   return { props: data };
// }

export default Testing;
