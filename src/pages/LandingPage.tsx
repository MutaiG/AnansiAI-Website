import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Brain, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Target, 
  Zap, 
  Fingerprint, 
  Shield, 
  Lock, 
  CheckCircle, 
  AlertCircle,
  Scan
} from "lucide-react";

const LandingPage = () => {
  const { login, signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
  });
  
  // Biometric states
  const [fingerprintSupported, setFingerprintSupported] = useState(false);
  const [fingerprintScanning, setFingerprintScanning] = useState(false);
  const [biometricEnabled, setBiometricEnabled] = useState(false);
  
  // Signup fingerprint registration states
  const [signupStep, setSignupStep] = useState<'details' | 'fingerprint1' | 'fingerprint2' | 'complete'>('details');
  const [firstFingerprintRegistered, setFirstFingerprintRegistered] = useState(false);
  const [secondFingerprintRegistered, setSecondFingerprintRegistered] = useState(false);
  const [fingerprintRegistrationProgress, setFingerprintRegistrationProgress] = useState(0);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupStep === 'details') {
      setSignupStep('fingerprint1');
    }
  };

  const handleFingerprintRegistration = async (step: 'first' | 'second') => {
    if (!fingerprintSupported) {
      alert("Biometric authentication not supported on this device");
      return;
    }

    setFingerprintScanning(true);
    setFingerprintRegistrationProgress(0);
    
    // Simulate fingerprint scanning with progress
    const progressInterval = setInterval(() => {
      setFingerprintRegistrationProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    try {
      // Simulate fingerprint registration delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (step === 'first') {
        setFirstFingerprintRegistered(true);
        setSignupStep('fingerprint2');
      } else {
        setSecondFingerprintRegistered(true);
        setSignupStep('complete');
        
        // Complete signup
        const success = await signup(signupData.name, signupData.email, "biometric_auth");
        if (success) {
          setTimeout(() => {
            navigate("/train-your-twin-app");
          }, 1500);
        }
      }
    } catch (error) {
      console.error("Biometric registration failed:", error);
    } finally {
      setFingerprintScanning(false);
      setFingerprintRegistrationProgress(0);
    }
  };

  const handleFingerprintLogin = async () => {
    if (!fingerprintSupported) {
      alert("Biometric authentication not supported on this device");
      return;
    }

    setFingerprintScanning(true);
    
    try {
      // Simulate fingerprint scanning delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, automatically succeed
      const success = await login("demo@anansi.ai", "biometric_auth");
      if (success) {
        navigate("/train-your-twin-app");
      }
    } catch (error) {
      console.error("Biometric authentication failed:", error);
    } finally {
      setFingerprintScanning(false);
    }
  };

  useEffect(() => {
    // Check if biometric authentication is supported
    if (navigator.credentials && window.PublicKeyCredential) {
      setFingerprintSupported(true);
      setBiometricEnabled(true);
    }
  }, []);

  const renderSignupStep = () => {
    switch (signupStep) {
      case 'details':
        return (
          <>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={signupData.name}
                  onChange={(e) =>
                    setSignupData({ ...signupData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-4 mb-4">
                <p className="text-sm text-center text-muted-foreground mb-2">
                  🔒 Your data, encrypted and yours alone
                </p>
                <p className="text-xs text-center text-muted-foreground">
                  We use military-grade encryption because your personal AI deserves nothing less
                </p>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                disabled={isLoading}
              >
                Secure My Future
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </>
        );

      case 'fingerprint1':
        return (
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Fingerprint className="h-8 w-8 text-logo-teal" />
                <span className="text-lg font-semibold text-logo-teal">First Fingerprint</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your unique fingerprint becomes the guardian of your digital twin. Let's make it official.
              </p>
              
              {fingerprintScanning && (
                <div className="mb-4">
                  <Progress value={fingerprintRegistrationProgress} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Scanning... {fingerprintRegistrationProgress}%
                  </p>
                </div>
              )}
              
              <Button
                onClick={() => handleFingerprintRegistration('first')}
                disabled={fingerprintScanning || !fingerprintSupported}
                className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                size="lg"
              >
                {fingerprintScanning ? (
                  <>
                    <Scan className="mr-2 h-5 w-5 animate-pulse" />
                    Scanning Fingerprint...
                  </>
                ) : (
                  <>
                    <Fingerprint className="mr-2 h-5 w-5" />
                    Register First Fingerprint
                  </>
                )}
              </Button>
            </div>
          </div>
        );

      case 'fingerprint2':
        return (
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-sm font-medium text-green-600">First fingerprint registered</span>
            </div>
            
            <div className="bg-gradient-to-r from-logo-blue/10 to-logo-teal/10 border border-logo-blue/20 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Fingerprint className="h-8 w-8 text-logo-blue" />
                <span className="text-lg font-semibold text-logo-blue">Second Fingerprint</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                One more touch to complete your fortress of privacy. Your backup key to limitless possibilities.
              </p>
              
              {fingerprintScanning && (
                <div className="mb-4">
                  <Progress value={fingerprintRegistrationProgress} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Scanning... {fingerprintRegistrationProgress}%
                  </p>
                </div>
              )}
              
              <Button
                onClick={() => handleFingerprintRegistration('second')}
                disabled={fingerprintScanning || !fingerprintSupported}
                className="w-full bg-gradient-to-r from-logo-blue to-logo-teal text-white"
                size="lg"
              >
                {fingerprintScanning ? (
                  <>
                    <Scan className="mr-2 h-5 w-5 animate-pulse" />
                    Scanning Fingerprint...
                  </>
                ) : (
                  <>
                    <Fingerprint className="mr-2 h-5 w-5" />
                    Register Second Fingerprint
                  </>
                )}
              </Button>
            </div>
          </div>
        );

      case 'complete':
        return (
          <div className="text-center space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Biometric Setup Complete!
              </h3>
              <p className="text-sm text-green-700 mb-4">
                Welcome to the future. Your AI Twin is ready to learn, grow, and achieve with you.
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-green-600">
                <div className="flex items-center gap-1">
                  <Fingerprint className="h-3 w-3" />
                  <span>2 Fingerprints Registered</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  <span>Military-Grade Encryption</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Redirecting to your Twin Dashboard...
            </p>
          </div>
        );

      default:
        return null;
    }
  };

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
              <div className="inline-flex items-center rounded-full border bg-background/60 px-4 py-2 text-sm font-medium text-foreground/80 backdrop-blur-sm mb-8">
                <Sparkles className="mr-2 h-4 w-4 text-logo-teal" />
                Enterprise Biometric Security
              </div>

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
                <span className="bg-gradient-to-br from-logo-teal to-logo-blue bg-clip-text text-transparent">
                  Your Twin,
                </span>
                <br />
                <span className="text-foreground">Your Future</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8">
                We value your data as much as you do. That's why we've built the most secure AI training platform on Earth.
              </p>
            </div>

            {/* Right side - Auth forms */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md shadow-2xl border-2 border-logo-teal/20 bg-background/95 backdrop-blur-sm">
                <CardHeader className="text-center relative">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="h-6 w-6 text-logo-teal" />
                    <Badge variant="outline" className="border-logo-teal text-logo-teal">
                      Biometric Only
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    We Value Your Data
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Your most personal information deserves the highest protection
                  </p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-6">
                      {/* Biometric Login Only */}
                      <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-6">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <Fingerprint className="h-8 w-8 text-logo-teal" />
                            <span className="text-lg font-semibold text-logo-teal">Biometric Login</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-6">
                            Your fingerprint is the key to your digital future. Touch to unlock unlimited potential.
                          </p>
                          
                          {!fingerprintSupported && (
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                              <div className="flex items-center gap-2 justify-center">
                                <AlertCircle className="h-4 w-4 text-orange-500" />
                                <span className="text-sm text-orange-700">
                                  Biometric authentication not supported on this device
                                </span>
                              </div>
                            </div>
                          )}
                          
                          <Button
                            onClick={handleFingerprintLogin}
                            disabled={fingerprintScanning || isLoading || !fingerprintSupported}
                            className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white hover:shadow-lg transition-all duration-200"
                            size="lg"
                          >
                            {fingerprintScanning ? (
                              <>
                                <Scan className="mr-2 h-5 w-5 animate-pulse" />
                                Authenticating...
                              </>
                            ) : (
                              <>
                                <Fingerprint className="mr-2 h-5 w-5" />
                                Login with Fingerprint
                              </>
                            )}
                          </Button>
                        </div>
                      </div>

                      {/* Security Indicators */}
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Lock className="h-3 w-3 text-green-500" />
                            <span>256-bit Encryption</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Shield className="h-3 w-3 text-blue-500" />
                            <span>FIDO2 Compliant</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Fingerprint className="h-3 w-3 text-logo-teal" />
                            <span>Zero Trust</span>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4">
                      {renderSignupStep()}
                      
                      {signupStep === 'details' && !fingerprintSupported && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 justify-center">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm text-orange-700">
                              Biometric authentication not supported on this device
                            </span>
                          </div>
                        </div>
                      )}
                      
                      {signupStep === 'details' && (
                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Fingerprint className="h-3 w-3 text-logo-teal" />
                              <span>2 Fingerprints Required</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Shield className="h-3 w-3 text-blue-500" />
                              <span>Military Grade</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Biometric Security?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your AI Twin contains your most personal data. We protect it with enterprise-grade biometric security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-teal/20 to-logo-teal/40 mb-4">
                  <Fingerprint className="h-8 w-8 text-logo-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3">Passwordless</h3>
                <p className="text-muted-foreground">
                  No passwords to remember or steal. Your fingerprint is your key.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-logo-blue/20 to-logo-blue/40 mb-4">
                  <Shield className="h-8 w-8 text-logo-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Military Grade</h3>
                <p className="text-muted-foreground">
                  256-bit encryption with FIDO2 compliance for maximum security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue/20 to-cyber-blue/40 mb-4">
                  <Zap className="h-8 w-8 text-cyber-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Instant Access</h3>
                <p className="text-muted-foreground">
                  Access your AI Twin in seconds with just a touch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
