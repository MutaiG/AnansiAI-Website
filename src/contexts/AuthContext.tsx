import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  email: string;
  name: string;
  twinName?: string;
  completedAutobiography?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      // Update existing user data to use correct naming convention
      if (userData.twinName !== "My Twin") {
        userData.twinName = "My Twin";
        localStorage.setItem("user", JSON.stringify(userData));
      }
      // Ensure we have the user's actual name (for demo, default to James Mbithi)
      if (!userData.name || userData.name.includes("@")) {
        userData.name = "James Mbithi";
        localStorage.setItem("user", JSON.stringify(userData));
      }
      setUser(userData);
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call with dummy data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user already exists in localStorage from previous signup
    const existingUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    const existingUser = existingUsers.find((u: User) => u.email === email);

    let userData: User;
    if (existingUser) {
      // Use existing user data
      userData = existingUser;
    } else {
      // Create new user for demo - accept any email/password combination
      userData = {
        id: "1",
        email,
        name: "James Mbithi", // Default to James Mbithi for demo
        twinName: "My Twin",
        completedAutobiography: Math.random() > 0.5, // Random for demo
      };
    }

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsLoading(false);
    return true;
  };

  const signup = async (
    name: string,
    email: string,
    password: string,
  ): Promise<boolean> => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const userData: User = {
      id: Date.now().toString(),
      email,
      name,
      twinName: "My Twin", // Keep twin name as "My Twin"
      completedAutobiography: false,
    };

    // Store user data
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    // Also store in a list of all users for login lookup
    const existingUsers = JSON.parse(localStorage.getItem("allUsers") || "[]");
    const updatedUsers = [...existingUsers.filter((u: User) => u.email !== email), userData];
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));

    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
