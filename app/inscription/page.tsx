import RegisterView from "../_shared/RegisterView";
import { getDict } from "@/lib/dictionaries";

// Métadonnées dans inscription/layout.tsx (ce composant enfant est « client »).
export default function Inscription() {
  return <RegisterView locale="fr" dict={getDict("fr")} />;
}
