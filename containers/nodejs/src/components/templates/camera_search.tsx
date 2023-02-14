import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Webcam from "react-webcam";

export const CameraSearch = () => {
  const [isCaptureEnabled, setCaptureEnabled] = useState<boolean>(false);
  const [url, setUrl] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);
  const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user",
  };
  const capture = useCallback(() => {
    const image = webcamRef.current?.getScreenshot();
    if (image) {
      setUrl(image);

      const post = async () => {
        await fetch("http://api:8080/img", {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: JSON.stringify({ name: image }),
        });
      };
      post();
    }
  }, [webcamRef]);

  // useEffect(() => {
  //   const postData = async () => {
  //     await fetch("/api/test_fastapi", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ name: "John" }),
  //     });
  //   };
  //   console.log(postData());

  //   postData();
  // }, []);

  return (
    <>
      <header>Camera Search!!!</header>
      {isCaptureEnabled ? (
        <>
          <div>
            <button type="button" onClick={() => setCaptureEnabled(false)}>
              End
            </button>
          </div>
          <div>
            <Webcam
              audio={false}
              width={720}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button onClick={capture}>Capture</button>
        </>
      ) : (
        <button onClick={() => setCaptureEnabled(true)}>Start</button>
      )}

      {url ? (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              Clear
            </button>
          </div>
          <div>
            <Image width={720} height={360} src={url} alt="Screenshot" />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
