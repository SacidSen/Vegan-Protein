import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type User = {
  id: string;
  name: string;
  email: string;
};

type StoredUser = User & {
  password: string;
};

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => {
    success: boolean;
    message: string;
  };
  register: (
    name: string,
    email: string,
    password: string
  ) => {
    success: boolean;
    message: string;
  };
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

const USERS_KEY = "vegan-fuel-users";
const SESSION_KEY = "vegan-fuel-session";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const storedSession = localStorage.getItem(SESSION_KEY);

      if (storedSession) {
        setUser(JSON.parse(storedSession));
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }
  }, []);

  const register = (
    name: string,
    email: string,
    password: string
  ) => {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || !cleanEmail || !password) {
      return {
        success: false,
        message: "Please fill in all fields.",
      };
    }

    if (password.length < 6) {
      return {
        success: false,
        message: "Password must be at least 6 characters.",
      };
    }

    const storedUsers: StoredUser[] = JSON.parse(
      localStorage.getItem(USERS_KEY) || "[]"
    );

    const existingUser = storedUsers.find(
      (storedUser) => storedUser.email === cleanEmail
    );

    if (existingUser) {
      return {
        success: false,
        message: "An account with this email already exists.",
      };
    }

    const newUser: StoredUser = {
      id: crypto.randomUUID(),
      name: cleanName,
      email: cleanEmail,
      password,
    };

    const updatedUsers = [...storedUsers, newUser];

    localStorage.setItem(
      USERS_KEY,
      JSON.stringify(updatedUsers)
    );

    const sessionUser: User = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify(sessionUser)
    );

    setUser(sessionUser);

    return {
      success: true,
      message: "Account created successfully.",
    };
  };

  const login = (email: string, password: string) => {
    const cleanEmail = email.trim().toLowerCase();

    const storedUsers: StoredUser[] = JSON.parse(
      localStorage.getItem(USERS_KEY) || "[]"
    );

    const matchingUser = storedUsers.find(
      (storedUser) =>
        storedUser.email === cleanEmail &&
        storedUser.password === password
    );

    if (!matchingUser) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const sessionUser: User = {
      id: matchingUser.id,
      name: matchingUser.name,
      email: matchingUser.email,
    };

    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify(sessionUser)
    );

    setUser(sessionUser);

    return {
      success: true,
      message: "Welcome back!",
    };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      register,
      logout,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider"
    );
  }

  return context;
}