import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/apresentacao");
  }, []);

  return null;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-8">Escolha sua matéria</h1>
      <div>
        <Link href="/materias/matematica">
          <a className="btn">Matemática</a>
        </Link>
        <Link href="/materias/ciencias">
          <a className="btn">Ciências</a>
        </Link>
        <Link href="/materias/linguas">
          <a className="btn">Línguas</a>
        </Link>
        {/* Adicione links para outras matérias, se necessário */}
      </div>
    </div>
  );
};

export default Home;
