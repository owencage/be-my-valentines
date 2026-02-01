import { Suspense } from "react";
import ValentinePage from "./components/ValentinePage";

export default function Page() {
  return (
    <Suspense fallback={<p></p>}>
      <ValentinePage />
    </Suspense>
  );
}
