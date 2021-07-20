## Multistep Form Wizard

Componente para controle de formulários que necessitam ser utilizado como "Passo a Passo". Desenvolvido em React e Chakra.

### Vizualização de Exemplo

Imagens do passo a passo

| ![Primeiro passo](https://github.com/ericut/multistep/blob/master/.doc/imgs/step1.png) | ![Outro passo](https://github.com/ericut/multistep/blob/master/.doc/imgs/step2.png) |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |

### Listagem de passos

![Listagem](https://github.com/ericut/multistep/blob/master/.doc/imgs/stepslist.png)

### Hooks

Hook `useMultiStepForm`

![Listagem](https://github.com/ericut/multistep/blob/master/.doc/imgs/useMultiStepForm.png)

- `previousStep()` ir para o passo anterior
- `nextStep()` ir para o próximo passo
- `resetSteps()` ir para o passo inicial
- `goToStep()` ir para o passo selecionado
- `firstStep` verificador se é o primeiro passo [boolean]
- `finalStep` verificador se é o último passo [boolean]

### Instalação

- `npm install` instalar depêndencias
- `npm run start` rodar projeto

### Bibliotecas

[Chakra Ui](https://chakra-ui.com/)

### Futuras implementações

- Passar valores de estilização para customização das cores
