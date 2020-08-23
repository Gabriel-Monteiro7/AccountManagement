/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Container,
  Main,
  Card,
  TitleCard,
  ValueCard,
  FooterCard,
  ContainerChart,
  DateCard,
} from "./styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Header from "components/Header";
import { useSelector, useDispatch } from "react-redux";
import { getRequest } from "store/modules/account/actions";
import { formatPrice, formatDateDefault } from "utils";
export default function Home(props) {
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  let account = useSelector((state) => state.account);
  let { profile } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getRequest(profile));
    setDate(formatDateDefault(new Date()));
  }, []);
  return (
    <Container>
      <Header title={"Suas contas"} />
      <Main>
        <Card>
          <TitleCard>Saldo</TitleCard>
          <ValueCard>{formatPrice(account?.total.balance || 0)}</ValueCard>
          <DateCard>{date}</DateCard>
        </Card>
        <Card>
          <TitleCard>Despesas</TitleCard>
          <ValueCard color={"#FE2E2E"}>
            {formatPrice(account?.total.expenses || 0)}
          </ValueCard>
          <FooterCard>
            {account.expenses.length || 0} despesas paga neste mês
          </FooterCard>
        </Card>
        <Card>
          <TitleCard>Receitas</TitleCard>
          <ValueCard color={"#2EFE2E"}>
            {formatPrice(account?.total.recipes || 0)}
          </ValueCard>
          <FooterCard>
            {account.recipes.length || 0} receitas recebidas neste mês
          </FooterCard>
        </Card>
        <ContainerChart>
          <ResponsiveContainer>
            <AreaChart
              width={1000}
              height={400}
              data={Object.values(account.chart) || []}
              margin={{
                top: 10,
                right: 30,
                left: 50,
                bottom: 0,
              }}
            >
              <Legend verticalAlign="top" height={36} />

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis
                tickSize={1}
                tickFormatter={(value) => {
                  return formatPrice(value);
                }}
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="despesas"
                stackId="1"
                stroke="#FE2E2E"
                fill="#FE2E2E"
                fillRule
              />
              <Area
                type="monotone"
                dataKey="receitas"
                stackId="1"
                stroke="#2EFE2E"
                fill="#2EFE2E"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ContainerChart>
      </Main>
    </Container>
  );
}
