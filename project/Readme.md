## Cenário

Vamos implementar um sistema de vendas online com a possibilidade de realizar pedidos com múltiplos itens, cada um deles com uma quantidade variável, calculando o frete, os impostos, aplicando um cupom de desconto e ainda interagindo com o estoque. Além disso teremos ainda fluxos de pagamento e cancelamento do pedido realizado.


## Testes
1 - Não deve fazer um pedido com cpf inválido
2 - Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)
3 - Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)


## Considere


Refatorar o algoritmo de validação de cpf

Sugestões

Utilize a sua linguagem e biblioteca de teste de sua preferência
Faça a modelagem da forma que desejar e não se preocupe por enquanto, vamos 
implementar juntos na aula seguinte com influências de DDD e Clean Architecture

Dicas
Devem existir no mínimo 2 arquivos, um de teste e outro que implementa os cenários propostos
Tente seguir com disciplina, criando primeiro um teste que falha, depois 
fazendo e teste passar e refatorando
Link do funcionamento do algoritmo de cpf: [algoritmo CPF](http://www.macoratti.net/alg_cpf.htm)


# Conceitos Abordados

### FIRST
Fast(F) - Os testes devem roder rápido
Independent(I) - Não devem existir dependência entre os testes, eles devem.
poder ser executados de forma isolada.
Repeatable(R) - O resultado deve ser o mesmo independente da quantidade de 
vezes que seja executado.
Self-Validating(S) - O próprio teste deve ter uma saída bem definida que é 
válida ou não, fazendo com que ele passa ou falhe.
Timely(T) - Os testes devem ser escritos antes do código-fonte.


### TDD
Conceito - O TDD é uma forma de construir software.

Test Patterns

> Dummy 
Objetos que criamos apenas para completar a lista de parâmetros que precisamos 
passar para invocar um determinado método.

> Stubs
Objetos que retornam respostas prontas, definidas para um determinado teste, 
por questão de performance ou segurança (exemplo: quando eu executar o método 
fazer pedido preciso que o método pegar cotação do dólar retorne R$3,00).

> Spies: 
Objetos que 'espionam' a execucão do método e armazenam os resultados para
verificação posterior (exemplo: quando eu executar o método fazer pedido
preciso saber se o método enviar email foi invocado internamente e com quais 
parâmetros).

> Mocks
Objetos similares a stubs e spies, permitem que você diga exatamente o que 
quer que ele faça e o testes vai quebrar se isso não acontecer.

> Fake
Objetos que tem implementações que simulam o funcionamento da instância real,
que seria utilizada em produção (exemplo: uma base de dados em memória).