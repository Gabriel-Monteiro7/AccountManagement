/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Main, Load, NoRecipes } from "./styles";
import Card from "components/Card";
import Header from "components/Header";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import load from "../../assets/load.json";
export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [loading, setLoading] = useState(true);
  let { recipes } = useSelector((state) => state.account);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <Container>
      <Header
        title={"Receitas cadastradas"}
        label={"Nova receita"}
        path={"Receita"}
      />
      <Main>
        {loading ? (
          <Load>
            <Lottie options={defaultOptions} />
          </Load>
        ) : recipes.length === 0 ? (
          <NoRecipes>Não existe receitas cadastradas</NoRecipes>
        ) : (
          recipes.map((recipes, index) => {
          return <Card data={recipes} key={index} type={"Receita"}/>;
          })
        )}
      </Main>
    </Container>
  );
}
