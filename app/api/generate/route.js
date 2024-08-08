// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
/*
import { NextResponse } from "next/server";

import { QRCodeCanvas } from "qr-code-styling";

const options = {
	width: 400,
	height: 400,
	data: "https://developers.facebook.com/",
	// NOTE: png and jpg formats only.
	image: "https://www.citypng.com/public/uploads/preview/hd-meta-facebook-white-logo-png-116403446124ydgyipr3u.png",
	dotsOptions: { type: "extra-rounded", color: "#242424" },
	backgroundOptions: {
		color: "#fff",
	},
	cornersSquareOptions: { type: "extra-rounded", color: "#281728" },
	cornersDotOptions: {
		color: "#928192",
	},
	imageOptions: {
		crossOrigin: "anonymous",
		hideBackgroundDots: true,
		imageSize: 0.3,
	},
};

export async function GET() {
	try {
		const qrCode = new QRCodeCanvas(options);

		const file = await qrCode.toDataUrl("png");

		return NextResponse.json({
			pngFile: file,
		});
	} catch (error) {
		return NextResponse.json({ error: "Failed to generate QR code" }, { status: 500 });
	}
}


This is the component where I am rendering the API response:

"use client";
import { useState, useEffect } from "react";

function ImageViewer() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/generate")
      .then((response) => response.json())
      .then((data) => {
        if (data.pngFile) {
          // the pngFile contains the png image as a base64 string
          setImageSrc(data.pngFile);
        }
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);

  if (!imageSrc) {
    return <div>Loading...</div>;
  }

  return <>{imageSrc && <img src={imageSrc} alt="SVG Image" />}</>;
}

export default ImageViewer;

*/
