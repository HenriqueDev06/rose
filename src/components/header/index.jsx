import React from "react";
import { Container } from "./styles";

import Logo from "../../images/logo-topo.webp";
import Image from "../image";

const Header = () => {
  return (
    <Container>
      <div className="navbar display-flex">
        <img src="https://osinatagotas.online/wp-content/uploads/2023/03/Ativo-2-3.svg" />
        <h1>BEM ESTAR</h1>
        <a href="https://g1.globo.com/">
          <i class="fas fa-search"></i>
        </a>
      </div>
      <div className="content">
        <h1 className="text_1">
          Geleia Real, que remove manchas, combate as rugas, trata a foliculite
          e promove uma pele jovem, sem marcas de expressão chega ao Brasil.
        </h1>
        <p className="p_1 text_sub">
          A fórmula, viabilizada pela ANVISA apenas no final de 2022, chega ao
          Brasil em fevereiro de 2023 e já está sendo recomendada por
          dermatologistas para rejuvenescimento efetivo da pele
        </p>
        <img
          src="https://osinatagotas.online/wp-content/uploads/2023/03/portais.png"
          id="images__"
        />
        <p className="p_2 text_sub">
          <span>Por Carlos Castro – São Paulo</span>
          <br />
          <span>20/02/2023 - Atualizado há 20 minutos</span>
        </p>
        <Image
          url={
            "https://amazonicarosa.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/Design-sem-nome-1024x576.jpg.webp"
          }
          sub={
            "Descoberta recente, a Rosa Mosqueta Amazônica promove resultados surpreendentes."
          }
        />
        <p className="text_main">
          Estima-se que as rugas e linhas de expressão afetam mais de 4 bilhões
          de pessoas em todo o mundo, sendo que mais de 3 bilhões são mulheres.
          No Brasil, cerca de 70% das mulheres têm alguma queixa relacionada a
          pele, seja por conta das rugas ou por após os 30, não conseguirem
          retomar a pele jovial com um aspecto natural e saudável, além disso
          mulheres mais jovens tem sofrido com manchas, principalmente por acne
          e excesso de sol, entre os problemas que mais incomodam as mulheres
          podemos citar: Foliculite, manchas no corpo e bolinhas de alergia.
        </p>
        <br />
        <p className="text_main">
          No mercado brasileiro existem vários tratamentos que prometem
          solucionar o problema, desde Aplicações, Acupuntura facial, Patches
          antirrugas, Peeling químico e até Preenchimento e terapia celular.
          Nenhum deles, entretanto, têm a mesma comprovação científica e a mesma
          garantia de eficácia. No entanto um estudo americano promete
          solucionar esse problema! Até 2021 esse estudo era puramente
          internacional e o tratamento ainda não havia sido disponibilizado ao
          público Brasileiro.
        </p>
        <br />
        <p className="text_main">
          Um tratamento americano recém desenvolvido a base de{" "}
          <strong>Óleo de Rosa Mosqueta Amazônica</strong> promete curar esse
          problema, durante estudos de laboratório, os cientistas identificaram
          que uma medicação natural, usada a séculos por indígenas poderia
          solucionar esse problema, a Rosa Mosqueta Amazônica, tradicionalmente
          conhecida por suas propriedades cicatrizantes, clareadores e
          fitoterápicas também teve um efeito forte sobre a pele das pacientes,
          estimulando-a a criação de novas células do zero e rejuvenescendo a
          pele. Ela contém um poderoso componente capaz de inativar uma proteína
          promove o envelhecimento seria uma das responsáveis pela rugas na
          pele, estimulando a produção de novas células do zero deixando a pele
          jovem, uniforme e sem manchas. Comprovou-se que a proteína combate
          rugas sem nenhum efeito colateral. Com garantias e comprovações
          cientificas de 99% de eficácia no FDA, Anvisa Americana. Conheça a
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            {" "}
            Rosa Mosqueta Amazônica®
          </a>
        </p>
        <Image
          url={
            "https://amazonicarosa.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/img2.jpeg.webp"
          }
          sub={
            "Centro de pesquisas do FDA, agência federal do Departamento de Saúde e Serviços Humanos dos Estados Unidos. (Foto: Reprodução/Murilo Serra G1)"
          }
        />
        <p className="text_main">
          A{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            {" "}
            Rosa Mosqueta Amazônica
          </a>
          , ajuda a manter a sustentação e a hidratação da pele, evitando a
          flacidez, as linhas e sinais de expressão, preenchendo e mantendo a
          pele hidratada, viçosa e revitalizada. Por ser um componente natural
          essa substância é muito bem aceita pelas camadas da pele.
        </p>
        <br />
        <p className="text_main">
          Combinado ao Ácido Hialurônico + Colágeno Verisol, a pele fica mais
          saudável e livre daquela aparência cansada e sem viço. Ou seja, é um
          Tratamento Rejuvenescedor. E por ser encontrado em gotas com aplicação
          tópica na pele a absorção é rápida e as dosagens são mais
          concentradas.
        </p>
        <br />

        <Image
          url={
            "https://amazonicarosa.com.br/wp-content/uploads/2023/02/manchas-piel-1024x431.webp"
          }
          sub={
            "Tratamento com Rosa Mosqueta Amazônica, resultado após 3 meses de tratamento. (Foto: Reprodução FDA/Murilo Serra G1)"
          }
        />
        <h1>Resultados Surpreendentes</h1>
        <br />
        <p className="text_main">
          Lúcia Hoffmann, 56, conta que foi chamada no início de novembro pela
          equipe{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Amazony
          </a>{" "}
          para fazer um teste sem custos do{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Rosa Amazônica
          </a>{" "}
          por 150 dias. Ela relatou que o resultado foi muito maior do que
          poderia imaginar:{" "}
          <article style={{ opacity: 0.8, marginTop: "10px" }}>
            “Fui fumante durante por mais de 10 anos e de uns tempos pra cá meus
            pés de galinha estavam cada vez mais aparentes. Eu já não sabia o
            que fazer, pois havia tentado todo tipo de tratamento e produto, mas
            nada funcionava. Foi então que por indicação de uma amiga conheci o{" "}
            <a
              href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58"
              style={{ opacity: 1 }}
            >
              Rosa Amazônica
            </a>
            . Hoje posso afimar que não só salvei minha pele como também minha
            autoestima.
          </article>
        </p>
        <br />
        <p className="text_main">
          Lúcia conseguiu acabar com as rugas e começou a aparentar 10 anos mais
          nova, e ainda brinca que suas amigas sempre perguntam o segredo do seu
          rosto, e Lúcia brinca. “Segredinho das blogueiras, e eu importei dos
          Estados Unidos… Tava me sentindo feia com as rugas, tive que dar um
          jeito né? Eu gosto do meu rosto jovial, e em{" "}
          <strong>5 meses ele rejuvenesceu 10 anos </strong> (risos).” Ela
          enfatiza: “É um produto com uma tecnologia fantástica. Nunca vai
          faltar na minha casa. Agora mais por precaução, né?”.
        </p>
        <br />
        <p className="text_main">
          Ela não foi a única brasileira convidada para fazer testes com o
          produto antes do início das vendas no Brasil. No{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Site Oficial
          </a>
          da marca existem depoimentos de pelo menos mais 5 mulheres, de 33 até
          68 anos, que relataram suas experiências positivas com o produto.
        </p>
        <br />
        <Image
          url={
            "https://amazonicarosa.com.br/wp-content/uploads/2023/02/5vbiOJLT_mmY.webp"
          }
          sub={
            "Resultados das convidadas depois de 3 meses de tratamento. (Foto: Rosa Amazônica)"
          }
        />
        <br />
        <h1>Única Fórmula com Rosa Mosqueta da Amazônia</h1>
        <br />
        <p className="text_main">
          <strong>Rosa Mosqueta Amazônica:</strong> É muito provável que você já
          tenha lido ou escutado que a Rosa Mosqueta tem propriedades
          cicatrizantes e clareadoras, elo seu forte poder regenerador e
          fitoterápico. É extraído da espécie Rosa Aff rubiginosa oil (ou Rose
          Hips), originária da Ásia e hoje amplamente comercializada pelo Chile.
          Rico em ácidos graxos essenciais poli-insaturados, promove a renovação
          celular da epiderme, regenerando a pele afetada por manchas,
          cicatrizes ou queimaduras <strong>Porém</strong> uma variação dessa
          planta encontrata na Amazônia tem propriedades regenerativas
          encontradas em uma quantidade muito maior, quantidades que não podem
          ser obtidas normalmente. Algumas pesquisas apontam que o Rosa Mosqueta
          Amazônica é um nutriente pró-rejuvenescimento. Um estudo publicado em
          2018 na revista Biomedicines relata sobre propriedades biológicas da
          Rosa Amazônica , com destaque a sua capacidade atuar como um potente
          antioxidante, protegendo as células contra o estresse ôxidativo e
          estimulando a criação de células novas e jovens do zero.
        </p>
        <br />
        <p className="text_main">
          <strong>Ácido Hialurônico:</strong> O Ácido Hialurônico é uma
          substância natural produzida pelo nosso corpo, famoso por manter a
          hidratação e firmeza da pele. Mas, à medida que envelhecemos, essa
          produção diminui, reduzindo também a hidratação e elasticidade da
          pele;
        </p>
        <br />
        <p className="text_main">
          <strong>Colágeno Verisol:</strong>O colágeno é muito importante para
          manter as células firmes e unidas, sendo não só importante para a
          pele, mas também para outros tecidos; como para a integridade dos
          músculos, dos ligamentos, dos tendões e das articulações. Além disso
          hidrata o cabelo e estimula o crescimento de novos fios;
        </p>
        <br />
        <p className="text_main">
          <strong>Queratina Hidrolisada:</strong>Fortalece e regenera a pele, e
          restaura o brilho, conferindo uma pele mais lisa e limpa;
        </p>
        <br />
        <p className="text_main">
          <strong>Biotina: </strong>Combate as rugas e fortalece a pele. Além
          disso, também atua nas marcas de expressão, cabelo e unhas,
          fortalecendo-as;
        </p>
        <br />
        <p className="text_main">
          <strong>Metilsulfonilmetano:</strong> Favorece a nutrição da pele e
          atua combatendo as rugas;
        </p>
        <br />
        <p className="text_main">
          <strong>Retinol:</strong> Estimula a renovação celular e a síntese de
          colágeno no rosto;
        </p>
        <br />
        <p className="text_main">
          <strong>Niacina:</strong> Nutre as camadas de proteção da pele (derme
          e epiderme) e previne as rugas e marcas de expressão.
        </p>
        <br />
        <h1>Comparativo</h1>
        <br />
        <p className="text_main">
          Fizemos testes em laboratório com o{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Rosa Amazônica
          </a>{" "}
          para comparar sua eficácia em relação a outros produtos para pele que
          estão disponíveis no mercado brasileiro. Para isso, analisamos 15
          produtos e verificamos que 12 desses contém como base o ácido
          hialurônico em conjunto com colágeno. Os outros 5 apresentam ácido
          retinoico como ingrediente principal.
        </p>
        <br />
        <p className="text_main">
          Elaboramos o gráfico visual abaixo onde avaliamos três características
          principais dessas formulações, sendo elas o{" "}
          <strong>combate a rugas</strong> (quanto mais preenchido, maior o
          efeito com menos doses da suplementação);{" "}
          <strong>a aparência de pele mais jovem</strong> (quanto mais
          preenchido, maior a velocidade de crescimento em menos doses da
          suplementação); e por último, o{" "}
          <strong>combate das linhas de expressão</strong>
          (quanto mais preenchido, maior a intensidade com menos doses da
          suplementação).”
        </p>
        <br />
        <Image
          url={
            "https://amazonicarosa.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/Comparacao-2.jpg.webp"
          }
          sub={
            "Testes realizados comparando o Rosa Amazônica a outras duas fórmulas que estão em alta no Brasil. (Dados: Laboratório Brasil LTDA/SP)"
          }
        />
        <p className="text_main">
          Em todos os quesitos testados, a formulação do{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Rosa Amazônica
          </a>{" "}
          se saiu melhor que as outras duas, recebendo uma nota geral de 9,3. As
          outras duas fórmulas receberam a pontuação de 7,8 e 6,4 para ácido
          hialurônico em conjunto com colágeno, respectivamente.
        </p>
        <br />
        <p className="text_main">
          Assim nossos clientes tem <strong>risco zero</strong>, para conhecer e
          experimentar nosso produto. Essa é a prova máxima da confiança que
          temos em nossa fórmula exclusiva”, afirma o fabricante.
        </p>
        <br />
        {/* <h1>Funciona melhor em mulheres do que em homens</h1>
        <p className="text_main">
          Segundo a médica, o produto é direcionado ao{" "}
          <strong>público feminino</strong>. “É necessário ter em mente que o
          envelhecimento que ocorre nos homens tem causas diferentes daquela que
          atinge as mulheres. No sexo masculino a questão genética tem muito
          mais força. Nas mulheres o problema é quase sempre uma questão da
          deficiência de importantes nutrientes que compõem as 3 camadas de
          formação da pele. O <a href='https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58'>Rosa Amazônica</a> foi feito para sanar essa
          deficiência.” destaca.
        </p>
        <br />
        <p className="text_main">
          Quando perguntada sobre o uso do produto por homens, ela respondeu:
          “Não é que o produto não tenha eficácia em homens. Ele tem. Nós temos
          histórias de sucesso de homens que utilizaram. Quando lançamos a
          patente, nós fizemos testes em homens e mulheres. O resultado foi
          muito maior nas mulheres. Todavia, certamente o envelhecimento dos
          homens era algo genético, diferentemente das mulheres que era falta de
          vitaminas, que normalmente ocorre após os 30, 40 anos.” E enfatizou:
          “Como os homens no geral não se preocupam tanto com a aparência do
          rosto, as dosagens e a eficácia do produto foi desenvolvida para as
          mulheres, onde temos 99% de Eficácia nos testes feitos pelo FDA
          (Anvisa Americana). Nós inclusive damos as mulheres uma{" "}
          <strong>
            garantia de 90 dias pela confiança que temos no produto, resultado
            garantido ou dinheiro de volta.
          </strong>
          ” afirma..
        </p>
        <br />
        <Image
          url={
            "https://amazonicarosa.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/serum-skinceuticals-1024x681.jpeg.webp"
          }
          sub={
            "Eficácia da Rosa Mosqueta Amazônica. (Dados: Laboratório Brasil LTDA/SP)"
          }
        /> */}
        <h1>Como funciona a garantia de 90 dias?</h1>
        <br />
        <p className="text_main">
          De acordo com o fabricante, o produto já é conhecido por
          disponibilizar <strong>garantia de 90 dias</strong> nas vendas em toda
          os Estados Unidos e para alguns países da Europa. Com a chegada ao
          mercado brasileiro, o Brasil será incluído na lista de países
          beneficiados. Com isso, ao adquirir três potes ou mais, para iniciar o
          tratamento por 90 dias, o fabricante se propõe a reembolsar a cliente,
          caso não exista combate a Rugas, Linhas de Expressão ou Bigode Chinês,
          num período de 90 dias desde o início do tratamento, bastando apenas
          seguir as regras da promoção, que estão disponibilizadas no{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Site Oficial
          </a>
          .
        </p>
        <br />
        <p className="text_main">
          Assim nossos clientes tem <strong>risco zero</strong>, para conhecer e
          experimentar nosso produto. Essa é a prova máxima da confiança que
          temos em nossa fórmula exclusiva”, afirma o fabricante.
        </p>
        <br />
        <p className="text_main">
          A marca{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Amazony
          </a>{" "}
          solicitou o registro para importação e comercialização da Rosa
          Mosqueta Amazônica no mercado brasileiro no final de 2022. No entanto,
          somente em janeiro a{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">Anvisa</a>{" "}
          deu o parecer favorável à sua comercialização em território nacional.
          “Estávamos em busca de novos mercados e percebemos que o Brasil é um
          dos únicos países em que os produtos para tratamento da pele são
          praticamente iguais, com a variações mínimas da mesma fórmula. Uma
          fórmula que não tem eficácia alguma.” enfatiza a{" "}
          <strong>Dra. Cristina Bensoussan</strong> , renomada dermatologista
          americana que atua no Texas e é chefe de pesquisas do Amazony.
        </p>
        <br />
        <p className="text_main">
          “É até absurdo saber que a legislação no Brasil permite a
          comercialização de produtos sem que eles precisem comprovar a sua
          eficácia.” admite a médica. “Quando uma cliente procura por um
          produto, ela necessita ter garantias de que aquilo que ela investiu o
          seu dinheiro vai realmente funcionar, sobretudo, quando se trata de
          uma parte do corpo importantíssima para sua{" "}
          <strong>autoestima</strong>, como é o seu rosto.” ressalta!
        </p>
        <br />
        <p className="text_main">
          Rosa Amazônica tem alta concentração de matéria prima sendo que 3
          gotas por dia são suficientes para transformar a sua pele.
        </p>
        <br />
        <Image
          url={
            "https://amazonicarosa.com.br/wp-content/uploads/2023/02/giphy_480x480.webp"
          }
          sub={
            "3 Gotas é o bastante para transformar a sua pele. (Foto: Anti Age Magazine)"
          }
        />
        <br />
        <h1>Existem contraindicações ou efeitos colaterais?</h1>
        <br />
        <p className="text_main">
          Segundo o fabricante, o{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Rosa Amazônica
          </a>{" "}
          é um serum natural e não apresenta contraindicação ou efeito
          colateral. Isso significa que mesmo pessoas portadoras de doenças
          crônicas podem fazer uso do produto. Entretanto, é aconselhável a
          grávidas e mulheres amamentando que consultem o médico antes do início
          da suplementação.
        </p>
        <br />
        <h1>A maneira correta de ingestão</h1>
        <br />
        <p className="text_main">
          Para resultados satisfatórios, é recomendado usar o sérum{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Rosa Amazônica
          </a>{" "}
          2 vezes ao dia, exatamente nas a num intervalo de 12 horas, sendo pela
          e a noite com a pele limpa e seca. Cada dose tem quantidade suficiente
          para garantir um intenso efeito do produto no organismo por 8 até 13
          horas.
        </p>
        <br />
        <h1>Quanto custa?</h1>
        <br />
        <p className="text_main">
          O preço do Tratamento do{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Rosa Amazônica
          </a>{" "}
          varia de acordo com a quantidade de frascos adquiridos. O fabricante
          trabalha com descontos progressivos, ou seja, quanto mais frascos você
          adquirir, maior será o desconto no valor final.
        </p>
        <Image
          url={
            "https://amazonicarosa.com.br/wp-content/uploads/2023/02/foto-3_480x480.webp"
          }
          sub={
            "Antes e Depois, Rosa Mosqueta Amazônica. (Foto: Reprodução/Murilo Serra G1)."
          }
        />
        <br />
        <h1>Onde Comprar</h1>
        <br />
        <p className="text_main">
          No Brasil, assim como nos Estados Unidos com a pandemia, o{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Rosa Amazônica
          </a>{" "}
          trabalhará apenas com o sistema de vendas online, onde o cliente
          poderá adquirir pelo site oficial e receber no conforto da sua casa.
          CUIDADO: A marca{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Amazony
          </a>{" "}
          não vende pelo Mercado Livre, OLX, ou outros sites. Certifique-se
          estar comprando o produto{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            ORIGINAL
          </a>
          , por isso, sempre adquira do{" "}
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Site Oficial
          </a>
          .
        </p>
        <br />
        <h1>Oportunidade Especial Para Nossos Leitores</h1>
        <br />
        <p className="text_main">
          Durante a produção dessa reportagem, o fabricante entrou em contato
          com nossa produção e ofereceu um <strong>Desconto Especial</strong> e
          a condição de parcelamento em até 12x no cartão de crédito para nossos
          leitores que estiverem interessados em experimentar o
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            Rosa Amazônica
          </a>
          .
        </p>
        <br />
        <p className="text_main">
          <strong>Atenção:</strong> O desconto é válido apenas enquanto durarem
          os estoques, e é aplicado automaticamente ao clicar na imagem abaixo.
        </p>
        <br />
        <div className="desc display-flex">
          <h3 style={{ textTransform: "uppercase" }}>
            Oportunidade Especial Para Nossos Leitores
          </h3>
          <p>Válida somente hoje:</p>
          <a
            href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58"
            className="link1"
          >
            EXPERIMENTE ROSA AMAZONICA EM 12X COM ATÉ 75% DE DESCONTO!
          </a>
          <a
            href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58"
            className="link2"
          >
            ÚLTIMAS 14 UNIDADES COM DESCONTO
          </a>
          <a href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58">
            <img src="https://amazonicarosa.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/5-3-1024x1024.png.webp" />
          </a>
          <a
            href="https://ev.braip.com/ref?pv=proeo8oe&af=afi78pp58"
            className="button"
          >
            Comprar Agora
            <br />
            <p style={{ fontWeight: 500, opacity: 0.8, lineHeight: 1 }}>
              SATISFAÇÃO GARANTIDA OU DEVOLVEMOS SEU DINHEIRO
            </p>
          </a>
        </div>
        <div className="faq">
          <h2>
            <strong>138</strong>Comentarios
          </h2>
          <p id="abbt">
            Os comentários são de responsabilidade exclusiva de seus autores e
            não representam a opinião deste site. Se achar algo que viole os
            termos de uso, denuncie. Leia as perguntas mais frequentes para
            saber o que é impróprio ou ilegal.
          </p>
          <div className="user display-flex">
            <img src="https://amazonicarosa.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/images.jpg.webp" />
            <div className="info display-flex">
              <span>Amanda Ferreira</span>
              <p>HÁ 1 DIA</p>
              <p className="text">
                Amo esse produtooo! Comprei a primeira vez quando visite a
                america em 2018.. Até comprei algumas vezes depois mas pra
                importar em dólar ficava muito caro! ainda bem que chegou aqui..
                já vou olhar o site pra comprar
              </p>
            </div>
          </div>
          <div className="user display-flex">
            <img src="https://amazonicarosa.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/images-3.jpg.webp" />
            <div className="info display-flex">
              <span>Nicolle Almeida</span>
              <p>HÁ 1 DIA</p>
              <p className="text">
                Eu também sempre importava e pagava caro, agora que a formulação
                chegou no Brasil fica muito mas fácil rs
              </p>
            </div>
          </div>
          <div className="user display-flex">
            <img src="https://amazonicarosa.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2023/02/images-1.jpg.webp" />
            <div className="info display-flex">
              <span>Maria Aparecida Vasconselos</span>
              <p>HÁ 1 DIA</p>
              <p className="text">
                Com 20 dias de uso eu já senti muita diferença, meu rosto está
                mais firme e as rugas estão sumindo, to me sentindo novinha
              </p>
            </div>
          </div>
          <p style={{ marginTop: "20px", fontWeight: 500 }}>
            Este conteúdo não recebe mais comentários
          </p>
        </div>
      </div>
      <footer className="display-flex">
        <span>
          G1
          <br />© Copyright 2000-2020 G1 Participações S.A.
        </span>
      </footer>
    </Container>
  );
};
export default Header;
