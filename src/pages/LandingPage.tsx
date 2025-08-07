import SmartAuth from "@/components/SmartAuth";

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/assets/28f4ebcd9c724a92b92fccb7c4a1791f/twinternet-logo-5bbd50?format=webp&width=800"
                alt="AnansiAI"
                className="h-12 w-12"
              />
              <span className="text-xl font-bold">AnansiAI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-logo-teal/8 via-logo-blue/5 to-cyber-blue/6" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-20" />

        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
                <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                  Your twin,
                </span>
                <br />
                <span className="text-foreground">your future</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                Start your AI Twin journey today.
              </p>
            </div>

            {/* Right side - Auth forms */}
            <div className="flex justify-center lg:justify-end">
              <SmartAuth />
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
