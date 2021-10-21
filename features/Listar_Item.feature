
Feature: Listar itens do cardápio
    As a gerente
    I want to ver itens registrados no cardápio como uma lista
    So that eu possa ver informações pertinentes aos meus itens de forma resumida

    Scenario: Listar itens - GUI
        Given um usuário conseguiu logar no sistema com credenciais corretas
        When um usuário acessa a tela "Cardapio"
        Then uma lista é exibida, informando os itens armazenados com nome e uma foto do prato, segmentados pelas categorias dos itens
        When o usuário clicar em qualquer lugar de um item
        Then demais detalhes do mesmo serão exibidos, como preço e descrição com ingredientes

    Scenario: Listar itens - Serviço
        Given o sistema tem seus itens armazenados
        When o cliente acessar a tela "Cardapio"
        Then uma lista de itens detalhando nome, preço, descrição com ingredientes e uma foto do prato será enviada ao cliente
        And o sistema tem seus itens armazenados

    Scenario: Não há itens a serem listados - GUI
        Given um usuário conseguiu logar no sistema com credenciais corretas
        When um usuário acessa a tela "Cardapio"
        And não existem itens a serem listados
        Then uma mensagem no lugar da lista é exibida, informando que não há itens a serem listados, sugerindo a criação de alguns

    Scenario: Não há itens a serem listados - Serviço
        Given o sistema tem seus itens armazenados
        When o cliente acessar a tela "Cardapio"
        And não houverem itens a serem listados
        Then um aviso de que não existem itens será enviado ao cliente
        And o sistema tem seus itens armazenados