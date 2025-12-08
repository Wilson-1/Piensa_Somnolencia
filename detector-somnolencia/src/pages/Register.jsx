import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import Card from "../components/Card";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/auth/register", form);
      navigate("/login"); 
    } catch (error) {
      alert("Error al registrar. Verifica tu información.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-4 animate-fadeIn">
      <Card>
        <h1 className="text-3xl font-bold text-center mb-6 glow text-pink-400">
          Crear Cuenta
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="input-neon"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Correo"
            className="input-neon"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="input-neon"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`button-neon w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creando cuenta..." : "Registrarme"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-300">
          ¿Ya tienes cuenta?
          <span
            className="text-cyan-300 cursor-pointer hover:glow ml-1"
            onClick={() => navigate("/login")}
          >
            Inicia sesión
          </span>
        </p>
      </Card>
    </div>
  );
}
