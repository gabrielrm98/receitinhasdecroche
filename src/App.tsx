import { CheckCircle2, Star, PlayCircle, BookOpen, Users, ArrowRight, Gift, Infinity, ShieldCheck, HelpCircle, ChevronDown, Quote } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 selection:bg-brand-200" style={{ scrollBehavior: 'smooth' }}>
      {/* HEADER / HERO SECTION */}
      <header className="relative bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606421867175-60b6183ec2e0?q=80&w=2574&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-6xl pt-24 pb-32">

          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-brand-50 backdrop-blur-sm shadow-sm mb-6 border border-white/20 text-sm font-semibold tracking-wide uppercase">
              <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              Oferta Exclusiva por Tempo Limitado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-md">
              Curso completo e <span className="text-yellow-300">+2000 modelos</span> de Sapatinhos de CROCHÊ para Você!
            </h1>
            <p className="text-lg md:text-xl text-brand-100 mb-10 max-w-2xl font-medium">
              Descubra o passo a passo completo, do zero ao avançado, e comece a criar peças incríveis hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-brand-900 font-bold rounded-full shadow-lg shadow-yellow-400/30 transition-all hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Quero Garantir Meu Acesso
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            {/* Imagens Flutuantes na Hero */}
            <div className="relative w-full h-[500px]">
              <div className="absolute top-0 right-10 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 animate-float z-20">
                <img src="/hero1.jpg" alt="Sapatinho 1" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-10 right-0 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 animate-float-delayed z-30">
                <img src="/hero2.jpg" alt="Sapatinho 2" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-20 left-0 w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 animate-float z-10" style={{ animationDelay: '1.5s' }}>
                <img src="/hero3.jpg" alt="Sapatinho 3" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-10 w-40 h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 animate-float-delayed z-20" style={{ animationDelay: '2s' }}>
                <img src="/hero4.jpg" alt="Sapatinho 4" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Wave transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.72,196.36,108.57,243.62,99.85,287.6,73.1,321.39,56.44Z" className="fill-gray-50"></path>
          </svg>
        </div>
      </header>

      {/* BENEFÍCIOS SECTION */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Veja tudo que você vai receber</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 text-brand-600">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">+2000 Receitas</h3>
              <p className="text-gray-600">Terá acesso a +2000 receitas e gráficos detalhados de sapatinhos de crochê.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 text-brand-600">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Modelos Incríveis</h3>
              <p className="text-gray-600">Além de sapatinhos, inclua roupas infantis, vestidos, amigurumis e muito mais!</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 text-brand-600">
                <PlayCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Video-aulas passo a passo</h3>
              <p className="text-gray-600">Aulas em vídeo detalhadas ensinando do absoluto zero ao nível avançado.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 text-brand-600">
                <Infinity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Acesso Vitalício</h3>
              <p className="text-gray-600">Acesso ao conteúdo é vitalício e também inclui um maravilhoso certificado de conclusão.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-2 transition-transform duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-6 text-brand-600">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comunidade VIP</h3>
              <p className="text-gray-600">Acesso total à comunidade exclusiva de Crocheteiras Profissionais para tirar dúvidas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA SECTION */}
      <section className="py-20 bg-brand-50 relative border-y border-brand-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Veja Alguns dos Modelos</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Esses são apenas alguns dos milhares de modelos que você aprenderá a criar passo a passo com o nosso material.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group overflow-hidden rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img src="/sapatinho1.jpeg" alt="Modelo de Sapatinho 1" className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img src="/sapatinho2.jpeg" alt="Modelo de Sapatinho 2" className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img src="/sapatinho3.jpeg" alt="Modelo de Sapatinho 3" className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="group overflow-hidden rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <img src="/sapatinho4.png" alt="Modelo de Sapatinho 4" className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA/PREÇOS SECTION */}
      <section id="precos" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Garanta Seu Acesso Agora</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Você paga uma única vez e tem acesso a tudo sem mensalidades!</p>
          </div>

          <div className="flex justify-center max-w-lg mx-auto">

            {/* PACOTE ÚNICO */}
            <div className="w-full bg-gradient-to-br from-brand-900 to-brand-700 rounded-3xl p-1 relative z-10 shadow-2xl shadow-brand-900/40">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-brand-900 font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide flex items-center gap-1 shadow-md">
                <Star className="w-4 h-4 fill-brand-900" /> Ofertão Exclusivo
              </div>
              <div className="bg-brand-900 h-full w-full rounded-[23px] p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-brand-500 blur-[100px] opacity-20 rounded-full"></div>

                <h3 className="text-2xl font-bold text-yellow-300 flex items-center gap-2 mb-2 relative z-10">
                  💎 Pacote Completo
                </h3>
                <p className="text-brand-200 text-sm font-semibold mb-4 relative z-10">ACESSO VITALÍCIO A TUDO</p>
                <div className="flex items-baseline gap-2 mb-1 relative z-10 opacity-70">
                  <span className="text-2xl text-white line-through decoration-red-500">De R$67,00</span>
                </div>
                <div className="flex items-baseline gap-2 mb-8 relative z-10">
                  <span className="text-xl text-yellow-400">Por</span>
                  <span className="text-6xl font-extrabold text-white">R$10</span>
                  <span className="text-yellow-400 font-medium">,00</span>
                </div>

                <div className="space-y-4 mb-8 flex-1 relative z-10">
                  <p className="text-white font-semibold flex items-center gap-2 pb-2 mb-2 border-b border-white/20">
                    <Gift className="w-5 h-5 text-yellow-400" /> O que você vai receber:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-white">Pacote gigante com <strong>2.000 receitas</strong> de Sapatinhos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-white">Moldes bíblicos, bonecas e heróis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-white">Modelos para datas comemorativas (Natal, etc)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-white">Roupas infantis, amigurumis e mais!</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-white"><strong>Sempre atualizado</strong> com novas receitas e vídeos passo a passo</span>
                    </li>
                  </ul>
                </div>
                <a href="https://pay.lowify.com.br/checkout?product_id=WQW0Ue" className="w-full block text-center py-5 px-6 rounded-xl font-bold text-brand-900 bg-yellow-400 hover:bg-yellow-300 transition-all text-lg shadow-lg shadow-yellow-400/20 hover:scale-[1.02] relative z-10">
                  Quero o Pacote Completo
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEPOIMENTOS SECTION */}
      <section className="py-20 bg-brand-50 relative border-t border-brand-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que nossas alunas estão dizendo</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Junte-se a milhares de mulheres que já transformaram suas vidas e descobriram uma nova paixão e fonte de renda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4 gap-1">
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
              </div>
              <Quote className="w-10 h-10 text-brand-100 mb-4" />
              <p className="text-gray-600 mb-6 flex-1 italic">
                "Eu nunca tinha pegado numa agulha na vida! O curso explica tudo tão detalhado e os gráficos são tão fáceis de ler que na primeira semana eu já terminei o meu primeiro par de sapatinhos. Estou apaixonada!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center font-bold text-brand-700 text-xl">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Márcia Santos</h4>
                  <p className="text-sm text-gray-500">Aluna do Pacote Completo</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4 gap-1">
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
              </div>
              <Quote className="w-10 h-10 text-brand-100 mb-4" />
              <p className="text-gray-600 mb-6 flex-1 italic">
                "Gente, vale cada centavo! Eu já fazia crochê antes, mas os guias e as receitas desse pacote abriram a minha mente pra muita coisa linda que eu nem imaginava fazer. Já estou vendendo e faturando alto!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center font-bold text-pink-700 text-xl">
                  F
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Fernanda Oliveira</h4>
                  <p className="text-sm text-gray-500">Crocheteira Empreendedora</p>
                </div>
              </div>
            </div>

            {/* Depoimento 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col lg:col-span-1 md:col-span-2">
              <div className="flex text-yellow-400 mb-4 gap-1">
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400" />
              </div>
              <Quote className="w-10 h-10 text-brand-100 mb-4" />
              <p className="text-gray-600 mb-6 flex-1 italic">
                "O que me conquistou foi a comunidade de alunas. Sempre que tenho uma dúvida, mando lá e as meninas ou os professores me ajudam na mesma hora. Sem contar que o acesso é vitalício, uma economia de tempo e dinheiro absurda ter todos esses modelos reunidos."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-700 text-xl">
                  C
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Camila Rodrigues</h4>
                  <p className="text-sm text-gray-500">Aluna VIP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA SECTION */}
      <section className="py-16 bg-green-500 text-white relative">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ShieldCheck className="w-20 h-20 mx-auto text-green-100 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Garantia Incondicional de 7 Dias</h2>
          <p className="text-xl text-green-50 max-w-2xl mx-auto mb-8">
            Nós confiamos tanto na qualidade do nosso material que oferecemos uma garantia de 7 dias. Se por qualquer motivo você não gostar e achar que não valeu a pena, basta nos enviar um e-mail que devolveremos 100% do seu dinheiro, sem perguntas!
          </p>
          <div className="bg-green-600/30 inline-block px-6 py-3 rounded-full font-semibold border border-green-400/30">
            Risco Zero para você!
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-brand-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            <details className="group bg-gray-50 border border-gray-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer text-gray-900">
                <span>Como vou receber o meu acesso?</span>
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-left">
                Logo após a confirmação do pagamento, você receberá um e-mail com todas as instruções para acessar a nossa plataforma exclusiva. Lá estará todo o material prometido!
              </div>
            </details>

            <details className="group bg-gray-50 border border-gray-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer text-gray-900">
                <span>Por quanto tempo poderei acessar?</span>
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-left">
                O acesso é 100% vitalício! Diferente de outros cursos, você paga apenas uma vez e tem as receitas e todo o conteúdo para acessar pelo tempo que desejar, para sempre.
              </div>
            </details>

            <details className="group bg-gray-50 border border-gray-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer text-gray-900">
                <span>Nunca peguei numa agulha, vou conseguir fazer?</span>
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-left">
                Com certeza! Nossas vídeo-aulas são extremamente didáticas e mostram o passo a passo bem de pertinho. Temos dezenas de alunas que começaram do absoluto zero e já fazem trabalhos incríveis.
              </div>
            </details>

            <details className="group bg-gray-50 border border-gray-200 rounded-xl [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer text-gray-900">
                <span>As receitas são em PDF ou em vídeo?</span>
                <ChevronDown className="w-5 h-5 text-gray-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-left">
                Ambos! O curso inclui +2000 gráficos e receitas detalhadas em arquivos digitais para baixar, e as vídeo-aulas passo a passo para te ajudar na prática com as peças.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-12 text-center border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-yellow-400 mb-6">
            <Infinity className="w-8 h-8" />
          </div>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
            O acesso ao conteúdo é vitalício. Você pagará uma única vez e terá as melhores receitas e gráficos disponíveis para sempre.
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Curso de Crochê VIP. Todos os direitos reservados.
          </p>
        </div>
      </footer>


    </div>
  );
}

export default App;
