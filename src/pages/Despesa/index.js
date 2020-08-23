/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Main, Load, NoExpenses } from "./styles";
import Card from "components/Card";
import Header from "components/Header";
import { useSelector} from "react-redux";
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
  let { expenses } = useSelector((state) => state.account);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <Container>
      <Header
        title={"Despesas cadastradas"}
        label={"Nova despesa"}
        path={"Despesa"}
      />
      <Main>
        {loading ? (
          <Load>
            <Lottie options={defaultOptions} />
          </Load>
        ) : expenses.length === 0 ? (
          <NoExpenses>Não existe despesas cadastradas</NoExpenses>
        ) : (
          expenses.map((expense, index) => {
            return <Card data={expense} key={index} type={"Despesa"}/>;
          })
        )}
      </Main>
    </Container>
  );
}
