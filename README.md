
# 🚀 Projeto DevOps - CI/CD

**Descrição**
Projeto acadêmico para prática de **CI/CD** usando uma instância **EC2 da AWS**:

* Integração Contínua (CI): testes e validações **automáticos** acionados em cada Pull Request (PR).
* Deploy Contínuo (CD): aplicação é **implantada automaticamente** ao mesclar na branch `main`.

---

## 🔧 Tecnologias e Ferramentas

* **AWS EC2** – servidor da aplicação
* **GitHub Actions** (ou outra CI/CD escolhida)
* Linguagem da aplicação: *Node.js*


## 🔁 Fluxo CI/CD

1. Crie um branch `feature/xyz` e abra um PR.
2. O CI executa testes e validações antes da aprovação.
3. Ao mergear na `main`, o CD é acionado: faz deploy na instância EC2.
4. A aplicação atualiza automaticamente sem intervenção manual.
