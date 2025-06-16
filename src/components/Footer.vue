<template>
  <v-footer class="flex flex-col h-full text-center gap-2 py-8 bg-linear-to-b from-[#212F6B] to-[#2674CB]">
    <v-container class="flex flex-col items-center justify-center">
      <div class="flex items-center justify-center gap-3 ">
        <v-btn v-for="icon in icons" :key="icon" :icon="icon" density="comfortable" variant="text"></v-btn>
      </div>

      <v-divider class="my-2" thickness="2" width="50"></v-divider>

      <div class="w-full flex flex-col flex-wrap items-center gap-4 sm:flex-row sm:gap-0">
        <div class="flex flex-col w-4/12 gap-2 items-center">
          <a href="" class="hover:opacity-90 transition">
            <p class="text-md font-medium">Fale conosco</p>
          </a>
          <div @click="toogleTerms" class="cursor-pointer hover:opacity-90 transition">
            <p class="text-md font-medium">Termos de uso</p>
          </div>
          <div @click="tooglePolicy" class="cursor-pointer hover:opacity-90 transition">
            <p class="text-md font-medium">Politica de Privicidade</p>
          </div>
          
          <a href="" class="hover:opacity-90 transition">
            <p class="text-md font-medium">Sobre Nós</p>
          </a>
        </div>

        <div class="flex flex-col w-4/12 gap-2 items-center">
          <a href="" class="flex flex-row gap-2 hover:opacity-90 transition">
            <v-icon color="white">mdi-email-outline</v-icon>
            <p class="text-md font-medium">atendimento@capitalconsig.com.br</p>
          </a>
        </div>

        <div class="flex flex-col w-4/12 gap-2 items-center">
          <a href="" class="hover:opacity-90 transition">
            <p class="text-md font-medium">Fale conosco</p>
            <div class="flex w-full items-center justify-center bg-white shadow-2xl rounded-sm p-2">
              <v-img lazy-src="/images/cc.png" src="/images/cc.png" cover>
              </v-img>
            </div>
          </a>
        </div>
      </div>

      <v-divider class="my-2" thickness="2" width="50"></v-divider>

      <div class="flex flex-col py-4">
        <p class="text-sm">
          © 2015 - {{ new Date().getFullYear() }} — Todos os diretos reservados
        </p>
      </div>

      <v-divider class="my-2" thickness="0" width="50"></v-divider>
    </v-container>
  </v-footer>

  <v-bottom-sheet v-model="isPolicyOpen">
    <v-card
      color="white"
    >
    <v-container>
      <v-card-title>
        Politica de Privacidade
      </v-card-title>
      <v-card-text>
        <v-list lines="three" color="white" class="bg-white">
          <v-list-item
            v-for="item in PolicyData"
            :key="item.value"
            :subtitle="item.subtitle"
            :title="item.title"
          >
            <template v-slot:subtitle>
              <p class="text-md font-medium">{{ item.subtitle }}</p>
            </template>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-container>
    </v-card>
  </v-bottom-sheet>

  <v-bottom-sheet v-model="isTermsOpen">
    <v-card color="white">
      <v-container>
        <v-card-title>
          Termos de Uso
        </v-card-title>
        <v-card-text>
          <v-list-item>
            <template v-slot:title>
              <h3 class="text-lg font-bold mb-2">1. Apresentação</h3>
            </template>
            <template v-slot:subtitle>
              A MasterClin Vantagens preza por relações pautadas na ética, transparência e respeito mútuo. Esta Política de Conduta e Convivência Interna foi elaborada com o objetivo de assegurar que todas as interações entre usuários, colaboradores, representantes, parceiros ou clientes ocorram em um ambiente cordial, seguro e harmonioso.
              Esta política aplica-se a todas as pessoas físicas ou jurídicas que se relacionem com a MasterClin Vantagens, seja como usuários, colaboradoras, representantes, parceiros ou clientes.
            </template>
          </v-list-item>
          
          <v-list lines="90" color="white" class="bg-white">
            <v-list-item
              v-for="item in termsData"
              :key="item.value"
            >
              <template v-slot:title>
                <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
              </template>

              <template v-slot:subtitle>
                <p class="mb-4">
                  {{ item.preText }}
                </p>
                <ul class="list-disc list-inside space-y-1">
                  <li v-for="(point, idx) in item.subtitle" :key="idx">
                    {{ point }}
                  </li>
                </ul>
              </template>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-container>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      isPolicyOpen: false,
      isTermsOpen: false,
      PolicyData: [
        { title: '', subtitle: 'A MasterClin toma todos os cuidados com a privacidade dos seus usuários e tem o comprometimento de preservá-la. Através deste documento, "Política de Privacidade”, listamos os principais pontos para transparência e segurança do usuário. O objetivo deste documento é assegurar nosso compromisso com os dados dos usuários e qualquer dúvida ou interesse maior na parte técnica, entre em contato através de nossos canais de atendimento para auxiliarmos em até 72h (setenta e duas horas).' 
        },
        { title: '1 - Segurança', subtitle: 'O ambiente criptografado garante segurança aos dados dos usuários' },
        { title: '2 - Dados dos usuários', subtitle: 'O cadastramento é realizado através do código e validade informado através da carteirinha de usuário do clube de vantagens. Os dados pessoais podem ser incluídos com a atualização e validação via e-mail. Não é obrigatório a inclusão qualquer documento adicional para a utilização do ambiente. Os dados são guardados em ambiente seguro e não são utilizados para outros fins.' 
        },
        { title: '3 - Link de parceiros externos', subtitle: 'Divulgamos milhares de parceiros e não garantimos o pleno funcionamento dos hyperlinks contidos, assim como o tratamento dos dados quando o usuário entrar no ambiente do mesmo.' 
        },
        { title: '4 - Geolocalização', subtitle: 'Com a autorização do usuário, captamos a latitude e longitude para mostrarmos os estabelecimentos mais próximos para utilização do clube de vantagens. Os dados são guardados em ambiente seguro e não são utilizados para outros fins.' 
        },
        { title: '5 - Clubes de Vantagens Personalizados (White Label)', subtitle: 'A personalização dos clubes de vantagens de clientes seguem a mesma “Política de Privacidade”.' },
      ],
      termsData: [
        {
          value: 2,
          title: '2. Princípios',
          preText: 'A MasterClin Vantagens baseia sua atuação nos seguintes princípios:',
          subtitle: [
            'Respeito mútuo: A convivência deve ser sempre pautada pela civilidade, tolerância e empatia.',
            'Zelo pelo bem-estar: O ambiente de relacionamento deve ser saudável, acolhedor e livre de constrangimentos.',
            'Conduta ética: Todas as ações devem observar padrões éticos, legais e institucionais.',
            'Igualdade de tratamento: Todos devem ser tratados com isonomia, sem qualquer tipo de distinção ou privilégio injustificado.'
          ]
        },
        {
          value: 3,
          title: '3. Condutas Esperadas',
          preText: 'É esperado que todas as partes envolvidas com a MasterClin Vantagens:',
          subtitle: [
            'Tratem uns aos outros com cortesia e profissionalismo.',
            'Escutem e expressem opiniões de forma respeitosa e construtiva;',
            'Mantenham postura adequada em todos os canais de atendimento, sejam eles presenciais, telefônicos ou digitais;',
            'Respeitem os limites e funções de cada;',
            'Promovam a boa convivência e o espírito colaborativo nas interações.'
          ]
        },
        {
          value: 4,
          title: '4. Condutas Inaceitáveis',
          preText: 'Serão consideradas violações à Política de Conduta e Convivência Interna da MasterClin Vantagens os seguintes comportamentos:',
          subtitle: [
            'Usuários ou terceiros:',
            'Linguagem ofensiva, agressiva ou desrespeitosa.',
            'Gritos, xingamentos, insultos ou ameaças.',
            'Desprezo ou deboche intencional.',
            'Racismo, homofobia ou qualquer forma de preconceito.',
            'Assédio verbal, físico ou moral.',
            'Atitudes que geram constrangimento ou insegurança.',
            'Colaboradores:',
            'Atendimento ríspido, impaciente ou negligente.',
            'Falta de cordialidade ou postura profissional.',
            'Comentários ofensivos ou inapropriados.',
            'Desrespeito à individualidade, cultura ou crenças.',
            'Assédio de qualquer natureza.',
            'Discriminação ou favorecimento indevido.'
          ]
        },
        {
          value: 41,
          title: '4.1. Por parte de usuários ou terceiros:',
          preText: '',
          subtitle: [
            'Utilização de linguagem ofensiva, agressiva ou desrespeitosa;',
            'Gritos, xingamentos, insultos ou ameaças direcionadas;',
            'Ato de desprezo ou deboche intencional;',
            'Racismo, homofobia ou qualquer forma de preconceito ou discriminação;',
            'Assédio verbal, físico ou moral;',
            'Atitudes que geram constrangimento ou insegurança.',
          ]
        },
        {
          value: 42,
          title: '4.2. Por parte dos colaboradores da MasterClin Vantagens:',
          preText: '',
          subtitle: [
            'Atendimento ríspido, impaciente ou negligente;',
            'Falta de cordialidade ou de postura profissional;',
            'Comentários ofensivos ou inapropriados;',
            'Desrespeito à individualidade, cultura ou crenças;',
            'Assédio de qualquer natureza;',
            'Discriminação ou favorecimento indevido.',
          ]
        },
        {
          value: 5,
          title: '5. Sanções e Consequências',
          preText: '',
          subtitle: []
        },
        {
          value: 51,
          title: '5.1. Sanções aplicáveis a usuários:',
          preText: 'Caso fique constatado, mediante apuração interna, que um usuário tenha desrespeitado o colaborador ou qualquer pessoa ligada à MasterClin Vantagens, o usuário poderá ser inativado imediatamente, com a consequente perda do direito de acesso aos benefícios oferecidos pelo clube.',
          subtitle: []
        },
        {
          value: 52,
          title: '5.2. Sanções aplicáveis à colaboradores:',
          preText: 'Condutas inadequadas praticadas por colaboradores da MasterClin Vantagens serão apuradas com rigor e poderão resultar em advertência formal, suspensão temporária ou desligamento, de acordo com a gravidade da ocorrência e conforme as normas internas vigentes.',
          subtitle: []
        },
        {
          value: 6,
          title: '6. Processo de Apuração',
          preText: 'Toda denúncia ou relato de violação à presente política deverá ser formalizado por escrito, contendo data, local, descrição dos fatos e, se possível, nomes de testemunhas ou registros (prints, áudios, vídeos, etc.).',
          subtitle: [
            'Todos os casos serão tratados com sigilo, imparcialidade e respeito às partes envolvidas;',
            'Nenhuma retaliação será tolerada contra quem relatar um comportamento inadequado de boa-fé;',
            'Não haverá retaliação contra quem denunciar de boa-fé.',
            'As decisões serão comunicadas formalmente após a apuração completa dos fatos.'
          ]
        },
        {
          value: 7,
          title: '7. Direito de Defesa e Reconsideração',
          preText: 'A parte que tiver sofrido alguma sanção terá direito de apresentar sua defesa, por escrito, no prazo de até 5 (cinco) dias úteis a partir da comunicação oficial. A manifestação será analisada por comissão designada pela MasterClin Vantagens, que poderá manter ou reverter a decisão anterior, com base nos elementos apresentados.',
          subtitle: []
        },
        {
          value: 8,
          title: '8. Atualizações da Política',
          preText: 'A MasterClin Vantagens poderá revisar e atualizar esta Política de Conduta e Convivência sempre que necessário, visando aprimorar suas práticas e reforçar seu compromisso com um ambiente ético, seguro e acolhedor para todas as pessoas. A versão mais atualizada será sempre disponibilizada no site oficial da MasterClin Vantagens.',
          subtitle: []
        }
      ]
    }
  },
  methods: {
    tooglePolicy() {
      this.isPolicyOpen = !this.isPolicyOpen
    },
    toogleTerms() {
      this.isTermsOpen = !this.isTermsOpen
    },
  }
}
</script>