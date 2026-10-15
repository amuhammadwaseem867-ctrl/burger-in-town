"use client";

import { useEffect, useRef, useState } from "react";

/* =========================================================
   FOOD IMAGE

   Plain <img> that swaps to a local fallback photo when
   the remote image is missing or fails to load, so a menu
   card never shows a broken image.
========================================================= */

export default function FoodImage({
  src,
  fallback,
  alt,
  ...props
}) {
  const imageRef = useRef(null);
  const [failed, setFailed] = useState(!src);

  /* Catch images that errored before React attached onError. */
  useEffect(() => {
    const image = imageRef.current;

    if (fallback && image?.complete && image.naturalWidth === 0) {
      setFailed(true);
    }
  }, [fallback]);

  return (
    <img
      ref={imageRef}
      src={failed ? fallback : src}
      alt={alt}
      onError={() => {
        if (fallback) {
          setFailed(true);
        }
      }}
      {...props}
    />
  );
}
