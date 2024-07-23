import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Calendar() {
  useEffect(() => {
    (async function () {
      const cal = (await getCalApi({ namespace: "secret" })) as any;
      cal.ns.secret("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="secret"
      calLink="ihomes/secret"
      style={{ width: 1000, height: "100%" }}
      config={{ layout: "month_view" }}
    />
  );
}

// export default function MyApp() {
//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ namespace: "intro-meeting-ihomes" });
//       cal.ns["intro-meeting-ihomes"]("ui", {
//         styles: { branding: { brandColor: "#000000" } },
//         hideEventTypeDetails: false,
//         layout: "month_view",
//       });
//     })();
//   }, []);
//   return (
//     <button
//       data-cal-namespace="intro-meeting-ihomes"
//       data-cal-link="ihomes/intro-meeting-ihomes"
//       data-cal-config='{"layout":"month_view"}'
//     >
//       Click me
//     </button>
//   );
// }
