import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { MobileAppPage } from "@/components/pages/MobileAppPage";

export default function MobileApp() {
  return (
    <div>
      <Navbar />
      <MobileAppPage />
      <Footer />
    </div>
  );
}
