import PageContainer from "../components/common/PageContainer";

export default function LandingPage() {
  return (
    <PageContainer>
      <section className="flex min-h-[80vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            Advanced Exoplanet Observatory
          </h1>

          <p className="mt-6 text-xl text-slate-400">
            AI-powered Exoplanet Discovery Platform
          </p>
        </div>
      </section>
    </PageContainer>
  );
}