import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  PawPrint, 
  Building2, 
  Stethoscope,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Register() {
  const navigate = useNavigate();

  const userTypes = [
    {
      type: "tutor",
      title: "Sou Tutor",
      description: "Cuide da saúde do seu pet com prontuários digitais e consultas online",
      icon: PawPrint,
      color: "from-emerald-500 to-teal-600",
      page: "/register/tutor"
    },
    {
      type: "clinic",
      title: "Sou Clínica",
      description: "Gerencie sua clínica veterinária e expanda seu alcance",
      icon: Building2,
      color: "from-blue-500 to-indigo-600",
      page: "/register/clinic"
    },
    {
      type: "vet",
      title: "Sou Veterinário",
      description: "Atenda pacientes online e presencialmente com prontuários digitais",
      icon: Stethoscope,
      color: "from-purple-500 to-pink-600",
      page: "/register/vet"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">

            {/* LOGO IMAGEM */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-white">
  <img
    src="/passvetid-logo.png"
    alt="PassVetID"
    className="w-12 h-12 object-contain"
  />
</div>


          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Criar uma conta
          </h2>
          <p className="text-lg text-gray-600">
            Escolha o tipo de conta que deseja criar
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {userTypes.map((userType, index) => (
            <motion.div
              key={userType.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="border-0 shadow-xl hover:shadow-2xl transition-all cursor-pointer group h-full"
                onClick={() => navigate(userType.page)}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${userType.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <userType.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {userType.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-6 flex-1">
                    {userType.description}
                  </p>

                  <Button
                    className={`w-full bg-gradient-to-r ${userType.color} hover:opacity-90`}
                  >
                    Começar <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Login */}
        <div className="text-center">
          <p className="text-gray-600">
            Já tem uma conta?{" "}
            <Button
              variant="link"
              className="text-emerald-600 font-semibold"
              onClick={() => navigate("/")}
            >
              Fazer login
            </Button>
          </p>
        </div>

      </div>
    </div>
  );
}
