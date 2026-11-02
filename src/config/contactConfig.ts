/**
 * Configuração de canais de contato e atendimento da WelligtonTech
 * Número de WhatsApp configurável (DDI + DDD + Número sem espaços ou caracteres especiais)
 */
export const CONTACT_CONFIG = {
  // Placeholder de telefone WhatsApp configurável para suporte e atendimento
  whatsappNumber: "5511999999999", 
  whatsappDisplay: "(11) 99999-9999",
  email: "contato@welligtontech.com.br",
  telegramUrl: "https://t.me",
  businessHours: "Segunda a Sexta, das 09h às 18h (Horário de Brasília)",
  serviceType: "Suporte 100% Remoto via AnyDesk ou TeamViewer autorizados"
};

/**
 * Mensagens pré-formatadas em português para cada serviço de informática
 */
export const SERVICE_MESSAGES = {
  general: "Olá! Gostaria de obter mais informações sobre os serviços de suporte remoto de informática da WelligtonTech.",
  officeInstallation: "Olá! Gostaria de solicitar suporte remoto para instalação e configuração do Microsoft Office. Já possuo a minha licença / chave de ativação oficial.",
  windowsConfig: "Olá! Gostaria de solicitar o serviço de configuração e ajustes do sistema Windows no meu computador.",
  troubleshooting: "Olá! Estou enfrentando erros/travamentos de software e preciso de suporte remoto para resolução do problema.",
  pcOptimization: "Olá! Gostaria de solicitar a otimização remota de desempenho e inicialização do meu computador."
};

/**
 * Gera o link direto do WhatsApp com mensagem pré-preenchida
 */
export const getWhatsAppServiceUrl = (message: string): string => {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
