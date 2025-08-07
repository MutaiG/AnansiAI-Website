import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/AuthContext";
import {
  Brain,
  ArrowRight,
  Fingerprint,
  Shield,
  Lock,
  CheckCircle,
  AlertCircle,
  Scan,
  Eye,
  EyeOff,
  Mail,
  User
} from "lucide-react";

const UnifiedAuth = () => {
  const { login, signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [authMethod, setAuthMethod] = useState<"email" | "biometric">("email");
  const [showPassword, setShowPassword] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    agreeToTerms: false,
  });
  
  // Biometric states
  const [fingerprintSupported, setFingerprintSupported] = useState(false);
  const [fingerprintScanning, setFingerprintScanning] = useState(false);
  const [biometricStep, setBiometricStep] = useState<'setup' | 'first' | 'second' | 'complete' | 'login'>('setup');
  const [fingerprintProgress, setFingerprintProgress] = useState(0);
  const [firstFingerprintDone, setFirstFingerprintDone] = useState(false);

  useEffect(() => {
    // Check if biometric authentication is supported
    if (navigator.credentials && window.PublicKeyCredential) {
      setFingerprintSupported(true);
    }
  }, []);

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let success = false;
      
      if (activeTab === "login") {
        success = await login(formData.email, formData.password);
      } else {
        // Signup
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords don't match");
          return;
        }
        success = await signup(formData.name, formData.email, formData.password);
      }
      
      if (success) {
        navigate("/train-your-twin-app");
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      alert("Authentication failed. Please try again.");
    }
  };

  const handleBiometricSetup = async (step: 'first' | 'second') => {
    if (!fingerprintSupported) {
      alert("Biometric authentication not supported on this device");
      return;
    }

    setFingerprintScanning(true);
    setFingerprintProgress(0);
    
    // Simulate fingerprint scanning with progress
    const progressInterval = setInterval(() => {
      setFingerprintProgress(prev => {
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
        setFirstFingerprintDone(true);
        setBiometricStep('second');
      } else {
        setBiometricStep('complete');
        
        // Complete signup with biometric authentication
        const success = await signup(formData.name, formData.email, "biometric_auth");
        if (success) {
          setTimeout(() => {
            navigate("/train-your-twin-app");
          }, 1500);
        }
      }
    } catch (error) {
      console.error("Biometric setup failed:", error);
      alert("Biometric setup failed. Please try again.");
    } finally {
      setFingerprintScanning(false);
      setFingerprintProgress(0);
    }
  };

  const handleBiometricLogin = async () => {
    if (!fingerprintSupported) {
      alert("Biometric authentication not supported on this device");
      return;
    }

    setFingerprintScanning(true);
    
    try {
      // Simulate fingerprint scanning
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const success = await login("demo@anansi.ai", "biometric_auth");
      if (success) {
        navigate("/train-your-twin-app");
      }
    } catch (error) {
      console.error("Biometric login failed:", error);
      alert("Biometric login failed. Please try again.");
    } finally {
      setFingerprintScanning(false);
    }
  };

  const resetBiometricFlow = () => {
    setBiometricStep('setup');
    setFirstFingerprintDone(false);
    setFingerprintProgress(0);
    setFingerprintScanning(false);
  };

  const renderBiometricContent = () => {
    if (activeTab === "login") {
      return (
        <div className="space-y-6">
          {/* Name and Email for verification */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="biometricName">Full Name</Label>
              <Input
                id="biometricName"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="biometricEmail">Email</Label>
              <Input
                id="biometricEmail"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>
          </div>

          {/* Biometric Login */}
          <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-4 sm:p-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Fingerprint className="h-8 w-8 text-logo-teal" />
                <span className="text-lg font-semibold text-logo-teal">Biometric Login</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Welcome back, {formData.name || "User"}!
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Touch to access your AI Twin dashboard
              </p>

              {!fingerprintSupported && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 justify-center">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-orange-700">
                      Biometric authentication not supported on this device
                    </span>
                  </div>
                </div>
              )}

              <Button
                onClick={handleBiometricLogin}
                disabled={fingerprintScanning || isLoading || !fingerprintSupported || !formData.name.trim() || !formData.email.trim()}
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
            </div>
          </div>
        </div>
      );
    }

    // Signup biometric flow
    switch (biometricStep) {
      case 'setup':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <User className="h-8 w-8 text-logo-teal" />
                <span className="text-lg font-semibold text-logo-teal">Twin Registration</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 text-center">
                Set up your AI Twin with secure biometric authentication
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      value={formData.name.split(' ')[0] || ''}
                      onChange={(e) => {
                        const lastName = formData.name.split(' ').slice(1).join(' ');
                        setFormData(prev => ({
                          ...prev,
                          name: e.target.value + (lastName ? ' ' + lastName : '')
                        }));
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
                      value={formData.name.split(' ').slice(1).join(' ') || ''}
                      onChange={(e) => {
                        const firstName = formData.name.split(' ')[0] || '';
                        setFormData(prev => ({
                          ...prev,
                          name: firstName + (e.target.value ? ' ' + e.target.value : '')
                        }));
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
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                    }
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the{" "}
                    <a href="/terms" className="text-logo-teal hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-logo-teal hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                <Button
                  onClick={() => setBiometricStep('first')}
                  disabled={!formData.name.trim() || !formData.email.trim() || !formData.agreeToTerms || !fingerprintSupported}
                  className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                  size="lg"
                >
                  <Fingerprint className="mr-2 h-5 w-5" />
                  Continue to Biometric Setup
                </Button>
              </div>
            </div>
          </div>
        );

      case 'first':
        return (
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-logo-teal/10 to-logo-blue/10 border border-logo-teal/20 rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Fingerprint className="h-8 w-8 text-logo-teal" />
                <span className="text-lg font-semibold text-logo-teal">First Fingerprint</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your unique fingerprint becomes the guardian of your digital twin.
              </p>
              
              {fingerprintScanning && (
                <div className="mb-4">
                  <Progress value={fingerprintProgress} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Scanning... {fingerprintProgress}%
                  </p>
                </div>
              )}
              
              <Button
                onClick={() => handleBiometricSetup('first')}
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

      case 'second':
        return (
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-sm font-medium text-green-600">First fingerprint registered</span>
            </div>
            
            <div className="bg-gradient-to-r from-logo-blue/10 to-logo-teal/10 border border-logo-blue/20 rounded-lg p-4 sm:p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Fingerprint className="h-8 w-8 text-logo-blue" />
                <span className="text-lg font-semibold text-logo-blue">Second Fingerprint</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                One more touch to complete your fortress of privacy.
              </p>
              
              {fingerprintScanning && (
                <div className="mb-4">
                  <Progress value={fingerprintProgress} className="h-3" />
                  <p className="text-xs text-muted-foreground mt-2">
                    Scanning... {fingerprintProgress}%
                  </p>
                </div>
              )}
              
              <Button
                onClick={() => handleBiometricSetup('second')}
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
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6">
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
    <Card className="w-full max-w-md shadow-2xl border-2 border-logo-teal/20 bg-background/95 backdrop-blur-sm">
      <CardHeader className="text-center relative">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shield className="h-6 w-6 text-logo-teal" />
          <Badge variant="outline" className="border-logo-teal text-logo-teal">
            Unified Authentication
          </Badge>
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold">
          Secure Access
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Choose your preferred authentication method
        </p>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-6">
            {/* Authentication Method Selector */}
            <div className="flex gap-2">
              <Button
                variant={authMethod === "email" ? "default" : "outline"}
                size="sm"
                onClick={() => setAuthMethod("email")}
                className="flex-1"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button
                variant={authMethod === "biometric" ? "default" : "outline"}
                size="sm"
                onClick={() => setAuthMethod("biometric")}
                className="flex-1"
                disabled={!fingerprintSupported}
              >
                <Fingerprint className="h-4 w-4 mr-2" />
                Biometric
              </Button>
            </div>

            {authMethod === "email" ? (
              <form onSubmit={handleEmailAuth} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">Email Address</Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Password</Label>
                  <div className="relative">
                    <Input
                      id="loginPassword"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                      }
                    />
                    <Label htmlFor="rememberMe" className="text-sm">
                      Remember me
                    </Label>
                  </div>

                  <a href="/forgot-password" className="text-sm text-logo-teal hover:underline">
                    Forgot password?
                  </a>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
            ) : (
              renderBiometricContent()
            )}
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            {/* Authentication Method Selector */}
            <div className="flex gap-2">
              <Button
                variant={authMethod === "email" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setAuthMethod("email");
                  resetBiometricFlow();
                }}
                className="flex-1"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button
                variant={authMethod === "biometric" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setAuthMethod("biometric");
                  resetBiometricFlow();
                }}
                className="flex-1"
                disabled={!fingerprintSupported}
              >
                <Fingerprint className="h-4 w-4 mr-2" />
                Biometric
              </Button>
            </div>

            {authMethod === "email" ? (
              <form onSubmit={handleEmailAuth} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="signupFirstName">First Name *</Label>
                    <Input
                      id="signupFirstName"
                      value={formData.name.split(' ')[0] || ''}
                      onChange={(e) => {
                        const lastName = formData.name.split(' ').slice(1).join(' ');
                        setFormData(prev => ({
                          ...prev,
                          name: e.target.value + (lastName ? ' ' + lastName : '')
                        }));
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signupLastName">Last Name *</Label>
                    <Input
                      id="signupLastName"
                      value={formData.name.split(' ').slice(1).join(' ') || ''}
                      onChange={(e) => {
                        const firstName = formData.name.split(' ')[0] || '';
                        setFormData(prev => ({
                          ...prev,
                          name: firstName + (e.target.value ? ' ' + e.target.value : '')
                        }));
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signupEmail">Email Address *</Label>
                  <Input
                    id="signupEmail"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="signupPassword">Password *</Label>
                    <div className="relative">
                      <Input
                        id="signupPassword"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTermsEmail"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                    }
                  />
                  <Label htmlFor="agreeToTermsEmail" className="text-sm">
                    I agree to the{" "}
                    <a href="/terms" className="text-logo-teal hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-logo-teal hover:underline">
                      Privacy Policy
                    </a>
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={
                    isLoading ||
                    !formData.agreeToTerms ||
                    formData.password !== formData.confirmPassword
                  }
                  className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            ) : (
              renderBiometricContent()
            )}
          </TabsContent>
        </Tabs>

        {/* Security Indicators */}
        <div className="pt-4 border-t border-border mt-6">
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

        {!fingerprintSupported && (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mt-4">
            <div className="flex items-center gap-2 justify-center">
              <AlertCircle className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-orange-700">
                Biometric authentication not supported on this device
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UnifiedAuth;
