import { Button } from "@mui/material";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

export const Screenshot = () => {
  const [enableCapture, setEnableCapture] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("");
  const camera = useRef<Webcam>(null);

  const capture = useCallback(() => {
    const image = camera.current?.getScreenshot();
    if (image) {
      setUrl(image);

      const post = async () => {
        await fetch("http://api:8080/img/circles", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: image }),
        });
      };
      post();
    }
  }, [camera]);

  return (
    <>
      {enableCapture ? (
        <>
          <Button variant="contained" onClick={() => setEnableCapture(false)}>
            End
          </Button>
          <Webcam
            ref={camera}
            audio={false}
            width={720}
            height={360}
            screenshotFormat="image/png"
            videoConstraints={{ width: 720, height: 360, facingMode: "user" }}
          />
          <Button variant="outlined" onClick={capture}>
            Capture
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={() => setEnableCapture(true)}>
          Start
        </Button>
      )}

      {url ? (
        <>
          <Button variant="outlined" color="error" onClick={() => setUrl("")}>
            Clear
          </Button>
          <Image src={url} width={720} height={360} alt="screenshot" />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
