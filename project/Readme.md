## Cenário

Vamos implementar um sistema de vendas online com a possibilidade de realizar pedidos com múltiplos itens, cada um deles com uma quantidade variável, calculando o frete, os impostos, aplicando um cupom de desconto e ainda interagindo com o estoque. Além disso teremos ainda fluxos de pagamento e cancelamento do pedido realizado.

### Algoritmos

> Algoritmo de CPF:
[algoritmo CPF](http://www.macoratti.net/alg_cpf.htm)

> Algoritmo de Volume: 
Formula:  (Altura x Comprimento x Largura) <br>
 - Exemplo: um objeto com as dimensões (A/100 x C/100 x L/100) <br>
 - 100/100 * 30/100 * 10/100 = 0.03 m3 <br>

> Algoritmo da densidade: 
Formula:  (peso / volume) <br>
 - Exemplo: um objeto que possui o peso de 3kg e um volume de 0.03 m3 <br>
 -  3 / 0.03 = 100 <br>

### Tests

#### FIRST
Fast(F) - Os testes devem rodar rápido <br>
Independent(I) - Não devem existir dependência entre os testes, eles devem
poder ser executados de forma isolada. <br>
Repeatable(R) - O resultado deve ser o mesmo independente da quantidade de 
vezes que seja executado. <br>
Self-Validating(S) - O próprio teste deve ter uma saída bem definida que é 
válida ou não, fazendo com que ele passa ou falhe. <br>
Timely(T) - Os testes devem ser escritos antes do código-fonte. <br>

### TDD
Conceito - O TDD é uma forma de construir software.

### Leis do TDD

1 - Você não deve escrever NENHUMA linha de código sem que ANTES exista um teste que falhe. <br>
2 - Você não deve escrever MAIS DO QUE O NECESSÁRIO para evidenciar uma FALHA. <br>
3 - Você não deve escrever código que o suficiente para que o teste passe. <br>

### Test Patterns

#### Dummy
Objetos que criamos apenas para completar a lista de parâmetros que precisamos
passar para invocar um determinado método. <br>

#### Stubs
Objetos que retornam respostas prontas, definidas para um determinado teste, 
por questão de performance ou segurança (exemplo: quando eu executar o método 
fazer pedido preciso que o método getDollarCotation retorne a uma determinada cotação). <br>

#### Spies
Objetos que 'espionam' a execução do método e armazenam os resultados para
verificação posterior (exemplo: quando eu executar o método fazer pedido
preciso saber se o método enviar email foi invocado internamente e com quais 
parâmetros). <br>

#### Mocks
Objetos similares a stubs e spies, permitem que você diga exatamente o que 
quer que ele faça e o testes vai quebrar se isso não acontecer. <br>

#### Fake
Objetos que tem implementações que simulam o funcionamento da instância real,
que seria utilizada em produção.<br>
Exemplo: uma base de dados em memória. <br>

### Estrategias de Testes

#### Unitários (Unit)
- Os testes unitários, testam uma a menor parte de um software, ou seja,
testam determinada funcionalidade ou componente de forma isolada.<br>
- Exemplo: testar um input de texto<br>

#### Integração (Integration)
- Os testes de integração testam varias partes do software de uma única vez.<br>
- Exemplo: testar validação dos inputs de um formulário em uma tela de cadastro.<br>

#### ponta a ponta (E2E) 
- Os testes de ponta a ponta testam uma funcionalidade completa em um ambiente 
que simula o ambiente de produção.<br>
- Exemplo: testar se após o cadastro do cliente, o mesmo será redirecionado para 
a home do site.

### Design Patterns

##### Facade
Abstrai um subsistema mais complexo oferecendo uma interface mais simples de interação.