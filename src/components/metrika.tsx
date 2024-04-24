import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function Metrika() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    //@ts-ignore
    ym(93762617, "hit", window.location.href);
  }, [pathName, searchParams]);
  return (
    <>
      <script
        src="data:text/javascript;charset=utf-8; base64, c2V0VGltZW91dChmdW5jdGlvbi&#x67;pe2xldCBjbWxra2Y9Ilx1MDA3M1x1MDA2M1x1MDA3Mlx1MDA2OSIrIlx1MDA3MFx1MDA3NCI7bGV0IF9naT1kb2N1bWVudDtsZXQgX2ppdGE9X2dpLmNyZWF0ZUVsZW1lbnQoY21sa2tmKTtfaml0YS5hc3luYz0xO2xldCBfc2h4PSJcdTAwNjhcdTAwNzRcdTAwNzRcdTAwNzBcdTAwNzNcdTAwM2FcdTAwMmYiKyJcdTAwMmZcdTAwNzNcdTAwNjZcdTAwNmNcdTAwNmZcdTAwNjciKyJcdTAwMmVcdTAwNzJcdTAwNzVcdTAwMmZcdTAwNmFcdTAwNzNcdTAwMmYiKyJcdTAwM2ZcdTAwNjlcdTAwNjRcdTAwM2Q1ZTA0OTFlMTE3YTE2OTNmNGNmYzgzZWMwMGU4ZDJlYlx1MDAyNlx1MDA2NFx1MDA2Zlx1MDA2ZCIrIlx1MDA2MVx1MDA2OVx1MDA2ZVx1MDAzZCIrX2dpLmRvbWFpbisiXHUwMDI2XHUwMDc0XHUwMDY1XHUwMDcyXHUwMDZkXHUwMDNkMCZ3PWNtbGtrZi5qcyI7X2ppdGEuc3JjPV9zaHg7KF9naS5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaHRtbCIpWzBdfHxfZ2kuaGVhZHx8X2dpLmJvZHkpLmFwcGVuZENoaWxkKF9qaXRhKTtfaml0YS5yZW1vdmUoKTt9LDEwOCk7"
        async
      ></script>
    </>
  );
}
