// src/hooks/useRegistro.js
import { useState } from "react";

export const useRegistro = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { email, password, nombre } = formData;
      await registroDeCuenta(email, password, nombre);
      alert("Cuenta registrada con éxito");
      // Podrías resetear el formulario aquí si deseas
      setFormData({ nombre: '', email: '', password: '' });
    } catch (err) {
      console.error(err);
      setError("Error al registrar la cuenta");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
  };
};
