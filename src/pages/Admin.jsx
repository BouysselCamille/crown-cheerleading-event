import { Button } from '../components/ui/Button';

export function Admin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-crown-black text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-display font-black mb-10">Admin</h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/admin-da7c27dc/verification-inscriptions" variant="primary">
            Vérification inscriptions
          </Button>
          <Button href="/admin-da7c27dc/generateur-devis" variant="outline">
            Générateur de devis
          </Button>
        </div>
      </div>
    </div>
  );
}
