import type {
  CaseWindow,
  EvidenceItem,
  FunnelStep,
  GovernanceItem,
  PreservedRow,
  PriorityStep,
  RiskRow,
  SimulacraStep,
  StorySection,
} from '../types/story';

export const meta = {
  titlePt: 'Tecnonecromancia',
  titleEn: 'Technonecromancy',
  subtitlePt: 'Simulacros de presença e a política da morte na era da inteligência artificial generativa',
  subtitleEn: 'Simulacra of Presence and the Politics of Death in the Age of Generative Artificial Intelligence',
  authors: 'Gustavo Simas da Silva & Vânia Ribas Ulbricht',
  affiliationPt: 'Universidade Federal de Santa Catarina (UFSC), Florianópolis, Brasil',
  affiliationEn: 'Federal University of Santa Catarina (UFSC), Florianópolis, Brazil',
  journal: 'Trilogía Ciencia Tecnología Sociedad · vol. 18, n. 39 · 2026 · art. e3723',
  doi: 'https://doi.org/10.22430/21457778.3723',
  datesPt: 'Recebido: 17 out. 2025 · Aceito: 5 mai. 2026',
  datesEn: 'Received: Oct 17, 2025 · Accepted: May 5, 2026',
  articleTypePt: 'Artigo de reflexão (ensaio teórico-conceitual) — não é pesquisa empírica com coleta de dados.',
  articleTypeEn: 'Reflection article (theoretical-conceptual essay) — not empirical research with data collection.',
  doctoralNotePt:
    'Estudo independente que integra a pesquisa de doutorado do primeiro autor, na interseção entre inteligência artificial e estudos de Ciência, Tecnologia e Sociedade (CTS).',
  doctoralNoteEn:
    "Independent study that forms part of the primary author's doctoral research at the intersection of artificial intelligence and Science, Technology, and Society (STS) studies.",
  howToCite:
    'da Silva, G. S., & Ulbricht, V. R. (2026). Technonecromancy: Simulacra of Presence and the Politics of Death in the Age of Generative Artificial Intelligence. Trilogía Ciencia Tecnología Sociedad, 18(39), art. e3723. https://doi.org/10.22430/21457778.3723',
  citations: {
    apa: {
      pt: 'da Silva, G. S., & Ulbricht, V. R. (2026). Tecnonecromancia: Simulacros de presença e a política da morte na era da inteligência artificial generativa. Trilogía Ciencia Tecnología Sociedad, 18(39), e3723. https://doi.org/10.22430/21457778.3723',
      en: 'da Silva, G. S., & Ulbricht, V. R. (2026). Technonecromancy: Simulacra of presence and the politics of death in the age of generative artificial intelligence. Trilogía Ciencia Tecnología Sociedad, 18(39), e3723. https://doi.org/10.22430/21457778.3723',
    },
    abnt: {
      pt: 'SILVA, Gustavo Simas da; ULBRICHT, Vânia Ribas. Tecnonecromancia: simulacros de presença e a política da morte na era da inteligência artificial generativa. Trilogía Ciencia Tecnología Sociedad, v. 18, n. 39, art. e3723, 2026. DOI: 10.22430/21457778.3723.',
      en: 'SILVA, Gustavo Simas da; ULBRICHT, Vânia Ribas. Technonecromancy: simulacra of presence and the politics of death in the age of generative artificial intelligence. Trilogía Ciencia Tecnología Sociedad, v. 18, n. 39, art. e3723, 2026. DOI: 10.22430/21457778.3723.',
    },
    bibtex: `@article{silva2026technonecromancy,
  author  = {da Silva, Gustavo Simas and Ulbricht, V{\\^a}nia Ribas},
  title   = {Technonecromancy: Simulacra of Presence and the Politics of Death in the Age of Generative Artificial Intelligence},
  journal = {Trilog{\\'i}a Ciencia Tecnolog{\\'i}a Sociedad},
  volume  = {18},
  number  = {39},
  pages   = {e3723},
  year    = {2026},
  doi     = {10.22430/21457778.3723},
  url     = {https://doi.org/10.22430/21457778.3723}
}`,
  },
  aiUseNotePt:
    'Nota de transparência dos autores: o preparo do manuscrito usou Google Gemini 2.5 Pro e ChatGPT 5 para pesquisa exploratória, tradução de termos e revisão ortográfica — sob supervisão integral dos autores, que retêm toda a responsabilidade pelo conteúdo (p. 18).',
  aiUseNoteEn:
    "Authors' transparency note: manuscript preparation used Google Gemini 2.5 Pro and ChatGPT 5 for exploratory research, translation of specific terms, and proofreading — under full author supervision; the authors retain complete responsibility for the content (p. 18).",
  companionNotePt:
    'Esta página é um resumo interativo e não substitui o artigo original. Toda reformulação aqui foi conferida contra o PDF publicado; qualquer discrepância deve ser resolvida a favor do artigo.',
  companionNoteEn:
    'This page is an interactive summary and does not replace the original article. Every rephrasing here was checked against the published PDF; any discrepancy should be resolved in favor of the article.',
};

export const thesisQuote = {
  pt: 'Agentes póstumos são fenomenologicamente suficientes para reorganizar o luto — mas permanecem ontologicamente insuficientes para dar continuidade a uma pessoa.',
  en: 'Posthumous agents are phenomenologically sufficient to reorganize mourning — yet remain ontologically insufficient as continuants of persons.',
};

export const sections: StorySection[] = [
  {
    id: 'abertura',
    eyebrow: { pt: 'Abertura', en: 'Opening' },
    title: {
      pt: 'Uma pergunta que já não é ficção científica',
      en: 'A question that is no longer science fiction',
    },
    paragraphs: [
      {
        pt: 'Hoje é possível enviar a foto de um parente falecido a um aplicativo e assisti-lo piscar, sorrir, virar a cabeça. É possível treinar um clone de voz com poucos minutos de áudio antigo. É possível trocar mensagens de texto com um agente que responde como se fosse alguém que já morreu. Nenhuma dessas três coisas é hipotética — são produtos comerciais em operação.',
        en: 'Today it is possible to send a photo of a deceased relative to an app and watch it blink, smile, turn its head. It is possible to train a voice clone from a few minutes of old audio. It is possible to exchange text messages with an agent that answers as if it were someone who has already died. None of this is hypothetical — these are commercial products already in operation.',
      },
      {
        pt: 'O artigo que dá origem a esta página não descreve um caso isolado. Ele nomeia um fenômeno mais amplo — deepfakes, clonagem de voz, avatares póstumos, chatbots de luto — e faz uma pergunta que orienta todo o texto: como essas tecnologias miméticas reconfiguram a fronteira entre vida, morte e presença?',
        en: 'The article behind this page does not describe an isolated case. It names a broader phenomenon — deepfakes, voice cloning, posthumous avatars, grief chatbots — and asks the question that guides the whole text: how do these mimetic technologies reconfigure the boundary between life, death, and presence?',
      },
      {
        pt: 'Vale marcar de saída o que este texto é e o que não é: não é um estudo com dados coletados em laboratório ou survey. É um artigo de reflexão teórica — um ensaio crítico e conceitual que cruza filosofia, estudos de ciência, tecnologia e sociedade (CTS) e economia política para propor um vocabulário novo diante de um fenômeno que a literatura ainda trata de forma dispersa.',
        en: "It is worth flagging upfront what this text is and is not: it is not a study built on data collected in a lab or a survey. It is a theoretical reflection article — a critical, conceptual essay crossing philosophy, science and technology studies (STS), and political economy to propose a new vocabulary for a phenomenon the existing literature still treats piecemeal.",
      },
    ],
    callout: {
      pt: 'Pergunta de pesquisa: como as tecnologias miméticas reconfiguram a fronteira entre vida, morte e presença?',
      en: 'Research question: how do mimetic technologies reconfigure the boundary between life, death, and presence?',
    },
    sourceNote: { pt: 'p. 2–3 (Introdução)', en: 'p. 2-3 (Introduction)' },
    visual: 'hook',
  },
  {
    id: 'conceito',
    eyebrow: { pt: 'O neologismo', en: 'The neologism' },
    title: { pt: 'Tecnonecromancia: um nome para um regime novo', en: 'Technonecromancy: a name for a new regime' },
    paragraphs: [
      {
        pt: 'Os autores cunham o termo tecnonecromancia para designar "a convocação tecnicamente mediada dos mortos para simulação interativa". A escolha da palavra é deliberada: termos vizinhos já existem na literatura, mas cada um deixa algo de fora.',
        en: 'The authors coin the term technonecromancy to designate "the technically mediated conjuration of the dead for interactive simulation." The choice of word is deliberate: neighboring terms already exist in the literature, but each one leaves something out.',
      },
      {
        pt: '"Pseudonecromancia" pressupõe de saída que o fenômeno é uma farsa. "Necromancia digital" restringe o campo a um substrato digital, quando o artigo também quer abranger dispositivos, protocolos e infraestruturas institucionais analógicas e híbridas. "Cibernecromancia" superindexa o ciberespaço, ofuscando mediações jurídico-econômicas como contratos de espólio e provedores de clonagem de voz. O prefixo tecno marca o aparato convergente que automatiza a comunhão com os mortos; necromancia preserva a semântica cultural da evocação.',
        en: '"Pseudo-necromancy" presupposes from the outset that the phenomenon is mere sham. "Digital necromancy" narrows the field to a digital substrate, when the article also wants to cover analog, hybrid, and institutional infrastructures. "Cyber-necromancy" over-indexes cyberspace, occluding legal-economic mediations such as estate contracts and voice-cloning vendors. The techno prefix marks the convergent assemblage that automates communion with the dead; necromancy retains the cultural semantics of summoning.',
      },
      {
        pt: 'Como categoria analítica, o termo marca uma virada: da presença arquivística (guardar rastros) para a presença performática (simular relação). O processo, descrito na Figura 1 do artigo, converte dados pessoais em simulações que podem ser atualizadas indefinidamente.',
        en: 'As an analytical category, the term marks a shift: from archival presence (storing traces) to performative presence (simulating relationality). The process, described in Figure 1 of the article, converts personal data into simulations that can be perpetually updated.',
      },
    ],
    sourceNote: { pt: 'p. 3–4 (Introdução, Figura 1)', en: 'p. 3-4 (Introduction, Figure 1)' },
    visual: 'funnel',
  },
  {
    id: 'fantasma-categoria',
    eyebrow: { pt: 'Moldura teórica', en: 'Theoretical framework' },
    title: { pt: 'O fantasma como categoria analítica', en: 'The ghost as an analytical category' },
    paragraphs: [
      {
        pt: 'Para dar peso conceitual ao termo, o artigo se apoia em dois pilares dos estudos de CTS: a sociotécnica da morte e a ontologia do simulacro. O ponto de partida é Jean Baudrillard, para quem a representação passa por quatro estágios — de reflexo fiel até simulacro puro, sem referente algum, a chamada hiperrealidade.',
        en: 'To give the term conceptual weight, the article rests on two pillars of STS studies: the sociotechnics of death and the ontology of simulation. The starting point is Jean Baudrillard, for whom representation passes through four stages — from faithful reflection to a pure simulacrum with no referent at all, so-called hyperreality.',
      },
      {
        pt: 'Agentes póstumos treinados em resíduos de uma vida — textos, imagens, voz — não ficam parados no segundo estágio (a cópia degradada). Eles mascaram a ausência (terceiro estágio) e, quando a interação se consolida, arriscam substituir a própria referência (quarto estágio): o agente hiperreal passa a ser, na prática, mais presente e mais eficaz comportamentalmente do que o original perdido.',
        en: 'Posthumous agents trained on the residues of a life — texts, images, voice — do not stay at the second stage (the degraded copy). They mask absence (third order) and, once interaction consolidates, risk replacing reference itself (fourth order): the hyperreal agent becomes, in practice, more present and more behaviorally efficacious than the lost original.',
      },
      {
        pt: 'Jacques Derrida acrescenta outra camada: a hauntologia. O espectro não está simplesmente presente nem simplesmente ausente — é um "estar-aí" de alguém ausente que insiste e resiste ao fechamento. Os agentes tecnonecromânticos literalizam tecnicamente essa figura: são espectros programáveis, presentes como atuantes algorítmicos e ausentes como sujeitos de experiência.',
        en: 'Jacques Derrida adds another layer: hauntology. The specter is neither simply present nor simply absent — it is a "being-there" of someone absent that insists and resists closure. Technonecromantic agents technically literalize this figure: they are programmable specters, present as algorithmic actants and absent as subjects of experience.',
      },
    ],
    sourceNote: { pt: 'p. 12–13 (Ontologia dos simulacros e hiperrealidade, Tabela 3)', en: 'p. 12-13 (Ontology of Simulacra and Hyperreality, Table 3)' },
    visual: 'simulacraLadder',
  },
  {
    id: 'preservado-vs-corpo',
    eyebrow: { pt: 'O limite filosófico', en: 'The philosophical limit' },
    title: { pt: 'O que a máquina guarda — e o que ela não pode guardar', en: 'What the machine keeps — and what it cannot keep' },
    paragraphs: [
      {
        pt: 'O artigo é explícito quanto ao seu limite central: um modelo póstumo replica padrões discursivos com alta fidelidade, mas é constitutivamente desprovido de propriocepção, interocepção e homeostase afetiva — as bases corporais da cognição segundo as teorias 4E (corporificada, incorporada, enativa, estendida).',
        en: 'The article is explicit about its central limit: a posthumous model replicates discursive patterns with high fidelity, but is constitutively devoid of proprioception, interoception, and affective homeostasis — the bodily grounds of cognition according to 4E (embodied, embedded, enactive, extended) theories.',
      },
      {
        pt: 'Para tornar esse limite verificável em vez de apenas afirmado, os autores organizam uma tabela analítica (Tabela 2) que separa, dimensão por dimensão, o que um modelo póstumo consegue reter do que depende de existência corporal vivida — a mesma tabela que orienta a visualização ao lado.',
        en: 'To make this limit verifiable rather than merely asserted, the authors organize an analytic table (Table 2) that separates, dimension by dimension, what a posthumous model can retain from what depends on lived embodied existence — the same table driving the visualization alongside.',
      },
      {
        pt: 'A conclusão dos autores não é moralismo solto: apoia-se em programas convergentes de fenomenologia, ciência cognitiva enativa, neurociência afetiva e HCI social. O "fantasma" não é a pessoa original nem uma farsa vazia — é uma entidade completada pelo usuário, um sujeito "como se" estabilizado por pistas de design e projeção antropomórfica.',
        en: 'The authors\' conclusion is not loose moralism: it rests on convergent programs across phenomenology, enactive cognitive science, affective neuroscience, and social HCI. The "ghost" is neither the original person nor a mindless fake — it is a user-completed entity, an "as-if" subject stabilized by design cues and anthropomorphic projection.',
      },
    ],
    sourceNote: { pt: 'p. 10–11 (Identidade simulada e cognição corporificada, Tabela 2)', en: 'p. 10-11 (Simulated Identity and Embodied Cognition, Table 2)' },
    visual: 'preservedVsEmbodied',
  },
  {
    id: 'janelas-culturais',
    eyebrow: { pt: 'Estudos de caso', en: 'Case studies' },
    title: { pt: 'Três janelas culturais sobre o mesmo fenômeno', en: 'Three cultural windows onto the same phenomenon' },
    paragraphs: [
      {
        pt: 'Para não deixar a tese no plano puramente abstrato, o artigo examina três casos escolhidos por representarem modalidades técnicas distintas de tecnonecromancia, terem alta visibilidade pública e terem gerado contestação ética significativa.',
        en: 'To keep the thesis from staying purely abstract, the article examines three cases chosen because they represent distinct technical modalities of technonecromancy, have high public visibility, and have generated significant ethical contestation.',
      },
      {
        pt: 'A análise não reproduz capturas de tela nem imagens dos produtos: os autores trabalham a partir de termos de uso, materiais promocionais, cobertura jornalística e testemunhos públicos, examinando a linguagem de interface e o design de interação. Esta página segue a mesma regra — os três cartões abaixo são descritivos, não reconstituições visuais dos produtos.',
        en: "The analysis does not reproduce screenshots or product imagery: the authors work from terms of service, promotional materials, journalistic coverage, and public testimony, examining interface language and interaction design. This page follows the same rule — the three cards below are descriptive, not visual reconstructions of the products.",
      },
    ],
    sourceNote: { pt: 'p. 7 (critérios de seleção); p. 8 (Deep Nostalgia); p. 9 (griefbots e HereAfter AI)', en: 'p. 7 (selection criteria); p. 8 (Deep Nostalgia); p. 9 (griefbots and HereAfter AI)' },
    visual: 'caseWindows',
  },
  {
    id: 'custo-luto',
    eyebrow: { pt: 'Luto e dependência', en: 'Mourning and dependence' },
    title: { pt: 'O custo psicológico de um luto que nunca se fecha', en: 'The psychological cost of a mourning that never closes' },
    paragraphs: [
      {
        pt: 'A retórica promissória da tecnonecromancia apoia-se numa revisão real dos estudos sobre luto: contra a ortodoxia do século XX, que exigia ruptura, Klass e colegas (1996) mostraram que manter um vínculo interno com quem morreu pode ser adaptativo. O problema é o que acontece quando esse vínculo deixa de ser interior e passa a ser externalizado num agente que responde.',
        en: 'The promissory rhetoric of technonecromancy draws on a real revision within bereavement studies: against twentieth-century orthodoxy, which demanded rupture, Klass and colleagues (1996) showed that maintaining an inner bond with the deceased can be adaptive. The problem is what happens when that bond stops being interior and becomes externalized into an agent that talks back.',
      },
      {
        pt: 'Lindemann (2022) descreve o risco central: griefbots podem bloquear a transição do "mundo-com-o-morto" para o "mundo-sem-o-morto", criando um laço interativo que funcionaliza a negação. Dois efeitos psicológicos conhecidos alimentam essa dinâmica — o "efeito Eliza" (a tendência humana de atribuir mente a scripts triviais) e o vale da estranheza (quanto mais perfeita a verossimilhança, mais ela pode gerar repulsa em vez de conforto).',
        en: 'Lindemann (2022) describes the central risk: griefbots can block the transition from the "world-with-the-dead" to the "world-without-the-dead," creating an interactive loop that functionalizes denial. Two well-known psychological effects feed this dynamic — the "ELIZA effect" (the human tendency to attribute mind to trivial scripts) and the uncanny valley (the more perfect the verisimilitude, the more it can produce revulsion instead of comfort).',
      },
      {
        pt: 'Para tornar esses riscos acionáveis — e não apenas descritivos — o artigo propõe a Tabela 1: cada risco clínico ou ético é ligado a um mecanismo técnico específico e a uma mitigação operacional concreta.',
        en: 'To make these risks actionable — not merely descriptive — the article proposes Table 1: each clinical or ethical risk is linked to a specific technical mechanism and a concrete operational mitigation.',
      },
    ],
    sourceNote: { pt: 'p. 7–9 (Luto e apego mediado por IA, Tabela 1)', en: 'p. 7-9 (Mourning and AI-Mediated Attachment, Table 1)' },
    visual: 'riskTable',
  },
  {
    id: 'necrocapitalismo',
    eyebrow: { pt: 'Economia política', en: 'Political economy' },
    title: { pt: 'Necrocapitalismo: quem lucra, quem decide', en: 'Necrocapitalism: who profits, who decides' },
    paragraphs: [
      {
        pt: 'O substrato econômico da tecnonecromancia é o que o artigo chama de Indústria da Vida Digital Póstuma (Digital Afterlife Industry, DAI): um setor que converte os dados do falecido em produtos de assinatura desenhados para prolongar engajamento — um modelo antitético ao luto saudável.',
        en: 'The economic substrate of technonecromancy is what the article calls the Digital Afterlife Industry (DAI): a sector that converts a deceased person\'s data into subscription products designed to prolong engagement — a model antithetical to healthy mourning.',
      },
      {
        pt: 'Os autores chamam essa dinâmica de necrocapitalismo (Banerjee, 2008): uma forma computacional de extrair excedente comportamental do luto sob a retórica benevolente de "legado" — um paralelo direto ao capitalismo de vigilância descrito por Zuboff (2019), agora aplicado à dor.',
        en: 'The authors call this dynamic necrocapitalism (Banerjee, 2008): a computational form of extracting behavioral surplus from grief under the benevolent rhetoric of "legacy" — a direct parallel to the surveillance capitalism described by Zuboff (2019), now applied to pain.',
      },
      {
        pt: 'Há uma lacuna jurídica estrutural por trás disso: regimes centrais de proteção de dados — o RGPD europeu e a LGPD brasileira — excluem explicitamente os falecidos de sua proteção, relegando os direitos post mortem a um arquipélago jurisdicional de direito civil administrado por herdeiros. O artigo defende que a responsabilidade legal deve permanecer com desenvolvedores e operadores das plataformas — nunca ser transferida para a "pessoa" replicada por IA, o que obscureceria a agência humana por trás do produto.',
        en: "There is a structural legal gap behind this: leading data-protection regimes — the EU's GDPR and Brazil's LGPD — explicitly exclude the deceased from their protection, relegating post-mortem rights to a jurisdictional archipelago of civil law managed by heirs. The article argues that legal liability must remain with developers and deployers of the platforms — never shifted onto the AI-replicated \"person,\" which would obscure the human agency behind the product.",
      },
    ],
    sourceNote: { pt: 'p. 14 (Comodificação da memória e necrocapitalismo)', en: 'p. 14 (Memory Commodification and Necrocapitalism)' },
    visual: 'necroFlow',
  },
  {
    id: 'governanca',
    eyebrow: { pt: 'Proposta normativa', en: 'Normative proposal' },
    title: { pt: 'Uma arquitetura para fantasmas programáveis', en: 'An architecture for programmable ghosts' },
    paragraphs: [
      {
        pt: 'A conclusão do artigo não fica apenas no diagnóstico. Os autores propõem uma arquitetura normativa com oito instrumentos, ancorada em três princípios morais — autonomia, não maleficência e dignidade — e alinhada a marcos já existentes, como os deveres de transparência da Lei de Inteligência Artificial da União Europeia para conteúdo sintético.',
        en: "The article's conclusion does not stop at diagnosis. The authors propose a normative architecture with eight instruments, anchored in three moral principles — autonomy, non-maleficence, and dignity — and aligned with existing frameworks, such as the transparency duties of the European Union's Artificial Intelligence Act for synthetic content.",
      },
      {
        pt: 'Cinco desses instrumentos são detalhados com atores responsáveis e passos de implementação imediata: consentimento prévio por padrão ("testamentos de dados"), proveniência e rotulagem obrigatórias, salvaguardas de nível clínico para uso terapêutico, direito de revogação e silêncio, e instrumentos econômicos como taxas sobre o uso comercial.',
        en: 'Five of these instruments are detailed with responsible actors and immediate implementation steps: consent-first defaults ("data wills"), mandatory provenance and labeling, clinical-grade safeguards for therapeutic use, rights of revocability and silence, and economic instruments such as levies on commercial use.',
      },
      {
        pt: 'A tese final é dupla. Primeiro, a tecnonecromancia opera uma tripla reconfiguração: da ontologia (presença performática substitui a lembrança), da ética (o consentimento precisa ser prospectivo e revogável) e da economia política (os incentivos de uma indústria da vida digital podem desalinhar com o luto saudável). Segundo — e é aqui que o artigo termina — sem política que vá além de códigos voluntários, a necropolítica decide quem tem seus restos digitais protegidos e quem é deixado para assombrar sozinho.',
        en: "The final thesis is twofold. First, technonecromancy effects a triple reconfiguration: of ontology (performative presence replaces remembrance), of ethics (consent must be prospective and revocable), and of political economy (the incentives of a digital-life industry can misalign with healthy mourning). Second — and this is where the article ends — without policy that goes beyond voluntary codes, necropolitics decides whose digital remains are protected and who is left to haunt alone.",
      },
    ],
    sourceNote: { pt: 'p. 14–17 (Governança antecipatória, Figura 2, Conclusões)', en: 'p. 14-17 (Anticipatory Governance, Figure 2, Conclusions)' },
    visual: 'governanceWheel',
  },
];

export const funnelSteps: FunnelStep[] = [
  {
    id: 'deep-learning',
    label: { pt: 'Aprendizado profundo', en: 'Deep Learning' },
    description: { pt: 'Analisar dados para compreender padrões.', en: 'Analyzing data to understand patterns.' },
  },
  {
    id: 'modeling',
    label: { pt: 'Modelagem algorítmica', en: 'Algorithmic Modeling' },
    description: { pt: 'Criar modelos que imitam a personalidade.', en: 'Creating models to mimic personality.' },
  },
  {
    id: 'generation',
    label: { pt: 'Geração de simulação', en: 'Simulation Generation' },
    description: { pt: 'Produzir entidades digitais interativas.', en: 'Producing interactive digital entities.' },
  },
];

export const simulacraSteps: SimulacraStep[] = [
  {
    order: 1,
    orderLabel: { pt: 'Cópia fiel', en: 'Faithful copy' },
    relation: { pt: 'Reflete uma realidade subjacente', en: 'Reflects an underlying reality' },
    affordance: { pt: 'Página memorial estática, arquivo de fotos', en: 'Static memorial page, photo archive' },
  },
  {
    order: 2,
    orderLabel: { pt: 'Distorção', en: 'Distortion' },
    relation: { pt: 'Mascara ou distorce uma realidade subjacente', en: 'Masks or distorts an underlying reality' },
    affordance: { pt: 'Imagens retocadas, linhas do tempo editadas', en: 'Retouched images, curated timelines' },
  },
  {
    order: 3,
    orderLabel: { pt: 'Mascarar a ausência', en: 'Masking absence' },
    relation: { pt: 'Finge presença apesar da ausência', en: 'Pretends presence despite absence' },
    affordance: { pt: 'Clone de voz e respostas roteirizadas, chat limitado', en: 'Voice clone and scripted responses, limited chat' },
  },
  {
    order: 4,
    orderLabel: { pt: 'Simulacro puro (hiperrealidade)', en: 'Pure simulacrum (hyperreality)' },
    relation: { pt: 'Dispensa referentes e desloca a realidade', en: 'Skips referents and displaces reality' },
    affordance: { pt: 'Avatar generativo com memória evolutiva (LLM)', en: 'Generative LLM avatar with evolving memory' },
  },
];

export const preservedRows: PreservedRow[] = [
  {
    id: 'lexico',
    dimension: { pt: 'Padrões léxico-discursivos', en: 'Lexico-discursive patterns' },
    retained: { pt: 'Idioleto, tiques estilísticos, esquemas argumentativos aprendidos do corpus', en: 'Idiolect, stylistic tics, argument schemas learned from corpora' },
    embodied: { pt: 'Sensação autobiográfica de lembrança; estrutura de posse da memória ("mesma consciência" de Locke)', en: 'Autobiographical feeling of recall; ownership structure of memory (Lockean "same consciousness")' },
  },
  {
    id: 'temporal',
    dimension: { pt: 'Agência temporal', en: 'Temporal agency' },
    retained: { pt: 'Alternância conversacional, latência de resposta projetada para parecer humana', en: 'Conversational turn-taking, response latency engineered to feel human' },
    embodied: { pt: 'Ritmos biotemporais (fadiga, fome); cadência afetiva ancorada na regulação interoceptiva', en: 'Biotemporal rhythms (fatigue, hunger); affective pacing grounded in interoceptive regulation' },
  },
  {
    id: 'social',
    dimension: { pt: 'Sintonia social', en: 'Social attunement' },
    retained: { pt: 'Roteiros de polidez, consistência de persona, empatia simulada', en: 'Politeness scripts, persona consistency, simulated empathy' },
    embodied: { pt: 'Outro-afetividade genuína via acoplamento corporificado; "intencionalidade motora" da interação vivida', en: 'Genuine other-affectivity via embodied coupling; "motor intentionality" of lived interaction' },
  },
  {
    id: 'continuidade',
    dimension: { pt: 'Continuidade entre ramificações', en: 'Continuity across branches' },
    retained: { pt: 'Múltiplos sucessores com inicialização compartilhada', en: 'Multiple successors with shared initialization' },
    embodied: { pt: 'Unicidade de uma história de vida; a ramificação parfitiana solapa a identidade e rende, no máximo, sobrevivência sem identidade', en: 'Uniqueness of a life-history; Parfitian branching undermines identity and yields at best survival-without-identity' },
  },
  {
    id: 'compreensao',
    dimension: { pt: 'Compreensão', en: 'Understanding' },
    retained: { pt: 'Utilidade pragmática, alta validade preditiva', en: 'Pragmatic usefulness, high predictive validity' },
    embodied: { pt: 'Compreensão semântica com qualia; o hiato sintaxe/semântica de Searle; o "problema difícil" de Chalmers', en: "Semantic understanding with qualia; Searle's syntax/semantics gap; Chalmers' hard problem" },
  },
];

export const caseWindows: CaseWindow[] = [
  {
    id: 'rogueone',
    name: { pt: 'Ressurreição digital em Rogue One', en: 'Digital resurrection in Rogue One' },
    modality: { pt: 'Representação cinematográfica', en: 'Cinematic representation' },
    description: {
      pt: 'Reconstrução digital de rosto e voz de atores para reencenar personagens já falecidos ou ausentes — citado pelo artigo como caso de alta visibilidade pública de animação facial e vocal.',
      en: "Digital reconstruction of an actor's face and voice to re-stage characters who are deceased or absent — cited by the article as a high-visibility public case of facial and vocal animation.",
    },
    tension: {
      pt: 'Onde termina a homenagem e começa a apropriação de uma imagem que a pessoa não pode mais consentir em usar?',
      en: 'Where does homage end and the appropriation of an image the person can no longer consent to using begin?',
    },
    source: { page: '7', locator: { pt: 'critérios de seleção dos casos', en: 'case selection criteria' } },
  },
  {
    id: 'deepnostalgia',
    name: { pt: 'Deep Nostalgia (MyHeritage)', en: 'Deep Nostalgia (MyHeritage)' },
    modality: { pt: 'Animação facial', en: 'Facial animation' },
    description: {
      pt: 'Converte fotos estáticas de parentes falecidos em curtos clipes animados — piscar, sorrir, virar a cabeça — por meio de deep learning.',
      en: 'Converts static photos of deceased relatives into short animated clips — blinking, smiling, turning the head — via deep learning.',
    },
    tension: {
      pt: 'Kidd e Nieto McAvoy descrevem uma "nostalgia algorítmica": o movimento mínimo já basta para convocar afeto, mesmo sem resolver a ausência.',
      en: 'Kidd and Nieto McAvoy describe an "algorithmic nostalgia": minimal movement is already enough to summon affect, even without resolving absence.',
    },
    source: { page: '8', locator: { pt: 'Luto e apego mediado por IA', en: 'Mourning and AI-Mediated Attachment' } },
  },
  {
    id: 'griefbots',
    name: { pt: 'HereAfter AI e o ecossistema de griefbots', en: 'HereAfter AI and the griefbot ecosystem' },
    modality: { pt: 'IA conversacional', en: 'Conversational AI' },
    description: {
      pt: 'Agentes treinados nos rastros digitais de uma pessoa (textos, gravações, entrevistas) para sustentar presença conversacional bidirecional — ao lado de plataformas como StoryFile e Eternos.',
      en: "Agents trained on a person's digital footprints (texts, recordings, interviews) to sustain two-way conversational presence — alongside platforms like StoryFile and Eternos.",
    },
    tension: {
      pt: 'O ecossistema oscila entre códigos de consentimento e promessas de legado conversacional, tratando o retorno dos mortos como funcionalidade de plataforma.',
      en: 'The ecosystem oscillates between codes of consent and promises of conversational legacy, treating the return of the dead as a platform feature.',
    },
    source: { page: '9', locator: { pt: 'griefbots e a indústria da vida digital', en: 'griefbots and the digital afterlife industry' } },
  },
];

export const riskRows: RiskRow[] = [
  {
    id: 'distorcao',
    vector: { pt: 'Distorção temporal e checagem compulsiva', en: 'Temporal distortion and compulsive checking' },
    mechanism: { pt: 'Responsividade infinita, geração de novidade', en: 'Infinite responsiveness, novelty generation' },
    mitigation: { pt: 'Limites de sessão, pausas obrigatórias, "modo de despedida" gradual', en: 'Session caps, cooldowns, graduated "goodbye mode"' },
  },
  {
    id: 'ilusao',
    vector: { pt: 'Ilusão de presença ou confusão ontológica', en: 'Illusion of presence or ontological confusion' },
    mechanism: { pt: 'Pistas antropomórficas, realismo de voz, suavização de latência', en: 'Anthropomorphic cues, voice realism, latency smoothing' },
    mitigation: { pt: 'Aviso persistente de simulação, controle de realismo, modo "apenas memorial"', en: 'Persistent simulation disclaimers, tone-down realism controls, optional "memorial-only" mode' },
  },
  {
    id: 'dependencia',
    vector: { pt: 'Dependência afetiva e ruminação', en: 'Affective dependence and rumination' },
    mechanism: { pt: 'Laços conversacionais, respostas-surpresa', en: 'Conversational loops, surprise replies' },
    mitigation: { pt: 'Decaimento opcional da frequência de resposta, roteiros clínicos de fechamento, roteamento de crise', en: 'Opt-in decay of reply frequency, clinician-designed scripts for closure, crisis-flag routing' },
  },
  {
    id: 'retencao',
    vector: { pt: 'Incentivos exploratórios de retenção', en: 'Exploitative retention incentives' },
    mechanism: { pt: 'Design de assinatura, engajamento gamificado', en: 'Subscription design, gamified engagement' },
    mitigation: { pt: 'Relatórios públicos de retenção, auditorias independentes, declarações de impacto ético', en: 'Public reporting of retention metrics, independent audits, ethics impact statements' },
  },
  {
    id: 'consentimento',
    vector: { pt: 'Opacidade de consentimento (falecido e sobreviventes)', en: 'Consent opacity (deceased and survivors)' },
    mechanism: { pt: 'Termos vagos, aprisionamento de dados', en: 'Vague terms, data lock-in' },
    mitigation: { pt: 'Modelos granulares de consentimento, API de revogação, executores de dados póstumos', en: 'Granular consent templates, revocation API, post-mortem data executors' },
  },
];

export const necroFlowSteps = [
  { id: 'dados', label: { pt: 'Dados do falecido', en: 'Data of the deceased' }, description: { pt: 'Textos, voz, imagens e interações deixadas em vida', en: 'Texts, voice, images, and interactions left behind in life' } },
  { id: 'treino', label: { pt: 'Treinamento do modelo', en: 'Model training' }, description: { pt: 'Em geral, sem consentimento pré-morte explícito', en: 'Usually without explicit pre-mortem consent' } },
  { id: 'produto', label: { pt: 'Produto de assinatura', en: 'Subscription product' }, description: { pt: '"Legado" comercializado como funcionalidade de plataforma', en: '"Legacy" marketed as a platform feature' } },
  { id: 'lacuna', label: { pt: 'Lacuna jurídica', en: 'Legal gap' }, description: { pt: 'RGPD e LGPD excluem os falecidos da proteção de dados', en: 'GDPR and LGPD exclude the deceased from data protection' } },
];

export const governanceItems: GovernanceItem[] = [
  { id: 'consentimento', label: { pt: 'Padrões de consentimento prévio', en: 'Consent-first defaults' }, detail: { pt: 'Testamentos de dados para o falecido', en: 'Data wills for the deceased' } },
  { id: 'proveniencia', label: { pt: 'Proveniência obrigatória', en: 'Mandatory provenance' }, detail: { pt: 'Rotulagem de mídia sintética', en: 'Labeling of synthetic media' } },
  { id: 'revogabilidade', label: { pt: 'Direitos de revogabilidade', en: 'Rights of revocability' }, detail: { pt: 'Cláusulas de expiração para os dados', en: 'Sunset clauses for data' } },
  { id: 'clinico', label: { pt: 'Salvaguardas de nível clínico', en: 'Clinical-grade safeguards' }, detail: { pt: 'Supervisão do uso terapêutico', en: 'Therapeutic use oversight' } },
  { id: 'cuidado', label: { pt: 'Deveres de cuidado', en: 'Duties of care' }, detail: { pt: 'Auditorias por terceiros exigidas', en: 'Third-party audits required' } },
  { id: 'manipulacao', label: { pt: 'Proibições de manipulação', en: 'Bans on manipulation' }, detail: { pt: 'Proibir design manipulador', en: 'Prohibit manipulative design' } },
  { id: 'economico', label: { pt: 'Instrumentos econômicos', en: 'Economic levies' }, detail: { pt: 'Tributação do uso comercial', en: 'Commercial use taxation' } },
];

export const governanceProgression = {
  before: { pt: 'Vida digital póstuma não regulada', en: 'Unregulated digital afterlife' },
  middle: { pt: 'Padrões de consentimento prévio', en: 'Consent-first defaults' },
  after: { pt: 'Vida digital póstuma ética', en: 'Ethical digital afterlife' },
};

export const prioritySteps: PriorityStep[] = [
  {
    id: 'consentimento',
    title: { pt: 'Padrões de consentimento prévio (testamentos de dados)', en: 'Consent-first defaults (data wills)' },
    actors: { pt: 'Legisladores e autoridades de proteção de dados (ex.: Comitê Europeu de Proteção de Dados, ANPD)', en: "Legislators and data protection authorities (e.g., European Data Protection Board, Brazil's ANPD)" },
    action: { pt: 'Exigir instruções pré-morte específicas, granulares e revogáveis como pré-requisito para qualquer simulação; primeiro passo: modelos jurídicos padronizados de custódia de dados post mortem.', en: 'Mandate specific, granular, revocable pre-mortem instructions as a prerequisite for any simulation; first step: standardized legal templates for post-mortem data stewardship.' },
  },
  {
    id: 'proveniencia',
    title: { pt: 'Proveniência e rotulagem', en: 'Provenance and labeling' },
    actors: { pt: 'Empresas de tecnologia, designers de UX, órgãos normativos (IEEE, ISO)', en: 'Technology companies, UX designers, standard-setting bodies (IEEE, ISO)' },
    action: { pt: 'Proveniência legível por máquina obrigatória para voz, texto e imagem; prioridade imediata: marcas d\'água visíveis na interface e APIs públicas de verificação.', en: 'Mandatory machine-readable provenance for voice, text, and image outputs; immediate priority: conspicuous UI watermarks and public verification APIs.' },
  },
  {
    id: 'clinico',
    title: { pt: 'Salvaguardas de nível clínico', en: 'Clinical-grade safeguards' },
    actors: { pt: 'Reguladores de saúde, comitês de ética, plataformas de vida digital', en: 'Health regulators, ethics boards, DAI platforms' },
    action: { pt: 'Quando o produto se apresenta como apoio ao luto, exigir supervisão terapêutica: limites de sessão, pausas forçadas, "modos de despedida", encaminhamento automático em caso de luto prolongado.', en: 'When the product presents itself as grief support, require therapeutic oversight: session caps, forced cooldowns, "goodbye" modes, automated referral for prolonged grief symptoms.' },
  },
  {
    id: 'revogacao',
    title: { pt: 'Revogabilidade e direito ao silêncio', en: 'Revocability and right to silence' },
    actors: { pt: 'Executores de espólio e administradores de plataforma', en: 'Estate executors and platform administrators' },
    action: { pt: 'Herdeiros ou fiduciários designados devem reter o direito estatutário de suspender ou aposentar réplicas, via API de retirada ("kill switch") acessível.', en: 'Heirs or designated fiduciaries must retain the statutory right to suspend or retire replicas, via an accessible "kill switch" API.' },
  },
  {
    id: 'economico',
    title: { pt: 'Instrumentos econômicos ou taxas', en: 'Economic instruments or levies' },
    actors: { pt: 'Autoridades fiscais e formuladores de políticas', en: 'Tax authorities and policymakers' },
    action: { pt: 'Instituir uma taxa ou fundo de royalties sobre a tecnonecromancia comercial, direcionado a pesquisa independente em saúde mental e letramento digital.', en: 'Institute a levy or royalty fund on commercial technonecromancy, directed to independent mental-health research and digital literacy.' },
  },
];

export const evidenceLedger: EvidenceItem[] = [
  { id: 'tese', claim: { pt: 'Tese central: agentes póstumos são fenomenologicamente suficientes para reorganizar o luto, mas ontologicamente insuficientes como continuantes de pessoas.', en: 'Central thesis: posthumous agents are phenomenologically sufficient to reorganize mourning, but ontologically insufficient as continuants of persons.' }, source: { page: '1', locator: { pt: 'Resumo', en: 'Abstract' } } },
  { id: 'definicao', claim: { pt: 'Tecnonecromancia é definida como "a convocação tecnicamente mediada dos mortos para simulação interativa".', en: 'Technonecromancy is defined as "the technically mediated conjuration of the dead for interactive simulation."' }, source: { page: '3', locator: { pt: 'Introdução', en: 'Introduction' } } },
  { id: 'termos-rejeitados', claim: { pt: 'Pseudonecromancia, necromancia digital e cibernecromancia são rejeitados como termos por razões específicas (moralismo, escopo, superindexação do ciberespaço).', en: 'Pseudo-necromancy, digital necromancy, and cyber-necromancy are rejected as terms for specific reasons (moralism, scope, over-indexing cyberspace).' }, source: { page: '3', locator: { pt: 'Introdução', en: 'Introduction' } } },
  { id: 'figura1', claim: { pt: 'Figura 1 descreve o processo de transformação de dados em simulações digitais em três etapas.', en: 'Figure 1 describes the three-step process of transforming data into digital simulations.' }, source: { page: '4', locator: { pt: 'Figura 1', en: 'Figure 1' } } },
  { id: 'dois-pilares', claim: { pt: 'A moldura teórica se apoia em dois eixos primários: sociotécnica da morte e ontologia do simulacro/hiperrealidade.', en: 'The theoretical framework is anchored in two primary axes: the sociotechnics of death and the ontology of simulation/hyperreality.' }, source: { page: '5', locator: { pt: 'Moldura Teórica', en: 'Theoretical Framework' } } },
  { id: 'baudrillard', claim: { pt: 'As quatro ordens do simulacro de Baudrillard vão do reflexo fiel à hiperrealidade sem referente.', en: "Baudrillard's four orders of simulacra move from faithful reflection to referent-less hyperreality." }, source: { page: '12', locator: { pt: 'Ontologia dos Simulacros', en: 'Ontology of Simulacra' } } },
  { id: 'derrida', claim: { pt: 'A hauntologia de Derrida define o espectro como um "estar-aí" de alguém ausente que insiste e resiste ao fechamento.', en: "Derrida's hauntology defines the specter as a \"being-there\" of an absent one that insists and resists closure." }, source: { page: '12', locator: { pt: 'Ontologia dos Simulacros', en: 'Ontology of Simulacra' } } },
  { id: 'tabela3', claim: { pt: 'Tabela 3 mapeia as quatro ordens simulacrais de Baudrillard a affordances tecnonecromânticas concretas.', en: 'Table 3 maps the four Baudrillardian simulacral orders to concrete technonecromantic affordances.' }, source: { page: '13', locator: { pt: 'Tabela 3', en: 'Table 3' } } },
  { id: 'tabela2', claim: { pt: 'Tabela 2 distingue, em cinco dimensões, o que modelos póstumos retêm do que depende de existência corporificada.', en: 'Table 2 distinguishes, across five dimensions, what posthumous models retain from what depends on embodied existence.' }, source: { page: '11', locator: { pt: 'Tabela 2', en: 'Table 2' } } },
  { id: 'eliza', claim: { pt: 'O "efeito Eliza" — antropomorfização automática de scripts triviais — é ampliado por griefbots contemporâneos.', en: 'The "ELIZA effect" — automatic anthropomorphization of trivial scripts — is amplified by contemporary griefbots.' }, source: { page: '11', locator: { pt: 'Identidade Simulada e Cognição Corporificada', en: 'Simulated Identity and Embodied Cognition' } } },
  { id: 'uncanny', claim: { pt: 'O vale da estranheza de Mori contrabalança o efeito Eliza: verossimilhança quase perfeita pode provocar estranhamento em vez de conforto.', en: "Mori's uncanny valley counterbalances the ELIZA effect: near-perfect verisimilitude can provoke estrangement rather than comfort." }, source: { page: '11', locator: { pt: 'Identidade Simulada e Cognição Corporificada', en: 'Simulated Identity and Embodied Cognition' } } },
  { id: 'continuing-bonds', claim: { pt: 'Klass et al. (1996) revisaram a ortodoxia do luto: manter um vínculo interno com o falecido pode ser adaptativo, não patológico.', en: 'Klass et al. (1996) revised mourning orthodoxy: maintaining an inner bond with the deceased can be adaptive, not pathological.' }, source: { page: '7', locator: { pt: 'Luto e Apego Mediado por IA', en: 'Mourning and AI-Mediated Attachment' } } },
  { id: 'lindemann', claim: { pt: 'Lindemann (2022) alerta que griefbots podem bloquear a transição do "mundo-com-o-morto" para o "mundo-sem-o-morto".', en: 'Lindemann (2022) warns that griefbots can block the transition from the "world-with-the-dead" to the "world-without-the-dead."' }, source: { page: '8', locator: { pt: 'Luto e Apego Mediado por IA', en: 'Mourning and AI-Mediated Attachment' } }, caveat: { pt: 'Argumento normativo do autor citado, não achado estatístico.', en: "The cited author's normative argument, not a statistical finding." } },
  { id: 'tabela1', claim: { pt: 'Tabela 1 propõe heurísticas de mitigação de risco ligando cinco vetores clínicos/éticos a mecanismos e mitigações operacionais.', en: 'Table 1 proposes risk-mitigation heuristics linking five clinical/ethical vectors to mechanisms and operational mitigations.' }, source: { page: '9', locator: { pt: 'Tabela 1', en: 'Table 1' } } },
  { id: 'selecao-casos', claim: { pt: 'Os três casos culturais foram selecionados por representarem modalidades técnicas distintas, alta visibilidade pública e contestação ética significativa.', en: 'The three cultural cases were selected for representing distinct technical modalities, high public visibility, and significant ethical contestation.' }, source: { page: '7', locator: { pt: 'Abordagem de Pesquisa', en: 'Research Approach' } } },
  { id: 'deep-nostalgia-fonte', claim: { pt: 'Kidd e Nieto McAvoy (2023) descrevem o Deep Nostalgia como memória remediada e "nostalgia algorítmica".', en: 'Kidd and Nieto McAvoy (2023) describe Deep Nostalgia as remediated memory and "algorithmic nostalgia."' }, source: { page: '8', locator: { pt: 'Luto e Apego Mediado por IA', en: 'Mourning and AI-Mediated Attachment' } } },
  { id: 'griefbot-def', claim: { pt: 'Jiménez-Alonso e Brescó de Luna (2023) definem griefbot como artefato conversacional treinado nos rastros digitais do falecido.', en: 'Jiménez-Alonso and Brescó de Luna (2023) define a griefbot as a conversational artifact trained on the digital footprints of the deceased.' }, source: { page: '8', locator: { pt: 'Luto e Apego Mediado por IA', en: 'Mourning and AI-Mediated Attachment' } } },
  { id: 'dai-necro', claim: { pt: 'O artigo nomeia a Indústria da Vida Digital Póstuma (DAI) e a caracteriza como necrocapitalismo (Banerjee, 2008).', en: 'The article names the Digital Afterlife Industry (DAI) and characterizes it as necrocapitalism (Banerjee, 2008).' }, source: { page: '14', locator: { pt: 'Comodificação da Memória e Necrocapitalismo', en: 'Memory Commodification and Necrocapitalism' } } },
  { id: 'gdpr-lgpd', claim: { pt: 'RGPD (UE) e LGPD (Brasil) excluem explicitamente os falecidos da proteção de dados pessoais.', en: 'The GDPR (EU) and LGPD (Brazil) explicitly exclude the deceased from personal-data protection.' }, source: { page: '14', locator: { pt: 'Comodificação da Memória e Necrocapitalismo', en: 'Memory Commodification and Necrocapitalism' } } },
  { id: 'responsabilidade', claim: { pt: 'A responsabilidade legal deve permanecer com desenvolvedores e operadores, não ser transferida à IA replicada.', en: 'Legal liability must remain with developers and deployers, not be shifted onto the replicated AI.' }, source: { page: '14', locator: { pt: 'Comodificação da Memória e Necrocapitalismo', en: 'Memory Commodification and Necrocapitalism' } } },
  { id: 'figura2', claim: { pt: 'Figura 2 apresenta oito instrumentos de uma arquitetura normativa para a governança da tecnonecromancia.', en: 'Figure 2 presents eight instruments of a normative architecture for governing technonecromancy.' }, source: { page: '15', locator: { pt: 'Figura 2', en: 'Figure 2' } } },
  { id: 'cinco-passos', claim: { pt: 'Cinco instrumentos prioritários recebem atores responsáveis e passos de implementação imediata detalhados.', en: 'Five priority instruments receive detailed responsible actors and immediate implementation steps.' }, source: { page: '16', locator: { pt: 'Governança Antecipatória', en: 'Anticipatory Governance' } } },
  { id: 'metodo', claim: { pt: 'A pesquisa se declara teórico-conceitual, crítica e exploratória — não empírica no sentido positivista.', en: 'The research declares itself theoretical-conceptual, critical, and exploratory — not empirical in the positivist sense.' }, source: { page: '6', locator: { pt: 'Abordagem de Pesquisa', en: 'Research Approach' } } },
  { id: 'ia-declaracao', claim: { pt: 'Os autores declaram uso de Google Gemini 2.5 Pro e ChatGPT 5 para pesquisa exploratória, tradução e revisão — sob supervisão integral.', en: 'The authors disclose using Google Gemini 2.5 Pro and ChatGPT 5 for exploratory research, translation, and proofreading — under full supervision.' }, source: { page: '18', locator: { pt: 'Declaração de Uso de Inteligência Artificial', en: 'Artificial Intelligence Use Statement' } } },
];
