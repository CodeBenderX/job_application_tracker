
export default function SignUp() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">{/*Hero Section*/}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              Create your account and start tracking your job applications today.
            </h1>
            <p className="text-muted-foreground"> 
              Join thousands of job seekers who are using our application tracker to stay organized and on top of their job search. Sign up now and take control of your job applications!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}