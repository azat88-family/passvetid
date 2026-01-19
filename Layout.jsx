import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PawPrint,
  Menu,
  X,
  User
} from "lucide-react";

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 🔐 Auth MOCK (seguro)
  const user = null; // depois você liga Supabase aqui

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
              <PawPrint className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-emerald-600">
              PassVetID
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link to="/register" className="text-sm font-medium">
              Criar conta
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-gray-400">
          © 2024 PassVetID — Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
