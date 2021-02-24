module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "crea un componente de React",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "nombre del componente",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}.tsx",
        templateFile: "plop/component.js.hbs",
      },
    ],
  });
};
