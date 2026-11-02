import { ServiceItem } from '../types';

export const COMPUTER_SERVICES: ServiceItem[] = [
  {
    id: 'instalacao-office',
    title: 'Instalação e Configuração do Microsoft Office',
    shortDescription: 'Auxílio técnico remoto para download oficial, instalação limpa e configuração de contas do pacote Microsoft Office.',
    fullDescription: 'Serviço focado em auxiliar você na instalação oficial e configuração de programas essenciais como Word, Excel, PowerPoint e Outlook, com vínculo à sua conta Microsoft e validação com sua licença original.',
    iconName: 'office',
    isSpecialHighlight: true,
    dedicatedRoute: 'servico-office',
    includedItems: [
      'Download do instalador oficial direto dos servidores Microsoft',
      'Instalação limpa dos aplicativos (Word, Excel, PowerPoint, Outlook)',
      'Configuração da conta Microsoft e vinculação de perfil',
      'Configuração de sincronização segura com OneDrive',
      'Orientação para inserção e validação da sua chave de licença oficial'
    ],
    requirements: [
      'O cliente deve possuir chave de produto ou assinatura válida da Microsoft (ex.: Microsoft 365 ou Office Home & Business)',
      'Conexão estável à internet para download e sessão remota',
      'Sistema operacional Windows 10 ou Windows 11 atualizado'
    ]
  },
  {
    id: 'configuracao-windows',
    title: 'Configuração e Ajustes do Windows',
    shortDescription: 'Configuração inicial ou personalização técnica do Windows 10 e Windows 11 para estabilidade e produtividade.',
    fullDescription: 'Ajustamos as principais configurações do seu sistema operacional para garantir funcionamento adequado de periféricos, proteção de privacidade, contas de usuário e atualizações críticas de drivers.',
    iconName: 'windows',
    includedItems: [
      'Verificação e instalação de drivers oficiais compatíveis',
      'Ajustes de configurações de privacidade e notificações',
      'Configuração de impressoras, fones e periféricos conectados',
      'Configuração de contas de usuário e permissões do sistema',
      'Verificação da integridade do Windows Update'
    ],
    requirements: [
      'Computador com Windows 10 ou 11 instalado e funcional',
      'Acesso com permissões de administrador do sistema',
      'Conexão de internet ativa para acesso remoto autorizado'
    ]
  },
  {
    id: 'troubleshooting-software',
    title: 'Resolução de Problemas e Erros de Software',
    shortDescription: 'Diagnóstico remoto para falhas em programas, erros de inicialização, incompatibilidades e lentidão atípica.',
    fullDescription: 'Identificação e correção de problemas frequentes como programas que fecham sozinhos, mensagens de erro de DLLs ausentes, conflitos entre aplicativos e instabilidades no uso diário do computador.',
    iconName: 'troubleshoot',
    includedItems: [
      'Diagnóstico de logs de erro do Windows e aplicativos',
      'Correção de falhas de inicialização e dependências (Visual C++, .NET)',
      'Reparo de navegadores com travamentos ou extensões corrompidas',
      'Remoção de softwares indesejados que geram conflitos',
      'Verificação de integridade dos arquivos do sistema (SFC / DISM)'
    ],
    requirements: [
      'Computador inicializando no Windows com acesso à internet',
      'Descrição prévia do erro ou foto/print da mensagem de falha'
    ]
  },
  {
    id: 'otimizacao-pc',
    title: 'Otimização e Limpeza de Desempenho (PC Optimization)',
    shortDescription: 'Limpeza de arquivos temporários e otimização de inicialização para deixar seu computador mais ágil no dia a dia.',
    fullDescription: 'Procedimento técnico voltado para melhorar os tempos de resposta do computador, reduzindo o consumo desnecessário de memória RAM e uso excessivo de disco/CPU causados por serviços residuais.',
    iconName: 'optimization',
    includedItems: [
      'Desativação de programas pesados que iniciam junto com o Windows',
      'Limpeza de cache, arquivos temporários e registros órfãos',
      'Ajuste das opções de plano de energia para melhor resposta',
      'Diagnóstico do estado de saúde do disco rígido / SSD',
      'Recomendações técnicas de upgrades de hardware quando pertinente'
    ],
    requirements: [
      'Computador com sistema Windows 10 ou 11',
      'Conexão remota autorizada pelo cliente'
    ]
  }
];
