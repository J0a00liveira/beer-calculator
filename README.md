<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/J0a00liveira/beer-calculator" /> <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/J0a00liveira/beer-calculator" />
[![🍺  - Go Drink](https://img.shields.io/badge/🍺_-Go_Drink-2ea44f)](https://)

# 🍺 Beer Calculator API

API básica para cálculo comparativo de preços de cerveja com base em quantidade e volume, aplicando **boas práticas de arquitetura em camadas**, **Domain-Driven Design (DDD)** e **Strategy Pattern**.

Este projeto foi criado com foco em **clareza arquitetural**, **baixo acoplamento** e **facilidade de evolução**, servindo tanto como estudo quanto como material de portfólio.

---

## 🎯 Objetivo

Permitir o cálculo de:

* Preço total da compra
* Volume total adquirido
* Preço por mililitro
* Preço por litro

A partir de dados simples de uma cerveja, mantendo as regras de negócio isoladas do framework web.

---

## 🧱 Arquitetura em Camadas

O projeto segue uma separação clara de responsabilidades:

```
src
├── application
│   └── BeerCalculationService.js
│
├── domain
│   ├── Beer.js
│   ├── Calculator.js
│   └── CalculationResult.js
│
├── strategies
│   └── ByQuantityStrategy.js
│
├── routes
│   └── beer.routes.js
│
└── server.js
```

### 📌 Responsabilidades

| Camada          | Responsabilidade                      |
| --------------- | ------------------------------------- |
| **Domain**      | Regras de negócio puras e entidades   |
| **Strategies**  | Algoritmos de cálculo intercambiáveis |
| **Application** | Orquestração de casos de uso          |
| **Routes**      | Entrada HTTP (Express)                |

---

## 🧠 Diagrama de Arquitetura (Camadas)

```mermaid
graph TD
    A[HTTP Request] --> B[Routes]
    B --> C[Application Service]
    C --> D[Calculator]
    D --> E[Strategy]
    E --> F[Domain Entities]
    F --> G[CalculationResult]
    G --> B
```

---

## 🧩 Diagrama de Classes

```mermaid
classDiagram

    class Beer {
        -String _name
        -Number _volume
        -Number _price
        -Number _amount
        +constructor(name, volume, price, amount)
        +get name()
        +get volume()
        +get price()
        +get amount()
    }

    class Calculator {
        -Strategy _strategy
        +constructor(strategy)
        +calculate(Beer) CalculationResult
    }

    class CalculationResult {
        -Number _totalPrice
        -Number _totalVolume
        -Number _pricePerMl
        -Number _pricePerL
        +constructor(data)
        +get totalPrice()
        +get totalVolume()
        +get pricePerMl()
        +get pricePerL()
        +toObject()
    }

    class ByQuantityStrategy {
        +calculate(Beer) CalculationResult
    }

    class BeerCalculationService {
        -Calculator _calculator
        +calculateByQuantity(data) CalculationResult
    }

    BeerCalculationService --> Calculator : uses
    Calculator --> ByQuantityStrategy : strategy
    Calculator --> CalculationResult : returns
    ByQuantityStrategy --> CalculationResult : creates
    BeerCalculationService --> Beer : creates
```

---

## 🔁 Strategy Pattern

O cálculo é desacoplado através do **Strategy Pattern**, permitindo adicionar novos critérios sem alterar o fluxo principal.

Exemplos futuros:

* `ByVolumeStrategy`
* `ByPackageStrategy`
* `BestCostBenefitStrategy`

---

## 🚀 Endpoint

### `POST /beer/calculate/quantity`

#### Body

```json
{
  "name": "IPA",
  "volume": 350,
  "price": 7.5,
  "amount": 6
}
```

#### Response

```json
{
  "totalPrice": 45,
  "totalVolume": 2100,
  "pricePerMl": 0.02,
  "pricePerL": 21.43
}
```

---

## 🧪 Regras de Negócio

* Todos os valores devem ser **numéricos e positivos**
* O arredondamento é responsabilidade do **domínio**, não da rota
* O preço por ml é normalizado para facilitar comparação prática

---

## 🛠️ Tecnologias

* Node.js
* Express
* JavaScript (ES6+)
* Mermaid (diagramas no GitHub)

---

## 📈 Evoluções Futuras

* Novas strategies de cálculo
* Comparação entre múltiplas cervejas
* Persistência de histórico
* Testes unitários por camada

---
