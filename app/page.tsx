// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
  
//     </div>
//   );
// }
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return null;
}
