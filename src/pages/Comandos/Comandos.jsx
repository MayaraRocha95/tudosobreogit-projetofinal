import Titulo from './Titulo';
import Paragrafo from './Paragrafo';
import Subtitulo from './Subtitulo';
import CaixaComandos from './CaixaComandos';
import Imagem from './ImagemExemplos';
import GitStatus from '../../assets/git-status.png';
import './comandos.css';

function Comandos() {
  return (
    <>
    <div className="indice-caixa">
      <Titulo title="Indice" />
     <ul  className="list-ul">
        <li className="list" ><a href="#titulo1">Comandos mais utilizados no Git</a></li>
        <li className="list"><a href="#titulo2">Configurações em geral</a></li>
        <li className="list"><a href="#titulo3">Adicionando alterações</a></li>
        <li className="list"><a href="#titulo4">Salvando as alterações</a></li>
        <li className="list"><a href="#titulo5">Verificando o que foi alterado</a></li>
        <li className="list"><a href="#titulo6">Trabalhando com branches</a></li>
        <li className="list"><a href="#titulo7">Apagando, movendo ou renomeando arquivos ou pastas sem estragar nosso histórico Git </a></li>
        <li className="list"><a href="#titulo8">Revertendo alterações</a></li>
        <li className="list"><a href="#titulo9">Desfazendo para um commit específico</a></li>
        <li className="list"><a href="#titulo10">Analisando o histórico (log)</a></li>
        <li className="list"><a href="#titulo11">Utilizando tags</a></li>
        <li className="list"><a href="#titulo12">Utilizando stash </a></li>
        <li className="list"><a href="#refe"> Referências</a></li>
      </ul>
      </div>
    <center>
     
      <div id="titulo1">
      <Titulo  title="Comandos mais utilizados no Git" />
      <Subtitulo title="Verificando as configurações locais" />
      <Paragrafo>
        Quando trocamos de máquina podemos fazer um commit com um usuário ou
        email diferente, e isso pode estragar nosso histórico no Git. Para
        verificar as configurações locais podemos usar o comando:
      </Paragrafo>
      <div className="caixa-comandos">
        <CaixaComandos><font color="orange">git</font> config --list</CaixaComandos>
      </div>
      <Paragrafo>
        Mas os mais comuns são para verificarmos o nome de usuário, email,
        editor e merge tool.
      </Paragrafo>
      <Subtitulo title="Para encontrar o nome de usuário" />
      <div className="caixa-comandos">
        <CaixaComandos><font color="orange">git</font> config --global user.name</CaixaComandos>
      </div>
      <Subtitulo title="Para encontrar o email" />
      <div className="caixa-comandos">
        <CaixaComandos><font color="orange">git</font> config --global user.email</CaixaComandos>
      </div>
      </div>
      <div id="titulo2">
      <Titulo title="Configurações em geral" />
      <Subtitulo title="Cadastrar usuário" />
      <div className="caixa-comandos">
        <CaixaComandos>
        <font color="orange">git</font> config --global user.name "Seu-nome"
          <br />
          <font color="orange">git</font> config --global user.email seuemail@dominio.com.br
        </CaixaComandos>
      </div>
      <Subtitulo title="Lista configurações" />
      <div className="caixa-comandos"><font color="orange">git</font> config --list</div>
      <Subtitulo title="Iniciar um repositório" />
      <Paragrafo>
        Na pasta que será o novo repositório Git, execute o comando:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> init</div>
      <Subtitulo title="Clonar/Baixar um repositório " />
      <Paragrafo>
        Para baixar um repositório do GitHub, Bitbucket, GitLab ou qualquer que
        seja o servidor do nosso projeto, devemos rodar o comando git clone com
        o link do repositório.
      </Paragrafo>
      <div className="caixa-comandos">
      <font color="orange">git</font> clone link (Endereço do repositório)
      </div>
      <Subtitulo title="Baixar as últimas alterações do servidor" />
      <Paragrafo>
        Quando algo estiver diferente no nosso repositório remoto (no servidor),
        podemos baixar para a nossa máquina com o comando pull.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> pull</div>
      <Subtitulo title="Listando o caminho do servidor" />
      <Paragrafo>
        Para sabermos para onde estão sendo enviadas nossas alterações ou de
        onde estamos baixando as coisas, rodamos:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> remote -v</div>
      <Subtitulo title="Adicionando o caminho do servidor" />
      <Paragrafo>
        Caso tenhamos criado o repositório localmente antes de criar no
        servidor, podemos adicionar o caminho com o comando set-url.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> remote set-url origin git://url</div>
      </div>
      <div id="titulo3">
      <Titulo title="Adicionando alterações" />
      <Paragrafo>
        Quando alteramos algo, devemos rodar o comando git add para adicionar ao
        index e depois fechar um commit.
      </Paragrafo>
      <Subtitulo title="Adicionando um arquivo" />
      <div className="caixa-comandos"><font color="orange">git</font> add nome_do_arquivo</div>
      <Subtitulo title="Adicionando tudo de uma vez" />
      <div className="caixa-comandos"><font color="orange">git</font> add .</div>
      <Paragrafo>
        OBS: Cuidado com esse comando, pois você pode adicionar algo que não
        queria. Também podemos rodar git commit com o parâmetro -am, onde
        adicionamos tudo de uma vez e já deixamos uma mensagem para o commit.
        Exemplo:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> commit -am "add tudo"</div>
      <Subtitulo title="Removendo arquivos do index" />
      <Paragrafo>
        Para remover um arquivo do stage rodamos o comando reset.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> reset nome_do_arquivo</div>
      <Paragrafo>Para remover tudo podemos fazer:</Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> reset HEAD .</div>
      </div>
      <div id="titulo4">
      <Titulo title="Salvando as alterações " />
      <Paragrafo>
        Quando adicionamos com o git add ainda não estamos persistindo os dados
        no histórico do Git, mas adicionando a uma área temporária onde podemos
        ficar levando e trazendo alterações até garantirmos que algo realmente
        deve ser salvo, então rodamos o git commit. Para fazer um commit,
        precisamos adicionar uma mensagem ao pacote, então rodamos com o
        parâmetro -m "mensagem". Depois de ter adicionado as alterações com git
        add, rodamos:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> commit -m "mensagem"</div>
      </div>
      <div id="titulo5">
      <Titulo title="Verificando o que foi alterado" />
      <Paragrafo>
        Para sabermos se tem algo que foi modificado em nossa branch, rodamos o
        comando git status.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> status</div>
      <Imagem imagem={GitStatus} />
      <Paragrafo>
        Será retornado uma lista de itens que foram alterados. Para saber o que
        exatamente aconteceu rodamos o comando git diff.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> diff</div>
      <Paragrafo>
        Caso tenhamos mais de um arquivo alterados por vez, podemos analisar
        todo o histórico com git diff ou observar somente um arquivo com git
        diff nome_do_arquivo.
      </Paragrafo>
      </div>
      <div id="titulo6">
      <Titulo title="Trabalhando com branches" />
      <Subtitulo title="Listando as branches existentes" />
      <div className="caixa-comandos"><font color="orange">git</font> branch</div>
      <Subtitulo title="Criando uma nova branch" />
      <Paragrafo>
        Podemos rodar o comando git branch ou git checkout, conforme os
        exemplos:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> branch nome</div>
      <Subtitulo title="Criando uma nova branch e já trocando para ela" />
      <div className="caixa-comandos"><font color="orange">git</font> checkout -b nome_da_nova_branch</div>
      <Subtitulo title="Deletando uma branch" />
      <div className="caixa-comandos"><font color="orange">git</font> branch -d nome</div>
      <Subtitulo title="Trocando de branch" />
      <div className="caixa-comandos">
      <font color="orange">git</font> checkout nome_da_branch_existente
      </div>
      <Subtitulo title="Enviando uma branch para o servidor" />
      <Paragrafo>
        Caso tenhamos criado uma branch em nossa máquina, precisamos enviar ela
        para o servidor com o comando push, explicado mais abaixo neste texto, e
        passar alguns parâmetros que são o origin e nome da branch.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> push origin nome_da_branch</div>
      <Paragrafo>
        Podemos mandar todas as novas branches locais para o servidor rodando:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> push --all origin</div>
      <Subtitulo title="Deletando uma branch remota" />
      <Paragrafo>
        Para deletar uma branch do servidor, rodamos o comando:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> push origin :nome_da_branch</div>
      <Subtitulo title="Juntando branches" />
      <Paragrafo>
        Quando trabalhamos com branches, mais cedo ou mais tarde, vamos precisar
        juntar as nossas alterações com a branch master. Para isso usamos o
        comando merge. Exemplo: Imagina que vamos fazer um merge da branch
        nome_branch na master.
      </Paragrafo>
      <div className="caixa-comandos">
      <font color="orange">git</font> checkout master
        <br />
        <font color="orange">git</font> merge nome_branch
      </div>
      <Subtitulo title="Enviando as alterações para o servidor" />
      <Paragrafo>
        Depois que finalizamos nossas alterações, fechamos nossos commits, então
        devemos enviar os commits para o servidor. Para isso rodamos o comando:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> push origin master</div>
      </div>
      <div id="titulo7">
      <Titulo title="Apagando, movendo ou renomeando arquivos ou pastas sem estragar nosso histórico Git" />
      <Paragrafo>
        Quando deletamos algum arquivo, movemos de pastas, o Git fica com um
        histórico de deleção de arquivo e adição de outro. Para que isso não
        aconteça, existem comandos do Git que salvam nossas vidas, o git rm,
        para deletar, e git mv, para movermos coisas.
      </Paragrafo>
      <Subtitulo title="Deletando arquivo ou pasta com Git" />
      <div className="caixa-comandos"><font color="orange">git</font> rm nome_do_arquivo_ou_pasta</div>
      <Paragrafo>
        Lembrando que, para remover pastas, é sempre necessário que ela esteja
        vazia ou que executemos o comando rm com o parâmetro -r para que a
        deleção seja recursiva.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> rm -r pasta</div>
      <Subtitulo title="Movendo ou renomeando arquivo ou pasta com Git" />
      <div className="caixa-comandos">
      <font color="orange">git</font> mv nome_do_arquivo_ou_pasta destino</div>
      </div>
      <div id="titulo8">
      <Titulo title="Revertendo alterações" />
      <Paragrafo>
        Existem diversas maneiras de desfazer coisas com o Git.
      </Paragrafo>
      <Subtitulo title="Desfazendo do stage " />
      <div className="caixa-comandos"><font color="orange">git</font> reset nome_do_arquivo</div>
      <Paragrafo>Para desfazer tudo podemos fazer:</Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> reset HEAD .</div>
      <Subtitulo title="Desfazendo alterações em um arquivo para o último commit " />
      <div className="caixa-comandos"><font color="orange">git</font> checkout nome_do_arquivo</div>
      <Subtitulo title="Desfazendo tudo para o último commit " />
      <div className="caixa-comandos"><font color="orange">git</font> checkout .</div>
      <Subtitulo title="Desfazendo uma alteração, mas colocando ela em stage " />
      <div className="caixa-comandos"><font color="orange">git</font> reset --soft HEAD~1</div>
      <Paragrafo>Onde HEAD~1 é relacionado ao último commit.</Paragrafo>
      <Subtitulo title="Desfazendo para o último commit sem colocar as alterações em stage" />
      <div className="caixa-comandos"><font color="orange">git</font> reset --hard HEAD~1</div>
      </div>
      <div id="titulo9">
      <Titulo title="Desfazendo para um commit específico" />
      <Paragrafo>
        Devemos procurar o hash do commit no histórico do Git e então executar:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> revert hash</div>
      <Paragrafo>Exemplo:</Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> revert ecdd2</div>
      <Paragrafo>
        Onde ecdd2 são os cinco primeiros caracteres de um hash no meu log (que
        seria algo como ecdd2d09783b7d6fcd3b42dfdcf11cbd0644ac07).
      </Paragrafo>
      <Subtitulo title="Desfazendo o último push" />
      <div className="caixa-comandos">
      <font color="orange">git</font> reset --hard HEAD~1 && git push -f origin master
      </div>
      <Paragrafo>OBS: Sempre tome cuidado ao usar o parâmetro -f.</Paragrafo>
      </div>
      <div id="titulo10">
      <Titulo title="Analisando o histórico (log)" />
      <Paragrafo>
        Para ver todo o histórico podemos rodar o comando log.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> log</div>
      </div>
      <div id="titulo11">
      <Titulo title="Utilizando tags" />
      <Subtitulo title="Criar uma tag Git" />
      <Paragrafo>
        Rodamos o comando tag com o parâmetro que seria o nome da tag que
        queremos colocar. <br />
        Exemplo:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> tag 0.0.1</div>
      <Subtitulo title="Listando as tags Git" />
      <Paragrafo>
        Para listar as tags existentes, rodamos o comando tag sem parâmetro.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> tag </div>
      <Subtitulo title="Criar uma tag com mensagem (anotada)" />
      <Paragrafo>Utilizamos o parâmetro -a e -m:</Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> tag -a 0.0.1 -m "versão 0.0.1"</div>
      <Subtitulo title="Criar uma tag a partir de um commit" />
      <Paragrafo>
        Podemos criar a tag referenciando um commit utilizando o hash do commit
        (que encontramos no histórico) com o comando -a.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> tag -a 0.0.1 b6120</div>
      <Subtitulo title="Criando a tag no servidor" />
      <Paragrafo>Podemos criar somente uma tag específica:</Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> push origin 0.0.1</div>
      <Paragrafo>Ou mandar todas de uma só vez:</Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> push origin --tags</div>
      </div>
      <div id="titulo12">
      <Titulo title="Utilizando stash " />
      <Paragrafo>
        Para armazenar algo no stash (uma área temporária onde guardamos o
        histórico sem realmente adicionar na master) podemos utilizar os
        seguintes comandos.
      </Paragrafo>
      <Subtitulo title="Salvar tudo no stash" />
      <div className="caixa-comandos"><font color="orange">git</font> stash</div>
      <Subtitulo title="Salvando no stash com descrição" />
      <Paragrafo>
        Quando precisamos salvar algo no stash para trocarmos de estado várias
        vezes e verificar como fica nesses estados, como em um protótipo,
        podemos fazer:
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> stash save -u "mensagem"</div>
      <Subtitulo title="Listando o que existe em stash" />
      <div className="caixa-comandos"><font color="orange">git</font> stash list</div>
      <Subtitulo title="Revertendo para o stash e removendo da lista" />
      <Paragrafo>
        Podemos reverter nossas alterações para o stash e ainda remover uma
        entrada do stash list fazendo o seguinte: Removendo a última entrada na
        lista.
      </Paragrafo>
      <div className="caixa-comandos"><font color="orange">git</font> stash pop</div>
      <Subtitulo title="Revertendo para o stash" />
      <Paragrafo>
        A última entrada da lista, mas sem remover do stash:
      </Paragrafo>
      <div className="caixa-comandos"> <font color="orange">git</font> stash apply</div>
   
      </div>
         <div  id="refe"className="referencias">
        <Titulo  title="Referências" />
        <ul className="list-ul">
          <li className="list">
            <a
              target="_blank"
              href="https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html"
            >
              Basic Git commands - Atlassian
            </a>
            
          </li>
          <li className="list">
          
            <a
              target="_blank"
              href="https://woliveiras.com.br/posts/comandos-mais-utilizados-no-git/#Paraencontraroemail"
            >
              William Oliveira
            </a>
          </li>
          <li className="list">
            <a target="_blank" href="https://comandosgit.github.io/#instalando-e-configurando">Comandos Git</a></li>
        </ul><br />
            <br />
      </div>
    </center>
    <a className="btn-top"href="#">  	&uarr; Topo</a>
    </>
  );
}

export default Comandos;
