# Cifra de César

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto/definicão do produto](#2-resumo-do-projeto)
* [3. Considerações gerais do projeto](#3-considerações-gerais-do-projeto)

***

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas com facilidade e não oferecem muita segurança na comunição, mas a cifra de César muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto/definição do produto

* Tema:

O tema do projeto é o tráfico de animais silvestres. Para isso foi desenvolvida uma aplicação web com a qual o usuário pode enviar mensagens de denúncia para a polícia ou órgão de combate ao tráfico de animais silvestres.

Links acessados referente ao tema:

http://www.icmbio.gov.br/portal/ultimas-noticias/20-geral/10494-combater-o-trafico-de-aves-silvestres-e-tema-de-oficina

http://www.renctas.org.br/ambientebrasil-trafico-de-animais-silvestres/

* Usuário:

O usuário é um agente da polícia infiltrado em uma quadrilha de tráfico de animais ou uma pessoa que está sendo coagida de certa forma a participar do tráfico.

* Modo de usar:

Ao acessar o site o usuário simula uma negociação de animais no campo "envie uma mensagem ao comprador" e informa a quantidade a ser negociada no campo "quantidade".
A mensagem deve ser digitada com letras maiúsculas e minúsculas, sem utilizar sinais, acentos ou números.

* Interface:

A interface permite ao usuário:

* Eleger um número indicando quantas posições de deslocamento de caracteres quer que a cifra utilize.
* Inserir uma mensagem (texto) para ser cifrada.
* Ver o resultado da mensagem cifrada.
* Inserir uma mensagem (texto) para ser decifrada.
* Ver o resultado da mensagem decifrada.

As cores, mensagens e imagem discreta foram escolhidas de forma a camuflar o site.

## 3. Considerações gerais do projeto

O projeto foi desenvolvido com VanillaJS, HTML e CSS.

* `src/index.html`: este é o ponto de entrada da sua aplicação. Este arquivo 
 deve conter a marcação HTML e chamar o CSS e JavaScript necessários.
* `src/cipher.js`: aqui foi implementado o objeto cipher, o qual deve estar
  _exportado_ no objeto global (`window`). Este objeto (`cipher`) contém
  dois métodos:
  - `cipher.encode(offset, string)`: `offset` é o número de posições que
      queremos mover para a direita no alfabeto e `string` é a mensagem (texto)
      que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` é o número de posições que
      queremos mover para a esquerda no alfabeto e `string` é a mensagem (texto)
      que queremos decifrar.
* `src/index.js`: aqui você deve escutar os eventos de DOM, chamar
  `cipher.encode()` e `cipher.decode()`.
* `test/cipher.spec.js`: este arquivo contem alguns testes de exemplo e aqui
  você deve implementar os testes para `cipher.encode()` e `cipher.decode()`.



