import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useGrades } from '../context/GradesContext';

const quizzes = {
  financial: {
    title: 'Introdução à Educação Financeira',
    questions: [
      {
        id: 1,
        question: 'Qual é o primeiro passo para um planejamento financeiro eficiente?',
        options: [
          'Fazer investimentos de alto risco',
          'Criar um orçamento mensal detalhado',
          'Pedir empréstimos',
          'Gastar todo o salário'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'O que é uma reserva de emergência?',
        options: [
          'Dinheiro guardado para viagens',
          'Investimento em ações',
          'Dinheiro reservado para despesas inesperadas',
          'Conta para gastos supérfluos'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Qual a importância do controle de gastos?',
        options: [
          'Permite gastar mais',
          'Ajuda a identificar despesas desnecessárias',
          'Aumenta as dívidas',
          'Não tem importância'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Qual é a melhor forma de investir a longo prazo?',
        options: [
          'Ações de empresas',
          'Poupança',
          'Criptomoedas',
          'Tesouro Direto'
        ],
        correctAnswer: 3
      },
      {
        id: 5,
        question: 'O que é um orçamento mensal?',
        options: [
          'Um documento que lista todas as despesas e receitas',
          'Um tipo de investimento',
          'Um relatório de gastos',
          'Um plano de aposentadoria'
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'Qual é a função de um consultor financeiro?',
        options: [
          'Ajudar a gastar mais',
          'Orientar sobre investimentos e finanças pessoais',
          'Vender produtos financeiros',
          'Realizar auditorias'
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'O que é taxa de juros?',
        options: [
          'O valor que se paga por um empréstimo',
          'O valor que se recebe ao investir',
          'Uma taxa de imposto',
          'Um tipo de investimento'
        ],
        correctAnswer: 0
      },
      {
        id: 8,
        question: 'Qual é a diferença entre renda fixa e renda variável?',
        options: [
          'Renda fixa tem retorno garantido, renda variável não',
          'Renda variável é mais segura que renda fixa',
          'Não há diferença',
          'Renda fixa é para aposentadoria'
        ],
        correctAnswer: 0
      },
      {
        id: 9,
        question: 'O que é um financiamento?',
        options: [
          'Um tipo de investimento',
          'Um empréstimo para aquisição de bens',
          'Uma forma de poupança',
          'Um tipo de taxa de juros'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'Qual é a importância de ter um fundo de emergência?',
        options: [
          'Para realizar investimentos',
          'Para cobrir despesas inesperadas',
          'Para comprar bens de consumo',
          'Para pagar dívidas'
        ],
        correctAnswer: 1
      },
      {
        id: 11,
        question: 'O que é diversificação de investimentos?',
        options: [
          'Investir em diferentes ativos para reduzir riscos',
          'Investir em um único ativo',
          'Aumentar o valor de um ativo',
          'Vender todos os ativos'
        ],
        correctAnswer: 0
      },
      {
        id: 12,
        question: 'Qual é a função de um cartão de crédito?',
        options: [
          'Permitir compras a prazo',
          'Aumentar a renda',
          'Reduzir despesas',
          'Investir em ações'
        ],
        correctAnswer: 0
      },
      {
        id: 13,
        question: 'O que é um empréstimo consignado?',
        options: [
          'Um empréstimo com garantia',
          'Um empréstimo descontado diretamente da folha de pagamento',
          'Um tipo de investimento',
          'Um empréstimo sem juros'
        ],
        correctAnswer: 1
      },
      {
        id: 14,
        question: 'Qual é a melhor forma de economizar dinheiro?',
        options: [
          'Gastar menos do que se ganha',
          'Investir em ações',
          'Pedir empréstimos',
          'Não comprar nada'
        ],
        correctAnswer: 0
      },
      {
        id: 15,
        question: 'O que é um plano de aposentadoria?',
        options: [
          'Um plano para gastar mais',
          'Um plano para garantir uma renda na aposentadoria',
          'Um tipo de investimento',
          'Um empréstimo'
        ],
        correctAnswer: 1
      }
    ]
  },
  marketing: {
    title: 'Marketing Digital e Estratégias',
    questions: [
      {
        id: 1,
        question: 'O que é marketing digital?',
        options: [
          'Apenas vendas online',
          'Estratégias de marketing em meios digitais',
          'Criar websites',
          'Enviar emails'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Qual a importância do SEO?',
        options: [
          'Não é importante',
          'Apenas para grandes empresas',
          'Melhora o posicionamento nos buscadores',
          'Diminui o tráfego do site'
        ],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'O que é taxa de conversão?',
        options: [
          'Taxa de câmbio',
          'Porcentagem de visitantes que realizam uma ação desejada',
          'Número de visitas ao site',
          'Quantidade de posts nas redes sociais'
        ],
        correctAnswer: 1
      },
      {
        id: 4,
        question: 'Qual é a função do marketing de conteúdo?',
        options: [
          'Vender produtos diretamente',
          'Criar e distribuir conteúdo relevante para atrair clientes',
          'Aumentar o preço dos produtos',
          'Fazer anúncios em TV'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'O que é um funil de vendas?',
        options: [
          'Um tipo de produto',
          'Um modelo que representa a jornada do cliente até a compra',
          'Uma técnica de marketing',
          'Um tipo de investimento'
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'Qual é a principal métrica para medir o sucesso de uma campanha de email marketing?',
        options: [
          'Número de emails enviados',
          'Taxa de abertura',
          'Número de seguidores',
          'Taxa de rejeição'
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'O que é branding?',
        options: [
          'Apenas criar um logotipo',
          'Construir e gerenciar a imagem de uma marca',
          'Vender produtos',
          'Fazer anúncios'
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'Qual é a função das redes sociais no marketing?',
        options: [
          'Aumentar o número de seguidores',
          'Interagir com o público e promover produtos',
          'Apenas fazer anúncios',
          'Criar conteúdo apenas para entretenimento'
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'O que é PPC (Pay-Per-Click)?',
        options: [
          'Um tipo de marketing de conteúdo',
          'Um modelo de publicidade onde se paga por cada clique no anúncio',
          'Um tipo de SEO',
          'Um tipo de rede social'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'Qual é a importância da análise de dados no marketing?',
        options: [
          'Não é importante',
          'Ajuda a entender o comportamento do consumidor e otimizar campanhas',
          'Aumenta o custo das campanhas',
          'Diminui a eficácia das campanhas'
        ],
        correctAnswer: 1
      },
      {
        id: 11,
        question: 'O que é remarketing?',
        options: [
          'Anúncios para novos clientes',
          'Anúncios direcionados a pessoas que já interagiram com a marca',
          'Um tipo de SEO',
          'Um tipo de conteúdo'
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        question: 'Qual é a função de um influenciador digital?',
        options: [
          'Criar produtos',
          'Promover produtos e serviços para seus seguidores',
          'Aumentar o preço dos produtos',
          'Fazer anúncios em TV'
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        question: 'O que é um lead?',
        options: [
          'Um cliente que já comprou',
          'Uma pessoa que demonstrou interesse em um produto ou serviço',
          'Um tipo de produto',
          'Um tipo de marketing'
        ],
        correctAnswer: 1
      },
      {
        id: 14,
        question: 'Qual é a importância do conteúdo visual no marketing?',
        options: [
          'Não é importante',
          'Aumenta o engajamento e a retenção de informações',
          'Diminui o custo das campanhas',
          'Aumenta o número de seguidores'
        ],
        correctAnswer: 1
      },
      {
        id: 15,
        question: 'O que é uma persona?',
        options: [
          'Um tipo de cliente',
          'Um perfil semi-fictício que representa o cliente ideal',
          'Um tipo de produto',
          'Um tipo de marketing'
        ],
        correctAnswer: 1
      }
    ]
  },
  tech: {
    title: 'Fundamentos da Tecnologia',
    questions: [
      {
        id: 1,
        question: 'O que é cloud computing?',
        options: [
          'Um tipo de computador',
          'Computação baseada em servidores remotos',
          'Um programa de computador',
          'Uma rede social'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'O que é inteligência artificial?',
        options: [
          'Robôs humanoides',
          'Sistemas que simulam a inteligência humana',
          'Computadores rápidos',
          'Internet das coisas'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'O que é cibersegurança?',
        options: [
          'Proteção de dados e sistemas digitais',
          'Um tipo de vírus',
          'Uma rede social segura',
          'Um programa de computador'
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'O que é um algoritmo?',
        options: [
          'Um tipo de software',
          'Uma sequência de instruções para resolver um problema',
          'Um tipo de hardware',
          'Um sistema operacional'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'Qual é a função de um sistema operacional?',
        options: [
          'Gerenciar hardware e software de um computador',
          'Criar aplicativos',
          'Proteger dados',
          'Fazer backup de arquivos'
        ],
        correctAnswer: 0
      },
      {
        id: 6,
        question: 'O que é programação?',
        options: [
          'Criar websites',
          'Escrever instruções para um computador executar',
          'Fazer design gráfico',
          'Gerenciar redes sociais'
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'O que é um banco de dados?',
        options: [
          'Um tipo de software',
          'Um sistema para armazenar e gerenciar dados',
          'Um tipo de hardware',
          'Um programa de computador'
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'O que é HTML?',
        options: [
          'Uma linguagem de programação',
          'Uma linguagem de marcação para criar páginas web',
          'Um tipo de software',
          'Um sistema operacional'
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'O que é CSS?',
        options: [
          'Uma linguagem de programação',
          'Uma linguagem de estilo para formatar páginas web',
          'Um tipo de software',
          'Um sistema operacional'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'O que é JavaScript?',
        options: [
          'Uma linguagem de programação para web',
          'Um tipo de software',
          'Um sistema operacional',
          'Uma linguagem de marcação'
        ],
        correctAnswer: 0
      },
      {
        id: 11,
        question: 'O que é um framework?',
        options: [
          'Um tipo de software',
          'Uma estrutura de suporte para desenvolver aplicações',
          'Um sistema operacional',
          'Uma linguagem de programação'
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        question: 'O que é uma API?',
        options: [
          'Um tipo de software',
          'Um conjunto de regras para comunicação entre sistemas',
          'Um sistema operacional',
          'Uma linguagem de programação'
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        question: 'O que é um servidor?',
        options: [
          'Um tipo de computador que fornece serviços a outros computadores',
          'Um tipo de software',
          'Um sistema operacional',
          'Uma linguagem de programação'
        ],
        correctAnswer: 0
      },
      {
        id: 14,
        question: 'O que é um navegador?',
        options: [
          'Um tipo de software para acessar a internet',
          'Um tipo de hardware',
          'Um sistema operacional',
          'Uma linguagem de programação'
        ],
        correctAnswer: 0
      },
      {
        id: 15,
        question: 'O que é um site responsivo?',
        options: [
          'Um site que se adapta a diferentes tamanhos de tela',
          'Um site que carrega rapidamente',
          'Um site que é seguro',
          'Um site que tem muitos gráficos'
        ],
        correctAnswer: 0
      }
    ]
  },
  management: {
    title: 'Gestão Empresarial',
    questions: [
      {
        id: 1,
        question: 'O que é gestão de projetos?',
        options: [
          'Apenas cronogramas',
          'Planejamento e execução de projetos',
          'Reuniões diárias',
          'Contratação de funcionários'
        ],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'Qual a importância da liderança?',
        options: [
          'Apenas dar ordens',
          'Motivar e guiar equipes',
          'Fazer relatórios',
          'Não é importante'
        ],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'O que é gestão de processos?',
        options: [
          'Organização e otimização de fluxos de trabalho',
          'Apenas documentação',
          'Contratar pessoas',
          'Fazer reuniões'
        ],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'Qual é a função de um gerente?',
        options: [
          'Apenas supervisionar',
          'Planejar, organizar, liderar e controlar',
          'Fazer o trabalho de todos',
          'Aumentar os lucros'
        ],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'O que é um plano estratégico?',
        options: [
          'Um plano para aumentar vendas',
          'Um documento que define a direção e objetivos de uma organização',
          'Um tipo de relatório',
          'Um plano de marketing'
        ],
        correctAnswer: 1
      },
      {
        id: 6,
        question: 'Qual é a importância da comunicação na gestão?',
        options: [
          'Não é importante',
          'Facilita a troca de informações e a colaboração',
          'Aumenta os custos',
          'Diminui a produtividade'
        ],
        correctAnswer: 1
      },
      {
        id: 7,
        question: 'O que é análise SWOT?',
        options: [
          'Uma técnica de vendas',
          'Uma ferramenta para análise de forças, fraquezas, oportunidades e ameaças',
          'Um tipo de relatório',
          'Um plano de marketing'
        ],
        correctAnswer: 1
      },
      {
        id: 8,
        question: 'Qual é a função de um líder?',
        options: [
          'Dar ordens',
          'Inspirar e motivar a equipe',
          'Fazer relatórios',
          'Contratar pessoas'
        ],
        correctAnswer: 1
      },
      {
        id: 9,
        question: 'O que é gestão de mudanças?',
        options: [
          'Apenas fazer mudanças',
          'Planejar e implementar mudanças organizacionais',
          'Aumentar os lucros',
          'Fazer reuniões'
        ],
        correctAnswer: 1
      },
      {
        id: 10,
        question: 'Qual é a importância do feedback?',
        options: [
          'Não é importante',
          'Ajuda a melhorar o desempenho e a comunicação',
          'Aumenta os custos',
          'Diminui a produtividade'
        ],
        correctAnswer: 1
      },
      {
        id: 11,
        question: 'O que é um KPI?',
        options: [
          'Um tipo de relatório',
          'Um indicador-chave de desempenho',
          'Um plano de marketing',
          'Um tipo de reunião'
        ],
        correctAnswer: 1
      },
      {
        id: 12,
        question: 'Qual é a função de um mentor?',
        options: [
          'Dar ordens',
          'Orientar e apoiar o desenvolvimento de um profissional',
          'Fazer relatórios',
          'Contratar pessoas'
        ],
        correctAnswer: 1
      },
      {
        id: 13,
        question: 'O que é gestão de riscos?',
        options: [
          'Apenas evitar riscos',
          'Identificar, avaliar e mitigar riscos em projetos',
          'Aumentar os lucros',
          'Fazer reuniões'
        ],
        correctAnswer: 1
      },
      {
        id: 14,
        question: 'Qual é a importância da motivação na equipe?',
        options: [
          'Não é importante',
          'Aumenta a produtividade e o engajamento',
          'Aumenta os custos',
          'Diminui a produtividade'
        ],
        correctAnswer: 1
      },
      {
        id: 15,
        question: 'O que é um projeto?',
        options: [
          'Um tipo de produto',
          'Um esforço temporário para criar um produto ou serviço único',
          'Um tipo de relatório',
          'Um plano de marketing'
        ],
        correctAnswer: 1
      }
    ]
  }
};

const CourseQuiz = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { addGrade } = useGrades();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime] = useState(new Date());
  const quiz = quizzes[courseId as keyof typeof quizzes];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds

  useEffect(() => {
    if (!submitted && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0 && !submitted) {
      handleSubmit(new Event('submit') as any);
    }
  }, [timeLeft, submitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const calculateTimeSpent = () => {
    const endTime = new Date();
    const timeSpentMs = endTime.getTime() - startTime.getTime();
    const minutes = Math.floor(timeSpentMs / (1000 * 60));
    const seconds = Math.floor((timeSpentMs % (1000 * 60)) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const totalQuestions = quiz.questions.length;
    let correctAnswers = 0;
    
    quiz.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const finalScore = (correctAnswers / totalQuestions) * 100;
    setScore(finalScore);
    setShowResults(true);

    addGrade({
      courseId: courseId as string,
      courseName: quiz.title,
      grade: finalScore,
      completedAt: new Date().toISOString().split('T')[0],
      category: quiz.title,
      questionsCorrect: correctAnswers,
      totalQuestions,
      timeSpent: calculateTimeSpent()
    });

    setTimeout(() => {
      navigate('/grades');
    }, 3000);
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12 px-4 transition-colors">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Curso não encontrado</h2>
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
      <div className="max-w-3xl mx-auto">
        <Link to="/courses" className="inline-flex items-center text-blue-900 dark:text-blue-400 mb-6 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Voltar para Cursos
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{quiz.title}</h1>
            <div className="text-lg font-medium text-gray-700 dark:text-gray-200">
              Tempo restante: <span className={`${timeLeft < 300 ? 'text-red-600 dark:text-red-400' : 'text-blue-900 dark:text-blue-400'}`}>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 dark:text-green-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Prova finalizada!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Sua nota: <span className="font-bold text-xl text-blue-900 dark:text-blue-400">{score.toFixed(1)}%</span>
              </p>
              {showResults && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Respostas:</h3>
                  {quiz.questions.map((question, index) => (
                    <div key={question.id} className="mb-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <p className="font-medium text-gray-900 dark:text-white">{index + 1}. {question.question}</p>
                      <p className={`mt-2 ${answers[question.id] === question.correctAnswer ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {answers[question.id] === question.correctAnswer ? (
                          <span className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Resposta correta
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <AlertCircle className="h-5 w-5 mr-2" />
                            Resposta incorreta. A resposta correta era: {question.options[question.correctAnswer]}
                          </span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Questão {currentQuestion + 1} de {quiz.questions.length}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={previousQuestion}
                      disabled={currentQuestion === 0}
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        currentQuestion === 0
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      } transition-colors`}
                    >
                      Anterior
                    </button>
                    <button
                      type="button"
                      onClick={nextQuestion}
                      disabled={currentQuestion === quiz.questions.length - 1}
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        currentQuestion === quiz.questions.length - 1
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      } transition-colors`}
                    >
                      Próxima
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {quiz.questions[currentQuestion].question}
                  </p>
                  <div className="space-y-3">
                    {quiz.questions[currentQuestion].options.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                          answers[quiz.questions[currentQuestion].id] === optionIndex
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-900 dark:border-blue-400'
                            : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${quiz.questions[currentQuestion].id}`}
                          value={optionIndex}
                          checked={answers[quiz.questions[currentQuestion].id] === optionIndex}
                          onChange={() => 
                            setAnswers(prev => ({
                              ...prev,
                              [quiz.questions[currentQuestion].id]: optionIndex
                            }))
                          }
                          className="h-4 w-4 text-blue-900 dark:text-blue-400 focus:ring-blue-900 dark:focus:ring-blue-400 border-gray-300 dark:border-gray-600"
                        />
                        <span className="ml-3 text-gray-700 dark:text-gray-200">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Object.keys(answers).length} de {quiz.questions.length} questões respondidas
                </span>
                <button
                  type="submit"
                  disabled={Object.keys(answers).length !== quiz.questions.length}
                  className={`px-6 py-3 rounded-md text-white font-medium transition-all duration-200 ${
                    Object.keys(answers).length === quiz.questions.length
                      ? 'bg-blue-900 dark:bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600'
                      : 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                  }`}
                >
                  Finalizar Prova
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseQuiz;