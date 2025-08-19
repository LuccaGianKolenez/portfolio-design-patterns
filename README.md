# Portfolio — Design Patterns (TypeScript + Python)

[![CI](https://github.com/LuccaGianKolenez/portfolio-design-patterns/actions/workflows/ci.yml/badge.svg)](https://github.com/LuccaGianKolenez/portfolio-design-patterns/actions/workflows/ci.yml)

Projeto laboratório para demonstrar **padrões de projeto** implementados de forma **didática, testada e comparável** em duas linguagens (**TypeScript** e **Python**).  
Ideal para **portfólio** e **entrevistas técnicas**: mostra domínio conceitual + boas práticas (testes, organização, CI).

---

## Objetivos
- Implementar padrões clássicos e arquiteturais com código **enxuto e legível**.
- Exibir **paridade TS x Python** para reforçar polivalência.
- Garantir **qualidade**: testes automatizados (Vitest/Pytest) e **CI** no GitHub Actions.
- Servir de **base copiável** para projetos reais (ex.: precificação, notificações, projeções CQRS).

---

## Stack & Ferramentas
**TypeScript**: Node 20+, pnpm 9+, Vitest, TypeScript estrito.  
**Python**: Python 3.11+, pytest, projeto PEP 621 (`pyproject.toml`).  
**CI**: GitHub Actions (jobs para TS e Python).

---

## Padrões implementados
| Categoria | Padrão | TS | Python | Observações |
|---|---|:--:|:--:|---|
| Criação | **Factory** | Encapsula criação: `basic`, `premium` |
| Comportamental | **Strategy** | Regras de preço: desconto percentual/fixo |
| Comportamental | **Observer** | Notificação de mudanças de status de pedido |
| Arquitetural | **CQRS** | Commands/WriteModel, projeções em ReadModel |
| Arquitetural | **Event Sourcing** | Event Store em memória + reidratação de estado |

> Os exemplos são **intencionais e pequenos** para foco nos princípios; podem ser estendidos conforme necessidade.

---

## Estrutura
```
portfolio-design-patterns/
├─ README.md
├─ .gitignore
├─ .github/
│  └─ workflows/
│     └─ ci.yml
├─ typescript/
│  ├─ package.json
│  ├─ tsconfig.json
│  ├─ vitest.config.ts
│  ├─ src/
│  │  └─ patterns/
│  │     ├─ factory/
│  │     ├─ strategy/
│  │     ├─ observer/
│  │     ├─ cqrs/
│  │     └─ event-sourcing/
│  └─ tests/
│     ├─ factory.spec.ts
│     ├─ strategy.spec.ts
│     ├─ observer.spec.ts
│     ├─ cqrs.spec.ts
│     └─ event-sourcing.spec.ts
└─ python/
   ├─ pyproject.toml
   ├─ src/
   │  └─ patterns/
   │     ├─ factory/
   │     ├─ strategy/
   │     ├─ observer/
   │     ├─ cqrs/
   │     └─ event_sourcing/
   └─ tests/
      ├─ test_factory.py
      ├─ test_strategy.py
      ├─ test_observer.py
      ├─ test_cqrs.py
      └─ test_event_sourcing.py
```

---

## Como rodar

### TypeScript
```bash
cd typescript
pnpm install
pnpm test          # roda toda a suíte (Vitest)
pnpm build         # opcional: compila para dist/
```

### Python
```bash
cd python
python3 -m venv .venv
source .venv/bin/activate

python -m pip install --upgrade pip setuptools wheel
pip install -e '.[dev]'   # use aspas no zsh
pytest -q

deactivate
```

---

## Demos rápidas

### Factory
```ts
// TS
import { ProductFactory } from './src/patterns/factory/ProductFactory';
ProductFactory.create('premium').compute(100); // 125
```
```python
# Python
from patterns.factory.product_factory import create
create("premium").compute(100)  # 125.0
```

### Strategy
```ts
import { PriceCalculator } from './src/patterns/strategy/Context';
import { PercentageDiscount } from './src/patterns/strategy/ConcreteStrategies';
new PriceCalculator(new PercentageDiscount(10)).calc(200); 
```

### Observer
```ts
import { Order } from './src/patterns/observer/OrderSubject';
const o = new Order(); o.status = 'paid';
```

### CQRS
- `Commands` publicam eventos no **EventBus**;  
- `ReadModel` projeta eventos e serve as **Queries**.

### Event Sourcing
- A entidade reconstrói estado **a partir de eventos** armazenados (Event Store);  
- Reidratação garante **auditoria** e previsibilidade.

---

## Filosofia dos testes
- Casos **claros e mínimos** por padrão, cobrindo “happy path” + erros.
- Testes mantêm a API pública estável e segura contra regressões.
- Suites independentes (TS e Py) para validar paridade de comportamento.

---

## SObre
> Este repositório demonstra Factory, Strategy e Observer, além de CQRS e Event Sourcing, implementados em TypeScript e Python, com testes e CI. Uso exemplos curtos para focar em princípios como OCP, SRP e separação de leitura/escrita. É um laboratório que eu reaproveito em projetos reais.

---

## Contribuição
1. Crie uma branch: `feat/<padrao>`  
2. Rode os testes em **TS** e **Py**  
3. Abra PR com descrição do problema/solução + evidências (testes)

---
