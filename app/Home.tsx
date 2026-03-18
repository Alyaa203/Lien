export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-10">

      {/* Header */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold">Alyaa Saab</h1>
        <p className="text-lg mt-2">
          Étudiante en IA, signal processing et modélisation scientifique
        </p>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Projets</h2>

        <div className="grid gap-6">

          <div className="border p-5 rounded-xl">
            <h3 className="text-xl font-bold">
              Classification de pigments (XAI)
            </h3>
            <p className="mt-2">
              Modèles deep learning pour données hyperspectrales avec interprétation SHAP/LIME.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Python, Deep Learning
            </p>
          </div>

          <div className="border p-5 rounded-xl">
            <h3 className="text-xl font-bold">
              Simulation quantique (Schrödinger)
            </h3>
            <p className="mt-2">
              Simulation numérique avec calcul des états propres et évolution temporelle.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Python, NumPy, SciPy
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}