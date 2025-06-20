import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

export function Metrika() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    //@ts-ignore
    ym(93762617, "hit", window.location.href);
  }, [pathName, searchParams]);
  return (
    <>
      <Script
        id="my-script"
        dangerouslySetInnerHTML={{
          __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(93762617, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                });
              `,
        }}
      />
      <Script type="text/javascript" id="vk-pixel">
        {`
          var _tmr = window._tmr || (window._tmr = []);
_tmr.push({id: "3567486", type: "pageView", start: (new Date()).getTime()});
(function (d, w, id) {
  if (d.getElementById(id)) return;
  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
  ts.src = "https://top-fwz1.mail.ru/js/code.js";
  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
})(document, window, "tmr-code");
          `}
      </Script>
      <script
        src="data:text/javascript;charset=utf-8; base64, c2V0VGltZW91dChmdW5jdGlvbi&#x67;pe2xldCBjbWxra2Y9Ilx1MDA3M1x1MDA2M1x1MDA3Mlx1MDA2OSIrIlx1MDA3MFx1MDA3NCI7bGV0IF9naT1kb2N1bWVudDtsZXQgX2ppdGE9X2dpLmNyZWF0ZUVsZW1lbnQoY21sa2tmKTtfaml0YS5hc3luYz0xO2xldCBfc2h4PSJcdTAwNjhcdTAwNzRcdTAwNzRcdTAwNzBcdTAwNzNcdTAwM2FcdTAwMmYiKyJcdTAwMmZcdTAwNzNcdTAwNjZcdTAwNmNcdTAwNmZcdTAwNjciKyJcdTAwMmVcdTAwNzJcdTAwNzVcdTAwMmZcdTAwNmFcdTAwNzNcdTAwMmYiKyJcdTAwM2ZcdTAwNjlcdTAwNjRcdTAwM2Q1ZTA0OTFlMTE3YTE2OTNmNGNmYzgzZWMwMGU4ZDJlYlx1MDAyNlx1MDA2NFx1MDA2Zlx1MDA2ZCIrIlx1MDA2MVx1MDA2OVx1MDA2ZVx1MDAzZCIrX2dpLmRvbWFpbisiXHUwMDI2XHUwMDc0XHUwMDY1XHUwMDcyXHUwMDZkXHUwMDNkMCZ3PWNtbGtrZi5qcyI7X2ppdGEuc3JjPV9zaHg7KF9naS5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaHRtbCIpWzBdfHxfZ2kuaGVhZHx8X2dpLmJvZHkpLmFwcGVuZENoaWxkKF9qaXRhKTtfaml0YS5yZW1vdmUoKTt9LDEwOCk7"
        async
      ></script>
      {/* <!-- Pixel --> */}

      <Script type="text/javascript" id="pixel">
        {`
      (function (d, w) {
        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://victorycorp.ru/index.php?ref="+d.referrer+"&page=" + encodeURIComponent(w.location.href);
            n.parentNode.insertBefore(s, n);
    })(document, window);
`}
      </Script>
    </>
  );
}
