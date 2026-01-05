import React from "react";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import {
  CheckCircle2,
  FileCheck,
  HelpCircle,
  Clock,
  ArrowLeft,
  Info,
  ListChecks,
  AlertTriangle,
} from "lucide-react";
import ServiceActions from "@/components/service/ServiceActions";

// --- 1. BANCO DE DADOS DOS SERVIÇOS ---
const SERVICES_DB: Record<string, any> = {
  // --- NOTARIAIS ---
  "abertura-de-firma": {
    title: "Abertura de Firma",
    subtitle: "Registro de Assinatura e Biometria",
    description:
      "É o ato notarial que registra sua assinatura manuscrita e rubrica no acervo do cartório (Cartão de Autógrafo). Este cadastro é fundamental para garantir a segurança jurídica: ao assinar um documento, você atesta a veracidade da sua vontade e concorda com o conteúdo, conforme o Art. 219 do Código Civil.",
    details: [
      "Procedimento Presencial: Exige o comparecimento pessoal do interessado (físico) ou via videoconferência (e-Notariado) para coleta de biometria.",
      "Cadastro Biométrico: Obrigatório para segurança. Sua digital e foto ficam armazenadas no sistema do cartório e no Cadastro Nacional (CCN).",
      "Opção de Bloqueio: O usuário pode solicitar que sua firma seja 'bloqueada' para que reconhecimentos futuros sejam feitos apenas presencialmente (por autenticidade).",
    ],
    documents: [
      "Documento de Identificação Original (RG, CNH, Passaporte ou Carteiras de Classe como OAB, CRM, CREA).",
      "CPF (caso não conste no documento de identificação).",
      "Documentos digitais oficiais também são aceitos (CNH Digital, RG Digital).",
    ],
    faq: [
      {
        q: "Qual o valor do serviço?",
        a: "De acordo com a Tabela de Custas do TJPE, o valor do ato de abertura e registro de firma é de R$ 3,97.",
      },
      {
        q: "Aceitam documentos vencidos?",
        a: "Sim. RG, CNH e Passaporte podem ser aceitos mesmo após o prazo de validade, desde que a foto permita a identificação segura da pessoa.",
      },
      {
        q: "Preciso renovar minha firma?",
        a: "Sim, recomendamos a renovação a cada 5 anos ou sempre que sua assinatura mudar ou o documento de identificação vencer.",
      },
      {
        q: "Posso abrir firma para outra pessoa?",
        a: "Não. A abertura de firma é um ato personalíssimo, exige a presença física do interessado.",
      },
    ],
  },
  "reconhecimento-de-firma": {
    title: "Reconhecimento de Firma",
    subtitle: "Segurança e Autenticidade",
    description:
      "É o ato notarial que certifica a autoria da assinatura em um documento. Ao reconhecer firma, o Tabelião garante que a assinatura pertence, de fato, à pessoa indicada, conferindo segurança jurídica e fé pública ao documento (Art. 411 do CPC).",
    details: [
      "Por Semelhança (Comum): O tabelião compara a assinatura do documento com a ficha arquivada no cartório. Não exige a presença física do signatário no momento do ato, bastando que este tenha firma aberta.",
      "Por Autenticidade (Segurança Máxima): É o meio mais seguro. O signatário deve comparecer pessoalmente, ser identificado (documento/biometria) e assinar o documento na presença do tabelião, eliminando qualquer dúvida sobre sua vontade (Art. 476 do Código de Normas).",
      "Videoconferência (Inovação): O Provimento CNJ 100/2020 permite o reconhecimento por autenticidade via chamada de vídeo para diversos atos, inclusive transferência de veículos.",
      "Sinal Público: Reconhecemos também a assinatura de outros tabeliães de qualquer lugar do Brasil (via sistema CENSEC).",
    ],
    documents: [
      "Documento original a ser reconhecido (sem rasuras ou espaços em branco).",
      "Para Autenticidade: Documento de identificação original (RG/CNH) e CPF.",
      "Para Semelhança: A pessoa já deve ter firma aberta (ficha) no cartório.",
    ],
    faq: [
      {
        q: "Qual o valor do serviço?",
        a: "O valor total do reconhecimento de firma (por assinatura) no cartório é de R$ 7,10.",
      },
      {
        q: "Para que serve o reconhecimento de firma?",
        a: "Além de garantir a autoria, ele funciona como um 'carimbo do tempo', provando a data em que o documento existia e foi assinado.",
      },
    ],
  },
  autenticacao: {
    title: "Autenticação de Documentos",
    subtitle: "Cópia com Valor de Original",
    description:
      "É o ato pelo qual o Tabelião compara uma cópia (física ou digital) com o documento original, declarando que são idênticos. Ao receber o selo de autenticação, a cópia passa a ter o mesmo valor legal e força probatória do original, conforme o Art. 223 do Código Civil e Art. 425 do CPC.",
    details: [
      "Autenticação Física (Tradicional): A cópia em papel (xerox) é conferida com o original no balcão e recebe o selo de autenticidade.",
      "Autenticação Digital (CENAD): Via plataforma e-Notariado, você envia um documento original digital e nós emitimos uma cópia autenticada em PDF, válida juridicamente em todo o país.",
      "Materialização e Desmaterialização: Transformamos seu documento de papel em digital autenticado (e vice-versa) com total segurança jurídica.",
      "Validação de Certidões: Autenticamos certidões emitidas por sites governamentais (Receita, Judiciário) verificando o código de autenticidade na hora.",
    ],
    documents: [
      "Documento Original (Obrigatório em todos os casos).",
      "Não é possível autenticar cópia de outra cópia (apenas do original).",
      "Documentos rasurados, adulterados ou ilegíveis não podem ser autenticados.",
    ],
    faq: [
      {
        q: "Qual o valor do serviço?",
        a: "Conforme a Tabela de Custas do Tribunal de Justiça, o valor é de R$ 6,04 por folha ou documento (físico ou digital).",
      },
      {
        q: "Documento digital tem a mesma validade?",
        a: "Sim. Pela Lei 12.682/2012 e Provimento 100/CNJ, o documento digital autenticado tem a mesma força probatória do papel perante juízes e órgãos públicos.",
      },
      {
        q: "Posso autenticar um documento sem o original?",
        a: "Não. A legislação exige a confrontação com o original para garantir a fidelidade da cópia.",
      },
    ],
  },
  "ata-notarial": {
    title: "Ata Notarial",
    subtitle: "A Prova Pré-Constituída",
    description:
      "É o instrumento público no qual o Tabelião constata e certifica a existência de um fato ou situação jurídica. A Ata Notarial serve como uma prova robusta e incontestável em processos judiciais (Art. 384 do CPC), perpetuando fatos que poderiam desaparecer com o tempo.",
    details: [
      "Prova Digital (WhatsApp/Redes Sociais): O Tabelião acessa diretamente o seu celular para verificar a veracidade das mensagens. Isso garante que a prova seja técnica e incontestável, ao contrário de simples 'prints' que podem ser falsificados.",
      "Áudios e Vídeos: Para constatar conteúdo de áudio, o cliente deve trazer a degravação (texto transcrito) pronta. O tabelião ouvirá o áudio e conferirá se o texto corresponde fielmente ao que foi dito.",
      "Usucapião Extrajudicial: Documento obrigatório para comprovar o tempo de posse de um imóvel e regularizá-lo diretamente no cartório (Art. 216-A da Lei de Registros Públicos).",
    ],
    documents: [
      "Documento de Identificação Original (RG e CPF) do solicitante.",
      "Para WhatsApp/Apps: Trazer o celular desbloqueado com a conversa original acessível (não basta o print).",
      "Para Áudios: É obrigatório trazer a transcrição (degravação) impressa do conteúdo.",
      "Para Sites: O link exato da postagem ou página.",
    ],
    faq: [
      {
        q: "Qual a diferença para uma Escritura Declaratória?",
        a: "A Escritura narra fatos passados (o que você diz que aconteceu). A Ata Notarial certifica fatos presentes (o tabelião vê e comprova que está acontecendo). A Ata tem força probatória muito superior.",
      },
      {
        q: "Quanto custa?",
        a: "Ata Digital/Interna: R$ 117,81 (1ª folha) + R$ 59,85 por página extra. Diligência Externa: Acresce R$ 656,38 por hora. Para Usucapião, o valor depende do valor do imóvel (tabela progressiva).",
      },
      {
        q: "Vocês fazem a degravação do áudio?",
        a: "Não. O cliente deve trazer o texto já transcrito (impresso ou digital (em word ou PDF)). O tabelião fará apenas a escuta e conferência para validar se o texto confere com o áudio original.",
      },
    ],
  },
  "divorcio-inventario-extrajudicial": {
    title: "Divórcio e Inventário",
    subtitle: "Soluções Rápidas e Extrajudiciais",
    description:
      "Resolva questões de família e sucessões diretamente no cartório. Graças à Lei 11.441/07, processos que levavam anos na Justiça agora são concluídos em dias, desde que haja consenso entre as partes e não envolvam interesses de menores.",
    details: [
      "Divórcio: Exclusivo para casais SEM filhos menores ou incapazes. Se houver menores, o procedimento deve ser judicial.",
      "Petição do Advogado: É obrigatória a contratação de um advogado. Ele será responsável por elaborar a petição (minuta) contendo o plano de partilha e as declarações das partes, que será transcrita na escritura.",
      "Bens e SEFAZ: Havendo bens, é necessário o 'alinhamento' fiscal prévio (declaração e pagamento do imposto ICD na SEFAZ) para liberar a escritura.",
      "Inventário Extrajudicial: Deve ser aberto em até 60 dias após o óbito para evitar a multa de 30% sobre o imposto estadual.",
    ],
    documents: [
      "Divórcio: Certidão de Casamento (atualizada 90 dias), RG/CPF, Comprovante de Residência e Pacto Antenupcial (se houver).",
      "Inventário: Certidão de Óbito, RG/CPF do falecido e herdeiros, Certidões de Estado Civil atualizadas.",
      "Bens: RGI dos imóveis (30 dias), documentos de veículos e comprovante do ICD (SEFAZ).",
    ],
    note: "A lista de documentos pode variar conforme o patrimônio e regime de bens. Entre em contato com nosso apoio técnico para uma análise personalizada do seu caso.",
    faq: [
      {
        q: "Tenho filhos menores, posso fazer no cartório?",
        a: "Não. Por critérios do cartório e segurança jurídica, divórcios com filhos menores devem ser resolvidos na via judicial.",
      },
      {
        q: "Quanto custa o serviço?",
        a: "Para atos sem bens (divórcio simples ou inventário negativo), o valor total é de R$ 291,43. Com bens, segue a tabela progressiva do TJPE baseada no valor do patrimônio.",
      },
      {
        q: "Qual o papel do advogado?",
        a: "Além de orientar juridicamente, o advogado redige a petição inicial com os termos do acordo e da partilha, sendo indispensável para a validade do ato.",
      },
    ],
  },
  "escrituras-imobiliarias": {
    title: "Escrituras Imobiliárias",
    subtitle: "Segurança Jurídica na Compra e Venda",
    description:
      "É o ato jurídico oficial que valida a transferência de um imóvel. Conforme o Art. 108 do Código Civil, a Escritura Pública é obrigatória para a validade de negócios imobiliários com valor superior a 30 salários mínimos. Ela garante que a vontade das partes foi respeitada e verificada por um tabelião, oferecendo segurança contra fraudes.",
    details: [
      "Compra e Venda: A modalidade mais comum, onde se transfere a propriedade mediante pagamento (oneroso).",
      "Doação com Reserva de Usufruto: Muito usada em planejamento familiar. Os pais doam o imóvel aos filhos em vida, mas garantem o direito de morar ou alugar o bem (usufruto) até o falecimento.",
      "Quem não registra não é dono: A Escritura é o contrato formal. Para efetivar a transmissão da propriedade, é obrigatório levar esta escritura ao Cartório de Registro de Imóveis (RGI) (Art. 1.245 CC).",
      "Imóvel Irregular (Posse): Se o imóvel não possui matrícula (RGI), fazemos a 'Escritura de Cessão de Direitos de Posse', que transfere os direitos sobre o bem, mas não a propriedade plena.",
    ],
    documents: [
      "Vendedores e Compradores: RG, CPF, Certidão de Casamento/Nascimento atualizada e pacto antenupcial (se houver).",
      "Imóvel: Matrícula atualizada (validade 30 dias) e Certidão Negativa de Ônus Reais.",
      "Fiscais: Carnê do IPTU, Certidão Negativa de Débitos Municipais e comprovante de pagamento do imposto de transmissão (ITBI ou ICD).",
      "Certidões Pessoais: Recomendamos a emissão de certidões negativas (Justiça, Trabalho, Protesto) dos vendedores para garantir a segurança do negócio.",
    ],
    note: "A documentação imobiliária é complexa e varia conforme a cidade e o estado civil das partes. Traga a matrícula do imóvel para uma análise preliminar gratuita da nossa equipe.",
    faq: [
      {
        q: "Qual a diferença entre Escritura e Registro?",
        a: "A Escritura é o contrato feito no nosso cartório que formaliza a venda. O Registro é o ato posterior, feito no Cartório de Imóveis (RGI), que muda o nome do dono na matrícula. Só o Registro transfere a propriedade.",
      },
      {
        q: "Quais impostos eu pago?",
        a: "Na Compra e Venda, paga-se o ITBI (Prefeitura). Na Doação, paga-se o ICD (Estado). O cartório só pode lavrar a escritura após a comprovação desses pagamentos.",
      },
      {
        q: "Posso fazer escritura de imóvel financiado?",
        a: "Geralmente, o contrato emitido pelo banco tem força de escritura pública (Lei 4.380/64). Porém, se as partes preferirem mais segurança jurídica, podem optar por formalizar via escritura pública.",
      },
    ],
  },
  "procuracao-publica": {
    title: "Procuração Pública",
    subtitle: "Representação com Segurança Legal",
    description:
      "É o documento oficial pelo qual uma pessoa (Outorgante) nomeia outra de sua confiança (Procurador) para agir em seu nome. Diferente de uma procuração particular, a Pública fica arquivada no cartório, garantindo fé pública, rastreabilidade e maior aceitação em bancos e órgãos governamentais.",
    details: [
      "Poderes Específicos: Usada para fins bancários (movimentar contas), venda de veículos (Detran), matrículas em universidades ou representação em órgãos públicos.",
      "Para Venda de Imóveis: Exige poderes especiais e detalhados. O valor é diferenciado pois envolve patrimônio imobiliário.",
      "Em Causa Própria: Uma modalidade irrevogável que funciona como uma cessão de direitos. É usada quando o negócio já foi feito e pago, mas a transferência definitiva ocorrerá depois.",
      "Validade e Revogação: A procuração pode ter prazo de validade ou ser indeterminada. Pode ser cancelada (revogada) a qualquer momento pelo Outorgante, exceto nos casos de 'causa própria'.",
    ],
    documents: [
      "Pessoa Física (Quem passa os poderes): RG, CPF originais, Comprovante de Residência e Certidão de Estado Civil (Casamento/Nascimento).",
      "Pessoa Jurídica: Contrato Social, Cartão CNPJ e documentos dos sócios administradores.",
      "Dados do Procurador: Não é necessário que o procurador compareça, mas precisamos dos dados completos dele (Nome, RG, CPF, Estado Civil e Endereço).",
    ],
    note: "Apenas a presença do Outorgante é obrigatória. Importante: Dependendo da finalidade da procuração (ex: bancos específicos, INSS), podem ser exigidos dados ou minutas adicionais. Em caso de dúvidas, fale com nosso apoio técnico no botão de WhatsApp no canto inferior direito.",
    faq: [
      {
        q: "Qual o valor do serviço?",
        a: "Procurações Comuns (Bancos, Veículos, INSS, Amplos Poderes, Entre outros): R$ 117,81. Procurações para Venda/Compra de Imóveis: R$ 291,43. Procuração Digital (Videoconferência): R$ 291,43.",
      },
      {
        q: "A procuração perde a validade se a pessoa falecer?",
        a: "Sim. Via de regra, o mandato (poderes) se extingue automaticamente com o falecimento de quem passou a procuração (exceto na modalidade 'em causa própria').",
      },
      {
        q: "Posso fazer tudo online?",
        a: "Sim! Através da Procuração Digital (e-Notariado), fazemos uma videoconferência e você assina com seu certificado digital, pagando o valor de R$ 291,43.",
      },
    ],
  },
  "testamento-publico": {
    title: "Testamento Público",
    subtitle: "Planejamento e Proteção Patrimonial",
    description:
      "É o ato pelo qual uma pessoa declara sua vontade sobre como seus bens devem ser distribuídos após sua morte. Diferente de um documento feito em casa, o Testamento Público é redigido pelo Tabelião, garantindo total segurança jurídica, evitando nulidades futuras e assegurando que seu desejo seja cumprido.",
    details: [
      "Regra dos 50% (Legítima): Se você tem herdeiros necessários (filhos, netos, pais ou cônjuge), a lei reserva 50% do seu patrimônio para eles. Você pode dispor livremente dos outros 50% para deixar para um amigo, uma instituição ou para beneficiar mais um filho do que outro.",
      "Sem Herdeiros Necessários: Se você é solteiro, sem filhos e sem pais vivos, pode deixar 100% dos seus bens para quem desejar.",
      "Sigilo Absoluto: Enquanto você estiver vivo, o testamento é secreto. O cartório não pode emitir certidão nem revelar o conteúdo para ninguém, nem mesmo para os seus filhos.",
      "Revogável: Você pode mudar de ideia e refazer ou cancelar o testamento a qualquer momento.",
    ],
    documents: [
      "Testador: RG e CPF originais. Se for maior de 70 anos ou tiver problemas de saúde, pode ser solicitado atestado médico de lucidez.",
      "Testemunhas: São necessárias 2 testemunhas que não sejam parentes nem beneficiárias do testamento.",
      "Bens e Beneficiários: Relação dos bens e dados completos (RG, CPF, Endereço) das pessoas que receberão a herança.",
    ],
    note: "O Testamento não evita o inventário, mas simplifica a partilha. Após o falecimento, o testamento deve ser apresentado ao juiz para cumprimento.",
    faq: [
      {
        q: "Quanto custa?",
        a: "O valor é fixo: R$ 1.105,38, independentemente do valor do patrimônio ou da quantidade de bens.",
      },
      {
        q: "Posso reconhecer um filho no testamento?",
        a: "Sim. O testamento também serve para atos não patrimoniais, como reconhecimento de paternidade ou nomeação de tutor para filhos menores.",
      },
      {
        q: "O que é Testamento Cerrado?",
        a: "É um testamento escrito por você e entregue lacrado ao tabelião. Ninguém lê o conteúdo. Porém, é pouco usado hoje em dia devido ao risco de conter erros jurídicos que o anulem posteriormente.",
      },
    ],
  },
  "dissolucao-uniao-estavel": {
    title: "União Estável e Dissolução",
    subtitle: "Formalização ou Término da Convivência",
    description:
      "Nesta página tratamos de dois atos distintos: a Escritura Declaratória de União Estável (para quem quer formalizar a convivência e garantir direitos) e a Escritura de Dissolução (para quem decidiu encerrar o relacionamento amigavelmente). Ambos são feitos de forma rápida no cartório, sem necessidade de audiências judiciais, desde que haja consenso.",
    details: [
      "Para Formalizar (Início): O casal define a data de início da convivência e escolhe o regime de bens (ex: Comunhão Parcial ou Separação Total) dentro da própria escritura. Não precisa de advogado.",
      "Para Dissolver (Fim): Se o relacionamento acabou, a escritura oficializa o término, define a partilha de bens (se houver) e eventuais pensões. Neste caso, a lei OBRIGA a assistência de um advogado.",
      "Regra dos Filhos Menores (Dissolução): Assim como no divórcio, se o casal tiver filhos menores ou incapazes, a dissolução deve ser feita judicialmente para proteger os interesses das crianças.",
      "Regime de Bens: Na formalização, vocês escolhem livremente o regime na própria escritura. Sem escritura, vale a Comunhão Parcial (tudo é dos dois).",
    ],
    documents: [
      "Comuns: RG e CPF originais, Comprovante de Residência e Certidão de Estado Civil atualizada (Nascimento ou Casamento com averbação).",
      "Exclusivo para Dissolução: Carteira da OAB do advogado assistente e petição.",
      "Bens (Se houver partilha): Documentos dos imóveis (RGI), veículos e extratos bancários.",
    ],
    note: "Para a União (início), o advogado é opcional. Para a Dissolução (fim), o advogado é obrigatório e existem documentos específicos (como a minuta da partilha). Por isso, para Dissoluções, entre em contato com nosso apoio técnico no WhatsApp para análise prévia.",
    faq: [
      {
        q: "Quanto custa?",
        a: "Atos sem bens (Declaratória de União ou Dissolução sem partilha): R$ 297,43. Se houver partilha de bens na dissolução, o valor segue a tabela progressiva do TJPE.",
      },
      {
        q: "Preciso de Pacto Antenupcial?",
        a: "Não. Diferente do casamento, na União Estável o regime de bens é definido no corpo da própria escritura, sem custo adicional de pacto.",
      },
      {
        q: "Posso fazer a dissolução se tiver filhos?",
        a: "Se os filhos forem maiores de idade e capazes, sim. Se forem menores, a dissolução deve ser feita na Justiça.",
      },
    ],
  },
  usucapiao: {
    title: "Usucapião Extrajudicial",
    subtitle: "Regularização de Imóveis sem Escritura",
    description:
      "É o procedimento que permite reconhecer a propriedade de um imóvel com base no tempo de posse, sem precisar de um processo judicial demorado. O Tabelionato de Notas atua na fase crucial de produção de provas, lavrando a 'Ata Notarial de Usucapião', documento obrigatório para que o Registro de Imóveis reconheça seu direito.",
    details: [
      "Como funciona: O processo tem 3 fases. 1) Planta e Memorial (Engenheiro); 2) Ata Notarial (Nós vamos ao local e atestamos a posse); 3) Registro (O advogado leva tudo ao Cartório de Imóveis para passar pro seu nome).",
      "Tipos e Prazos: O tempo de posse exigido varia de 5 a 15 anos, dependendo do tamanho do imóvel e se é para moradia familiar.",
      "Advogado Obrigatório: Todo o processo deve ser conduzido por um advogado, que reunirá a documentação e assinará o requerimento.",
      "Sem Oposição: Para ser feito em cartório, a posse deve ser mansa e pacífica. Se houver briga judicial pelo terreno ou contestação de vizinhos, o caso deve ir para a Justiça.",
    ],
    documents: [
      "Técnicos: Planta e Memorial Descritivo assinados por engenheiro/arquiteto (com ART/RRT).",
      "Provas de Tempo: Contas de consumo antigas (Luz, Água), IPTU pago, contratos de gaveta, fotos antigas, etc.",
      "Certidões: Negativas dos distribuidores cíveis e da Justiça Federal (do solicitante e dos antigos donos).",
      "Pessoais: RG, CPF e Certidão de Casamento/Nascimento do solicitante e cônjuge.",
    ],
    note: "Este é um ato de alta complexidade. Recomendamos que seu advogado entre em contato com nosso apoio técnico no WhatsApp para alinhar a minuta da Ata Notarial antes de iniciar.",
    faq: [
      {
        q: "O Cartório de Notas passa a escritura?",
        a: "Não. Nós fazemos a Ata Notarial (a prova da posse). Com essa Ata, seu advogado dá entrada no Cartório de Registro de Imóveis, que é quem emitirá a matrícula no seu nome.",
      },
      {
        q: "Quanto custa?",
        a: "O valor da Ata Notarial segue a Tabela Progressiva do TJPE, variando conforme o valor venal do imóvel. Além disso, há custos com a diligência (visita ao local).",
      },
      {
        q: "Posso regularizar imóvel de herança?",
        a: "Depende. Se o imóvel já tinha matrícula no nome do falecido, o correto é o Inventário. O Usucapião é usado quando o imóvel está irregular ou 'sem papel'.",
      },
    ],
  },

  // --- DIGITAIS ---
  "assinatura-digital": {
    title: "Assinatura Digital",
    subtitle: "e-Notariado",
    description:
      "Assine documentos eletronicamente com validade jurídica através da plataforma e-Notariado. Garantimos a autoria e a integridade do documento digital.",
    note: "Este serviço requer configuração prévia. Entre em contato com nosso Apoio Técnico pelo botão do WhatsApp para ser orientado.",
  },
  "ato-notarial-eletronico": {
    title: "Ato Notarial Eletrônico",
    subtitle: "100% Digital",
    description:
      "Atos lavrados de forma inteiramente digital (Escrituras Declaratórias, Atas, etc), com videoconferência e assinatura via certificado ICP-Brasil ou e-Notariado.",
    note: "Para realizar este ato, solicite o suporte do nosso Apoio Técnico clicando no ícone do WhatsApp.",
  },
  "certificado-digital": {
    title: "Certificado Digital",
    subtitle: "Identidade Virtual",
    description:
      "Emita seu certificado digital e-Notariado gratuitamente conosco para assinar atos à distância.",
    note: "A emissão é feita mediante agendamento e validação. Chame nosso Apoio Técnico no WhatsApp para iniciar.",
  },
  "escritura-eletronica": {
    title: "Escritura Eletrônica (Imóveis)",
    subtitle: "Compra e Venda Online",
    description:
      "Realize a compra e venda do seu imóvel sem sair de casa. Todas as partes assinam digitalmente e a videoconferência substitui o comparecimento presencial.",
  },
  "procuracao-eletronica": {
    title: "Procuração Eletrônica",
    subtitle: "Poderes à Distância",
    description:
      "Passe poderes a terceiros via internet. Ideal para quem está viajando ou não pode ir ao cartório. Tem a mesma validade da procuração física.",
    note: "Este ato é realizado exclusivamente com o auxílio do nosso Apoio Técnico. Clique no WhatsApp para dar andamento.",
  },
  "reconhecimento-firma-digital": {
    title: "Reconhecimento de Firma Digital",
    subtitle: "e-Not Assina",
    description:
      "Reconhecimento de assinatura em documentos digitais nativos (PDFs), garantindo autoria e integridade via módulo e-Not Assina.",
    note: "Dúvidas sobre como enviar o arquivo? Fale com nosso Apoio Técnico no WhatsApp.",
  },
  videoconferencia: {
    title: "Videoconferência",
    subtitle: "Atendimento Remoto",
    description:
      "Realize escrituras, procurações e divórcios através de chamada de vídeo segura com o tabelião, regulamentada pelo Provimento 100 do CNJ.",
    note: "O agendamento da videoconferência é feito pelo nosso Apoio Técnico. Clique no botão do WhatsApp.",
  },

  // --- ESPECIAIS ---
  "apostila-de-haia": {
    title: "Apostila de Haia",
    subtitle: "Legalização Internacional",
    description:
      "Valide documentos brasileiros para uso no exterior (cidadania, estudos, trabalho) em países signatários da Convenção de Haia.",
  },
  "atos-empresariais": {
    title: "Atos Empresariais",
    subtitle: "Pessoa Jurídica",
    description:
      "Serviços exclusivos para regularização, atas de assembleia e autenticações corporativas.",
  },
  "conciliacao-e-mediacao": {
    title: "Conciliação e Mediação",
    subtitle: "Resolução de Conflitos",
    description:
      "Solucione disputas de forma amigável e rápida diretamente no cartório, com valor jurídico.",
  },
  "condominio-e-incorporacoes": {
    title: "Condomínio e Incorporações",
    subtitle: "Atas e Instituições",
    description:
      "Formalização de atas de assembleia de condomínio e instituição de incorporações imobiliárias.",
  },
  "planejamento-sucessorio": {
    title: "Planejamento Sucessório",
    subtitle: "Proteção Patrimonial",
    description:
      "Organize a transmissão do seu patrimônio em vida para evitar conflitos futuros e reduzir custos.",
  },
  "diretiva-antecipada": {
    title: "Diretiva Antecipada",
    subtitle: "Testamento Vital",
    description:
      "Defina seus desejos sobre tratamentos médicos futuros caso você não possa expressar sua vontade.",
  },
};

// --- 2. CONFIGURAÇÃO DE TIPAGEM E METADATA ---

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DB[slug];

  if (!service) return { title: "Serviço não encontrado" };

  return {
    title: `${service.title} | 8º Ofício de Notas`,
    description: service.description,
  };
}

// --- 3. COMPONENTE DA PÁGINA ---

export default async function ServiceContentPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DB[slug];

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-slate-50">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Serviço em Construção
        </h1>
        <p className="text-slate-600 mb-8 max-w-md">
          O link <strong>{slug}</strong> ainda não tem conteúdo detalhado
          cadastrado no sistema.
        </p>
        <Link
          href="/servicos"
          className="text-red-600 hover:underline font-bold"
        >
          Voltar para lista de serviços
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      <PageHeader
        title={service.title}
        subtitle={service.subtitle || "Serviço Notarial"}
      />

      <div className="container mx-auto px-6 py-12">
        {/* Breadcrumb / Voltar */}
        <Link
          href="/servicos"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-red-600 mb-8 transition-colors font-medium text-sm group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Voltar para todos os serviços
        </Link>

        {/* Componente de Ação (Abertura de Firma) */}
        <ServiceActions slug={slug} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* --- COLUNA ESQUERDA: CONTEÚDO (Ocupa 8 de 12 colunas) --- */}
          <div className="lg:col-span-8 space-y-8">
            {/* CARD 1: SOBRE O SERVIÇO */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                  <Info size={20} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Sobre o Ato
                </h2>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {service.details && (
                <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                    <ListChecks size={18} className="text-slate-500" /> Detalhes
                    Importantes
                  </h3>
                  <ul className="space-y-3">
                    {service.details.map((detail: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700 text-sm md:text-base"
                      >
                        <CheckCircle2
                          className="text-green-600 shrink-0 mt-0.5"
                          size={18}
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CARD 2: DOCUMENTOS E AVISOS */}
            {service.documents && (
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600"></div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                    <FileCheck size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Documentos Necessários
                  </h3>
                </div>

                <ul className="space-y-4">
                  {service.documents.map((doc: string, i: number) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <span className="w-2 h-2 bg-red-400 rounded-full mt-2.5 shrink-0 group-hover:bg-red-600 transition-colors"></span>
                      <span className="text-slate-700 text-base font-medium">
                        {doc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* --- 3. ÁREA DO ALERTA / NOTA (MOVIDA PARA FORA DO BLOCO DE DOCUMENTOS) --- */}
            {service.note && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 items-start shadow-sm animate-in fade-in slide-in-from-bottom-2">
                <div className="bg-amber-100 p-2.5 rounded-full shrink-0 text-amber-600">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-amber-900 font-bold text-base mb-1 uppercase tracking-wide">
                    Atenção / Importante
                  </h4>
                  <p className="text-amber-800 text-sm md:text-base leading-relaxed">
                    {service.note}
                  </p>
                </div>
              </div>
            )}

            {/* CARD 3: FAQ */}
            {service.faq && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 px-2">
                  Perguntas Frequentes
                </h3>
                <div className="grid gap-4">
                  {service.faq.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-bold text-slate-900 mb-3 flex gap-3 items-start text-lg">
                        <HelpCircle
                          size={20}
                          className="text-red-500 mt-1 shrink-0"
                        />
                        {item.q}
                      </h4>
                      <p className="text-slate-600 pl-8 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* --- COLUNA DIREITA: SIDEBAR STICKY (Ocupa 4 de 12 colunas) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Card Horário */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg shadow-slate-200/50">
                <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                  <Clock size={24} className="text-red-600" />
                  Horário de Atendimento
                </h3>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span>Segunda a Sexta</span>
                    <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg text-sm">
                      09:00 - 17:00
                    </span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                    <span>Sábado e Domingo</span>
                    <span className="font-bold text-red-500 text-sm flex items-center gap-1">
                      Fechado
                    </span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-400 mb-2">
                    Precisa de ajuda urgente?
                  </p>
                  <p className="text-sm font-medium text-slate-600">
                    Use o botão de WhatsApp no canto da tela.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'abertura-firma' },
    { slug: 'reconhecimento-firma' },
    { slug: 'autenticacao' },
    { slug: 'ata-notarial' },
    { slug: 'divorcio-inventario' },
    { slug: 'escrituras' },
    { slug: 'procuracao' },
    { slug: 'testamento' },
    { slug: 'uniao-estavel' },
    { slug: 'usucapiao' },
    { slug: 'apostila' },
  ];
}