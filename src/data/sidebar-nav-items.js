export default function() {
  return [
    {
      title: "editor",
      class: "sidebar-editor",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ''
    },
    {
      title: "portal da marca",
      class: "sidebar-portal-da-marca",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "workflow",
      class: "sidebar-workflow",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "comunicação",
      class: "sidebar-comunicacao",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "compras",
      class: "sidebar-compras",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "fornecedor",
      class: "sidebar-fornecedor",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "auditoria",
      class: "sidebar-auditoria",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/audit",
    },
    {
      title: "gerenciamento",
      class: "sidebar-gerenciamento",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user",
    },
    {
      title: "configuração",
      class: "sidebar-configuracao",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/config",
    },
    {
      title: "erros",
      class: "sidebar-erros",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
