import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Briefcase,
  CreditCard,
  Shield,
  Users,
  Eye,
  EyeOff,
  CheckCircle,
} from "lucide-react";

const AdultSignupForm = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profession: "",
    company: "",
    experience: "",
    plan: "",
    agreeToTerms: false,
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [paymentData, setPaymentData] = useState({
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    country: "",
    postalCode: "",
  });

  const plans = [
    { id: "starter", name: "Starter Plan", price: "$29", period: "one-time" },
    { id: "pro", name: "Pro Plan", price: "$79", period: "one-time" },
  ];

  const paymentMethods = [
    { id: "visa", name: "Visa", icon: "💳" },
    { id: "mastercard", name: "Mastercard", icon: "💳" },
    { id: "amex", name: "American Express", icon: "💳" },
    { id: "paypal", name: "PayPal", icon: "🅿️" },
    { id: "stripe", name: "Stripe", icon: "💳" },
    { id: "apple-pay", name: "Apple Pay", icon: "🍎" },
    { id: "google-pay", name: "Google Pay", icon: "🅖" },
    { id: "bitcoin", name: "Bitcoin", icon: "₿" },
    { id: "bank-transfer", name: "Bank Transfer", icon: "🏦" },
  ];

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Signup data:", signupData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login data:", loginData);
      // Redirect to dashboard or next step
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Welcome to AnansiAI!</h3>
          <p className="text-muted-foreground mb-6">
            Your account has been created successfully. Check your email for
            verification instructions and next steps to start training your AI
            Twin.
          </p>
          <Button className="bg-gradient-to-r from-logo-teal to-logo-blue text-white">
            Continue to Dashboard
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-logo-teal to-logo-blue rounded-full flex items-center justify-center mx-auto mb-4">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-2xl">Adult Twin Training</CardTitle>
        <p className="text-muted-foreground">
          Join thousands of professionals using AI Twins
        </p>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          <TabsContent value="signup" className="space-y-6">
            <form onSubmit={handleSignup} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Users className="h-5 w-5 mr-2 text-logo-teal" />
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={signupData.firstName}
                      onChange={(e) =>
                        setSignupData((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={signupData.lastName}
                      onChange={(e) =>
                        setSignupData((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={signupData.password}
                        onChange={(e) =>
                          setSignupData((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={signupData.confirmPassword}
                      onChange={(e) =>
                        setSignupData((prev) => ({
                          ...prev,
                          confirmPassword: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-logo-teal" />
                  Professional Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="profession">Profession *</Label>
                    <Input
                      id="profession"
                      value={signupData.profession}
                      onChange={(e) =>
                        setSignupData((prev) => ({
                          ...prev,
                          profession: e.target.value,
                        }))
                      }
                      placeholder="e.g., Software Developer"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={signupData.company}
                      onChange={(e) =>
                        setSignupData((prev) => ({
                          ...prev,
                          company: e.target.value,
                        }))
                      }
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Select
                    value={signupData.experience}
                    onValueChange={(value) =>
                      setSignupData((prev) => ({ ...prev, experience: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-2">0-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="11-15">11-15 years</SelectItem>
                      <SelectItem value="16+">16+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Plan Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Choose Your Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        signupData.plan === plan.id
                          ? "border-logo-teal bg-logo-teal/5"
                          : "border-border hover:border-logo-teal/50"
                      }`}
                      onClick={() =>
                        setSignupData((prev) => ({ ...prev, plan: plan.id }))
                      }
                    >
                      <div className="text-center">
                        <h4 className="font-semibold">{plan.name}</h4>
                        <div className="text-2xl font-bold text-logo-teal mt-2">
                          {plan.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {plan.period}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              {signupData.plan && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-logo-teal" />
                    Payment Method
                  </h3>

                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`p-3 border rounded-lg cursor-pointer text-center transition-colors ${
                          paymentData.paymentMethod === method.id
                            ? "border-logo-teal bg-logo-teal/5"
                            : "border-border hover:border-logo-teal/50"
                        }`}
                        onClick={() =>
                          setPaymentData((prev) => ({
                            ...prev,
                            paymentMethod: method.id,
                          }))
                        }
                      >
                        <div className="text-2xl mb-1">{method.icon}</div>
                        <div className="text-xs">{method.name}</div>
                      </div>
                    ))}
                  </div>

                  {paymentData.paymentMethod &&
                    !["paypal", "apple-pay", "google-pay", "bitcoin"].includes(
                      paymentData.paymentMethod,
                    ) && (
                      <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <Input
                              id="cardNumber"
                              value={paymentData.cardNumber}
                              onChange={(e) =>
                                setPaymentData((prev) => ({
                                  ...prev,
                                  cardNumber: e.target.value,
                                }))
                              }
                              placeholder="1234 5678 9012 3456"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cardholderName">
                              Cardholder Name *
                            </Label>
                            <Input
                              id="cardholderName"
                              value={paymentData.cardholderName}
                              onChange={(e) =>
                                setPaymentData((prev) => ({
                                  ...prev,
                                  cardholderName: e.target.value,
                                }))
                              }
                              placeholder="John Doe"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              value={paymentData.expiryDate}
                              onChange={(e) =>
                                setPaymentData((prev) => ({
                                  ...prev,
                                  expiryDate: e.target.value,
                                }))
                              }
                              placeholder="MM/YY"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              value={paymentData.cvv}
                              onChange={(e) =>
                                setPaymentData((prev) => ({
                                  ...prev,
                                  cvv: e.target.value,
                                }))
                              }
                              placeholder="123"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={signupData.agreeToTerms}
                  onCheckedChange={(checked) =>
                    setSignupData((prev) => ({
                      ...prev,
                      agreeToTerms: checked as boolean,
                    }))
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
                  isSubmitting ||
                  !signupData.agreeToTerms ||
                  !signupData.plan ||
                  signupData.password !== signupData.confirmPassword
                }
                className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              >
                {isSubmitting ? "Creating Account..." : "Create Account & Pay"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="login" className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="loginEmail">Email Address</Label>
                  <Input
                    id="loginEmail"
                    type="email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Password</Label>
                  <Input
                    id="loginPassword"
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="rememberMe"
                      checked={loginData.rememberMe}
                      onCheckedChange={(checked) =>
                        setLoginData((prev) => ({
                          ...prev,
                          rememberMe: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="rememberMe" className="text-sm">
                      Remember me
                    </Label>
                  </div>

                  <a
                    href="/forgot-password"
                    className="text-sm text-logo-teal hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-logo-teal to-logo-blue text-white"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Secure checkout with 256-bit SSL encryption</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdultSignupForm;
