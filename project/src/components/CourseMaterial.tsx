import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Info } from 'lucide-react';

const courseMaterials = {
  financial: {
    title: 'Introdução à Educação Financeira',
    sections: [
      {
        title: 'Fundamentos do Planejamento Financeiro',
        content: `O planejamento financeiro é a base para uma vida financeira saudável. Ele envolve a organização e controle das suas finanças pessoais, permitindo que você tome decisões mais conscientes sobre seu dinheiro.

Principais aspectos do planejamento financeiro:
• Orçamento mensal detalhado
• Controle de gastos
• Definição de metas financeiras
• Gestão de dívidas
• Criação de reserva de emergência

Um bom planejamento financeiro começa com o autoconhecimento e a compreensão clara dos seus hábitos de consumo. É essencial registrar todas as suas despesas e receitas para ter uma visão realista da sua situação financeira.`
      },
      {
        title: 'Gestão de Orçamento',
        content: `A gestão eficiente do orçamento é fundamental para alcançar seus objetivos financeiros. Um orçamento bem estruturado deve incluir:

1. Receitas:
   • Salário
   • Rendimentos extras
   • Investimentos
   • Outras fontes de renda

2. Despesas Fixas:
   • Moradia (aluguel/financiamento)
   • Contas básicas (água, luz, internet)
   • Transporte
   • Alimentação básica

3. Despesas Variáveis:
   • Lazer
   • Compras
   • Gastos extras
   • Manutenções

4. Investimentos:
   • Reserva de emergência
   • Aposentadoria
   • Objetivos de curto e longo prazo`
      },
      {
        title: 'Investimentos Básicos',
        content: `Investir é essencial para fazer seu dinheiro trabalhar por você. Conheça as principais opções de investimentos:

1. Renda Fixa:
   • Tesouro Direto
   • CDB
   • LCI/LCA
   • Poupança

2. Renda Variável:
   • Ações
   • Fundos de investimento
   • ETFs
   • FIIs (Fundos Imobiliários)

Dicas para começar a investir:
• Comece com investimentos mais conservadores
• Diversifique sua carteira
• Estude antes de investir
• Defina seus objetivos e prazos
• Considere seu perfil de risco`
      },
      {
        title: 'Planejamento de Aposentadoria',
        content: `A aposentadoria é um dos momentos mais importantes da vida financeira. Um bom planejamento pode garantir uma aposentadoria tranquila e confortável.

1. Definindo Objetivos:
   • Determine quanto você precisa para viver confortavelmente.
   • Considere despesas com saúde, lazer e viagens.

2. Opções de Investimento:
   • Previdência Privada
   • Fundos de Aposentadoria
   • Investimentos em Renda Fixa e Variável

3. Importância da Diversificação:
   • Diversifique seus investimentos para reduzir riscos.
   • Considere a alocação de ativos entre renda fixa e variável.

4. Revisão Periódica:
   • Revise seu planejamento anualmente.
   • Ajuste suas contribuições e investimentos conforme necessário.`
      }
    ]
  },
  marketing: {
    title: 'Marketing Digital e Estratégias',
    sections: [
      {
        title: 'Fundamentos do Marketing Digital',
        content: `O marketing digital é essencial para qualquer negócio no mundo moderno. Ele engloba todas as estratégias de marketing realizadas através dos meios digitais.

Pilares do Marketing Digital:
1. Presença Online
   • Website
   • Blog
   • Redes sociais
   • Plataformas específicas

2. Conteúdo
   • Marketing de conteúdo
   • SEO (Search Engine Optimization)
   • Copywriting
   • Storytelling

3. Tráfego
   • Orgânico
   • Pago
   • Direto
   • Referral`
      },
      {
        title: 'Estratégias de SEO',
        content: `SEO (Search Engine Optimization) é fundamental para aumentar a visibilidade do seu site nos mecanismos de busca.

Principais aspectos do SEO:

1. SEO On-page:
   • Otimização de títulos e meta descriptions
   • Estrutura de URLs amigável
   • Otimização de imagens
   • Velocidade do site
   • Mobile-friendly

2. SEO Off-page:
   • Construção de backlinks
   • Marketing de conteúdo
   • Redes sociais
   • Guest posting

3. SEO Técnico:
   • Estrutura do site
   • Sitemap
   • Robots.txt
   • Schema markup
   • Core Web Vitals`
      },
      {
        title: 'Marketing de Conteúdo',
        content: `O marketing de conteúdo é uma estratégia focada em criar e distribuir conteúdo relevante e valioso para atrair e reter um público-alvo bem definido.

Tipos de Conteúdo:
• Blog posts
• Vídeos
• Podcasts
• Infográficos
• E-books
• Webinars
• Newsletters

Estratégias de Distribuição:
1. Canais Próprios:
   • Blog
   • Email marketing
   • Redes sociais

2. Canais Pagos:
   • Google Ads
   • Social Ads
   • Native Ads

3. Canais Conquistados:
   • Menções orgânicas
   • Compartilhamentos
   • Reviews`
      },
      {
        title: 'Análise de Dados em Marketing',
        content: `A análise de dados é crucial para entender o comportamento do consumidor e otimizar campanhas de marketing.

1. Ferramentas de Análise:
   • Google Analytics
   • SEMrush
   • HubSpot

2. Métricas Importantes:
   • Taxa de Conversão
   • Custo por Aquisição (CPA)
   • Retorno sobre Investimento (ROI)

3. A/B Testing:
   • Teste diferentes versões de anúncios e páginas de destino.
   • Analise os resultados para otimizar campanhas futuras.`
      }
    ]
  },
  tech: {
    title: 'Fundamentos da Tecnologia',
    sections: [
      {
        title: 'Programação Básica',
        content: `A programação é a base do desenvolvimento de software e uma habilidade essencial no mundo tecnológico.

Conceitos Fundamentais:
1. Lógica de Programação:
   • Algoritmos
   • Variáveis
   • Estruturas de controle
   • Funções
   • Arrays e objetos

2. Linguagens de Programação:
   • Frontend: HTML, CSS, JavaScript
   • Backend: Python, Java, Node.js
   • Mobile: Swift, Kotlin
   • Banco de dados: SQL

3. Paradigmas de Programação:
   • Programação Orientada a Objetos
   • Programação Funcional
   • Programação Procedural`
      },
      {
        title: 'Inteligência Artificial',
        content: `A Inteligência Artificial (IA) está revolucionando diversos setores e transformando a maneira como interagimos com a tecnologia.

Áreas da IA:
1. Machine Learning:
   • Aprendizado supervisionado
   • Aprendizado não supervisionado
   • Aprendizado por reforço

2. Deep Learning:
   • Redes neurais
   • Processamento de linguagem natural
   • Visão computacional

3. Aplicações:
   • Reconhecimento de padrões
   • Processamento de linguagem natural
   • Sistemas de recomendação
   • Automação de processos`
      },
      {
        title: 'Cloud Computing',
        content: `Cloud Computing revolucionou a forma como armazenamos e processamos dados, oferecendo escalabilidade e flexibilidade.

Modelos de Serviço:
1. IaaS (Infrastructure as a Service):
   • Servidores virtuais
   • Armazenamento
   • Redes

2. PaaS (Platform as a Service):
   • Ambientes de desenvolvimento
   • Bancos de dados
   • Ferramentas de análise

3. SaaS (Software as a Service):
   • Aplicativos web
   • Email
   • CRM
   • Ferramentas colaborativas`
      },
      {
        title: 'Cibersegurança',
        content: `A cibersegurança é fundamental para proteger dados e sistemas contra ataques.

1. Tipos de Ameaças:
   • Malware
   • Phishing
   • Ransomware

2. Medidas de Proteção:
   • Firewalls
   • Antivírus
   • Criptografia

3. Importância da Educação em Segurança:
   • Treinamento de funcionários
   • Políticas de segurança
   • Simulações de ataques`
      }
    ]
  },
  management: {
    title: 'Gestão Empresarial',
    sections: [
      {
        title: 'Liderança e Gestão de Equipes',
        content: `A liderança efetiva é crucial para o sucesso de qualquer organização. Um bom líder deve ser capaz de inspirar e guiar sua equipe.

Aspectos da Liderança:
1. Estilos de Liderança:
   • Autoritário
   • Democrático
   • Liberal
   • Situacional

2. Habilidades Essenciais:
   • Comunicação efetiva
   • Tomada de decisão
   • Resolução de conflitos
   • Delegação
   • Feedback construtivo

3. Desenvolvimento de Equipe:
   • Motivação
   • Engajamento
   • Cultura organizacional
   • Gestão de desempenho`
      },
      {
        title: 'Gestão de Projetos',
        content: `A gestão de projetos é fundamental para garantir a entrega de resultados dentro do prazo, orçamento e qualidade esperados.

Metodologias:
1. Tradicional (Waterfall):
   • Iniciação
   • Planejamento
   • Execução
   • Monitoramento
   • Encerramento

2. Ágil:
   • Scrum
   • Kanban
   • XP
   • Lean

3. Áreas de Conhecimento:
   • Escopo
   • Tempo
   • Custo
   • Qualidade
   • Recursos
   • Comunicação
   • Riscos`
      },
      {
        title: 'Gestão Estratégica',
        content: `A gestão estratégica é essencial para definir a direção da organização e alcançar vantagem competitiva.

Elementos da Gestão Estratégica:
1. Análise Estratégica:
   • Análise SWOT
   • Análise PEST
   • 5 Forças de Porter
   • Análise de stakeholders

2. Formulação Estratégica:
   • Missão e visão
   • Objetivos estratégicos
   • Estratégias competitivas
   • Planos de ação

3. Implementação:
   • Estrutura organizacional
   • Processos
   • Recursos
   • Cultura
   • Sistemas de controle`
      },
      {
        title: 'Gestão de Mudanças',
        content: `A gestão de mudanças é crucial para a adaptação organizacional.

1. Identificação de Necessidades de Mudança:
   • Análise de mercado
   • Feedback de funcionários
   • Avaliação de desempenho

2. Planejamento da Mudança:
   • Definição de objetivos
   • Comunicação clara
   • Envolvimento das partes interessadas

3. Implementação e Avaliação:
   • Execução do plano
   • Monitoramento de resultados
   • Ajustes conforme necessário`
      }
    ]
  }
};

const CourseMaterial = () => {
  const { courseId } = useParams();
  const material = courseMaterials[courseId as keyof typeof courseMaterials];

  if (!material) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 transition-colors">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Material não encontrado</h2>
            <Link to="/courses" className="text-blue-900 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
              Voltar para Cursos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 transition-colors">
      <div className="max-w-4xl mx-auto">
        <Link to="/courses" className="inline-flex items-center text-blue-900 dark:text-blue-400 mb-6 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Cursos
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-900 dark:text-blue-400 mr-3 animate-pulse" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{material.title}</h1>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Info className="h-5 w-5 mr-2" />
              <p>Material completo do curso com conceitos fundamentais e aplicações práticas.</p>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-8">
              {material.sections.map((section, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400 mr-2" />
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p 
                        key={pIndex} 
                        className="text-gray-600 dark:text-gray-300 whitespace-pre-line transition-all duration-300"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseMaterial;