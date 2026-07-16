import ContactView from "../_shared/ContactView";
import Footer from "../components/Footer";
import { getDict } from "@/lib/dictionaries";

// Métadonnées dans contact/layout.tsx (ContactView est « client »). Le Footer
// (Server Component async) est passé en prop.
export default function Contact() {
  const dict = getDict("fr");
  return <ContactView locale="fr" dict={dict} footerSlot={<Footer locale="fr" dict={dict} />} />;
}
