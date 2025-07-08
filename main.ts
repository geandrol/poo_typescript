import { Animal } from "./src/model/animal";
import ler = require("readline-sync");
function main(){

  const list : Array<Animal> = new  Array<Animal>();

   while (true) {

    console.log("\n=== MENU ===");
      console.log("1 - Cadastrar Animal");
      console.log("2 - Listar Animais");
      console.log("0 - Sair");
    
      const opcao = ler.questionInt("Escolha uma opção: ");

      switch (opcao) {
        case 1:
          console.log("\n--- Cadastro de Animal ---");
          const nome = ler.question("Nome: ");
          const tipo = ler.question("Tipo: ");
          const idade = ler.questionInt("Idade: ");
          const som = ler.question("Som: ");

          const animal = new Animal(nome,tipo,idade,som);
          list.push(animal)
           console.log("✅ Animal cadastrado com sucesso!");

          break;
          case 2:
          console.log("\n--- Lista de Animais ---");
          if (list.length === 0) {
            console.log("⚠️ Nenhum animal cadastrado.");
          } else {
            console.table(list);
          }
          break;
           case 0:
          console.log("👋 Saindo do sistema. Até mais!");
          process.exit(0); // encerra o programa
    
        default:
          console.log("❌ Opção inválida! Tente novamente.");
          break;
      }

   }

}
main();