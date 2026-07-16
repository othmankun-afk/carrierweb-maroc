import LoginView from "../_shared/LoginView";
import { getDict } from "@/lib/dictionaries";

// Métadonnées dans connexion/layout.tsx (ce composant enfant est « client »).
export default function Connexion() {
  return <LoginView locale="fr" dict={getDict("fr")} />;
}
