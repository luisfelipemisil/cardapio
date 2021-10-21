
Feature: Excluir itens no cardápio
    As a gerente
    I want to excluir itens no cardápio
    So that eu possa remover os itens do meu cardápio de forma que reflitam o que eu sirvo

    Scenario: Excluir item individual - GUI
        Given a tela "Cardapio" com pelo menos um item da lista de itens expandido
        When eu clicar no botão "Remover Item" em um item
        And clicar em "Confirmar" no popup "Confirmar Exclusão" que aparecerá
        Then o item será removido da lista

    Scenario: Excluir item individual - Serviço
        Given o sistema tem seus itens armazenados
        When o sistema receber uma solicitação de excluir um certo item
        Then uma resposta de confirmação de exclusão será enviada ao cliente
        And o sistema removerá tal item do seu armazenamento

    Scenario: Cancelar exclusão individual
        Given a tela "Cardapio" com pelo menos um item da lista de itens expandido
        When eu clicar no botão "Remover Item" em um item
        And clicar em "Cancelar" no popup "Confirmar Exclusão" que aparecerá
        Then o item não será removido da lista

    Scenario: Selecionar um item
        Given a tela "Cardapio"
        When eu clicar na checkbox de um item desmarcado
        Then este item estará marcado

    Scenario: Selecionar vários itens
        Given a tela "Cardapio"
        When eu clicar na checkbox de vários itens desmarcados
        Then estes itens estarão marcados

    Scenario: Selecionar todos os itens
        Given a tela "Cardapio"
        When eu clicar na checkbox do cabeçalho desmarcado da lista
        Then todos os itens serão marcados

    Scenario: Desselecionar um item
        Given a tela "Cardapio"
        When eu clicar na checkbox de um item marcado
        Then este item estará desmarcado

    Scenario: Desselecionar vários itens
        Given a tela "Cardapio"
        When eu clicar na checkbox de vários itens marcados
        Then estes itens estarão desmarcados

    Scenario: Desselecionar todos os itens
        Given a tela "Cardapio"
        When eu clicar na checkbox do cabeçalho marcado da lista
        Then todos os itens serão desmarcados

    Scenario: Excluir itens por seleção - GUI
        Given a tela "Cardapio"
        And pelo menos um item selecionado
        When eu clicar no botão "Excluir" abaixo da lista
        And clicar em "Confirmar" no popup "Confirmar Exclusão" que aparecerá
        Then todos os itens selecionados serão removidos da lista

    Scenario: Excluir itens por seleção - Serviço
        Given o sistema tem seus itens armazenados
        When o sistema receber uma solicitação de excluir por seleção com a lista de itens a serem excluidos
        Then uma resposta de confirmação de exclusão será enviada ao cliente
        And o sistema removerá tais itens do seu armazenamento

    Scenario: Cancelar exclusão por seleção
        Given a tela "Cardapio"
        And pelo menos um item selecionado
        When eu clicar no botão "Excluir" abaixo da lista
        And clicar em "Cancelar" no popup "Confirmar Exclusão" que aparecerá
        Then o(s) item(ns) não será(ão) removido(s) da lista

    Scenario: Negar exclusão de itens
        quando não tiver nada selecionado e eu clicar no botão excluir
        Given a tela "Cardapio"
        And nenhum item selecionado
        When eu clicar no botão "Excluir" abaixo da lista
        Then um snackbar será mostrado, informando que não tenho item algum selecionado