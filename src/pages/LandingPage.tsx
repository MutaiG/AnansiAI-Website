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
  User,
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
  const [loginStep, setLoginStep] = useState<'details' | 'biometric'>('details');
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
        
        // Complete signup with user's actual name and email
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
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <User className="h-8 w-8 text-logo-teal" />
                <span className="text-lg font-semibold text-logo-teal">Twin Registration</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Help us name your AI Twin by providing your details, then secure it with biometric authentication.
              </p>

              <form onSubmit={(e) => {
                e.preventDefault();
                if (signupData.name && signupData.email) {
                  setSignupStep('fingerprint1');
                }
              }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      value={signupData.name.split(' ')[0] || ''}
                      onChange={(e) => {
                        const lastName = signupData.name.split(' ').slice(1).join(' ');
                        setSignupData({
                          ...signupData,
                          name: e.target.value + (lastName ? ' ' + lastName : '')
                        });
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      value={signupData.name.split(' ').slice(1).join(' ') || ''}
                      onChange={(e) => {
                        const firstName = signupData.name.split(' ')[0] || '';
                        setSignupData({
                          ...signupData,
                          name: firstName + (e.target.value ? ' ' + e.target.value : '')
                        });
                      }}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="bg-logo-teal/5 p-4 rounded-lg border border-logo-teal/20">

                </div>

                <Button
                  type="submit"
                  disabled={!signupData.name.trim() || !signupData.email.trim() || !fingerprintSupported}
                  className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                  size="lg"
                >
                  <Fingerprint className="mr-2 h-5 w-5" />
                  Continue to Biometric Setup
                </Button>
              </form>
            </div>
          </div>
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
              <Card className="w-full max-w-md shadow-2xl border-2 border-logo-teal/20 bg-background/95 backdrop-blur-sm">
                <CardHeader className="text-center relative">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="h-6 w-6 text-logo-teal" />
                    <Badge variant="outline" className="border-logo-teal text-logo-teal">
                      Biometric Only
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    Secure Access
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Your fingerprint is your key to the twin dashboard
                  </p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Login</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="space-y-6">
                      {loginStep === 'details' ? (
                        <div className="space-y-4">
                          <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-6">
                            <div className="flex items-center justify-center gap-2 mb-4">
                              <User className="h-8 w-8 text-logo-teal" />
                              <span className="text-lg font-semibold text-logo-teal">Welcome Back</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-6 text-center">
                              Enter your details to access your AI Twin
                            </p>

                            <form onSubmit={(e) => {
                              e.preventDefault();
                              if (signupData.name && signupData.email) {
                                setLoginStep('biometric');
                              }
                            }} className="space-y-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="loginFirstName">First Name *</Label>
                                  <Input
                                    id="loginFirstName"
                                    type="text"
                                    placeholder="Your first name"
                                    value={signupData.name.split(' ')[0] || ''}
                                    onChange={(e) => {
                                      const lastName = signupData.name.split(' ').slice(1).join(' ');
                                      setSignupData({
                                        ...signupData,
                                        name: e.target.value + (lastName ? ' ' + lastName : '')
                                      });
                                    }}
                                    required
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="loginLastName">Last Name *</Label>
                                  <Input
                                    id="loginLastName"
                                    type="text"
                                    placeholder="Your last name"
                                    value={signupData.name.split(' ').slice(1).join(' ') || ''}
                                    onChange={(e) => {
                                      const firstName = signupData.name.split(' ')[0] || '';
                                      setSignupData({
                                        ...signupData,
                                        name: firstName + (e.target.value ? ' ' + e.target.value : '')
                                      });
                                    }}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="loginEmail">Email Address *</Label>
                                <Input
                                  id="loginEmail"
                                  type="email"
                                  placeholder="your.email@example.com"
                                  value={signupData.email}
                                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                                  required
                                />
                              </div>

                              <Button
                                type="submit"
                                disabled={!signupData.name.trim() || !signupData.email.trim()}
                                className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                                size="lg"
                              >
                                <Fingerprint className="mr-2 h-5 w-5" />
                                Continue to Biometric Login
                              </Button>
                            </form>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-6">
                          <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-4">
                              <Fingerprint className="h-8 w-8 text-logo-teal" />
                              <span className="text-lg font-semibold text-logo-teal">Biometric Access</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              Welcome back, {signupData.name}!
                            </p>
                            <p className="text-sm text-muted-foreground mb-6">
                              Touch to access your AI Twin dashboard
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

                            <div className="flex flex-col gap-2">
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
                                    Sign In with Fingerprint
                                  </>
                                )}
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => setLoginStep('details')}
                                size="sm"
                              >
                                ← Back to Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}

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
                      
                      {!fingerprintSupported && (
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 justify-center">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                            <span className="text-sm text-orange-700">
                              Biometric authentication not supported on this device
                            </span>
                          </div>
                        </div>
                      )}

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
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default LandingPage;
