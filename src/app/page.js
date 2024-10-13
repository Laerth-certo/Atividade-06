"use client";

import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Pagina from "./components/Pagina";

export default function CambistaPage() {
  const [moeda, setMoeda] = useState("");
  const [taxaConversao, setTaxaConversao] = useState("");
  const [real, setReal] = useState(1);
  const [equacao, setEquacao] = useState(0);

  function handleMoeda(moedaSelecionada) {
    let taxa = "";
    let taxaValor = 0;

    if (moedaSelecionada === "dolar") {
      taxa = "Taxa de conversão de dólar: 1 real = 0,20 dólares";
      taxaValor = 0.2;
    } else if (moedaSelecionada === "euro") {
      taxa = "Taxa de conversão de euro: 1 real = 0,18 euros";
      taxaValor = 0.18;
    } else if (moedaSelecionada === "bitcoin") {
      taxa = "Taxa de conversão de bitcoin: 1 real = 0,000003 bitcoins";
      taxaValor = 0.000003;
    }

    setMoeda(moedaSelecionada);
    setTaxaConversao(taxa);
    setEquacao(real * taxaValor);
  }

  function handleConvertion(value) {
    let valorConvertido = 0;

    if (moeda === "dolar") {
      valorConvertido = value * 0.2;
    } else if (moeda === "euro") {
      valorConvertido = value * 0.18;
    } else if (moeda === "bitcoin") {
      valorConvertido = value * 0.000003;
    }

    setReal(value);
    setEquacao(valorConvertido);
  }

  function limpar() {
    setMoeda("");
    setTaxaConversao("");
    setReal(1);
    setEquacao(0);
  }

  return (
    <Pagina titulo="Conversor de Moedas">
      <Form>
        <Row md={5}>
          <Col md={6} className="py-2">
            <Form.Group>
              <Form.Label>{taxaConversao}</Form.Label>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Real</Form.Label>
              <Form.Control
                type="number"
                name="real"
                value={real}
                onChange={(e) => {
                  handleConvertion(e.target.value);
                }}
                step={0.01}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>{moeda}</Form.Label>
              <Form.Control
                type="number"
                name="moeda"
                value={equacao}
                readOnly
              />
            </Form.Group>
          </Col>
          <Col md={6} className="py-2">
            <Form.Group className="mb-3">
              <Form.Label>Escolha a moeda:</Form.Label>
              <Form.Select
                name="moeda"
                value={moeda}
                onChange={(e) => {
                  handleMoeda(e.target.value);
                }}
              >
                <option value="">Selecione</option>
                <option value="dolar">Dólar</option>
                <option value="euro">Euro</option>
                <option value="bitcoin">Bitcoin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="text-end">
              <Button onClick={limpar}>Limpar</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Pagina>
  );
}
