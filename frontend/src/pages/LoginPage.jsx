import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import AuthAPI from "../services/authAPI";
import AuthContext from "../contexts/AuthContext";
import Field from "../components/forms/Field";
import { toast } from "react-toastify";

const LoginPage = ({ history }) => {
  const { setIsAuthenticated } = useContext(AuthContext);
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  // Gestion des champs
  const handleChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  // Gestion du submit
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await AuthAPI.authenticate(credentials);
      setError("");
      setIsAuthenticated(true);
      toast.success("Vous êtes désormais connecté !");
      navigate("/");
    } catch (error) {
      setError(
        "Aucun compte ne possède cette adresse email ou alors les informations ne correspondent pas !"
      );
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <>
      <h1>Connexion à l'application</h1>

      <form onSubmit={handleSubmit}>
        <Field
          label="Adresse email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Adresse email de connexion"
          error={error}
        />

        <Field
          name="password"
          label="Mot de passe"
          value={credentials.password}
          onChange={handleChange}
          type="password"
          error=""
        />

        <div className="form-group mt-3">
          <button type="submit" className="btn btn-success">
            Je me connecte
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginPage;