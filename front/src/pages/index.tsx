import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Incluímos router como dependência para evitar warnings
    router.push("/apresentacao");
  }, [router]);

  // Enquanto o redirecionamento acontece, pode mostrar um carregando
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-8 text-2xl font-bold">Redirecionando...</h1>
    </div>
  );
};

export default Home;
