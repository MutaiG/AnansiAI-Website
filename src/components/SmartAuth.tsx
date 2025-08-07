import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/AuthContext";
import {
  Fingerprint,
  Shield,
  CheckCircle,
  AlertCircle,
  Scan,
  Eye,
  EyeOff,
  Mail,
  User,
  ArrowRight
} from "lucide-react";

// Google icon as SVG component
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" className="mr-2">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const SmartAuth = () => {
  const { login, signup, isLoading } = useAuth();
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState<"welcome" | "biometric_login" | "email_login" | "new_user" | "biometric_setup">("welcome");
  const [showPassword, setShowPassword] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  
  // Biometric states
  const [fingerprintSupported, setFingerprintSupported] = useState(false);
  const [fingerprintScanning, setFingerprintScanning] = useState(false);
  const [biometricSetupStep, setBiometricSetupStep] = useState<'first' | 'second' | 'complete'>('first');
  const [fingerprintProgress, setFingerprintProgress] = useState(0);
  const [hasRegisteredBiometrics, setHasRegisteredBiometrics] = useState(false);

  useEffect(() => {
    // Check if biometric authentication is supported
    if (navigator.credentials && window.PublicKeyCredential) {
      setFingerprintSupported(true);
    }

    // Check if user has previously registered biometrics
    const savedBiometrics = localStorage.getItem("biometric_registered");
    if (savedBiometrics) {
      setHasRegisteredBiometrics(true);
    }
  }, []);

  const handleGoogleAuth = async () => {
    try {
      // Simulate Google OAuth flow - in real implementation, use Google OAuth SDK
      const success = await login("google_oauth@gmail.com", "google_auth");
      if (success) {
        navigate("/train-your-twin-app");
      }
    } catch (error) {
      console.error("Google authentication failed:", error);
      alert("Google authentication failed. Please try again.");
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
        // Store biometric registration for future use
        localStorage.setItem("biometric_registered", "true");
        setHasRegisteredBiometrics(true);
        navigate("/train-your-twin-app");
      }
    } catch (error) {
      console.error("Biometric login failed:", error);
      alert("Biometric login failed. Please try again.");
    } finally {
      setFingerprintScanning(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let success = false;
      
      if (authMode === "email_login") {
        success = await login(formData.email, formData.password);
      } else if (authMode === "new_user") {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords don't match");
          return;
        }
        success = await signup(formData.name, formData.email, formData.password);
      }
      
      if (success) {
        if (authMode === "new_user" && fingerprintSupported) {
          // Offer biometric setup for new users
          setAuthMode("biometric_setup");
        } else {
          navigate("/train-your-twin-app");
        }
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      alert("Authentication failed. Please try again.");
    }
  };

  const handleBiometricSetup = async () => {
    if (!fingerprintSupported) return;

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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (biometricSetupStep === 'first') {
        setBiometricSetupStep('second');
      } else {
        setBiometricSetupStep('complete');
        localStorage.setItem("biometric_registered", "true");
        setHasRegisteredBiometrics(true);
        
        setTimeout(() => {
          navigate("/train-your-twin-app");
        }, 2000);
      }
    } catch (error) {
      console.error("Biometric setup failed:", error);
    } finally {
      setFingerprintScanning(false);
      setFingerprintProgress(0);
    }
  };

  const skipBiometricSetup = () => {
    navigate("/train-your-twin-app");
  };

  // Welcome screen - smart detection
  if (authMode === "welcome") {
    return (
      <Card className="w-full max-w-md shadow-2xl border-2 border-logo-teal/20 bg-background/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-6 w-6 text-logo-teal" />
          </div>
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Welcome to AnansiAI
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Your AI Twin is waiting for you
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Primary Google Authentication */}
          <Button
            onClick={handleGoogleAuth}
            disabled={isLoading}
            className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-6 text-lg font-medium shadow-sm"
            size="lg"
          >
            <GoogleIcon />
            Continue with Google
          </Button>

          {/* Biometric Login - Always available if supported */}
          {fingerprintSupported && (
            <Button
              onClick={handleBiometricLogin}
              disabled={fingerprintScanning}
              className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white py-6 text-lg"
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
                  {hasRegisteredBiometrics ? "Welcome Back - Touch to Continue" : "Sign In with Fingerprint"}
                </>
              )}
            </Button>
          )}

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>

          {/* Alternative options */}
          <div className="space-y-2">
            <Button
              onClick={() => setAuthMode("email_login")}
              variant="outline"
              className="w-full"
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email & Password
            </Button>

            <Button
              onClick={() => setAuthMode("new_user")}
              variant="outline"
              className="w-full"
              size="lg"
            >
              <User className="mr-2 h-4 w-4" />
              Create New Account
            </Button>
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
  }

  // Email Login
  if (authMode === "email_login") {
    return (
      <Card className="w-full max-w-md shadow-2xl border-2 border-logo-teal/20 bg-background/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">Sign In with Email</CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter your credentials manually
          </p>
        </CardHeader>
        <CardContent>
          {/* Google option at top */}
          <div className="space-y-4 mb-6">
            <Button
              onClick={handleGoogleAuth}
              disabled={isLoading}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-3 font-medium shadow-sm"
              size="lg"
            >
              <GoogleIcon />
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or use email & password
                </span>
              </div>
            </div>
          </div>

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

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              size="lg"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>

            <Button
              type="button"
              variant="ghost"
              onClick={() => setAuthMode("welcome")}
              className="w-full"
            >
              ← Back
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  // New User Registration
  if (authMode === "new_user") {
    return (
      <Card className="w-full max-w-md shadow-2xl border-2 border-logo-teal/20 bg-background/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">Create Your Account</CardTitle>
          <p className="text-sm text-muted-foreground">
            Start your AI Twin journey
          </p>
        </CardHeader>
        <CardContent>
          {/* Google signup option */}
          <div className="space-y-4 mb-6">
            <Button
              onClick={handleGoogleAuth}
              disabled={isLoading}
              className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 py-3 font-medium shadow-sm"
              size="lg"
            >
              <GoogleIcon />
              Sign up with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or create manually
                </span>
              </div>
            </div>
          </div>

          <form onSubmit={handleEmailAuth} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
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
              type="submit"
              disabled={
                isLoading ||
                !formData.agreeToTerms ||
                formData.password !== formData.confirmPassword
              }
              className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              size="lg"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

            <Button
              type="button"
              variant="ghost"
              onClick={() => setAuthMode("welcome")}
              className="w-full"
            >
              ← Back
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  // Biometric Setup for new users
  if (authMode === "biometric_setup") {
    if (biometricSetupStep === 'complete') {
      return (
        <Card className="w-full max-w-md shadow-2xl border-2 border-logo-teal/20 bg-background/95 backdrop-blur-sm">
          <CardContent className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">
              Biometric Setup Complete!
            </h3>
            <p className="text-sm text-green-700 mb-4">
              Your AI Twin is now secured with your fingerprint
            </p>
            <p className="text-sm text-muted-foreground">
              Redirecting to your dashboard...
            </p>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="w-full max-w-md shadow-2xl border-2 border-logo-teal/20 bg-background/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl font-bold">
            {biometricSetupStep === 'first' ? 'Secure Your Account' : 'Add Backup Fingerprint'}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {biometricSetupStep === 'first' 
              ? 'Add biometric security for faster access'
              : 'One more fingerprint for extra security'
            }
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {fingerprintScanning && (
            <div className="mb-4">
              <Progress value={fingerprintProgress} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Scanning... {fingerprintProgress}%
              </p>
            </div>
          )}
          
          <Button
            onClick={handleBiometricSetup}
            disabled={fingerprintScanning}
            className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white py-6"
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
                {biometricSetupStep === 'first' ? 'Register Fingerprint' : 'Add Second Fingerprint'}
              </>
            )}
          </Button>

          <Button
            onClick={skipBiometricSetup}
            variant="outline"
            className="w-full"
          >
            Skip for Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default SmartAuth;
