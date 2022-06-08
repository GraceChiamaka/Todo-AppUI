import { storageController } from "@src/utils/storage";
import { useRouter } from "next/dist/client/router";

export const withAuth = (Wrapped: React.ComponentType) => {
  return () => {
    const router = useRouter();
    const token: any = storageController.get(
      process.env.NEXT_PUBLIC_ACCESS_TOKEN || ""
    );

    if (typeof window !== "undefined") {
      if (token) {
        return <Wrapped />;
      } else {
        router.replace(`/auth/login`);

        return null;
      }
    } else {
      return null;
    }
  };
};
