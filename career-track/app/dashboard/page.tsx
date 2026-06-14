export default function Dashboard () {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">{/*Hero Section*/}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold"> 
              Welcome to your dashboard!
            </h1>
            <p className="text-muted-foreground">
              Here you can track all your job applications in one place.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}