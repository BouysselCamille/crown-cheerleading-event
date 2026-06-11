import { useTranslation } from '../i18n';

export function NotFound() {

    const { t, } = useTranslation();
    const txt = t.notFound;

    return (
        <div className="min-h-screen flex items-center justify-center bg-crown-black text-white">
            <div className="text-center">
                <h1 className="text-6xl font-display font-black mb-4">{txt.title}</h1>
                <p className="text-xl mb-8">{txt.message}</p>
                <a href="/" className="inline-block px-6 py-3 bg-gold text-crown-black font-semibold rounded-lg hover:bg-gold/90 transition-colors">
                    {txt.cta}
                </a>
            </div>
        </div>
    );
}