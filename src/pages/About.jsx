function About() {

    return(
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">

      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
        Sobre o Projeto
      </h1>

      <p className="text-justify text-slate-700 dark:text-slate-300 leading-relaxed">
        Este projeto é uma aplicação web de gerenciamento de tarefas desenvolvida
        com foco em <span className="font-semibold">organização, produtividade e aprendizado de conceitos modernos do desenvolvimento front-end</span>.
        A ideia surgiu da necessidade de criar uma ferramenta simples, mas eficiente,
        para acompanhar tarefas do dia a dia, visualizar progresso e manter tudo
        organizado em um único lugar.
      </p>

      <p className="text-justify text-slate-700 dark:text-slate-300 leading-relaxed">
        A aplicação permite criar, organizar e acompanhar tarefas de forma
        intuitiva. Cada tarefa pode conter título, descrição e categoria,
        facilitando a identificação e priorização das atividades. Além disso,
        o usuário pode marcar tarefas como concluídas e visualizar seu progresso
        ao longo do tempo.
      </p>

      <p className="text-justify text-slate-700 dark:text-slate-300 leading-relaxed">
        Durante o desenvolvimento, o projeto foi pensado não apenas como uma
        ferramenta funcional, mas também como uma forma de explorar boas
        práticas de desenvolvimento com React, incluindo organização de
        componentes, reutilização de lógica e criação de funcionalidades
        escaláveis.
      </p>

      <div>
        <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
          Recursos do Projeto
        </h2>

        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
          <li>Criação e gerenciamento de tarefas</li>
          <li>Organização por categorias</li>
          <li>Página de tarefas concluídas</li>
          <li>Tema claro e escuro com persistência</li>
          <li>Página de estatísticas com acesso premium simulado</li>
          <li>Proteção de funcionalidades usando HOC</li>
        </ul>
      </div>

      <p className="text-justify text-slate-700 dark:text-slate-300 leading-relaxed">
        Mais do que apenas um gerenciador de tarefas, este projeto representa
        um passo importante no aprendizado e na prática de tecnologias modernas
        do ecossistema React, com foco em escrever código limpo, reutilizável
        e fácil de manter.
      </p>

    </div>
    )

}

export default About;