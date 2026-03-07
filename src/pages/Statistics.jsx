import withPremiumAccess from "../hoc/withPremiumAccess";
import { useNavigate } from "react-router-dom";

function Statistics() {
    const navigate = useNavigate();
    function handleUpgrade() {
    localStorage.setItem("premium", "false");
    navigate("/statistics");
  }
  return (
    <div className="flex flex-col justify-self-center mt-8 p-6">
      <h1 className="text-2xl font-bold mb-4">
        Estatísticas da Semana
      </h1>

      <p>Você completou 8 tarefas esta semana </p>
        <button
          onClick={handleUpgrade}
          className="w-3xs mt-2.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
        >
          Cancelar assinatura
        </button>
    </div>
    
  );
}

export default withPremiumAccess(Statistics);